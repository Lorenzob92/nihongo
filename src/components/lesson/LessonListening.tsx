"use client";

import { useState } from "react";
import { Headphones } from "lucide-react";
import { JapaneseText } from "@/components/japanese/JapaneseText";
import { cn } from "@/lib/utils";
import type { LessonStep } from "@/lib/types";

type Props = Extract<LessonStep, { type: "listening" }>;

export function LessonListening(props: Props) {
  const [showTranscript, setShowTranscript] = useState(false);
  const [picked, setPicked] = useState<number | null>(null);
  const q = props.comprehensionQuestions[0];

  return (
    <section className="space-y-6">
      <header className="space-y-1.5">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Listening
        </p>
        <h2 className="font-display text-2xl text-ink-deep sm:text-3xl">
          Listen and check your comprehension
        </h2>
      </header>

      <div className="rounded-[16px] border border-line bg-surface-soft p-5">
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-surface text-accent-deep">
            <Headphones className="h-5 w-5" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-ink">Audio clip</p>
            <p className="text-xs text-muted">
              Audio synthesis arrives in Phase 2 (VOICEVOX).
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowTranscript((s) => !s)}
            className="rounded-[10px] border border-line bg-surface px-3 py-1.5 text-xs font-medium text-ink hover:bg-surface-soft"
          >
            {showTranscript ? "Hide transcript" : "Show transcript"}
          </button>
        </div>
        {showTranscript ? (
          <div className="mt-4 border-t border-line pt-4">
            <JapaneseText size="lg" className="text-ink-deep">
              {props.transcript}
            </JapaneseText>
          </div>
        ) : null}
      </div>

      {q ? (
        <div className="rounded-[16px] border border-line bg-surface p-5">
          <p className="mb-3 text-base font-medium text-ink-deep">{q.question}</p>
          <ul className="space-y-2">
            {q.options.map((opt, i) => {
              const isPicked = picked === i;
              const isCorrect = i === q.correctIndex;
              const showState = picked !== null;
              return (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => setPicked(i)}
                    className={cn(
                      "w-full rounded-[10px] border px-3 py-2 text-left text-sm transition-colors",
                      showState && isCorrect
                        ? "border-recommend bg-[color:var(--recommend)]/10 text-recommend"
                        : showState && isPicked && !isCorrect
                          ? "border-warn bg-[color:var(--warn)]/10 text-warn"
                          : "border-line bg-surface hover:border-line-strong",
                    )}
                  >
                    {opt}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
