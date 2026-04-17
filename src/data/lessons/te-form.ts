import type { LessonContent } from "@/lib/types";

// B5 — Te-form: The Universal Connector
// This is the "unlock" lesson for Section B.
// Sources: Tae Kim §76 (sequence), §82-86 (te-form uses), §101-105 (must/permission),
//          §129 (requests); Genki I ch 6-9; Lorenzo's sensei notes (lessons.txt 3231-3286,
//          5660-5691, 7355-7388).
// NOTE: LessonContent does not include prereqs — those live in CurriculumLesson (curriculum.ts).
//       The slugs below are for cross-reference only.
// prerequisites: ['masu-form', 'verb-groups-1-2-3']

export const TE_FORM: LessonContent = {
  slug: "te-form",
  title: "Te-form: The Verb Form That Unlocks Everything",
  titleJa: "て形マスター",
  section: "B",
  jlptLevel: "N5",
  estimatedMin: 18,
  steps: [
    // ─── STEP 1 · HOOK ───────────────────────────────────────────────────────
    {
      type: "hook",
      whyItMatters:
        "Te-form is in every anime episode, every manga panel, every real conversation. It is the connector that chains actions, forms requests, describes ongoing states, grants permission, bans behaviour, and sequences events. Once te-form clicks, six major grammar structures open up simultaneously. It is the single highest-leverage form in the language.",
      mediaExample: {
        // Frieren: Beyond Journey's End (葬送のフリーレン), ep 1.
        // Himmel says to Frieren after the journey ends:
        // 「一緒に旅をして、よかった。」— "I'm glad we travelled together."
        // Two te-form constructions in nine words: 旅をして (て-form connecting action)
        // and よかった (past of よい). Natural, emotional, and untranslatable without te-form.
        quote:
          "一緒に旅をして、よかった。",
        source:
          "Frieren: Beyond Journey's End (葬送のフリーレン), Episode 1 — Himmel",
      },
    },

    // ─── STEP 2 · CONCEPT ────────────────────────────────────────────────────
    {
      type: "concept",
      explanation: `
Te-form is the "connecting form" of Japanese verbs. Where ます-form marks politeness and stops the sentence,
て-form links one verb to the next — or hands off to a helper like います, ください, もいい.
Think of it as the verb opening its hand to pass the baton forward.

The rules share identical euphonic changes with た-form (plain past). If you know た-form, you already know
te-form — just swap た/だ for て/で. The mnemonic below works for both at once.

─────────────────────────────────────────────────────────────────
GROUP 1 (う-verbs / godan): the "Tsu-Mu-Bu-Nu" drum pattern
─────────────────────────────────────────────────────────────────

Think of a taiko drum beat: U/TSU/RU · MU/BU/NU · KU · GU · SU

  う / つ / る  →  って   (doubled-t, tight sound)
    例: 会う→会って, 待つ→待って, 作る→作って

  む / ぶ / ぬ  →  んで   (nasal + voiced, heavy sound)
    例: 飲む→飲んで, 遊ぶ→遊んで, 死ぬ→死んで

  く            →  いて   (light, unvoiced)
    例: 書く→書いて

  ぐ            →  いで   (light, voiced)
    例: 泳ぐ→泳いで

  す            →  して   (sibilant stays)
    例: 話す→話して

★ THE TRAP: 行く (to go) breaks the く→いて rule.
  行く→行って  (not 行いて — that form does not exist)
  Your sensei has flagged this; treat it as a standalone fact to memorise.

─────────────────────────────────────────────────────────────────
GROUP 2 (る-verbs / ichidan): drop る, add て
─────────────────────────────────────────────────────────────────
  食べる→食べて, 寝る→寝て, 起きる→起きて, やめる→やめて

─────────────────────────────────────────────────────────────────
IRREGULARS (only two)
─────────────────────────────────────────────────────────────────
  する  →  して
  来る(くる)  →  来て(きて)

─────────────────────────────────────────────────────────────────
THE 6 CONSTRUCTIONS THIS FORM UNLOCKS
─────────────────────────────────────────────────────────────────
  1. て + ください     "please do X"           polite request
  2. て + います       "is doing / is in state" progressive & resultant
  3. て + もいい       "it's OK to do X"        permission
  4. て + はいけない   "must not do X"          prohibition
  5. て + から         "after doing X, ..."     sequencing
  6. て + [next verb]  "did X and then Y"       chaining actions

Each of these is its own lesson later in the curriculum — but recognising
and using them starts here.
      `.trim(),
      formulaJa:
        "Verb[て] + ください / います / もいい / はいけない / から / Verb",
      cureDollyTake:
        "Cure Dolly frames te-form as the verb's 'conjunctive' or 'continuative' form — it holds the verb open, ready to connect to whatever comes next. It cannot end a sentence on its own; it always reaches forward.",
    },

    // ─── STEP 3 · EXAMPLES ───────────────────────────────────────────────────
    {
      type: "examples",
      items: [
        // 1. Group 1, う→って — chaining actions
        {
          ja: "朝ご飯を食べて、学校に行きます。",
          furigana: [
            { kanji: "朝", reading: "あさ" },
            { kanji: "飯", reading: "はん" },
            { kanji: "食", reading: "た" },
            { kanji: "学校", reading: "がっこう" },
            { kanji: "行", reading: "い" },
          ],
          en: "I eat breakfast and then go to school.",
          breakdown:
            "食べる (Group 2) → 食べて + chaining conjunction. 行く (Group 1 exception) → 行きます (polite present).",
        },
        // 2. Group 1, む→んで — progressive
        {
          ja: "コーヒーを飲んでいます。",
          furigana: [{ kanji: "飲", reading: "の" }],
          en: "I am drinking coffee.",
          breakdown:
            "飲む (む→んで) + います = progressive. The double-n contraction (飲んで) is the む/ぶ/ぬ pattern.",
        },
        // 3. Group 1, く→いて — please do X
        {
          ja: "ここに名前を書いてください。",
          furigana: [
            { kanji: "名前", reading: "なまえ" },
            { kanji: "書", reading: "か" },
          ],
          en: "Please write your name here.",
          breakdown:
            "書く (く→いて) + ください = polite request. Standard form for instructions and signs.",
        },
        // 4. THE TRAP: 行く→行って (not 行いて)
        {
          ja: "図書館に行ってもいいですか。",
          furigana: [
            { kanji: "図書館", reading: "としょかん" },
            { kanji: "行", reading: "い" },
          ],
          en: "Is it OK if I go to the library?",
          breakdown:
            "⚠ TRAP: 行く → 行って (not 行いて). Exception to the く→いて rule. + もいいですか = permission question.",
        },
        // 5. Group 1, す→して — sequencing with から
        {
          ja: "シャワーを浴びてから、寝ます。",
          furigana: [
            { kanji: "浴", reading: "あ" },
            { kanji: "寝", reading: "ね" },
          ],
          en: "After taking a shower, I'll sleep.",
          breakdown:
            "浴びる (Group 2) → 浴びて + から = 'after doing'. てから clearly marks temporal sequence, unlike bare て-chaining.",
        },
        // 6. Group 1, ぶ→んで — prohibition
        {
          ja: "ここで遊んではいけません。",
          furigana: [{ kanji: "遊", reading: "あそ" }],
          en: "You must not play here.",
          breakdown:
            "遊ぶ (ぶ→んで) + はいけない = prohibition. The は adds extra emphasis — 'as for doing X, it is not acceptable'.",
        },
        // 7. Group 2 — resultant state with います
        {
          ja: "田中さんは結婚しています。",
          furigana: [
            { kanji: "田中", reading: "たなか" },
            { kanji: "結婚", reading: "けっこん" },
          ],
          en: "Tanaka-san is married.",
          breakdown:
            "結婚する (irregular する→して) + います = resultant state, not ongoing action. The marriage happened; the state persists. Critical distinction from progressive.",
        },
        // 8. Group 1, つ→って — chaining with contrast
        {
          ja: "友達を待って、一緒に映画を見た。",
          furigana: [
            { kanji: "友達", reading: "ともだち" },
            { kanji: "待", reading: "ま" },
            { kanji: "一緒", reading: "いっしょ" },
            { kanji: "映画", reading: "えいが" },
            { kanji: "見", reading: "み" },
          ],
          en: "I waited for my friend and we watched a film together.",
          breakdown:
            "待つ (つ→って) + chaining. Tense is set by the final verb 見た (plain past). The te-form itself is tense-neutral.",
        },
        // 9. Group 1, ぐ→いで — permission casual
        {
          ja: "プールで泳いでもいいよ。",
          furigana: [{ kanji: "泳", reading: "およ" }],
          en: "You can swim in the pool, you know.",
          breakdown:
            "泳ぐ (ぐ→いで) + もいいよ = casual permission. よ softens the information-giving tone.",
        },
        // 10. Irregular くる→きて — chaining
        {
          ja: "日本に来て、いろいろなものを食べた。",
          furigana: [
            { kanji: "日本", reading: "にほん" },
            { kanji: "来", reading: "き" },
            { kanji: "食", reading: "た" },
          ],
          en: "I came to Japan and ate all sorts of things.",
          breakdown:
            "来る (irregular → 来て) + chaining. Both verbs share the same subject; the sequence is implied by order.",
        },
      ],
    },

    // ─── STEP 4 · DRILL ──────────────────────────────────────────────────────
    {
      type: "drill",
      items: [
        // 1. む→んで conjugation
        {
          type: "cloze",
          sentence: "毎朝コーヒーを{{}}ています。",
          answer: "飲んで",
          en: "I drink coffee every morning. (habitual with ている)",
          hint: "飲む — む group",
        },
        // 2. THE TRAP
        {
          type: "multipleChoice",
          sentence: "駅まで{{}}から電話します。",
          en: "I will call after going to the station.",
          options: ["行いて", "行って", "行きて", "行で"],
          correctIndex: 1,
          explanation:
            "行く is the famous exception: く→って, not く→いて. 行いて does not exist.",
        },
        // 3. す→して request
        {
          type: "cloze",
          sentence: "もっとゆっくり{{}}ください。",
          answer: "話して",
          en: "Please speak more slowly.",
          hint: "話す — す group",
        },
        // 4. る-verb permission
        {
          type: "multipleChoice",
          sentence: "ここで食べ{{}}いいですか。",
          en: "Is it OK to eat here?",
          options: ["てもいい", "てもいい", "ていい", "てもいい"],
          correctIndex: 0,
          explanation:
            "食べる (Group 2) → 食べて + もいいですか. In casual speech もいい shortens to just いい, but the も is standard.",
        },
        // 5. ぶ→んで prohibition
        {
          type: "cloze",
          sentence: "この部屋でタバコを吸っては{{}}。",
          answer: "いけません",
          en: "You must not smoke in this room.",
          hint: "て + は + ___",
          acceptableAnswers: ["いけない", "ならない", "だめです"],
        },
        // 6. く→いて conjugation
        {
          type: "cloze",
          sentence: "メモを{{}}おきました。",
          answer: "書いて",
          en: "I wrote a memo (in preparation).",
          hint: "書く — く group",
        },
        // 7. sequencing with てから vs bare て
        {
          type: "multipleChoice",
          sentence: "宿題をして{{}}、ゲームをした。",
          en: "After finishing homework, I played a game.",
          options: ["から", "いる", "もいい", "はいけない"],
          correctIndex: 0,
          explanation:
            "てから = 'after doing'. It explicitly marks temporal sequence. The bare て alone just chains actions without that 'after' nuance.",
        },
        // 8. resultant state vs progressive
        {
          type: "multipleChoice",
          sentence: "彼は太って{{}}。",
          en: "He is fat. (resultant state — he became fat and remains so)",
          options: ["います", "ください", "もいい", "から"],
          correctIndex: 0,
          explanation:
            "太る (to get fat) is a change-of-state verb. ている here = resultant state (the state of having become fat), not ongoing action.",
        },
        // 9. する→して — chain
        {
          type: "cloze",
          sentence: "勉強{{}}、友達と遊んだ。",
          answer: "して",
          en: "I studied and then hung out with friends.",
          hint: "する — irregular",
        },
        // 10. ぐ→いで conjugation
        {
          type: "cloze",
          sentence: "毎日プールで{{}}います。",
          answer: "泳いで",
          en: "I swim in the pool every day.",
          hint: "泳ぐ — ぐ group",
        },
      ],
    },

    // ─── STEP 5 · LISTENING ──────────────────────────────────────────────────
    {
      type: "listening",
      audioUrl: "",
      // Two flatmates (Yuki and Ren) getting ready to leave. Te-form carries
      // the whole conversation: requests, sequencing, progressive, permission.
      transcript: `
ゆき：レンくん、もう準備できてる？
レン：ちょっと待って。財布を探しています。
ゆき：早くしてください。電車が来てしまいます。
レン：わかった。このコート着ていいですか。
ゆき：もちろん。それを着て、早く来てください。
レン：鍵を持ってから出ますね。
ゆき：じゃあ、私は外で待っています。
      `.trim(),
      comprehensionQuestions: [
        {
          question: "What is Ren looking for?",
          options: ["His coat", "His wallet", "His keys", "His phone"],
          correctIndex: 1,
        },
        {
          question: "Why is Yuki in a hurry?",
          options: [
            "She is hungry",
            "The train is coming",
            "It is raining",
            "The shop is closing",
          ],
          correctIndex: 1,
        },
        {
          question: "What will Yuki do while she waits?",
          options: [
            "Wait inside",
            "Wait outside",
            "Call Ren",
            "Go ahead without Ren",
          ],
          correctIndex: 1,
        },
        {
          question:
            "Which te-form construction does Ren use when asking to borrow the coat?",
          options: [
            "てください (request)",
            "てから (sequencing)",
            "てもいいですか (permission)",
            "てはいけない (prohibition)",
          ],
          correctIndex: 2,
        },
      ],
    },

    // ─── STEP 6 · READING ────────────────────────────────────────────────────
    {
      type: "reading",
      // Doraemon-esque scene: Nobita arrives home late, faces Mum.
      // Five clear te-form usages annotated in the definitions below.
      passage: `
のびたは学校から帰って、すぐにゲームをはじめた。
お母さんが「宿題をしてから遊びなさい」と言った。
「わかった、でも少しだけゲームをしてもいいでしょう？」
「だめ！廊下で走ってはいけないのはわかってるでしょう。
ちゃんと座って勉強しなさい。」
のびたはため息をついて、机に向かった。
      `.trim(),
      definitions: {
        "帰って": "te-form of 帰る (帰って) — chains 'arrived home' to what followed",
        "してから": "te-form of する + から — 'after doing'; marks the sequence mum insists on",
        "してもいいでしょう": "te-form of する + もいいでしょう — asking permission, slightly pleading",
        "走ってはいけない": "te-form of 走る + はいけない — prohibition, rule statement",
        "座って": "te-form of 座る — chains 'sit down' to 'study'; paired commands",
        "ため息をついて": "te-form of つく — 'sighing (and then)', chaining the sigh to the action following it",
        廊下: "corridor / hallway",
        机: "desk",
        向かった: "headed towards (plain past of 向かう)",
      },
    },

    // ─── STEP 7 · CHEATSHEET ─────────────────────────────────────────────────
    {
      type: "cheatsheet",
      summary: `
Te-form is the verb's connector. Rules mirror た-form exactly — same euphonic changes, final
た/だ becomes て/で. Master the drum-beat pattern (U/TSU/RU→って, MU/BU/NU→んで, KU→いて,
GU→いで, SU→して) and memorise 行く→行って as the one exception. Then attach the six helpers.
      `.trim(),
      anchorSentences: [
        "一緒に旅をして、よかった。(Frieren — chaining + past)",
        "書いてください。(please write — request)",
        "飲んでいます。(I am drinking — progressive)",
        "行ってもいいですか。(may I go — permission; 行く trap!)",
        "走ってはいけない。(must not run — prohibition)",
        "宿題をしてから遊ぶ。(play after doing homework — sequence)",
      ],
      conjugationTable: [
        // Section A: conjugation rules
        ["Group", "Ending", "Te-form change", "Example", "Te-form"],
        ["G1 (う-verb)", "う / つ / る", "→ って", "会う / 待つ / 作る", "会って / 待って / 作って"],
        ["G1 (う-verb)", "む / ぶ / ぬ", "→ んで", "飲む / 遊ぶ / 死ぬ", "飲んで / 遊んで / 死んで"],
        ["G1 (う-verb)", "く", "→ いて", "書く", "書いて"],
        ["G1 (う-verb)", "ぐ", "→ いで", "泳ぐ", "泳いで"],
        ["G1 (う-verb)", "す", "→ して", "話す", "話して"],
        ["★ EXCEPTION", "く (行く only)", "→ って", "行く", "行って (not 行いて)"],
        ["G2 (る-verb)", "る", "drop る, + て", "食べる / 寝る / 起きる", "食べて / 寝て / 起きて"],
        ["Irregular", "する", "→ して", "する / 勉強する", "して / 勉強して"],
        ["Irregular", "来る (くる)", "→ 来て (きて)", "来る", "来て"],
        // Section B: the six constructions
        ["", "", "", "", ""],
        ["Construction", "Pattern", "Meaning", "Example", "Translation"],
        ["Request", "て + ください", "Please do X", "書いてください", "Please write it"],
        ["Progressive", "て + います", "Is doing / is in state", "飲んでいます", "Is drinking"],
        ["Permission", "て + もいい", "OK to do X", "行ってもいい", "It's OK to go"],
        ["Prohibition", "て + はいけない", "Must not do X", "走ってはいけない", "Must not run"],
        ["After", "て + から", "After doing X", "食べてから寝る", "Sleep after eating"],
        ["Chain", "て + Verb", "Did X then Y", "来て食べた", "Came and ate"],
      ],
    },

    // ─── STEP 8 · WRAP (SRS CARDS) ───────────────────────────────────────────
    {
      type: "wrap",
      srsItems: [
        {
          type: "grammar",
          front: "Te-form rule: む / ぶ / ぬ endings",
          back: "→ んで (e.g. 飲む→飲んで, 遊ぶ→遊んで, 死ぬ→死んで)",
        },
        {
          type: "grammar",
          front: "Te-form rule: う / つ / る endings",
          back: "→ って (e.g. 会う→会って, 待つ→待って, 作る→作って)",
        },
        {
          type: "grammar",
          front: "⚠ 行く → te-form",
          back: "行って (exception to く→いて rule — this is the #1 trap)",
        },
        {
          type: "grammar",
          front: "て + います — two meanings",
          back: "1. Progressive: 食べています = is eating  /  2. Resultant state: 結婚しています = is married",
        },
        {
          type: "grammar",
          front: "て + もいい vs て + はいけない",
          back: "もいい = permission ('it's OK to')  /  はいけない = prohibition ('must not')",
        },
        {
          type: "grammar",
          front: "て + から vs bare て (chaining)",
          back: "てから = explicitly 'after doing X'  /  bare て = 'and then', sequence implied by order",
        },
        {
          type: "grammar",
          front: "Te-form of する and 来る",
          back: "する → して  /  来る → 来て (きて)",
        },
        {
          type: "grammar",
          front: "Te-form rule: Group 2 (る-verbs)",
          back: "Drop る, add て. 食べる→食べて, 起きる→起きて, 寝る→寝て",
        },
      ],
    },
  ],
};
