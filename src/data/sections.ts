import type { SectionMeta } from "@/lib/types";

// 11 sections from the curriculum map (research file 02).
export const SECTIONS: SectionMeta[] = [
  {
    id: "A",
    name: "Particle Mastery",
    jaName: "助詞",
    description: "The spine of comprehension. は vs が, the holy trinity を に で, listing, contrast, sentence-end particles.",
  },
  {
    id: "B",
    name: "Verb Foundations",
    jaName: "動詞",
    description: "Group classification through the full conjugation engine: ます, plain, た, て, ている, potential, volitional, passive, causative.",
  },
  {
    id: "C",
    name: "Adjective Mastery",
    jaName: "形容詞",
    description: "The full four-square i and na conjugation, comparatives, superlatives, becoming and making.",
  },
  {
    id: "D",
    name: "Demonstratives, Questions, Counters",
    jaName: "指示語・疑問・助数詞",
    description: "The こそあど grid, question word inventory, native and specific counters, time expressions.",
  },
  {
    id: "E",
    name: "Auxiliary Suite",
    jaName: "補助動詞",
    description: "The engine of natural Japanese. すぎる, やすい/にくい, そう, らしい, ようだ, ばかり, ながら, ところ.",
  },
  {
    id: "F",
    name: "The Four Conditionals",
    jaName: "条件形",
    description: "たら, ば, と, なら. The four-way fork that unlocks fluent reading.",
  },
  {
    id: "G",
    name: "Modal Patterns",
    jaName: "機能表現",
    description: "Permission, prohibition, obligation, requests, experience, try, prepare, regret, advice.",
  },
  {
    id: "H",
    name: "Clause Connectors",
    jaName: "接続",
    description: "The N4 unlock: relative clauses, quotation, reasons, contrast, listing activities and reasons.",
  },
  {
    id: "I",
    name: "Giving and Receiving",
    jaName: "授受",
    description: "あげる, くれる, もらう plus all て-form variants. The hardest social grammar.",
  },
  {
    id: "J",
    name: "Keigo Intro",
    jaName: "敬語",
    description: "Sonkeigo, kenjougo, teineigo. Workplace and customer-service register.",
  },
  {
    id: "K",
    name: "Early N3 Bridge",
    jaName: "N3への橋",
    description: "ことにする, ようになる, ために, はず, わけ, ば〜ほど, the もの-family.",
  },
];

export const SECTION_BY_ID = Object.fromEntries(
  SECTIONS.map((s) => [s.id, s]),
) as Record<SectionMeta["id"], SectionMeta>;
