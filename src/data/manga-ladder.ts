import type { MangaRung } from "@/lib/types";

// Beginner-heavy ladder. Status reflects mocked V0 progress.
// `slug` is the URL slug used by /manga-ladder/[slug] AND looked up
// in src/data/manga-covers.ts for AniList cover/banner/synopsis.
export const MANGA_LADDER: MangaRung[] = [
  {
    rung: 1,
    slug: "chi-sweet-home",
    title: "Chi's Sweet Home",
    titleJa: "チーズスイートホーム",
    jlptLevel: "N5",
    jpdbLevel: "Level 1",
    status: "upcoming",
    notes: "Easiest possible entry. Cat protagonist, picture-book pacing, all hiragana.",
    whyAtThisRung:
      "Konami Kanata's all-ages cat manga: most chapters are 5 pages, almost everything is in hiragana with sparse N5 kanji. Chi narrates her own life, so the language is concrete and repetitive. If Yotsubato feels too hard, start here.",
    readingAid: {
      mokuroAvailable: false,
      sourceTip: "12 short volumes. Available on Bookwalker JP and Amazon JP Kindle.",
    },
    tier: "B",
  },
  {
    rung: 2,
    slug: "yotsubato",
    title: "Yotsubato!",
    titleJa: "よつばと！",
    jlptLevel: "N5",
    jpdbLevel: "Level 1",
    status: "complete",
    notes: "N5 stepping stone. Childlike vocab, slow pacing, all furigana available.",
    whyAtThisRung:
      "The smoothest entry to native Japanese in print. Yotsuba is five years old, so dialogue uses simple grammar and concrete vocab; tankobon editions ship with full furigana so you can power through unknown kanji. The pacing is slow enough for one-page-a-day reading without losing the thread.",
    readingAid: {
      mokuroAvailable: true,
      mokuroVolume: "v01",
      sourceTip: "Vol 1 is bundled in-app via Mokuro. For more volumes, source from Internet Archive then run Mokuro locally.",
    },
    tier: "S",
  },
  {
    rung: 3,
    slug: "shirokuma-cafe",
    title: "Shirokuma Cafe (Polar Bear's Cafe)",
    titleJa: "しろくまカフェ",
    jlptLevel: "N5",
    jpdbLevel: "Level 1",
    status: "upcoming",
    notes: "Slow gag manga, food + animal vocab, very low panel density.",
    whyAtThisRung:
      "Aloha Higa's slice-of-life is built on word-play and food-shop vocab. Sentences are short, each chapter is self-contained, and the visual gags scaffold any unknown words. Furigana on most kanji.",
    readingAid: {
      mokuroAvailable: false,
      sourceTip: "5 volumes complete. Anime adaptation gives you free listening practice.",
    },
    tier: "B",
  },
  {
    rung: 4,
    slug: "doraemon",
    title: "Doraemon",
    titleJa: "ドラえもん",
    jlptLevel: "N4",
    jpdbLevel: "Level 2",
    status: "current",
    notes: "N4 entry. Episodic, predictable plots, generous repetition of core vocab.",
    whyAtThisRung:
      "Episodic chapters mean each one is a clean 10-page lookup session, not a 100-chapter commitment. Vocabulary repeats heavily across stories (Doraemon's gadgets, Nobita's school). Furigana is generous and the kanji that do appear are N5-N4 staples.",
    readingAid: {
      mokuroAvailable: false,
      sourceTip: "Buy or borrow tankobon. Run Mokuro locally over scans for in-browser lookup.",
    },
    tier: "A",
  },
  {
    rung: 5,
    slug: "crayon-shin-chan",
    title: "Crayon Shin-chan",
    titleJa: "クレヨンしんちゃん",
    jlptLevel: "N4",
    jpdbLevel: "Level 2",
    status: "upcoming",
    notes: "Kid Japanese with slang. Short chapters, vulgar humour, lots of repetition.",
    whyAtThisRung:
      "Shin-chan is 5 and speaks in mangled, slangy Japanese: this is exactly the casual register manga loves. Chapters are 5-10 pages. You learn 'baby talk' contractions (ぞーきりゃ, とうちゃん, かあちゃん) the same way Japanese kids do.",
    readingAid: {
      mokuroAvailable: false,
      sourceTip: "50+ volumes complete. The anime is on most JP streaming services for parallel ear training.",
    },
    tier: "B",
  },
  {
    rung: 6,
    slug: "flying-witch",
    title: "Flying Witch",
    titleJa: "ふらいんぐうぃっち",
    jlptLevel: "N4",
    jpdbLevel: "Level 3",
    status: "upcoming",
    notes: "Atmospheric slice-of-life. Slow pacing, rural vocab, gentle.",
    whyAtThisRung:
      "Chihiro Ishizuka's witch-in-the-countryside manga is dialogue-light, atmospheric, and uses concrete N4 vocabulary. Many chapters are seasonal observations. Pace lets you re-read pages without feeling stuck.",
    readingAid: {
      mokuroAvailable: false,
      sourceTip: "12+ volumes ongoing in Bessatsu Shounen Magazine. Anime adaptation excellent.",
    },
    tier: "B",
  },
  {
    rung: 7,
    slug: "frieren",
    title: "Frieren",
    titleJa: "葬送のフリーレン",
    jlptLevel: "N4",
    jpdbLevel: "Level 3",
    status: "upcoming",
    notes: "S-tier. Vocab repeats heavily; slow speech; the flagship Phase 2 target.",
    whyAtThisRung:
      "Slow pacing matches Frieren's elven sense of time. Most chapters are dialogue-light with heavy use of N4 grammar, and Yamada's vocabulary stays in a tight fantasy register that repeats. The S-tier emotional payoff makes the lookups worth it.",
    readingAid: {
      mokuroAvailable: false,
      sourceTip: "Currently serialised in Sunday. Tankobon volumes 1 to 13+ available. Run Mokuro on your own scans.",
    },
    tier: "S",
  },
  {
    rung: 8,
    slug: "nichijou",
    title: "Nichijou",
    titleJa: "日常",
    jlptLevel: "N4",
    jpdbLevel: "Level 3",
    status: "upcoming",
    notes: "Absurdist school comedy. Short gag chapters, modern teenage speech.",
    whyAtThisRung:
      "Keiichi Arawi's absurdist school comedy uses contemporary teenage spoken Japanese without the slang overload of harder titles. Gag-per-page format means tiny digestible chunks. Excellent for hearing register-shifts (deadpan robot vs hyperactive Yuuko).",
    readingAid: {
      mokuroAvailable: false,
      sourceTip: "10 volumes complete. Anime is on Crunchyroll for parallel listening.",
    },
    tier: "B",
  },
  {
    rung: 9,
    slug: "spy-x-family",
    title: "Spy x Family",
    titleJa: "SPY×FAMILY",
    jlptLevel: "N4",
    jpdbLevel: "Level 3",
    status: "upcoming",
    notes: "N4 to N3, A-tier. Family slice-of-life with comedy register.",
    whyAtThisRung:
      "The family-comedy chapters are pure N4 bread and butter; the spy/code-name chapters introduce specialist vocab that you can skim past. Anya's mind-reading scenes give you the same line in formal and child registers, which is excellent passive comparison.",
    readingAid: {
      mokuroAvailable: false,
      sourceTip: "Tankobon widely available. The anime adaptation makes for great parallel listening practice.",
    },
    tier: "A",
  },
  {
    rung: 10,
    slug: "mob-psycho-100",
    title: "Mob Psycho 100",
    titleJa: "モブサイコ100",
    jlptLevel: "N3",
    jpdbLevel: "Level 4",
    status: "upcoming",
    notes: "N3, S-tier. Distinct character voices, supernatural vocab.",
    whyAtThisRung:
      "ONE's deliberately sparse art forces you to read the dialogue rather than the panels. Strong character voices (Reigen's polite-fraud register, Mob's flat affect) train you to hear formality levels. Action chapters use simple kanji.",
    readingAid: {
      mokuroAvailable: false,
      sourceTip: "Complete in 16 volumes. Excellent re-reading material once you can handle N3.",
    },
    tier: "S",
  },
  {
    rung: 11,
    slug: "pluto",
    title: "Pluto",
    titleJa: "PLUTO",
    jlptLevel: "N2",
    jpdbLevel: "Level 5",
    status: "upcoming",
    notes: "The Urasawa entry. Mature dialogue, philosophical themes.",
    whyAtThisRung:
      "First Urasawa challenge: 8 volumes, philosophical but plot-driven, and the cast is mostly robots so the speech registers are unusually clean. Use this as the on-ramp to Monster and 20CB rather than diving in cold.",
    readingAid: {
      mokuroAvailable: false,
      sourceTip: "8 volumes complete. Pair with the Netflix anime adaptation for ear training.",
    },
    tier: "S",
  },
  {
    rung: 12,
    slug: "attack-on-titan",
    title: "Attack on Titan",
    titleJa: "進撃の巨人",
    jlptLevel: "N2",
    jpdbLevel: "Level 5",
    status: "upcoming",
    notes: "N2, S-tier. Military vocab, formal register, intense action.",
    whyAtThisRung:
      "Military terminology is its own register that Anki can absorb in a week. Once you have the vocabulary, the grammar is firmly N2. Action panels are visual enough to give you context for guesswork.",
    readingAid: {
      mokuroAvailable: false,
      sourceTip: "Complete in 34 volumes. Tankobon raw scans circulate widely.",
    },
    tier: "S",
  },
  {
    rung: 13,
    slug: "death-note",
    title: "Death Note",
    titleJa: "DEATH NOTE",
    jlptLevel: "N2",
    jpdbLevel: "Level 6",
    status: "upcoming",
    notes: "Investigative, internal monologue, dense exposition.",
    whyAtThisRung:
      "Long, dense pages of internal monologue. Light's plotting and L's deduction give you formal-register N2 grammar in heavy doses. Once you can read this comfortably, Monster is in reach.",
    readingAid: {
      mokuroAvailable: false,
      sourceTip: "12 volumes complete. The exposition density is what makes it useful, not the plot tension.",
    },
    tier: "A",
  },
  {
    rung: 14,
    slug: "monster",
    title: "Monster",
    titleJa: "MONSTER",
    jlptLevel: "N2",
    jpdbLevel: "Level 6",
    status: "upcoming",
    notes: "The actual goal. Urasawa seinen at full strength.",
    whyAtThisRung:
      "The point of the project. Multi-decade European setting, dozens of named characters, regional accents transliterated into katakana. Urasawa's grammar is N2 throughout but the cultural and historical register makes it feel like N1.",
    readingAid: {
      mokuroAvailable: false,
      sourceTip: "18 volumes complete. The flagship target. Save this for when you are ready.",
    },
    tier: "S",
  },
  {
    rung: 15,
    slug: "20th-century-boys",
    title: "20th Century Boys",
    titleJa: "20世紀少年",
    jlptLevel: "N2",
    jpdbLevel: "Level 7",
    status: "upcoming",
    notes: "N2 to N1, S-tier. Dense, multi-decade narrative.",
    whyAtThisRung:
      "Monster's older sibling: same author, but with shifting timelines, more named characters, and frequent jumps between adult and childhood registers. Urasawa peak.",
    readingAid: {
      mokuroAvailable: false,
      sourceTip: "22 volumes plus a 2-volume sequel (21st Century Boys). Work through Monster first.",
    },
    tier: "S",
  },
  {
    rung: 16,
    slug: "vinland-saga",
    title: "Vinland Saga",
    titleJa: "ヴィンランド・サガ",
    jlptLevel: "N1",
    jpdbLevel: "Level 8",
    status: "locked",
    notes: "N1, S-tier. Period dialogue, Norse vocab, Yukimura's slow burn.",
    whyAtThisRung:
      "Period dialogue with archaic verb forms; Norse names transliterated, geographic vocab specific to medieval Iceland and England. Yukimura earns the N1 stamp.",
    readingAid: {
      mokuroAvailable: false,
      sourceTip: "Ongoing in Afternoon. 28+ volumes. Easier with the anime as ear training.",
    },
    tier: "S",
  },
  {
    rung: 17,
    slug: "berserk",
    title: "Berserk",
    titleJa: "ベルセルク",
    jlptLevel: "N1",
    jpdbLevel: "Level 9+",
    status: "locked",
    notes: "Boss fight. Miura's prose is dense, archaic, and unrelenting.",
    whyAtThisRung:
      "End boss. Miura wrote in an archaic, almost classical Japanese with deep Buddhist and medieval European vocabulary. If you can read the Eclipse arc unaided, you have functionally won.",
    readingAid: {
      mokuroAvailable: false,
      sourceTip: "41 volumes (ongoing posthumously). The reading equivalent of climbing Everest.",
    },
    tier: "S",
  },
];

export const MANGA_LADDER_BY_SLUG: Record<string, MangaRung> = Object.fromEntries(
  MANGA_LADDER.map((m) => [m.slug, m]),
);
