import type { LessonContent } from "@/lib/types";

// Sensei homework, 20 November 2026: the first sheet after the autumn gap.
//
// One pattern: a question folded inside a bigger sentence.
//   [question word + plain clause] + か + 分からない / 知っている / 聞く / 〜てみる / 言う
//   no question word → [plain clause] + かどうか (whether or not)
// The 13 homework sentences plus the stray macaroni line (which had no answer
// on the sheet) are the EN→JP deck. Lorenzo's answers are kept wherever they
// were right, written out in kanji with furigana. The drill opens with the four
// things that actually slipped in his answers:
//   1. the person being asked dropped or marked が (息子が → 息子に)
//   2. "ask HIM" left out altogether (彼に)
//   3. 空いている (vacant) for 開いている (open): same sound, different kanji
//   4. 来れる (spoken) for 来られる (standard)

export const KA_EMBEDDED_QUESTIONS: LessonContent = {
  slug: "ka-embedded-questions",
  title: "Homework: questions inside sentences (〜か / 〜かどうか)",
  titleJa: "「〜か」と「〜かどうか」",
  section: "B",
  jlptLevel: "N4",
  estimatedMin: 20,
  steps: [
    {
      type: "hook",
      whyItMatters:
        "First homework after the gap: the pattern that folds a question inside a bigger sentence.\n\nExample: どこに行(い)くか分(わ)からない。 I don't know where he is going.\n\nEvery detective and every lost hero in what you want to read runs on it: 何(なに)が起(お)きたか分からない, 誰(だれ)がやったか知(し)っている.\n\nYou got most of the sheet right. The plan:\n1. A short video, then three short rules\n2. Your sentences, English first\n3. A drill that opens with your four slips\n4. Read-back and the cheatsheet",
      mediaExample: {
        quote:
          "何(なん)のために生(う)まれて、何(なに)をして生(い)きるのか、答(こた)えられないなんて、そんなのは嫌(いや)だ！",
        source:
          "アンパンマンのマーチ, the Anpanman theme. Two questions folded in front of 答えられない: \"not being able to answer what I was born for, what I live to do\"",
      },
    },
    {
      type: "video",
      title: "The rule in two and a half minutes",
      blurb: "Watch this first. English voice for the explanation, Japanese voice for the Japanese, and one pause near the end where you say a sentence out loud.",
      src: "/video/ka-embedded-questions.mp4",
      poster: "/video/ka-embedded-questions.jpg",
      minutes: 2.5,
    },
    {
      type: "concept",
      explanation:
        "A question can sit inside a bigger sentence. It keeps its か and loses its politeness.\n\nExample: 友達(ともだち)がどこに行(い)くか分(わ)からない。 I don't know where my friend is going.\n\nThree rules:\n1. Plain form before か. ✓行(い)くか ✗行(い)きますか\n2. だ drops before か. ✓どこか ✗どこだか\n3. The question word stays in its normal seat. It does not jump to the front like in English.\n\nPoliteness and tense live on the last verb only: 分からない or 分かりません.",
      formulaJa: "[question word + plain clause] + か + 分(わ)からない・知(し)っている・聞(き)く",
    },
    {
      type: "concept",
      explanation:
        "No question word means a yes/no question. The fold is かどうか: whether or not.\n\nExample: あの店(みせ)が開(あ)いているかどうか確認(かくにん)する。 I will check whether that shop is open or not.\n\nHow to choose:\n1. Question word inside (何, どこ, いつ, 誰(だれ), どの, どうして, どうやって): か alone.\n2. No question word, and English says whether or if: かどうか.\n3. Never both. ✗どこに行(い)くかどうか\n\nIn fast speech かどうか shrinks to a bare か, which is what you wrote for Ben. Not wrong, but かどうか is the full form.",
      formulaJa: "[plain clause, no question word] + かどうか + 確認(かくにん)する・分(わ)からない",
    },
    {
      type: "concept",
      explanation:
        "The verbs that close the sentence:\n1. 分(わ)からない: not know, not be sure\n2. 知(し)っている: know. The negative is ✓知(し)らない ✗知(し)っていない\n3. 聞(き)く: ask\n4. 調(しら)べる: look up\n5. 確認(かくにん)する: check\n6. 覚(おぼ)えている: remember\n7. 説明(せつめい)できる: can explain\n8. 考(かんが)えている: be thinking about\n\nTwo traps from your sheet:\n1. The person you ask takes に and sits outside the question: 息子(むすこ)に聞く, 彼(かれ)に聞く.\n2. あいている has two kanji. 開(あ)いている is open. 空(あ)いている is vacant.\n\nてみる means try it and see: te-form + みる, written in kana.\n\nExample: どのコンピューターが動(うご)くか、つけてみる。 I'll switch them on and see which one works.",
      formulaJa: "[person]に + [folded question]か + 聞(き)く ・ [te-form] + みる = try and see",
    },
    {
      type: "flashcards",
      title: "Say it in Japanese",
      subtitle: "English → Japanese (the homework sheet)",
      items: [
        {
          front: "I'm not sure whether Ben is planning to go to Hokkaido this year or not.",
          back: "ベンさんが今年(ことし)北海道(ほっかいどう)に行(い)くつもりかどうか分(わ)からない。",
          romaji: "Ben-san ga kotoshi Hokkaidō ni iku tsumori ka dō ka wakaranai.",
          note: "No question word, so かどうか. つもり is a noun, so its だ drops: つもりかどうか. Your bare か is what people say quickly; this is the full \"whether or not\".",
        },
        {
          front: "I will ask the teacher why we have to study maths.",
          back: "どうして数学(すうがく)を勉強(べんきょう)しないといけないか、先生(せんせい)に聞(き)きます。",
          romaji: "Dōshite sūgaku o benkyō shinai to ikenai ka, sensei ni kikimasu.",
          note: "You had this right. しないといけない stays plain before か; the politeness sits on 聞きます. The teacher takes に.",
        },
        {
          front: "I will try to look up where the biggest country in the world is.",
          back: "世界(せかい)で一番(いちばん)大(おお)きい国(くに)がどこか調(しら)べてみる。",
          romaji: "Sekai de ichiban ōkii kuni ga doko ka shirabete miru.",
          note: "Right first time. どこか here is どこ + the folding か (だ dropped), not the \"somewhere\" どこか from the indefinite lesson. Context tells them apart.",
        },
        {
          front: "I know how we can get to the mountain.",
          back: "どうやって山(やま)に行(い)くか知(し)っている。",
          romaji: "Dō yatte yama ni iku ka shitte iru.",
          note: "Correct. For a sharper \"CAN get to\", use the potential: 行(い)けるか. The negative of this sentence ends 知らない, never 知っていない.",
        },
        {
          front: "I will ask my son what he wants to eat for dinner.",
          back: "息子(むすこ)に晩(ばん)ご飯(はん)に何(なに)を食(た)べたいか聞(き)きます。",
          romaji: "Musuko ni bangohan ni nani o tabetai ka kikimasu.",
          note: "YOUR FIX 1: 息子に, not 息子が. He is the person you ASK, so he takes に and belongs to 聞く. With が he is only the one who wants, and nobody gets asked.",
        },
        {
          front: "He wants to eat macaroni for dinner.",
          back: "息子(むすこ)は晩(ばん)ご飯(はん)にマカロニを食(た)べたがっています。",
          romaji: "Musuko wa bangohan ni makaroni o tabetagatte imasu.",
          note: "The line with no answer on your sheet. 〜たい is for your own wants; for someone else's, swap い for がっている: 食べたい → 食べたがっている. Or quote him: マカロニを食べたいと言(い)っています.",
        },
        {
          front: "I don't know where my friend is going this summer.",
          back: "友達(ともだち)が今年(ことし)の夏(なつ)にどこに行(い)くか分(わ)からない。",
          romaji: "Tomodachi ga kotoshi no natsu ni doko ni iku ka wakaranai.",
          note: "Correct. Look where どこ sits: in its normal place inside the question, not dragged to the front the way English does it.",
        },
        {
          front: "Do you know which water is mine?",
          back: "どの水(みず)が僕(ぼく)のか知(し)っている？",
          romaji: "Dono mizu ga boku no ka shitte iru?",
          note: "Correct, and neat: 僕の = mine (the の that stands in for the noun), then か straight on with no だ.",
        },
        {
          front: "I will try turning them on and see which computer works.",
          back: "どのコンピューターが動(うご)くか、つけてみる。",
          romaji: "Dono konpyūtā ga ugoku ka, tsukete miru.",
          note: "Correct. 動く = to function, to run (also to move). つける = switch on, and つけてみる = switch on and see.",
        },
        {
          front: "I will ask him when my boss is available for the meeting.",
          back: "いつ上司(じょうし)がミーティングに来(こ)られるか、彼(かれ)に聞(き)く。",
          romaji: "Itsu jōshi ga mītingu ni korareru ka, kare ni kiku.",
          note: "YOUR FIX 2 and 3: 彼に was missing (ask HIM), and 来れる is the spoken short form. The standard potential of 来(く)る is 来(こ)られる. Everyone says 来れる; tests want 来られる.",
        },
        {
          front: "I remember when we first met.",
          back: "いつ僕(ぼく)たちが出会(であ)ったか覚(おぼ)えている。",
          romaji: "Itsu bokutachi ga deatta ka oboete iru.",
          note: "Correct. 出会う already carries the \"first\": it is the meeting where you come across someone. The other way to say it: 初(はじ)めて会(あ)ったか.",
        },
        {
          front: "I will check whether the shop is open or not.",
          back: "あの店(みせ)が開(あ)いているかどうか確認(かくにん)する。",
          romaji: "Ano mise ga aite iru ka dō ka kakunin suru.",
          note: "YOUR FIX 4: 開いている, not 空いている. Both are read あいている. 開 = open for business; 空 = vacant, as in an empty seat. The grammar was perfect.",
        },
        {
          front: "I can explain why this problem is difficult.",
          back: "どうしてこの問題(もんだい)が難(むずか)しいか説明(せつめい)できる。",
          romaji: "Dōshite kono mondai ga muzukashii ka setsumei dekiru.",
          note: "Correct. い-adjectives go straight onto か as they are: 難しいか. 説明できる = 説明する in the potential.",
        },
        {
          front: "I'm thinking about what I should buy for my mother.",
          back: "僕(ぼく)がお母(かあ)さんに何(なに)を買(か)ったらいいか考(かんが)えている。",
          romaji: "Boku ga okāsan ni nani o kattara ii ka kangaete iru.",
          note: "Correct. 買ったらいい = \"what would be good to buy\", the たら conditional + いい. The 僕が can be dropped; nobody else is doing the thinking.",
        },
      ],
    },
    {
      type: "drill",
      items: [
        {
          type: "multipleChoice",
          sentence: "息子(むすこ)＿晩(ばん)ご飯(はん)に何(なに)を食(た)べたいか聞(き)きます。",
          en: "I will ask my son what he wants to eat for dinner.",
          options: ["が", "に", "を", "で"],
          correctIndex: 1,
          explanation:
            "From your sheet: you wrote 息子が. The person you put the question to takes に, because he belongs to 聞く: 息子に聞く. With が he is only the subject of 食べたい, and the sentence never says who you asked.",
        },
        {
          type: "cloze",
          sentence: "いつ上司(じょうし)がミーティングに来(こ)られるか、彼(かれ){{}}聞(き)く。",
          answer: "に",
          en: "I will ask him when my boss is available for the meeting.",
          hint: "Also from your sheet: \"him\" was missing altogether. Same particle as 先生(せんせい)＿聞く.",
        },
        {
          type: "multipleChoice",
          sentence: "あの店(みせ)が＿＿かどうか確認(かくにん)する。",
          en: "I will check whether the shop is open or not.",
          options: ["空(あ)いている", "開(あ)いている", "開(あ)けている"],
          correctIndex: 1,
          explanation:
            "From your sheet: 空いている. Same reading, wrong kanji. 空いている = vacant or free (a seat, a table, a time slot). 開いている = open. 開けている is the transitive twin: someone is holding it open.",
        },
        {
          type: "multipleChoice",
          sentence: "いつ上司(じょうし)がミーティングに＿＿か、彼(かれ)に聞(き)く。",
          en: "I will ask him when the boss can come to the meeting.",
          options: ["来(こ)られる", "来(き)られる", "来(く)られる"],
          correctIndex: 0,
          explanation:
            "来る is irregular and its reading shifts: くる, きます, こない, こられる. The potential is 来(こ)られる. You wrote 来れる, which is the short form everyone uses in speech (ら dropped). Fine in conversation, marked down on a test.",
        },
        {
          type: "multipleChoice",
          sentence: "友達(ともだち)が今年(ことし)の夏(なつ)にどこに＿＿か分(わ)かりません。",
          en: "I don't know where my friend is going this summer.",
          options: ["行(い)きます", "行(い)く", "行(い)って"],
          correctIndex: 1,
          explanation:
            "Plain form before か, always. The sentence is polite, but the politeness sits on the final 分かりません only. 行きますか分かりません is the classic learner mistake.",
        },
        {
          type: "multipleChoice",
          sentence: "世界(せかい)で一番(いちばん)大(おお)きい国(くに)が＿＿か調(しら)べてみる。",
          en: "I will try to look up where the biggest country in the world is.",
          options: ["どこだ", "どこです", "どこ"],
          correctIndex: 2,
          explanation:
            "だ drops before か. Nouns, question words and な-adjectives go straight on: どこか, 誰(だれ)か, 僕(ぼく)のか, 静(しず)かか.",
        },
        {
          type: "multipleChoice",
          sentence: "ベンさんが今年(ことし)北海道(ほっかいどう)に行(い)くつもり＿＿分(わ)からない。",
          en: "I'm not sure whether Ben is planning to go to Hokkaido this year or not.",
          options: ["かどうか", "どうか", "だかどうか"],
          correctIndex: 0,
          explanation:
            "No question word in the clause, and the English says \"whether or not\": かどうか. つもり is a noun, so no だ in front. A bare か is heard in speech, but this is the full form.",
        },
        {
          type: "multipleChoice",
          sentence: "友達(ともだち)が夏(なつ)にどこに行(い)く＿＿分(わ)からない。",
          en: "I don't know where my friend is going in the summer.",
          options: ["かどうか", "か", "どうか"],
          correctIndex: 1,
          explanation:
            "There IS a question word (どこ), so it is か alone. かどうか means \"whether or not\", and you cannot ask \"where or not\".",
        },
        {
          type: "cloze",
          sentence: "どのコンピューターが動(うご)くか、つけて{{}}。",
          answer: "みる",
          en: "I will try turning them on and see which computer works.",
          acceptableAnswers: ["みる", "みます", "見る", "見ます"],
          hint: "Te-form + ? = do it and see what happens. Normally written in kana.",
        },
        {
          type: "multipleChoice",
          sentence: "どうやって山(やま)に行(い)くか＿＿。",
          en: "I don't know how to get to the mountain.",
          options: ["知(し)っていない", "知(し)らない", "知(し)りない"],
          correctIndex: 1,
          explanation:
            "知る is lopsided: knowing is the state 知っている, but not knowing is plain 知らない. 知っていない is almost never said.",
        },
        {
          type: "multipleChoice",
          sentence: "息子(むすこ)は晩(ばん)ご飯(はん)にマカロニを＿＿。",
          en: "He (my son) wants to eat macaroni for dinner.",
          options: ["食(た)べたいです", "食(た)べたがっています", "食(た)べてみます"],
          correctIndex: 1,
          explanation:
            "〜たい reports your OWN wants. You cannot see inside someone else's head, so Japanese makes you describe the signs: 食べたがっている (he is showing that he wants to eat). 食べたいと言(い)っています, \"he says he wants to\", works too.",
        },
      ],
    },
    {
      type: "flashcards",
      title: "Read it back",
      subtitle: "Japanese → English",
      items: [
        {
          front: "ベンさんが今年(ことし)北海道(ほっかいどう)に行(い)くつもりかどうか分(わ)からない。",
          back: "I'm not sure whether Ben is planning to go to Hokkaido this year or not.",
          romaji: "Ben-san ga kotoshi Hokkaidō ni iku tsumori ka dō ka wakaranai.",
        },
        {
          front: "どうして数学(すうがく)を勉強(べんきょう)しないといけないか、先生(せんせい)に聞(き)きます。",
          back: "I will ask the teacher why we have to study maths.",
          romaji: "Dōshite sūgaku o benkyō shinai to ikenai ka, sensei ni kikimasu.",
        },
        {
          front: "世界(せかい)で一番(いちばん)大(おお)きい国(くに)がどこか調(しら)べてみる。",
          back: "I will try to look up where the biggest country in the world is.",
          romaji: "Sekai de ichiban ōkii kuni ga doko ka shirabete miru.",
        },
        {
          front: "どうやって山(やま)に行(い)くか知(し)っている。",
          back: "I know how we can get to the mountain.",
          romaji: "Dō yatte yama ni iku ka shitte iru.",
        },
        {
          front: "息子(むすこ)に晩(ばん)ご飯(はん)に何(なに)を食(た)べたいか聞(き)きます。",
          back: "I will ask my son what he wants to eat for dinner.",
          romaji: "Musuko ni bangohan ni nani o tabetai ka kikimasu.",
        },
        {
          front: "息子(むすこ)は晩(ばん)ご飯(はん)にマカロニを食(た)べたがっています。",
          back: "He (my son) wants to eat macaroni for dinner.",
          romaji: "Musuko wa bangohan ni makaroni o tabetagatte imasu.",
        },
        {
          front: "友達(ともだち)が今年(ことし)の夏(なつ)にどこに行(い)くか分(わ)からない。",
          back: "I don't know where my friend is going this summer.",
          romaji: "Tomodachi ga kotoshi no natsu ni doko ni iku ka wakaranai.",
        },
        {
          front: "どの水(みず)が僕(ぼく)のか知(し)っている？",
          back: "Do you know which water is mine?",
          romaji: "Dono mizu ga boku no ka shitte iru?",
        },
        {
          front: "どのコンピューターが動(うご)くか、つけてみる。",
          back: "I will try turning them on and see which computer works.",
          romaji: "Dono konpyūtā ga ugoku ka, tsukete miru.",
        },
        {
          front: "いつ上司(じょうし)がミーティングに来(こ)られるか、彼(かれ)に聞(き)く。",
          back: "I will ask him when my boss is available for the meeting.",
          romaji: "Itsu jōshi ga mītingu ni korareru ka, kare ni kiku.",
        },
        {
          front: "いつ僕(ぼく)たちが出会(であ)ったか覚(おぼ)えている。",
          back: "I remember when we first met.",
          romaji: "Itsu bokutachi ga deatta ka oboete iru.",
        },
        {
          front: "あの店(みせ)が開(あ)いているかどうか確認(かくにん)する。",
          back: "I will check whether the shop is open or not.",
          romaji: "Ano mise ga aite iru ka dō ka kakunin suru.",
        },
        {
          front: "どうしてこの問題(もんだい)が難(むずか)しいか説明(せつめい)できる。",
          back: "I can explain why this problem is difficult.",
          romaji: "Dōshite kono mondai ga muzukashii ka setsumei dekiru.",
        },
        {
          front: "僕(ぼく)がお母(かあ)さんに何(なに)を買(か)ったらいいか考(かんが)えている。",
          back: "I'm thinking about what I should buy for my mother.",
          romaji: "Boku ga okāsan ni nani o kattara ii ka kangaete iru.",
        },
      ],
    },
    {
      type: "cheatsheet",
      summary:
        "HOMEWORK CHEATSHEET (20 November). A question folded inside a sentence: [question word + PLAIN clause] + か + main verb (分からない, 知っている, 聞く, 調べる, 確認する, 覚えている, 説明できる, 考えている, 言う). No question word = whether or not = かどうか. Three rules: plain form before か (行くか, never 行きますか分からない); だ drops (どこか, 僕のか, つもりかどうか); the question word stays in its normal seat. Politeness and tense live on the LAST verb only. 〜てみる = te-form + みる = try it and see (調べてみる, つけてみる).\n\nYour four slips this week: 息子に聞く, not 息子が (the person you ask takes に); 彼に was missing from the boss sentence; 開いている = open, 空いている = vacant (same sound); 来られる is the standard potential of 来る, 来れる is speech only.\n\nTwo extras: \"I don't know\" is 知らない, never 知っていない. Someone else's wants are 食べたがっている or 食べたいと言っている, never a bare 食べたい.",
      rules: [
        {
          title: "Question word inside: か",
          formula: [
            { text: "question word" },
            { text: "plain sentence" },
            { text: "か", key: true },
            { text: "分(わ)からない" },
          ],
          note: "The question keeps its か and loses its politeness. The question word stays in its normal seat.",
          right: [
            {
              ja: "友達(ともだち)がどこに行(い)くか分(わ)からない。",
              en: "I don't know where my friend is going.",
            },
          ],
          wrong: [
            {
              ja: "どこに行(い)きますか分(わ)かりません。",
              why: "No ます before か. Politeness goes on the last verb only.",
            },
          ],
        },
        {
          title: "No question word: かどうか",
          formula: [
            { text: "plain sentence" },
            { text: "かどうか", key: true },
            { text: "確認(かくにん)する" },
          ],
          note: "Whether or not. For yes/no questions only.",
          right: [
            {
              ja: "あの店(みせ)が開(あ)いているかどうか確認(かくにん)する。",
              en: "I will check whether that shop is open or not.",
            },
          ],
          wrong: [
            {
              ja: "どこに行(い)くかどうか分(わ)からない。",
              why: "どこ is a question word, so か alone.",
            },
          ],
        },
        {
          title: "What goes in front of か",
          note: "Always the plain form. A noun loses its だ.",
          right: [
            { ja: "行(い)くか ・ 行(い)ったか", en: "Verb: plain, any tense" },
            { ja: "難(むずか)しいか", en: "い-adjective: as it is" },
            { ja: "どこか ・ 僕(ぼく)のか ・ つもりか", en: "Noun or question word: no だ" },
          ],
          wrong: [{ ja: "どこだか ・ どこですか", why: "No だ and no です before か." }],
        },
        {
          title: "The person you ask takes に",
          formula: [
            { text: "person" },
            { text: "に", key: true },
            { text: "question + か" },
            { text: "聞(き)く" },
          ],
          right: [
            {
              ja: "息子(むすこ)に何(なに)を食(た)べたいか聞(き)きます。",
              en: "I will ask my son what he wants to eat.",
            },
          ],
        },
        {
          title: "Try it and see: てみる",
          formula: [{ text: "te-form" }, { text: "みる", key: true }],
          note: "Do it to find out. It pairs naturally with a folded question.",
          right: [
            {
              ja: "どのコンピューターが動(うご)くか、つけてみる。",
              en: "I'll switch them on and see which one works.",
            },
          ],
        },
      ],
      fixesTitle: "Your slips this week, fixed",
      fixes: [
        {
          wrong: "息子(むすこ)が…聞(き)きます",
          right: "息子(むすこ)に…聞(き)きます",
          why: "You ask him, so he takes に.",
        },
        {
          wrong: "来(こ)られるか、聞(き)く",
          right: "来(こ)られるか、彼(かれ)に聞(き)く",
          why: "Ask HIM: he was missing from the boss sentence.",
        },
        {
          wrong: "空(あ)いている",
          right: "開(あ)いている",
          why: "Same sound. 開 is open (a shop). 空 is vacant (a seat).",
        },
        {
          wrong: "来(こ)れる",
          right: "来(こ)られる",
          why: "来れる is speech only. 来られる is the standard form.",
        },
        {
          wrong: "知(し)っていない",
          right: "知(し)らない",
          why: "Not on your sheet, but the classic trap: don't know is 知らない.",
        },
        {
          wrong: "息子(むすこ)は食(た)べたいです",
          right: "息子(むすこ)は食(た)べたがっています",
          why: "たい is for your own wants. For someone else: たがっている.",
        },
      ],
      anchorTitle: "The homework sentences",
      anchorSentences: [
        "ベンさんが今年(ことし)北海道(ほっかいどう)に行(い)くつもりかどうか分(わ)からない。",
        "どうして数学(すうがく)を勉強(べんきょう)しないといけないか、先生(せんせい)に聞(き)きます。",
        "世界(せかい)で一番(いちばん)大(おお)きい国(くに)がどこか調(しら)べてみる。",
        "どうやって山(やま)に行(い)くか知(し)っている。",
        "息子(むすこ)に晩(ばん)ご飯(はん)に何(なに)を食(た)べたいか聞(き)きます。",
        "息子(むすこ)は晩(ばん)ご飯(はん)にマカロニを食(た)べたがっています。",
        "友達(ともだち)が今年(ことし)の夏(なつ)にどこに行(い)くか分(わ)からない。",
        "どの水(みず)が僕(ぼく)のか知(し)っている？",
        "どのコンピューターが動(うご)くか、つけてみる。",
        "いつ上司(じょうし)がミーティングに来(こ)られるか、彼(かれ)に聞(き)く。",
        "いつ僕(ぼく)たちが出会(であ)ったか覚(おぼ)えている。",
        "あの店(みせ)が開(あ)いているかどうか確認(かくにん)する。",
        "どうしてこの問題(もんだい)が難(むずか)しいか説明(せつめい)できる。",
        "僕(ぼく)がお母(かあ)さんに何(なに)を買(か)ったらいいか考(かんが)えている。",
      ],
      conjugationTable: [
        ["Japanese", "English", "Romaji"],
        ["Question word + か", "", ""],
        [
          "どうして数学(すうがく)を勉強(べんきょう)しないといけないか、先生(せんせい)に聞(き)きます。",
          "I will ask the teacher why we have to study maths.",
          "Dōshite sūgaku o benkyō shinai to ikenai ka, sensei ni kikimasu.",
        ],
        [
          "世界(せかい)で一番(いちばん)大(おお)きい国(くに)がどこか調(しら)べてみる。",
          "I will try to look up where the biggest country in the world is.",
          "Sekai de ichiban ōkii kuni ga doko ka shirabete miru.",
        ],
        [
          "どうやって山(やま)に行(い)くか知(し)っている。",
          "I know how we can get to the mountain.",
          "Dō yatte yama ni iku ka shitte iru.",
        ],
        [
          "息子(むすこ)に晩(ばん)ご飯(はん)に何(なに)を食(た)べたいか聞(き)きます。",
          "I will ask my son what he wants to eat for dinner.",
          "Musuko ni bangohan ni nani o tabetai ka kikimasu.",
        ],
        [
          "友達(ともだち)が今年(ことし)の夏(なつ)にどこに行(い)くか分(わ)からない。",
          "I don't know where my friend is going this summer.",
          "Tomodachi ga kotoshi no natsu ni doko ni iku ka wakaranai.",
        ],
        [
          "どの水(みず)が僕(ぼく)のか知(し)っている？",
          "Do you know which water is mine?",
          "Dono mizu ga boku no ka shitte iru?",
        ],
        [
          "どのコンピューターが動(うご)くか、つけてみる。",
          "I will try turning them on and see which computer works.",
          "Dono konpyūtā ga ugoku ka, tsukete miru.",
        ],
        [
          "いつ上司(じょうし)がミーティングに来(こ)られるか、彼(かれ)に聞(き)く。",
          "I will ask him when my boss is available for the meeting.",
          "Itsu jōshi ga mītingu ni korareru ka, kare ni kiku.",
        ],
        [
          "いつ僕(ぼく)たちが出会(であ)ったか覚(おぼ)えている。",
          "I remember when we first met.",
          "Itsu bokutachi ga deatta ka oboete iru.",
        ],
        [
          "どうしてこの問題(もんだい)が難(むずか)しいか説明(せつめい)できる。",
          "I can explain why this problem is difficult.",
          "Dōshite kono mondai ga muzukashii ka setsumei dekiru.",
        ],
        [
          "僕(ぼく)がお母(かあ)さんに何(なに)を買(か)ったらいいか考(かんが)えている。",
          "I'm thinking about what I should buy for my mother.",
          "Boku ga okāsan ni nani o kattara ii ka kangaete iru.",
        ],
        ["かどうか: whether or not", "", ""],
        [
          "ベンさんが今年(ことし)北海道(ほっかいどう)に行(い)くつもりかどうか分(わ)からない。",
          "I'm not sure whether Ben is planning to go to Hokkaido this year or not.",
          "Ben-san ga kotoshi Hokkaidō ni iku tsumori ka dō ka wakaranai.",
        ],
        [
          "あの店(みせ)が開(あ)いているかどうか確認(かくにん)する。",
          "I will check whether the shop is open or not.",
          "Ano mise ga aite iru ka dō ka kakunin suru.",
        ],
        ["The closing verbs", "", ""],
        ["分(わ)からない ・ 知(し)っている ・ 知(し)らない", "not know, not be sure ・ know ・ don't know", "wakaranai / shitte iru / shiranai"],
        ["[person]に聞(き)く", "ask [person]: the one you ask takes に", "[person] ni kiku"],
        ["調(しら)べる ・ 確認(かくにん)する", "look up ・ check", "shiraberu / kakunin suru"],
        ["覚(おぼ)えている ・ 考(かんが)えている", "remember ・ be thinking about", "oboete iru / kangaete iru"],
        ["説明(せつめい)する ・ 説明(せつめい)できる", "explain ・ can explain", "setsumei suru / setsumei dekiru"],
        ["調(しら)べてみる ・ つけてみる", "te-form + みる: try it and see", "shirabete miru / tsukete miru"],
        ["Someone else wants something", "", ""],
        [
          "息子(むすこ)は晩(ばん)ご飯(はん)にマカロニを食(た)べたがっています。",
          "He (my son) wants to eat macaroni for dinner. Someone else's want: たい → たがっている",
          "Musuko wa bangohan ni makaroni o tabetagatte imasu.",
        ],
      ],
    },
    {
      type: "wrap",
      srsItems: [
        { front: "[question word + plain clause] + か + 分(わ)からない", back: "A question folded into a sentence: どこに行くか分からない = I don't know where (he) is going.", type: "grammar" },
        { front: "〜かどうか", back: "Whether or not. Used when there is NO question word: 開いているかどうか確認する = check whether it is open.", type: "grammar" },
        { front: "か or かどうか?", back: "Question word in the clause (何, どこ, いつ, どうして...) → か. No question word → かどうか. Never both.", type: "grammar" },
        { front: "What form goes before the folding か?", back: "Plain form only (行くか, 行ったか, 難しいか), and だ drops (どこか, 僕のか). Politeness goes on the last verb.", type: "grammar" },
        { front: "Ask my son: 息子(むすこ)＿聞(き)く", back: "に. The person you ask takes に: 先生に聞く, 彼に聞く, 息子に聞く.", type: "grammar" },
        { front: "〜てみる", back: "Te-form + みる = try it and see. 調べてみる = look it up and see; つけてみる = switch it on and see.", type: "grammar" },
        { front: "開(あ)いている vs 空(あ)いている", back: "Both あいている. 開 = open (shop, door). 空 = vacant, free (seat, room, time slot).", type: "kanji" },
        { front: "来(こ)られる vs 来(こ)れる", back: "Potential of 来る. 来られる is standard; 来れる is the everyday spoken short form.", type: "grammar" },
        { front: "知(し)っている: the negative", back: "知らない. Never 知っていない.", type: "grammar" },
        { front: "食(た)べたがっている", back: "Someone ELSE wants to eat. たい is for your own wants; for others, たがっている or たいと言っている.", type: "grammar" },
        { front: "数学(すうがく)", back: "Maths.", type: "vocab" },
        { front: "調(しら)べる", back: "To look up, to investigate. 調べてみる = try looking it up.", type: "vocab" },
        { front: "息子(むすこ)", back: "Son (your own).", type: "vocab" },
        { front: "動(うご)く", back: "To function, to run (a machine); also to move.", type: "vocab" },
        { front: "確認(かくにん)する", back: "To check, to confirm.", type: "vocab" },
        { front: "説明(せつめい)する", back: "To explain. 説明できる = can explain.", type: "vocab" },
        { front: "出会(であ)う", back: "To meet for the first time, to come across. 出会った already means \"first met\".", type: "vocab" },
      ],
    },
  ],
};
