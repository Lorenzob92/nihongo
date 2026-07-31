import type { LessonContent } from "@/lib/types";

// Sensei homework, 31 July 2026: the script as one lesson.
//
// Two patterns:
//   1. [duration]ぶりに + verb  (doing something for the first time in [duration];
//      久しぶりに = for the first time in a long time)
//   2. た-form + り, listed, closed by する  (unordered "things like X and Y";
//      the tense/politeness lands on the final する only)
// The 16 sentences are the voice memo assignment: sensei told Lorenzo to record
// English + pause + Japanese and drill them as audio flashcards. The EN→JP deck
// here is that memo on screen. Sentences corrected to standard forms; the drill
// is built from his two actual mistakes this week (泳いでけど for 泳いだけど,
// and しました on a habitual weekend sentence).
//
// The verb half of the homework ("check verb list, 25-verb test next week") adds
// nothing new: the sheet is unchanged since 17 July, so test prep = the three
// cheatsheets in kakaru-no-yatsu (pink verbs, particles, full 114-row sheet).

export const HISASHIBURI_TARI: LessonContent = {
  slug: "hisashiburi-tari",
  title: "Homework: 〜ぶりに + たり〜たりする",
  titleJa: "「〜ぶりに」と「〜たり〜たりする」",
  section: "B",
  jlptLevel: "N4",
  estimatedMin: 20,
  steps: [
    {
      type: "hook",
      whyItMatters:
        "This week's script, and it is a good one: the two patterns that make you sound like you have a LIFE in Japanese.\n\n〜ぶりに is \"for the first time in [however long]\". Every reunion in every anime you watch runs on it: 久(ひさ)しぶり！ as a greeting, 十年(じゅうねん)ぶりに as an adverb. Frieren's entire premise is a 50-year ぶり.\n\nたり〜たりする is how you list what you get up to WITHOUT claiming an order: \"on my day off I do things like walking and cooking\". Not a timeline (that is the te-form's job), just a sample. The whole trick is that only the final する conjugates.\n\nAll 16 sentences are here as English-first cards, which is sensei's voice memo on screen: read the English, translate in your head during the pause, tap to reveal. The drill after them is built from the two mistakes you actually made this week.\n\nThe other half of the homework is the verb list, and there is nothing new in it: no fresh pink rows, same 114-row sheet. Next week's test is 25 verbs from that pool, so test prep is the three cheatsheets in the かかる lesson: the pink verbs, the particles, and the full sheet.",
      mediaExample: {
        quote: "久(ひさ)しぶりだな。",
        source: "The stock reunion line in basically every anime; Frieren opens on a 50-year version of it",
      },
    },
    {
      type: "concept",
      explanation:
        "[duration] + ぶりに + [verb] = doing something for the first time in [duration].\n\n一年(いちねん)ぶりにベースを練習(れんしゅう)しました。 = I practised bass for the first time in a year.\n\nぶり glues straight onto the duration: 一年ぶり, 五年(ごねん)ぶり, 十年(じゅうねん)ぶり, 三十年(さんじゅうねん)ぶり. \"Six months\" can be 六ヶ月(ろっかげつ)ぶり, but 半年(はんとし)ぶり (half a year) is what people actually say.\n\n久(ひさ)しぶりに = the vague version, \"for the first time in a long time\". You already know its greeting form: 久しぶり！ / お久(ひさ)しぶりです。 = long time no see. Same word, two jobs: alone it is a greeting, with に it is an adverb that sits in front of the action.\n\nThe nuance ぶり carries: the gap FELT long. You are not just stating an interval, you are flagging it as notable. That is why it pairs so naturally with 懐(なつ)かしい (nostalgic) and 楽(たの)しみ (looking forward to it).",
      formulaJa: "[一年(いちねん)・五年(ごねん)・久(ひさ)し...] + ぶりに + [verb]",
    },
    {
      type: "concept",
      explanation:
        "た-form + り, た-form + り, then する = \"I do things like X and Y\".\n\n昨日(きのう)、勉強(べんきょう)したり、ベースを練習(れんしゅう)したりしました。 = Yesterday I did things like studying and practising bass.\n\nBuild: take the plain past (泳(およ)いだ → 泳いだり, 食(た)べた → 食べたり, した → したり), list two or more, and close the list with する.\n\nThe rule that decides everything: THE TENSE LANDS ON THE FINAL する ONLY. します = habit. しました = a past occasion. しています = ongoing habit. したい = want to. するのが好(す)きです = I like doing. The listed verbs never move; they stay in たり form whatever the sentence means.\n\nWhat たり means that the te-form does not: NO order, NO complete list. 朝(あさ)ごはんを食(た)べて、学校(がっこう)に行(い)った is a timeline (ate, THEN went). 食べたり行ったりした is a sample: \"stuff like eating and going, among other things\".\n\nBonus use: alternating states. 雨(あめ)が降(ふ)ったり晴(は)れたり = raining on and off. Weather, moods, anything that flip-flops.",
      formulaJa: "[Vた]り、[Vた]り + する ← the tense lives here",
    },
    {
      type: "flashcards",
      title: "Say it in Japanese",
      subtitle: "English → Japanese (the voice memo, on screen)",
      items: [
        {
          front: "I will play tennis with my dad for the first time in a long time.",
          back: "久(ひさ)しぶりにお父(とう)さんとテニスをします。",
          romaji: "Hisashiburi ni otōsan to tenisu o shimasu.",
          note: "と = together with. Strictly, your OWN dad is 父(ちち) when telling others; お父さん is fine in casual speech.",
        },
        {
          front: "I went to the beach to surf for the first time in a long time, but it was very cold.",
          back: "久(ひさ)しぶりに海(うみ)にサーフィンしに行(い)ったけど、すごく寒(さむ)かった。",
          romaji: "Hisashiburi ni umi ni sāfin shi ni itta kedo, sugoku samukatta.",
          note: "しに行く = the purpose pattern (go in order to surf). 行った is plain past before けど.",
        },
        {
          front: "I'm going to eat my grandmum's curry for the first time in a long time, so I'm very excited.",
          back: "久(ひさ)しぶりにおばあちゃんのカレーを食(た)べるから、楽(たの)しみです。",
          romaji: "Hisashiburi ni obāchan no karē o taberu kara, tanoshimi desu.",
          note: "から = so/because. 楽しみです = I'm looking forward to it, the natural \"excited\" here.",
        },
        {
          front: "I'm going to take out my old pictures from the album for the first time in a long time.",
          back: "久(ひさ)しぶりにアルバムから古(ふる)い写真(しゃしん)を出(だ)します。",
          romaji: "Hisashiburi ni arubamu kara furui shashin o dashimasu.",
          note: "出す, last week's pink verb, earning its keep. Transitive, takes を.",
        },
        {
          front: "I practised bass for the first time in a year.",
          back: "一年(いちねん)ぶりにベースを練習(れんしゅう)しました。",
          romaji: "Ichinen buri ni bēsu o renshū shimashita.",
          note: "Sensei's model sentence. [duration] + ぶりに, then the action.",
        },
        {
          front: "I'm going to see friends from elementary school for the first time in 30 years.",
          back: "三十年(さんじゅうねん)ぶりに小学校(しょうがっこう)の友達(ともだち)に会(あ)いに行(い)きます。",
          romaji: "Sanjūnen buri ni shōgakkō no tomodachi ni ai ni ikimasu.",
          note: "会う takes に, and 会いに行く stacks the purpose pattern on top: go in order to meet.",
        },
        {
          front: "I will go to Japan in the autumn for the first time in 6 months.",
          back: "六ヶ月(ろっかげつ)ぶりに秋(あき)に日本(にほん)に行(い)きます。",
          romaji: "Rokkagetsu buri ni aki ni nihon ni ikimasu.",
          note: "Grammatical as is. What people actually say for six months: 半年(はんとし)ぶりに, half a year.",
        },
        {
          front: "I swam in the pool for the first time in 5 years, but it was really tough.",
          back: "五年(ごねん)ぶりにプールで泳(およ)いだけど、大変(たいへん)すぎた。",
          romaji: "Gonen buri ni pūru de oyoida kedo, taihen sugita.",
          note: "YOUR FIX 1: 泳いだけど, never 泳いでけど. けど follows a finished plain-past clause, not the te-form. Also: physically tough = 大変/きつい; 難(むずか)しい is for puzzles and grammar.",
        },
        {
          front: "I met my old friends for the first time in 10 years, and it was really nostalgic.",
          back: "十年(じゅうねん)ぶりに昔(むかし)の友達(ともだち)に会(あ)って、めっちゃ懐(なつ)かしかったです。",
          romaji: "Jūnen buri ni mukashi no tomodachi ni atte, meccha natsukashikatta desu.",
          note: "会って chains the meeting to the feeling. 懐かしい = nostalgic, the emotion ぶり exists for. めっちゃ is casual.",
        },
        {
          front: "On my day off, I go for a walk and cook.",
          back: "休(やす)みの日(ひ)は散歩(さんぽ)したり、料理(りょうり)したりします。",
          romaji: "Yasumi no hi wa sanpo shitari, ryōri shitari shimasu.",
          note: "散歩する = go for a stroll; 歩(ある)く is just the walking itself. Habit, so the final する is します.",
        },
        {
          front: "I watch movies and read books.",
          back: "映画(えいが)を見(み)たり、本(ほん)を読(よ)んだりしています。",
          romaji: "Eiga o mitari, hon o yondari shite imasu.",
          note: "しています = ongoing habit (\"these days I..\"). Plain します is fine too.",
        },
        {
          front: "I go to cafes and go shopping with friends on weekends.",
          back: "週末(しゅうまつ)は友達(ともだち)とカフェに行(い)ったり、買(か)い物(もの)したりします。",
          romaji: "Shūmatsu wa tomodachi to kafe ni ittari, kaimono shitari shimasu.",
          note: "YOUR FIX 2: します, not しました. \"I go\" is a habit, so the final する stays present. しました would mean one specific past weekend.",
        },
        {
          front: "When I was a child, I used to play in the park and ride my bike.",
          back: "子供(こども)のとき、よく公園(こうえん)で遊(あそ)んだり、自転車(じてんしゃ)に乗(の)ったりしました。",
          romaji: "Kodomo no toki, yoku kōen de asondari, jitensha ni nottari shimashita.",
          note: "よく + しました = used to. 乗る takes に. And it is 自転車, not バイク (that is a motorbike).",
        },
        {
          front: "Yesterday it was raining and sunny, the weather was strange.",
          back: "昨日(きのう)は雨(あめ)が降(ふ)ったり晴(は)れたりして、天気(てんき)が変(へん)でした。",
          romaji: "Kinō wa ame ga futtari haretari shite, tenki ga hen deshita.",
          note: "たり for alternating states: raining on and off. して (te-form of する) links the flip-flop to the verdict.",
        },
        {
          front: "In Japan, I want to take the shinkansen, eat sushi, and take pictures of temples.",
          back: "日本(にほん)で、新幹線(しんかんせん)に乗(の)ったり、寿司(すし)を食(た)べたり、お寺(てら)の写真(しゃしん)を撮(と)ったりしたい。",
          romaji: "Nihon de, shinkansen ni nottari, sushi o tabetari, otera no shashin o tottari shitai.",
          note: "Three たり is fine. The want conjugates する → したい, never the listed verbs. 撮る = the photo toru.",
        },
        {
          front: "I like playing football, playing video games, and studying languages.",
          back: "サッカーをしたり、ゲームをしたり、言語(げんご)を勉強(べんきょう)したりするのが好(す)きです。",
          romaji: "Sakkā o shitari, gēmu o shitari, gengo o benkyō shitari suru no ga suki desu.",
          note: "するの turns the whole list into a thing; のが好き = like doing. Dropping the を (サッカーしたり) is fine in speech.",
        },
      ],
    },
    {
      type: "drill",
      items: [
        {
          type: "multipleChoice",
          sentence: "五年(ごねん)ぶりにプールで＿＿けど、大変(たいへん)すぎた。",
          en: "I swam in the pool for the first time in 5 years, but it was really tough.",
          options: ["泳(およ)いで", "泳(およ)いだ", "泳(およ)ぐ", "泳(およ)ぎ"],
          correctIndex: 1,
          explanation:
            "Your mistake this week: 泳いでけど. けど connects two finished statements, so the verb before it must be a full plain form: 泳いだけど. The te-form 泳いで leaves the clause hanging mid-air; it links actions, it cannot carry a \"but\".",
        },
        {
          type: "multipleChoice",
          sentence: "週末(しゅうまつ)は友達(ともだち)とカフェに行(い)ったり、買(か)い物(もの)したり＿＿。",
          en: "I go to cafes and go shopping with friends on weekends.",
          options: ["します", "しました", "して", "する"],
          correctIndex: 0,
          explanation:
            "Your other mistake: しました. The English says \"I GO on weekends\", a habit, so the final する stays present: します. しました would pin it to one past weekend. The tense of the whole sentence lives on that last する, nowhere else.",
        },
        {
          type: "cloze",
          sentence: "昨日(きのう)、勉強(べんきょう)したり、ベースを練習(れんしゅう)したり{{}}。",
          answer: "しました",
          en: "Yesterday I did things like studying and practising bass.",
          acceptableAnswers: ["しました", "した"],
          hint: "Sensei's own example sentence. 昨日 = a past occasion, and only one word in the sentence is allowed to show it.",
        },
        {
          type: "multipleChoice",
          sentence: "日本(にほん)で、新幹線(しんかんせん)に乗(の)ったり、寿司(すし)を食(た)べたり＿＿。",
          en: "In Japan, I want to ride the shinkansen and eat sushi.",
          options: ["乗(の)りたい", "食(た)べたい", "したい", "します"],
          correctIndex: 2,
          explanation:
            "The want belongs to the whole list, so it conjugates the closing する: したい. 乗りたい or 食べたい would break the たり list and claim you only want that one thing.",
        },
        {
          type: "cloze",
          sentence: "三十年(さんじゅうねん)ぶりに小学校(しょうがっこう)の友達(ともだち)に会(あ)い{{}}行(い)きます。",
          answer: "に",
          en: "I'm going to see friends from elementary school for the first time in 30 years.",
          hint: "Verb stem + ? + 行く = go in order to do it. Same pattern as サーフィンしに行く.",
        },
        {
          type: "multipleChoice",
          sentence: "五年(ごねん)ぶりに泳(およ)いだけど、＿＿すぎた。",
          en: "I swam for the first time in 5 years, but it was too tough.",
          options: ["難(むずか)し", "大変(たいへん)", "高(たか)"],
          correctIndex: 1,
          explanation:
            "難しい is for things that are mentally hard: grammar, puzzles, kanji. A body struggling through a swim is 大変 or きつい. Your version (むずかしすぎた) said the pool was intellectually challenging.",
        },
      ],
    },
    {
      type: "flashcards",
      title: "Read it back",
      subtitle: "Japanese → English",
      items: [
        {
          front: "久(ひさ)しぶりにお父(とう)さんとテニスをします。",
          back: "I will play tennis with my dad for the first time in a long time.",
          romaji: "Hisashiburi ni otōsan to tenisu o shimasu.",
        },
        {
          front: "久(ひさ)しぶりに海(うみ)にサーフィンしに行(い)ったけど、すごく寒(さむ)かった。",
          back: "I went to the beach to surf for the first time in a long time, but it was very cold.",
          romaji: "Hisashiburi ni umi ni sāfin shi ni itta kedo, sugoku samukatta.",
        },
        {
          front: "久(ひさ)しぶりにおばあちゃんのカレーを食(た)べるから、楽(たの)しみです。",
          back: "I'm going to eat my grandmum's curry for the first time in a long time, so I'm very excited.",
          romaji: "Hisashiburi ni obāchan no karē o taberu kara, tanoshimi desu.",
        },
        {
          front: "久(ひさ)しぶりにアルバムから古(ふる)い写真(しゃしん)を出(だ)します。",
          back: "I'm going to take out my old pictures from the album for the first time in a long time.",
          romaji: "Hisashiburi ni arubamu kara furui shashin o dashimasu.",
        },
        {
          front: "一年(いちねん)ぶりにベースを練習(れんしゅう)しました。",
          back: "I practised bass for the first time in a year.",
          romaji: "Ichinen buri ni bēsu o renshū shimashita.",
        },
        {
          front: "三十年(さんじゅうねん)ぶりに小学校(しょうがっこう)の友達(ともだち)に会(あ)いに行(い)きます。",
          back: "I'm going to see friends from elementary school for the first time in 30 years.",
          romaji: "Sanjūnen buri ni shōgakkō no tomodachi ni ai ni ikimasu.",
        },
        {
          front: "六ヶ月(ろっかげつ)ぶりに秋(あき)に日本(にほん)に行(い)きます。",
          back: "I will go to Japan in the autumn for the first time in 6 months.",
          romaji: "Rokkagetsu buri ni aki ni nihon ni ikimasu.",
        },
        {
          front: "五年(ごねん)ぶりにプールで泳(およ)いだけど、大変(たいへん)すぎた。",
          back: "I swam in the pool for the first time in 5 years, but it was really tough.",
          romaji: "Gonen buri ni pūru de oyoida kedo, taihen sugita.",
        },
        {
          front: "十年(じゅうねん)ぶりに昔(むかし)の友達(ともだち)に会(あ)って、めっちゃ懐(なつ)かしかったです。",
          back: "I met my old friends for the first time in 10 years, and it was really nostalgic.",
          romaji: "Jūnen buri ni mukashi no tomodachi ni atte, meccha natsukashikatta desu.",
        },
        {
          front: "休(やす)みの日(ひ)は散歩(さんぽ)したり、料理(りょうり)したりします。",
          back: "On my day off, I go for a walk and cook.",
          romaji: "Yasumi no hi wa sanpo shitari, ryōri shitari shimasu.",
        },
        {
          front: "映画(えいが)を見(み)たり、本(ほん)を読(よ)んだりしています。",
          back: "I watch movies and read books.",
          romaji: "Eiga o mitari, hon o yondari shite imasu.",
        },
        {
          front: "週末(しゅうまつ)は友達(ともだち)とカフェに行(い)ったり、買(か)い物(もの)したりします。",
          back: "I go to cafes and go shopping with friends on weekends.",
          romaji: "Shūmatsu wa tomodachi to kafe ni ittari, kaimono shitari shimasu.",
        },
        {
          front: "子供(こども)のとき、よく公園(こうえん)で遊(あそ)んだり、自転車(じてんしゃ)に乗(の)ったりしました。",
          back: "When I was a child, I used to play in the park and ride my bike.",
          romaji: "Kodomo no toki, yoku kōen de asondari, jitensha ni nottari shimashita.",
        },
        {
          front: "昨日(きのう)は雨(あめ)が降(ふ)ったり晴(は)れたりして、天気(てんき)が変(へん)でした。",
          back: "Yesterday it was raining and sunny, the weather was strange.",
          romaji: "Kinō wa ame ga futtari haretari shite, tenki ga hen deshita.",
        },
        {
          front: "日本(にほん)で、新幹線(しんかんせん)に乗(の)ったり、寿司(すし)を食(た)べたり、お寺(てら)の写真(しゃしん)を撮(と)ったりしたい。",
          back: "In Japan, I want to take the shinkansen, eat sushi, and take pictures of temples.",
          romaji: "Nihon de, shinkansen ni nottari, sushi o tabetari, otera no shashin o tottari shitai.",
        },
        {
          front: "サッカーをしたり、ゲームをしたり、言語(げんご)を勉強(べんきょう)したりするのが好(す)きです。",
          back: "I like playing football, playing video games, and studying languages.",
          romaji: "Sakkā o shitari, gēmu o shitari, gengo o benkyō shitari suru no ga suki desu.",
        },
      ],
    },
    {
      type: "cheatsheet",
      summary:
        "HOMEWORK CHEATSHEET (31 July). First time in: [duration] + ぶりに + verb (一年ぶりに, 五年ぶりに, 三十年ぶりに); 久しぶりに for a vague long gap, and bare 久しぶり！ is the greeting. Six months is 半年ぶり in real speech. Listing: た-form + り, two or more, closed by する, and THE TENSE LANDS ON THAT FINAL する ONLY: します habit, しました past occasion, しています ongoing, したい want, するのが好き like. たり = unordered sample, not a timeline; it also covers alternating states (降ったり晴れたり).\n\nYour two traps this week: 泳いだけど, never 泳いでけど (けど wants a finished plain-past clause, not the te-form), and 週末は…します, not しました (the English \"I go\" marks a habit; しました pins it to one past weekend).\n\nNext week's test: 25 verbs from sensei's sheet, no new pink rows this week. Revise the three cheatsheets in the かかる lesson: the 14 pink verbs, the particle traps, and the full 114-row sheet.",
      anchorTitle: "The 16 homework sentences",
      anchorSentences: [
        "久(ひさ)しぶりにお父(とう)さんとテニスをします。",
        "久(ひさ)しぶりに海(うみ)にサーフィンしに行(い)ったけど、すごく寒(さむ)かった。",
        "久(ひさ)しぶりにおばあちゃんのカレーを食(た)べるから、楽(たの)しみです。",
        "久(ひさ)しぶりにアルバムから古(ふる)い写真(しゃしん)を出(だ)します。",
        "一年(いちねん)ぶりにベースを練習(れんしゅう)しました。",
        "三十年(さんじゅうねん)ぶりに小学校(しょうがっこう)の友達(ともだち)に会(あ)いに行(い)きます。",
        "六ヶ月(ろっかげつ)ぶりに秋(あき)に日本(にほん)に行(い)きます。",
        "五年(ごねん)ぶりにプールで泳(およ)いだけど、大変(たいへん)すぎた。",
        "十年(じゅうねん)ぶりに昔(むかし)の友達(ともだち)に会(あ)って、めっちゃ懐(なつ)かしかったです。",
        "休(やす)みの日(ひ)は散歩(さんぽ)したり、料理(りょうり)したりします。",
        "映画(えいが)を見(み)たり、本(ほん)を読(よ)んだりしています。",
        "週末(しゅうまつ)は友達(ともだち)とカフェに行(い)ったり、買(か)い物(もの)したりします。",
        "子供(こども)のとき、よく公園(こうえん)で遊(あそ)んだり、自転車(じてんしゃ)に乗(の)ったりしました。",
        "昨日(きのう)は雨(あめ)が降(ふ)ったり晴(は)れたりして、天気(てんき)が変(へん)でした。",
        "日本(にほん)で、新幹線(しんかんせん)に乗(の)ったり、寿司(すし)を食(た)べたり、お寺(てら)の写真(しゃしん)を撮(と)ったりしたい。",
        "サッカーをしたり、ゲームをしたり、言語(げんご)を勉強(べんきょう)したりするのが好(す)きです。",
      ],
      conjugationTable: [
        ["Japanese", "English", "Romaji"],
        ["1. [duration]ぶりに = for the first time in ...", "", ""],
        [
          "久(ひさ)しぶりにお父(とう)さんとテニスをします。",
          "I will play tennis with my dad for the first time in a long time.",
          "Hisashiburi ni otōsan to tenisu o shimasu.",
        ],
        [
          "久(ひさ)しぶりに海(うみ)にサーフィンしに行(い)ったけど、すごく寒(さむ)かった。",
          "I went to the beach to surf for the first time in a long time, but it was very cold.",
          "Hisashiburi ni umi ni sāfin shi ni itta kedo, sugoku samukatta.",
        ],
        [
          "久(ひさ)しぶりにおばあちゃんのカレーを食(た)べるから、楽(たの)しみです。",
          "I'm going to eat my grandmum's curry for the first time in a long time, so I'm very excited.",
          "Hisashiburi ni obāchan no karē o taberu kara, tanoshimi desu.",
        ],
        [
          "久(ひさ)しぶりにアルバムから古(ふる)い写真(しゃしん)を出(だ)します。",
          "I'm going to take out my old pictures from the album for the first time in a long time.",
          "Hisashiburi ni arubamu kara furui shashin o dashimasu.",
        ],
        [
          "一年(いちねん)ぶりにベースを練習(れんしゅう)しました。",
          "I practised bass for the first time in a year.",
          "Ichinen buri ni bēsu o renshū shimashita.",
        ],
        [
          "三十年(さんじゅうねん)ぶりに小学校(しょうがっこう)の友達(ともだち)に会(あ)いに行(い)きます。",
          "I'm going to see friends from elementary school for the first time in 30 years.",
          "Sanjūnen buri ni shōgakkō no tomodachi ni ai ni ikimasu.",
        ],
        [
          "六ヶ月(ろっかげつ)ぶりに秋(あき)に日本(にほん)に行(い)きます。",
          "I will go to Japan in the autumn for the first time in 6 months.",
          "Rokkagetsu buri ni aki ni nihon ni ikimasu.",
        ],
        [
          "五年(ごねん)ぶりにプールで泳(およ)いだけど、大変(たいへん)すぎた。",
          "I swam in the pool for the first time in 5 years, but it was really tough.",
          "Gonen buri ni pūru de oyoida kedo, taihen sugita.",
        ],
        [
          "十年(じゅうねん)ぶりに昔(むかし)の友達(ともだち)に会(あ)って、めっちゃ懐(なつ)かしかったです。",
          "I met my old friends for the first time in 10 years, and it was really nostalgic.",
          "Jūnen buri ni mukashi no tomodachi ni atte, meccha natsukashikatta desu.",
        ],
        [
          "ぶり quick forms",
          "一年ぶり ・ 五年ぶり ・ 十年ぶり ・ 半年ぶり (six months) ・ 久しぶり (ages)",
          "ichinen buri / gonen buri / jūnen buri / hantoshi buri / hisashiburi",
        ],
        ["2. たり〜たりする = listing verbs, no timeline", "", ""],
        [
          "休(やす)みの日(ひ)は散歩(さんぽ)したり、料理(りょうり)したりします。",
          "On my day off, I go for a walk and cook.",
          "Yasumi no hi wa sanpo shitari, ryōri shitari shimasu.",
        ],
        [
          "映画(えいが)を見(み)たり、本(ほん)を読(よ)んだりしています。",
          "I watch movies and read books.",
          "Eiga o mitari, hon o yondari shite imasu.",
        ],
        [
          "週末(しゅうまつ)は友達(ともだち)とカフェに行(い)ったり、買(か)い物(もの)したりします。",
          "I go to cafes and go shopping with friends on weekends.",
          "Shūmatsu wa tomodachi to kafe ni ittari, kaimono shitari shimasu.",
        ],
        [
          "子供(こども)のとき、よく公園(こうえん)で遊(あそ)んだり、自転車(じてんしゃ)に乗(の)ったりしました。",
          "When I was a child, I used to play in the park and ride my bike.",
          "Kodomo no toki, yoku kōen de asondari, jitensha ni nottari shimashita.",
        ],
        [
          "昨日(きのう)は雨(あめ)が降(ふ)ったり晴(は)れたりして、天気(てんき)が変(へん)でした。",
          "Yesterday it was raining and sunny, the weather was strange.",
          "Kinō wa ame ga futtari haretari shite, tenki ga hen deshita.",
        ],
        [
          "日本(にほん)で、新幹線(しんかんせん)に乗(の)ったり、寿司(すし)を食(た)べたり、お寺(てら)の写真(しゃしん)を撮(と)ったりしたい。",
          "In Japan, I want to take the shinkansen, eat sushi, and take pictures of temples.",
          "Nihon de, shinkansen ni nottari, sushi o tabetari, otera no shashin o tottari shitai.",
        ],
        [
          "サッカーをしたり、ゲームをしたり、言語(げんご)を勉強(べんきょう)したりするのが好(す)きです。",
          "I like playing football, playing video games, and studying languages.",
          "Sakkā o shitari, gēmu o shitari, gengo o benkyō shitari suru no ga suki desu.",
        ],
        [
          "Tense lands on the final する only",
          "します habit ・ しました past ・ しています ongoing ・ したい want ・ するのが好き like",
          "shimasu / shimashita / shite imasu / shitai / suru no ga suki",
        ],
      ],
    },
    {
      type: "wrap",
      srsItems: [
        { front: "[duration] + ぶりに", back: "For the first time in [duration]. 一年ぶりに練習した = practised for the first time in a year.", type: "grammar" },
        { front: "久(ひさ)しぶり vs 久しぶりに", back: "Alone = the greeting (long time no see). With に = the adverb: for the first time in a long time.", type: "grammar" },
        { front: "半年(はんとし)ぶり", back: "For the first time in six months. What people actually say instead of 六ヶ月ぶり.", type: "vocab" },
        { front: "たり〜たりする", back: "Unordered list of example actions: た-form + り, closed by する. \"Things like X and Y\", not a timeline.", type: "grammar" },
        { front: "Where does the tense go in たり〜たりする?", back: "On the final する ONLY: します/しました/しています/したい/するのが好き. The listed verbs never move.", type: "grammar" },
        { front: "泳(およ)いでけど?", back: "No: 泳いだけど. けど follows a finished plain clause; the te-form cannot carry a \"but\".", type: "grammar" },
        { front: "週末(しゅうまつ)は…したりします vs しました", back: "します = habit (\"I go on weekends\"). しました = one specific past weekend. Match the English tense.", type: "grammar" },
        { front: "難(むずか)しい vs 大変(たいへん)/きつい", back: "難しい = mentally hard (grammar, puzzles). 大変/きつい = physically tough (a swim after 5 years).", type: "vocab" },
        { front: "雨(あめ)が降(ふ)ったり晴(は)れたり", back: "たり for alternating states: raining on and off. Works for weather, moods, anything that flip-flops.", type: "grammar" },
        { front: "懐(なつ)かしい", back: "Nostalgic, dear old memories. The feeling ぶり sentences exist for: めっちゃ懐かしかった。", type: "vocab" },
      ],
    },
  ],
};
