import { cn } from "@/lib/utils";

type PillProps = {
  children: React.ReactNode;
  tone?: "default" | "accent" | "muted" | "recommend" | "warn" | "phase" | "jlpt";
  phaseColor?: string;
  className?: string;
};

const TONE_CLASSES: Record<NonNullable<PillProps["tone"]>, string> = {
  default: "bg-white/5 text-zinc-300 border border-white/10",
  accent: "bg-[#638dff]/15 text-[#638dff] border border-[#638dff]/30",
  muted: "bg-white/5 text-zinc-400 border border-white/5",
  recommend: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25",
  warn: "bg-red-500/15 text-red-400 border border-red-500/25",
  phase: "bg-white/5 text-zinc-300 border border-white/10",
  jlpt: "bg-[#638dff]/15 text-[#638dff] border border-[#638dff]/25",
};

export function Pill({ children, tone = "default", phaseColor, className }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-[11px] font-semibold tracking-tight",
        TONE_CLASSES[tone],
        className,
      )}
      style={
        phaseColor
          ? { color: phaseColor, borderColor: `${phaseColor}40`, background: `${phaseColor}1a` }
          : undefined
      }
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
