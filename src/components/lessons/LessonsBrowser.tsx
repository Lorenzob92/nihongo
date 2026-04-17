"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, LayoutGrid, Layers, ListFilter } from "lucide-react";
import { CURRICULUM, lessonsBySection } from "@/data/curriculum";
import { SECTIONS } from "@/data/sections";
import type { CurriculumLesson, JlptLevel } from "@/lib/types";
import { Pill } from "@/components/ui/Pill";
import { JapaneseText } from "@/components/japanese/JapaneseText";
import { cn } from "@/lib/utils";

type GroupBy = "section" | "jlpt" | "status";

const JLPT_ORDER: JlptLevel[] = ["N5", "N4", "N3", "N2", "N1"];

const STATUS_FILTERS = [
  { value: "all", label: "All" },
  { value: "built", label: "Ready" },
  { value: "planned", label: "Planned" },
] as const;

type StatusFilter = (typeof STATUS_FILTERS)[number]["value"];

export function LessonsBrowser() {
  const [groupBy, setGroupBy] = useState<GroupBy>("section");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return CURRICULUM.filter((l) => {
      if (status === "built" && l.status !== "built") return false;
      if (status === "planned" && l.status !== "planned") return false;
      if (q && !`${l.title} ${l.titleJa ?? ""} ${l.blurb}`.toLowerCase().includes(q)) {
        return false;
      }
      return true;
    });
  }, [status, search]);

  const groups = useMemo(() => {
    if (groupBy === "section") {
      return SECTIONS.map((s) => ({
        id: s.id,
        title: `Section ${s.id} · ${s.name}`,
        subtitle: s.description,
        ja: s.jaName,
        items: filtered.filter((l) => l.section === s.id),
      })).filter((g) => g.items.length > 0);
    }
    if (groupBy === "jlpt") {
      return JLPT_ORDER.map((lvl) => ({
        id: lvl,
        title: lvl,
        subtitle: `${lvl} band lessons.`,
        ja: undefined as string | undefined,
        items: filtered.filter((l) => l.jlptLevel === lvl).sort((a, b) => a.order - b.order),
      })).filter((g) => g.items.length > 0);
    }
    // status
    const built = filtered.filter((l) => l.status === "built");
    const planned = filtered.filter((l) => l.status === "planned");
    return [
      { id: "built", title: "Ready", subtitle: "Lessons you can open right now.", ja: undefined, items: built },
      { id: "planned", title: "Planned", subtitle: "Drafted in the curriculum, content not yet written.", ja: undefined, items: planned },
    ].filter((g) => g.items.length > 0);
  }, [filtered, groupBy]);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
      <header className="mb-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
          Curriculum
        </p>
        <h1 className="mt-1 text-2xl sm:text-4xl font-black tracking-tight text-white">
          75 lessons,{" "}
          <span className="text-[#638dff]">sequenced for the manga payoff</span>
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-zinc-400">
          Sections A through K. Te-form fluency by lesson 16, the relative-clause N4 unlock by lesson 28.
        </p>
      </header>

      {/* Filter bar */}
      <div className="mb-4 flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="mr-1 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
            Group by
          </span>
          {[
            { v: "section", label: "Section", Icon: Layers },
            { v: "jlpt", label: "JLPT", Icon: ListFilter },
            { v: "status", label: "Status", Icon: LayoutGrid },
          ].map(({ v, label, Icon }) => (
            <button
              key={v}
              onClick={() => setGroupBy(v as GroupBy)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold transition-colors",
                groupBy === v
                  ? "bg-[#638dff]/15 text-[#638dff] border border-[#638dff]/30"
                  : "bg-white/5 text-zinc-400 border border-white/10 hover:bg-white/10",
              )}
            >
              <Icon className="h-3 w-3" />
              {label}
            </button>
          ))}

          <div className="flex-1 hidden sm:block" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search lessons..."
            className="w-full sm:w-48 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-200 placeholder:text-zinc-600 outline-none focus:border-[#638dff]/40"
          />
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="mr-1 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
            Status
          </span>
          {STATUS_FILTERS.map((s) => (
            <button
              key={s.value}
              onClick={() => setStatus(s.value)}
              className={cn(
                "rounded-md px-2.5 py-1 text-[11px] font-semibold transition-colors",
                status === s.value
                  ? "bg-[#638dff]/15 text-[#638dff] border border-[#638dff]/30"
                  : "bg-white/5 text-zinc-400 border border-white/10 hover:bg-white/10",
              )}
            >
              {s.label}
            </button>
          ))}
          <span className="ml-2 text-[11px] text-zinc-600">
            {filtered.length} {filtered.length === 1 ? "lesson" : "lessons"}
          </span>
        </div>
      </div>

      {/* Grouped lessons */}
      <div className="space-y-7">
        {groups.map((group) => (
          <section key={String(group.id)}>
            <header className="mb-2 flex flex-wrap items-baseline justify-between gap-2 border-b border-white/10 pb-2">
              <div>
                <h2 className="text-lg sm:text-xl font-black tracking-tight text-white">
                  {group.title}{" "}
                  {group.ja ? (
                    <JapaneseText className="ml-1 text-zinc-500">({group.ja})</JapaneseText>
                  ) : null}
                </h2>
                <p className="mt-0.5 max-w-2xl text-[11px] text-zinc-500">
                  {group.subtitle}
                </p>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                {group.items.length} lessons
              </p>
            </header>

            <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {group.items.map((lesson) => (
                <LessonCard key={lesson.slug} lesson={lesson} />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}

function LessonCard({ lesson }: { lesson: CurriculumLesson }) {
  const isReady = lesson.status === "built";
  return (
    <li>
      <Link
        href={`/lessons/${lesson.slug}`}
        className={cn(
          "group flex h-full flex-col gap-2 rounded-[10px] border border-white/10 bg-surface p-3 shadow-card transition-all hover:-translate-y-0.5 hover:border-[#638dff]/40",
          !isReady && "opacity-80",
        )}
      >
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <Pill tone="jlpt">{lesson.jlptLevel}</Pill>
            <Pill tone="muted">{lesson.estimatedMin}m</Pill>
          </div>
          {isReady ? (
            <Pill tone="recommend">
              <CheckCircle2 className="h-3 w-3" /> Ready
            </Pill>
          ) : (
            <Pill tone="muted">Planned</Pill>
          )}
        </div>
        <h3 className="font-atmos text-base leading-tight text-white">
          {lesson.title}
        </h3>
        {lesson.titleJa ? (
          <JapaneseText className="text-zinc-500" size="sm">
            {lesson.titleJa}
          </JapaneseText>
        ) : null}
        <p className="text-[11px] leading-relaxed text-zinc-400 line-clamp-3">
          {lesson.blurb}
        </p>
        <span className="mt-auto inline-flex items-center gap-1 pt-1 text-[11px] font-semibold text-[#638dff] transition-transform group-hover:translate-x-0.5">
          Open <ArrowRight className="h-3 w-3" />
        </span>
      </Link>
    </li>
  );
}
