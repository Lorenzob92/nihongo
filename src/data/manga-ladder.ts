import type { MangaRung } from "@/lib/types";

// N5-N4 ladder, scoped to what Lorenzo actually owns and can read right now.
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
      mokuroAvailable: true,
      mokuroVolume: "v01",
      sourceTip: "Volumes 1 to 3 available locally, awaiting Mokuro processing.",
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
      sourceTip: "Vol 1 is bundled in-app via Mokuro. Volumes 2 to 15 available locally, awaiting Mokuro processing.",
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
      mokuroAvailable: true,
      mokuroVolume: "v01",
      sourceTip: "All 5 volumes available locally, awaiting Mokuro processing. Anime adaptation gives you free listening practice.",
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
      mokuroAvailable: true,
      mokuroVolume: "v01",
      sourceTip: "Volumes 0 to 45 (Tentomushi edition) available locally, awaiting Mokuro processing.",
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
      mokuroAvailable: true,
      mokuroVolume: "v01",
      sourceTip: "Volumes 1 to 47 available locally, awaiting Mokuro processing. The anime is on most JP streaming services for parallel ear training.",
    },
    tier: "B",
  },
];

export const MANGA_LADDER_BY_SLUG: Record<string, MangaRung> = Object.fromEntries(
  MANGA_LADDER.map((m) => [m.slug, m]),
);
