import type { LessonContent } from "@/lib/types";

// Lesson J1: Sonkeigo (and a recognition tour through kenjougo + bikago)
// Section J (Keigo Intro), JLPT N4
// Adapted from parallel-agent draft (lesson covered J1-J3 combined; we register
// it under the J1 sonkeigo slug and the broader content lives inside it).
// Source materials: Tae Kim §153-156.

export const KEIGO_INTRO: LessonContent = {
  slug: "sonkeigo",
  title: "Keigo intro: when Japanese gets formal",
  titleJa: "敬語(けいご)入門(にゅうもん)",
  section: "J",
  jlptLevel: "N4",
  estimatedMin: 16,
  steps: [
    {
      type: "hook",
      whyItMatters:
        "Keigo appears every time a manga character signals social hierarchy: the aide bowing to the boss, the salaryman on the phone to a client, the polite female character whose speech pattern is half her personality. You will not produce keigo in casual conversation, but you will encounter it constantly in reading and watching. Misreading a humble verb as a plain verb, or missing that a character suddenly switched register, means losing the social information the author intended. This lesson is about RECOGNITION first.",
      mediaExample: {
        quote:
          "私(わたし)、霊(れい)幻(げん)新(あら)隆(たか)と申(もう)します。霊的(れいてき)なお悩(なや)みでしたら、何(なん)でもご相談(そうだん)ください。",
        source:
          "Mob Psycho 100 (モブサイコ100) — Reigen's client pitch, around Chapter 1. He uses kenjougo (申します) and bikago (ご相談) to project authority he doesn't have.",
      },
    },
    {
      type: "concept",
      explanation:
        "Keigo is not one thing. It is three systems working together.\n\n" +
        "SONKEIGO (尊敬語) — Respectful language. Used when talking about what OTHER people do. Elevates the subject. Think: 'the honoured person does the honoured action.' If a character does something with いらっしゃる, おっしゃる, or 召(め)し上(あ)がる, those are sonkeigo — the speaker is lifting that character up.\n\n" +
        "KENJOUGO (謙譲語) — Humble language. Used when talking about what YOU (or your in-group) do toward someone above you. Lowers the self to raise the other. If a character says 参(まい)ります or 申(もう)します about their own actions, that is kenjougo — deliberate self-lowering.\n\n" +
        "BIKAGO (美化語) — Beautified language. The お/ご prefix on nouns. Most passive of the three: it does not elevate a person, it simply makes speech feel refined. お茶, お金, ご飯, ご家族 are all bikago.\n\n" +
        "Mental model: sonkeigo goes UP toward others, kenjougo goes DOWN from yourself, bikago polishes the vocabulary around both.\n\n" +
        "CRITICAL for manga readers: (ら)れる is BOTH the passive marker AND a light honorific (sonkeigo). Context separates them. 先生(せんせい)が読(よ)まれた — context tells you whether 'the teacher was read by something' (passive, unlikely) or 'the teacher read (it)' (honorific, far more likely). If the subject is a respected person, it's likely honorific.\n\n" +
        "GENERAL PATTERNS:\n" +
        "• Sonkeigo: お + ます-stem + になる (e.g. お待(ま)ちになる, お読(よ)みになる)\n" +
        "• Sonkeigo light: (ら)れる on a respected subject\n" +
        "• Sonkeigo request: お + ます-stem + ください (お待ちください)\n" +
        "• Kenjougo: お + ます-stem + する/いたす (お持(も)ちする, お答(こた)えいたします)\n" +
        "• Bikago: お + native Japanese noun (お茶, お金) / ご + Sino-Japanese noun (ご飯, ご家族, ご相談)",
      formulaJa:
        "Sonkeigo: お+ stem +になる / 特殊動詞(いらっしゃる, おっしゃる, 召し上がる…)\n" +
        "Kenjougo: お+ stem +する/いたす / 特殊動詞(参る, 申す, 拝見する…)\n" +
        "Bikago: お/ご + 名詞",
      cureDollyTake:
        "Cure Dolly: keigo is not 'extra polite Japanese'. It is a parallel verb system that encodes who is up and who is down in the social hierarchy. When a character switches into keigo, the author is telling you something has shifted — distance has been asserted, status has been recalibrated. Read the register, not just the words.",
    },
    {
      type: "examples",
      items: [
        {
          ja: "社長(しゃちょう)はもうオフィスにいらっしゃいます。",
          en: "The president is already in the office.",
          breakdown:
            "SONKEIGO. いらっしゃる replaces いる (and 行く/来る) when elevating the subject. Never used about yourself.",
        },
        {
          ja: "先生(せんせい)はそれは違(ちが)うとおっしゃいました。",
          en: "The teacher said that it was wrong.",
          breakdown:
            "SONKEIGO. おっしゃる replaces 言う for respected subjects. Special ます-form: おっしゃいました (not おっしゃりました).",
        },
        {
          ja: "お客様(きゃくさま)、もうお食事(しょくじ)は召(め)し上(あ)がりましたか。",
          en: "Honoured guest, have you already had your meal?",
          breakdown:
            "SONKEIGO. 召し上がる replaces 食べる/飲む for respected subjects. Common in restaurant/service. お before 食事 = bikago.",
        },
        {
          ja: "部長(ぶちょう)はすでにご覧(らん)になりましたか。",
          en: "Has the department head already seen it?",
          breakdown:
            "SONKEIGO. ご覧になる is the sonkeigo form of 見る. Sino-Japanese stem takes ご instead of お.",
        },
        {
          ja: "明日(あした)、そちらへ参(まい)ります。",
          en: "I will come there tomorrow.",
          breakdown:
            "KENJOUGO. 参る replaces 行く/来る for your own movement toward someone above you. Self lowered; destination implicitly elevated.",
        },
        {
          ja: "田中(たなか)と申(もう)します。",
          en: "I am called Tanaka.",
          breakdown:
            "KENJOUGO. 申す replaces 言う for your own speech. Standard self-introduction in business and formal contexts. Exactly what Reigen does in the hook.",
        },
        {
          ja: "お荷物(にもつ)はお持(も)ちします。",
          en: "I will carry your luggage.",
          breakdown:
            "KENJOUGO. General pattern: お + ます-stem + する. 持つ → stem 持ち → お持ちする. Lowering self to serve the listener.",
        },
        {
          ja: "ご家族(かぞく)はお元気(げんき)ですか。",
          en: "How is your family doing?",
          breakdown:
            "BIKAGO. ご家族 (Sino-Japanese 家族, takes ご). お元気 (native 元気, takes お). Neither elevates nor lowers — just polishes.",
        },
      ],
    },
    {
      type: "drill",
      items: [
        {
          type: "multipleChoice",
          sentence: "「田中部長(ぶちょう)はもう帰(かえ)られましたか？」 What is 帰られました? {{}}",
          en: "Identify the keigo type.",
          options: [
            "Passive — someone made the manager go home",
            "Sonkeigo (light) — speaker is elevating the manager's action",
            "Kenjougo — speaker is humbly describing own return",
            "Bikago — beautified form of 帰る",
          ],
          correctIndex: 1,
          explanation:
            "(ら)れる on a verb whose subject is respected = light sonkeigo. Passive is unlikely (no agent, no 'made to go home' sense). Speaker is lifting the manager.",
        },
        {
          type: "multipleChoice",
          sentence: "「私(わたし)が拝見(はいけん)いたします」 — which type? {{}}",
          en: "Whose action is this and which keigo type?",
          options: [
            "Sonkeigo — someone else is looking",
            "Bikago — polished vocabulary",
            "Kenjougo — speaker humbly refers to own act of looking",
            "Teineigo only",
          ],
          correctIndex: 2,
          explanation:
            "拝見する is kenjougo for 見る. Speaker is lowering themselves: 'I (humbly) look at it.' Common business expression.",
        },
        {
          type: "multipleChoice",
          sentence: "Butler to villain boss: 「ご命令(めいれい)のとおりに参(まい)りました」. {{}}",
          en: "What does this signal about the dynamic?",
          options: [
            "The butler is the authority — sonkeigo",
            "The butler is subordinate — 参る is kenjougo, lowering himself",
            "Sarcastic, ironic keigo",
            "Neutral — 参る is just polite",
          ],
          correctIndex: 1,
          explanation:
            "参る is kenjougo. Butler uses it for own movement, signalling deference. Combined with ご命令 (bikago), the whole sentence oozes hierarchy.",
        },
        {
          type: "multipleChoice",
          sentence: "「お茶(ちゃ)でも召(め)し上(あ)がってください」. {{}}",
          en: "Who is being invited to drink tea?",
          options: [
            "The speaker themselves",
            "An equal or lower-status person",
            "A respected person — 召し上がる is sonkeigo for 飲む/食べる",
            "No one specific",
          ],
          correctIndex: 2,
          explanation:
            "召し上がる is sonkeigo, used only for someone the speaker respects.",
        },
        {
          type: "multipleChoice",
          sentence:
            "Salaryman on the phone: 「田中は只今(ただいま)外出(がいしゅつ)しております」. What does おります signal? {{}}",
          en: "Identify the function.",
          options: [
            "Sonkeigo — elevating Tanaka",
            "Kenjougo — salaryman lowers his in-group colleague when speaking to outsiders",
            "Bikago — polishing the noun",
            "Teineigo — just polite いる",
          ],
          correctIndex: 1,
          explanation:
            "おる is kenjougo for いる. When referring to a colleague to an outsider (client), use kenjougo for the in-group — even if the colleague outranks you internally. In-group is lowered as a unit. Surprising-but-essential rule.",
        },
        {
          type: "multipleChoice",
          sentence: "Which uses お/ご correctly as bikago? {{}}",
          en: "Pick the correct one.",
          options: ["おcomputer (コンピューター)", "ご水(みず)", "お手紙(てがみ)", "おAmazon"],
          correctIndex: 2,
          explanation:
            "お手紙 is correct: 手紙 is native Japanese (訓読み) so it takes お. 水 takes お (お水), not ご. お/ご do not attach to foreign loanwords.",
        },
      ],
    },
    {
      type: "listening",
      audioUrl: "",
      transcript:
        "山田(やまだ)：失礼(しつれい)いたします。山田(やまだ)と申(もう)します。本日(ほんじつ)はお時間(じかん)をいただきありがとうございます。\n佐藤(さとう)：山田様(さま)、いらっしゃいませ。どうぞこちらへ。お荷物(にもつ)はお持(も)ちします。\n山田(やまだ)：ありがとうございます。部長(ぶちょう)はいらっしゃいますか。\n佐藤(さとう)：はい、部長(ぶちょう)はただ今(いま)参(まい)ります。少々(しょうしょう)お待(ま)ちください。お茶(ちゃ)でも召(め)し上(あ)がりますか？\n山田(やまだ)：ありがとうございます。では、いただきます。\n部長(ぶちょう)：山田様(さま)、お待(ま)たせいたしました。本日(ほんじつ)はわざわざお越(こ)しいただきまして、誠(まこと)にありがとうございます。",
      comprehensionQuestions: [
        {
          question: "Which keigo type does Yamada use when introducing himself?",
          options: [
            "Sonkeigo — he elevates himself",
            "Kenjougo — he humbly states his name with 申します",
            "Bikago — he uses ご before his name",
            "Teineigo only",
          ],
          correctIndex: 1,
        },
        {
          question:
            "When Sato says 「部長はただ今参ります」, why does he use the humble 参る for the manager?",
          options: [
            "Sato is being disrespectful",
            "The manager asked Sato to use humble forms",
            "In-group members are lowered when speaking to outsiders, even if they outrank you internally",
            "Sato confused sonkeigo and kenjougo",
          ],
          correctIndex: 2,
        },
        {
          question: "What does Yamada's overall keigo register tell you about his role?",
          options: [
            "He is the boss of the company being visited",
            "He is a client/external party using polite kenjougo and bikago to position himself respectfully",
            "He is a new employee on his first day",
            "He is being sarcastic",
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      type: "reading",
      passage:
        "「鈴木(すずき)と申(もう)します。社長(しゃちょう)の秘書(ひしょ)を務(つと)めております。本日(ほんじつ)は社長(しゃちょう)がいらっしゃらないため、私(わたし)がご対応(たいおう)させていただきます。」記者(きしゃ)は少(すこ)し驚(おどろ)いた様子(ようす)だったが、鈴木(すずき)はにこやかに続(つづ)けた。「先日(せんじつ)ご送付(そうふ)いただいた質問状(しつもんじょう)は拝見(はいけん)いたしました。社長(しゃちょう)もご覧(らん)になり、喜(よろこ)んでおっしゃっていました。さっそくお答(こた)えしたいと思(おも)います。」",
      definitions: {
        "秘書(ひしょ)": "secretary, personal aide",
        "務めております": "serving as (humble ongoing state)",
        "ご対応(たいおう)": "handling the matter (bikago + Sino-Japanese)",
        "ご送付(そうふ)いただいた": "the matter of you kindly sending (humble receipt)",
        "拝見(はいけん)いたしました": "I humbly looked at it (double humble: 拝見 + いたす)",
        "ご覧(らん)になり": "looked at (sonkeigo for 見る — the CEO saw it)",
        "おっしゃっていました": "was saying (sonkeigo for 言う — the CEO said it)",
        "お答(こた)えしたい": "I humbly want to answer (kenjougo: お + stem + する)",
      },
    },
    {
      type: "cheatsheet",
      summary:
        "Keigo has three components. SONKEIGO elevates others' actions. KENJOUGO lowers your own actions. BIKAGO polishes nouns with お/ご. For recognition: いらっしゃる/おっしゃる/召し上がる/ご覧になる on someone respected = sonkeigo. 参る/申す/拝見する/いただく/おる on the speaker = kenjougo. お/ご before a noun = bikago. The CEO goes UP, the speaker goes DOWN, the register gap signals social structure.",
      anchorSentences: [
        "社長(しゃちょう)はもういらっしゃいます。 (sonkeigo)",
        "田中(たなか)と申(もう)します。 (kenjougo, self-intro)",
        "お荷物(にもつ)はお持(も)ちします。 (kenjougo, お+stem+する)",
        "ご家族(かぞく)はお元気(げんき)ですか。 (bikago)",
        "先生(せんせい)が話(はな)される。 (light sonkeigo, (ら)れる)",
      ],
      conjugationTable: [
        ["Plain", "Sonkeigo (others)", "Kenjougo (self)"],
        ["いる", "いらっしゃる", "おる"],
        ["行く / 来る", "いらっしゃる / おいでになる", "参(まい)る"],
        ["する", "なさる", "致(いた)す"],
        ["言う", "おっしゃる", "申(もう)す"],
        ["食べる / 飲む", "召(め)し上(あ)がる", "いただく"],
        ["見る", "ご覧(らん)になる", "拝見(はいけん)する"],
        ["知っている", "ご存知(ぞんじ)です", "存(ぞん)じる"],
        ["もらう", "—", "いただく"],
        ["聞く / 訪ねる", "—", "伺(うかが)う"],
      ],
    },
    {
      type: "wrap",
      srsItems: [
        {
          type: "grammar",
          front: "Sonkeigo special verbs",
          back: "いらっしゃる / おっしゃる / 召し上がる / ご覧になる / なさる. Subject is respected; action is elevated.",
        },
        {
          type: "grammar",
          front: "Kenjougo special verbs",
          back: "参る / 申す / 拝見する / いただく / おる / いたす / 存じる. Speaker or in-group describes own action; self is lowered.",
        },
        {
          type: "grammar",
          front: "Sonkeigo general pattern",
          back: "お + ます-stem + になる. お待ちになる, お読みになる. Respected subject performing action.",
        },
        {
          type: "grammar",
          front: "Kenjougo general pattern",
          back: "お + ます-stem + する/いたす. お持ちします, お答えいたします. Speaker humbly performing action for respected person.",
        },
        {
          type: "grammar",
          front: "Bikago: お + native, ご + Sino-Japanese",
          back: "お茶, お金 (native readings) / ご飯, ご家族, ご相談 (Sino-Japanese readings). No person elevated; vocabulary polished.",
        },
        {
          type: "grammar",
          front: "(ら)れる as light sonkeigo",
          back: "On a respected subject, 帰られる = sonkeigo, not passive. Resolve via subject's social standing.",
        },
        {
          type: "grammar",
          front: "In-group rule",
          back: "When speaking to outsiders, lower your own colleagues with kenjougo even if they outrank you internally. 部長は参ります (to client).",
        },
      ],
    },
  ],
};
