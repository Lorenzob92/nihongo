import { ExternalLink, BookOpen, Inbox, Layers } from "lucide-react";
import { USER_STATE } from "@/data/user-state";
import { CURRICULUM_BY_SLUG } from "@/data/curriculum";

const ANKI_URL = "https://ankiweb.net/decks";

export function QuickActions() {
  const lesson = CURRICULUM_BY_SLUG[USER_STATE.todaySession.lessonSlug];

  const actions = [
    {
      icon: Layers,
      label: "Open Anki",
      detail: `${USER_STATE.todaySession.ankiCount} due now`,
      href: ANKI_URL,
      external: true,
    },
    {
      icon: BookOpen,
      label: "Today's lesson",
      detail: lesson ? lesson.title : "Choose one",
      href: lesson ? `/lessons/${lesson.slug}` : "/lessons",
      external: false,
    },
    {
      icon: Inbox,
      label: "Mining queue",
      detail: "Phase 2 stub",
      href: "/tools",
      external: false,
    },
  ];

  return (
    <section>
      <h2 className="mb-3 font-display text-xl text-ink-deep">Quick actions</h2>
      <div className="grid gap-3 sm:grid-cols-3">
        {actions.map((a) => {
          const Icon = a.icon;
          const inner = (
            <div className="flex h-full items-center gap-3 rounded-[16px] border border-line bg-surface p-4 transition-all hover:-translate-y-0.5 hover:border-line-strong">
              <span className="grid h-9 w-9 flex-none place-items-center rounded-[10px] bg-accent-soft text-accent-deep">
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-ink-deep">{a.label}</p>
                <p className="truncate text-xs text-muted">{a.detail}</p>
              </div>
              {a.external ? (
                <ExternalLink className="h-3.5 w-3.5 flex-none text-muted" />
              ) : null}
            </div>
          );
          return a.external ? (
            <a
              key={a.label}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {inner}
            </a>
          ) : (
            <a key={a.label} href={a.href} className="block">
              {inner}
            </a>
          );
        })}
      </div>
    </section>
  );
}
