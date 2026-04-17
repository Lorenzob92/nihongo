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
    <div className="sticky top-[56px] sm:top-[60px] z-30 border-b border-white/10 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl flex-col gap-2 px-4 py-2.5 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
            Step {currentIndex + 1} of {total}
          </span>
          <span className="truncate text-xs font-semibold text-zinc-300">{label}</span>
        </div>
        <div className="relative h-1 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-[#638dff]"
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          />
        </div>
        {steps ? (
          <div className="flex flex-wrap gap-1">
            {steps.map((s, i) => {
              const isDone = i < currentIndex;
              const isCurrent = i === currentIndex;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => onPick?.(i)}
                  className={cn(
                    "rounded-md px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider transition-colors",
                    isCurrent
                      ? "bg-[#638dff] text-white"
                      : isDone
                        ? "bg-[#638dff]/15 text-[#638dff]"
                        : "bg-white/5 text-zinc-500 hover:bg-white/10",
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
