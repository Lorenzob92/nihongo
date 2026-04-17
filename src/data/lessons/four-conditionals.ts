import type { LessonContent } from "@/lib/types";

// Lesson F5: The Four Conditionals: たら, ば, と, なら
// Section F (Conditionals), JLPT N4
// Adapted from parallel-agent draft to match LessonContent shape.
// Source materials: Tae Kim §96-100, mirrors/taekim-grammar-md.

export const FOUR_CONDITIONALS: LessonContent = {
  slug: "four-conditionals-synthesis",
  title: "The four conditionals compared: たら, ば, と, なら",
  titleJa: "四(よ)つの条件形(じょうけんけい)",
  section: "F",
  jlptLevel: "N4",
  estimatedMin: 20,
  steps: [
    {
      type: "hook",
      whyItMatters:
        "English gets by with one word: 'if'. Japanese refuses this simplicity. Each of the four conditionals encodes WHY and HOW you are making an 'if' statement, not just the fact that you are. A single particle choice tells you whether the speaker is reacting to context, imagining a hypothetical, stating a natural law, or sequencing events. Without all four, half of any deduction or planning scene in seinen reads as flat.",
      mediaExample: {
        quote:
          "もし犯人(はんにん)がロボットなら、7大(だい)ロボットのどれかだ。",
        source:
          "Naoki Urasawa, Pluto vol. 1 (Gesicht, adapted for clarity). Gesicht uses なら because he is reacting to a proposition just placed on the table — not imagining a hypothetical from scratch. Swap なら for たら and the line becomes a clumsy sequence; swap for と and it breaks grammatically. That single particle tells you he heard something, assumed it true, and drew a conclusion. なら's personality in one line.",
      },
    },
    {
      type: "concept",
      explanation:
        "Each of the four conditionals answers a different question.\n\n" +
        "たら — 'After X is done / if X happens'. Flexible, conversational, RESULT-focused. The workhorse. Default in spoken Japanese. Covers real conditions, temporal sequences, suggestions, and discoveries. Formation: plain past form (た/だ) + ら. Examples: 雨が降ったら、家にいる. 家に帰ったら、誰もいなかった. (Past result clause is unique to たら.)\n\n" +
        "ば — 'If X were the case'. Hypothetical, CONDITION-focused, more written. Powers ～ばよかった (regret) and ～ばほど (the more X, the more Y). Negative なければ is everywhere because it underpins obligation grammar (なければならない). Formation: godan verbs shift final vowel to え-row + ば; ichidan drop る + れば; する→すれば; 来る→来れば; ない→なければ; い-adj drop い + ければ.\n\n" +
        "と — 'Whenever X, automatically Y'. INEVITABLE consequence. No speaker uncertainty. Used for natural laws, instructions, mechanical rules, habitual sequences. Because the result is inevitable, と CANNOT be followed by a request, command, desire, or invitation — the second clause must be factual. Formation: dictionary form + と. Nouns and な-adj add だ before と (学生だと).\n\n" +
        "なら — 'If we are talking about X / assuming the context you just gave me'. CONTEXTUAL, REACTIVE. Picks up from the interlocutor's statement. The result can even precede the condition in time. Formation: plain form + なら. For nouns and な-adj, do NOT add だ before なら (学生なら, not 学生だなら).\n\n" +
        "DECISION TREE:\n" +
        "1. Is the result an automatic, timeless consequence with no speaker choice? → と\n" +
        "2. Are you reacting to something just said or a context just introduced? → なら\n" +
        "3. Is the result already in the past (discovered after doing X)? → たら (only option)\n" +
        "4. Is the condition strongly hypothetical / proverb-like (or is this a regret / 'the more...the more' pattern)? → ば\n" +
        "5. Everything else → たら (safe default)",
      formulaJa:
        "Vた + ら | V[え-row] + ば | V[dict] + と | V[plain] + なら",
      cureDollyTake:
        "Cure Dolly: think of each conditional as carrying its own 'frame'. たら frames a sequence. ば frames a hypothetical condition. と frames an automatic law. なら frames a topic-isolation: 'if it's X we're talking about'. The frame, not the meaning of 'if', is what changes between them.",
    },
    {
      type: "examples",
      items: [
        {
          ja: "駅(えき)に着(つ)いたら、電話(でんわ)して。",
          en: "When you get to the station, give me a call.",
          breakdown: "たら — sequence + request. Only たら handles 'do X then make a request'. と is forbidden here.",
        },
        {
          ja: "宝(たから)くじが当(あ)たったら、仕事(しごと)を辞(や)める。",
          en: "If I won the lottery, I would quit my job.",
          breakdown: "たら — real hypothetical in casual register.",
        },
        {
          ja: "冷蔵庫(れいぞうこ)を開(あ)けたら、ケーキがなかった。",
          en: "When I opened the fridge, the cake was gone.",
          breakdown: "たら — past result clause. UNIQUE to たら. The other three cannot do this.",
        },
        {
          ja: "彼女(かのじょ)に正直(しょうじき)に話(はな)せばよかった。",
          en: "I wish I had been honest with her.",
          breakdown: "ば — ～ばよかった is the canonical regret pattern.",
        },
        {
          ja: "練習(れんしゅう)すればするほど、自信(じしん)がつく。",
          en: "The more you practise, the more confident you become.",
          breakdown: "ば — ～ばほど is a fixed idiomatic pattern expressing proportional increase.",
        },
        {
          ja: "食(た)べなければ病気(びょうき)になるよ。",
          en: "If you don't eat, you will get sick.",
          breakdown: "ば (negative) — なければ is the foundation of obligation grammar (なければならない).",
        },
        {
          ja: "電気(でんき)を消(け)すと暗(くら)くなる。",
          en: "When you turn off the lights, it gets dark.",
          breakdown: "と — physical law. Automatic, inevitable.",
        },
        {
          ja: "この道(みち)をまっすぐ行(い)くと、公園(こうえん)に出(で)ます。",
          en: "If you go straight along this road, you will come out at the park.",
          breakdown: "と — direction-giving. と is the natural conditional for navigation.",
        },
        {
          ja: "ラーメンなら、あの店(みせ)が一番(いちばん)うまい。",
          en: "If it's ramen (you're after), that shop is the best.",
          breakdown: "なら — reacting to the topic of ramen just introduced. Textbook なら.",
        },
        {
          ja: "東京(とうきょう)に行(い)くなら、Suicaを買(か)っておいて。",
          en: "If you are going to Tokyo, buy a Suica card in advance.",
          breakdown: "なら — advice that should happen BEFORE the condition (the trip). Only なら supports this time reversal naturally.",
        },
        {
          ja: "もし彼(かれ)が来(こ)ないなら、私(わたし)も行(い)かない。",
          en: "If he is not coming (as you say), I'm not going either.",
          breakdown: "なら — もし reinforces uncertainty about the assumed context.",
        },
        {
          ja: "お金(かね)があればいいのに。",
          en: "I wish I had money. (If only I had money...)",
          breakdown: "ば + のに = unfulfilled wish. のに signals the speaker knows the condition is not met.",
        },
      ],
    },
    {
      type: "drill",
      items: [
        {
          type: "multipleChoice",
          sentence: "まっすぐ行(い)く{{}}、コンビニが見(み)えます。",
          en: "Go straight, then you will see a convenience store.",
          options: ["たら", "ば", "と", "なら"],
          correctIndex: 2,
          explanation:
            "と — physical, automatic consequence of following the route. Not a personal choice. と is the natural conditional for directions.",
        },
        {
          type: "multipleChoice",
          sentence: "イタリアン{{}}、駅(えき)の近(ちか)くにいい店(みせ)がある。",
          en: "If it's Italian (you want), there's a good place near the station.",
          options: ["たら", "ば", "と", "なら"],
          correctIndex: 3,
          explanation:
            "なら — your friend introduced the topic. You are reacting to that context. The defining use of なら.",
        },
        {
          type: "multipleChoice",
          sentence: "もっと勉強(べんきょう)すれ{{}}よかった。",
          en: "I wish I had studied more.",
          options: ["たら", "ば", "と", "なら"],
          correctIndex: 1,
          explanation:
            "ば — the pattern ～ばよかった is a fixed expression of regret.",
        },
        {
          type: "multipleChoice",
          sentence: "ドアを開(あ)ける{{}}、彼(かれ)が立(た)っていた。",
          en: "When I opened the door, he was standing there.",
          options: ["たら", "ば", "と", "なら"],
          correctIndex: 0,
          explanation:
            "たら — the result is in the past (past tense verb). Only たら can have a past-tense result clause.",
        },
        {
          type: "multipleChoice",
          sentence: "砂糖(さとう)を食(た)べ過(す)ぎる{{}}、肌(はだ)が荒(あ)れる。",
          en: "If you eat too much sugar, you get spots.",
          options: ["たら", "ば", "と", "なら"],
          correctIndex: 2,
          explanation:
            "と — general, repeatable biological consequence. と states timeless truths. たら works grammatically but と sounds like a settled fact.",
        },
        {
          type: "multipleChoice",
          sentence: "送信(そうしん)ボタンを押(お)す{{}}、フォームが送(おく)られます。",
          en: "If you press the submit button, the form will be sent.",
          options: ["たら", "ば", "と", "なら"],
          correctIndex: 2,
          explanation:
            "と — machine instruction with an automatic result. Perfect for と because the second clause is purely factual (form is sent).",
        },
        {
          type: "multipleChoice",
          sentence: "駅(えき)に着(つ)く{{}}、電話(でんわ)してください。",
          en: "When you get to the station, please call me.",
          options: ["と", "たら", "ば", "なら"],
          correctIndex: 1,
          explanation:
            "TRAP: と cannot be followed by a request (してください). Use たら for instructions with a request component. 駅に着いたら、電話してください is correct.",
        },
        {
          type: "multipleChoice",
          sentence: "寝(ね)れ{{}}寝るほど、疲(つか)れる。",
          en: "The more you sleep, the more tired you feel.",
          options: ["たら", "ば", "と", "なら"],
          correctIndex: 1,
          explanation:
            "ば — the ～ばほど pattern (the more X, the more Y) requires ば. No other conditional fits this fixed structure.",
        },
        {
          type: "multipleChoice",
          sentence: "仕事(しごと)を辞(や)める{{}}、まず履歴書(りれきしょ)を更新(こうしん)して。",
          en: "If you're thinking of quitting, update your CV first.",
          options: ["たら", "ば", "と", "なら"],
          correctIndex: 3,
          explanation:
            "なら — the advice (update CV) should happen BEFORE quitting. Only なら allows the result to precede the condition in time. と would be wrong (request in result clause). ば is awkward (you're not making a hypothetical from scratch).",
        },
        {
          type: "multipleChoice",
          sentence: "毎日(まいにち)練習(れんしゅう)すれ{{}}、上手(うま)くなる。",
          en: "If you practise every day, you will improve.",
          options: ["たら", "ば", "と", "なら"],
          correctIndex: 1,
          explanation:
            "ば — most natural for a general truth / principle. The kind of thing a coach would say. たら is grammatical too.",
        },
      ],
    },
    {
      type: "listening",
      audioUrl: "",
      transcript:
        "ケンタ：来月(らいげつ)、京都(きょうと)に行(い)こうと思(おも)ってるんだけど。\nユキ：京都(きょうと)なら、絶対(ぜったい)に嵐山(あらしやま)に行(い)ったほうがいいよ。特(とく)に秋(あき)は紅葉(こうよう)がきれいだから。\nケンタ：新幹線(しんかんせん)を早(はや)めに予約(よやく)すれば、もっと安(やす)く買(か)えるよ。\nユキ：そうだね。あと、土曜日(どようび)に行(い)くと、観光客(かんこうきゃく)がすごく多(おお)くなるから、日曜日(にちようび)のほうがいいかも。\nケンタ：日曜日(にちようび)に行(い)ったら、帰(かえ)りの新幹線(しんかんせん)が混(こ)みそうだけど。\nユキ：確(たし)かに。じゃあ、もし早起(はやお)きできるなら、朝一(あさいち)の新幹線(しんかんせん)で行(い)くのはどう？\nケンタ：それがいいね。よし、決(き)まり！チケットを買(か)ったら、教(おし)えてね。",
      comprehensionQuestions: [
        {
          question: "Why does Yuki use なら in her first reply rather than たら?",
          options: [
            "Because Kenta just introduced the topic of Kyoto and Yuki is reacting to that context",
            "Because なら is more polite",
            "Because たら cannot be used with place names",
            "Because Yuki has not been to Kyoto",
          ],
          correctIndex: 0,
        },
        {
          question: "Why does Yuki use と when warning about Saturday crowds?",
          options: [
            "Because Saturday is a specific day",
            "Because she is making a request",
            "Because と frames it as 'this is always what happens on Saturdays' (timeless truth)",
            "Because と is required after time words",
          ],
          correctIndex: 2,
        },
        {
          question: "In the last line, Kenta uses たら with a request (教えてね). Why can't と be used?",
          options: [
            "と sounds too formal",
            "と cannot be followed by a request, command, or expression of desire",
            "Past tense verbs cannot precede と",
            "と is only for natural phenomena",
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "reading",
      passage:
        "日曜日(にちようび)の朝(あさ)、僕(ぼく)はいつもゆっくり起(お)きる。目覚(めざ)まし時計(どけい)を消(け)すと、また眠(ねむ)くなる。だから、最近(さいきん)は目覚(めざ)ましを二(ふた)つセットしている。もし天気(てんき)がよければ、近(ちか)くの公園(こうえん)に散歩(さんぽ)しに行(い)く。公園(こうえん)に着(つ)いたら、まずコーヒーを飲(の)む。ベンチに座(すわ)って、本(ほん)を読(よ)みながらのコーヒーは最高(さいこう)だ。読書(どくしょ)なら、静(しず)かな朝(あさ)が一番(いちばん)いい。",
      definitions: {
        "目覚(めざ)まし時計(どけい)": "alarm clock",
        "また眠(ねむ)くなる": "to get sleepy again",
        "セット": "to set (loanword)",
        "ベンチ": "bench",
        "最高(さいこう)": "the best",
        "読書(どくしょ)": "reading (as a hobby)",
        "と (this passage)": "habitual/automatic consequence: turning off the alarm always makes him sleepy again",
        "ば (this passage)": "hypothetical condition — he doesn't yet know if the weather will be good",
        "たら (this passage)": "sequence: once he arrives (condition met), he drinks coffee (result)",
        "なら (this passage)": "topic isolation — when it comes to reading specifically, a quiet morning is best",
      },
    },
    {
      type: "cheatsheet",
      summary:
        "DECISION TREE:\n1. Automatic, timeless consequence with no speaker choice? → と\n2. Reacting to context just introduced? → なら\n3. Result already in the past? → たら (only option)\n4. Strongly hypothetical / proverb / regret / 'the more...the more'? → ば\n5. Everything else → たら (safe default)\n\nKEY RULES:\n• と cannot be followed by a request, desire, or command in the result clause.\n• Only たら can have a past-tense verb in the result clause.\n• ば is the only one used in ～ばよかった (regret) and ～ばほど (proportional).\n• なら never adds だ before it when attaching to nouns or な-adjectives.\n• なら is the only one whose result can logically precede the condition in time.",
      anchorSentences: [
        "駅(えき)に着(つ)いたら、電話(でんわ)して。 (たら, sequence + request)",
        "練習(れんしゅう)すればするほど、上手(うま)くなる。 (ば, idiomatic)",
        "春(はる)になると、桜(さくら)が咲(さ)く。 (と, natural law)",
        "寿司(すし)なら、銀座(ぎんざ)がいい。 (なら, reactive)",
        "冷蔵庫(れいぞうこ)を開(あ)けたら、ケーキがなかった。 (たら, past result)",
        "彼女(かのじょ)に話(はな)せばよかった。 (ば, regret)",
      ],
      conjugationTable: [
        ["Feature", "たら", "ば", "と", "なら"],
        ["Core meaning", "Once X / if X (result-focused)", "If X were the case (condition-focused)", "Whenever X, automatically Y", "Given the context of X (reactive)"],
        ["Typical register", "Conversational — safest default", "Written, formal, proverbs", "Instructions, scientific facts", "Conversational, reactive"],
        ["Result clause tense", "Past OR non-past (UNIQUE)", "Non-past only", "Non-past only", "Any tense"],
        ["Result can be a request?", "Yes", "Yes (with nuance)", "NO", "Yes"],
        ["Hypothetical from scratch?", "Yes", "Yes (main strength)", "Only timeless truths", "No — context must exist"],
        ["Temporal relationship", "Result after condition", "Result after condition", "Result immediate / automatic", "Result can precede (UNIQUE)"],
        ["Anchor", "雨が降ったら、家にいる", "早く起きれば、間に合う", "春になると、桜が咲く", "寿司なら、銀座がいい"],
      ],
    },
    {
      type: "wrap",
      srsItems: [
        {
          type: "grammar",
          front: "～たら (conditional)",
          back: "Plain past + ら. Real 'if', sequences (result-focus), suggestions, discoveries. UNIQUE: result clause can be in the past.",
        },
        {
          type: "grammar",
          front: "～ば (conditional)",
          back: "Godan: shift to え-row + ば. Ichidan: drop る + れば. する→すれば. ない→なければ. Condition-focused, hypothetical, proverbs.",
        },
        {
          type: "grammar",
          front: "～と (conditional)",
          back: "Dict form + と. Automatic, inevitable consequences. FORBIDDEN if result clause has request, desire, invitation, command.",
        },
        {
          type: "grammar",
          front: "～なら (conditional)",
          back: "Plain form + なら (NEVER だなら). Reacts to existing context. Result can precede condition in time. Topic-isolating function.",
        },
        {
          type: "grammar",
          front: "TRAP: と + request",
          back: "B is wrong: 駅に着くと、電話して. Use たら for requests/commands after sequence.",
        },
        {
          type: "grammar",
          front: "TRAP: なら needs prior context",
          back: "なら must react to something already in the air. Out of nowhere it sounds odd. For pure hypotheticals, use たら or ば.",
        },
        {
          type: "grammar",
          front: "～ばよかった",
          back: "Fixed regret pattern: 'I wish I had...'. 勉強すればよかった = I wish I had studied.",
        },
      ],
    },
  ],
};
