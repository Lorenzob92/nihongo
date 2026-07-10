import type { LessonContent } from "@/lib/types";

// Sensei homework, July 2026: the どこか / どこも / どこでも set (some-/no-/any-
// place), taught as the general "question word + か / も / でも" grid. The eleven
// drill sentences are the homework's own translations, corrected to standard
// forms (e.g. どこかにいた → どこかに行った for "did you go", 何かからいものが →
// を, をしてる → を知ってる, and the double-particle fixes on the last two).

export const INDEFINITE_PRONOUNS: LessonContent = {
  slug: "indefinite-pronouns",
  title: "Question word + か / も / でも",
  titleJa: "どこか・どこも・どこでも",
  section: "D",
  jlptLevel: "N5",
  estimatedMin: 12,
  steps: [
    {
      type: "concept",
      explanation:
        "Take a question word (どこ where, 誰(だれ) who, 何(なに) what) and bolt on one of three endings to turn it into some-, no-, or any-.\n\n• + か = SOME-. どこか = somewhere, 誰(だれ)か = someone, 何(なに)か = something.\n• + も (with a negative verb) = NO-. どこにも...ない = nowhere, 誰(だれ)も...ない = no one, 何(なに)も...ない = nothing.\n• + でも = ANY- / every-. どこでも = anywhere, 誰(だれ)でも = anyone, 何(なに)でも = anything.\n\nParticle order is what trips people up. か clips straight onto the word: どこか + に → どこかに. But も and でも slide in AFTER the particle: どこ + に + も → どこにも, どこ + に + でも → どこにでも.",
      formulaJa: "[question word] + か  /  (particle +) も  /  (particle +) でも",
    },
    {
      type: "concept",
      explanation:
        "Two pairs your sensei flagged.\n\nどこにも vs どこも (both \"not anywhere\"):\n• どこにも...ない denies a SPECIFIC search. どこにも人(ひと)がいない = there's no one in the places we're looking.\n• どこも...ない denies the WHOLE area. どこも人(ひと)がいない = there are no people anywhere at all.\n\nどこでも vs どこにでも (both \"anywhere\"):\n• どこでも = anywhere you do the action (built on で). 建物(たてもの)のどこでも食(た)べてもいい = you may eat anywhere in the building.\n• どこにでも = every single place, the whole place (built on に). ロンドンのどこにでもテスコがある = there are Tescos everywhere in London.",
      formulaJa: "どこにも / どこも 〜ない (nowhere)   ・   どこでも / どこにでも (anywhere)",
    },
    {
      type: "flashcards",
      title: "Say it in Japanese",
      subtitle: "English → Japanese",
      items: [
        {
          front: "Did you go somewhere yesterday?",
          back: "きのう、どこかに行(い)った？",
          romaji: "Kinō, dokoka ni itta?",
          note: "Destination, so 行く (not いる). か clips straight onto どこ, then に.",
        },
        {
          front: "Do you want to eat ramen somewhere?",
          back: "どこかでラーメンを食(た)べませんか？",
          romaji: "Dokoka de rāmen o tabemasen ka?",
          note: "Where an action happens takes で: どこか + で.",
        },
        {
          front: "Do you want to eat something spicy?",
          back: "何(なに)か辛(から)いものを食(た)べませんか？",
          romaji: "Nanika karai mono o tabemasen ka?",
          note: "何か = something. The object still takes を, never が.",
        },
        {
          front: "Do you know somewhere nice to eat?",
          back: "どこかおいしい場所(ばしょ)を知(し)ってる？",
          romaji: "Dokoka oishii basho o shitteru?",
          note: "\"Know\" is 知ってる, not してる (which is \"doing\"). を marks 場所.",
        },
        {
          front: "I'm looking for somewhere nice for a meeting.",
          back: "ミーティングのためにどこかいい場所(ばしょ)を探(さが)しています。",
          romaji: "Mītingu no tame ni dokoka ii basho o sagashite imasu.",
          note: "〜のために = for the sake of. 探す = to look for.",
        },
        {
          front: "I didn't go anywhere last night.",
          back: "きのうの夜(よる)、僕(ぼく)はどこにも行(い)かなかった。",
          romaji: "Kinō no yoru, boku wa doko ni mo ikanakatta.",
          note: "Destination negative: どこ + に + も + a negative verb.",
        },
        {
          front: "There is nowhere (we can eat).",
          back: "どこも食(た)べられる場所(ばしょ)がない。",
          romaji: "Doko mo taberareru basho ga nai.",
          note: "どこも = nowhere at all. 食べられる = can eat (potential).",
        },
        {
          front: "There isn't anywhere to sit.",
          back: "どこも座(すわ)れる場所(ばしょ)がない。",
          romaji: "Doko mo suwareru basho ga nai.",
          note: "座れる = can sit (potential of 座る).",
        },
        {
          front: "She doesn't want to go anywhere today.",
          back: "今日(きょう)、彼女(かのじょ)はどこにも行(い)きたくない。",
          romaji: "Kyō, kanojo wa doko ni mo ikitakunai.",
          note: "どこにも + 〜たくない = doesn't want to go anywhere.",
        },
        {
          front: "You can eat anywhere in the building.",
          back: "建物(たてもの)のどこでも食(た)べてもいい。",
          romaji: "Tatemono no doko demo tabete mo ii.",
          note: "The place takes の, then どこでも: 建物のどこでも = anywhere in the building.",
        },
        {
          front: "There are Tescos everywhere in London.",
          back: "ロンドンのどこにでもテスコがあります。",
          romaji: "Rondon no doko ni demo Tesuko ga arimasu.",
          note: "London takes の, then どこにでも = every place in it.",
        },
      ],
    },
    {
      type: "flashcards",
      title: "Read it back",
      subtitle: "Japanese → English",
      items: [
        {
          front: "きのう、どこかに行(い)った？",
          back: "Did you go somewhere yesterday?",
          romaji: "Kinō, dokoka ni itta?",
        },
        {
          front: "どこかでラーメンを食(た)べませんか？",
          back: "Do you want to eat ramen somewhere?",
          romaji: "Dokoka de rāmen o tabemasen ka?",
        },
        {
          front: "何(なに)か辛(から)いものを食(た)べませんか？",
          back: "Do you want to eat something spicy?",
          romaji: "Nanika karai mono o tabemasen ka?",
        },
        {
          front: "どこかおいしい場所(ばしょ)を知(し)ってる？",
          back: "Do you know somewhere nice to eat?",
          romaji: "Dokoka oishii basho o shitteru?",
        },
        {
          front: "ミーティングのためにどこかいい場所(ばしょ)を探(さが)しています。",
          back: "I'm looking for somewhere nice for a meeting.",
          romaji: "Mītingu no tame ni dokoka ii basho o sagashite imasu.",
        },
        {
          front: "きのうの夜(よる)、僕(ぼく)はどこにも行(い)かなかった。",
          back: "I didn't go anywhere last night.",
          romaji: "Kinō no yoru, boku wa doko ni mo ikanakatta.",
        },
        {
          front: "どこも食(た)べられる場所(ばしょ)がない。",
          back: "There is nowhere (we can eat).",
          romaji: "Doko mo taberareru basho ga nai.",
        },
        {
          front: "どこも座(すわ)れる場所(ばしょ)がない。",
          back: "There isn't anywhere to sit.",
          romaji: "Doko mo suwareru basho ga nai.",
        },
        {
          front: "今日(きょう)、彼女(かのじょ)はどこにも行(い)きたくない。",
          back: "She doesn't want to go anywhere today.",
          romaji: "Kyō, kanojo wa doko ni mo ikitakunai.",
        },
        {
          front: "建物(たてもの)のどこでも食(た)べてもいい。",
          back: "You can eat anywhere in the building.",
          romaji: "Tatemono no doko demo tabete mo ii.",
        },
        {
          front: "ロンドンのどこにでもテスコがあります。",
          back: "There are Tescos everywhere in London.",
          romaji: "Rondon no doko ni demo Tesuko ga arimasu.",
        },
      ],
    },
    {
      type: "cheatsheet",
      summary:
        "Question word + か = some- (どこか somewhere, 何か something). + も with a negative verb = no- (どこにも...ない nowhere). + でも = any-/every- (どこでも anywhere). Particle order: か clips straight on (どこかに), but も and でも come after the particle (どこにも, どこにでも). Sensei's two traps: どこにも denies a specific search vs どこも denies the whole area; どこでも is anywhere you act (で) vs どこにでも is every place (に).",
      anchorSentences: [
        "きのう、どこかに行(い)った？",
        "何(なに)か辛(から)いものを食(た)べませんか？",
        "きのうの夜(よる)、僕(ぼく)はどこにも行(い)かなかった。",
        "どこも座(すわ)れる場所(ばしょ)がない。",
        "建物(たてもの)のどこでも食(た)べてもいい。",
        "ロンドンのどこにでもテスコがあります。",
      ],
      conjugationTable: [
        ["Japanese", "English", "Romaji"],
        ["か = some- (somewhere, something)", "", ""],
        ["きのう、どこかに行(い)った？", "Did you go somewhere yesterday?", "Kinō, dokoka ni itta?"],
        [
          "どこかでラーメンを食(た)べませんか？",
          "Do you want to eat ramen somewhere?",
          "Dokoka de rāmen o tabemasen ka?",
        ],
        [
          "何(なに)か辛(から)いものを食(た)べませんか？",
          "Do you want to eat something spicy?",
          "Nanika karai mono o tabemasen ka?",
        ],
        [
          "どこかおいしい場所(ばしょ)を知(し)ってる？",
          "Do you know somewhere nice to eat?",
          "Dokoka oishii basho o shitteru?",
        ],
        [
          "ミーティングのためにどこかいい場所(ばしょ)を探(さが)しています。",
          "I'm looking for somewhere nice for a meeting.",
          "Mītingu no tame ni dokoka ii basho o sagashite imasu.",
        ],
        ["も + negative = no- (not anywhere)", "", ""],
        [
          "きのうの夜(よる)、僕(ぼく)はどこにも行(い)かなかった。",
          "I didn't go anywhere last night.",
          "Kinō no yoru, boku wa doko ni mo ikanakatta.",
        ],
        [
          "どこも食(た)べられる場所(ばしょ)がない。",
          "There is nowhere (we can eat).",
          "Doko mo taberareru basho ga nai.",
        ],
        [
          "どこも座(すわ)れる場所(ばしょ)がない。",
          "There isn't anywhere to sit.",
          "Doko mo suwareru basho ga nai.",
        ],
        [
          "今日(きょう)、彼女(かのじょ)はどこにも行(い)きたくない。",
          "She doesn't want to go anywhere today.",
          "Kyō, kanojo wa doko ni mo ikitakunai.",
        ],
        ["でも / にでも = any- (anywhere, everywhere)", "", ""],
        [
          "建物(たてもの)のどこでも食(た)べてもいい。",
          "You can eat anywhere in the building.",
          "Tatemono no doko demo tabete mo ii.",
        ],
        [
          "ロンドンのどこにでもテスコがあります。",
          "There are Tescos everywhere in London.",
          "Rondon no doko ni demo Tesuko ga arimasu.",
        ],
      ],
    },
  ],
};
