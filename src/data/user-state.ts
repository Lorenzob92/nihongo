import type { UserState } from "@/lib/types";

// Mocked single-user state for V0. Phase 2 wires this to Postgres.
// Numbers loosely match Lorenzo's spec milestones (3 months in, mid-Bridge).
export const USER_STATE: UserState = {
  name: "Lorenzo",
  greetingJa: "おかえり、Lorenzo",
  currentPhase: "bridge",
  phaseStartedAt: "2026-01-12",
  weekInPhase: 7,
  totalWeeksInPhase: 16,
  dayCounter: 49,
  rails: {
    kanjiKnown: 412,
    kanjiTarget: 1900,
    grammarKnown: 14,
    grammarTarget: 75,
    vocabInQueue: 478,
    vocabTarget: 1500,
    hoursThisWeek: 1.4,
    hoursTarget: 2.5,
  },
  todaySession: {
    ankiCount: 18,
    lessonSlug: "na-adjectives",
    contentTask: "Doraemon ch 2 page 4 (Mokuro + Yomitan)",
  },
  currentMangaRung: 2,
};
