import Link from "next/link";
import { ArrowRight, BookOpen, Layers, Sparkles } from "lucide-react";
import { USER_STATE } from "@/data/user-state";
import { CURRICULUM_BY_SLUG } from "@/data/curriculum";
import { PHASE_META } from "@/lib/phase";

export function TodaySession() {
  const lesson = CURRICULUM_BY_SLUG[USER_STATE.todaySession.lessonSlug];
  const phase = PHASE_META[USER_STATE.currentPhase];

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
      cta: { href: "/manga-ladder", label: "Open ladder", external: false },
    },
  ];

  return (
    <section className="rounded-[16px] border border-white/10 bg-surface p-5 sm:p-6 shadow-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div className="flex items-center gap-2">
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: phase.color }}
          />
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
            Today's session
          </p>
        </div>
        <Link
          href={lesson ? `/lessons/${lesson.slug}` : "/lessons"}
          className="inline-flex items-center gap-1.5 rounded-md bg-[#638dff] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#4f72d6]"
        >
          Begin <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <ol className="mt-4 grid gap-2 sm:grid-cols-3">
        {tasks.map((task, i) => {
          const Icon = task.icon;
          return (
            <li
              key={i}
              className="flex flex-col gap-1.5 rounded-[10px] border border-white/10 bg-white/[0.03] p-3"
            >
              <div className="flex items-center gap-1.5 text-[#638dff]">
                <Icon className="h-3.5 w-3.5" />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em]">
                  Step {i + 1}
                </span>
              </div>
              <p className="text-sm font-semibold text-white">{task.label}</p>
              <p className="text-xs text-zinc-500">{task.detail}</p>
              {task.cta ? (
                task.cta.external ? (
                  <a
                    href={task.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-[#638dff] hover:underline"
                  >
                    {task.cta.label} <ArrowRight className="h-3 w-3" />
                  </a>
                ) : (
                  <Link
                    href={task.cta.href}
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-[#638dff] hover:underline"
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
