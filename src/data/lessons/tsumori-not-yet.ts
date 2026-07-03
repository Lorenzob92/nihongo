import type { LessonContent } from "@/lib/types";

// Sensei homework, July 2026: six つもり plan sentences plus three
// まだ〜ていません not-yets, drilled as flashcards in both directions.
// The sentences are Lorenzo's own homework answers, cleaned up to
// standard polite/plain forms (e.g. 終えてません → 終えていません).

export const TSUMORI_NOT_YET: LessonContent = {
  slug: "tsumori-not-yet",
  title: "つもり plans + まだ〜ていません",
  titleJa: "「つもり」と「まだ〜ていません」",
  section: "B",
  jlptLevel: "N5",
  estimatedMin: 12,
  steps: [
    {
      type: "concept",
      explanation:
        "To say you plan or intend to do something, put つもり straight after the plain (dictionary) form of the verb.\n\n行(い)く → 行(い)くつもり = I plan to go. 起(お)きる → 起(お)きるつもり = I plan to get up.\n\nCasual speech can end right there: 日本(にほん)に行(い)くつもり。 Polite adds です: 日本(にほん)に行(い)くつもりです。\n\nA plan with two actions chains them with the te-form: 早(はや)く起(お)きて、公園(こうえん)で走(はし)るつもり = get up early AND run in the park, one plan.\n\nNegative plan: ない-form + つもり. 行(い)かないつもり = I plan not to go.",
      formulaJa: "[Verb, plain form] + つもり(です)",
    },
    {
      type: "concept",
      explanation:
        "まだ + te-form + いません = I have not done it YET (but I still mean to).\n\nThe trap Genki drills hard: when someone asks もう〜ましたか (have you already...?), answer まだ〜ていません, NEVER 〜ませんでした. まだ食(た)べていません = I have not eaten yet. 食(た)べませんでした = I did not eat, full stop.\n\nCasual speech drops the い: まだ食(た)べてません, まだ着(つ)いてない. Fine in chat, but know the full form.\n\nPolite: まだ〜ていません. Plain: まだ〜ていない.",
      formulaJa: "まだ + [Verb te-form] + いません",
    },
    {
      type: "flashcards",
      title: "Say it in Japanese",
      subtitle: "English → Japanese",
      items: [
        {
          front: "I'm planning to wake up early and go running in the park.",
          back: "僕(ぼく)は早(はや)く起(お)きて、公園(こうえん)で走(はし)るつもり。",
          romaji: "Boku wa hayaku okite, kōen de hashiru tsumori.",
          note: "起きて chains the two actions into one plan; で marks where the running happens.",
        },
        {
          front:
            "I'm planning to finish my homework early and go for a drink with my friends.",
          back: "早(はや)く宿題(しゅくだい)を終(お)わらせて、友達(ともだち)と飲(の)みに行(い)くつもり。",
          romaji: "Hayaku shukudai o owarasete, tomodachi to nomi ni iku tsumori.",
          note: "終わらせて = get it finished. 飲みに行く is the 〜に行く purpose pattern.",
        },
        {
          front: "I'm planning to go to the street market on Saturday.",
          back: "土曜日(どようび)に、僕(ぼく)は屋台(やたい)に行(い)くつもり。",
          romaji: "Doyōbi ni, boku wa yatai ni iku tsumori.",
          note: "屋台 = street stall. A specific day takes に.",
        },
        {
          front: "I'm planning to go to Japan with my family next year.",
          back: "来年(らいねん)、家族(かぞく)と日本(にほん)に行(い)くつもり。",
          romaji: "Rainen, kazoku to nihon ni iku tsumori.",
          note: "Relative time words like 来年 take no particle. と = together with.",
        },
        {
          front:
            "Today, I will go to the library and study there with my friend.",
          back: "今日(きょう)、僕(ぼく)は図書館(としょかん)に行(い)って、友達(ともだち)と勉強(べんきょう)するつもり。",
          romaji: "Kyō, boku wa toshokan ni itte, tomodachi to benkyō suru tsumori.",
          note: "行って (te-form) links going and studying into one plan.",
        },
        {
          front: "Since it's hot, I'm planning to stay home all day.",
          back: "暑(あつ)いから、一日中(いちにちじゅう)、家(いえ)にいるつもり。",
          romaji: "Atsui kara, ichinichijū, ie ni iru tsumori.",
          note: "から = because. いる (to stay, to be) slots straight into つもり.",
        },
        {
          front: "I haven't arrived at the station yet.",
          back: "まだ駅(えき)に着(つ)いていません。",
          romaji: "Mada eki ni tsuite imasen.",
          note: "着く → 着いて. NOT 着きませんでした (that means \"didn't arrive\", full stop).",
        },
        {
          front: "I haven't finished my work yet.",
          back: "まだ仕事(しごと)を終(お)えていません。",
          romaji: "Mada shigoto o oete imasen.",
          note: "Casual speech drops the い: 終えてません. The full form is 終えていません.",
        },
        {
          front: "I haven't cleaned my room yet.",
          back: "まだ部屋(へや)を掃除(そうじ)していません。",
          romaji: "Mada heya o sōji shite imasen.",
          note: "掃除する = to clean. する → して + いません.",
        },
      ],
    },
    {
      type: "flashcards",
      title: "Read it back",
      subtitle: "Japanese → English",
      items: [
        {
          front: "僕(ぼく)は早(はや)く起(お)きて、公園(こうえん)で走(はし)るつもり。",
          back: "I'm planning to wake up early and go running in the park.",
          romaji: "Boku wa hayaku okite, kōen de hashiru tsumori.",
        },
        {
          front: "早(はや)く宿題(しゅくだい)を終(お)わらせて、友達(ともだち)と飲(の)みに行(い)くつもり。",
          back: "I'm planning to finish my homework early and go for a drink with my friends.",
          romaji: "Hayaku shukudai o owarasete, tomodachi to nomi ni iku tsumori.",
        },
        {
          front: "土曜日(どようび)に、僕(ぼく)は屋台(やたい)に行(い)くつもり。",
          back: "I'm planning to go to the street market on Saturday.",
          romaji: "Doyōbi ni, boku wa yatai ni iku tsumori.",
        },
        {
          front: "来年(らいねん)、家族(かぞく)と日本(にほん)に行(い)くつもり。",
          back: "I'm planning to go to Japan with my family next year.",
          romaji: "Rainen, kazoku to nihon ni iku tsumori.",
        },
        {
          front: "今日(きょう)、僕(ぼく)は図書館(としょかん)に行(い)って、友達(ともだち)と勉強(べんきょう)するつもり。",
          back: "Today, I will go to the library and study there with my friend.",
          romaji: "Kyō, boku wa toshokan ni itte, tomodachi to benkyō suru tsumori.",
        },
        {
          front: "暑(あつ)いから、一日中(いちにちじゅう)、家(いえ)にいるつもり。",
          back: "Since it's hot, I'm planning to stay home all day.",
          romaji: "Atsui kara, ichinichijū, ie ni iru tsumori.",
        },
        {
          front: "まだ駅(えき)に着(つ)いていません。",
          back: "I haven't arrived at the station yet.",
          romaji: "Mada eki ni tsuite imasen.",
        },
        {
          front: "まだ仕事(しごと)を終(お)えていません。",
          back: "I haven't finished my work yet.",
          romaji: "Mada shigoto o oete imasen.",
        },
        {
          front: "まだ部屋(へや)を掃除(そうじ)していません。",
          back: "I haven't cleaned my room yet.",
          romaji: "Mada heya o sōji shite imasen.",
        },
      ],
    },
    {
      type: "cheatsheet",
      summary:
        "Two patterns from this week's homework. Plans: plain verb + つもり(です); chain two actions with the te-form; negative plans use ない + つもり. Not yet: まだ + te-form + いません. Answer もう〜ましたか with まだ〜ていません, never 〜ませんでした. Casual speech drops the い (終えてません, 着いてない).",
      anchorSentences: [
        "僕(ぼく)は早(はや)く起(お)きて、公園(こうえん)で走(はし)るつもり。",
        "早(はや)く宿題(しゅくだい)を終(お)わらせて、友達(ともだち)と飲(の)みに行(い)くつもり。",
        "土曜日(どようび)に、僕(ぼく)は屋台(やたい)に行(い)くつもり。",
        "来年(らいねん)、家族(かぞく)と日本(にほん)に行(い)くつもり。",
        "今日(きょう)、僕(ぼく)は図書館(としょかん)に行(い)って、友達(ともだち)と勉強(べんきょう)するつもり。",
        "暑(あつ)いから、一日中(いちにちじゅう)、家(いえ)にいるつもり。",
        "まだ駅(えき)に着(つ)いていません。",
        "まだ仕事(しごと)を終(お)えていません。",
        "まだ部屋(へや)を掃除(そうじ)していません。",
      ],
      conjugationTable: [
        ["Japanese", "English", "Romaji"],
        ["Plans: [plain verb] + つもり", "", ""],
        [
          "僕(ぼく)は早(はや)く起(お)きて、公園(こうえん)で走(はし)るつもり。",
          "I'm planning to wake up early and go running in the park.",
          "Boku wa hayaku okite, kōen de hashiru tsumori.",
        ],
        [
          "早(はや)く宿題(しゅくだい)を終(お)わらせて、友達(ともだち)と飲(の)みに行(い)くつもり。",
          "I'm planning to finish my homework early and go for a drink with my friends.",
          "Hayaku shukudai o owarasete, tomodachi to nomi ni iku tsumori.",
        ],
        [
          "土曜日(どようび)に、僕(ぼく)は屋台(やたい)に行(い)くつもり。",
          "I'm planning to go to the street market on Saturday.",
          "Doyōbi ni, boku wa yatai ni iku tsumori.",
        ],
        [
          "来年(らいねん)、家族(かぞく)と日本(にほん)に行(い)くつもり。",
          "I'm planning to go to Japan with my family next year.",
          "Rainen, kazoku to nihon ni iku tsumori.",
        ],
        [
          "今日(きょう)、僕(ぼく)は図書館(としょかん)に行(い)って、友達(ともだち)と勉強(べんきょう)するつもり。",
          "Today, I will go to the library and study there with my friend.",
          "Kyō, boku wa toshokan ni itte, tomodachi to benkyō suru tsumori.",
        ],
        [
          "暑(あつ)いから、一日中(いちにちじゅう)、家(いえ)にいるつもり。",
          "Since it's hot, I'm planning to stay home all day.",
          "Atsui kara, ichinichijū, ie ni iru tsumori.",
        ],
        ["Not yet: まだ + te-form + いません", "", ""],
        [
          "まだ駅(えき)に着(つ)いていません。",
          "I haven't arrived at the station yet.",
          "Mada eki ni tsuite imasen.",
        ],
        [
          "まだ仕事(しごと)を終(お)えていません。",
          "I haven't finished my work yet.",
          "Mada shigoto o oete imasen.",
        ],
        [
          "まだ部屋(へや)を掃除(そうじ)していません。",
          "I haven't cleaned my room yet.",
          "Mada heya o sōji shite imasen.",
        ],
      ],
    },
  ],
};
