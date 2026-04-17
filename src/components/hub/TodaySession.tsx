import Link from "next/link";
import { ArrowRight, BookOpen, Layers, Sparkles } from "lucide-react";
import { USER_STATE } from "@/data/user-state";
import { CURRICULUM_BY_SLUG } from "@/data/curriculum";

export function TodaySession() {
  const lesson = CURRICULUM_BY_SLUG[USER_STATE.todaySession.lessonSlug];

  const tasks = [
    {
      icon: Layers,
      label: `${USER_STATE.todaySession.ankiCount} Anki cards`,
      detail: "Highest priority. Never skipped.",
      cta: { href: "https://ankiweb.net/decks", label: "Open Anki", external: true },
    },
    {
      icon: BookOpen,
      label: lesson ? lesson.title : "Today's lesson",
      detail: lesson
        ? `Section ${lesson.section} · ${lesson.estimatedMin} min`
        : "No lesson scheduled.",
      cta: lesson
        ? { href: `/lessons/${lesson.slug}`, label: "Begin", external: false }
        : null,
    },
    {
      icon: Sparkles,
      label: USER_STATE.todaySession.contentTask,
      detail: "i+1 reading window. Mokuro + Yomitan stack.",
      cta: null,
    },
  ];

  return (
    <section className="rounded-[20px] border border-[color:var(--accent)]/20 bg-accent-soft p-6 sm:p-8 shadow-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-deep">
            Today, opportunistic
          </p>
          <h2 className="mt-1 font-display text-2xl text-ink-deep sm:text-3xl">
            15 minutes, in three small bites
          </h2>
        </div>
        <Link
          href={lesson ? `/lessons/${lesson.slug}` : "/lessons"}
          className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-deep"
        >
          Begin <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <ol className="mt-5 grid gap-3 sm:grid-cols-3">
        {tasks.map((task, i) => {
          const Icon = task.icon;
          return (
            <li
              key={i}
              className="flex flex-col gap-2 rounded-[16px] border border-line bg-surface p-4"
            >
              <div className="flex items-center gap-2 text-accent-deep">
                <Icon className="h-4 w-4" />
                <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
                  Step {i + 1}
                </span>
              </div>
              <p className="text-sm font-medium text-ink-deep">{task.label}</p>
              <p className="text-xs text-muted">{task.detail}</p>
              {task.cta ? (
                task.cta.external ? (
                  <a
                    href={task.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-accent-deep hover:underline"
                  >
                    {task.cta.label} <ArrowRight className="h-3 w-3" />
                  </a>
                ) : (
                  <Link
                    href={task.cta.href}
                    className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-accent-deep hover:underline"
                  >
                    {task.cta.label} <ArrowRight className="h-3 w-3" />
                  </Link>
                )
              ) : null}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
