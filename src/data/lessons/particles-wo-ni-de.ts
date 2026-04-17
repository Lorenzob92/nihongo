import type { LessonContent } from "@/lib/types";

// Lesson A3 (composite): The Particle Holy Trinity: を, に, で
// Section A (Particle Mastery), JLPT N5
// Adapted from parallel-agent draft to match LessonContent shape.
// Source materials: Tae Kim §39-42, archive lessons.txt L57-95 / L599-605 / L805-807 / L1466-1478.

export const PARTICLES_WO_NI_DE: LessonContent = {
  slug: "particles-wo-ni-de",
  title: "The particle holy trinity: を, に, で",
  titleJa: "助詞(じょし)の三本柱(さんぼんばしら)",
  section: "A",
  jlptLevel: "N5",
  estimatedMin: 15,
  steps: [
    {
      type: "hook",
      whyItMatters:
        "を, に, and で are three of the most frequent particles in Japanese, and each is only one character long. The trouble is that they overlap in just enough cases to cause constant errors: should you say 図書館(としょかん)に or 図書館で? 家(いえ)を or 家から? 道(みち)を or 道で? Each one has been drilled in isolation in your archive, but never in direct comparison. This lesson closes that gap.",
      mediaExample: {
        quote:
          "サトシは公園(こうえん)に行(い)った。そして公園(こうえん)で遊(あそ)んだ。",
        source:
          "Pokémon (ポケットモンスター) anime narration style. The に → で switch in consecutive sentences is a textbook contrast.",
      },
    },
    {
      type: "concept",
      explanation:
        "Each of the three particles answers a different question about the verb.\n\n" +
        "を (pronounced 'o') — THE OBJECT MARKER. Core question: 'What is the verb acting on?'\n" +
        "(a) Direct object of a transitive verb: パンを食(た)べる, 映画(えいが)を見(み)る.\n" +
        "(b) Path of motion — the space being traversed: 道(みち)を歩(ある)く, 公園(こうえん)を散歩(さんぽ)する, 空(そら)を飛(と)ぶ. In English we say 'walk along' or 'fly through'; Japanese says を.\n" +
        "(c) Departure point with leaving verbs: 家(いえ)を出(で)る, バスを降(お)りる, 学校(がっこう)を卒業(そつぎょう)する. Note: 家を出る uses を, NOT から.\n\n" +
        "に — THE TARGET / DESTINATION / TIME PARTICLE. Core question: 'Where/when/who is the verb pointing at?'\n" +
        "(a) Destination with motion verbs: 学校に行く, 東京に来る, 家に帰る.\n" +
        "(b) Specific point in time (clock times, days, dates): 7時に起きる, 月曜日に, 3月5日に. Relative time words (今日, 明日, 来週) take NO particle.\n" +
        "(c) Existence location with いる/ある: 猫(ねこ)は部屋(へや)にいる, 鍵(かぎ)は机(つくえ)の上にある. Never use で here.\n" +
        "(d) Indirect object / recipient: 友達にプレゼントをあげる, 母に電話する, 先生に聞く.\n" +
        "(e) Purpose of movement: [verb stem] + に + 行く/来る/帰る. 寿司を食べに行く.\n\n" +
        "で — THE CONTEXT / MEANS PARTICLE. Core question: 'In what context / by what means does the action happen?'\n" +
        "(a) Location where an ACTION takes place (not with いる/ある!): 図書館で勉強する, レストランで食べる, 部屋で寝る.\n" +
        "(b) Means or method: 電車で行く, 日本語で話す, 箸(はし)で食べる, 英語で書く.\n" +
        "(c) Material: 紙(かみ)で作(つく)る, 木(き)で作る.\n" +
        "(d) Reason or cause (limited to nouns): 風邪(かぜ)で休(やす)む, 仕事で遅(おそ)くなる.\n\n" +
        "THE KILLER COMPARISONS:\n\n" +
        "1. に vs で for location. 図書館に行く (destination, you are going there) vs 図書館で勉強する (action happening inside). 部屋にいる (existence, static) vs 部屋で寝る (action). Quick test: is the verb ある/いる? Use に. Action verb? Use で.\n\n" +
        "2. を vs から for leaving. 家を出る is correct (を for departure with leaving verbs). 家から出る shifts the meaning toward 'come out from inside the house'.\n\n" +
        "3. を vs で for a path. 道を歩く (walk along the road, traversal) vs 道で歩く (walk on the road, generic location). Use を when describing a journey or route.",
      formulaJa:
        "[Noun]を + transitive/motion verb · [Noun]に + destination/time/existence · [Noun]で + action location/means/material/reason",
      cureDollyTake:
        "Cure Dolly frames に as the particle that points the verb at its target, almost like an arrow. で sets the 'stage' or 'toolkit' for the action. を is the zero-particle in disguise for transitive verbs: the が-を pair mirrors the subject-object pair in English. Thinking of を as 'the thing the verb does something to' (including space traversed or place departed) keeps all three uses unified.",
    },
    {
      type: "examples",
      items: [
        {
          ja: "毎朝(まいあさ)、コーヒーを飲(の)みます。",
          en: "I drink coffee every morning.",
          breakdown: "を marks coffee as the direct object of 飲む.",
        },
        {
          ja: "彼女(かのじょ)は毎晩(まいばん)公園(こうえん)を散歩(さんぽ)します。",
          en: "She strolls through the park every evening.",
          breakdown: "を marks the park as the path traversed by 散歩する.",
        },
        {
          ja: "8時(じ)に家(いえ)を出(で)ます。",
          en: "I leave the house at 8 o'clock.",
          breakdown: "を with 出る marks the place being departed. Note に for the clock time.",
        },
        {
          ja: "来週(らいしゅう)、大阪(おおさか)に行(い)きます。",
          en: "I am going to Osaka next week.",
          breakdown: "に marks Osaka as the destination. 来週 takes no particle (relative time word).",
        },
        {
          ja: "土曜日(どようび)に友達(ともだち)と映画(えいが)を見(み)ます。",
          en: "On Saturday I will watch a film with a friend.",
          breakdown: "に marks Saturday as the time target.",
        },
        {
          ja: "冷蔵庫(れいぞうこ)の中(なか)にケーキがある。",
          en: "There is cake inside the fridge.",
          breakdown: "に with ある for inanimate existence. Never で with ある.",
        },
        {
          ja: "姉(あね)に誕生日(たんじょうび)プレゼントをあげた。",
          en: "I gave my older sister a birthday present.",
          breakdown: "に marks the sister as recipient. を marks the present as direct object.",
        },
        {
          ja: "昼(ひる)にラーメンを食(た)べに行(い)こう。",
          en: "Let's go eat ramen at lunchtime.",
          breakdown: "Second に: verb stem 食べ + に + 行く for purpose. First に: time marker.",
        },
        {
          ja: "毎日(まいにち)、会社(かいしゃ)で仕事(しごと)をします。",
          en: "I work at the office every day.",
          breakdown: "で marks the office as where the action happens.",
        },
        {
          ja: "日本語(にほんご)で話(はな)しましょう。",
          en: "Let's talk in Japanese.",
          breakdown: "で marks Japanese as the medium/method.",
        },
        {
          ja: "紙(かみ)で鶴(つる)を作(つく)ります。",
          en: "I will make a crane out of paper.",
          breakdown: "で for material. を marks the crane as the direct object of 作る.",
        },
        {
          ja: "風邪(かぜ)で学校(がっこう)を休(やす)んだ。",
          en: "I took the day off school because of a cold.",
          breakdown: "で for reason (noun only). を marks school as the place departed from.",
        },
      ],
    },
    {
      type: "drill",
      items: [
        {
          type: "multipleChoice",
          sentence: "駅(えき){{}}電車(でんしゃ)に乗(の)ります。",
          en: "I get on the train at the station.",
          options: ["を", "に", "で", "から"],
          correctIndex: 2,
          explanation:
            "The station is where the action (boarding) happens, so で. (乗る itself takes に for the vehicle: 電車に乗る.)",
        },
        {
          type: "cloze",
          sentence: "彼(かれ)は毎朝(まいあさ)橋(はし){{}}走(はし)ります。",
          answer: "を",
          en: "He runs across the bridge every morning.",
          hint: "The bridge is the path being traversed by the motion verb 走る.",
        },
        {
          type: "multipleChoice",
          sentence: "図書館(としょかん){{}}本(ほん)を読(よ)みました。",
          en: "I read a book at the library.",
          options: ["を", "に", "で", "へ"],
          correctIndex: 2,
          explanation:
            "Reading is an action; the library is where it happened. Action location = で.",
        },
        {
          type: "multipleChoice",
          sentence: "図書館(としょかん){{}}行(い)きます。",
          en: "I am going to the library.",
          options: ["を", "に", "で", "の"],
          correctIndex: 1,
          explanation: "行く is a motion verb and the library is the destination. Destination = に.",
        },
        {
          type: "cloze",
          sentence: "9時(じ){{}}家(いえ)を出(で)ます。",
          answer: "に",
          en: "I leave the house at 9.",
          hint: "Clock time always takes に.",
        },
        {
          type: "multipleChoice",
          sentence: "ベッド{{}}猫(ねこ)がいます。",
          en: "There is a cat on the bed.",
          options: ["を", "に", "で", "へ"],
          correctIndex: 1,
          explanation: "いる (animate existence) takes に for the location. Never でいる.",
        },
        {
          type: "multipleChoice",
          sentence: "ベッド{{}}寝(ね)ます。",
          en: "I sleep in bed.",
          options: ["を", "に", "で", "へ"],
          correctIndex: 2,
          explanation:
            "寝る is an action verb. The bed is where the action occurs, so で. Compare: ベッドにいる (existence, に) vs ベッドで寝る (action, で).",
        },
        {
          type: "multipleChoice",
          sentence: "バス{{}}学校(がっこう)に行(い)きます。",
          en: "I go to school by bus.",
          options: ["を", "に", "で", "の"],
          correctIndex: 2,
          explanation: "バスで: bus is the means of transport (で). 学校に: school is the destination (に).",
        },
        {
          type: "cloze",
          sentence: "友達(ともだち){{}}メッセージを送(おく)った。",
          answer: "に",
          en: "I sent my friend a message.",
          hint: "送る is directed at a recipient. The recipient takes に as indirect object.",
        },
        {
          type: "multipleChoice",
          sentence: "日本語(にほんご){{}}メールを書(か)きます。",
          en: "I write emails in Japanese.",
          options: ["を", "に", "で", "へ"],
          correctIndex: 2,
          explanation: "日本語で: Japanese is the medium of writing (で). メールを: the email is the direct object of 書く.",
        },
      ],
    },
    {
      type: "listening",
      audioUrl: "",
      transcript:
        "ケン: ねえ、今日(きょう)何(なに)する？\nアキ: 午前中(ごぜんちゅう)は家(いえ)で勉強(べんきょう)するよ。10時(じ)に図書館(としょかん)に行(い)って、そこで本(ほん)を返(かえ)す。\nケン: じゃあ、昼(ひる)は？\nアキ: 12時(じ)に渋谷(しぶや)で会(あ)おう。駅(えき)を出(で)たら電話(でんわ)して。\nケン: わかった！電車(でんしゃ)で行(い)くから、たぶん12時10分(じゅっぷん)ごろになるけど。\nアキ: 大丈夫(だいじょうぶ)。駅前(えきまえ)のカフェで待(ま)ってるよ。\nケン: あ、その後(あと)、代官山(だいかんやま)を歩(ある)きながら本屋(ほんや)に寄(よ)りたいな。\nアキ: いいね。箸(はし)でちゃんと食(た)べられる店(みせ)を探(さが)して、夜(よる)は日本食(にほんしょく)にしよう。",
      comprehensionQuestions: [
        {
          question: "Where will Aki study in the morning?",
          options: ["At a café", "At home", "At the library", "At Shibuya station"],
          correctIndex: 1,
        },
        {
          question: "How will Ken travel to Shibuya?",
          options: ["By bus", "On foot", "By train", "By bike"],
          correctIndex: 2,
        },
        {
          question:
            "Why does Ken use を in 「代官山を歩きながら」?",
          options: [
            "Because 代官山 is the destination",
            "Because 代官山 is the path being traversed by the motion verb",
            "Because を is required after place names",
            "Because で would be ungrammatical",
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "reading",
      passage:
        "土曜日(どようび)の朝(あさ)、7時(じ)に目(め)が覚(さ)めた。ベッドでゆっくりしたかったけど、外(そと)がいい天気(てんき)だった。シャワーを浴(あ)びてから家(いえ)を出(で)て、自転車(じてんしゃ)で川(かわ)まで行(い)った。川(かわ)沿(ぞ)いの道(みち)をゆっくり走(はし)ると、とても気持(きも)ちよかった。昼(ひる)には友達(ともだち)に連絡(れんらく)して、近(ちか)くの定食屋(ていしょくや)で一緒(いっしょ)に食(た)べた。午後(ごご)は二人(ふたり)で駅前(えきまえ)の本屋(ほんや)に行(い)った。友達(ともだち)は漫画(まんが)を三冊(さんさつ)買(か)って、電車(でんしゃ)で帰(かえ)っていった。わたしは一人(ひとり)で公園(こうえん)を散歩(さんぽ)して、夕方(ゆうがた)6時(じ)に家(いえ)に戻(もど)った。",
      definitions: {
        "目(め)が覚(さ)める": "to wake up",
        "自転車(じてんしゃ)": "bicycle",
        "川(かわ)沿(ぞ)い": "along the river",
        "定食屋(ていしょくや)": "set-meal restaurant",
        "三冊(さんさつ)": "three volumes (counter for books)",
        "散歩(さんぽ)": "stroll, walk",
        "夕方(ゆうがた)": "evening",
        "戻(もど)った": "returned",
      },
    },
    {
      type: "cheatsheet",
      summary:
        "を, に, and で each answer a different question about a verb. を asks 'what is being acted on or moved through/from?', に asks 'where/when/who is the verb aimed at?', and で asks 'in what setting or by what means does the action happen?'. The critical rule to burn in: existence verbs (いる/ある) always take に; all other action verbs at a location take で.",
      anchorSentences: [
        "パンを食(た)べる。 (direct object)",
        "道(みち)を歩(ある)く。 (path of motion)",
        "家(いえ)を出(で)る。 (departure)",
        "学校(がっこう)に行(い)く。 (destination)",
        "7時(じ)に起(お)きる。 (time)",
        "部屋(へや)にいる。 (existence)",
        "図書館(としょかん)で勉強(べんきょう)する。 (action location)",
        "電車(でんしゃ)で行(い)く。 (means)",
      ],
      conjugationTable: [
        ["Use case", "を", "に", "で"],
        ["Direct object", "パンを食べる", "—", "—"],
        ["Path of motion", "道を歩く", "—", "—"],
        ["Departure point", "家を出る", "—", "—"],
        ["Destination", "—", "学校に行く", "—"],
        ["Existence (いる/ある)", "—", "部屋にいる", "—"],
        ["Specific time", "—", "7時に起きる", "—"],
        ["Recipient", "—", "友達にあげる", "—"],
        ["Purpose with motion", "—", "食べに行く", "—"],
        ["Action location", "—", "—", "レストランで食べる"],
        ["Means / method", "—", "—", "電車で行く"],
        ["Material", "—", "—", "紙で作る"],
        ["Reason (noun only)", "—", "—", "風邪で休む"],
      ],
    },
    {
      type: "wrap",
      srsItems: [
        {
          type: "grammar",
          front: "を particle: direct object",
          back: "Marks the noun the transitive verb acts on. パンを食べる. Formula: [Direct object]を[Transitive verb].",
        },
        {
          type: "grammar",
          front: "を particle: path of motion",
          back: "Marks the space traversed by an intransitive motion verb. 道を歩く, 公園を散歩する.",
        },
        {
          type: "grammar",
          front: "を particle: departure point",
          back: "Marks the place left behind with verbs like 出る, 降りる, 卒業する. 家を出る, バスを降りる. Not から.",
        },
        {
          type: "grammar",
          front: "に vs で: location contrast",
          back: "に = existence location (いる/ある). で = action location (any other verb). 部屋にいる vs 部屋で寝る.",
        },
        {
          type: "grammar",
          front: "に particle: specific time",
          back: "Clock times (7時に), days (月曜日に), dates (3月5日に). Relative time words (今日, 来週) take NO particle.",
        },
        {
          type: "grammar",
          front: "で particle: means and method",
          back: "Vehicle, tool, language, instrument. 電車で行く, 日本語で話す, 箸で食べる.",
        },
      ],
    },
  ],
};
