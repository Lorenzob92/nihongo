"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Volume2, ChevronLeft, ChevronRight, RotateCcw, Shuffle } from "lucide-react";
import { JapaneseText } from "@/components/japanese/JapaneseText";
import { speakJapanese } from "@/lib/speech";
import type { FlashcardItem, LessonStep } from "@/lib/types";

type Props = Extract<LessonStep, { type: "flashcards" }>;

const HAS_JP = /[぀-ヿ一-鿿]/;

function pickSpeakable(card: FlashcardItem, flipped: boolean): string {
  const current = flipped ? card.back : card.front;
  const other = flipped ? card.front : card.back;
  if (HAS_JP.test(current)) return current;
  if (HAS_JP.test(other)) return other;
  return current;
}

export function LessonFlashcards(props: Props) {
  const total = props.items.length;
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [order, setOrder] = useState<number[]>(() =>
    props.items.map((_, i) => i),
  );
  const [shuffled, setShuffled] = useState(false);
  const card = props.items[order[index]];
  const title = props.title ?? "Tap to flip";
  const subtitle = props.subtitle;

  const flip = useCallback(() => setFlipped((f) => !f), []);
  const goPrev = useCallback(() => {
    setFlipped(false);
    setIndex((i) => Math.max(0, i - 1));
  }, []);
  const goNext = useCallback(() => {
    setFlipped(false);
    setIndex((i) => Math.min(total - 1, i + 1));
  }, [total]);
  const restart = useCallback(() => {
    setFlipped(false);
    setIndex(0);
    setOrder(props.items.map((_, i) => i));
    setShuffled(false);
  }, [props.items]);
  const shuffle = useCallback(() => {
    setOrder((prev) => {
      const next = [...prev];
      for (let i = next.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [next[i], next[j]] = [next[j], next[i]];
      }
      return next;
    });
    setFlipped(false);
    setIndex(0);
    setShuffled(true);
  }, []);

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
      else if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        flip();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [flip, goPrev, goNext]);

  return (
    <section className="space-y-6">
      <header className="flex items-end justify-between gap-3">
        <div className="space-y-1.5">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Flashcards{subtitle ? ` · ${subtitle}` : ""}
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

      <div className="relative" style={{ perspective: 1200 }}>
        <button
          type="button"
          onClick={flip}
          className="block w-full text-left"
          aria-label={flipped ? "Flip back to kanji" : "Reveal meaning"}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${index}-${flipped ? "back" : "front"}`}
              initial={{ opacity: 0, rotateY: flipped ? -75 : 75, scale: 0.98 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: flipped ? 75 : -75, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className={`grid min-h-[300px] place-items-center rounded-[20px] border p-8 text-center sm:min-h-[360px] ${
                flipped
                  ? "border-[color:var(--accent)]/35 bg-[color:var(--accent)]/8"
                  : "border-line bg-surface"
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {flipped ? (
                <div className="space-y-4">
                  {HAS_JP.test(card.back) ? (
                    <JapaneseText
                      size="3xl"
                      className="block text-4xl font-bold text-ink-deep sm:text-6xl"
                    >
                      {card.back}
                    </JapaneseText>
                  ) : (
                    <p className="text-2xl font-semibold leading-snug text-ink-deep sm:text-[28px]">
                      {card.back}
                    </p>
                  )}
                  {card.note ? (
                    <p className="mx-auto max-w-md text-sm leading-relaxed text-ink/70 sm:text-[15px]">
                      <JapaneseText>{card.note}</JapaneseText>
                    </p>
                  ) : null}
                  {card.romaji ? (
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                      {card.romaji}
                    </p>
                  ) : null}
                  {card.mnemonic ? (
                    <p className="mx-auto flex max-w-md items-start justify-center gap-1.5 text-sm leading-relaxed text-ink/70">
                      <span aria-hidden>{card.mnemonic.emoji}</span>
                      <span>
                        <span className="font-semibold text-ink-deep">
                          “{card.mnemonic.hook}”
                        </span>{" "}
                        <JapaneseText>{card.mnemonic.story}</JapaneseText>
                      </span>
                    </p>
                  ) : null}
                </div>
              ) : HAS_JP.test(card.front) ? (
                <JapaneseText
                  size="3xl"
                  className="block text-5xl font-bold text-ink-deep sm:text-7xl"
                >
                  {card.front}
                </JapaneseText>
              ) : (
                <p className="text-3xl font-semibold leading-snug text-ink-deep sm:text-4xl">
                  {card.front}
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            speakJapanese(pickSpeakable(card, flipped));
          }}
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-surface-soft text-muted hover:bg-line hover:text-accent-deep"
          aria-label="Play audio"
          title="Play audio"
        >
          <Volume2 className="h-4 w-4" />
        </button>

        <p className="mt-3 text-center text-xs text-muted">
          {flipped
            ? "Tap card to see kanji again · ← → for prev/next"
            : "Tap card or press space to reveal meaning · ← → for prev/next"}
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
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={shuffle}
            className={`inline-flex items-center gap-1.5 rounded-[10px] px-3 py-2 text-xs hover:text-ink ${
              shuffled ? "text-accent-deep" : "text-muted"
            }`}
            title="Shuffle the order"
          >
            <Shuffle className="h-3.5 w-3.5" /> Shuffle
          </button>
          <button
            type="button"
            onClick={restart}
            className="inline-flex items-center gap-1.5 rounded-[10px] px-3 py-2 text-xs text-muted hover:text-ink"
            title="Reset to original order"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Reset
          </button>
        </div>
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
