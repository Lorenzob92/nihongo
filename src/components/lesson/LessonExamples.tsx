"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Volume2, Eye, EyeOff } from "lucide-react";
import { JapaneseText } from "@/components/japanese/JapaneseText";
import type { LessonStep } from "@/lib/types";

type Props = Extract<LessonStep, { type: "examples" }>;

export function LessonExamples(props: Props) {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  const toggle = (i: number) =>
    setRevealed((r) => ({ ...r, [i]: !r[i] }));

  return (
    <section className="space-y-6">
      <header className="space-y-1.5">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Examples
        </p>
        <h2 className="font-display text-2xl text-ink-deep sm:text-3xl">
          See it in real sentences
        </h2>
      </header>

      <ol className="space-y-3">
        {props.items.map((item, i) => {
          const isRevealed = !!revealed[i];
          return (
            <li
              key={i}
              className="rounded-[16px] border border-line bg-surface p-4 sm:p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <JapaneseText size="xl" className="text-ink-deep">
                  {item.ja}
                </JapaneseText>
                <button
                  type="button"
                  className="flex-none rounded-full bg-surface-soft p-2 text-muted hover:bg-line"
                  aria-label="Play audio (TODO Phase 2: VOICEVOX)"
                  title="Audio coming in Phase 2"
                >
                  <Volume2 className="h-4 w-4" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => toggle(i)}
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-accent-deep hover:underline"
              >
                {isRevealed ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                {isRevealed ? "Hide translation" : "Show translation"}
              </button>

              <AnimatePresence initial={false}>
                {isRevealed ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.18 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-sm text-ink/80">{item.en}</p>
                    {item.breakdown ? (
                      <p className="mt-1.5 text-xs text-muted">{item.breakdown}</p>
                    ) : null}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
