import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { MANGA_LADDER } from "@/data/manga-ladder";
import { MANGA_COVERS } from "@/data/manga-covers";
import { USER_STATE } from "@/data/user-state";
import { cn } from "@/lib/utils";

export function MangaLadderMini() {
  const current = USER_STATE.currentMangaRung;

  return (
    <section className="rounded-[16px] border border-white/10 bg-surface p-4 sm:p-5 shadow-card">
      <header className="mb-3 flex items-baseline justify-between">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-zinc-400">
            Manga ladder
          </h2>
          <p className="text-[11px] text-zinc-500">
            12 rungs from Yotsubato to Berserk.
          </p>
        </div>
        <Link
          href="/manga-ladder"
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#638dff] hover:underline"
        >
          Open <ArrowRight className="h-3 w-3" />
        </Link>
      </header>

      <ol className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 scrollbar-hide">
        {MANGA_LADDER.map((m) => {
          const cover = MANGA_COVERS[m.slug];
          const isCurrent = m.rung === current;
          const isLocked = m.status === "locked";
          return (
            <li key={m.rung} className="flex-none">
              <Link
                href={`/manga-ladder/${m.slug}`}
                className={cn(
                  "flex w-20 sm:w-24 flex-col gap-1.5 rounded-[10px] border bg-white/[0.02] p-2 transition-all hover:-translate-y-0.5 hover:border-white/20",
                  isCurrent && "border-[#638dff]/50 ring-1 ring-[#638dff]/30",
                  !isCurrent && "border-white/10",
                  isLocked && "opacity-50",
                )}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[6px] bg-black">
                  {cover?.coverLarge ? (
                    <Image
                      src={cover.coverLarge}
                      alt={m.title}
                      fill
                      sizes="100px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="grid h-full place-items-center font-jp text-zinc-600">
                      {m.titleJa?.[0] ?? "?"}
                    </div>
                  )}
                  {isCurrent ? (
                    <span className="absolute left-1 top-1 rounded-sm bg-[#638dff] px-1 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white">
                      Now
                    </span>
                  ) : null}
                </div>
                <div className="flex items-baseline justify-between gap-1 px-0.5">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">
                    #{m.rung}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">
                    {m.jlptLevel}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
