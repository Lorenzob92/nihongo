import { USER_STATE } from "@/data/user-state";
import { CURRICULUM_BY_SLUG } from "@/data/curriculum";
import { MANGA_LADDER } from "@/data/manga-ladder";
import { MANGA_COVERS } from "@/data/manga-covers";
import { PHASE_META, PHASE_ORDER } from "@/lib/phase";
import { Pill } from "@/components/ui/Pill";
import Image from "next/image";

export function PhaseIndicator() {
  const phase = PHASE_META[USER_STATE.currentPhase];
  const pct = Math.round(
    (USER_STATE.weekInPhase / USER_STATE.totalWeeksInPhase) * 100,
  );
  const lesson = CURRICULUM_BY_SLUG[USER_STATE.todaySession.lessonSlug];

  // Lift the cover-collage idea: pull the next 6 manga rungs (current + upcoming).
  const upcoming = MANGA_LADDER
    .filter((m) => m.rung >= USER_STATE.currentMangaRung)
    .slice(0, 6)
    .map((m) => ({ ...m, cover: MANGA_COVERS[m.slug] }))
    .filter((m) => m.cover?.coverLarge);

  return (
    <section className="relative overflow-hidden rounded-[16px] border border-white/10 hero-halo p-5 sm:p-7">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:gap-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              {USER_STATE.greetingJa}
            </span>
            <Pill tone="phase" phaseColor={phase.color}>
              {phase.label}
            </Pill>
            <Pill tone="muted">day {USER_STATE.dayCounter}</Pill>
          </div>
          <h1 className="mt-3 text-3xl sm:text-5xl font-black tracking-tight text-white">
            <span className="text-[#638dff]">15&nbsp;min</span> today,
            <br className="hidden sm:block" /> three small bites.
          </h1>
          <p className="mt-3 max-w-xl text-sm text-zinc-400">
            {phase.description} Week {USER_STATE.weekInPhase} of {USER_STATE.totalWeeksInPhase}{lesson ? ` · current lesson: ${lesson.title}.` : "."}
          </p>

          {/* Phase progress within current phase */}
          <div className="mt-5 space-y-2">
            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full"
                style={{ width: `${pct}%`, background: phase.color }}
              />
            </div>
            <div className="flex flex-wrap items-center gap-3 text-[11px] text-zinc-500">
              {PHASE_ORDER.map((p) => {
                const meta = PHASE_META[p];
                const isCurrent = p === USER_STATE.currentPhase;
                return (
                  <span
                    key={p}
                    className="inline-flex items-center gap-1.5"
                    style={isCurrent ? { color: meta.color } : undefined}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: meta.color, opacity: isCurrent ? 1 : 0.4 }}
                    />
                    {meta.label}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* Cover collage of upcoming manga rungs */}
        {upcoming.length > 0 ? (
          <div className="flex items-end gap-1.5 lg:gap-2 -mr-2 lg:-mr-4 overflow-hidden">
            {upcoming.map((m, i) => (
              <div
                key={m.slug}
                className="relative aspect-[3/4] w-14 sm:w-16 lg:w-20 overflow-hidden rounded-md border border-white/10 shadow-card"
                style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 3}deg)` }}
              >
                {m.cover?.coverLarge ? (
                  <Image
                    src={m.cover.coverLarge}
                    alt={m.title}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                ) : null}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
