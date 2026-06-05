import { JapaneseText } from "@/components/japanese/JapaneseText";
import { RichText } from "./RichText";
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

      <RichText text={props.explanation} />

      {props.formulaJa ? (
        <div className="rounded-[16px] border border-[color:var(--accent)]/30 bg-[color:var(--accent)]/8 p-5">
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-deep">
            Pattern
          </p>
          <JapaneseText size="lg" className="block text-ink-deep">
            {props.formulaJa}
          </JapaneseText>
        </div>
      ) : null}

      {props.cureDollyTake ? (
        <div className="rounded-[16px] border border-[color:var(--accent)]/20 bg-accent-soft p-5">
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-deep">
            Structural take (Cure Dolly)
          </p>
          <RichText
            text={props.cureDollyTake}
            className="text-sm sm:text-[15px]"
          />
        </div>
      ) : null}
    </section>
  );
}
