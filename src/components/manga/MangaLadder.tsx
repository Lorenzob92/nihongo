import { CheckCircle2, Circle, Lock, Play } from "lucide-react";
import { MANGA_LADDER } from "@/data/manga-ladder";
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
        return (
          <li
            key={m.rung}
            className={cn(
              "flex flex-col gap-3 rounded-[16px] border bg-surface p-5 shadow-card sm:flex-row sm:items-start",
              isCurrent ? "border-accent" : "border-line",
              m.status === "locked" && "opacity-60",
            )}
          >
            <div className="flex flex-none items-center gap-3 sm:flex-col sm:items-center sm:justify-center sm:gap-1 sm:pr-4">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-surface-soft font-display text-xl text-ink-deep">
                {m.rung}
              </span>
              <Pill tone={meta.tone}>
                <Icon className="h-3 w-3" /> {meta.label}
              </Pill>
            </div>

            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="font-display text-2xl text-ink-deep">{m.title}</h3>
                {m.titleJa ? (
                  <JapaneseText size="lg" className="text-muted">
                    {m.titleJa}
                  </JapaneseText>
                ) : null}
              </div>
              <p className="text-sm text-ink/80">{m.notes}</p>
              <div className="flex flex-wrap gap-2">
                <Pill tone="muted">{m.jlptLevel}</Pill>
                {m.jpdbLevel ? <Pill tone="muted">jpdb {m.jpdbLevel}</Pill> : null}
                {m.tier ? <Pill tone="muted">tier {m.tier}</Pill> : null}
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
