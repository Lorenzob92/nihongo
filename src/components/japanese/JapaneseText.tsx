import { cn } from "@/lib/utils";

type JapaneseTextProps = {
  children: React.ReactNode;
  size?: "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
};

const SIZE: Record<NonNullable<JapaneseTextProps["size"]>, string> = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl leading-snug",
  "3xl": "text-3xl leading-snug",
};

/**
 * Wraps Japanese text with the JP font and lang="ja" so the browser
 * picks up Noto Sans JP (and any future per-word furigana toggles).
 *
 * Phase 2: hook in kuroshiro on hover for auto-furigana.
 */
export function JapaneseText({
  children,
  size = "base",
  className,
}: JapaneseTextProps) {
  return (
    <span lang="ja" className={cn("font-jp", SIZE[size], className)}>
      {children}
    </span>
  );
}
