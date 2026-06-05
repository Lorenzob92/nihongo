"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Volume2, ChevronLeft, ChevronRight } from "lucide-react";
import { JapaneseText } from "@/components/japanese/JapaneseText";
import { speakJapanese } from "@/lib/speech";
import type { LessonStep } from "@/lib/types";

type Props = Extract<LessonStep, { type: "mnemonics" }>;

const LANG_LABEL: Record<"IT" | "EN" | "JP", string> = {
  IT: "Italian",
  EN: "English",
  JP: "Japanese",
};

export function LessonMnemonics(props: Props) {
  const total = props.items.length;
  const [index, setIndex] = useState(0);
  const card = props.items[index];
  const title = props.title ?? "Meet the verbs";
  const subtitle = props.subtitle;

  const goPrev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const goNext = useCallback(
    () => setIndex((i) => Math.min(total - 1, i + 1)),
    [total],
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext]);

  const { mnemonic } = card;

  return (
    <section className="space-y-6">
      <header className="flex items-end justify-between gap-3">
        <div className="space-y-1.5">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Memory hooks{subtitle ? ` · ${subtitle}` : ""}
          </p>
          <h2 className="font-display text-2xl text-ink-deep sm:text-3xl">
            {title}
          </h2>
        </div>
        <p className="font-mono text-sm text-muted">
          {index + 1} / {total}
        </p>
      </header>

      <div className="flex gap-1">
        {props.items.map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors ${
              i < index
                ? "bg-[color:var(--accent)]/40"
                : i === index
                  ? "bg-accent"
                  : "bg-line"
            }`}
          />
        ))}
      </div>

      <div className="relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -18, scale: 0.98 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-h-[360px] flex-col items-center gap-5 rounded-[20px] border border-line bg-surface p-8 text-center sm:min-h-[420px]"
          >
            <span className="text-6xl leading-none sm:text-7xl" aria-hidden>
              {mnemonic.emoji}
            </span>

            <div className="space-y-1.5">
              <JapaneseText
                size="3xl"
                className="block text-4xl font-bold text-ink-deep sm:text-5xl"
              >
                {card.ja}
              </JapaneseText>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                {card.romaji}
              </p>
              <p className="text-lg font-semibold text-ink-deep sm:text-xl">
                {card.meaning}
              </p>
            </div>

            <div className="mt-1 w-full max-w-md space-y-2 rounded-[14px] border border-[color:var(--accent)]/35 bg-[color:var(--accent)]/8 p-4">
              <p className="flex items-center justify-center gap-2 text-sm">
                <span className="rounded-full bg-[color:var(--accent)]/20 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-accent-deep">
                  {LANG_LABEL[mnemonic.lang]}
                </span>
                <span className="font-semibold text-ink-deep">
                  sounds like “{mnemonic.hook}”
                </span>
              </p>
              <p className="text-sm leading-relaxed text-ink/80 sm:text-[15px]">
                <JapaneseText>{mnemonic.story}</JapaneseText>
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={() => speakJapanese(card.ja)}
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-surface-soft text-muted hover:bg-line hover:text-accent-deep"
          aria-label="Play audio"
          title="Play audio"
        >
          <Volume2 className="h-4 w-4" />
        </button>

        <p className="mt-3 text-center text-xs text-muted">
          Swipe through them once, then drill the flashcards · ← → for prev/next
        </p>
      </div>

      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={goPrev}
          disabled={index === 0}
          className="inline-flex items-center gap-1.5 rounded-[10px] border border-line bg-surface px-4 py-2 text-sm font-medium text-ink hover:bg-surface-soft disabled:opacity-40"
        >
          <ChevronLeft className="h-4 w-4" /> Prev
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={index === total - 1}
          className="inline-flex items-center gap-1.5 rounded-[10px] border border-line bg-surface px-4 py-2 text-sm font-medium text-ink hover:bg-surface-soft disabled:opacity-40"
        >
          Next <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
