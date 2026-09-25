import type { LessonContent } from "@/lib/types";

// Sensei handout, 25 September 2026: one handout = one lesson.
//
// Three things on the sheet:
//   1. Sensei's vowel rule for る-verbs: the sound before る tells you the group.
//      aる / uる / oる = always u-verb. eる = ru-verb. iる = ru-verb about 75%
//      of the time, u-verb about 25%. (eる has a handful of u-verb exceptions
//      too, 帰る above all, so they are flagged rather than hidden.)
//   2. The te-form conjugation, which the group decides.
//   3. The six negatives: won't / didn't / haven't (ever) / haven't (yet) /
//      hadn't (ever) / hadn't (yet), plus た-form + ことがある for "I have done".
// The cheatsheets are the point; the cards and drill exist so the sheet sticks.

export const TE_FORM_NEGATIVES: LessonContent = {
  slug: "te-form-negatives",
  title: "Sensei sheet: verb groups, te-form + the six negatives",
  titleJa: "動詞(どうし)のグループ・て形(けい)・否定(ひてい)の六(むっ)つ",
  section: "B",
  jlptLevel: "N4",
  estimatedMin: 20,
  steps: [
    {
      type: "hook",
      whyItMatters:
        "This week's sheet is the plumbing under every sentence you say.\n\nFirst, sensei's vowel trick: look at the sound just before る and you know which group a verb is in, which tells you how to conjugate it. No more guessing whether it is 帰(かえ)て or 帰って.\n\nSecond, the te-form, which the group decides. It is the form behind ている, てください, てもいい, てない and half of what you will learn next.\n\nThird, six ways to say NO: won't, didn't, haven't ever, haven't yet, hadn't ever, hadn't yet. English packs \"haven't done\" into one phrase; Japanese splits it into two completely different grammars depending on whether you mean ever (experience) or yet (not finished). Mix them up and you tell sensei you have never in your life eaten breakfast.\n\nThree cheatsheets at the end, one per part of the sheet. They are the thing to keep open during the call.",
      mediaExample: {
        quote: "まだ食(た)べてない。",
        source: "\"Haven't eaten yet\": said in every anime family kitchen, and the てない half of this week's sheet",
      },
    },
    {
      type: "concept",
      explanation:
        "Sensei's rule: find the vowel sound just BEFORE る.\n\naる → u-verb. Always. 分(わ)かる wakaru, 終(お)わる owaru, ある aru.\nuる → u-verb. Always. 作(つく)る tsukuru, 降(ふ)る furu, 売(う)る uru.\noる → u-verb. Always. 乗(の)る noru, 取(と)る toru, 送(おく)る okuru.\neる → ru-verb. 食(た)べる taberu, 寝(ね)る neru, 出(で)る deru.\niる → ru-verb about 75%, u-verb about 25%. 見(み)る miru and 起(お)きる okiru are ru-verbs; 知(し)る shiru and 入(はい)る hairu are u-verbs.\n\nSo three of the five vowels are settled for free. Only iる and eる need a second look.\n\nThe iる u-verbs worth knowing by heart: 知る (know), 入る (enter), 走(はし)る (run), 切(き)る (cut), 要(い)る (need).\nThe eる exceptions (sensei's sheet says ru, and it is right almost every time, but these break it): 帰(かえ)る (go home), 喋(しゃべ)る (chat), 滑(すべ)る (slip), 減(へ)る (decrease), 蹴(け)る (kick). 帰る is the one you will actually meet every day.\n\nThe two true irregulars sit outside the rule: する and 来(く)る.",
      formulaJa: "aる・uる・oる → u ／ eる → ru ／ iる → ru 75%・u 25%",
    },
    {
      type: "concept",
      explanation:
        "Once you know the group, the te-form is mechanical.\n\nru-verbs: drop る, add て. 食べる → 食べて, 見る → 見て, 起きる → 起きて.\n\nu-verbs: it depends on the last kana.\nう・つ・る → って. 会(あ)う → 会って, 待(ま)つ → 待って, 帰る → 帰って.\nむ・ぶ・ぬ → んで. 読(よ)む → 読んで, 遊(あそ)ぶ → 遊んで, 死(し)ぬ → 死んで.\nく → いて. 書(か)く → 書いて, 聞(き)く → 聞いて.\nぐ → いで. 泳(およ)ぐ → 泳いで, 急(いそ)ぐ → 急いで.\nす → して. 話(はな)す → 話して, 出(だ)す → 出して.\n\nThe one odd u-verb: 行(い)く → 行って (not 行いて).\nIrregulars: する → して, 来る → 来(き)て.\n\nThis is where the group matters. 帰る looks like a ru-verb, but it is a u-verb, so it is 帰って, never 帰て. 切る (cut, u-verb) is 切って; 着(き)る (wear, ru-verb) is 着て. Same sound, different group, different te-form.\n\nThe た-form follows exactly the same pattern with た/だ in place of て/で: 帰った, 読んだ, 泳いだ. You need it for ことがある below.",
      formulaJa: "う・つ・る→って ／ む・ぶ・ぬ→んで ／ く→いて ／ ぐ→いで ／ す→して ／ ru: る→て",
    },
    {
      type: "concept",
      explanation:
        "The six negatives, polite ／ casual.\n\n1. Won't do / don't do: 食べません ／ 食べない. Present and future share one form.\n2. Didn't do: 食べませんでした ／ 食べなかった. A finished past event.\n3. Haven't done (EVER, experience): 食べたことがありません ／ 食べたことがない. \"I have never eaten it.\"\n4. Haven't done (YET, not completed): 食べていません ／ 食べてない. \"I haven't eaten yet.\" Usually with まだ.\n5. Hadn't done (ever, at that point): 食べたことがありませんでした ／ 食べたことがなかった. \"Before that trip, I had never eaten it.\"\n6. Hadn't done (yet, at that point): 食べていませんでした ／ 食べてなかった. \"When she called, I still hadn't eaten.\"\n\nAnd the positive of number 3, which is the last line on the sheet: plain past (た-form) + ことがある = I have done it (at least once). 日本(にほん)に行(い)ったことがある = I have been to Japan.\n\nThe split to burn in: ことがない is about your LIFE (ever), てない is about NOW (yet). 納豆(なっとう)を食べたことがない = I have never tried natto. 朝(あさ)ごはんをまだ食べてない = I haven't had breakfast yet (this morning).\n\nThe Genki trap, again: もう食べましたか → まだ食べていません. Never 食べませんでした, which means you had your chance and skipped it.\n\nてない is the casual squash of ていない. Polite speech keeps the い: 食べていません.",
      formulaJa: "ない ／ なかった ／ Vたことがない ／ Vてない ／ Vたことがなかった ／ Vてなかった",
    },
    {
      type: "flashcards",
      title: "Which group? Which te-form?",
      subtitle: "Verb → group + te-form (say both before you flip)",
      items: [
        { front: "分(わ)かる", back: "u-verb (aる) → 分かって", romaji: "wakaru → wakatte", note: "aる is always a u-verb." },
        { front: "作(つく)る", back: "u-verb (uる) → 作って", romaji: "tsukuru → tsukutte", note: "uる is always a u-verb." },
        { front: "乗(の)る", back: "u-verb (oる) → 乗って", romaji: "noru → notte", note: "oる is always a u-verb. Takes に: 電車(でんしゃ)に乗る." },
        { front: "食(た)べる", back: "ru-verb (eる) → 食べて", romaji: "taberu → tabete", note: "eる, the normal case." },
        { front: "帰(かえ)る", back: "u-verb (eる EXCEPTION) → 帰って", romaji: "kaeru → kaette", note: "The big one. Never 帰て." },
        { front: "見(み)る", back: "ru-verb (iる) → 見て", romaji: "miru → mite", note: "iる, the 75% side." },
        { front: "起(お)きる", back: "ru-verb (iる) → 起きて", romaji: "okiru → okite" },
        { front: "知(し)る", back: "u-verb (iる, the 25%) → 知って", romaji: "shiru → shitte", note: "知っている = I know. 知らない = I don't know." },
        { front: "入(はい)る", back: "u-verb (iる, the 25%) → 入って", romaji: "hairu → haitte", note: "The vowel before る is the い of はい." },
        { front: "走(はし)る", back: "u-verb (iる, the 25%) → 走って", romaji: "hashiru → hashitte" },
        { front: "切(き)る", back: "u-verb (iる, the 25%) → 切って", romaji: "kiru → kitte", note: "Twin trap: 着(き)る (wear) is a ru-verb → 着て." },
        { front: "着(き)る", back: "ru-verb (iる) → 着て", romaji: "kiru → kite", note: "Twin trap: 切る (cut) → 切って." },
        { front: "読(よ)む", back: "u-verb → 読んで", romaji: "yomu → yonde", note: "む・ぶ・ぬ → んで." },
        { front: "遊(あそ)ぶ", back: "u-verb → 遊んで", romaji: "asobu → asonde" },
        { front: "書(か)く", back: "u-verb → 書いて", romaji: "kaku → kaite", note: "く → いて." },
        { front: "泳(およ)ぐ", back: "u-verb → 泳いで", romaji: "oyogu → oyoide", note: "ぐ → いで. Past: 泳いだ (remember 泳いだけど)." },
        { front: "話(はな)す", back: "u-verb → 話して", romaji: "hanasu → hanashite", note: "す → して." },
        { front: "待(ま)つ", back: "u-verb → 待って", romaji: "matsu → matte", note: "う・つ・る → って." },
        { front: "行(い)く", back: "u-verb, IRREGULAR te-form → 行って", romaji: "iku → itte", note: "The only く verb that does not go to いて." },
        { front: "来(く)る", back: "irregular → 来(き)て", romaji: "kuru → kite", note: "The reading changes: く → き." },
      ],
    },
    {
      type: "flashcards",
      title: "Say it in Japanese",
      subtitle: "English → Japanese, the six negatives (polite first, casual in the note)",
      items: [
        {
          front: "I won't drink alcohol tonight.",
          back: "今夜(こんや)はお酒(さけ)を飲(の)みません。",
          romaji: "Kon'ya wa osake o nomimasen.",
          note: "1. Won't do. Casual: 今夜はお酒を飲まない。",
        },
        {
          front: "I didn't practise bass yesterday.",
          back: "昨日(きのう)はベースを練習(れんしゅう)しませんでした。",
          romaji: "Kinō wa bēsu o renshū shimasen deshita.",
          note: "2. Didn't do. Casual: 昨日はベースを練習しなかった。",
        },
        {
          front: "I have never eaten natto.",
          back: "納豆(なっとう)を食(た)べたことがありません。",
          romaji: "Nattō o tabeta koto ga arimasen.",
          note: "3. Haven't ever (experience). Casual: 納豆を食べたことがない。",
        },
        {
          front: "I haven't eaten breakfast yet.",
          back: "まだ朝(あさ)ごはんを食(た)べていません。",
          romaji: "Mada asagohan o tabete imasen.",
          note: "4. Haven't yet (not completed). Casual: まだ朝ごはんを食べてない。",
        },
        {
          front: "Before that trip, I had never been to Japan.",
          back: "その旅行(りょこう)の前(まえ)は、日本(にほん)に行(い)ったことがありませんでした。",
          romaji: "Sono ryokō no mae wa, nihon ni itta koto ga arimasen deshita.",
          note: "5. Hadn't ever, at that point. Casual: 日本に行ったことがなかった。",
        },
        {
          front: "When sensei called, I still hadn't done my homework.",
          back: "先生(せんせい)から電話(でんわ)が来(き)たとき、まだ宿題(しゅくだい)をしていませんでした。",
          romaji: "Sensei kara denwa ga kita toki, mada shukudai o shite imasen deshita.",
          note: "6. Hadn't yet, at that point. Casual: まだ宿題をしてなかった。",
        },
        {
          front: "I have been to Japan.",
          back: "日本(にほん)に行(い)ったことがあります。",
          romaji: "Nihon ni itta koto ga arimasu.",
          note: "The positive: た-form + ことがある. Casual: 日本に行ったことがある。",
        },
        {
          front: "I have read Yotsubato in Japanese.",
          back: "よつばとを日本語(にほんご)で読(よ)んだことがあります。",
          romaji: "Yotsubato o nihongo de yonda koto ga arimasu.",
          note: "読む → 読んだ (む → んだ), then ことがある.",
        },
        {
          front: "I have never swum in the sea in Japan.",
          back: "日本(にほん)の海(うみ)で泳(およ)いだことがありません。",
          romaji: "Nihon no umi de oyoida koto ga arimasen.",
          note: "泳ぐ → 泳いだ. Ever = ことがない, not てない.",
        },
        {
          front: "I haven't memorised the 25 verbs yet.",
          back: "まだ二十五(にじゅうご)個(こ)の動詞(どうし)を覚(おぼ)えていません。",
          romaji: "Mada nijūgo-ko no dōshi o oboete imasen.",
          note: "Yet = てない. 覚える is eる, a ru-verb: 覚えて.",
        },
        {
          front: "Have you eaten already? No, not yet.",
          back: "もう食(た)べましたか。いいえ、まだ食(た)べていません。",
          romaji: "Mō tabemashita ka. Iie, mada tabete imasen.",
          note: "The Genki trap: never answer with 食べませんでした.",
        },
        {
          front: "I didn't go home last night.",
          back: "昨日(きのう)の夜(よる)は家(いえ)に帰(かえ)りませんでした。",
          romaji: "Kinō no yoru wa ie ni kaerimasen deshita.",
          note: "帰る is a u-verb, so 帰りません / 帰らなかった (not 帰なかった).",
        },
      ],
    },
    {
      type: "drill",
      items: [
        {
          type: "multipleChoice",
          sentence: "帰(かえ)る → te-form?",
          en: "go home",
          options: ["帰(かえ)て", "帰(かえ)って", "帰(かえ)んで", "帰(かえ)いて"],
          correctIndex: 1,
          explanation:
            "帰る is eる, which sensei's sheet says is a ru-verb, but it is the big exception: a u-verb. る → って, so 帰って.",
        },
        {
          type: "multipleChoice",
          sentence: "分(わ)かる: which group?",
          en: "understand",
          options: ["ru-verb", "u-verb", "irregular"],
          correctIndex: 1,
          explanation: "The vowel before る is a (wa-ka-ru). aる is always a u-verb: 分かって, 分からない.",
        },
        {
          type: "multipleChoice",
          sentence: "起(お)きる: which group?",
          en: "wake up",
          options: ["ru-verb", "u-verb", "irregular"],
          correctIndex: 0,
          explanation: "iる, and this one sits on the 75% side: ru-verb. 起きて, 起きない.",
        },
        {
          type: "multipleChoice",
          sentence: "知(し)る → te-form?",
          en: "know",
          options: ["知(し)て", "知(し)って", "知(し)いて", "知(し)んで"],
          correctIndex: 1,
          explanation: "iる, but one of the 25%: a u-verb. る → って: 知って, as in 知っている.",
        },
        {
          type: "cloze",
          sentence: "本(ほん)を{{}}から、寝(ね)ました。",
          answer: "読んで",
          en: "I read a book, then went to sleep. (読む)",
          acceptableAnswers: ["読んで", "よんで"],
          hint: "む・ぶ・ぬ → ?",
        },
        {
          type: "cloze",
          sentence: "ちょっと{{}}ください。",
          answer: "待って",
          en: "Please wait a moment. (待つ)",
          acceptableAnswers: ["待って", "まって"],
          hint: "う・つ・る → ?",
        },
        {
          type: "cloze",
          sentence: "プールで{{}}、疲(つか)れました。",
          answer: "泳いで",
          en: "I swam in the pool and got tired. (泳ぐ)",
          acceptableAnswers: ["泳いで", "およいで"],
          hint: "ぐ → ?",
        },
        {
          type: "cloze",
          sentence: "友達(ともだち)が家(いえ)に{{}}、一緒(いっしょ)に料理(りょうり)しました。",
          answer: "来て",
          en: "A friend came to my house and we cooked together. (来る)",
          acceptableAnswers: ["来て", "きて"],
          hint: "Irregular: the reading changes.",
        },
        {
          type: "multipleChoice",
          sentence: "納豆(なっとう)を食(た)べ＿＿。",
          en: "I have never eaten natto.",
          options: ["ませんでした", "ていません", "たことがありません", "ません"],
          correctIndex: 2,
          explanation: "\"Never\" = experience, your whole life: た-form + ことがない / ありません.",
        },
        {
          type: "multipleChoice",
          sentence: "まだ朝(あさ)ごはんを食(た)べ＿＿。",
          en: "I haven't eaten breakfast yet.",
          options: ["たことがありません", "ていません", "ませんでした", "なかった"],
          correctIndex: 1,
          explanation: "\"Yet\" = not completed: te-form + いません (casual てない). ことがない would mean you have never had breakfast in your life.",
        },
        {
          type: "multipleChoice",
          sentence: "もう宿題(しゅくだい)をしましたか。いいえ、まだ＿＿。",
          en: "Have you done the homework already? No, not yet.",
          options: ["しませんでした", "していません", "したことがありません", "しません"],
          correctIndex: 1,
          explanation: "The Genki trap. もう〜ましたか gets まだ〜ていません. しませんでした means you had the chance and chose not to.",
        },
        {
          type: "multipleChoice",
          sentence: "その時(とき)まで、お寿司(すし)を食(た)べた＿＿。",
          en: "Until then, I had never eaten sushi.",
          options: ["ことがない", "ことがなかった", "てなかった", "なかった"],
          correctIndex: 1,
          explanation: "Hadn't ever, looking back from a point in the past: ことがなかった (polite ことがありませんでした).",
        },
        {
          type: "multipleChoice",
          sentence: "電話(でんわ)が来(き)たとき、まだ起(お)き＿＿。",
          en: "When the call came, I still hadn't got up.",
          options: ["たことがなかった", "てなかった", "ない", "なかった"],
          correctIndex: 1,
          explanation: "Hadn't yet, at that moment: てなかった (polite ていませんでした). 起きる is a ru-verb, so 起きて.",
        },
        {
          type: "cloze",
          sentence: "日本(にほん)に{{}}ことがあります。",
          answer: "行った",
          en: "I have been to Japan. (行く)",
          acceptableAnswers: ["行った", "いった"],
          hint: "Plain past, and 行く is the odd one out.",
        },
      ],
    },
    {
      type: "cheatsheet",
      summary:
        "Cheatsheet 1 of 3: sensei's vowel rule. Look at the sound just before る. aる, uる and oる are always u-verbs. eる is a ru-verb (watch 帰る). iる is a ru-verb about 75% of the time; learn the u-verb 25% by heart.",
      anchorTitle: "One verb per vowel",
      anchorSentences: [
        "分(わ)かる → 分かって (aる, u-verb)",
        "作(つく)る → 作って (uる, u-verb)",
        "乗(の)る → 乗って (oる, u-verb)",
        "食(た)べる → 食べて (eる, ru-verb)",
        "見(み)る → 見て (iる, ru-verb) ／ 知(し)る → 知って (iる, u-verb)",
      ],
      conjugationTable: [
        ["Before る", "Group", "Examples", "Romaji"],
        ["aる", "u-verb, always", "分(わ)かる・終(お)わる・ある・始(はじ)まる", "wakaru / owaru / aru / hajimaru"],
        ["uる", "u-verb, always", "作(つく)る・降(ふ)る・売(う)る・振(ふ)る", "tsukuru / furu / uru / furu"],
        ["oる", "u-verb, always", "乗(の)る・取(と)る・送(おく)る・怒(おこ)る", "noru / toru / okuru / okoru"],
        ["eる", "ru-verb", "食(た)べる・寝(ね)る・出(で)る・覚(おぼ)える", "taberu / neru / deru / oboeru"],
        ["eる exceptions", "u-verb", "帰(かえ)る・喋(しゃべ)る・滑(すべ)る・減(へ)る・蹴(け)る", "kaeru / shaberu / suberu / heru / keru"],
        ["iる (75%)", "ru-verb", "見(み)る・起(お)きる・着(き)る・借(か)りる・できる", "miru / okiru / kiru / kariru / dekiru"],
        ["iる (25%)", "u-verb", "知(し)る・入(はい)る・走(はし)る・切(き)る・要(い)る", "shiru / hairu / hashiru / kiru / iru"],
        ["Irregular", "する ／ 来(く)る", "して ／ 来(き)て", "suru → shite / kuru → kite"],
      ],
    },
    {
      type: "cheatsheet",
      summary:
        "Cheatsheet 2 of 3: the te-form. ru-verbs drop る and add て. u-verbs change by their last kana. The た-form is the same with た/だ.",
      anchorTitle: "One verb per ending",
      anchorSentences: [
        "会(あ)う・待(ま)つ・帰(かえ)る → 会って・待って・帰って",
        "読(よ)む・遊(あそ)ぶ・死(し)ぬ → 読んで・遊んで・死んで",
        "書(か)く → 書いて ／ 泳(およ)ぐ → 泳いで",
        "話(はな)す → 話して",
        "行(い)く → 行って ／ する → して ／ 来(く)る → 来(き)て",
      ],
      conjugationTable: [
        ["Ending", "te-form ／ ta-form", "Example", "Romaji"],
        ["ru-verb る", "て ／ た", "食(た)べる → 食べて ／ 食べた", "taberu → tabete / tabeta"],
        ["う・つ・る", "って ／ った", "会(あ)う → 会って ／ 会った", "au → atte / atta"],
        ["む・ぶ・ぬ", "んで ／ んだ", "読(よ)む → 読んで ／ 読んだ", "yomu → yonde / yonda"],
        ["く", "いて ／ いた", "書(か)く → 書いて ／ 書いた", "kaku → kaite / kaita"],
        ["ぐ", "いで ／ いだ", "泳(およ)ぐ → 泳いで ／ 泳いだ", "oyogu → oyoide / oyoida"],
        ["す", "して ／ した", "話(はな)す → 話して ／ 話した", "hanasu → hanashite / hanashita"],
        ["行く (odd one)", "って ／ った", "行(い)く → 行って ／ 行った", "iku → itte / itta"],
        ["する", "して ／ した", "勉強(べんきょう)する → 勉強して", "benkyō suru → benkyō shite"],
        ["来る", "来(き)て ／ 来(き)た", "来(く)る → 来(き)て", "kuru → kite / kita"],
      ],
    },
    {
      type: "cheatsheet",
      summary:
        "Cheatsheet 3 of 3: the six negatives, straight off sensei's sheet. Ever (experience) = た-form + ことがない. Yet (not completed) = te-form + ない. \"Had\" versions just put the ending in the past: なかった.",
      anchorTitle: "The six, with 食べる",
      anchorSentences: [
        "食(た)べません ／ 食べない = won't eat",
        "食べませんでした ／ 食べなかった = didn't eat",
        "食べたことがありません ／ 食べたことがない = have never eaten",
        "まだ食べていません ／ 食べてない = haven't eaten yet",
        "食べたことがありませんでした ／ 食べたことがなかった = had never eaten",
        "まだ食べていませんでした ／ 食べてなかった = hadn't eaten yet",
        "食べたことがあります ／ 食べたことがある = have eaten (before)",
      ],
      conjugationTable: [
        ["English", "Polite ／ casual", "Example (casual)", "Romaji"],
        ["won't do", "ません ／ ない", "お酒(さけ)を飲(の)まない。", "Osake o nomanai."],
        ["didn't do", "ませんでした ／ なかった", "昨日(きのう)は練習(れんしゅう)しなかった。", "Kinō wa renshū shinakatta."],
        ["haven't done (experience)", "たことがありません ／ たことがない", "納豆(なっとう)を食(た)べたことがない。", "Nattō o tabeta koto ga nai."],
        ["haven't done (not yet)", "ていません ／ てない", "まだ朝(あさ)ごはんを食(た)べてない。", "Mada asagohan o tabetenai."],
        ["hadn't done (experience)", "たことがありませんでした ／ たことがなかった", "その時(とき)まで日本(にほん)に行(い)ったことがなかった。", "Sono toki made nihon ni itta koto ga nakatta."],
        ["hadn't done (not yet)", "ていませんでした ／ てなかった", "電話(でんわ)が来(き)たとき、まだ起(お)きてなかった。", "Denwa ga kita toki, mada okitenakatta."],
        ["have done (experience)", "たことがあります ／ たことがある", "日本(にほん)に行(い)ったことがある。", "Nihon ni itta koto ga aru."],
        ["Trap", "もう〜ましたか → まだ〜ていません", "Never 〜ませんでした for \"not yet\".", "Mō ... mashita ka → mada ... te imasen"],
      ],
    },
    {
      type: "wrap",
      srsItems: [
        { front: "Sensei's vowel rule: aる / uる / oる", back: "Always u-verbs. 分かる → 分かって, 作る → 作って, 乗る → 乗って.", type: "grammar" },
        { front: "Sensei's vowel rule: eる / iる", back: "eる = ru-verb (except 帰る, 喋る, 滑る, 減る, 蹴る). iる = ru-verb about 75%, u-verb 25% (知る, 入る, 走る, 切る, 要る).", type: "grammar" },
        { front: "帰(かえ)る te-form", back: "帰って. u-verb despite the eる. Never 帰て.", type: "grammar" },
        { front: "切(き)る vs 着(き)る", back: "切る (cut) is a u-verb → 切って. 着る (wear) is a ru-verb → 着て.", type: "vocab" },
        { front: "te-form: う・つ・る / む・ぶ・ぬ", back: "う・つ・る → って. む・ぶ・ぬ → んで.", type: "grammar" },
        { front: "te-form: く / ぐ / す", back: "く → いて, ぐ → いで, す → して. Exception: 行く → 行って.", type: "grammar" },
        { front: "Haven't done (ever) vs haven't done (yet)", back: "Ever = Vたことがない (納豆を食べたことがない). Yet = Vてない (まだ食べてない).", type: "grammar" },
        { front: "Hadn't done (ever / yet)", back: "Ever = Vたことがなかった. Yet = Vてなかった. The ending goes past, nothing else moves.", type: "grammar" },
        { front: "Vた + ことがある", back: "I have done it (at least once). 日本に行ったことがある.", type: "grammar" },
        { front: "もう食べましたか → ?", back: "いいえ、まだ食べていません。Never 食べませんでした for \"not yet\".", type: "grammar" },
      ],
    },
  ],
};
