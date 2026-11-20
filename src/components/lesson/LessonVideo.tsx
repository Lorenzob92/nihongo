import type { LessonStep } from "@/lib/types";

type Props = Extract<LessonStep, { type: "video" }>;

export function LessonVideo(props: Props) {
  return (
    <section className="space-y-5">
      <header className="space-y-1.5">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Video
        </p>
        <h2 className="font-display text-2xl text-ink-deep sm:text-3xl">{props.title}</h2>
        {props.blurb ? (
          <p className="text-[15px] leading-relaxed text-ink/75">{props.blurb}</p>
        ) : null}
      </header>
      <video
        controls
        playsInline
        preload="metadata"
        poster={props.poster}
        className="aspect-video w-full rounded-[16px] border border-line bg-black"
      >
        <source src={props.src} type="video/mp4" />
      </video>
      {props.minutes ? (
        <p className="text-xs text-muted">About {props.minutes} minutes. Sound on.</p>
      ) : null}
    </section>
  );
}
