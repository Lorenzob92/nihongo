import Link from "next/link";
import {
  ExternalLink,
  BookOpen,
  Inbox,
  Layers,
  Mic,
  Search,
  Activity,
  Sparkles,
} from "lucide-react";
import { USER_STATE } from "@/data/user-state";
import { CURRICULUM_BY_SLUG } from "@/data/curriculum";

const ANKI_URL = "https://ankiweb.net/decks";

export function QuickActions() {
  const lesson = CURRICULUM_BY_SLUG[USER_STATE.todaySession.lessonSlug];

  const actions = [
    {
      icon: Layers,
      label: "Anki",
      detail: `${USER_STATE.todaySession.ankiCount} due`,
      href: ANKI_URL,
      external: true,
    },
    {
      icon: BookOpen,
      label: "Lesson",
      detail: lesson?.title ?? "Pick one",
      href: lesson ? `/lessons/${lesson.slug}` : "/lessons",
      external: false,
    },
    {
      icon: Search,
      label: "Reading helper",
      detail: "Paste & parse",
      href: "/tools/reading-helper",
      external: false,
    },
    {
      icon: Mic,
      label: "Conversation",
      detail: "Chat in JP",
      href: "/tools/conversation",
      external: false,
    },
    {
      icon: Activity,
      label: "Diagnostic",
      detail: "Place yourself",
      href: "/diagnostic",
      external: false,
    },
    {
      icon: Sparkles,
      label: "Kanji explorer",
      detail: "612 strokes",
      href: "/tools/kanji-explorer",
      external: false,
    },
    {
      icon: Inbox,
      label: "Mining queue",
      detail: "Phase 2",
      href: "/tools",
      external: false,
    },
  ];

  return (
    <section>
      <h2 className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-zinc-400">
        Quick actions
      </h2>
      <div className="flex flex-wrap gap-1.5">
        {actions.map((a) => {
          const Icon = a.icon;
          const inner = (
            <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-surface px-3 py-1.5 text-xs font-semibold text-zinc-300 transition-colors hover:border-[#638dff]/40 hover:text-white">
              <Icon className="h-3.5 w-3.5 text-[#638dff]" />
              {a.label}
              <span className="font-normal text-zinc-500">· {a.detail}</span>
              {a.external ? <ExternalLink className="h-3 w-3 text-zinc-600" /> : null}
            </span>
          );
          return a.external ? (
            <a key={a.label} href={a.href} target="_blank" rel="noopener noreferrer">
              {inner}
            </a>
          ) : (
            <Link key={a.label} href={a.href}>
              {inner}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
