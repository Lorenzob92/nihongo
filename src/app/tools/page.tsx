import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BookOpen, Mic, Search, Inbox, Sparkles, Activity } from "lucide-react";
import { Pill } from "@/components/ui/Pill";

export const metadata: Metadata = {
  title: "Tools",
  description: "Standalone utilities: reading helper, conversation, mining, pitch accent, kanji explorer, diagnostic.",
};

type Tool = {
  href: string;
  title: string;
  jaTitle: string;
  description: string;
  status: "live" | "v1" | "phase2" | "phase3";
  icon: React.ComponentType<{ className?: string }>;
};

const TOOLS: Tool[] = [
  {
    href: "/tools/reading-helper",
    title: "Reading helper",
    jaTitle: "読解ヘルパー",
    description: "Paste any Japanese paragraph. Streamed sentence-by-sentence breakdown with grammar notes, tokens, and click-to-mine on advanced words.",
    status: "live",
    icon: BookOpen,
  },
  {
    href: "/tools/conversation",
    title: "Conversation partner",
    jaTitle: "会話練習",
    description: "Claude as a patient native friend. Text mode V1: streaming, toggleable furigana, soft corrections every 5 turns, end-session summary.",
    status: "live",
    icon: Mic,
  },
  {
    href: "/diagnostic",
    title: "Adaptive diagnostic",
    jaTitle: "診断テスト",
    description: "4-axis adaptive placement (kanji, vocab, grammar, listening). ~15 minutes. Outputs a per-axis level estimate and your next 5 lessons.",
    status: "live",
    icon: Activity,
  },
  {
    href: "/tools/kanji-explorer",
    title: "Kanji explorer",
    jaTitle: "漢字エクスプローラー",
    description: "KanjiVG stroke-order viewer with animated playback. 612 kanji indexed. Search, click, watch the strokes draw.",
    status: "live",
    icon: Search,
  },
  {
    href: "/tools/pitch-accent",
    title: "Pitch accent drill",
    jaTitle: "アクセント練習",
    description: "Visual contour for the four canonical patterns (heiban, atamadaka, nakadaka, odaka). Five sample words to prove the concept; FSRS + mic in V2.",
    status: "v1",
    icon: Sparkles,
  },
  {
    href: "/tools",
    title: "Sentence mining",
    jaTitle: "文章マイニング",
    description: "Paste a sentence or upload a Mokuro page; get a polished Anki card draft with one click.",
    status: "phase2",
    icon: Inbox,
  },
];

const STATUS_PILL: Record<Tool["status"], { tone: "recommend" | "muted" | "accent"; label: string }> = {
  live: { tone: "recommend", label: "Live" },
  v1: { tone: "accent", label: "V1 skeleton" },
  phase2: { tone: "muted", label: "Phase 2" },
  phase3: { tone: "muted", label: "Phase 3" },
};

export default function ToolsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
      <header className="mb-8 space-y-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Tools
        </p>
        <h1 className="font-display text-3xl text-ink-deep sm:text-4xl">
          Standalone utilities
        </h1>
        <p className="max-w-2xl text-sm text-muted">
          Things you reach for outside a lesson flow. Reading helper, conversation, kanji explorer, and the diagnostic are live; pitch accent is a working skeleton.
        </p>
      </header>

      <ul className="grid gap-3 sm:grid-cols-2">
        {TOOLS.map((tool) => {
          const Icon = tool.icon;
          const pill = STATUS_PILL[tool.status];
          return (
            <li key={tool.title}>
              <Link
                href={tool.href}
                className="group flex h-full flex-col gap-3 rounded-[16px] border border-line bg-surface p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-line-strong"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="grid h-10 w-10 place-items-center rounded-[12px] bg-accent-soft text-accent-deep">
                    <Icon className="h-5 w-5" />
                  </span>
                  <Pill tone={pill.tone}>{pill.label}</Pill>
                </div>
                <div>
                  <h2 className="font-display text-xl text-ink-deep">{tool.title}</h2>
                  <p lang="ja" className="font-jp text-xs text-muted">
                    {tool.jaTitle}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-ink/80">{tool.description}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-2 text-xs font-medium text-accent-deep transition-transform group-hover:translate-x-0.5">
                  Open <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
