import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BookOpen, Mic, Search, Inbox, Sparkles } from "lucide-react";
import { Pill } from "@/components/ui/Pill";

export const metadata: Metadata = {
  title: "Tools",
  description: "Standalone utilities: reading helper, conversation, mining, pitch accent, kanji explorer.",
};

type Tool = {
  href: string;
  title: string;
  jaTitle: string;
  description: string;
  status: "stub" | "phase2" | "phase3";
  icon: React.ComponentType<{ className?: string }>;
};

const TOOLS: Tool[] = [
  {
    href: "/tools/reading-helper",
    title: "Reading helper",
    jaTitle: "読解ヘルパー",
    description: "Paste any Japanese paragraph. Get a sentence-by-sentence breakdown with grammar notes and clickable definitions.",
    status: "stub",
    icon: BookOpen,
  },
  {
    href: "/tools",
    title: "Conversation practice",
    jaTitle: "会話練習",
    description: "Claude as a patient native speaker, voice mode, level-calibrated to your current phase.",
    status: "phase2",
    icon: Mic,
  },
  {
    href: "/tools",
    title: "Sentence mining",
    jaTitle: "文章マイニング",
    description: "Paste a sentence or upload a Mokuro page; get a polished Anki card draft with one click.",
    status: "phase2",
    icon: Inbox,
  },
  {
    href: "/tools",
    title: "Pitch accent drill",
    jaTitle: "アクセント練習",
    description: "Daily 5-minute minimal pairs with click-the-high-mora UI.",
    status: "phase3",
    icon: Sparkles,
  },
  {
    href: "/tools",
    title: "Kanji explorer",
    jaTitle: "漢字エクスプローラー",
    description: "KanjiVG stroke-order viewer plus AI-generated personal mnemonics on demand.",
    status: "phase3",
    icon: Search,
  },
];

const STATUS_PILL: Record<Tool["status"], { tone: "recommend" | "muted" | "accent"; label: string }> = {
  stub: { tone: "accent", label: "V0 stub" },
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
          Things you reach for outside a lesson flow. The reading helper ships in V0 as a stub; the rest land in Phase 2 and 3.
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
