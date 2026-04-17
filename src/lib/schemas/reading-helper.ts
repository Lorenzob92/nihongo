import { z } from "zod";

const PartOfSpeechEnum = z.enum([
  "noun",
  "verb",
  "i-adjective",
  "na-adjective",
  "adverb",
  "particle",
  "auxiliary-verb",
  "conjunction",
  "interjection",
  "counter",
  "pronoun",
  "prefix",
  "suffix",
  "other",
]);

const TokenSchema = z.object({
  surface: z.string().describe("Surface form as it appears in the sentence"),
  reading: z.string().describe("Hiragana reading"),
  lemma: z.string().describe("Dictionary form"),
  pos: PartOfSpeechEnum,
  english: z.string().describe("Meaning in this context"),
  isAdvanced: z.boolean().describe("True if likely outside N4 active vocabulary"),
  note: z.string().optional().describe("Only if non-literal or idiomatic usage"),
});

const GrammarPointSchema = z.object({
  pattern: z.string().describe("Named pattern, e.g. ～てしまう"),
  name: z.string().describe("Human-readable label"),
  explanation: z.string().describe("One sentence, terse"),
});

const SentenceBreakdownSchema = z.object({
  jp: z.string().describe("Original sentence, extracted verbatim"),
  kanaOnly: z.string().describe("Full kana rendering, no kanji"),
  enLiteral: z.string().describe("Gloss-style translation, preserves Japanese structure"),
  enNatural: z.string().describe("Natural English rendering"),
  tokens: z.array(TokenSchema),
  grammarPoints: z.array(GrammarPointSchema),
  anchorsToPrev: z
    .array(z.string())
    .optional()
    .describe("Discourse links to previous sentence (pronouns, ellipsis, topic markers)"),
});

export const ReadingHelperResponseSchema = z.object({
  sentences: z.array(SentenceBreakdownSchema),
  advancedWords: z
    .array(z.string())
    .describe("Deduplicated lemmas of all tokens where isAdvanced is true"),
  inputLanguageConfirmed: z.boolean().describe("False if input does not appear to be Japanese"),
  warning: z.string().optional().describe("Surfaced to the user when graceful degradation occurred"),
});

export type ReadingHelperResponse = z.infer<typeof ReadingHelperResponseSchema>;
export type SentenceBreakdown = z.infer<typeof SentenceBreakdownSchema>;
export type Token = z.infer<typeof TokenSchema>;
export type GrammarPoint = z.infer<typeof GrammarPointSchema>;
export type PartOfSpeech = z.infer<typeof PartOfSpeechEnum>;
