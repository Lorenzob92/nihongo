import type { LessonContent } from "@/lib/types";

// Lesson C2: な-adjectives Full Conjugation Mastery
// Section C (Adjective Mastery), JLPT N5
// Adapted from parallel-agent draft + foundation demo lesson.
// Source materials: Tae Kim §28-29, archive lessons.txt L2398-2488 / L2832-2918 / L3012-3107.

export const NA_ADJECTIVES: LessonContent = {
  slug: "na-adjectives",
  title: "な-adjectives: full conjugation mastery",
  titleJa: "な形容詞のフル活用",
  section: "C",
  jlptLevel: "N5",
  estimatedMin: 14,
  steps: [
    {
      type: "hook",
      whyItMatters:
        "Nearly half of all Japanese adjectives are な-adjectives, including the words for 'quiet', 'kind', 'famous', and 'convenient'. Without mastering their conjugation you will misread character descriptions and emotional inner monologue on almost every manga page. Get this wrong and you sound like an N5 textbook for the next ten years.",
      mediaExample: {
        quote: "フリーレンは静(しず)かな人(ひと)です。",
        source:
          "Frieren: Beyond Journey's End (葬送のフリーレン), Volume 1, Chapter 1. Himmel narrating about Frieren. The 静かな is the attributive な-adjective in its purest form, modifying 人 directly.",
      },
    },
    {
      type: "concept",
      explanation:
        "A な-adjective behaves like a noun with a copula glued to it. In its plain dictionary form the word stands alone (静か), and you attach な only when the adjective directly precedes a noun (静かな部屋 = a quiet room). When the adjective is the predicate of a sentence you drop the な entirely and use the copula conjugations だ/です/じゃない/でした/じゃなかった, exactly as you would with a noun. This is the central contrast with い-adjectives, which carry their own built-in conjugation endings (高い, 高くない, 高かった) and never need a copula.\n\nThe most dangerous pitfall is きれい and 嫌(きら)い: both end in い, which makes them look like い-adjectives, but they are な-adjectives and follow none of the い-adjective rules. Always test a word by asking whether the い is part of the kanji reading, not a standalone inflection marker.\n\nAdverbially な-adjectives take に (静かに歩く = walk quietly). The connector form is で (静かで広い部屋 = a quiet and spacious room).",
      formulaJa:
        "[な-adj]な + [Noun] (attributive) / [な-adj]です (predicate polite) / [な-adj]じゃない (predicate negative) / [な-adj]に + Verb (adverb)",
      cureDollyTake:
        "Cure Dolly: a な-adjective is a noun-with-personality. Treat it as a noun and the copula does the work. The な that appears before a noun is really a modified copula form, not part of the adjective itself. This is why the な disappears in predicative position: the copula moves to the end and conjugates there instead.",
    },
    {
      type: "examples",
      items: [
        {
          ja: "この街(まち)は有名(ゆうめい)です。",
          en: "This town is famous.",
          breakdown:
            "Predicate position: drop な, add です. Never 有名なです.",
        },
        {
          ja: "彼(かれ)は親切(しんせつ)じゃないです。",
          en: "He is not kind.",
          breakdown:
            "Casual: じゃない. Formal alternative: 親切ではありません.",
        },
        {
          ja: "子(こ)どものころ、その公園(こうえん)は静(しず)かでした。",
          en: "When I was a child, that park was quiet.",
          breakdown: "Past polite: でした. Casual equivalent: 静かだった.",
        },
        {
          ja: "その試験(しけん)は簡単(かんたん)じゃなかったです。",
          en: "That exam was not easy.",
          breakdown:
            "Past negative: じゃなかった(です). Formal: ではありませんでした.",
        },
        {
          ja: "大切(たいせつ)な人(ひと)を大事(だいじ)にしてください。",
          en: "Please cherish the important person in your life.",
          breakdown:
            "Attributive position: な is required between adjective and noun.",
        },
        {
          ja: "電車(でんしゃ)は車(くるま)より便利(べんり)です。",
          en: "Trains are more convenient than cars.",
          breakdown: "Comparative pattern: A は B より [adjective]です.",
        },
        {
          ja: "フリーレンは元気(げんき)で、上手(じょうず)な魔法使(まほうつか)いです。",
          en: "Frieren is energetic and a skilled mage.",
          breakdown:
            "The で here is the te-form connector for な-adjectives (and nouns). Attach で to chain them.",
        },
        {
          ja: "この部屋(へや)はきれいじゃなかった。",
          en: "This room was not clean.",
          breakdown:
            "TRAP: きれい ends in い but is a な-adjective. Past negative is じゃなかった, NOT きれくなかった. Same rule for 嫌(きら)い.",
        },
        {
          ja: "静(しず)かに話(はな)してください。",
          en: "Please speak quietly.",
          breakdown:
            "Adverbial に: な-adj describing how an action is done.",
        },
      ],
    },
    {
      type: "drill",
      items: [
        {
          type: "cloze",
          sentence: "あの人(ひと)は{{}}な人(ひと)です。",
          answer: "親切",
          en: "That person is a kind person.",
          hint: "Use the な-adj for 'kind'.",
        },
        {
          type: "cloze",
          sentence: "この問題(もんだい)は簡単(かんたん){{}}。",
          answer: "だった",
          en: "This problem was easy.",
          acceptableAnswers: ["でした"],
          hint: "Past plain copula.",
        },
        {
          type: "multipleChoice",
          sentence: "綺麗(きれい){{}}部屋(へや)。",
          en: "A clean room.",
          options: ["な", "い", "の", "で"],
          correctIndex: 0,
          explanation:
            "綺麗 is a な-adjective despite ending in い. Attributive position needs な.",
        },
        {
          type: "cloze",
          sentence: "静(しず)か{{}}歩(ある)いてください。",
          answer: "に",
          en: "Please walk quietly.",
          hint: "Adverbial form of a な-adjective.",
        },
        {
          type: "multipleChoice",
          sentence: "あの店(みせ)は有名(ゆうめい){{}}。",
          en: "That shop isn't famous.",
          options: ["くない", "じゃない", "ない", "じゃないだ"],
          correctIndex: 1,
          explanation:
            "な-adj negative is じゃない (or ではない). くない is for い-adj.",
        },
        {
          type: "multipleChoice",
          sentence: "きれい{{}} (past negative, casual)",
          en: "It was not clean / pretty.",
          options: ["くなかった", "じゃなかった", "いくなかった", "なかった"],
          correctIndex: 1,
          explanation:
            "きれい is a な-adjective despite ending in い. Past negative follows the copula pattern: じゃなかった.",
        },
        {
          type: "cloze",
          sentence: "嫌(きら)い{{}}食(た)べ物(もの)は何(なん)ですか？",
          answer: "な",
          en: "What are the foods you dislike?",
          hint: "嫌い is a な-adjective. Attributive position before a noun needs what?",
        },
        {
          type: "cloze",
          sentence: "子(こ)どもの頃(ころ)、ぼくは元気(げんき){{}}。",
          answer: "でした",
          en: "When I was a child, I was energetic.",
          acceptableAnswers: ["だった"],
          hint: "Polite past affirmative of a な-adjective used as predicate.",
        },
      ],
    },
    {
      type: "listening",
      audioUrl: "",
      transcript:
        "アオイ：ねえ、新(あたら)しいカフェ、どうだった？\nケン：すごくきれいだったよ。静(しず)かで、便利(べんり)な場所(ばしょ)にあって、よかった。\nアオイ：え、でも店員(てんいん)さんは親切(しんせつ)じゃなかったって聞(き)いたけど。\nケン：そんなことないよ。みんなとても親切(しんせつ)だったよ。\nアオイ：そっか。じゃあ、週末(しゅうまつ)一緒(いっしょ)に行(い)こうか。\nケン：いいね。でも土曜日(どようび)はちょっと不便(ふべん)だな。日曜日(にちようび)はどう？\nアオイ：日曜日(にちようび)は大丈夫(だいじょうぶ)だよ。",
      comprehensionQuestions: [
        {
          question: "How does Ken describe the new café?",
          options: [
            "Expensive and inconvenient",
            "Pretty, quiet, and in a convenient location",
            "Lively but not clean",
            "Far away but with kind staff",
          ],
          correctIndex: 1,
        },
        {
          question: "What had Aoi heard about the café staff?",
          options: [
            "They were very friendly",
            "They were not kind",
            "They were famous",
            "They were busy",
          ],
          correctIndex: 1,
        },
        {
          question: "Which day do they agree to visit the café?",
          options: ["Saturday", "Friday", "Sunday", "Monday"],
          correctIndex: 2,
        },
      ],
    },
    {
      type: "reading",
      passage:
        "今日(きょう)、ぼくは新(あたら)しい図書館(としょかん)に行(い)きました。図書館(としょかん)はとても静(しず)かで、きれいな場所(ばしょ)でした。スタッフの人(ひと)は全員(ぜんいん)親切(しんせつ)で、ぼくに有名(ゆうめい)な本(ほん)をたくさん教(おし)えてくれました。駅(えき)からちょっと遠(とお)いけど、便利(べんり)なバスがあるので、全然(ぜんぜん)不便(ふべん)じゃなかったです。また来(き)たいと思(おも)います。",
      definitions: {
        "図書館(としょかん)": "library",
        "全員(ぜんいん)": "everyone, all the staff",
        "教(おし)えてくれました": "kindly told / introduced to me",
        "全然(ぜんぜん)": "not at all (used with negative)",
        "不便(ふべん)": "inconvenient",
        "有名(ゆうめい)": "famous, well-known",
        "親切(しんせつ)": "kind, considerate",
        "場所(ばしょ)": "place, location",
      },
    },
    {
      type: "cheatsheet",
      summary:
        "な-adjectives conjugate like nouns using the copula (だ/です). Add な before a noun (attributive); drop it and conjugate the copula in predicate position. きれい and 嫌(きら)い look like い-adjectives but are な-adjectives: use じゃない, でした, じゃなかった.",
      anchorSentences: [
        "この部屋(へや)は静(しず)かです。",
        "この部屋(へや)は静(しず)かじゃないです。",
        "この部屋(へや)は静(しず)かでした。",
        "この部屋(へや)は静(しず)かじゃなかったです。",
        "静(しず)かな部屋(へや)が好(す)きです。",
        "便利(べんり)で安(やす)いアプリ。",
      ],
      conjugationTable: [
        ["Form", "Affirmative", "Negative"],
        ["Present (plain)", "静かだ", "静かじゃない / 静かではない"],
        ["Present (polite)", "静かです", "静かじゃないです / 静かじゃありません"],
        ["Past (plain)", "静かだった", "静かじゃなかった"],
        ["Past (polite)", "静かでした", "静かじゃなかったです"],
        ["Modifying noun", "静かな部屋", "静かじゃない部屋"],
        ["Te-form connector", "静かで…", "静かじゃなくて…"],
        ["Adverbial", "静かに (quietly)", "n/a"],
      ],
    },
    {
      type: "wrap",
      srsItems: [
        { type: "grammar", front: "な-adj past affirmative pattern", back: "Adj + だった (plain) / でした (polite)" },
        { type: "grammar", front: "な-adj negative pattern", back: "Adj + じゃない / ではない" },
        { type: "grammar", front: "Attributive な-adj", back: "Adj + な + Noun (静かな部屋)" },
        { type: "grammar", front: "Adverbial な-adj", back: "Adj + に (静かに歩く)" },
        { type: "grammar", front: "な-adj te-form connector", back: "Adj + で (静かで広い部屋)" },
        { type: "vocab", front: "綺麗(きれい)", back: "kirei (pretty, clean) — な-adj despite ending in い" },
        { type: "vocab", front: "嫌(きら)い", back: "kirai (disliked) — な-adj despite ending in い" },
      ],
    },
  ],
};
