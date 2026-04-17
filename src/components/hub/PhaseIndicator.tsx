import { USER_STATE } from "@/data/user-state";
import { PHASE_META, PHASE_ORDER } from "@/lib/phase";
import { Pill } from "@/components/ui/Pill";
import { JapaneseText } from "@/components/japanese/JapaneseText";

export function PhaseIndicator() {
  const phase = PHASE_META[USER_STATE.currentPhase];
  const pct = Math.round(
    (USER_STATE.weekInPhase / USER_STATE.totalWeeksInPhase) * 100,
  );

  return (
    <section className="rounded-[20px] border border-line bg-surface p-6 sm:p-8 shadow-card">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            {USER_STATE.greetingJa}
          </p>
          <h1 className="mt-2 font-display text-3xl text-ink-deep sm:text-4xl">
            {phase.label} phase{" "}
            <JapaneseText size="3xl" className="ml-1 text-muted">
              ({phase.jaLabel})
            </JapaneseText>
          </h1>
          <p className="mt-2 max-w-md text-sm text-muted">{phase.description}</p>
        </div>
        <div className="flex flex-col items-start gap-1 sm:items-end">
          <Pill tone="muted">day {USER_STATE.dayCounter}</Pill>
          <p className="font-mono text-xs text-muted">
            week {USER_STATE.weekInPhase} of {USER_STATE.totalWeeksInPhase}
          </p>
        </div>
      </div>

      {/* Phase progress within current phase */}
      <div className="mt-6 space-y-2">
        <div className="h-2 overflow-hidden rounded-full bg-line">
          <div
            className="h-full rounded-full"
            style={{ width: `${pct}%`, background: phase.color }}
          />
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
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
    </section>
  );
}
