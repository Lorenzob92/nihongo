"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Activity, ChevronRight, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";
import { JapaneseText } from "@/components/japanese/JapaneseText";
import { cn } from "@/lib/utils";
import {
  items as ITEM_BANK,
  adaptiveLogic,
  scoringWeights,
  lessonRecommendationMap,
  auditDrivenPriorityLessons,
  axisTieBreakerOrder,
} from "@/data/diagnostic/content";
import type {
  DiagnosticItem,
  DiagnosticSection,
  ItemDifficulty,
} from "@/data/diagnostic/content";

const SECTIONS: DiagnosticSection[] = ["kanji", "vocab", "grammar", "listening"];
const SECTION_LABELS: Record<DiagnosticSection, string> = {
  kanji: "Kanji",
  vocab: "Vocab",
  grammar: "Grammar",
  listening: "Listening",
};

const STORAGE_KEY = "diagnostic.results";

type Answer = {
  itemId: string;
  section: DiagnosticSection;
  difficulty: ItemDifficulty;
  correct: boolean;
};

type SectionScore = {
  section: DiagnosticSection;
  score: number;
  band: string;
  itemsAnswered: number;
  inconclusive: boolean;
};

function pickItemForBand(
  section: DiagnosticSection,
  band: ItemDifficulty,
  used: Set<string>,
): DiagnosticItem | null {
  // Try the requested band first; fall back to nearby bands if exhausted.
  const ladder = adaptiveLogic.bandLadder;
  const idx = ladder.indexOf(band);
  const order: ItemDifficulty[] = [band];
  for (let off = 1; off < ladder.length; off++) {
    if (idx - off >= 0) order.push(ladder[idx - off]);
    if (idx + off < ladder.length) order.push(ladder[idx + off]);
  }
  for (const b of order) {
    const candidates = ITEM_BANK.filter(
      (it) => it.section === section && it.difficulty === b && !used.has(it.id),
    );
    if (candidates.length > 0) return candidates[0];
  }
  return null;
}

function computeScore(
  section: DiagnosticSection,
  answers: Answer[],
): SectionScore {
  const sectionAnswers = answers.filter((a) => a.section === section);
  if (sectionAnswers.length < scoringWeights.inconclusiveItemFloor) {
    return {
      section,
      score: 0,
      band: "inconclusive",
      itemsAnswered: sectionAnswers.length,
      inconclusive: true,
    };
  }
  let raw = 0;
  let max = 0;
  for (const a of sectionAnswers) {
    const w = scoringWeights.bandWeight[a.difficulty];
    max += w;
    if (a.correct) raw += w;
  }
  const normalised = max === 0 ? 0 : Math.round((raw / max) * 100);
  const bandRow = scoringWeights.scoreToBand.find(
    (r) => normalised >= r.min && normalised <= r.max,
  );
  return {
    section,
    score: normalised,
    band: bandRow?.label ?? "N5",
    itemsAnswered: sectionAnswers.length,
    inconclusive: false,
  };
}

function recommendLessons(scores: SectionScore[]): string[] {
  const valid = scores.filter((s) => !s.inconclusive);
  if (valid.length === 0) return auditDrivenPriorityLessons.slice(0, 5);

  // Sort ascending by score (lowest first)
  const sorted = [...valid].sort((a, b) => {
    if (a.score !== b.score) return a.score - b.score;
    return (
      axisTieBreakerOrder.indexOf(a.section) -
      axisTieBreakerOrder.indexOf(b.section)
    );
  });

  const lowest = sorted[0];
  const second = sorted[1] ?? sorted[0];
  const recs: string[] = [];

  const lowestPool = lessonRecommendationMap[lowest.section]?.[lowest.band] ?? [];
  recs.push(...lowestPool.slice(0, 2));

  const secondPool = lessonRecommendationMap[second.section]?.[second.band] ?? [];
  for (const slug of secondPool) {
    if (!recs.includes(slug)) recs.push(slug);
    if (recs.length >= 3) break;
  }

  // Always boost audit priority gaps
  for (const slug of auditDrivenPriorityLessons) {
    if (!recs.includes(slug)) recs.push(slug);
    if (recs.length >= 5) break;
  }

  return recs.slice(0, 5);
}

export function DiagnosticClient() {
  const [phase, setPhase] = useState<"intro" | "running" | "done">("intro");
  const [sectionIdx, setSectionIdx] = useState(0);
  const [currentBand, setCurrentBand] = useState<ItemDifficulty>("N4-low");
  const [used, setUsed] = useState<Set<string>>(new Set());
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [currentItem, setCurrentItem] = useState<DiagnosticItem | null>(null);
  const [groupResults, setGroupResults] = useState<boolean[]>([]);
  const [stableGroups, setStableGroups] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const section = SECTIONS[sectionIdx];

  // Initialise current band when section changes
  useEffect(() => {
    if (phase === "running" && section) {
      setCurrentBand(adaptiveLogic.seedBand[section]);
      setGroupResults([]);
      setStableGroups(0);
    }
  }, [phase, section]);

  // Pick the next item whenever needed
  useEffect(() => {
    if (phase !== "running" || !section) return;
    if (currentItem === null) {
      const item = pickItemForBand(section, currentBand, used);
      if (item) {
        setCurrentItem(item);
        setSelected(null);
        setRevealed(false);
      } else {
        // No items left for this section — finalise
        advanceSection();
      }
    }
  }, [phase, section, currentBand, currentItem, used]);

  const begin = () => {
    setPhase("running");
    setSectionIdx(0);
    setUsed(new Set());
    setAnswers([]);
    setGroupResults([]);
    setStableGroups(0);
    setCurrentBand(adaptiveLogic.seedBand.kanji);
    setCurrentItem(null);
  };

  const restart = () => {
    if (typeof window !== "undefined") localStorage.removeItem(STORAGE_KEY);
    setPhase("intro");
  };

  const advanceSection = () => {
    if (sectionIdx + 1 < SECTIONS.length) {
      setSectionIdx((i) => i + 1);
      setCurrentItem(null);
    } else {
      finalise();
    }
  };

  const finalise = () => {
    const scores = SECTIONS.map((s) => computeScore(s, answers));
    const recs = recommendLessons(scores);
    if (typeof window !== "undefined") {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ scores, recommendations: recs, completedAt: Date.now() }),
      );
    }
    setPhase("done");
  };

  const submitAnswer = (idx: number) => {
    if (!currentItem) return;
    if (revealed) return;
    setSelected(idx);
    setRevealed(true);

    const correctIndex = "correctIndex" in currentItem ? currentItem.correctIndex : -1;
    const correct = idx === correctIndex;

    const newAnswers: Answer[] = [
      ...answers,
      {
        itemId: currentItem.id,
        section: currentItem.section,
        difficulty: currentItem.difficulty,
        correct,
      },
    ];
    const newUsed = new Set(used);
    newUsed.add(currentItem.id);
    const newGroup = [...groupResults, correct];

    setAnswers(newAnswers);
    setUsed(newUsed);
    setGroupResults(newGroup);
  };

  const next = () => {
    if (!currentItem) return;
    const sectionAnswerCount =
      answers.filter((a) => a.section === section).length;

    let newBand = currentBand;
    let newGroup = groupResults;
    let newStable = stableGroups;

    if (groupResults.length >= adaptiveLogic.groupSize) {
      const accuracy =
        groupResults.filter(Boolean).length / groupResults.length;
      const ladder = adaptiveLogic.bandLadder;
      const idx = ladder.indexOf(currentBand);
      let escalated = false;
      let deescalated = false;
      if (accuracy >= adaptiveLogic.escalateAt && idx < ladder.length - 1) {
        newBand = ladder[idx + 1];
        escalated = true;
      } else if (accuracy < adaptiveLogic.deEscalateAt && idx > 0) {
        newBand = ladder[idx - 1];
        deescalated = true;
      }
      newStable = !escalated && !deescalated ? stableGroups + 1 : 0;
      newGroup = [];
    }

    const minItems = adaptiveLogic.minItemsPerSection[section];
    const maxItems = adaptiveLogic.maxItemsPerSection[section];

    setCurrentBand(newBand);
    setGroupResults(newGroup);
    setStableGroups(newStable);

    const reachedMax = sectionAnswerCount >= maxItems;
    const reachedMin = sectionAnswerCount >= minItems;
    const stable = newStable >= adaptiveLogic.stableGroupsRequired;

    if (reachedMax || (reachedMin && stable)) {
      setCurrentItem(null);
      advanceSection();
    } else {
      setCurrentItem(null);
    }
  };

  const sectionProgress = useMemo(() => {
    if (phase !== "running" || !section) return 0;
    const sectionAnswerCount = answers.filter((a) => a.section === section).length;
    const min = adaptiveLogic.minItemsPerSection[section];
    return Math.min(sectionAnswerCount / min, 1);
  }, [answers, phase, section]);

  const totalProgress = useMemo(() => {
    if (phase !== "running") return 0;
    const totalMin = SECTIONS.reduce(
      (sum, s) => sum + adaptiveLogic.minItemsPerSection[s],
      0,
    );
    return Math.min(answers.length / totalMin, 1);
  }, [answers, phase]);

  if (phase === "intro") {
    return (
      <main className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-ink"
        >
          <ArrowLeft className="h-3 w-3" /> Hub
        </Link>

        <header className="mt-6 space-y-3">
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-[12px] bg-accent-soft text-accent-deep">
              <Activity className="h-5 w-5" />
            </span>
            <Pill tone="recommend">Live</Pill>
          </div>
          <h1 className="font-display text-3xl text-ink-deep sm:text-4xl">
            Adaptive placement diagnostic
          </h1>
          <p className="max-w-2xl text-sm text-muted">
            Four sections (kanji, vocab, grammar, listening). Adaptive: starts at N4-low and adjusts based on rolling accuracy. ~15 minutes total. Output: a 4-axis level estimate plus your top 5 recommended lessons.
          </p>
        </header>

        <section className="mt-8 grid gap-3 sm:grid-cols-2">
          {SECTIONS.map((s) => (
            <div key={s} className="rounded-[16px] border border-line bg-surface p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">{SECTION_LABELS[s]}</p>
              <p className="mt-1 font-display text-lg text-ink-deep">
                {adaptiveLogic.minItemsPerSection[s]}–{adaptiveLogic.maxItemsPerSection[s]} items
              </p>
              <p className="text-xs text-muted">
                Seed: {adaptiveLogic.seedBand[s]}
              </p>
            </div>
          ))}
        </section>

        <div className="mt-8 flex gap-2">
          <Button variant="primary" onClick={begin}>
            Start diagnostic <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </main>
    );
  }

  if (phase === "done") {
    const scores = SECTIONS.map((s) => computeScore(s, answers));
    const recs = recommendLessons(scores);
    return (
      <main className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-ink"
        >
          <ArrowLeft className="h-3 w-3" /> Hub
        </Link>

        <header className="mt-6 space-y-3">
          <h1 className="font-display text-3xl text-ink-deep sm:text-4xl">Your diagnostic results</h1>
          <p className="text-sm text-muted">
            Saved locally in your browser. Postgres persistence in Phase 2.
          </p>
        </header>

        <section className="mt-8 grid gap-3 sm:grid-cols-2">
          {scores.map((s) => (
            <div key={s.section} className="rounded-[16px] border border-line bg-surface p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">{SECTION_LABELS[s.section]}</p>
              <div className="mt-1 flex items-baseline gap-3">
                <p className="font-display text-3xl text-ink-deep">{s.inconclusive ? "—" : s.score}</p>
                <Pill tone="accent">{s.band}</Pill>
              </div>
              <p className="mt-2 text-xs text-muted">{s.itemsAnswered} items answered</p>
            </div>
          ))}
        </section>

        <section className="mt-8 rounded-[16px] border border-line bg-surface p-5">
          <h2 className="font-display text-xl text-ink-deep">Recommended next 5 lessons</h2>
          <ol className="mt-3 space-y-2 text-sm">
            {recs.map((slug, i) => (
              <li
                key={slug}
                className="flex items-center justify-between gap-3 rounded-[10px] border border-line bg-surface-soft p-3"
              >
                <span>
                  <span className="mr-2 font-mono text-[11px] text-muted">{i + 1}.</span>
                  <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[12px] text-ink">{slug}</code>
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-3 text-[11px] text-muted-soft">
            These slugs are diagnostic recommendations from a tagged pool. Some are not yet built — Phase 2 will map them to live lesson slugs in the curriculum.
          </p>
        </section>

        <div className="mt-8 flex gap-2">
          <Button variant="secondary" onClick={restart}>
            <RotateCcw className="h-4 w-4" /> Retake
          </Button>
          <Link
            href="/lessons"
            className="inline-flex items-center justify-center gap-2 rounded-[12px] bg-accent px-4 py-2.5 text-sm font-medium text-white hover:bg-accent-deep"
          >
            Open lessons
          </Link>
        </div>
      </main>
    );
  }

  // running
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <Pill tone="accent">{SECTION_LABELS[section]}</Pill>
          <Pill tone="muted">Band: {currentBand}</Pill>
          <Pill tone="muted">{answers.filter((a) => a.section === section).length}/{adaptiveLogic.minItemsPerSection[section]}+</Pill>
        </div>
        <button
          type="button"
          onClick={restart}
          className="text-xs text-muted hover:text-ink"
        >
          Restart
        </button>
      </div>

      <div className="mb-6 h-1.5 w-full overflow-hidden rounded-full bg-line">
        <div
          className="h-full bg-accent transition-all"
          style={{ width: `${Math.round(totalProgress * 100)}%` }}
        />
      </div>

      <AnimatePresence mode="wait">
        {currentItem ? (
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="rounded-[16px] border border-line bg-surface p-5 sm:p-7"
          >
            <ItemView
              item={currentItem}
              selected={selected}
              revealed={revealed}
              onPick={submitAnswer}
            />

            {revealed ? (
              <div className="mt-5 flex items-center justify-end">
                <Button variant="primary" onClick={next}>
                  Next <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            ) : null}
          </motion.div>
        ) : (
          <div className="rounded-[16px] border border-line bg-surface p-5 text-sm text-muted">
            Loading next item…
          </div>
        )}
      </AnimatePresence>

      <p className="mt-4 text-[11px] text-muted-soft">
        Section progress {Math.round(sectionProgress * 100)}%. Adaptive engine adjusts band every {adaptiveLogic.groupSize} items.
      </p>
    </main>
  );
}

function ItemView({
  item,
  selected,
  revealed,
  onPick,
}: {
  item: DiagnosticItem;
  selected: number | null;
  revealed: boolean;
  onPick: (idx: number) => void;
}) {
  let prompt: React.ReactNode = null;
  let options: string[] = [];
  let correctIndex = -1;

  if (item.section === "kanji") {
    if (item.type === "reading") {
      prompt = (
        <div>
          <p className="text-xs uppercase tracking-wider text-muted">Reading</p>
          <JapaneseText size="3xl" className="mt-2 text-ink-deep">{item.kanji}</JapaneseText>
          <p className="mt-1 text-xs text-muted">({item.meaning})</p>
        </div>
      );
    } else {
      prompt = (
        <div>
          <p className="text-xs uppercase tracking-wider text-muted">Meaning</p>
          <JapaneseText size="3xl" className="mt-2 text-ink-deep">{item.kanji}</JapaneseText>
        </div>
      );
    }
    options = item.options;
    correctIndex = item.correctIndex;
  } else if (item.section === "vocab") {
    if (item.type === "jp-to-en") {
      prompt = (
        <div>
          <p className="text-xs uppercase tracking-wider text-muted">Meaning of</p>
          <JapaneseText size="2xl" className="mt-2 text-ink-deep">{item.word}</JapaneseText>
        </div>
      );
    } else {
      prompt = (
        <div>
          <p className="text-xs uppercase tracking-wider text-muted">Japanese for</p>
          <p className="mt-2 text-2xl text-ink-deep">{item.meaning}</p>
        </div>
      );
    }
    options = item.options;
    correctIndex = item.correctIndex;
  } else if (item.section === "grammar") {
    if (item.type === "cloze") {
      prompt = (
        <div>
          <p className="text-xs uppercase tracking-wider text-muted">Cloze</p>
          <JapaneseText size="xl" className="mt-2 text-ink-deep">
            {item.sentence}
          </JapaneseText>
          <p className="mt-1 text-xs text-muted">Blank: {item.blank}</p>
        </div>
      );
    } else {
      prompt = (
        <div>
          <p className="text-xs uppercase tracking-wider text-muted">Grammar</p>
          <p className="mt-2 text-base text-ink-deep">{item.prompt}</p>
        </div>
      );
    }
    options = item.options;
    correctIndex = item.correctIndex;
  } else if (item.section === "listening") {
    prompt = (
      <div>
        <p className="text-xs uppercase tracking-wider text-muted">Listening (transcript shown — audio in Phase 2)</p>
        <p className="mt-2 rounded-[10px] bg-surface-soft p-3 text-sm text-ink/80">
          <JapaneseText>{item.transcript}</JapaneseText>
        </p>
        <p className="mt-3 text-base font-medium text-ink-deep">{item.question}</p>
      </div>
    );
    options = item.options;
    correctIndex = item.correctIndex;
  }

  return (
    <div>
      {prompt}
      <ul className="mt-5 space-y-2">
        {options.map((opt, i) => {
          const isSelected = selected === i;
          const isCorrect = i === correctIndex;
          return (
            <li key={i}>
              <button
                type="button"
                disabled={revealed}
                onClick={() => onPick(i)}
                className={cn(
                  "w-full rounded-[10px] border px-3 py-2.5 text-left text-sm transition-colors",
                  revealed && isCorrect
                    ? "border-recommend bg-[color:var(--recommend)]/10 text-recommend"
                    : revealed && isSelected && !isCorrect
                      ? "border-warn bg-[color:var(--warn)]/10 text-warn"
                      : "border-line bg-surface hover:border-line-strong",
                )}
              >
                <JapaneseText>{opt}</JapaneseText>
              </button>
            </li>
          );
        })}
      </ul>

      {revealed && "explanation" in item && item.explanation ? (
        <p className="mt-3 rounded-[8px] bg-surface-soft p-3 text-xs text-ink/80">{item.explanation}</p>
      ) : null}
    </div>
  );
}
