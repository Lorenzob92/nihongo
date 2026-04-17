import { USER_STATE } from "@/data/user-state";

type Rail = {
  label: string;
  jaLabel: string;
  current: number;
  target: number;
  unit?: string;
};

export function ProgressRails() {
  const r = USER_STATE.rails;
  const rails: Rail[] = [
    { label: "Kanji", jaLabel: "漢字", current: r.kanjiKnown, target: r.kanjiTarget },
    { label: "Grammar", jaLabel: "文法", current: r.grammarKnown, target: r.grammarTarget },
    { label: "Vocab", jaLabel: "語彙", current: r.vocabInQueue, target: r.vocabTarget },
    { label: "Hours / wk", jaLabel: "今週", current: r.hoursThisWeek, target: r.hoursTarget, unit: "h" },
  ];

  return (
    <section>
      <header className="mb-3 flex items-baseline justify-between">
        <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-zinc-400">Progress</h2>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">mocked V0</p>
      </header>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {rails.map((rail) => {
          const pct = Math.min(100, Math.round((rail.current / rail.target) * 100));
          return (
            <div
              key={rail.label}
              className="rounded-[10px] border border-white/10 bg-surface p-3 shadow-card"
            >
              <div className="flex items-baseline justify-between">
                <p className="text-[11px] font-semibold text-zinc-400">{rail.label}</p>
                <span lang="ja" className="font-jp text-[10px] text-zinc-600">
                  {rail.jaLabel}
                </span>
              </div>
              <div className="mt-1.5 flex items-baseline gap-1">
                <span className="text-2xl font-black tracking-tight text-white">
                  {rail.current}
                  {rail.unit ?? ""}
                </span>
                <span className="text-[11px] text-zinc-500">
                  / {rail.target}
                  {rail.unit ?? ""}
                </span>
              </div>
              <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-[#638dff]"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <p className="mt-1 font-mono text-[10px] text-zinc-600">{pct}%</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
