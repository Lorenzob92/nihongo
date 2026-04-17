import { cn } from "@/lib/utils";

type KanjiCardProps = {
  kanji: string;
  reading?: string;
  meaning?: string;
  onTrigger?: () => void;
  className?: string;
};

/**
 * Single-kanji presentation card. V0 stub: no stroke order yet.
 * Phase 2: tap to play KanjiVG stroke-order animation (animCJK).
 */
export function KanjiCard({
  kanji,
  reading,
  meaning,
  onTrigger,
  className,
}: KanjiCardProps) {
  return (
    <button
      type="button"
      onClick={onTrigger}
      className={cn(
        "group flex flex-col items-center justify-center gap-2 rounded-[16px] border border-line bg-surface p-4 text-ink shadow-card transition-all hover:-translate-y-0.5 hover:border-line-strong",
        className,
      )}
    >
      <span
        lang="ja"
        className="font-display text-5xl leading-none text-ink-deep transition-transform group-hover:scale-[1.02]"
      >
        {kanji}
      </span>
      {reading ? (
        <span lang="ja" className="font-jp text-xs text-muted">
          {reading}
        </span>
      ) : null}
      {meaning ? (
        <span className="text-xs text-muted-soft">{meaning}</span>
      ) : null}
    </button>
  );
}
