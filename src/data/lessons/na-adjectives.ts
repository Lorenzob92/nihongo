import type { LessonContent } from "@/lib/types";

// Demo lesson for V0 (spec section 10).
// Targets a known weak spot from the archive audit: full な-adjective conjugation.
// Phase 2 agents: copy this file's shape to add new lessons.
export const NA_ADJECTIVES: LessonContent = {
  slug: "na-adjectives",
  title: "な-adjectives: full conjugation",
  titleJa: "な形容詞",
  section: "C",
  jlptLevel: "N5",
  estimatedMin: 14,
  steps: [
    {
      type: "hook",
      whyItMatters:
        "Half of every Japanese sentence describing how something is uses な-adjectives, and they conjugate via the copula, not on themselves. Get this wrong and you sound like an N5 textbook for the next ten years.",
      mediaExample: {
        quote: "この街は本当に静かだったな。",
        source: "Frieren, ch 14 (modified for level)",
      },
    },
    {
      type: "concept",
      explanation:
        "A な-adjective is really a noun-like thing that takes the copula. It uses な only when it sits directly in front of a noun (静かな部屋 = a quiet room). When it predicates a sentence, the copula does all the conjugation work: 静かだ, 静かじゃない, 静かだった, 静かじゃなかった. Adverbially it takes に (静かに歩く). The connector form is で (静かで広い部屋). Two friendly traps: 綺麗 and 嫌い look like い-adjectives but are な-adjectives.",
      formulaJa: "Noun + な + Noun  /  Adj + に + Verb  /  Adj + で + Adj",
      cureDollyTake:
        "Cure Dolly: a な-adjective is a noun-with-personality. Treat it as a noun and the copula does the work. The な is just the attributive form of だ when modifying another noun.",
    },
    {
      type: "examples",
      items: [
        {
          ja: "この部屋は静かだ。",
          en: "This room is quiet.",
          breakdown: "静か (quiet) + だ (copula). Plain affirmative.",
        },
        {
          ja: "あの店はあまり有名じゃない。",
          en: "That shop isn't very famous.",
          breakdown: "有名 + じゃない (negative copula). あまり requires negative.",
        },
        {
          ja: "昨日のテストは簡単だった。",
          en: "Yesterday's test was easy.",
          breakdown: "簡単 + だった (past copula).",
        },
        {
          ja: "あの先生は親切じゃなかった。",
          en: "That teacher wasn't kind.",
          breakdown: "親切 + じゃなかった (past negative).",
        },
        {
          ja: "綺麗な花ですね。",
          en: "What a pretty flower.",
          breakdown: "Attributive な before 花. 綺麗 looks like an i-adj but is な.",
        },
        {
          ja: "静かに話してください。",
          en: "Please speak quietly.",
          breakdown: "Adverbial に: な-adj describing how an action is done.",
        },
        {
          ja: "便利で安いアプリ。",
          en: "An app that's convenient and cheap.",
          breakdown: "で is the te-form of the copula, used to chain な-adj.",
        },
      ],
    },
    {
      type: "drill",
      items: [
        {
          type: "cloze",
          sentence: "あの人は{{}}な人です。",
          answer: "親切",
          en: "That person is a kind person.",
          hint: "Use the な-adj for 'kind'.",
        },
        {
          type: "cloze",
          sentence: "この問題は簡単{{}}。",
          answer: "だった",
          en: "This problem was easy.",
          acceptableAnswers: ["でした"],
          hint: "Past plain copula.",
        },
        {
          type: "multipleChoice",
          sentence: "綺麗{{}}部屋。",
          en: "A clean room.",
          options: ["な", "い", "の", "で"],
          correctIndex: 0,
          explanation:
            "綺麗 is a な-adjective despite ending in い. Attributive position needs な.",
        },
        {
          type: "cloze",
          sentence: "静か{{}}歩いてください。",
          answer: "に",
          en: "Please walk quietly.",
          hint: "Adverbial form of a な-adjective.",
        },
        {
          type: "multipleChoice",
          sentence: "あの店は有名{{}}。",
          en: "That shop isn't famous.",
          options: ["くない", "じゃない", "ない", "じゃないだ"],
          correctIndex: 1,
          explanation:
            "な-adj negative is じゃない (or ではない). くない is for い-adj.",
        },
      ],
    },
    {
      type: "listening",
      audioUrl: "",
      transcript:
        "図書館はとても静かでした。便利な場所ですが、人があまりいませんでした。",
      comprehensionQuestions: [
        {
          question: "How was the library described?",
          options: ["Loud and crowded", "Quiet and convenient", "Old and small", "Far and famous"],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "reading",
      passage:
        "私の町は静かで、夜はとても綺麗だ。駅の近くに便利なカフェがあって、週末はそこで本を読む。有名じゃないけれど、私には大切な場所だ。",
      definitions: {
        町: "town",
        夜: "night",
        駅: "station",
        近く: "nearby",
        週末: "weekend",
        場所: "place",
      },
    },
    {
      type: "cheatsheet",
      summary:
        "な-adjectives are noun-like; the copula conjugates around them. Use な before a noun, に for adverbs, で to chain.",
      anchorSentences: [
        "この部屋は静かだ。",
        "綺麗な花ですね。",
        "静かに話してください。",
        "便利で安いアプリ。",
        "親切じゃなかった。",
      ],
      conjugationTable: [
        ["Form", "静か (quiet)", "Notes"],
        ["Affirmative", "静かだ", "Plain copula"],
        ["Negative", "静かじゃない", "or ではない (formal)"],
        ["Past", "静かだった", "Past copula"],
        ["Past negative", "静かじゃなかった", "or ではなかった"],
        ["Attributive", "静かな部屋", "Use な before nouns"],
        ["Adverbial", "静かに", "Like English -ly"],
        ["Te-form (chain)", "静かで", "Connects to next clause"],
      ],
    },
    {
      type: "wrap",
      srsItems: [
        { type: "grammar", front: "な-adj past affirmative pattern", back: "Adj + だった" },
        { type: "grammar", front: "な-adj negative pattern", back: "Adj + じゃない" },
        { type: "grammar", front: "Attributive な-adj", back: "Adj + な + Noun" },
        { type: "grammar", front: "Adverbial な-adj", back: "Adj + に" },
        { type: "vocab", front: "綺麗", back: "kirei (pretty, clean) — な-adj" },
      ],
    },
  ],
};
