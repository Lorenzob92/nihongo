import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Circle, Lock, Play, ArrowRight } from "lucide-react";
import { MANGA_LADDER } from "@/data/manga-ladder";
import { MANGA_COVERS } from "@/data/manga-covers";
import { USER_STATE } from "@/data/user-state";
import { Pill } from "@/components/ui/Pill";
import { JapaneseText } from "@/components/japanese/JapaneseText";
import { cn } from "@/lib/utils";

const STATUS_META: Record<
  string,
  { icon: React.ComponentType<{ className?: string }>; label: string; tone: "recommend" | "accent" | "muted" }
> = {
  complete: { icon: CheckCircle2, label: "Complete", tone: "recommend" },
  current: { icon: Play, label: "Current", tone: "accent" },
  upcoming: { icon: Circle, label: "Upcoming", tone: "muted" },
  locked: { icon: Lock, label: "Locked", tone: "muted" },
};

export function MangaLadder() {
  const current = USER_STATE.currentMangaRung;

  return (
    <ol className="space-y-3">
      {MANGA_LADDER.map((m) => {
        const meta = STATUS_META[m.status];
        const Icon = meta.icon;
        const isCurrent = m.rung === current;
        const cover = MANGA_COVERS[m.slug];
        return (
          <li key={m.rung}>
            <Link
              href={`/manga-ladder/${m.slug}`}
              className={cn(
                "group flex gap-4 rounded-[14px] border bg-surface p-3 sm:p-4 shadow-card transition-all hover:-translate-y-0.5 hover:border-[#638dff]/40",
                isCurrent ? "border-[#638dff]/50 ring-1 ring-[#638dff]/30" : "border-white/10",
                m.status === "locked" && "opacity-60",
              )}
            >
              <div className="relative h-32 sm:h-40 w-24 sm:w-28 flex-none overflow-hidden rounded-[8px] border border-white/10 bg-black">
                {cover?.coverLarge ? (
                  <Image
                    src={cover.coverLarge}
                    alt={m.title}
                    fill
                    sizes="120px"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                ) : (
                  <div className="grid h-full place-items-center font-jp text-2xl text-zinc-600">
                    {m.titleJa?.[0] ?? "?"}
                  </div>
                )}
                <span className="absolute left-1.5 top-1.5 grid h-6 w-6 place-items-center rounded-md bg-black/70 font-mono text-[10px] font-bold text-white backdrop-blur-sm">
                  {m.rung}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-1.5">
                <div className="flex flex-wrap items-center gap-1.5">
                  <Pill tone={meta.tone}>
                    <Icon className="h-3 w-3" /> {meta.label}
                  </Pill>
                  <Pill tone="jlpt">{m.jlptLevel}</Pill>
                  {m.jpdbLevel ? <Pill tone="muted">jpdb {m.jpdbLevel}</Pill> : null}
                  {m.tier ? <Pill tone="muted">{m.tier}-tier</Pill> : null}
                </div>
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                    {m.title}
                  </h3>
                  {m.titleJa ? (
                    <JapaneseText size="base" className="text-zinc-500 font-atmos">
                      {m.titleJa}
                    </JapaneseText>
                  ) : null}
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2">{m.notes}</p>
                <span className="mt-auto inline-flex items-center gap-1 text-[11px] font-semibold text-[#638dff] transition-transform group-hover:translate-x-0.5">
                  Details <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
