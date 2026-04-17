"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Pill } from "@/components/ui/Pill";
import { JapaneseText } from "@/components/japanese/JapaneseText";
import { PitchGraph, type PitchPattern } from "@/components/pitch-accent/PitchGraph";
import { cn } from "@/lib/utils";

type Word = {
  word: string;
  reading: string;
  moras: string[];
  pattern: PitchPattern;
  nakadakaDropAfter?: number;
  english: string;
  pitchIndex: string; // standard NHK index (e.g. [0], [1], [2])
};

// Hard-coded sample words to prove the visual concept. V2 will load from a
// proper pitch-accent dictionary (e.g. Wadoku/NHK accent dataset) and wire FSRS.
const SAMPLES: Word[] = [
  {
    word: "桜",
    reading: "さくら",
    moras: ["さ", "く", "ら"],
    pattern: "heiban",
    english: "cherry blossom",
    pitchIndex: "[0]",
  },
  {
    word: "雨",
    reading: "あめ",
    moras: ["あ", "め"],
    pattern: "atamadaka",
    english: "rain (cf. 飴 [0] = sweets)",
    pitchIndex: "[1]",
  },
  {
    word: "日本",
    reading: "にほん",
    moras: ["に", "ほ", "ん"],
    pattern: "nakadaka",
    nakadakaDropAfter: 1,
    english: "Japan",
    pitchIndex: "[2]",
  },
  {
    word: "男",
    reading: "おとこ",
    moras: ["お", "と", "こ"],
    pattern: "odaka",
    english: "man",
    pitchIndex: "[3]",
  },
  {
    word: "学校",
    reading: "がっこう",
    moras: ["が", "っ", "こ", "う"],
    pattern: "heiban",
    english: "school",
    pitchIndex: "[0]",
  },
];

const PATTERN_LABELS: Record<PitchPattern, string> = {
  heiban: "平板 heiban",
  atamadaka: "頭高 atamadaka",
  nakadaka: "中高 nakadaka",
  odaka: "尾高 odaka",
};

export default function PitchAccentPage() {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-10">
      <Link
        href="/tools"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-ink"
      >
        <ArrowLeft className="h-3 w-3" /> All tools
      </Link>

      <header className="mt-6 space-y-3">
        <div className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-[12px] bg-accent-soft text-accent-deep">
            <Sparkles className="h-5 w-5" />
          </span>
          <Pill tone="accent">V1 skeleton</Pill>
        </div>
        <h1 className="font-display text-3xl text-ink-deep sm:text-4xl">
          Pitch accent drill{" "}
          <JapaneseText size="2xl" className="ml-1 text-muted">
            アクセント練習
          </JapaneseText>
        </h1>
        <p className="max-w-2xl text-sm text-muted">
          Five sample words across the four canonical patterns: heiban, atamadaka, nakadaka, odaka. FSRS scheduling and microphone-based pronunciation feedback land in V2.
        </p>
      </header>

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        {SAMPLES.map((s, i) => {
          const open = !!revealed[i];
          return (
            <article
              key={s.word}
              className="rounded-[16px] border border-line bg-surface p-5"
            >
              <header className="flex items-baseline justify-between gap-3">
                <div>
                  <JapaneseText size="2xl" className="text-ink-deep">
                    {s.word}
                  </JapaneseText>
                  <JapaneseText className="ml-2 text-muted">{s.reading}</JapaneseText>
                </div>
                <Pill tone="muted">{s.pitchIndex}</Pill>
              </header>
              <p className="mt-1 text-xs text-muted">{s.english}</p>

              <div className="mt-4 flex justify-center">
                <PitchGraph
                  moras={s.moras}
                  pattern={s.pattern}
                  nakadakaDropAfter={s.nakadakaDropAfter}
                />
              </div>

              <div className="mt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setRevealed((r) => ({ ...r, [i]: !r[i] }))}
                  className="text-xs font-medium text-accent-deep hover:underline"
                >
                  {open ? "Hide pattern" : "Reveal pattern"}
                </button>
                <span
                  className={cn(
                    "text-xs font-medium transition-opacity",
                    open ? "opacity-100" : "opacity-0",
                  )}
                >
                  {PATTERN_LABELS[s.pattern]}
                </span>
              </div>
            </article>
          );
        })}
      </section>

      <section className="mt-10 rounded-[16px] border border-line bg-surface-soft p-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">V2 roadmap</p>
        <ul className="mt-3 space-y-2 text-sm text-ink/80">
          <li>· FSRS scheduling on minimal pairs (e.g. 雨 / 飴, 橋 / 箸 / 端).</li>
          <li>· Microphone input + pitch contour analysis (browser MediaRecorder + WASM pitch tracker).</li>
          <li>· Click-the-high-mora practice mode.</li>
          <li>· Wadoku / NHK pitch dictionary import.</li>
        </ul>
      </section>
    </main>
  );
}
