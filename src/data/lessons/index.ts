import type { LessonContent } from "@/lib/types";
import { NA_ADJECTIVES } from "./na-adjectives";
import { WA_VS_GA } from "./wa-vs-ga";
import { TE_FORM } from "./te-form";
import { CAUSATIVE } from "./causative";
import { PARTICLES_WO_NI_DE } from "./particles-wo-ni-de";
import { FOUR_CONDITIONALS } from "./four-conditionals";
import { PASSIVE_VOICE } from "./passive-voice";
import { KEIGO_INTRO } from "./keigo-intro";

// Registry of all built lesson content. Phase 2 agents: import a new file
// (one per lesson, matching the curriculum slug) and add it here.
export const LESSON_CONTENT: Record<string, LessonContent> = {
  [NA_ADJECTIVES.slug]: NA_ADJECTIVES,
  [WA_VS_GA.slug]: WA_VS_GA,
  [TE_FORM.slug]: TE_FORM,
  [CAUSATIVE.slug]: CAUSATIVE,
  [PARTICLES_WO_NI_DE.slug]: PARTICLES_WO_NI_DE,
  // The composite particle lesson serves both curriculum entries (A2 wo-particle and A3 ni-vs-de)
  "wo-particle": PARTICLES_WO_NI_DE,
  "ni-vs-de": PARTICLES_WO_NI_DE,
  [FOUR_CONDITIONALS.slug]: FOUR_CONDITIONALS,
  [PASSIVE_VOICE.slug]: PASSIVE_VOICE,
  [KEIGO_INTRO.slug]: KEIGO_INTRO,
};

export function getLessonContent(slug: string): LessonContent | undefined {
  return LESSON_CONTENT[slug];
}
