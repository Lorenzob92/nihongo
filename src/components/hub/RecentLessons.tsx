import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { builtLessonsNewestFirst, NEW_LESSON_SLUGS } from "@/data/curriculum";
import { formatBuiltDate } from "@/lib/format";
import { JapaneseText } from "@/components/japanese/JapaneseText";

export function RecentLessons() {
  const recent = builtLessonsNewestFirst().slice(0, 4);
  if (recent.length === 0) return null;

  return (
    <section className="rounded-[16px] border border-white/10 bg-surface p-5 sm:p-6 shadow-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div className="flex items-center gap-2">
          <Clock className="h-3.5 w-3.5 text-[#638dff]" />
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
            Recently added
          </p>
        </div>
        <Link
          href="/lessons"
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#638dff] hover:underline"
        >
          All lessons <ArrowRight className="h-3 w-3" />
        </Link>
      </div>

      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {recent.map((lesson) => {
          const isNew = NEW_LESSON_SLUGS.has(lesson.slug);
          const date = formatBuiltDate(lesson.created);
          return (
            <li key={lesson.slug}>
              <Link
                href={`/lessons/${lesson.slug}`}
                className="group flex h-full flex-col gap-1 rounded-[10px] border border-white/10 bg-white/[0.03] p-3 transition-all hover:-translate-y-0.5 hover:border-[#638dff]/40"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                    {lesson.jlptLevel} · Section {lesson.section}
                  </span>
                  {isNew ? (
                    <span className="inline-flex items-center rounded-full bg-[#638dff] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                      New
                    </span>
                  ) : date ? (
                    <span className="font-mono text-[10px] text-zinc-600">{date}</span>
                  ) : null}
                </div>
                <p className="text-sm font-semibold text-white">{lesson.title}</p>
                {lesson.titleJa ? (
                  <JapaneseText className="text-zinc-500" size="sm">
                    {lesson.titleJa}
                  </JapaneseText>
                ) : null}
                <span className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-[#638dff] transition-transform group-hover:translate-x-0.5">
                  Open <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
