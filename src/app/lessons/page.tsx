import Link from "next/link";
import type { Metadata } from "next";
import { CURRICULUM, lessonsBySection } from "@/data/curriculum";
import { SECTIONS } from "@/data/sections";
import { Pill } from "@/components/ui/Pill";
import { JapaneseText } from "@/components/japanese/JapaneseText";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Lessons",
  description: "All 75 lessons in the curriculum, grouped by section A through K.",
};

export default function LessonsIndexPage() {
  const builtCount = CURRICULUM.filter((l) => l.status === "built").length;

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
      <header className="mb-8 space-y-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Curriculum
        </p>
        <h1 className="font-display text-3xl text-ink-deep sm:text-4xl">
          75 lessons, sequenced for the manga payoff
        </h1>
        <p className="max-w-2xl text-sm text-muted">
          Sections A through K, designed so te-form fluency arrives by lesson 16 and the relative-clause N4 unlock by lesson 28. Most are placeholders; one is ready to go.
        </p>
        <div className="flex flex-wrap gap-2">
          <Pill tone="recommend">{builtCount} ready</Pill>
          <Pill tone="muted">{CURRICULUM.length - builtCount} planned</Pill>
        </div>
      </header>

      <div className="space-y-10">
        {SECTIONS.map((section) => {
          const lessons = lessonsBySection(section.id);
          if (lessons.length === 0) return null;
          return (
            <section key={section.id}>
              <header className="mb-3 flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-3">
                <div>
                  <h2 className="font-display text-2xl text-ink-deep">
                    Section {section.id} · {section.name}{" "}
                    <JapaneseText className="ml-1 text-muted" size="lg">
                      ({section.jaName})
                    </JapaneseText>
                  </h2>
                  <p className="mt-1 max-w-2xl text-xs text-muted">{section.description}</p>
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {lessons.length} lessons
                </p>
              </header>

              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {lessons.map((lesson) => {
                  const isReady = lesson.status === "built";
                  return (
                    <li key={lesson.slug}>
                      <Link
                        href={`/lessons/${lesson.slug}`}
                        className="group flex h-full flex-col gap-2 rounded-[16px] border border-line bg-surface p-4 shadow-card transition-all hover:-translate-y-0.5 hover:border-line-strong"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5">
                            <Pill tone="muted">{lesson.jlptLevel}</Pill>
                            <Pill tone="muted">{lesson.estimatedMin} min</Pill>
                          </div>
                          {isReady ? (
                            <Pill tone="recommend">
                              <CheckCircle2 className="h-3 w-3" /> Ready
                            </Pill>
                          ) : (
                            <Pill tone="muted">Planned</Pill>
                          )}
                        </div>
                        <h3 className="font-display text-lg leading-tight text-ink-deep">
                          {lesson.title}
                        </h3>
                        {lesson.titleJa ? (
                          <JapaneseText className="text-muted">{lesson.titleJa}</JapaneseText>
                        ) : null}
                        <p className="text-xs leading-relaxed text-ink/75">{lesson.blurb}</p>
                        <span className="mt-auto inline-flex items-center gap-1 pt-2 text-xs font-medium text-accent-deep transition-transform group-hover:translate-x-0.5">
                          Open <ArrowRight className="h-3 w-3" />
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </main>
  );
}
