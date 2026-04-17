"use client";

import { useMemo, useState } from "react";
import { JapaneseText } from "@/components/japanese/JapaneseText";
import type { LessonStep } from "@/lib/types";

type Props = Extract<LessonStep, { type: "reading" }>;

/**
 * Renders a Japanese passage with click-to-define lookups.
 * V0: definitions are passed in as a flat dictionary keyed by surface form;
 * Phase 2 will swap to jmdict-simplified lookups via API.
 */
export function LessonReading(props: Props) {
  const [active, setActive] = useState<string | null>(null);

  // Build a tokenised render: split by definition keys (greedy longest first).
  const tokens = useMemo(() => {
    const keys = Object.keys(props.definitions).sort(
      (a, b) => b.length - a.length,
    );
    if (keys.length === 0) return [{ text: props.passage, key: null as string | null }];
    const parts: { text: string; key: string | null }[] = [];
    let i = 0;
    while (i < props.passage.length) {
      let matched: string | null = null;
      for (const k of keys) {
        if (props.passage.startsWith(k, i)) {
          matched = k;
          break;
        }
      }
      if (matched) {
        parts.push({ text: matched, key: matched });
        i += matched.length;
      } else {
        // accumulate plain text
        const last = parts[parts.length - 1];
        if (last && last.key === null) {
          last.text += props.passage[i];
        } else {
          parts.push({ text: props.passage[i], key: null });
        }
        i += 1;
      }
    }
    return parts;
  }, [props.passage, props.definitions]);

  return (
    <section className="space-y-6">
      <header className="space-y-1.5">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Reading
        </p>
        <h2 className="font-display text-2xl text-ink-deep sm:text-3xl">
          Tap any underlined word
        </h2>
      </header>

      <article className="rounded-[16px] border border-line bg-surface p-5 sm:p-6">
        <JapaneseText size="lg" className="leading-loose text-ink-deep">
          {tokens.map((t, i) =>
            t.key ? (
              <button
                type="button"
                key={i}
                onClick={() => setActive((a) => (a === t.key ? null : t.key))}
                className="rounded-sm decoration-accent underline decoration-dotted underline-offset-4 transition-colors hover:bg-accent-soft"
              >
                {t.text}
              </button>
            ) : (
              <span key={i}>{t.text}</span>
            ),
          )}
        </JapaneseText>

        {active ? (
          <div className="mt-4 rounded-[12px] border border-[color:var(--accent)]/20 bg-accent-soft p-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-deep">
              <JapaneseText>{active}</JapaneseText>
            </p>
            <p className="mt-1 text-sm text-ink/85">{props.definitions[active]}</p>
          </div>
        ) : null}
      </article>
    </section>
  );
}
