import { Quote } from "lucide-react";
import { JapaneseText } from "@/components/japanese/JapaneseText";
import { RichText } from "./RichText";
import type { LessonStep } from "@/lib/types";

type Props = Extract<LessonStep, { type: "hook" }>;

export function LessonHook(props: Props) {
  return (
    <section className="space-y-6">
      <header className="space-y-1.5">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Why this matters
        </p>
        <h2 className="font-display text-2xl text-ink-deep sm:text-3xl">
          The pitch
        </h2>
      </header>

      <RichText text={props.whyItMatters} />

      {props.mediaExample ? (
        <figure className="rounded-[16px] border border-[color:var(--accent)]/25 bg-[color:var(--accent)]/8 p-5">
          <div className="flex items-start gap-3">
            <Quote className="mt-0.5 h-4 w-4 flex-none text-accent-deep" />
            <div className="space-y-2">
              <JapaneseText size="xl" className="block text-ink-deep">
                {props.mediaExample.quote}
              </JapaneseText>
              <figcaption className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                {props.mediaExample.source}
              </figcaption>
            </div>
          </div>
        </figure>
      ) : null}
    </section>
  );
}
