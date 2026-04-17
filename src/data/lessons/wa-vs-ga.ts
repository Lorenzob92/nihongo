import type { LessonContent } from "@/lib/types";

// Lesson A1: は vs が — the foundational particle lesson.
// Leans heavily on Cure Dolly's framing (logical subject / topic) over
// Genki's "subject vs topic" phrasing, which most learners find circular.
// Source refs: CD lessons 1-3, Tae Kim §24 + §26, archive audit L1313-1331,
// curriculum map A1 (section A — Particle Mastery).

export const WA_VS_GA: LessonContent = {
  slug: "wa-vs-ga",
  title: "は vs が: The Lesson That Changes Everything",
  titleJa: "はとがの違い",
  section: "A",
  jlptLevel: "N5",
  estimatedMin: 15,
  steps: [
    // -----------------------------------------------------------------------
    // Step 1: Hook
    // -----------------------------------------------------------------------
    {
      type: "hook",
      whyItMatters:
        "Every Japanese learner hits a wall where sentences start making no sense — not because the vocabulary is hard, but because は and が are being misread. Once you understand that が IDENTIFIES (it answers 'who?') and は SETS A TOPIC (it says 'speaking of…'), the wall comes down. This is the single highest-leverage grammar insight in all of N5.",
      mediaExample: {
        quote:
          "私が勇者だ。 / 私は勇者だ。\n('I am the hero.' vs 'As for me, I am a hero.')\nSwitch the particle and the whole emotional weight of the line changes.",
        source:
          "Frieren: Beyond Journey's End — contrast between how a character identifies themselves vs. how they are discussed by others. The が version ('I am the one who is the hero') is what you'd say when someone asks '誰が勇者ですか？' — it pinpoints you as the answer.",
      },
    },

    // -----------------------------------------------------------------------
    // Step 2: Concept
    // -----------------------------------------------------------------------
    {
      type: "concept",
      explanation:
        "This distinction has confused learners for decades because textbooks call both particles 'subject markers' in different ways, then leave you to guess which one to use. Cure Dolly's insight cuts through all of that with one clean frame.\n\nが is the LOGICAL SUBJECT particle. Its job is to IDENTIFY the doer or the experiencer — to answer an implicit or explicit 'who?' or 'what?'. When you hear が, you know the sentence is telling you: this specific thing is the one. が is attached to new information, to answers, to the thing being singled out.\n\nは is the TOPIC particle. Its job is to lift something up and say 'now we're going to talk about this.' It doesn't say anything about the grammar role of that word inside the clause — it just announces the topic. You can topicalise anything with は: the subject, the object, even a time word. は often carries contrast or continuation ('as for X, though…').\n\nThe key Cure Dolly insight: most Japanese sentences contain a が-marked logical subject, but that が is frequently INVISIBLE (dropped as a zero pronoun). When は replaces or accompanies が, it's doing a different job. In 私は寿司が好きです, both particles are present: は puts 私 on the table as topic, and が marks 寿司 as the logical subject of 好き (because 好き describes a state of 'being liked', not an active choice).\n\nThis lesson covers all seven key patterns. By the end you will not guess — you will know.",
      formulaJa:
        "Topic は … Subject が … Verb/Adjective\n（Example: 私(わたし)は 寿司(すし)が 好(す)きです。）",
      cureDollyTake:
        "Cure Dolly: 'が is the only true subject marker in Japanese. It marks the grammatical A-car — the engine of the sentence. は is a topic-comment marker, and a topic can be anything at all. The reason は often looks like a subject marker is simply that subjects are frequently promoted to topic. But が does the grammatical heavy lifting. When a sentence seems to have no が, look for the zero-pronoun — it is always there.'",
    },

    // -----------------------------------------------------------------------
    // Step 3: Examples (8 sentences, 7 patterns)
    // -----------------------------------------------------------------------
    {
      type: "examples",
      items: [
        {
          ja: "私(わたし)は寿司(すし)が好(す)きです。",
          en: "As for me, sushi is liked. (I like sushi.)",
          breakdown:
            "PATTERN 1 — double particle sentence. は topics 私, が marks 寿司 as the logical subject of 好き. The 'liker' is a zero-pronoun (∅が) before 好き. This is the single most important example in the lesson.",
        },
        {
          ja: "誰(だれ)が来(き)ましたか？　—　ジョンが来(き)ました。",
          en: "Who came? — John came.",
          breakdown:
            "PATTERN 2 — question-word rule. Question words (誰, 何, どれ) always take が, never は. The answer mirrors the particle: ジョンが. Think of が as 'the one who'.",
        },
        {
          ja: "猫(ねこ)が入(はい)ってきた！",
          en: "A cat came in!",
          breakdown:
            "PATTERN 3 — new information. が introduces something the listener doesn't know about yet. If this were 猫は入ってきた, it would imply the cat was already under discussion. が = first appearance.",
        },
        {
          ja: "猫(ねこ)は魚(さかな)を食(た)べた。",
          en: "The cat (as for it) ate the fish.",
          breakdown:
            "PATTERN 3 continued — は continues the topic. We just mentioned the cat with が; now we use は to carry it forward. The cat is no longer new information.",
        },
        {
          ja: "コーヒーは飲(の)みません。",
          en: "Coffee — I don't drink it.",
          breakdown:
            "PATTERN 4 — negation pulls は. The object (コーヒー) is promoted to topic with は to frame the negation: 'As for coffee, I won't have it.' This is not the same as 'I don't drink anything' — it singles out coffee.",
        },
        {
          ja: "私(わたし)が作(つく)ったケーキを食(た)べてください。",
          en: "Please eat the cake that I made.",
          breakdown:
            "PATTERN 5 — subordinate clause. Inside the relative clause modifying ケーキ, the subject must be が. は cannot enter a subordinate clause to mark its logical subject. 私が作った = 'the one I made'.",
        },
        {
          ja: "寿司(すし)は好(す)きですが、刺身(さしみ)は好(す)きじゃない。",
          en: "Sushi I like, but sashimi I don't.",
          breakdown:
            "PATTERN 6 — contrast は. は appears twice, each time creating a contrast. This is は's second major role: not just topic, but 'A yes, B no'. The が after the conjunction is unrelated — it's the conjunctive particle けど/が ('but').",
        },
        {
          ja: "あのレストランは高(たか)いですが、料理(りょうり)がおいしい。",
          en: "That restaurant is expensive, but the food is delicious.",
          breakdown:
            "PATTERN 7 — combination. The first clause uses は for the known topic (restaurant, probably already discussed). The second clause uses が because 料理 is being introduced as a new piece of information answering 'what's good about it?'.",
        },
      ],
    },

    // -----------------------------------------------------------------------
    // Step 4: Drill (8 items — includes traps)
    // -----------------------------------------------------------------------
    {
      type: "drill",
      items: [
        {
          type: "multipleChoice",
          sentence: "誰(だれ){{}}先生(せんせい)ですか？",
          en: "Who is the teacher?",
          options: ["は", "が", "を", "に"],
          correctIndex: 1,
          explanation:
            "Question word 誰 ALWAYS takes が. You can never say 誰は先生 as a question — は would make 誰 the topic, which is nonsensical for an unknown 'who'.",
        },
        {
          type: "multipleChoice",
          sentence: "私(わたし){{}}テニス{{}}好(す)きです。",
          en: "As for me, I like tennis.",
          options: ["は / が", "が / は", "は / は", "が / が"],
          correctIndex: 0,
          explanation:
            "私は sets the topic. テニスが marks the logical subject of 好き. The person doing the 'liking' is the zero-pronoun. This is the canonical double-particle trap.",
        },
        {
          type: "cloze",
          sentence: "突然(とつぜん)、犬(いぬ){{}}走(はし)ってきた。",
          answer: "が",
          en: "Suddenly, a dog came running.",
          hint: "Is this a new animal entering the scene, or one already being discussed?",
        },
        {
          type: "multipleChoice",
          sentence: "ビール{{}}飲(の)みません。日本酒(にほんしゅ)はいいですよ。",
          en: "Beer I don't drink. Sake is fine though.",
          options: ["が", "は", "も", "を"],
          correctIndex: 1,
          explanation:
            "Negation + contrast = は. The speaker is contrasting beer (rejected) with sake (accepted). This は topicalises ビール and frames it as the thing being set aside.",
        },
        {
          type: "cloze",
          sentence: "田中(たなか)さん{{}}書(か)いた手紙(てがみ)を読(よ)んだ。",
          answer: "が",
          en: "I read the letter that Tanaka-san wrote.",
          hint: "This is a relative clause modifying 手紙. What particle must appear inside a subordinate clause?",
        },
        {
          type: "multipleChoice",
          sentence: "——誰(だれ)が来(き)ましたか？　——田中(たなか)さん{{}}来(き)ました。",
          en: "Who came? — Tanaka-san came.",
          options: ["は", "が", "も", "で"],
          correctIndex: 1,
          explanation:
            "When the question uses が, the answer also uses が. Tanaka-san is being identified as 'the one who came', not simply raised as a topic.",
        },
        {
          type: "multipleChoice",
          sentence: "東京(とうきょう){{}}高(たか)いですが、大阪(おおさか){{}}安(やす)いです。",
          en: "Tokyo is expensive, but Osaka is cheap.",
          options: ["は / は", "が / が", "は / が", "が / は"],
          correctIndex: 0,
          explanation:
            "Both cities are being contrasted — classic contrast は. Each は says 'as for this city (vs the other)'. Using が would imply you're identifying Tokyo/Osaka as new information, which isn't the case here.",
        },
        {
          type: "cloze",
          sentence: "このケーキ{{}}おいしいですね。誰(だれ)が作(つく)ったんですか？",
          answer: "は",
          en: "This cake is delicious, isn't it. Who made it?",
          hint: "The cake was just placed in front of you — it's the topic of discussion now. The second sentence then asks 'who?' with が.",
        },
      ],
    },

    // -----------------------------------------------------------------------
    // Step 5: Listening
    // -----------------------------------------------------------------------
    {
      type: "listening",
      audioUrl: "",
      transcript:
        "アキ：ねえ、誰が夕飯を作ったの？\nケン：僕が作ったよ。カレーだよ。\nアキ：カレーは好きだけど、辛いのは苦手なんだよね。\nケン：これはそんなに辛くないよ。野菜がたくさん入ってるし、チキンも入ってる。\nアキ：じゃあ、食べてみる。わあ、野菜がやわらかい！おいしいね。\nケン：よかった。肉は奮発したんだよ。",
      comprehensionQuestions: [
        {
          question: "Who cooked dinner?",
          options: ["Aki", "Ken", "Both of them", "Nobody — it was delivery"],
          correctIndex: 1,
        },
        {
          question: "What is Aki's concern about the food?",
          options: [
            "She doesn't like curry",
            "She can't eat chicken",
            "She doesn't like spicy food",
            "She already ate",
          ],
          correctIndex: 2,
        },
        {
          question:
            "Why does が appear in '野菜がやわらかい' rather than は?",
          options: [
            "Because 野菜 is the topic of the whole conversation",
            "Because Aki is introducing the softness of the vegetables as a new, surprising observation",
            "Because は only appears with negative sentences",
            "Because が always follows adjectives",
          ],
          correctIndex: 1,
        },
      ],
    },

    // -----------------------------------------------------------------------
    // Step 6: Reading
    // -----------------------------------------------------------------------
    {
      type: "reading",
      passage:
        "今日(きょう)は友達(ともだち)のミカと公園(こうえん)に行(い)った。公園(こうえん)に着(つ)いたら、知(し)らない犬(いぬ)が走(はし)ってきた。かわいかったけど、ミカは犬(いぬ)が苦手(にがて)だ。犬(いぬ)は私(わたし)の近(ちか)くに来(き)て、しっぽを振(ふ)った。飼(か)い主(ぬし)の男(おとこ)の人(ひと)が来(き)て、「すみません、この子(こ)は人(ひと)が好(す)きで…」と言(い)った。私(わたし)は笑(わら)って、「大丈夫(だいじょうぶ)ですよ」と答(こた)えた。ミカは少(すこ)し離(はな)れたところで、スマホを見(み)ていた。",
      definitions: {
        "着いたら": "when (we) arrived",
        "苦手": "not good with, not fond of",
        "しっぽ": "tail",
        "振った": "wagged",
        "飼い主": "owner (of a pet)",
        "離れたところ": "at a distance, a bit further away",
      },
    },

    // -----------------------------------------------------------------------
    // Step 7: Cheatsheet
    // -----------------------------------------------------------------------
    {
      type: "cheatsheet",
      summary:
        "DECISION TREE — pick your particle:\n\n1. Is it a question word (誰, 何, どれ, どこ)? → が\n2. Is this brand-new information entering the scene? → が\n3. Is this something already known / being carried forward? → は\n4. Is there contrast ('A yes, B no')? → は\n5. Are you inside a relative clause (modifying a noun)? → が\n6. Is it a negation where you're singling something out? → は\n7. Is が marking the experiencer of 好き / 嫌い / できる / わかる? → が (always)\n\nAnchor sentence for the whole lesson:\n私(わたし)は寿司(すし)が好(す)きです。\n→ は = topic, が = logical subject of 好き.",
      anchorSentences: [
        "私(わたし)は寿司(すし)が好(す)きです。",
        "誰(だれ)が来(き)ましたか？ — ジョンが来(き)ました。",
        "猫(ねこ)が入(はい)ってきた！",
        "コーヒーは飲(の)みません。",
        "私(わたし)が作(つく)ったケーキ。",
        "寿司(すし)は好(す)きですが、刺身(さしみ)は好(す)きじゃない。",
      ],
      conjugationTable: [
        ["Pattern", "Particle", "Why"],
        ["Question word (誰, 何, どれ)", "が", "Identifies the unknown"],
        ["New information / first mention", "が", "Introduces into discourse"],
        ["Continuing a known topic", "は", "Carries forward, no contrast"],
        ["Contrast ('A yes, B no')", "は", "Sets up the comparison"],
        ["Logical subject of 好き/嫌い/できる", "が", "These verbs always take が"],
        ["Inside a relative clause", "が", "は cannot enter subordinate clauses"],
        ["Negation singling something out", "は", "Topicalises the item being rejected"],
      ],
    },

    // -----------------------------------------------------------------------
    // Step 8: Wrap — SRS items
    // -----------------------------------------------------------------------
    {
      type: "wrap",
      srsItems: [
        {
          type: "grammar",
          front: "が — core function",
          back:
            "Logical subject / identifier particle. Answers 'who?' or 'what?'. Introduces new information. Required after question words (誰, 何). Required inside subordinate clauses.",
        },
        {
          type: "grammar",
          front: "は — core function",
          back:
            "Topic particle. Says 'speaking of X…'. Signals known or continuing information. Signals contrast ('A yes, B no'). Can topicalise any element, not just subjects.",
        },
        {
          type: "grammar",
          front: "私(わたし)は寿司(すし)が好(す)きです",
          back:
            "は = topic (私). が = logical subject of 好き (寿司). The 'liker' is a zero-pronoun before 好き. Cure Dolly: が is always there, even when invisible.",
        },
        {
          type: "grammar",
          front: "Question-word rule",
          back:
            "誰が来ましたか → ジョンが来ました. Question words take が; the answer mirrors が. Cannot use は with 誰/何 in a question.",
        },
        {
          type: "grammar",
          front: "が inside relative clauses",
          back:
            "私(わたし)が作(つく)ったケーキ = 'the cake I made'. は cannot mark the subject inside a clause modifying a noun. Always が in subordinate position.",
        },
      ],
    },
  ],
};
