import type { Phase } from "@/lib/types";

export const PHASE_META: Record<
  Phase,
  { label: string; jaLabel: string; color: string; description: string }
> = {
  reactivate: {
    label: "Reactivate",
    jaLabel: "復活",
    color: "var(--phase-reactivate)",
    description: "Recover the eroded baseline. No new content.",
  },
  bridge: {
    label: "Bridge",
    jaLabel: "渡る",
    color: "var(--phase-bridge)",
    description: "Fill the N4 gap. Begin graded reading.",
  },
  immerse: {
    label: "Immerse",
    jaLabel: "浸る",
    color: "var(--phase-immerse)",
    description: "First run at content you actually want to consume.",
  },
  native: {
    label: "Native",
    jaLabel: "本場",
    color: "var(--phase-native)",
    description: "The Urasawa run. The actual goal.",
  },
};

export const PHASE_ORDER: Phase[] = ["reactivate", "bridge", "immerse", "native"];
