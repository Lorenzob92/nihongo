import { USER_STATE } from "@/data/user-state";
import { Card } from "@/components/ui/Card";

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
    { label: "Kanji recognised", jaLabel: "漢字", current: r.kanjiKnown, target: r.kanjiTarget },
    { label: "Grammar points known", jaLabel: "文法", current: r.grammarKnown, target: r.grammarTarget },
    { label: "Vocab in Anki queue", jaLabel: "語彙", current: r.vocabInQueue, target: r.vocabTarget },
    { label: "Hours this week", jaLabel: "今週の時間", current: r.hoursThisWeek, target: r.hoursTarget, unit: "h" },
  ];

  return (
    <section>
      <header className="mb-3 flex items-baseline justify-between">
        <h2 className="font-display text-xl text-ink-deep">Progress rails</h2>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          mocked for V0
        </p>
      </header>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {rails.map((rail) => {
          const pct = Math.min(100, Math.round((rail.current / rail.target) * 100));
          return (
            <Card key={rail.label} className="space-y-3">
              <div className="flex items-baseline justify-between">
                <p className="text-xs font-medium text-muted">{rail.label}</p>
                <span lang="ja" className="font-jp text-[11px] text-muted-soft">
                  {rail.jaLabel}
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-display text-3xl text-ink-deep">
                  {rail.current}
                  {rail.unit ?? ""}
                </span>
                <span className="text-sm text-muted">
                  / {rail.target}
                  {rail.unit ?? ""}
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-line">
                <div
                  className="h-full rounded-full bg-accent"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <p className="font-mono text-[11px] text-muted">{pct}%</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
