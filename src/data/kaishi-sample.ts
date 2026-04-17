// 50 cards from Kaishi 1.5k. Hand-curated subset for V0 demo only;
// Phase 2 will load the full deck from /mirrors/Kaishi/ via a build script.
//
// Source: https://github.com/donkuri/Kaishi (Donkuri's Anki deck for Japanese learners)

export type KaishiCard = {
  id: number;
  word: string;
  reading: string;
  meaning: string;
  sentenceJa: string;
  sentenceEn: string;
};

export const KAISHI_SAMPLE: KaishiCard[] = [
  { id: 1, word: "人", reading: "ひと", meaning: "person", sentenceJa: "あの人は誰ですか。", sentenceEn: "Who is that person?" },
  { id: 2, word: "何", reading: "なに", meaning: "what", sentenceJa: "これは何ですか。", sentenceEn: "What is this?" },
  { id: 3, word: "今", reading: "いま", meaning: "now", sentenceJa: "今、何時ですか。", sentenceEn: "What time is it now?" },
  { id: 4, word: "日", reading: "ひ", meaning: "day, sun", sentenceJa: "いい日でしたね。", sentenceEn: "It was a nice day." },
  { id: 5, word: "時間", reading: "じかん", meaning: "time", sentenceJa: "時間がない。", sentenceEn: "There's no time." },
  { id: 6, word: "年", reading: "とし", meaning: "year, age", sentenceJa: "今年は楽しかった。", sentenceEn: "This year was fun." },
  { id: 7, word: "学校", reading: "がっこう", meaning: "school", sentenceJa: "学校に行きます。", sentenceEn: "I'm going to school." },
  { id: 8, word: "先生", reading: "せんせい", meaning: "teacher", sentenceJa: "先生は優しいです。", sentenceEn: "The teacher is kind." },
  { id: 9, word: "学生", reading: "がくせい", meaning: "student", sentenceJa: "私は学生です。", sentenceEn: "I am a student." },
  { id: 10, word: "本", reading: "ほん", meaning: "book", sentenceJa: "本を読みます。", sentenceEn: "I read a book." },
  { id: 11, word: "車", reading: "くるま", meaning: "car", sentenceJa: "車で行きます。", sentenceEn: "I'll go by car." },
  { id: 12, word: "家", reading: "いえ", meaning: "house", sentenceJa: "家に帰ります。", sentenceEn: "I'm going home." },
  { id: 13, word: "犬", reading: "いぬ", meaning: "dog", sentenceJa: "犬がかわいい。", sentenceEn: "The dog is cute." },
  { id: 14, word: "猫", reading: "ねこ", meaning: "cat", sentenceJa: "猫が好きです。", sentenceEn: "I like cats." },
  { id: 15, word: "水", reading: "みず", meaning: "water", sentenceJa: "水を飲みます。", sentenceEn: "I drink water." },
  { id: 16, word: "食べる", reading: "たべる", meaning: "to eat", sentenceJa: "ご飯を食べます。", sentenceEn: "I eat rice." },
  { id: 17, word: "飲む", reading: "のむ", meaning: "to drink", sentenceJa: "コーヒーを飲む。", sentenceEn: "I drink coffee." },
  { id: 18, word: "見る", reading: "みる", meaning: "to see, watch", sentenceJa: "映画を見ます。", sentenceEn: "I watch a movie." },
  { id: 19, word: "聞く", reading: "きく", meaning: "to listen, ask", sentenceJa: "音楽を聞きます。", sentenceEn: "I listen to music." },
  { id: 20, word: "話す", reading: "はなす", meaning: "to speak", sentenceJa: "日本語を話します。", sentenceEn: "I speak Japanese." },
  { id: 21, word: "読む", reading: "よむ", meaning: "to read", sentenceJa: "新聞を読む。", sentenceEn: "I read the newspaper." },
  { id: 22, word: "書く", reading: "かく", meaning: "to write", sentenceJa: "手紙を書きます。", sentenceEn: "I write a letter." },
  { id: 23, word: "行く", reading: "いく", meaning: "to go", sentenceJa: "東京に行きます。", sentenceEn: "I go to Tokyo." },
  { id: 24, word: "来る", reading: "くる", meaning: "to come", sentenceJa: "明日来ます。", sentenceEn: "I'll come tomorrow." },
  { id: 25, word: "する", reading: "する", meaning: "to do", sentenceJa: "宿題をします。", sentenceEn: "I do my homework." },
  { id: 26, word: "買う", reading: "かう", meaning: "to buy", sentenceJa: "本を買いました。", sentenceEn: "I bought a book." },
  { id: 27, word: "売る", reading: "うる", meaning: "to sell", sentenceJa: "車を売ります。", sentenceEn: "I'll sell the car." },
  { id: 28, word: "作る", reading: "つくる", meaning: "to make", sentenceJa: "晩ご飯を作る。", sentenceEn: "I make dinner." },
  { id: 29, word: "知る", reading: "しる", meaning: "to know", sentenceJa: "答えを知っています。", sentenceEn: "I know the answer." },
  { id: 30, word: "思う", reading: "おもう", meaning: "to think", sentenceJa: "そう思います。", sentenceEn: "I think so." },
  { id: 31, word: "好き", reading: "すき", meaning: "liked, fond of", sentenceJa: "コーヒーが好きです。", sentenceEn: "I like coffee." },
  { id: 32, word: "嫌い", reading: "きらい", meaning: "disliked", sentenceJa: "嫌いな食べ物はない。", sentenceEn: "There's no food I dislike." },
  { id: 33, word: "高い", reading: "たかい", meaning: "expensive, tall", sentenceJa: "この店は高い。", sentenceEn: "This shop is expensive." },
  { id: 34, word: "安い", reading: "やすい", meaning: "cheap", sentenceJa: "この本は安い。", sentenceEn: "This book is cheap." },
  { id: 35, word: "大きい", reading: "おおきい", meaning: "big", sentenceJa: "大きい犬ですね。", sentenceEn: "That's a big dog." },
  { id: 36, word: "小さい", reading: "ちいさい", meaning: "small", sentenceJa: "小さい部屋です。", sentenceEn: "It's a small room." },
  { id: 37, word: "新しい", reading: "あたらしい", meaning: "new", sentenceJa: "新しい車を買った。", sentenceEn: "I bought a new car." },
  { id: 38, word: "古い", reading: "ふるい", meaning: "old", sentenceJa: "古い家に住んでいる。", sentenceEn: "I live in an old house." },
  { id: 39, word: "良い", reading: "いい", meaning: "good", sentenceJa: "良い天気ですね。", sentenceEn: "Nice weather, isn't it?" },
  { id: 40, word: "悪い", reading: "わるい", meaning: "bad", sentenceJa: "悪いことをしました。", sentenceEn: "I did a bad thing." },
  { id: 41, word: "静か", reading: "しずか", meaning: "quiet", sentenceJa: "静かな町です。", sentenceEn: "It's a quiet town." },
  { id: 42, word: "綺麗", reading: "きれい", meaning: "pretty, clean", sentenceJa: "綺麗な花ですね。", sentenceEn: "What a pretty flower." },
  { id: 43, word: "便利", reading: "べんり", meaning: "convenient", sentenceJa: "便利なアプリです。", sentenceEn: "It's a convenient app." },
  { id: 44, word: "大切", reading: "たいせつ", meaning: "important", sentenceJa: "家族は大切です。", sentenceEn: "Family is important." },
  { id: 45, word: "元気", reading: "げんき", meaning: "energetic, well", sentenceJa: "元気ですか。", sentenceEn: "How are you?" },
  { id: 46, word: "上手", reading: "じょうず", meaning: "skilled at", sentenceJa: "日本語が上手ですね。", sentenceEn: "Your Japanese is good." },
  { id: 47, word: "下手", reading: "へた", meaning: "bad at", sentenceJa: "歌が下手です。", sentenceEn: "I'm bad at singing." },
  { id: 48, word: "有名", reading: "ゆうめい", meaning: "famous", sentenceJa: "有名な俳優です。", sentenceEn: "He's a famous actor." },
  { id: 49, word: "親切", reading: "しんせつ", meaning: "kind", sentenceJa: "親切な人です。", sentenceEn: "She's a kind person." },
  { id: 50, word: "簡単", reading: "かんたん", meaning: "simple, easy", sentenceJa: "簡単な問題です。", sentenceEn: "It's a simple problem." },
];
