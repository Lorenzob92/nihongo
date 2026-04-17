import { cn } from "@/lib/utils";

type PillProps = {
  children: React.ReactNode;
  tone?: "default" | "accent" | "muted" | "recommend" | "warn" | "phase";
  phaseColor?: string;
  className?: string;
};

const TONE_CLASSES: Record<NonNullable<PillProps["tone"]>, string> = {
  default: "bg-surface-soft text-ink border border-line",
  accent: "bg-accent-soft text-accent-deep border border-[color:var(--accent)]/20",
  muted: "bg-surface-soft text-muted border border-line",
  recommend: "bg-[color:var(--recommend)]/10 text-recommend border border-[color:var(--recommend)]/30",
  warn: "bg-[color:var(--warn)]/10 text-warn border border-[color:var(--warn)]/30",
  phase: "bg-surface text-ink border border-line",
};

export function Pill({ children, tone = "default", phaseColor, className }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium font-mono tracking-tight",
        TONE_CLASSES[tone],
        className,
      )}
      style={phaseColor ? { color: phaseColor, borderColor: `${phaseColor}33` } : undefined}
    >
      {phaseColor ? (
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: phaseColor }}
        />
      ) : null}
      {children}
    </span>
  );
}
