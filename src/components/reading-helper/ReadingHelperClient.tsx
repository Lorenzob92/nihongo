"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { experimental_useObject as useObject } from "@ai-sdk/react";
import {
  ArrowLeft,
  BookOpen,
  Eye,
  EyeOff,
  Loader2,
  Plus,
  Check,
  ChevronDown,
  ChevronRight,
  AlertTriangle,
} from "lucide-react";
import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";
import { JapaneseText } from "@/components/japanese/JapaneseText";
import { ReadingHelperResponseSchema } from "@/lib/schemas/reading-helper";
import type {
  PartOfSpeech,
  SentenceBreakdown,
  Token,
} from "@/lib/schemas/reading-helper";
import { cn } from "@/lib/utils";

const FURIGANA_KEY = "readingHelper.furigana";
const QUEUE_KEY = "readingHelper.miningQueue";

type QueueEntry = {
  lemma: string;
  reading: string;
  english: string;
  source: string;
  addedAt: number;
};

const POS_BADGES: Record<PartOfSpeech, string> = {
  noun: "bg-blue-50 text-blue-700 border-blue-200",
  verb: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "i-adjective": "bg-amber-50 text-amber-700 border-amber-200",
  "na-adjective": "bg-amber-50 text-amber-700 border-amber-200",
  adverb: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200",
  particle: "bg-slate-100 text-slate-600 border-slate-200",
  "auxiliary-verb": "bg-teal-50 text-teal-700 border-teal-200",
  conjunction: "bg-slate-100 text-slate-600 border-slate-200",
  interjection: "bg-pink-50 text-pink-700 border-pink-200",
  counter: "bg-indigo-50 text-indigo-700 border-indigo-200",
  pronoun: "bg-violet-50 text-violet-700 border-violet-200",
  prefix: "bg-slate-100 text-slate-600 border-slate-200",
  suffix: "bg-slate-100 text-slate-600 border-slate-200",
  other: "bg-slate-100 text-slate-600 border-slate-200",
};

export function ReadingHelperClient() {
  const [text, setText] = useState("");
  const [showFurigana, setShowFurigana] = useState(true);
  const [queue, setQueue] = useState<QueueEntry[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { object, submit, isLoading, error, stop } = useObject({
    api: "/api/reading-helper",
    schema: ReadingHelperResponseSchema,
  });

  // Load preferences on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    const f = localStorage.getItem(FURIGANA_KEY);
    if (f !== null) setShowFurigana(f === "true");
    const q = localStorage.getItem(QUEUE_KEY);
    if (q) {
      try {
        setQueue(JSON.parse(q));
      } catch {
        // ignore
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(FURIGANA_KEY, String(showFurigana));
  }, [showFurigana]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
  }, [queue]);

  useEffect(() => {
    if (error) setErrorMessage(error.message ?? "Something went wrong");
    else setErrorMessage(null);
  }, [error]);

  const onAnalyse = () => {
    setErrorMessage(null);
    if (!text.trim()) return;
    submit({ text, learnerLevel: "N4" });
  };

  const addToQueue = (token: Token, source: string) => {
    setQueue((prev) => {
      if (prev.some((e) => e.lemma === token.lemma)) return prev;
      return [
        ...prev,
        {
          lemma: token.lemma,
          reading: token.reading,
          english: token.english,
          source,
          addedAt: Date.now(),
        },
      ];
    });
  };

  const sentences = (object?.sentences ?? []) as Partial<SentenceBreakdown>[];
  const charCount = text.length;
  const tooLong = charCount > 2000;

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-10">
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/tools"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-ink"
        >
          <ArrowLeft className="h-3 w-3" /> All tools
        </Link>
        <button
          type="button"
          onClick={() => setShowFurigana((s) => !s)}
          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-ink hover:border-line-strong"
          aria-pressed={showFurigana}
        >
          {showFurigana ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
          Furigana {showFurigana ? "on" : "off"}
        </button>
      </div>

      <header className="mt-6 space-y-3">
        <div className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-[12px] bg-accent-soft text-accent-deep">
            <BookOpen className="h-5 w-5" />
          </span>
          <Pill tone="recommend">Live</Pill>
        </div>
        <h1 className="font-display text-3xl text-ink-deep sm:text-4xl">
          Reading helper{" "}
          <JapaneseText size="2xl" className="ml-1 text-muted">
            読解ヘルパー
          </JapaneseText>
        </h1>
        <p className="max-w-2xl text-sm text-muted">
          Paste any Japanese paragraph (max 2000 characters). Sonnet 4.6 streams a sentence-by-sentence breakdown with grammar notes, tokens, and click-to-mine on advanced words.
        </p>
      </header>

      <section className="mt-8 space-y-3">
        <label htmlFor="paragraph" className="block text-sm font-medium text-ink-deep">
          Paste a paragraph
        </label>
        <textarea
          id="paragraph"
          rows={6}
          lang="ja"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="ここに日本語のテキストを貼り付けてください…"
          className="font-jp w-full rounded-[12px] border border-line bg-surface p-4 text-base leading-relaxed text-ink-deep placeholder:text-muted-soft focus:border-accent focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/20"
        />
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p
            className={cn(
              "font-mono text-[11px] tracking-wider",
              tooLong ? "text-warn" : charCount > 1600 ? "text-amber-600" : "text-muted",
            )}
          >
            {charCount} / 2000 characters
          </p>
          <div className="flex items-center gap-2">
            {isLoading ? (
              <Button variant="secondary" onClick={() => stop()}>
                Cancel
              </Button>
            ) : null}
            <Button
              variant="primary"
              onClick={onAnalyse}
              disabled={!text.trim() || isLoading || tooLong}
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
              {isLoading ? "Analysing…" : "Analyse"}
            </Button>
          </div>
        </div>
        {errorMessage ? (
          <div className="flex items-start gap-2 rounded-[10px] border border-warn/30 bg-[color:var(--warn)]/10 p-3 text-sm text-warn">
            <AlertTriangle className="mt-0.5 h-4 w-4 flex-none" />
            <span>{errorMessage}</span>
          </div>
        ) : null}
      </section>

      {object?.warning ? (
        <div className="mt-6 flex items-start gap-2 rounded-[10px] border border-warn/30 bg-[color:var(--warn)]/10 p-3 text-sm text-warn">
          <AlertTriangle className="mt-0.5 h-4 w-4 flex-none" />
          <span>{object.warning}</span>
        </div>
      ) : null}

      <section className="mt-6 space-y-4">
        {sentences.map((s, i) => (
          <SentenceCard
            key={i}
            index={i}
            total={sentences.length}
            sentence={s}
            showFurigana={showFurigana}
            onAddToQueue={(token) => addToQueue(token, s.jp ?? "")}
            queueLemmas={new Set(queue.map((q) => q.lemma))}
          />
        ))}
      </section>

      {queue.length > 0 ? (
        <aside className="mt-10 rounded-[16px] border border-line bg-surface p-5">
          <h2 className="mb-3 font-display text-lg text-ink-deep">
            Mining queue ({queue.length})
          </h2>
          <ul className="space-y-2 text-sm">
            {queue.slice().reverse().map((q) => (
              <li
                key={q.lemma + q.addedAt}
                className="flex flex-wrap items-center justify-between gap-2 rounded-[10px] border border-line bg-surface-soft p-2.5"
              >
                <div>
                  <JapaneseText className="font-medium">{q.lemma}</JapaneseText>
                  <span className="ml-2 font-jp text-xs text-muted">{q.reading}</span>
                  <span className="ml-2 text-xs text-muted">{q.english}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setQueue((prev) => prev.filter((e) => e.lemma !== q.lemma))}
                  className="text-xs text-muted hover:text-ink"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[11px] text-muted-soft">
            Stored locally in your browser (localStorage). Postgres backing arrives in Phase 2.
          </p>
        </aside>
      ) : null}
    </main>
  );
}

function SentenceCard({
  index,
  total,
  sentence,
  showFurigana,
  onAddToQueue,
  queueLemmas,
}: {
  index: number;
  total: number;
  sentence: Partial<SentenceBreakdown>;
  showFurigana: boolean;
  onAddToQueue: (token: Token) => void;
  queueLemmas: Set<string>;
}) {
  const [expanded, setExpanded] = useState(true);

  const tokens = (sentence.tokens ?? []) as Partial<Token>[];
  const grammarPoints = sentence.grammarPoints ?? [];
  const anchors = sentence.anchorsToPrev ?? [];

  return (
    <article className="rounded-[16px] border border-line bg-surface p-4 sm:p-5">
      <button
        type="button"
        onClick={() => setExpanded((e) => !e)}
        className="flex w-full items-start justify-between gap-3 text-left"
      >
        <div className="flex-1 space-y-1.5">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            Sentence {index + 1} of {total}
          </p>
          <JapaneseText size="lg" className="text-ink-deep">
            {sentence.jp ?? "…"}
          </JapaneseText>
          {sentence.kanaOnly && showFurigana ? (
            <JapaneseText className="text-muted">{sentence.kanaOnly}</JapaneseText>
          ) : null}
        </div>
        <span className="mt-1 flex-none text-muted">
          {expanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </span>
      </button>

      {expanded ? (
        <div className="mt-3 space-y-4">
          {index > 0 && anchors.length > 0 ? (
            <div className="rounded-[8px] bg-surface-soft px-3 py-2 text-[11px] text-muted">
              References previous: {anchors.join(", ")}
            </div>
          ) : null}

          {sentence.enLiteral ? (
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-muted">Literal</p>
              <p className="mt-1 text-sm text-ink/85">{sentence.enLiteral}</p>
            </div>
          ) : null}

          {sentence.enNatural ? (
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-muted">Natural</p>
              <p className="mt-1 text-sm text-ink-deep">{sentence.enNatural}</p>
            </div>
          ) : null}

          {tokens.length > 0 ? (
            <div>
              <p className="mb-2 text-[11px] font-mono uppercase tracking-wider text-muted">Tokens</p>
              <ul className="flex flex-wrap gap-2">
                {tokens.map((token, j) => {
                  if (!token.surface) return null;
                  const inQueue = token.lemma ? queueLemmas.has(token.lemma) : false;
                  return (
                    <li
                      key={j}
                      className={cn(
                        "flex flex-col items-start gap-0.5 rounded-[10px] border bg-surface px-2.5 py-1.5",
                        token.pos ? POS_BADGES[token.pos as PartOfSpeech] : "border-line",
                      )}
                    >
                      <div className="flex items-center gap-1.5">
                        {showFurigana && token.reading && token.reading !== token.surface ? (
                          <ruby className="font-jp text-base">
                            {token.surface}
                            <rt className="font-jp text-[9px] text-current opacity-70">{token.reading}</rt>
                          </ruby>
                        ) : (
                          <JapaneseText className="text-base">{token.surface}</JapaneseText>
                        )}
                      </div>
                      {token.english ? (
                        <span className="text-[11px] text-current/80">{token.english}</span>
                      ) : null}
                      <span className="text-[9px] uppercase tracking-wider text-current/60">
                        {token.pos}
                      </span>
                      {token.isAdvanced && token.lemma ? (
                        <button
                          type="button"
                          onClick={() => onAddToQueue(token as Token)}
                          disabled={inQueue}
                          className={cn(
                            "mt-1 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium",
                            inQueue
                              ? "bg-recommend/10 text-recommend"
                              : "bg-accent-soft text-accent-deep hover:bg-accent/10",
                          )}
                        >
                          {inQueue ? <Check className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                          {inQueue ? "Added" : "Mine"}
                        </button>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}

          {grammarPoints.length > 0 ? (
            <div>
              <p className="mb-2 text-[11px] font-mono uppercase tracking-wider text-muted">Grammar</p>
              <ul className="space-y-2">
                {grammarPoints.map((g, k) => (
                  <li key={k} className="rounded-[10px] border border-line bg-surface-soft p-3">
                    <div className="flex items-center gap-2">
                      <JapaneseText className="font-medium text-ink-deep">{g?.pattern}</JapaneseText>
                      <span className="text-xs text-muted">{g?.name}</span>
                    </div>
                    <p className="mt-1 text-xs text-ink/80">{g?.explanation}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
