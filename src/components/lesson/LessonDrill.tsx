"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, X } from "lucide-react";
import { JapaneseText } from "@/components/japanese/JapaneseText";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { LessonStep } from "@/lib/types";

type Props = Extract<LessonStep, { type: "drill" }>;

type ItemState = {
  value: string;
  submitted: boolean;
  correct: boolean | null;
  selectedIndex: number | null;
};

function defaultState(): ItemState {
  return { value: "", submitted: false, correct: null, selectedIndex: null };
}

function normalise(s: string) {
  return s.trim().toLowerCase().replace(/\s+/g, "");
}

export function LessonDrill(props: Props) {
  const [state, setState] = useState<Record<number, ItemState>>(() =>
    Object.fromEntries(props.items.map((_, i) => [i, defaultState()])),
  );

  const update = (i: number, patch: Partial<ItemState>) =>
    setState((s) => ({ ...s, [i]: { ...s[i], ...patch } }));

  return (
    <section className="space-y-6">
      <header className="space-y-1.5">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Drill
        </p>
        <h2 className="font-display text-2xl text-ink-deep sm:text-3xl">
          Try it yourself
        </h2>
      </header>

      <ol className="space-y-3">
        {props.items.map((item, i) => {
          const s = state[i];
          if (item.type === "cloze") {
            const accepted = [item.answer, ...(item.acceptableAnswers ?? [])];
            const handleSubmit = () => {
              const ok = accepted.some((a) => normalise(a) === normalise(s.value));
              update(i, { submitted: true, correct: ok });
            };
            const sentenceParts = item.sentence.split("{{}}");
            return (
              <li key={i} className="rounded-[16px] border border-line bg-surface p-4 sm:p-5">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Cloze · type the answer
                </p>
                <JapaneseText size="lg" className="text-ink-deep">
                  {sentenceParts[0]}
                  <span
                    className={cn(
                      "mx-1 inline-block min-w-[3.5rem] rounded-md border-b-2 px-2 py-0.5 text-center align-baseline",
                      s.submitted
                        ? s.correct
                          ? "border-recommend bg-[color:var(--recommend)]/10 text-recommend"
                          : "border-warn bg-[color:var(--warn)]/10 text-warn"
                        : "border-line-strong bg-surface-soft",
                    )}
                  >
                    {s.value || "____"}
                  </span>
                  {sentenceParts[1]}
                </JapaneseText>
                <p className="mt-2 text-xs text-muted">{item.en}</p>
                {item.hint ? (
                  <p className="mt-1 text-[11px] text-muted-soft italic">{item.hint}</p>
                ) : null}

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <input
                    value={s.value}
                    onChange={(e) => update(i, { value: e.target.value, submitted: false })}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleSubmit();
                      }
                    }}
                    lang="ja"
                    spellCheck={false}
                    autoComplete="off"
                    className="font-jp w-full rounded-[10px] border border-line bg-background px-3 py-2 text-base text-ink placeholder:text-muted-soft focus:border-accent focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/20 sm:flex-1"
                    placeholder="Type the answer in Japanese"
                  />
                  <Button variant="primary" onClick={handleSubmit} className="px-4">
                    Check
                  </Button>
                </div>

                <AnimatePresence>
                  {s.submitted ? (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={cn(
                        "mt-3 flex items-center gap-2 rounded-[10px] px-3 py-2 text-sm",
                        s.correct
                          ? "bg-[color:var(--recommend)]/10 text-recommend"
                          : "bg-[color:var(--warn)]/10 text-warn",
                      )}
                    >
                      {s.correct ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <X className="h-4 w-4" />
                      )}
                      {s.correct ? (
                        <span>Correct.</span>
                      ) : (
                        <span>
                          Expected{" "}
                          <JapaneseText className="font-medium">{item.answer}</JapaneseText>.
                        </span>
                      )}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </li>
            );
          }

          // multipleChoice
          const handlePick = (idx: number) => {
            const ok = idx === item.correctIndex;
            update(i, { selectedIndex: idx, submitted: true, correct: ok });
          };
          const sentenceParts = item.sentence.split("{{}}");
          return (
            <li key={i} className="rounded-[16px] border border-line bg-surface p-4 sm:p-5">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                Pick the right form
              </p>
              <JapaneseText size="lg" className="text-ink-deep">
                {sentenceParts[0]}
                <span className="mx-1 inline-block min-w-[3rem] rounded-md border-b-2 border-line-strong bg-surface-soft px-2 py-0.5 text-center align-baseline">
                  {s.selectedIndex !== null ? item.options[s.selectedIndex] : "____"}
                </span>
                {sentenceParts[1]}
              </JapaneseText>
              <p className="mt-2 text-xs text-muted">{item.en}</p>

              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {item.options.map((opt, j) => {
                  const isPicked = s.selectedIndex === j;
                  const isCorrect = j === item.correctIndex;
                  return (
                    <button
                      key={j}
                      type="button"
                      onClick={() => handlePick(j)}
                      className={cn(
                        "rounded-[10px] border px-3 py-2 text-sm font-medium transition-colors",
                        s.submitted && isCorrect
                          ? "border-recommend bg-[color:var(--recommend)]/10 text-recommend"
                          : s.submitted && isPicked && !isCorrect
                            ? "border-warn bg-[color:var(--warn)]/10 text-warn"
                            : "border-line bg-surface text-ink hover:border-line-strong",
                      )}
                    >
                      <JapaneseText>{opt}</JapaneseText>
                    </button>
                  );
                })}
              </div>

              <AnimatePresence>
                {s.submitted ? (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-3 text-sm text-ink/80"
                  >
                    {item.explanation}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
