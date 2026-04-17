import { JapaneseText } from "@/components/japanese/JapaneseText";
import type { LessonStep } from "@/lib/types";

type Props = Extract<LessonStep, { type: "concept" }>;

export function LessonConcept(props: Props) {
  return (
    <section className="space-y-6">
      <header className="space-y-1.5">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Concept
        </p>
        <h2 className="font-display text-2xl text-ink-deep sm:text-3xl">
          The rule, in plain English
        </h2>
      </header>

      <p className="text-base leading-relaxed text-ink/85 sm:text-lg">
        {props.explanation}
      </p>

      {props.formulaJa ? (
        <div className="rounded-[16px] border border-line bg-surface-soft p-5">
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Pattern
          </p>
          <JapaneseText size="lg" className="text-ink-deep">
            {props.formulaJa}
          </JapaneseText>
        </div>
      ) : null}

      {props.cureDollyTake ? (
        <div className="rounded-[16px] border border-[color:var(--accent)]/20 bg-accent-soft p-5">
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-deep">
            Structural take (Cure Dolly)
          </p>
          <p className="text-sm leading-relaxed text-ink/85">
            {props.cureDollyTake}
          </p>
        </div>
      ) : null}
    </section>
  );
}
