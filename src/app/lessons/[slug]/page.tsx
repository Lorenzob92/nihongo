import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Hammer } from "lucide-react";
import { CURRICULUM, CURRICULUM_BY_SLUG } from "@/data/curriculum";
import { getLessonContent } from "@/data/lessons";
import { LessonFlow } from "@/components/lesson/LessonFlow";
import { Pill } from "@/components/ui/Pill";
import { JapaneseText } from "@/components/japanese/JapaneseText";
import { LinkButton } from "@/components/ui/Button";

type Params = { slug: string };

export function generateStaticParams() {
  return CURRICULUM.map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lesson = CURRICULUM_BY_SLUG[slug];
  if (!lesson) return { title: "Lesson not found" };
  return {
    title: lesson.title,
    description: lesson.blurb,
  };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const lesson = CURRICULUM_BY_SLUG[slug];
  if (!lesson) notFound();

  const content = getLessonContent(slug);
  if (content) {
    return <LessonFlow content={content} />;
  }

  // Placeholder for lessons not yet built
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/lessons"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-ink"
      >
        <ArrowLeft className="h-3 w-3" /> All lessons
      </Link>

      <header className="mt-6 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Pill tone="accent">Section {lesson.section}</Pill>
          <Pill tone="muted">{lesson.jlptLevel}</Pill>
          <Pill tone="muted">{lesson.estimatedMin} min</Pill>
        </div>
        <h1 className="font-display text-3xl text-ink-deep sm:text-4xl">
          {lesson.title}
        </h1>
        {lesson.titleJa ? (
          <JapaneseText size="2xl" className="text-muted">
            {lesson.titleJa}
          </JapaneseText>
        ) : null}
        <p className="text-base leading-relaxed text-ink/80">{lesson.blurb}</p>
      </header>

      <section className="mt-8 rounded-[20px] border border-[color:var(--accent)]/20 bg-accent-soft p-6 sm:p-8 shadow-card">
        <div className="flex items-start gap-3">
          <span className="grid h-12 w-12 flex-none place-items-center rounded-full bg-surface text-accent-deep">
            <Hammer className="h-5 w-5" />
          </span>
          <div className="space-y-2">
            <h2 className="font-display text-2xl text-ink-deep">
              Coming soon
            </h2>
            <p className="text-sm leading-relaxed text-ink/85">
              This lesson is in the curriculum but not yet built. The structure is the standard 8-section template (hook, concept, examples, drill, listening, reading, cheatsheet, wrap). A Phase 2 agent will fill it with example sentences, drills, audio and a printable cheatsheet.
            </p>
            <p className="text-xs text-muted">
              Want to build it yourself? Add a file at{" "}
              <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[11px] text-ink">
                src/data/lessons/{lesson.slug}.ts
              </code>{" "}
              and register it in{" "}
              <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[11px] text-ink">
                src/data/lessons/index.ts
              </code>
              .
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <LinkButton href="/lessons/na-adjectives" variant="primary">
            See the demo lesson
          </LinkButton>
          <LinkButton href="/lessons" variant="secondary">
            Pick another
          </LinkButton>
        </div>
      </section>

      {lesson.prereqs.length > 0 ? (
        <section className="mt-8">
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Prerequisites
          </p>
          <ul className="flex flex-wrap gap-2">
            {lesson.prereqs.map((p) => {
              const pre = CURRICULUM_BY_SLUG[p];
              if (!pre) return null;
              return (
                <li key={p}>
                  <Link
                    href={`/lessons/${p}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1 text-xs text-ink hover:border-line-strong"
                  >
                    {pre.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
