import type { LessonContent } from "@/lib/types";

// Lesson B14+B15: Causative (使役) and Causative-Passive — combined lesson.
// MISSING from Lorenzo's archive (audit ref #102, #103 — never taught).
// Common in seinen: boss/subordinate, parent/child, workplace drinking scenes.
// Source refs: Tae Kim §149 + §152, curriculum map B14 + B15,
// archive audit lines 126-127 (causative never taught, 終わらせる appeared
// incidentally at L6008/L9218 but without explanation).

export const CAUSATIVE: LessonContent = {
  slug: "causative",
  title: "Causative (使役): Making and Letting Others Do",
  titleJa: "使役形(しえきけい)と使役受身(しえきうけみ)",
  section: "B",
  jlptLevel: "N4",
  estimatedMin: 20,
  steps: [
    // -------------------------------------------------------------------------
    // Step 1: Hook
    // -------------------------------------------------------------------------
    {
      type: "hook",
      whyItMatters:
        "Every workplace manga, school scene, and family argument in seinen runs on the causative. A boss makes staff work late, a parent forces a child to eat vegetables, a salaryman complains about being dragged to a drinking party. Without the causative and its passive cousin, you are reading only half the power dynamic in every scene. This is also where polite Japanese gets indispensable: させてください ('please let me...') is so common in business contexts that skipping it is not an option.",
      mediaExample: {
        quote:
          "部長(ぶちょう)に三時間(さんじかん)も残業(ざんぎょう)させられた。\n(I was made to do three hours of overtime by the section manager.)",
        source:
          "Typical office seinen (Salary-man workplace complaint, recurring construction in Shinya! Izakaya and similar slice-of-life manga). The causative-passive form させられた is the character's way of expressing forced, unwanted action — the grammar does the emotional heavy lifting.",
      },
    },

    // -------------------------------------------------------------------------
    // Step 2: Concept
    // -------------------------------------------------------------------------
    {
      type: "concept",
      explanation:
        "The causative verb expresses two closely related ideas: MAKING someone do something (coercion) and LETTING someone do something (permission). The same conjugation covers both, so context and particles are what distinguish them.\n\n" +
        "CONJUGATION RULES — all causative verbs become る-verbs after conjugating:\n\n" +
        "Group 2 (る-verbs / ichidan): drop る, add させる\n  食(た)べる → 食(た)べさせる\n  起(お)きる → 起(お)きさせる\n\n" +
        "Group 1 (う-verbs / godan): apply the same あ-row shift as the negative (ない form) but attach せる instead of ない:\n  書(か)く → 書(か)か + せる = 書(か)かせる\n  飲(の)む → 飲(の)ま + せる = 飲(の)ませる\n  買(か)う → 買(か)わ + せる = 買(か)わせる  (う → わ, same trap as ない)\n  話(はな)す → 話(はな)さ + せる = 話(はな)させる\n\n" +
        "Irregular verbs:\n  する → させる\n  来(く)る → 来(こ)させる\n\n" +
        "MAKE vs LET — the particle pattern is the main signal:\n\n" +
        "When the person being acted upon can replace に with を, the reading often shifts toward coercion (they are being treated more like a direct object of the forcing). When に is used, both readings are possible. In practice:\n  • 子供(こども)に野菜(やさい)を食(た)べさせる — parent makes/lets child eat vegetables (に marks child; context determines make vs let)\n  • させてあげる / させてくれる — almost always means LET (the giving/receiving verb signals benefaction)\n  • させてください — politely asking to be LET to do something (request for permission)\n\n" +
        "CAUSATIVE-PASSIVE ('was made to do against one's will'):\n\n" +
        "Stack causative then passive: causative form (a る-verb) → apply passive (られる).\n  食(た)べさせる → 食(た)べさせられる   (I was made to eat)\n  飲(の)ませる → 飲(の)ませられる       (I was made to drink)\n\n" +
        "CONTRACTION — for Group 1 verbs only, the long form せられる is commonly contracted to される in natural speech:\n  飲(の)ませられる → 飲(の)まされる\n  待(ま)たせられる → 待(ま)たされる\n  書(か)かせられる → 書(か)かされる\n\n" +
        "Group 2 (る-verbs) CANNOT use this contraction because doing so would create a さされる ending, which is rejected:\n  食(た)べさせられる (correct) — do NOT say 食(た)べさされる\n  着(き)させられる (correct) — do NOT say 着(き)さされる\n\n" +
        "The causative-passive is almost always negative in connotation — it means the speaker was forced into an unwanted action. It is the grammar of complaint.",
      formulaJa:
        "Group2 verb: [stem] + させる\nGroup1 verb: [あ-row] + せる\nIrregular: する → させる / 来(く)る → 来(こ)させる\n\nCausative-passive: [causative form → る-verb] + られる\nGroup1 contraction: [あ-row] + される (= させられる contracted)",
      cureDollyTake:
        "Cure Dolly: Think of させ as an extra 'causing engine' bolted onto the verb. The causative does not change what the verb means — it adds a layer of causation above it. 食べさせる is not a new verb; it is 食べる with a causing-engine attached. The passive then adds another layer: させられる = causing-engine + passive = 'the causing was done to me'. Stack the engines in order (causative first, passive second) and the grammar reads itself.",
    },

    // -------------------------------------------------------------------------
    // Step 3: Examples (10 sentences: 4 make, 3 let, 3 causative-passive)
    // -------------------------------------------------------------------------
    {
      type: "examples",
      items: [
        // --- CAUSATIVE "MAKE" (4 examples) ---
        {
          ja: "先生(せんせい)が学生(がくせい)に宿題(しゅくだい)をたくさんさせた。",
          en: "The teacher made the students do a lot of homework.",
          breakdown:
            "MAKE. させる (する causative). 学生に = the students are marked with に as the ones being made to act. 宿題を = homework is the direct object of the underlying verb する. Classic teacher-student power dynamic.",
        },
        {
          ja: "その部長(ぶちょう)はよく長時間(ちょうじかん)働(はたら)かせる。",
          en: "That section manager often makes people work long hours.",
          breakdown:
            "MAKE. 働かせる = 働く (godan, く→か) + せる. No explicit に-marked person — implied subordinates. The blunt phrasing (no ください, no くれる) signals coercion rather than permission.",
        },
        {
          ja: "お母(かあ)さんは子供(こども)に部屋(へや)を掃除(そうじ)させた。",
          en: "Mum made the child clean the room.",
          breakdown:
            "MAKE. させる (する causative). 子供に marks the one being made to act. 部屋を = the room is the direct object of 掃除する. Parent-child forcing construction.",
        },
        {
          ja: "監督(かんとく)は選手(せんしゅ)たちを三時間(さんじかん)走(はし)らせた。",
          en: "The coach made the players run for three hours.",
          breakdown:
            "MAKE. 走らせる = 走る (godan, る→ら) + せる. Note を instead of に here for the players — when there is no other を-object in the sentence, the person being made to act can take を (especially with intransitive verbs). Coercive reading is reinforced by the harsh training image.",
        },
        // --- CAUSATIVE "LET" (3 examples) ---
        {
          ja: "先生(せんせい)が質問(しつもん)をたくさん聞(き)かせてくれた。",
          en: "The teacher let (us) ask a lot of questions.",
          breakdown:
            "LET. 聞かせる = 聞く (godan, く→か) + せる. The addition of てくれた is the signal: giving verbs (くれる, あげる) attached to the causative almost always indicate permission rather than coercion. Without くれた this sentence could mean 'made us listen to many questions'.",
        },
        {
          ja: "今日(きょう)は仕事(しごと)を休(やす)ませてください。",
          en: "Please let me take today off from work.",
          breakdown:
            "LET. 休ませてください = 休む (godan, む→ま) + せて + ください. The させてください pattern is a polite request for permission — extremely common in business Japanese. Literally 'please grant the causing of me resting'.",
        },
        {
          ja: "子供(こども)に好(す)きなものを食(た)べさせてあげた。",
          en: "I let the child eat what they liked.",
          breakdown:
            "LET. 食べさせる = 食べる (ichidan, drop る) + させる. てあげた shows the speaker is giving a benefit to the child — permission reading is locked in. Contrast with 食べさせた alone, which would likely read as 'made the child eat it'.",
        },
        // --- CAUSATIVE-PASSIVE (3 examples) ---
        {
          ja: "母(はは)に毎日(まいにち)野菜(やさい)を食(た)べさせられた。",
          en: "I was made to eat vegetables every day by my mum.",
          breakdown:
            "CAUSATIVE-PASSIVE. 食べさせられる = 食べる (ichidan) → 食べさせる (causative) → 食べさせられる (passive). Group 2 verb: no contraction is possible. 母に = agent of the forcing. Strong nuance of unwillingness — classic childhood complaint construction.",
        },
        {
          ja: "上司(じょうし)に飲(の)み会(かい)で一気飲(いっきの)みさせられた。",
          en: "I was made to drink in one gulp at the work drinking party by my boss.",
          breakdown:
            "CAUSATIVE-PASSIVE with contraction. 飲まされた = 飲む (godan, む→ま) + せる → 飲ませる → contracted passive 飲まされる. Godan contraction: 飲ませられる → 飲まされる. This is the sentence you hear in Japanese workplace complaints. Heavy negative connotation.",
        },
        {
          ja: "あいつに二時間(にじかん)も待(ま)たされた。",
          en: "I was made to wait a whole two hours by that guy.",
          breakdown:
            "CAUSATIVE-PASSIVE (contracted). 待たされた = 待つ (godan, つ→た) + せる → 待たせる → 待たされる (contraction of 待たせられる). も amplifies the resentment: 'as much as two hours'. あいつ is blunt/derogatory — matches the angry tone. Tae Kim §152 example.",
        },
      ],
    },

    // -------------------------------------------------------------------------
    // Step 4: Drill (10 items: conjugation + meaning disambiguation)
    // -------------------------------------------------------------------------
    {
      type: "drill",
      items: [
        // Conjugation drills
        {
          type: "cloze",
          sentence: "食(た)べる → 食(た)べ{{}}",
          answer: "させる",
          en: "食べる (ichidan) causative form",
          hint: "Group 2 verb: drop る and add させる.",
        },
        {
          type: "cloze",
          sentence: "書(か)く → 書(か){{}}せる",
          answer: "か",
          en: "書く (godan) causative: apply あ-row shift",
          hint: "Godan: shift final kana to あ-row (く→か), then add せる.",
        },
        {
          type: "cloze",
          sentence: "買(か)う → 買(か){{}}せる",
          answer: "わ",
          en: "買う causative — watch the う→わ trap",
          hint: "う-ending godan: う goes to わ (same as the ない-form trap). 買わない → 買わせる.",
        },
        {
          type: "multipleChoice",
          sentence: "する → {{}}",
          en: "Causative of する (irregular)",
          options: ["しせる", "させる", "しさせる", "するせる"],
          correctIndex: 1,
          explanation:
            "する is irregular. Its causative is させる — just させる, not しせる or any other form. 来る → 来させる (こさせる) for reference.",
        },
        // Contraction drills
        {
          type: "cloze",
          sentence: "飲(の)ませられる → 飲(の)ま{{}}",
          answer: "される",
          en: "Contract the Group 1 causative-passive of 飲む",
          hint: "Godan causative-passive contraction: せられる → される. Result: 飲まされる.",
        },
        {
          type: "multipleChoice",
          sentence: "食(た)べさせられる → {{}} (contracted form?)",
          en: "Try to contract the ichidan causative-passive of 食べる",
          options: [
            "食べさされる",
            "食べされる",
            "食べさせられる (no contraction possible)",
            "食べられる",
          ],
          correctIndex: 2,
          explanation:
            "Group 2 (ichidan) verbs CANNOT use the short contraction because it would produce 食べさされる — a さされる ending that is not accepted. Always use the full 食べさせられる for ichidan verbs.",
        },
        // Make vs let disambiguation
        {
          type: "multipleChoice",
          sentence: "子供(こども)に野菜(やさい)を食(た)べさせた。",
          en: "Is this 'made the child eat vegetables' or 'let the child eat vegetables'?",
          options: [
            "Definitely 'let' — there is no coercion signal",
            "Definitely 'made' — no letting verb like くれる or ください",
            "Both are possible; context decides",
            "Neither — this is passive voice",
          ],
          correctIndex: 2,
          explanation:
            "Without a giving verb (くれる, あげる) or a request marker (ください), the plain causative form is ambiguous. Both 'made' and 'let' are grammatically valid readings. A strict parent scenario = made; a lenient parent scenario = let. This ambiguity is a core feature, not a bug.",
        },
        {
          type: "multipleChoice",
          sentence: "子供(こども)に好(す)きなものを食(た)べさせてあげた。",
          en: "Is this 'made the child eat' or 'let the child eat'?",
          options: [
            "Made — あげる intensifies the command",
            "Let — てあげた signals the speaker is giving a benefit (permission)",
            "Both are equally likely",
            "Neither — this is a request",
          ],
          correctIndex: 1,
          explanation:
            "てあげた (te-form + あげる = gave the benefit of doing) locks in the LET reading. The speaker is bestowing the permission to eat freely. Tae Kim: causative plus あげる/くれる almost always means permission.",
        },
        {
          type: "cloze",
          sentence: "説明(せつめい){{}}させてください。",
          answer: "を",
          en: "Please let me explain (this matter).",
          hint: "説明 is a suru-noun. 説明をする = to give an explanation. させてください adds 'please let me'. The を belongs to 説明する, not to させる.",
          acceptableAnswers: [""],
        },
        {
          type: "multipleChoice",
          sentence: "上司(じょうし)に三時間(さんじかん)残業(ざんぎょう){{}}。",
          en: "I was made to do three hours of overtime by my boss. (Pick the causative-passive ending.)",
          options: [
            "させた",
            "させられた",
            "させてもらった",
            "させてあげた",
          ],
          correctIndex: 1,
          explanation:
            "させられた is the causative-passive past: 'I was caused-to-do' — forced, unwanted. させた would mean 'I made someone do' (wrong subject/direction). させてもらった means 'I received the favour of doing' (positive, not forced). させてあげた means 'I gave the favour of letting someone do'.",
        },
      ],
    },

    // -------------------------------------------------------------------------
    // Step 5: Listening — workplace complaint dialogue
    // -------------------------------------------------------------------------
    {
      type: "listening",
      audioUrl: "",
      transcript:
        "ケン：今日(きょう)も遅(おそ)かったね。何(なに)があったの？\n" +
        "サトシ：また部長(ぶちょう)に残業(ざんぎょう)させられたよ。二時間(にじかん)も。\n" +
        "ケン：えっ、また？\n" +
        "サトシ：それだけじゃない。飲(の)み会(かい)にも来(こ)させられて、上司(じょうし)のくだらない話(はなし)を聞(き)かされた。\n" +
        "ケン：最悪(さいあく)だな。断(ことわ)れなかったの？\n" +
        "サトシ：断(ことわ)れるわけないじゃん。でも、明日(あした)は早(はや)く帰(かえ)らせてもらうつもり。子供(こども)の発表会(はっぴょうかい)があるし。\n" +
        "ケン：がんばれ。もし早退(そうたい)させてくれなかったら、人事(じんじ)に相談(そうだん)したら？",
      comprehensionQuestions: [
        {
          question: "What was Satoshi made to do today? (two things)",
          options: [
            "Work overtime and attend a drinking party",
            "Clean the office and give a presentation",
            "Write a report and drive the boss home",
            "Skip a meeting and work from home",
          ],
          correctIndex: 0,
        },
        {
          question: "What does Satoshi plan to do tomorrow?",
          options: [
            "Work late again",
            "Leave early for his child's recital",
            "Complain directly to the section manager",
            "Take the day off",
          ],
          correctIndex: 1,
        },
        {
          question:
            "What construction does Ken use when suggesting the boss 'won't let him leave early'?",
          options: [
            "Causative-passive (させられる)",
            "Causative plus くれない (させてくれなかったら)",
            "Plain negative causative (させない)",
            "Potential form (できない)",
          ],
          correctIndex: 1,
        },
      ],
    },

    // -------------------------------------------------------------------------
    // Step 6: Reading — passage with 3+ causative constructions
    // -------------------------------------------------------------------------
    {
      type: "reading",
      passage:
        "田中(たなか)は新入社員(しんにゅうしゃいん)だ。毎日(まいにち)、上司(じょうし)に早(はや)く来(こ)させられる。会議(かいぎ)の準備(じゅんび)をさせられるし、お茶(ちゃ)も出(だ)させられる。昨日(きのう)の飲(の)み会(かい)では一気(いっき)飲(の)みさせられた。帰(かえ)り道(みち)、田中(たなか)は「いつかは後輩(こうはい)に仕事(しごと)を手伝(てつだ)わせてあげたい」と思(おも)った。ただし、無理(むり)に残業(ざんぎょう)させるのではなく、自分(じぶん)から「やらせてください」と言(い)えるような環境(かんきょう)を作(つく)りたいと思(おも)っている。",
      definitions: {
        "新入社員(しんにゅうしゃいん)": "new employee, new hire",
        "会議(かいぎ)": "meeting",
        "準備(じゅんび)": "preparation",
        "一気飲(いっきの)み": "drinking in one gulp",
        "後輩(こうはい)": "junior colleague, underclassman",
        "手伝(てつだ)う": "to help, to assist",
        "無理(むり)に": "forcibly, against one's will",
        "環境(かんきょう)": "environment, working conditions",
      },
    },

    // -------------------------------------------------------------------------
    // Step 7: Cheatsheet
    // -------------------------------------------------------------------------
    {
      type: "cheatsheet",
      summary:
        "THE CAUSATIVE ENGINE\n\n" +
        "Group 2 (ichidan): [stem] + させる → 食べさせる\n" +
        "Group 1 (godan): [あ-row] + せる → 書かせる, 飲ませる, 買わせる\n" +
        "Irregular: する → させる / 来る → 来させる\n\n" +
        "MAKE vs LET disambiguation quick guide:\n" +
        "  Plain causative (no extra verb) = ambiguous; context decides\n" +
        "  Causative + てくれる / てあげる = LET (benefactive signal)\n" +
        "  Causative + てください = 'please LET me...' (polite permission request)\n" +
        "  No letting verb, authoritative context = MAKE (coercion)\n\n" +
        "CAUSATIVE-PASSIVE (was made to do):\n" +
        "  Group 2: 食べさせる → 食べさせられる (NO contraction for ichidan)\n" +
        "  Group 1: 飲ませる → 飲まされる (contraction: せられる → される)\n" +
        "  Agent of forcing: に (上司に、母に、あいつに)\n\n" +
        "させてください = 'Please let me...' — the most important set phrase.\n" +
        "説明させてください = Please let me explain.\n" +
        "確認(かくにん)させてください = Please let me confirm.",
      anchorSentences: [
        "母(はは)に野菜(やさい)を食(た)べさせられた。",
        "部長(ぶちょう)に三時間(さんじかん)残業(ざんぎょう)させられた。",
        "あいつに二時間(にじかん)も待(ま)たされた。",
        "子供(こども)に好(す)きなものを食(た)べさせてあげた。",
        "説明(せつめい)させてください。",
        "今日(きょう)は仕事(しごと)を休(やす)ませてください。",
      ],
      conjugationTable: [
        ["Verb", "Group", "Causative", "Causative-passive", "Contraction OK?"],
        ["食べる", "2 (ichidan)", "食べさせる", "食べさせられる", "NO — ichidan"],
        ["飲む", "1 (godan)", "飲ませる", "飲まされる", "YES — godan"],
        ["書く", "1 (godan)", "書かせる", "書かされる", "YES — godan"],
        ["待つ", "1 (godan)", "待たせる", "待たされる", "YES — godan"],
        ["買う", "1 (godan)", "買わせる", "買わされる", "YES — godan (う→わ)"],
        ["来る", "irregular", "来させる", "来させられる", "NO — irregular"],
        ["する", "irregular", "させる", "させられる", "NO — irregular"],
      ],
    },

    // -------------------------------------------------------------------------
    // Step 8: Wrap — 7 SRS grammar points
    // -------------------------------------------------------------------------
    {
      type: "wrap",
      srsItems: [
        {
          type: "grammar",
          front: "Causative: Group 2 (ichidan) pattern",
          back: "[stem] + させる. 食べる → 食べさせる. 起きる → 起きさせる. All causative verbs become ichidan (る-verbs) after this step.",
        },
        {
          type: "grammar",
          front: "Causative: Group 1 (godan) pattern",
          back: "Shift final kana to あ-row, add せる. 書く → 書かせる. 飲む → 飲ませる. Watch the う→わ trap: 買う → 買わせる (NOT 買あせる).",
        },
        {
          type: "grammar",
          front: "Causative MAKE vs LET — how to tell them apart",
          back: "Plain causative = ambiguous (context decides). Causative + てくれる/てあげる = LET. Causative + てください = polite request to be let. No benefactive verb in authoritative context = MAKE.",
        },
        {
          type: "grammar",
          front: "させてください pattern",
          back: "Polite request for permission: 'please let me do X'. 説明させてください = Please let me explain. 確認させてください = Please let me confirm. Essential in business and polite contexts.",
        },
        {
          type: "grammar",
          front: "Causative-passive formation (order matters)",
          back: "ALWAYS causative first, then passive. Group 2: 食べる → 食べさせる → 食べさせられる. Group 1: 飲む → 飲ませる → 飲ませられる. Means: 'was made to do (against will)'.",
        },
        {
          type: "grammar",
          front: "Causative-passive contraction — Group 1 only",
          back: "Group 1 (godan) verbs: せられる → される. 飲まされる (not 飲ませられる in speech). 待たされる. 書かされる. Group 2 (ichidan) CANNOT contract: 食べさせられる stays as is. さされる is rejected.",
        },
        {
          type: "grammar",
          front: "Particle pattern in causative sentences",
          back: "Person being made/let to act: に (子供に). If that person takes を instead (intransitive verb, no other を in sentence), often signals coercion. The thing being acted on: を as usual (野菜を食べさせる). Agent of forcing (in causative-passive): に (母に、上司に).",
        },
      ],
    },
  ],
};
