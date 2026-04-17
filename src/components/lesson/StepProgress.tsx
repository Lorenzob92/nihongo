"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type StepProgressProps = {
  currentIndex: number;
  total: number;
  label: string;
  onPick?: (index: number) => void;
  steps?: { type: string }[];
};

const STEP_LABELS: Record<string, string> = {
  hook: "Hook",
  concept: "Concept",
  examples: "Examples",
  drill: "Drill",
  listening: "Listen",
  reading: "Read",
  cheatsheet: "Cheatsheet",
  wrap: "Wrap",
};

export function StepProgress({
  currentIndex,
  total,
  label,
  onPick,
  steps,
}: StepProgressProps) {
  const pct = ((currentIndex + 1) / total) * 100;
  return (
    <div className="sticky top-[56px] sm:top-[60px] z-30 border-b border-line bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Step {currentIndex + 1} of {total}
          </span>
          <span className="truncate text-xs font-medium text-ink/70">{label}</span>
        </div>
        <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-line">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-accent"
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          />
        </div>
        {steps ? (
          <div className="flex flex-wrap gap-1.5">
            {steps.map((s, i) => {
              const isDone = i < currentIndex;
              const isCurrent = i === currentIndex;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => onPick?.(i)}
                  className={cn(
                    "rounded-full px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider transition-colors",
                    isCurrent
                      ? "bg-accent text-white"
                      : isDone
                        ? "bg-accent-soft text-accent-deep"
                        : "bg-surface-soft text-muted hover:bg-line",
                  )}
                >
                  {STEP_LABELS[s.type] ?? s.type}
                </button>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}
