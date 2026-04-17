import type { LessonContent } from "@/lib/types";
import { NA_ADJECTIVES } from "./na-adjectives";

// Registry of all built lesson content. Phase 2 agents: import a new file
// (one per lesson, matching the curriculum slug) and add it here.
export const LESSON_CONTENT: Record<string, LessonContent> = {
  [NA_ADJECTIVES.slug]: NA_ADJECTIVES,
};

export function getLessonContent(slug: string): LessonContent | undefined {
  return LESSON_CONTENT[slug];
}
