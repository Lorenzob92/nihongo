import { cn } from "@/lib/utils";

type FuriganaProps = {
  /** Kanji or word base. */
  kanji: string;
  /** Reading shown above. */
  reading: string;
  /** When false, hide the reading (still in DOM for screen readers). */
  show?: boolean;
  className?: string;
};

/**
 * Tasteful <ruby> wrapper. Defaults to showing the reading.
 * Phase 2: tie this to a per-user "show only for unknown kanji" toggle.
 */
export function Furigana({ kanji, reading, show = true, className }: FuriganaProps) {
  return (
    <ruby className={cn("font-jp", className)} lang="ja">
      {kanji}
      <rt className={cn(!show && "opacity-0")}>{reading}</rt>
    </ruby>
  );
}
