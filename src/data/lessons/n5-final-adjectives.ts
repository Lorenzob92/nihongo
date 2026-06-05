import type { LessonContent } from "@/lib/types";

// Sensei-flagged final N5 i-adjective batch (May 2026).
// Real flashcards (one card at a time, tap to flip) + summary table.

export const N5_FINAL_ADJECTIVES: LessonContent = {
  slug: "n5-final-adjectives",
  title: "The last N5 i-adjectives",
  titleJa: "N5最後(さいご)のい形容詞(けいようし)",
  section: "C",
  jlptLevel: "N5",
  estimatedMin: 6,
  steps: [
    {
      type: "flashcards",
      title: "Recognise the kanji",
      subtitle: "Japanese → English",
      items: [
        {
          front: "厚(あつ)い",
          back: "thick (objects, books, walls)",
          note: "Opposite: 薄(うす)い (thin/flat). Trap: 暑い (hot weather), 熱い (hot to touch) share the reading.",
          romaji: "atsui",
        },
        {
          front: "危(あぶ)ない",
          back: "dangerous · 'Watch out!'",
          note: "Opposite: 安全(あんぜん) (safe). 危ない！ shouted alone is the standard manga warning.",
          romaji: "abunai",
        },
        {
          front: "軽(かる)い",
          back: "light (not heavy)",
          note: "Opposite: 重(おも)い (heavy).",
          romaji: "karui",
        },
        {
          front: "涼(すず)しい",
          back: "cool (pleasant breeze, weather)",
          note: "Opposite: 寒(さむ)い (cold). Reserved for nice cool weather. Not for cold drinks.",
          romaji: "suzushii",
        },
        {
          front: "狭(せま)い",
          back: "narrow, cramped, small (space)",
          note: "Opposite: 広(ひろ)い (wide, spacious).",
          romaji: "semai",
        },
        {
          front: "細(ほそ)い",
          back: "thin, slender (body, lines)",
          note: "Opposite: 太(ふと)い (thick, fat). Different from 細(こま)かい (fine, detailed).",
          romaji: "hosoi",
        },
        {
          front: "不味(まず)い / まずい",
          back: "bad-tasting · 'uh oh, this is bad'",
          note: "Opposite: 美味(おい)しい (delicious). Figurative use is constant in tense anime moments: まずい！見つかった！",
          romaji: "mazui",
        },
        {
          front: "丸(まる)い",
          back: "round",
          note: "Opposite: 四角(しかく)い (square). Common: 丸い目 (round eyes), 丸い月 (round moon).",
          romaji: "marui",
        },
      ],
    },
    {
      type: "flashcards",
      title: "Produce the Japanese",
      subtitle: "English → Japanese",
      items: [
        {
          front: "thick (objects, books, walls)",
          back: "厚(あつ)い",
          note: "Opposite: 薄(うす)い. Trap homophones: 暑い (hot weather), 熱い (hot to touch).",
          romaji: "atsui",
        },
        {
          front: "dangerous · 'Watch out!'",
          back: "危(あぶ)ない",
          note: "Shouted alone is the standard manga warning. Opposite: 安全(あんぜん) (safe).",
          romaji: "abunai",
        },
        {
          front: "light (not heavy)",
          back: "軽(かる)い",
          note: "Opposite: 重(おも)い (heavy).",
          romaji: "karui",
        },
        {
          front: "cool (pleasant breeze, weather)",
          back: "涼(すず)しい",
          note: "Reserved for nice cool weather. Not for cold drinks. Opposite: 寒(さむ)い (cold).",
          romaji: "suzushii",
        },
        {
          front: "narrow, cramped, small (space)",
          back: "狭(せま)い",
          note: "Opposite: 広(ひろ)い (wide, spacious).",
          romaji: "semai",
        },
        {
          front: "thin, slender (body, lines)",
          back: "細(ほそ)い",
          note: "Opposite: 太(ふと)い. Different from 細(こま)かい (fine, detailed) — same kanji, different reading.",
          romaji: "hosoi",
        },
        {
          front: "bad-tasting · 'uh oh, this is bad'",
          back: "不味(まず)い / まずい",
          note: "Figurative use is constant in tense anime moments. Opposite: 美味(おい)しい (delicious).",
          romaji: "mazui",
        },
        {
          front: "round",
          back: "丸(まる)い",
          note: "Common: 丸い目 (round eyes), 丸い月 (round moon). Opposite: 四角(しかく)い (square).",
          romaji: "marui",
        },
      ],
    },
    {
      type: "cheatsheet",
      summary:
        "All eight in one place. They all conjugate as standard i-adjectives: stem + い (affirmative), stem + くない (negative), stem + かった (past), stem + くなかった (past negative). Memorise as opposite pairs.",
      anchorSentences: [
        "厚(あつ)い本(ほん)。",
        "危(あぶ)ない！",
        "軽(かる)いかばん。",
        "涼(すず)しい朝(あさ)。",
        "狭(せま)い部屋(へや)。",
        "細(ほそ)い人(ひと)。",
        "まずい料理(りょうり)。",
        "丸(まる)い月(つき)。",
      ],
      conjugationTable: [
        ["Kanji", "Kana", "Romaji", "Meaning", "Opposite / Note"],
        ["厚い", "あつい", "atsui", "thick (objects)", "薄(うす)い. Trap: 暑い (hot weather), 熱い (hot to touch)"],
        ["危ない", "あぶない", "abunai", "dangerous; 'watch out!'", "安全(あんぜん) (safe)"],
        ["軽い", "かるい", "karui", "light (not heavy)", "重(おも)い (heavy)"],
        ["涼しい", "すずしい", "suzushii", "cool (pleasant)", "寒(さむ)い (cold). Pleasant cool only."],
        ["狭い", "せまい", "semai", "narrow, cramped", "広(ひろ)い (wide)"],
        ["細い", "ほそい", "hosoi", "thin, slender", "太(ふと)い (thick). Not 細(こま)かい (detailed)."],
        ["不味い", "まずい", "mazui", "bad-tasting; 'uh oh'", "美味(おい)しい (delicious)"],
        ["丸い", "まるい", "marui", "round", "四角(しかく)い (square)"],
      ],
    },
  ],
};
