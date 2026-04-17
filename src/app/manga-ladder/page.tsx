import type { Metadata } from "next";
import { MangaLadder } from "@/components/manga/MangaLadder";
import { JapaneseText } from "@/components/japanese/JapaneseText";

export const metadata: Metadata = {
  title: "Manga ladder",
  description: "12 rungs from Yotsubato to Berserk. The actual goal of the project.",
};

export default function MangaLadderPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-8">
      <header className="mb-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
          The actual goal
        </p>
        <h1 className="mt-1 text-2xl sm:text-4xl font-black tracking-tight text-white">
          Manga ladder{" "}
          <JapaneseText size="2xl" className="text-zinc-500 font-atmos">
            漫画の梯子
          </JapaneseText>
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-zinc-400">
          Twelve rungs, ordered by difficulty and personal taste. The point is not to read every manga in Japanese; it is to read the ones Lorenzo actually wants to read, in the order that makes them comprehensible.
        </p>
      </header>

      <MangaLadder />
    </main>
  );
}
