// Shared types for the 日本語 app.
// V0 stores all data as TypeScript constants; Phase 2 will move this to Postgres
// (the shape here mirrors the planned schema in spec section 11).

export type Phase = "reactivate" | "bridge" | "immerse" | "native";

export type CurriculumSection =
  | "A" // Particles
  | "B" // Verb foundations
  | "C" // Adjectives
  | "D" // Demonstratives, questions, counters, time
  | "E" // Auxiliary suite
  | "F" // Conditionals
  | "G" // Modal patterns
  | "H" // Clause connectors
  | "I" // Giving and receiving
  | "J" // Keigo intro
  | "K"; // Early N3 bridge

export type JlptLevel = "N5" | "N4" | "N3" | "N2" | "N1";

export type LessonStatus = "planned" | "built";

export type CurriculumLesson = {
  /** Stable URL slug, used for /lessons/[slug]. */
  slug: string;
  /** English title, e.g. "は vs が: topic vs subject". */
  title: string;
  /** Japanese title, e.g. "「は」と「が」". */
  titleJa?: string;
  section: CurriculumSection;
  /** Order within section (e.g. A1, A2 -> 1, 2). */
  order: number;
  jlptLevel: JlptLevel;
  /** Slugs of prerequisite lessons. */
  prereqs: string[];
  estimatedMin: number;
  /** Why this matters (one sentence). */
  blurb: string;
  status: LessonStatus;
};

export type SectionMeta = {
  id: CurriculumSection;
  name: string;
  jaName: string;
  description: string;
};

// Manga ladder (spec section 7) ----------------------------------------

export type MangaStatus = "locked" | "current" | "upcoming" | "complete";

export type MangaRung = {
  rung: number;
  /** URL slug for /manga-ladder/[slug] and the manga-covers lookup. */
  slug: string;
  title: string;
  titleJa?: string;
  jlptLevel: JlptLevel;
  jpdbLevel?: string;
  status: MangaStatus;
  notes: string;
  /** Longer "why this is at this rung" explanation, shown on the detail page. */
  whyAtThisRung?: string;
  readingAid?: {
    mokuroAvailable: boolean;
    /** Volume slug (e.g. "v01") if Mokuro is available; opens the in-app reader. */
    mokuroVolume?: string;
    sourceTip?: string;
  };
  tier?: "S" | "A" | "B";
};

// Lesson content (the LessonFlow engine) -------------------------------

export type Furigana = { kanji: string; reading: string };

export type ExampleSentence = {
  ja: string;
  /** Optional pre-baked furigana segments for the JapaneseText component. */
  furigana?: Furigana[];
  romaji?: string;
  en: string;
  audioUrl?: string;
  /** Optional grammar breakdown the learner can reveal. */
  breakdown?: string;
};

export type DrillItem =
  | {
      type: "cloze";
      sentence: string; // use {{}} as the blank marker
      answer: string;
      en: string;
      acceptableAnswers?: string[];
      hint?: string;
    }
  | {
      type: "multipleChoice";
      sentence: string;
      en: string;
      options: string[];
      correctIndex: number;
      explanation: string;
    };

export type ComprehensionQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
};

export type SrsItem = {
  front: string;
  back: string;
  type: "grammar" | "vocab" | "kanji";
};

/** A WaniKani-style memory hook: a sound-alike anchor + a sticky story. */
export type Mnemonic = {
  /** The sound-alike anchor word, e.g. "Alghero" or "a key". */
  hook: string;
  /** The one-line story that makes it stick. */
  story: string;
  /** A single emoji that captures the image. */
  emoji: string;
  /** Source language of the hook, shown as a small badge. */
  lang: "IT" | "EN" | "JP";
};

/** One entry on the pre-flashcard "meet the verbs" mnemonics screen. */
export type MnemonicCard = {
  /** Verb in kanji with optional `(furigana)` glosses. */
  ja: string;
  romaji: string;
  meaning: string;
  mnemonic: Mnemonic;
};

export type FlashcardItem = {
  /** Front of card. Typically kanji with optional `(furigana)` glosses. */
  front: string;
  /** Back of card — primary meaning. */
  back: string;
  /** Optional secondary line on the back: opposite, trap warning, collocations. */
  note?: string;
  /** Optional romaji shown small on the back. */
  romaji?: string;
  /** Optional compact memory hook shown on the back to reinforce recall. */
  mnemonic?: Mnemonic;
};

export type LessonStep =
  | {
      type: "hook";
      whyItMatters: string;
      mediaExample?: { quote: string; source: string };
    }
  | {
      type: "concept";
      explanation: string;
      formulaJa?: string;
      cureDollyTake?: string;
    }
  | { type: "examples"; items: ExampleSentence[] }
  | { type: "mnemonics"; title?: string; subtitle?: string; items: MnemonicCard[] }
  | { type: "flashcards"; title?: string; subtitle?: string; items: FlashcardItem[] }
  | { type: "drill"; items: DrillItem[] }
  | {
      type: "listening";
      audioUrl: string;
      transcript: string;
      comprehensionQuestions: ComprehensionQuestion[];
    }
  | {
      type: "reading";
      passage: string;
      definitions: Record<string, string>;
    }
  | {
      type: "cheatsheet";
      summary: string;
      anchorSentences: string[];
      conjugationTable?: string[][];
    }
  | { type: "wrap"; srsItems: SrsItem[] };

export type LessonContent = {
  slug: string;
  title: string;
  titleJa: string;
  section: CurriculumSection;
  jlptLevel: JlptLevel;
  estimatedMin: number;
  steps: LessonStep[];
};

// User state (mocked single-user for V0) -------------------------------

export type UserState = {
  name: string;
  greetingJa: string;
  currentPhase: Phase;
  phaseStartedAt: string;
  weekInPhase: number;
  totalWeeksInPhase: number;
  dayCounter: number;
  rails: {
    kanjiKnown: number;
    kanjiTarget: number;
    grammarKnown: number;
    grammarTarget: number;
    vocabInQueue: number;
    vocabTarget: number;
    hoursThisWeek: number;
    hoursTarget: number;
  };
  todaySession: {
    ankiCount: number;
    lessonSlug: string;
    contentTask: string;
  };
  currentMangaRung: number;
};
