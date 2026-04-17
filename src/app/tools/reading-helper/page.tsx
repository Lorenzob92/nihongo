import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Pill } from "@/components/ui/Pill";
import { JapaneseText } from "@/components/japanese/JapaneseText";

export const metadata: Metadata = {
  title: "Reading helper",
  description: "Paste a Japanese paragraph and get a sentence-by-sentence breakdown.",
};

export default function ReadingHelperPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
      <Link
        href="/tools"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-ink"
      >
        <ArrowLeft className="h-3 w-3" /> All tools
      </Link>

      <header className="mt-6 space-y-3">
        <div className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-[12px] bg-accent-soft text-accent-deep">
            <BookOpen className="h-5 w-5" />
          </span>
          <Pill tone="accent">V0 stub</Pill>
        </div>
        <h1 className="font-display text-3xl text-ink-deep sm:text-4xl">
          Reading helper{" "}
          <JapaneseText size="2xl" className="ml-1 text-muted">
            読解ヘルパー
          </JapaneseText>
        </h1>
        <p className="max-w-2xl text-sm text-muted">
          Paste any Japanese paragraph. Phase 2 will wire this to Claude via Vercel AI Gateway and return a sentence-by-sentence breakdown with grammar notes and clickable definitions.
        </p>
      </header>

      <section className="mt-8 space-y-3">
        <label htmlFor="paragraph" className="block text-sm font-medium text-ink-deep">
          Paste a paragraph
        </label>
        <textarea
          id="paragraph"
          rows={8}
          lang="ja"
          placeholder="ここに日本語のテキストを貼り付けてください…"
          className="font-jp w-full rounded-[12px] border border-line bg-surface p-4 text-base leading-relaxed text-ink-deep placeholder:text-muted-soft focus:border-accent focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]/20"
          disabled
        />
        <button
          type="button"
          disabled
          className="rounded-[12px] bg-accent px-4 py-2.5 text-sm font-medium text-white opacity-40"
        >
          Break it down (Phase 2)
        </button>
      </section>

      <section className="mt-8 rounded-[16px] border border-line bg-surface-soft p-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Phase 2 wiring
        </p>
        <ul className="mt-3 space-y-2 text-sm text-ink/80">
          <li>· Claude Sonnet via Vercel AI Gateway with cache primer for grammar references.</li>
          <li>· jmdict-simplified Postgres for word lookups, surfaced as inline tooltips.</li>
          <li>· Save any sentence to the mining queue with one click.</li>
        </ul>
      </section>
    </main>
  );
}
