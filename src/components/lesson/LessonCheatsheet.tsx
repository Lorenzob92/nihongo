"use client";

import { useState } from "react";
import { JapaneseText } from "@/components/japanese/JapaneseText";
import { withRuby } from "@/lib/ruby";
import { cn } from "@/lib/utils";
import type { CheatFix, CheatRule, LessonStep } from "@/lib/types";

type Props = Extract<LessonStep, { type: "cheatsheet" }>;

/** Strip 漢字(かな) readings so two spellings of a sentence compare equal. */
const bare = (s: string) => s.replace(/\([ぁ-ゖァ-ヺー]+\)/g, "").trim();

/** Older lessons only have a summary paragraph: break it into short points. */
function summaryPoints(summary: string): string[][] {
  return summary
    .split(/\n{2,}/)
    .map((para) =>
      para
        .split(/(?<=[.。!?])\s+(?=[A-Z"“\[぀-ヿ一-鿿])/)
        .map((s) => s.trim())
        .filter(Boolean),
    )
    .filter((p) => p.length > 0);
}

type Group = { heading?: string; rows: string[][] };

/** A table row with text only in its first cell is a group heading. */
function groupRows(table: string[][]): Group[] {
  const groups: Group[] = [];
  for (const row of table) {
    const isHeading = row.length > 1 && row.slice(1).every((c) => !c.trim());
    if (isHeading) {
      groups.push({ heading: row[0], rows: [] });
      continue;
    }
    if (groups.length === 0) groups.push({ rows: [] });
    groups[groups.length - 1].rows.push(row);
  }
  return groups.filter((g) => g.rows.length > 0);
}

function RuleCard({ rule }: { rule: CheatRule }) {
  return (
    <article className="rounded-[16px] border border-line bg-surface p-5">
      <h3 className="text-lg font-semibold leading-snug text-ink-deep">
        {withRuby(rule.title)}
      </h3>

      {rule.formula ? (
        <div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2.5">
          {rule.formula.map((part, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 ? <span className="text-sm text-muted">+</span> : null}
              <span
                lang="ja"
                className={cn(
                  "font-jp rounded-[10px] px-3 pb-1.5 pt-2.5 text-base leading-[1.9]",
                  part.key
                    ? "bg-accent font-bold text-white"
                    : "border border-line-strong text-ink/90",
                )}
              >
                {withRuby(part.text)}
              </span>
            </span>
          ))}
        </div>
      ) : null}

      {rule.note ? (
        <p className="mt-4 text-[15px] leading-relaxed text-ink/80">
          {withRuby(rule.note)}
        </p>
      ) : null}

      {rule.right || rule.wrong ? (
        <ul className="mt-4 space-y-2">
          {rule.right?.map((r, i) => (
            <li
              key={`r${i}`}
              className="rounded-[12px] bg-[color:var(--recommend)]/10 px-4 py-3"
            >
              <div className="flex items-start gap-2.5">
                <span aria-hidden className="mt-1.5 text-sm font-bold text-recommend">
                  ✓
                </span>
                <div>
                  <JapaneseText size="lg" className="block leading-[2] text-ink-deep">
                    {r.ja}
                  </JapaneseText>
                  {r.en ? <p className="text-sm text-ink/70">{r.en}</p> : null}
                </div>
              </div>
            </li>
          ))}
          {rule.wrong?.map((w, i) => (
            <li
              key={`w${i}`}
              className="rounded-[12px] bg-[color:var(--warn)]/10 px-4 py-3"
            >
              <div className="flex items-start gap-2.5">
                <span aria-hidden className="mt-1.5 text-sm font-bold text-warn">
                  ✗
                </span>
                <div>
                  <JapaneseText size="lg" className="block leading-[2] text-ink/70">
                    {w.ja}
                  </JapaneseText>
                  {w.why ? <p className="text-sm text-ink/70">{withRuby(w.why)}</p> : null}
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

function FixRow({ fix }: { fix: CheatFix }) {
  return (
    <li className="px-5 py-4">
      <p className="flex items-baseline gap-2 text-warn/90">
        <span aria-hidden className="text-sm font-bold">✗</span>
        <JapaneseText className="leading-[2]">{fix.wrong}</JapaneseText>
      </p>
      <p className="flex items-baseline gap-2 text-recommend">
        <span aria-hidden className="text-sm font-bold">✓</span>
        <JapaneseText size="xl" className="font-semibold leading-[2]">
          {fix.right}
        </JapaneseText>
      </p>
      <p className="mt-1 text-sm leading-relaxed text-ink/70">{withRuby(fix.why)}</p>
    </li>
  );
}

export function LessonCheatsheet(props: Props) {
  const [furigana, setFurigana] = useState(true);
  const [romaji, setRomaji] = useState(true);

  const table = props.conjugationTable;
  const stackable = table ? table.every((r) => r.length <= 3) : false;
  // Drop a plain column-label row: stacked rows do not need one.
  const body =
    table && stackable && /^(japanese|form|pattern|verb)$/i.test(table[0]?.[0]?.trim() ?? "")
      ? table.slice(1)
      : table;
  const groups = body && stackable ? groupRows(body) : [];

  // The sentence list often repeats what the table already shows. Show it once.
  const inTable = new Set((table ?? []).map((r) => bare(r[0] ?? "")));
  const anchors = props.anchorSentences.filter((s) => !inTable.has(bare(s)));

  return (
    <section className={cn("space-y-6", !furigana && "[&_rt]:invisible")}>
      <header className="space-y-3">
        <div className="space-y-1.5">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Cheatsheet
          </p>
          <h2 className="font-display text-2xl text-ink-deep sm:text-3xl">
            The rule at a glance
          </h2>
        </div>
        <div className="flex gap-2">
          {(
            [
              ["Furigana", furigana, setFurigana],
              ["Romaji", romaji, setRomaji],
            ] as const
          ).map(([label, on, set]) => (
            <button
              key={label}
              type="button"
              aria-pressed={on}
              onClick={() => set(!on)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]",
                on
                  ? "border-[color:var(--accent)]/50 bg-accent-soft text-ink-deep"
                  : "border-line text-muted",
              )}
            >
              {label} {on ? "on" : "off"}
            </button>
          ))}
        </div>
      </header>

      {props.rules ? (
        <div className="space-y-4">
          {props.rules.map((rule, i) => (
            <RuleCard key={i} rule={rule} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {summaryPoints(props.summary).map((points, i) => (
            <div key={i} className="rounded-[16px] border border-line bg-surface p-5">
              <ul className="space-y-2.5">
                {points.map((pt, j) => (
                  <li
                    key={j}
                    className={cn(
                      "leading-relaxed",
                      i === 0 && j === 0
                        ? "text-base font-semibold text-ink-deep"
                        : "flex gap-3 text-[15px] text-ink/85",
                    )}
                  >
                    {i === 0 && j === 0 ? null : (
                      <span
                        aria-hidden
                        className="mt-[0.6em] h-1.5 w-1.5 flex-none rounded-full bg-accent"
                      />
                    )}
                    <span>{withRuby(pt)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {props.fixes ? (
        <div className="overflow-hidden rounded-[16px] border border-line bg-surface">
          <h3 className="border-b border-line px-5 py-3.5 text-base font-semibold text-ink-deep">
            {props.fixesTitle ?? "Your slips, fixed"}
          </h3>
          <ul className="divide-y divide-[color:var(--line)]">
            {props.fixes.map((fix, i) => (
              <FixRow key={i} fix={fix} />
            ))}
          </ul>
        </div>
      ) : null}

      {anchors.length > 0 ? (
        <div className="rounded-[16px] border border-line bg-surface p-5">
          <h3 className="mb-3 text-base font-semibold text-ink-deep">
            {props.anchorTitle ?? "Anchor sentences"}
          </h3>
          <ol className="space-y-2">
            {anchors.map((s, i) => (
              <li key={i} className="flex items-baseline gap-3">
                <span className="font-mono text-[11px] text-muted-soft">{i + 1}.</span>
                <JapaneseText size="lg" className="leading-[2] text-ink-deep">
                  {s}
                </JapaneseText>
              </li>
            ))}
          </ol>
        </div>
      ) : null}

      {groups.map((group, gi) => (
        <div key={gi} className="overflow-hidden rounded-[16px] border border-line bg-surface">
          {group.heading ? (
            <h3 className="border-b border-line bg-surface-soft px-5 py-3.5 text-base font-semibold text-ink-deep">
              {withRuby(group.heading)}
            </h3>
          ) : null}
          <ul className="divide-y divide-[color:var(--line)]">
            {group.rows.map((row, ri) => (
              <li key={ri} className="px-5 py-3.5">
                <JapaneseText size="lg" className="block leading-[2] text-ink-deep">
                  {row[0]}
                </JapaneseText>
                {row[1] ? (
                  <p className="text-[15px] leading-relaxed text-ink/75">{withRuby(row[1])}</p>
                ) : null}
                {row[2] && romaji ? (
                  <p className="mt-0.5 text-xs italic leading-relaxed text-muted">{row[2]}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {table && !stackable ? (
        <div className="overflow-x-auto rounded-[16px] border border-line bg-surface">
          <table className="w-full border-collapse text-sm">
            <tbody>
              {table.map((row, i) => (
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
                      className={cn("px-4 py-2", j === 0 && "font-medium text-ink/80")}
                    >
                      <JapaneseText>{cell}</JapaneseText>
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
