import type { LessonContent } from "@/lib/types";

// Sensei-flagged purpose pattern (May 2026).
// Minimal lesson: short concept + concrete examples + summary table.

export const NI_IKU_PURPOSE: LessonContent = {
  slug: "ni-iku-purpose",
  title: "〜に行く: going somewhere to do something",
  titleJa: "「〜に行(い)く・来(く)る・帰(かえ)る」",
  section: "B",
  jlptLevel: "N5",
  estimatedMin: 8,
  steps: [
    {
      type: "concept",
      explanation:
        "This is how you say 'I'm going [place] to do [thing]'. Three pieces:\n\n1. The place you are going: [Place] に\n2. The reason / purpose: [Verb in ます-form, drop the ます] に\n3. The motion verb: 行(い)く (go), 来(く)る (come), or 帰(かえ)る (return home)\n\nExample: 駅(えき)に電車(でんしゃ)に乗(の)りに行(い)きます = I'm going to the station to take the train. (place = 駅, purpose verb = 乗ります → 乗り, motion = 行く.)\n\nThe stem trick: take the polite form, chop ます off. 食(た)べます → 食べ. 買(か)います → 買い. 飲(の)みます → 飲み. する → し. That stem is what slots in front of に.\n\nIf the action is a noun-like activity (買(か)い物(もの), 散歩(さんぽ), 勉強(べんきょう), 旅行(りょこう)), you can put it directly: 買い物に行く, 散歩に行く, 勉強に行く. No verb-stem needed.\n\nDo NOT use the dictionary form. ✗食べるに行く. ✓食べに行く.",
      formulaJa:
        "[Place]に + [Verb stem]に + 行く / 来る / 帰る",
    },
    {
      type: "examples",
      items: [
        {
          ja: "駅(えき)に電車(でんしゃ)に乗(の)りに行(い)きます。",
          en: "I'm going to the station to take the train.",
          breakdown:
            "Place: 駅 + に. Purpose: 乗ります → 乗り + に. Motion: 行きます.",
        },
        {
          ja: "コンビニにパンを買(か)いに行(い)く。",
          en: "I'm going to the konbini to buy bread.",
          breakdown:
            "Two に in one sentence: コンビニに (destination) and 買いに (purpose). Object パン takes を.",
        },
        {
          ja: "家(いえ)に晩(ばん)ご飯(はん)を食(た)べに帰(かえ)る。",
          en: "I'm going home to eat dinner.",
          breakdown:
            "帰る = return to your own base (home, country). Pairs with the place you're returning to.",
        },
        {
          ja: "公園(こうえん)に散歩(さんぽ)に行(い)く。",
          en: "I'm going to the park to take a walk.",
          breakdown:
            "散歩 is already a noun-like activity, so it slots straight in. No stem needed.",
        },
        {
          ja: "東京(とうきょう)に勉強(べんきょう)しに来(き)ました。",
          en: "I came to Tokyo to study.",
          breakdown:
            "する → し. So 勉強する → 勉強し + に. (勉強に来ました also works because 勉強 is a suru-noun.)",
        },
        {
          ja: "明日(あした)、友達(ともだち)が遊(あそ)びに来(き)ます。",
          en: "Tomorrow my friend is coming over (to hang out).",
          breakdown:
            "遊びに来る = standard 'come over to visit / hang out'. 遊ぶ → 遊び (stem).",
        },
      ],
    },
    {
      type: "cheatsheet",
      summary:
        "Formula: [Place]に + [Verb stem]に + 行く/来る/帰る. The stem is ます-form minus ます. Suru-nouns (散歩, 勉強, 買い物) slot in directly. Pick 行く if you're moving away, 来る if moving toward the speaker, 帰る if returning home or to base.",
      anchorSentences: [
        "駅(えき)に電車(でんしゃ)に乗(の)りに行(い)きます。",
        "コンビニにパンを買(か)いに行(い)く。",
        "家(いえ)に晩(ばん)ご飯(はん)を食(た)べに帰(かえ)る。",
        "公園(こうえん)に散歩(さんぽ)に行(い)く。",
        "明日(あした)、友達(ともだち)が遊(あそ)びに来(き)ます。",
      ],
      conjugationTable: [
        ["Slot", "Filler", "Example"],
        ["Destination", "[Place] に", "駅に"],
        ["Object (optional)", "[Noun] を", "電車を"],
        ["Purpose verb", "[Verb stem] に", "乗りに"],
        ["Purpose noun shortcut", "[Suru-noun] に", "散歩に"],
        ["Motion verb", "行く / 来る / 帰る", "行きます"],
        ["WRONG", "✗ dictionary form", "✗食べるに行く"],
        ["RIGHT", "✓ ます-stem", "✓食べに行く"],
      ],
    },
  ],
};
