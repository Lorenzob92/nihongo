import type { LessonContent } from "@/lib/types";

// Sensei homework, 17 July 2026. Three patterns from the script:
//   1. AからBまで + どのくらいかかりますか  (how long a journey takes)
//   2. [dictionary verb] + のに + [duration] + かかる  (how long an action takes)
//   3. の / やつ  (the "one" substitute, so you don't repeat the noun)
// The sentences are Lorenzo's own homework answers corrected to standard forms.
// The drill step is built from his six actual mistakes, so the traps he fell
// into are the ones he drills: を/が on 分かる, 一時 vs 一時間, missing past
// tense, a dropped を, バイク = motorbike, and repeating 飲み物 instead of やつ.

export const KAKARU_NO_YATSU: LessonContent = {
  slug: "kakaru-no-yatsu",
  title: "どのくらいかかる + の/やつ",
  titleJa: "「どのくらいかかる」と「の・やつ」",
  section: "D",
  jlptLevel: "N4",
  estimatedMin: 15,
  steps: [
    {
      type: "hook",
      whyItMatters:
        "Two things you will need within an hour of landing in Japan: asking how long something takes, and saying \"the white one\" without knowing the word for the thing.\n\nかかる is the verb for time and money draining away. It is everywhere: 時間(じかん)がかかる, お金(かね)がかかる. And の/やつ is the little word that stops you sounding like a robot repeating 飲(の)み物(もの) twice in one sentence.\n\nBoth are in this week's homework. Both are on the recording.",
      mediaExample: {
        quote: "ここから駅(えき)まで、どのくらいかかりますか。",
        source: "The single most useful sentence in this lesson",
      },
    },
    {
      type: "concept",
      explanation:
        "Route A to route B, how long?\n\nA から B まで どのくらいかかりますか。\n\nから = from, まで = to/until. どのくらい = how much/how long. かかる = it takes.\n\nThe method (how you travel) goes in with で: バスで, 電車(でんしゃ)で, 自転車(じてんしゃ)で.\n\nBUT if the method is an ACTION, not a thing, you use the te-form instead: 歩(ある)いて = by walking, 走(はし)って = by running. This is sensei's note: an action used as a method takes te-form.\n\nWord order is flexible, but the natural one puts the route first and the method just before どのくらい:\n\n駅(えき)から学校(がっこう)まで歩(ある)いてどのくらいかかりますか。\n\nWatch out: 歩(ある)いて + から reads as \"from walking\". Keep the place name attached to から, or the sentence loses its starting point.",
      formulaJa: "A から B まで [method で / te-form] どのくらいかかりますか",
    },
    {
      type: "concept",
      explanation:
        "How long to COMPLETE an action? Use のに.\n\n[Verb, dictionary form] + のに + [duration] + かかる\n\nこの料理(りょうり)を作(つく)るのに三十分(さんじゅっぷん)かかる。 = It takes 30 minutes to make this dish.\n\nThe verb before のに is ALWAYS the dictionary form. 作(つく)るのに, never 作(つく)ったのに, even when the whole sentence is in the past. The past tense lands on かかる at the end: かかった.\n\nDuration, not clock time. 一時(いちじ) = one o'clock. 一時間(いちじかん) = one hour. かかる wants the 間(かん).\n\nかかる is intransitive and takes が when the time is the subject: 時間(じかん)がかかる. With のに the duration just sits there bare: のに二時間(にじかん)かかる.",
      formulaJa: "[Verb, dictionary form] + のに + [duration] + かかる/かかった",
      cureDollyTake:
        "の turns the whole verb phrase into a thing (\"the making-of-this-dish\"), and に points at it: \"for the purpose of the making-of-this-dish, thirty minutes get spent\". That is why the verb stays in its plain dictionary shape: it is not a tense, it is a noun now.",
    },
    {
      type: "concept",
      explanation:
        "の / やつ = \"one\", so you don't say the noun twice.\n\n赤(あか)いペンを買(か)ったけど、僕(ぼく)は白(しろ)いやつを買(か)った。 = ...but I bought a white ONE.\n\nBoth の and やつ mean the same thing here, but they are NOT the same register:\n\nの = neutral. Safe everywhere, including polite speech and with sensei. In a shop: もっと大(おお)きいのを探(さが)しています。\n\nやつ = casual, a bit rough. Great with friends, wrong in a shop. Used about a person it can sound insulting.\n\nThey attach to whatever describes the thing:\n- い-adjective: 白(しろ)いの / 白(しろ)いやつ\n- noun + の: 日本語(にほんご)のやつ (the Japanese one)\n- position: 後(あと)のやつ (the later one)\n\nOne catch: after a possessive, の is already doing the job. あれはベンの。 = That is Ben's. Adding やつ (ベンのやつ) is fine casually, but の alone is the cleaner answer.\n\nThe whole point of this pattern is to AVOID repeating the noun. If you find yourself writing 飲(の)み物(もの) twice, that is the mistake.",
      formulaJa: "[い-adj / noun + の] + の (neutral) / やつ (casual) = \"one\"",
    },
    {
      type: "flashcards",
      title: "Say it in Japanese",
      subtitle: "English → Japanese (this is the voice memo, on screen)",
      items: [
        {
          front: "How long does it take to walk from Shibuya to Roppongi?",
          back: "渋谷(しぶや)から六本木(ろっぽんぎ)まで歩(ある)いてどのくらいかかりますか。",
          romaji: "Shibuya kara Roppongi made aruite dono kurai kakarimasu ka.",
          note: "Walking is an action, so te-form 歩いて, not 歩きで. Keep 渋谷 glued to から: 歩いてから would mean \"from walking\".",
        },
        {
          front: "How long does it take from home to school by bus?",
          back: "家(いえ)から学校(がっこう)までバスでどのくらいかかりますか。",
          romaji: "Ie kara gakkō made basu de dono kurai kakarimasu ka.",
          note: "A bus is a thing, so で. バスで家から… also works; route-first is just more natural.",
        },
        {
          front: "How long does it take to get from here to the station?",
          back: "ここから駅(えき)までどのくらいかかりますか。",
          romaji: "Koko kara eki made dono kurai kakarimasu ka.",
          note: "No method stated, so nothing extra. The bare-bones version of the pattern.",
        },
        {
          front: "How long does it take from this office to the city centre by bike?",
          back: "この会社(かいしゃ)から中心街(ちゅうしんがい)まで自転車(じてんしゃ)でどのくらいかかりますか。",
          romaji: "Kono kaisha kara chūshingai made jitensha de dono kurai kakarimasu ka.",
          note: "自転車 = bicycle. バイク in Japanese is a MOTORbike, not a pushbike. 街(まち)の中心(ちゅうしん) also works for city centre.",
        },
        {
          front: "How long does it take from the station to the school on foot?",
          back: "駅(えき)から学校(がっこう)まで歩(ある)いてどのくらいかかりますか。",
          romaji: "Eki kara gakkō made aruite dono kurai kakarimasu ka.",
          note: "Same shape as the Shibuya one. 歩いて sits right before どのくらい.",
        },
        {
          front: "It takes 30 minutes to make this dish.",
          back: "この料理(りょうり)を作(つく)るのに三十分(さんじゅっぷん)かかる。",
          romaji: "Kono ryōri o tsukuru no ni sanjuppun kakaru.",
          note: "作る stays in the dictionary form before のに.",
        },
        {
          front: "It takes one hour to eat this big ramen.",
          back: "この大(おお)きいラーメンを食(た)べるのに一時間(いちじかん)かかる。",
          romaji: "Kono ōkii rāmen o taberu no ni ichijikan kakaru.",
          note: "一時間 = one hour. 一時(いちじ) = one o'clock. Duration needs the 間(かん).",
        },
        {
          front: "It took me 3 days to read this book.",
          back: "この本(ほん)を読(よ)むのに三日間(みっかかん)かかった。",
          romaji: "Kono hon o yomu no ni mikkakan kakatta.",
          note: "\"It TOOK\" = past, so かかった. 読む stays dictionary form. 三日(みっか) alone is also fine.",
        },
        {
          front: "It took me a year to understand Japanese grammar.",
          back: "日本語(にほんご)の文法(ぶんぽう)が分(わ)かるのに一年(いちねん)かかった。",
          romaji: "Nihongo no bunpō ga wakaru no ni ichinen kakatta.",
          note: "分かる takes が, NEVER を. If you want を, swap the verb: 文法を理解(りかい)するのに一年かかった。",
        },
        {
          front: "It takes two hours to finish this homework.",
          back: "この宿題(しゅくだい)を終(お)えるのに二時間(にじかん)かかる。",
          romaji: "Kono shukudai o oeru no ni nijikan kakaru.",
          note: "終える = you finish it (transitive). 終わる = it ends by itself.",
        },
        {
          front: "It takes 10 minutes to walk to the station.",
          back: "駅(えき)まで歩(ある)いて行(い)くのに十分(じゅっぷん)かかる。",
          romaji: "Eki made aruite iku no ni juppun kakaru.",
          note: "歩いて行く = to go on foot. The dictionary form 行く is what のに attaches to.",
        },
        {
          front: "Sam bought a red pen, but I bought a white one.",
          back: "サムは赤(あか)いペンを買(か)ったけど、僕(ぼく)は白(しろ)いやつを買(か)った。",
          romaji: "Samu wa akai pen o katta kedo, boku wa shiroi yatsu o katta.",
          note: "ペン is katakana (a loanword). やつ replaces ペン so you don't say it twice.",
        },
        {
          front: "Is this M size? I'm looking for a bigger one.",
          back: "これはMサイズですか。もっと大(おお)きいのを探(さが)しています。",
          romaji: "Kore wa emu saizu desu ka. Motto ōkii no o sagashite imasu.",
          note: "の, not やつ: you are in a shop being polite. And 探しています needs を.",
        },
        {
          front: "This is my bag, and that is Ben's.",
          back: "これは僕(ぼく)のかばんで、あれはベンの。",
          romaji: "Kore wa boku no kaban de, are wa Ben no.",
          note: "The possessive の already means \"Ben's one\". ベンのやつ is fine casually, ベンの is cleaner. で links the two halves.",
        },
        {
          front: "Mary brought an English guidebook, but I brought a Japanese one.",
          back: "メアリーさんは英語(えいご)のガイドブックを持(も)ってきたけど、僕(ぼく)は日本語(にほんご)のやつを持(も)ってきた。",
          romaji: "Mearī-san wa eigo no gaidobukku o motte kita kedo, boku wa nihongo no yatsu o motte kita.",
          note: "Pick one register and stay in it. All-plain here; all-polite (持ってきました…持ってきました) is the other option.",
        },
        {
          front: "Mary took an early train, but I took the later one.",
          back: "メアリーさんは早(はや)い電車(でんしゃ)に乗(の)ったけど、僕(ぼく)は後(あと)のやつに乗(の)った。",
          romaji: "Mearī-san wa hayai densha ni notta kedo, boku wa ato no yatsu ni notta.",
          note: "後(あと)の = the later one. 遅(おそ)い電車 tends to read \"SLOW train\", not \"late train\". 乗る takes に.",
        },
        {
          front: "Mary drank a hot drink, but I drank a cold one.",
          back: "メアリーさんは熱(あつ)い飲(の)み物(もの)を飲(の)んだけど、僕(ぼく)は冷(つめ)たいやつを飲(の)んだ。",
          romaji: "Mearī-san wa atsui nomimono o nonda kedo, boku wa tsumetai yatsu o nonda.",
          note: "やつ, not 飲み物 again. That repeat is exactly what this pattern exists to kill. 冷たい is the right cold for drinks.",
        },
        {
          front: "Mary bought a cheap umbrella, but I bought an expensive one.",
          back: "メアリーさんは安(やす)い傘(かさ)を買(か)ったけど、僕(ぼく)は高(たか)いやつを買(か)った。",
          romaji: "Mearī-san wa yasui kasa o katta kedo, boku wa takai yatsu o katta.",
          note: "高い does double duty: expensive AND tall. Context sorts it out.",
        },
        {
          front: "Mary bought red gloves, and I bought white ones.",
          back: "メアリーさんは赤(あか)い手袋(てぶくろ)を買(か)ったけど、僕(ぼく)は白(しろ)いやつを買(か)った。",
          romaji: "Mearī-san wa akai tebukuro o katta kedo, boku wa shiroi yatsu o katta.",
          note: "やつ covers plurals too: no change for \"ones\". けど is \"but\", and the red/white contrast earns it.",
        },
      ],
    },
    {
      type: "drill",
      items: [
        {
          type: "multipleChoice",
          sentence: "日本語(にほんご)の文法(ぶんぽう)＿＿分(わ)かるのに一年(いちねん)かかった。",
          en: "It took me a year to understand Japanese grammar.",
          options: ["を", "が", "に", "で"],
          correctIndex: 1,
          explanation:
            "分かる takes が, never を. The thing understood is the SUBJECT of 分かる, not its object: literally \"the grammar becomes clear\". If your hand insists on を, change the verb: 文法を理解(りかい)するのに一年かかった。",
        },
        {
          type: "multipleChoice",
          sentence: "この大(おお)きいラーメンを食(た)べるのに＿＿かかる。",
          en: "It takes one hour to eat this big ramen.",
          options: ["一時(いちじ)", "一時間(いちじかん)", "一日(いちにち)", "一分(いっぷん)"],
          correctIndex: 1,
          explanation:
            "一時 = one o'clock, a point on the clock. 一時間 = one hour, a length of time. かかる measures length, so it needs the 間(かん). Same for 二時間, 三時間.",
        },
        {
          type: "multipleChoice",
          sentence: "メアリーさんは熱(あつ)い飲(の)み物(もの)を飲(の)んだけど、僕(ぼく)は冷(つめ)たい＿＿を飲(の)んだ。",
          en: "Mary drank a hot drink, but I drank a cold one.",
          options: ["飲(の)み物(もの)", "やつ", "ところ", "とき"],
          correctIndex: 1,
          explanation:
            "やつ (or の). Repeating 飲み物 is grammatically legal but it is the exact habit this pattern exists to break. The English gives it away: it says \"a cold ONE\", not \"a cold drink\".",
        },
        {
          type: "multipleChoice",
          sentence: "この会社(かいしゃ)から中心街(ちゅうしんがい)まで＿＿でどのくらいかかりますか。",
          en: "How long does it take from this office to the city centre by bike?",
          options: ["バイク", "自転車(じてんしゃ)", "バス", "電車(でんしゃ)"],
          correctIndex: 1,
          explanation:
            "False friend. バイク in Japanese means MOTORbike. A pushbike is 自転車(じてんしゃ). Say バイクで and sensei pictures you on a Kawasaki.",
        },
        {
          type: "cloze",
          sentence: "この本(ほん)を読(よ)むのに三日間(みっかかん){{}}。",
          answer: "かかった",
          en: "It took me 3 days to read this book.",
          acceptableAnswers: ["かかった", "かかりました"],
          hint: "\"It TOOK\": the English is past. Which word carries the tense in this pattern?",
        },
        {
          type: "cloze",
          sentence: "もっと大(おお)きいやつ{{}}探(さが)しています。",
          answer: "を",
          en: "I'm looking for a bigger one.",
          hint: "探す is transitive. What marks the thing being searched for?",
        },
        {
          type: "cloze",
          sentence: "渋谷(しぶや)から六本木(ろっぽんぎ)まで{{}}どのくらいかかりますか。",
          answer: "歩いて",
          en: "How long does it take to walk from Shibuya to Roppongi?",
          acceptableAnswers: ["歩いて", "歩(ある)いて", "あるいて"],
          hint: "Walking is an action used as a method. Sensei's note: actions as methods take te-form.",
        },
      ],
    },
    {
      type: "flashcards",
      title: "Read it back",
      subtitle: "Japanese → English",
      items: [
        {
          front: "渋谷(しぶや)から六本木(ろっぽんぎ)まで歩(ある)いてどのくらいかかりますか。",
          back: "How long does it take to walk from Shibuya to Roppongi?",
          romaji: "Shibuya kara Roppongi made aruite dono kurai kakarimasu ka.",
        },
        {
          front: "家(いえ)から学校(がっこう)までバスでどのくらいかかりますか。",
          back: "How long does it take from home to school by bus?",
          romaji: "Ie kara gakkō made basu de dono kurai kakarimasu ka.",
        },
        {
          front: "ここから駅(えき)までどのくらいかかりますか。",
          back: "How long does it take to get from here to the station?",
          romaji: "Koko kara eki made dono kurai kakarimasu ka.",
        },
        {
          front: "この会社(かいしゃ)から中心街(ちゅうしんがい)まで自転車(じてんしゃ)でどのくらいかかりますか。",
          back: "How long does it take from this office to the city centre by bike?",
          romaji: "Kono kaisha kara chūshingai made jitensha de dono kurai kakarimasu ka.",
        },
        {
          front: "駅(えき)から学校(がっこう)まで歩(ある)いてどのくらいかかりますか。",
          back: "How long does it take from the station to the school on foot?",
          romaji: "Eki kara gakkō made aruite dono kurai kakarimasu ka.",
        },
        {
          front: "この料理(りょうり)を作(つく)るのに三十分(さんじゅっぷん)かかる。",
          back: "It takes 30 minutes to make this dish.",
          romaji: "Kono ryōri o tsukuru no ni sanjuppun kakaru.",
        },
        {
          front: "この大(おお)きいラーメンを食(た)べるのに一時間(いちじかん)かかる。",
          back: "It takes one hour to eat this big ramen.",
          romaji: "Kono ōkii rāmen o taberu no ni ichijikan kakaru.",
        },
        {
          front: "この本(ほん)を読(よ)むのに三日間(みっかかん)かかった。",
          back: "It took me 3 days to read this book.",
          romaji: "Kono hon o yomu no ni mikkakan kakatta.",
        },
        {
          front: "日本語(にほんご)の文法(ぶんぽう)が分(わ)かるのに一年(いちねん)かかった。",
          back: "It took me a year to understand Japanese grammar.",
          romaji: "Nihongo no bunpō ga wakaru no ni ichinen kakatta.",
        },
        {
          front: "この宿題(しゅくだい)を終(お)えるのに二時間(にじかん)かかる。",
          back: "It takes two hours to finish this homework.",
          romaji: "Kono shukudai o oeru no ni nijikan kakaru.",
        },
        {
          front: "駅(えき)まで歩(ある)いて行(い)くのに十分(じゅっぷん)かかる。",
          back: "It takes 10 minutes to walk to the station.",
          romaji: "Eki made aruite iku no ni juppun kakaru.",
        },
        {
          front: "サムは赤(あか)いペンを買(か)ったけど、僕(ぼく)は白(しろ)いやつを買(か)った。",
          back: "Sam bought a red pen, but I bought a white one.",
          romaji: "Samu wa akai pen o katta kedo, boku wa shiroi yatsu o katta.",
        },
        {
          front: "これはMサイズですか。もっと大(おお)きいのを探(さが)しています。",
          back: "Is this M size? I'm looking for a bigger one.",
          romaji: "Kore wa emu saizu desu ka. Motto ōkii no o sagashite imasu.",
        },
        {
          front: "これは僕(ぼく)のかばんで、あれはベンの。",
          back: "This is my bag, and that is Ben's.",
          romaji: "Kore wa boku no kaban de, are wa Ben no.",
        },
        {
          front: "メアリーさんは英語(えいご)のガイドブックを持(も)ってきたけど、僕(ぼく)は日本語(にほんご)のやつを持(も)ってきた。",
          back: "Mary brought an English guidebook, but I brought a Japanese one.",
          romaji: "Mearī-san wa eigo no gaidobukku o motte kita kedo, boku wa nihongo no yatsu o motte kita.",
        },
        {
          front: "メアリーさんは早(はや)い電車(でんしゃ)に乗(の)ったけど、僕(ぼく)は後(あと)のやつに乗(の)った。",
          back: "Mary took an early train, but I took the later one.",
          romaji: "Mearī-san wa hayai densha ni notta kedo, boku wa ato no yatsu ni notta.",
        },
        {
          front: "メアリーさんは熱(あつ)い飲(の)み物(もの)を飲(の)んだけど、僕(ぼく)は冷(つめ)たいやつを飲(の)んだ。",
          back: "Mary drank a hot drink, but I drank a cold one.",
          romaji: "Mearī-san wa atsui nomimono o nonda kedo, boku wa tsumetai yatsu o nonda.",
        },
        {
          front: "メアリーさんは安(やす)い傘(かさ)を買(か)ったけど、僕(ぼく)は高(たか)いやつを買(か)った。",
          back: "Mary bought a cheap umbrella, but I bought an expensive one.",
          romaji: "Mearī-san wa yasui kasa o katta kedo, boku wa takai yatsu o katta.",
        },
        {
          front: "メアリーさんは赤(あか)い手袋(てぶくろ)を買(か)ったけど、僕(ぼく)は白(しろ)いやつを買(か)った。",
          back: "Mary bought red gloves, and I bought white ones.",
          romaji: "Mearī-san wa akai tebukuro o katta kedo, boku wa shiroi yatsu o katta.",
        },
      ],
    },
    {
      type: "cheatsheet",
      summary:
        "HOMEWORK CHEATSHEET (17 July). Journeys: AからBまで + method + どのくらいかかりますか. A thing as the method takes で (バスで, 自転車で); an ACTION as the method takes te-form (歩いて). Actions: [dictionary verb] + のに + [duration] + かかる. The verb never conjugates before のに; the tense lands on かかる/かかった. Duration needs 間: 一時間 (one hour), not 一時 (one o'clock). Substitutes: の (neutral, safe in polite speech) and やつ (casual, rough) both mean \"one\", and exist so you never repeat the noun. After a possessive, の alone is enough: あれはベンの。\n\nYour six traps from this week: 分かる takes が not を; 一時 vs 一時間; \"it TOOK\" needs かかった; 探す needs を; バイク is a MOTORbike (pushbike = 自転車); and never repeat the noun the の/やつ was there to replace.",
      anchorTitle: "The 19 homework sentences",
      anchorSentences: [
        "渋谷(しぶや)から六本木(ろっぽんぎ)まで歩(ある)いてどのくらいかかりますか。",
        "家(いえ)から学校(がっこう)までバスでどのくらいかかりますか。",
        "ここから駅(えき)までどのくらいかかりますか。",
        "この会社(かいしゃ)から中心街(ちゅうしんがい)まで自転車(じてんしゃ)でどのくらいかかりますか。",
        "駅(えき)から学校(がっこう)まで歩(ある)いてどのくらいかかりますか。",
        "この料理(りょうり)を作(つく)るのに三十分(さんじゅっぷん)かかる。",
        "この大(おお)きいラーメンを食(た)べるのに一時間(いちじかん)かかる。",
        "この本(ほん)を読(よ)むのに三日間(みっかかん)かかった。",
        "日本語(にほんご)の文法(ぶんぽう)が分(わ)かるのに一年(いちねん)かかった。",
        "この宿題(しゅくだい)を終(お)えるのに二時間(にじかん)かかる。",
        "駅(えき)まで歩(ある)いて行(い)くのに十分(じゅっぷん)かかる。",
        "サムは赤(あか)いペンを買(か)ったけど、僕(ぼく)は白(しろ)いやつを買(か)った。",
        "これはMサイズですか。もっと大(おお)きいのを探(さが)しています。",
        "これは僕(ぼく)のかばんで、あれはベンの。",
        "メアリーさんは英語(えいご)のガイドブックを持(も)ってきたけど、僕(ぼく)は日本語(にほんご)のやつを持(も)ってきた。",
        "メアリーさんは早(はや)い電車(でんしゃ)に乗(の)ったけど、僕(ぼく)は後(あと)のやつに乗(の)った。",
        "メアリーさんは熱(あつ)い飲(の)み物(もの)を飲(の)んだけど、僕(ぼく)は冷(つめ)たいやつを飲(の)んだ。",
        "メアリーさんは安(やす)い傘(かさ)を買(か)ったけど、僕(ぼく)は高(たか)いやつを買(か)った。",
        "メアリーさんは赤(あか)い手袋(てぶくろ)を買(か)ったけど、僕(ぼく)は白(しろ)いやつを買(か)った。",
      ],
      conjugationTable: [
        ["Japanese", "English", "Romaji"],
        ["1. Journeys: AからBまで + どのくらいかかりますか", "", ""],
        [
          "渋谷(しぶや)から六本木(ろっぽんぎ)まで歩(ある)いてどのくらいかかりますか。",
          "How long does it take to walk from Shibuya to Roppongi?",
          "Shibuya kara Roppongi made aruite dono kurai kakarimasu ka.",
        ],
        [
          "家(いえ)から学校(がっこう)までバスでどのくらいかかりますか。",
          "How long does it take from home to school by bus?",
          "Ie kara gakkō made basu de dono kurai kakarimasu ka.",
        ],
        [
          "ここから駅(えき)までどのくらいかかりますか。",
          "How long does it take to get from here to the station?",
          "Koko kara eki made dono kurai kakarimasu ka.",
        ],
        [
          "この会社(かいしゃ)から中心街(ちゅうしんがい)まで自転車(じてんしゃ)でどのくらいかかりますか。",
          "How long does it take from this office to the city centre by bike?",
          "Kono kaisha kara chūshingai made jitensha de dono kurai kakarimasu ka.",
        ],
        [
          "駅(えき)から学校(がっこう)まで歩(ある)いてどのくらいかかりますか。",
          "How long does it take from the station to the school on foot?",
          "Eki kara gakkō made aruite dono kurai kakarimasu ka.",
        ],
        ["Method: thing → で ・ action → te-form", "バスで, 自転車で, 電車で / 歩いて, 走って", "basu de, jitensha de / aruite, hashitte"],
        ["2. Actions: [dict. verb] + のに + [duration] + かかる", "", ""],
        [
          "この料理(りょうり)を作(つく)るのに三十分(さんじゅっぷん)かかる。",
          "It takes 30 minutes to make this dish.",
          "Kono ryōri o tsukuru no ni sanjuppun kakaru.",
        ],
        [
          "この大(おお)きいラーメンを食(た)べるのに一時間(いちじかん)かかる。",
          "It takes one hour to eat this big ramen.",
          "Kono ōkii rāmen o taberu no ni ichijikan kakaru.",
        ],
        [
          "この本(ほん)を読(よ)むのに三日間(みっかかん)かかった。",
          "It took me 3 days to read this book.",
          "Kono hon o yomu no ni mikkakan kakatta.",
        ],
        [
          "日本語(にほんご)の文法(ぶんぽう)が分(わ)かるのに一年(いちねん)かかった。",
          "It took me a year to understand Japanese grammar.",
          "Nihongo no bunpō ga wakaru no ni ichinen kakatta.",
        ],
        [
          "この宿題(しゅくだい)を終(お)えるのに二時間(にじかん)かかる。",
          "It takes two hours to finish this homework.",
          "Kono shukudai o oeru no ni nijikan kakaru.",
        ],
        [
          "駅(えき)まで歩(ある)いて行(い)くのに十分(じゅっぷん)かかる。",
          "It takes 10 minutes to walk to the station.",
          "Eki made aruite iku no ni juppun kakaru.",
        ],
        ["Duration, not clock time", "一時間 = one hour ・ 一時 = one o'clock", "ichijikan / ichiji"],
        ["3. の / やつ = \"one\"", "", ""],
        [
          "サムは赤(あか)いペンを買(か)ったけど、僕(ぼく)は白(しろ)いやつを買(か)った。",
          "Sam bought a red pen, but I bought a white one.",
          "Samu wa akai pen o katta kedo, boku wa shiroi yatsu o katta.",
        ],
        [
          "これはMサイズですか。もっと大(おお)きいのを探(さが)しています。",
          "Is this M size? I'm looking for a bigger one.",
          "Kore wa emu saizu desu ka. Motto ōkii no o sagashite imasu.",
        ],
        [
          "これは僕(ぼく)のかばんで、あれはベンの。",
          "This is my bag, and that is Ben's.",
          "Kore wa boku no kaban de, are wa Ben no.",
        ],
        [
          "メアリーさんは英語(えいご)のガイドブックを持(も)ってきたけど、僕(ぼく)は日本語(にほんご)のやつを持(も)ってきた。",
          "Mary brought an English guidebook, but I brought a Japanese one.",
          "Mearī-san wa eigo no gaidobukku o motte kita kedo, boku wa nihongo no yatsu o motte kita.",
        ],
        [
          "メアリーさんは早(はや)い電車(でんしゃ)に乗(の)ったけど、僕(ぼく)は後(あと)のやつに乗(の)った。",
          "Mary took an early train, but I took the later one.",
          "Mearī-san wa hayai densha ni notta kedo, boku wa ato no yatsu ni notta.",
        ],
        [
          "メアリーさんは熱(あつ)い飲(の)み物(もの)を飲(の)んだけど、僕(ぼく)は冷(つめ)たいやつを飲(の)んだ。",
          "Mary drank a hot drink, but I drank a cold one.",
          "Mearī-san wa atsui nomimono o nonda kedo, boku wa tsumetai yatsu o nonda.",
        ],
        [
          "メアリーさんは安(やす)い傘(かさ)を買(か)ったけど、僕(ぼく)は高(たか)いやつを買(か)った。",
          "Mary bought a cheap umbrella, but I bought an expensive one.",
          "Mearī-san wa yasui kasa o katta kedo, boku wa takai yatsu o katta.",
        ],
        [
          "メアリーさんは赤(あか)い手袋(てぶくろ)を買(か)ったけど、僕(ぼく)は白(しろ)いやつを買(か)った。",
          "Mary bought red gloves, and I bought white ones.",
          "Mearī-san wa akai tebukuro o katta kedo, boku wa shiroi yatsu o katta.",
        ],
        ["Register", "の = neutral, safe when polite ・ やつ = casual, rough", "no / yatsu"],
      ],
    },
    {
      type: "wrap",
      srsItems: [
        { front: "AからBまで + method + どのくらいかかりますか", back: "How long does it take from A to B? Thing as method → で. Action as method → te-form (歩いて).", type: "grammar" },
        { front: "[dictionary verb] + のに + [duration] + かかる", back: "How long it takes to complete an action. Verb NEVER conjugates before のに; tense lands on かかる/かかった.", type: "grammar" },
        { front: "一時 vs 一時間", back: "一時(いちじ) = one o'clock (point). 一時間(いちじかん) = one hour (duration). かかる wants 間.", type: "grammar" },
        { front: "分(わ)かる takes which particle?", back: "が, never を. 日本語の文法が分かる。Want を? Use 理解(りかい)する instead.", type: "grammar" },
        { front: "の vs やつ", back: "Both = \"one\". の is neutral and safe in polite speech; やつ is casual and rough. Both exist so you never repeat the noun.", type: "grammar" },
        { front: "バイク", back: "MOTORbike, not a pushbike. A bicycle is 自転車(じてんしゃ). Classic false friend.", type: "vocab" },
      ],
    },
  ],
};
