import type { Metadata } from "next";
import { MangaLadder } from "@/components/manga/MangaLadder";
import { JapaneseText } from "@/components/japanese/JapaneseText";

export const metadata: Metadata = {
  title: "Manga ladder",
  description: "12 rungs from Yotsubato to the boss fights. The actual goal of the project.",
};

export default function MangaLadderPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-10">
      <header className="mb-8 space-y-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          The actual goal
        </p>
        <h1 className="font-display text-3xl text-ink-deep sm:text-4xl">
          Manga ladder{" "}
          <JapaneseText size="2xl" className="ml-1 text-muted">
            漫画の梯子
          </JapaneseText>
        </h1>
        <p className="max-w-2xl text-sm text-muted">
          Twelve rungs, ordered by difficulty and personal taste. The point is not to read every manga in Japanese; it is to read the ones Lorenzo actually wants to read, in the order that makes them comprehensible.
        </p>
      </header>

      <MangaLadder />
    </main>
  );
}
