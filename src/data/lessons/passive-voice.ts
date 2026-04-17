import type { LessonContent } from "@/lib/types";

// Lesson B13: Passive Form (受身)
// Section B (Verb Foundations), JLPT N4
// Adapted from parallel-agent draft to match LessonContent shape.
// Source materials: Tae Kim §150-151.

export const PASSIVE_VOICE: LessonContent = {
  slug: "passive",
  title: "Passive voice (受身): when things happen to you",
  titleJa: "受身形(うけみけい)",
  section: "B",
  jlptLevel: "N4",
  estimatedMin: 18,
  steps: [
    {
      type: "hook",
      whyItMatters:
        "The passive voice is the grammar of victimhood, consequence, and things done against your will. It is how Japanese expresses 'I was attacked', 'he was killed', 'she was betrayed'. Every chapter of seinen manga uses it: battle results, character backstory, crimes, accidents. Japanese also has a form English does not: the SUFFERING PASSIVE, which lets a character express emotional damage even when the action was not done to them directly (a friend showing up uninvited, rain falling on you). This is what separates a mechanical reader from someone who actually feels a scene.",
      mediaExample: {
        quote: "オレは…ガッツに負(ま)けられた。",
        source:
          "Berserk (ベルセルク) Vol. 6, Kentaro Miura — Griffith reflecting on the moment his destiny cracked. 'I... was defeated by Guts.' The verb 負ける in passive form 負けられた carries the full weight of wounded pride. Agent Guts marked with に. Direct passive: Griffith subject, Guts agent.",
      },
    },
    {
      type: "concept",
      explanation:
        "Three layers: conjugation, standard passive, suffering passive.\n\n" +
        "LAYER 1: CONJUGATION.\n" +
        "Group 1 (godan): shift the final syllable to the あ-row and add れる. CRITICAL exception: verbs ending in う shift to わ, not あ. So 買(か)う→買(か)われる. Examples: 殴る→殴られる, 書く→書かれる, 飲む→飲まれる, 話す→話される, 読む→読まれる.\n" +
        "Group 2 (ichidan): drop る, add られる. Examples: 食べる→食べられる, 見る→見られる, 褒(ほ)める→褒められる.\n" +
        "Irregular: する→される. 来(く)る→来(こ)られる.\n" +
        "All passive verbs are Group 2 (ichidan) and conjugate fully: 食べられる / 食べられない / 食べられた.\n\n" +
        "THE られる TRAP: For Group 2 verbs, the passive られる is identical to the potential られる and to the polite/honorific られる. Context decides. If the sentence has an agent marked with に (私は先生に褒められた), it is passive. If it describes ability (この料理が食べられる), it is potential.\n\n" +
        "LAYER 2: STANDARD PASSIVE.\n" +
        "Pattern: [受け手]は/が [エージェント]に [passive verb]. Receiver is grammatical subject; agent is marked with に (occasionally から for verbs of giving information).\n" +
        "私(わたし)は先生(せんせい)に褒められた = I was praised by the teacher.\n" +
        "その建物(たてもの)は100年前(ねんまえ)に建(た)てられた = That building was constructed 100 years ago. (agent omitted)\n\n" +
        "LAYER 3: SUFFERING PASSIVE (迷惑(めいわく)の受身).\n" +
        "Uniquely Japanese. Even intransitive verbs and weather can be passivised to express the speaker's unwanted experience.\n" +
        "雨が降った = It rained. (neutral)\n" +
        "雨に降(ふ)られた = I was rained on / I got caught in the rain. (suffering)\n" +
        "友達に来られて、勉強できなかった = My friend came over [on me] and I couldn't study.\n" +
        "Markers: subject is the inconvenienced person; agent is に; verb is often intransitive but passivised anyway; sentence carries 'this happened to me and it was bad' tone; often paired with consequence clause.",
      formulaJa:
        "Godan: [あ-row] + れる (う→わ+れる exception)\nIchidan: [stem] + られる\nする→される / 来(く)る→来(こ)られる\n\n標準受身: [受け手]は [エージェント]に [受身動詞]\n迷惑受身: [被害者]は [原因]に [受身動詞] (〜て…)",
      cureDollyTake:
        "Cure Dolly: the passive helper れる/られる is the same one used for potential on ichidan verbs. The subject 'receives' the action rather than performing it. For the suffering passive, Japanese treats weather events and other people's behaviour as things that 'come at' you, which is why you can be rained-on or inconvenienced-by-a-friend-coming exactly as you would be stabbed-by-an-enemy. Emotional directedness encoded in grammar.",
    },
    {
      type: "examples",
      items: [
        {
          ja: "私(わたし)は先生(せんせい)に褒(ほ)められた。",
          en: "I was praised by the teacher.",
          breakdown: "Standard passive. Agent = 先生, marked に. 褒める is Group 2: drop る, add られる.",
        },
        {
          ja: "その手紙(てがみ)は昨日(きのう)書(か)かれた。",
          en: "That letter was written yesterday.",
          breakdown: "Agent omitted. Group 1 verb 書く: く→か + れる.",
        },
        {
          ja: "主人公(しゅじんこう)はボスに殺(ころ)されそうになった。",
          en: "The protagonist nearly got killed by the boss.",
          breakdown: "殺す (Group 1, す→さ+れる → 殺される). The ～そうになった adds 'almost happened'. Constant in seinen.",
        },
        {
          ja: "上司(じょうし)に無能(むのう)だと言(い)われた。",
          en: "I was told by my boss that I was incompetent.",
          breakdown: "言う (Group 1, う→わ+れる exception). Quoted content uses と before the passive verb. Brutal workplace passive.",
        },
        {
          ja: "溺(おぼ)れていたとき、見知(みし)らぬ人(ひと)に助(たす)けられた。",
          en: "When I was drowning, I was saved by a stranger.",
          breakdown: "助ける is Group 2: 助けられる. Heroic rescue passive.",
        },
        {
          ja: "傘(かさ)を忘(わす)れて、雨(あめ)に降(ふ)られてしまった。",
          en: "I forgot my umbrella and ended up getting caught in the rain.",
          breakdown: "SUFFERING PASSIVE. 降る is intransitive — rain doesn't 'fall on' you transitively. But 降られた expresses suffering. しまった adds regret/unintended.",
        },
        {
          ja: "試験(しけん)前夜(ぜんや)に友達(ともだち)に来(こ)られて、全然(ぜんぜん)勉強(べんきょう)できなかった。",
          en: "The night before my exam my friend came over (on me) and I couldn't study at all.",
          breakdown: "SUFFERING PASSIVE. 来る irregular passive: 来られる. Friend isn't doing something 'to' the speaker physically, but the speaker frames the visit as unwanted intrusion. Result clause makes the suffering explicit.",
        },
        {
          ja: "赤(あか)ちゃんに夜中(よなか)に泣(な)かれて、一睡(いっすい)もできなかった。",
          en: "The baby cried on me in the middle of the night and I couldn't sleep at all.",
          breakdown: "SUFFERING PASSIVE. 泣く (Group 1, く→か+れる → 泣かれる). Classic exhausted-parent complaint form.",
        },
        {
          ja: "領収書(りょうしゅうしょ)はどうされますか？",
          en: "How would you like to handle the receipt?",
          breakdown: "POLITE PASSIVE (passive used to soften/indirect). する→される in ます form = されます. Common in service industry.",
        },
      ],
    },
    {
      type: "drill",
      items: [
        {
          type: "cloze",
          sentence: "飲(の)む → 受身形(うけみけい): {{}}",
          answer: "飲まれる",
          en: "Passive form of 飲む.",
          acceptableAnswers: ["飲(の)まれる"],
          hint: "Group 1: む is in the む-row. Shift to あ-row (ま) and add れる.",
        },
        {
          type: "cloze",
          sentence: "見(み)る → 受身形(うけみけい): {{}}",
          answer: "見られる",
          en: "Passive form of 見る.",
          acceptableAnswers: ["見(み)られる"],
          hint: "Group 2: drop る, add られる.",
        },
        {
          type: "multipleChoice",
          sentence: "笑(わら)う → 受身形(うけみけい): {{}}",
          en: "What is the passive form of 笑う (to laugh)?",
          options: ["笑あれる", "笑われる", "笑えれる", "笑いられる"],
          correctIndex: 1,
          explanation:
            "Verbs ending in う shift to わ, not あ, before れる. So 笑う → 笑われる. Most common conjugation mistake for Group 1 passive.",
        },
        {
          type: "cloze",
          sentence: "する → 受身形(うけみけい): {{}}",
          answer: "される",
          en: "Passive form of する.",
          hint: "Irregular. Not さられる. Just される.",
        },
        {
          type: "multipleChoice",
          sentence: "私(わたし)は上司(じょうし){{}}叱(しか)られた。",
          en: "I was scolded by my boss.",
          options: ["を", "が", "に", "で"],
          correctIndex: 2,
          explanation:
            "The agent of the passive action is marked with に. Standard pattern: [受け手]は [エージェント]に [受身動詞].",
        },
        {
          type: "multipleChoice",
          sentence: "子供(こども)に泣(な)かれて困(こま)った。{{}}",
          en: "Which type of passive is this?",
          options: [
            "Standard passive — the child was cried at",
            "Suffering passive — the speaker was inconvenienced by the child crying",
            "Polite passive — formal speech",
            "Potential — the child could cry",
          ],
          correctIndex: 1,
          explanation:
            "泣く is intransitive. The child isn't doing something 'to' the speaker directly. Passive is used to express the speaker suffered. 困った confirms the suffering nuance.",
        },
        {
          type: "multipleChoice",
          sentence: "辛(から)いものが食(た)べられる。{{}}",
          en: "Is this passive or potential?",
          options: [
            "Passive — spicy things are eaten",
            "Potential — (I) can eat spicy things",
            "Both readings are equally valid",
            "Suffering passive",
          ],
          correctIndex: 1,
          explanation:
            "No に-agent and no external actor. が marks 辛いもの (potential shifts the object to が). Without a に-agent the passive reading is unlikely.",
        },
        {
          type: "multipleChoice",
          sentence: "財布(さいふ){{}}盗(ぬす)まれて、困(こま)っている。",
          en: "My wallet was stolen and I'm in a real bind.",
          options: ["が", "を", "に", "で"],
          correctIndex: 1,
          explanation:
            "財布を盗まれる is the suffering passive: 'had my wallet stolen (to my detriment)'. を marks the wallet as the object of what was done to the speaker. Pattern [possession]を[passive verb]て is one of the most important for personal loss.",
        },
      ],
    },
    {
      type: "listening",
      audioUrl: "",
      transcript:
        "リョウ：昨日(きのう)、本当(ほんとう)にひどい一日(いちにち)だったよ。\nサキ：え、何(なに)があったの？\nリョウ：まず、電車(でんしゃ)の中(なか)で財布(さいふ)を盗(ぬす)まれて…。\nサキ：えっ、盗(ぬす)まれたの！？\nリョウ：そう。それで交番(こうばん)に行(い)ったら、警官(けいかん)にめちゃくちゃ細(こま)かく調(しら)べられて、二時間(にじかん)も待(ま)たされたんだ。\nサキ：二時間も…。それは大変(たいへん)だったね。\nリョウ：しかも夜(よる)に帰(かえ)ろうとしたら、突然(とつぜん)雨(あめ)に降(ふ)られて、ずぶ濡(ぬ)れになったよ。\nサキ：傘(かさ)は？\nリョウ：財布(さいふ)と一緒(いっしょ)に盗(ぬす)まれたカバンの中(なか)にあったんだよ…。",
      comprehensionQuestions: [
        {
          question: "What happened to Ryou on the train?",
          options: [
            "He lost his umbrella",
            "He was questioned by police",
            "His wallet was stolen",
            "He got caught in the rain",
          ],
          correctIndex: 2,
        },
        {
          question: "What did the police do that added to Ryou's suffering?",
          options: [
            "They ignored him",
            "They investigated him in great detail and made him wait two hours",
            "They arrested him",
            "They made him pay a fine",
          ],
          correctIndex: 1,
        },
        {
          question: "Which sentence contains a suffering passive with an intransitive verb?",
          options: [
            "財布を盗まれて",
            "雨に降られて",
            "細かく調べられて",
            "待たされたんだ",
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "reading",
      passage:
        "以下(いか)は事件(じけん)の報告書(ほうこくしょ)の一部(いちぶ)である。午後(ごご)11時(じ)ごろ、被害者(ひがいしゃ)は路地裏(ろじうら)で2名(めい)の男(おとこ)に囲(かこ)まれた。所持品(しょじひん)を奪(うば)われ、暴行(ぼうこう)を受(う)けたと報告(ほうこく)されている。現場(げんば)に残(のこ)された証拠(しょうこ)はすでに回収(かいしゅう)された。一方(いっぽう)、近所(きんじょ)に住(す)む女性(じょせい)の証言(しょうげん)によると、「大(おお)きな声(こえ)が聞(き)こえたが、怖(こわ)くて外(そと)に出(で)られなかった。後(あと)で警察(けいさつ)に呼(よ)ばれて話(はなし)を聞(き)かれた」とのことだ。容疑者(ようぎしゃ)はまだ特定(とくてい)されていない。捜査(そうさ)は続(つづ)けられている。",
      definitions: {
        "被害者(ひがいしゃ)": "victim",
        "路地裏(ろじうら)": "back alley",
        "囲(かこ)まれた": "was surrounded (passive of 囲む)",
        "所持品(しょじひん)": "personal belongings",
        "奪(うば)われ": "was robbed of (passive of 奪う)",
        "回収(かいしゅう)された": "was collected/recovered (passive)",
        "証言(しょうげん)": "testimony",
        "呼(よ)ばれて": "was called/summoned (passive)",
        "話(はなし)を聞(き)かれた": "was questioned (passive of 聞く)",
        "容疑者(ようぎしゃ)": "suspect",
        "特定(とくてい)されていない": "has not been identified",
        "捜査(そうさ)": "investigation",
      },
    },
    {
      type: "cheatsheet",
      summary:
        "Passive (受身形) expresses things done to the subject. Group 1: あ-row + れる (う→わ+れる exception). Group 2: stem + られる. する→される, 来る→来られる. Four use cases: standard passive with に-agent, suffering passive for unwanted events, polite/indirect passive, agent-free impersonal passive in writing. WATCH OUT: Group 2 passive られる is identical to potential られる — context and に-agent resolve the ambiguity.",
      anchorSentences: [
        "私(わたし)は先生(せんせい)に褒(ほ)められた。 (standard, に-agent)",
        "財布(さいふ)を盗(ぬす)まれた。 (suffering, possession lost)",
        "雨(あめ)に降(ふ)られた。 (suffering, intransitive)",
        "友達(ともだち)に来(こ)られて困(こま)った。 (suffering, inconvenient event)",
        "その建物(たてもの)は江戸時代(えどじだい)に建(た)てられた。 (impersonal, agent omitted)",
      ],
      conjugationTable: [
        ["Verb (dict)", "Group", "Passive form", "Notes"],
        ["書(か)く", "G1", "書かれる", "く→か+れる"],
        ["飲(の)む", "G1", "飲まれる", "む→ま+れる"],
        ["話(はな)す", "G1", "話される", "す→さ+れる"],
        ["買(か)う", "G1", "買われる", "う→わ+れる (exception!)"],
        ["殴(なぐ)る", "G1", "殴られる", "る→ら+れる (godan!)"],
        ["食(た)べる", "G2", "食べられる", "drop る + られる"],
        ["見(み)る", "G2", "見られる", "drop る + られる"],
        ["褒(ほ)める", "G2", "褒められる", "drop る + られる"],
        ["する", "irr", "される", "not さられる"],
        ["来(く)る", "irr", "来(こ)られる", "こ + られる"],
      ],
    },
    {
      type: "wrap",
      srsItems: [
        {
          type: "grammar",
          front: "Group 1 passive conjugation",
          back: "Shift final kana to あ-row, add れる. う→わ+れる exception (買う→買われる).",
        },
        {
          type: "grammar",
          front: "Group 2 passive conjugation",
          back: "Drop る, add られる. (Note: identical to potential form — disambiguate via に-agent.)",
        },
        {
          type: "grammar",
          front: "Standard passive: pattern",
          back: "[受け手]は [エージェント]に [passive verb]. Agent marked with に. Agent can be omitted.",
        },
        {
          type: "grammar",
          front: "Suffering passive (迷惑の受身)",
          back: "Intransitive verb passivised to express unwanted impact on speaker. 雨に降られた, 友達に来られた, 赤ちゃんに泣かれた.",
        },
        {
          type: "grammar",
          front: "られる ambiguity",
          back: "Group 2 passive = potential = polite/honorific. Resolve via に-agent (passive) vs no agent + が-marked object (potential) vs respected subject (honorific).",
        },
        {
          type: "grammar",
          front: "Possession-loss suffering pattern",
          back: "[possession]を[passive verb]て: 財布を盗まれて, 足を踏まれて. Critical for personal loss/violation.",
        },
      ],
    },
  ],
};
