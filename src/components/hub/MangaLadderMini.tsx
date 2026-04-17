import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MANGA_LADDER } from "@/data/manga-ladder";
import { USER_STATE } from "@/data/user-state";
import { cn } from "@/lib/utils";
import { JapaneseText } from "@/components/japanese/JapaneseText";

export function MangaLadderMini() {
  const current = USER_STATE.currentMangaRung;

  return (
    <section className="rounded-[20px] border border-line bg-surface p-6 shadow-card">
      <header className="mb-4 flex items-baseline justify-between">
        <div>
          <h2 className="font-display text-xl text-ink-deep">
            Manga ladder{" "}
            <JapaneseText size="lg" className="ml-1 text-muted">
              漫画の梯子
            </JapaneseText>
          </h2>
          <p className="text-xs text-muted">12 rungs from Yotsubato to the boss fights.</p>
        </div>
        <Link
          href="/manga-ladder"
          className="inline-flex items-center gap-1 text-xs font-medium text-accent-deep hover:underline"
        >
          Open <ArrowRight className="h-3 w-3" />
        </Link>
      </header>

      <ol className="-mx-2 flex gap-2 overflow-x-auto px-2 pb-2">
        {MANGA_LADDER.map((m) => {
          const isCurrent = m.rung === current;
          const isComplete = m.status === "complete";
          const isLocked = m.status === "locked";
          return (
            <li key={m.rung} className="flex-none">
              <div
                className={cn(
                  "flex h-32 w-28 flex-col items-center justify-between rounded-[14px] border p-3 text-center transition-all",
                  isCurrent && "border-accent bg-accent-soft ink-pulse",
                  !isCurrent && isComplete && "border-line bg-surface-soft",
                  !isCurrent && !isComplete && !isLocked && "border-line bg-surface",
                  isLocked && "border-line bg-surface opacity-50",
                )}
              >
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                  rung {m.rung}
                </span>
                <p
                  lang="ja"
                  className="font-display text-sm leading-tight text-ink-deep"
                >
                  {m.titleJa ?? m.title}
                </p>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                  {m.jlptLevel}
                </span>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
