import { JapaneseText } from "@/components/japanese/JapaneseText";
import type { LessonStep } from "@/lib/types";

type Props = Extract<LessonStep, { type: "cheatsheet" }>;

export function LessonCheatsheet(props: Props) {
  return (
    <section className="space-y-6">
      <header className="space-y-1.5">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Cheatsheet
        </p>
        <h2 className="font-display text-2xl text-ink-deep sm:text-3xl">
          Save this. Print it. Keep it.
        </h2>
      </header>

      <div className="rounded-[16px] border border-line bg-surface p-5">
        <p className="text-base leading-relaxed text-ink/85">{props.summary}</p>
      </div>

      <div className="rounded-[16px] border border-line bg-surface p-5">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Anchor sentences
        </p>
        <ol className="space-y-2">
          {props.anchorSentences.map((s, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1 font-mono text-[11px] text-muted-soft">{i + 1}.</span>
              <JapaneseText size="lg" className="text-ink-deep">
                {s}
              </JapaneseText>
            </li>
          ))}
        </ol>
      </div>

      {props.conjugationTable ? (
        <div className="overflow-x-auto rounded-[16px] border border-line bg-surface">
          <table className="w-full border-collapse text-sm">
            <tbody>
              {props.conjugationTable.map((row, i) => (
                <tr
                  key={i}
                  className={
                    i === 0
                      ? "border-b border-line bg-surface-soft text-muted"
                      : "border-b border-line last:border-0"
                  }
                >
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={
                        j === 0
                          ? "px-4 py-2 font-medium text-ink/80"
                          : j === 1
                            ? "px-4 py-2"
                            : "px-4 py-2 text-muted"
                      }
                    >
                      {j === 1 ? <JapaneseText>{cell}</JapaneseText> : cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </section>
  );
}
