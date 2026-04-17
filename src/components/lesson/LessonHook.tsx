import { Quote } from "lucide-react";
import { JapaneseText } from "@/components/japanese/JapaneseText";
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
          {props.whyItMatters}
        </h2>
      </header>

      {props.mediaExample ? (
        <figure className="rounded-[16px] border border-line bg-surface-soft p-5">
          <div className="flex items-start gap-3">
            <Quote className="mt-0.5 h-4 w-4 flex-none text-muted" />
            <div className="space-y-2">
              <JapaneseText size="xl" className="text-ink-deep">
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
