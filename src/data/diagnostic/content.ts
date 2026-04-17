// Diagnostic placement test content
// Target user: Lorenzo, rusty intermediate (high-N5 / low-N4)
// Item bank tuned to the archive audit (research/01-archive-audit.md)
// Generated: 2026-04-17

export type DiagnosticSection = 'kanji' | 'vocab' | 'grammar' | 'listening';

export type ItemDifficulty =
  | 'N5'
  | 'N4-low'
  | 'N4-high'
  | 'N3-low'
  | 'N3-high'
  | 'N2';

export type DiagnosticItem =
  | {
      id: string;
      section: 'kanji';
      difficulty: ItemDifficulty;
      type: 'reading';
      kanji: string;
      options: string[];
      correctIndex: number;
      meaning: string;
    }
  | {
      id: string;
      section: 'kanji';
      difficulty: ItemDifficulty;
      type: 'meaning';
      kanji: string;
      options: string[];
      correctIndex: number;
    }
  | {
      id: string;
      section: 'vocab';
      difficulty: ItemDifficulty;
      type: 'jp-to-en';
      word: string;
      options: string[];
      correctIndex: number;
    }
  | {
      id: string;
      section: 'vocab';
      difficulty: ItemDifficulty;
      type: 'en-to-jp';
      meaning: string;
      options: string[];
      correctIndex: number;
    }
  | {
      id: string;
      section: 'grammar';
      difficulty: ItemDifficulty;
      type: 'cloze';
      sentence: string;
      blank: string;
      options: string[];
      correctIndex: number;
      explanation: string;
    }
  | {
      id: string;
      section: 'grammar';
      difficulty: ItemDifficulty;
      type: 'choice';
      prompt: string;
      options: string[];
      correctIndex: number;
      explanation: string;
    }
  | {
      id: string;
      section: 'listening';
      difficulty: ItemDifficulty;
      type: 'comprehension';
      audioUrl: string;
      transcript: string;
      question: string;
      options: string[];
      correctIndex: number;
    };

export const items: DiagnosticItem[] = [
  // ============================================================
  // KANJI (20 items)
  // ============================================================
  // N5 (4 items)
  {
    id: 'k-001',
    section: 'kanji',
    difficulty: 'N5',
    type: 'reading',
    kanji: '今日',
    options: ['きょう', 'こんにち', 'いまひ', 'きょうじつ'],
    correctIndex: 0,
    meaning: 'today',
  },
  {
    id: 'k-002',
    section: 'kanji',
    difficulty: 'N5',
    type: 'meaning',
    kanji: '食べる',
    options: ['to drink', 'to eat', 'to make', 'to see'],
    correctIndex: 1,
  },
  {
    id: 'k-003',
    section: 'kanji',
    difficulty: 'N5',
    type: 'reading',
    kanji: '学校',
    options: ['がくしゃ', 'がくえん', 'がっこう', 'だいがく'],
    correctIndex: 2,
    meaning: 'school',
  },
  {
    id: 'k-004',
    section: 'kanji',
    difficulty: 'N5',
    type: 'meaning',
    kanji: '時間',
    options: ['minute', 'hour', 'time / duration', 'clock'],
    correctIndex: 2,
  },

  // N4-low (4 items, several touching audit gaps: 兄, 弟, 妹, 体)
  {
    id: 'k-005',
    section: 'kanji',
    difficulty: 'N4-low',
    type: 'reading',
    kanji: '兄',
    options: ['あに', 'おとうと', 'あね', 'いもうと'],
    correctIndex: 0,
    meaning: 'older brother (humble)',
  },
  {
    id: 'k-006',
    section: 'kanji',
    difficulty: 'N4-low',
    type: 'reading',
    kanji: '妹',
    options: ['あね', 'いもうと', 'むすめ', 'おば'],
    correctIndex: 1,
    meaning: 'younger sister (humble)',
  },
  {
    id: 'k-007',
    section: 'kanji',
    difficulty: 'N4-low',
    type: 'meaning',
    kanji: '体',
    options: ['mind', 'body', 'face', 'heart'],
    correctIndex: 1,
  },
  {
    id: 'k-008',
    section: 'kanji',
    difficulty: 'N4-low',
    type: 'reading',
    kanji: '雨',
    options: ['あめ', 'ゆき', 'くも', 'ひ'],
    correctIndex: 0,
    meaning: 'rain',
  },

  // N4-high (4 items: tougher mid-band kanji including audit-flagged gaps)
  {
    id: 'k-009',
    section: 'kanji',
    difficulty: 'N4-high',
    type: 'reading',
    kanji: '病院',
    options: ['びょういん', 'びよういん', 'びょうき', 'いしゃ'],
    correctIndex: 0,
    meaning: 'hospital',
  },
  {
    id: 'k-010',
    section: 'kanji',
    difficulty: 'N4-high',
    type: 'reading',
    kanji: '通る',
    options: ['とおる', 'かよる', 'はしる', 'まわる'],
    correctIndex: 0,
    meaning: 'to pass through',
  },
  {
    id: 'k-011',
    section: 'kanji',
    difficulty: 'N4-high',
    type: 'meaning',
    kanji: '世界',
    options: ['society', 'world', 'century', 'continent'],
    correctIndex: 1,
  },
  {
    id: 'k-012',
    section: 'kanji',
    difficulty: 'N4-high',
    type: 'reading',
    kanji: '夕方',
    options: ['ゆうがた', 'ゆうかた', 'ゆうほう', 'よるがた'],
    correctIndex: 0,
    meaning: 'evening',
  },

  // N3-low (4 items)
  {
    id: 'k-013',
    section: 'kanji',
    difficulty: 'N3-low',
    type: 'reading',
    kanji: '経験',
    options: ['けいけん', 'けいげん', 'きょうけん', 'けんけん'],
    correctIndex: 0,
    meaning: 'experience',
  },
  {
    id: 'k-014',
    section: 'kanji',
    difficulty: 'N3-low',
    type: 'meaning',
    kanji: '関係',
    options: ['relation', 'reception', 'reason', 'request'],
    correctIndex: 0,
  },
  {
    id: 'k-015',
    section: 'kanji',
    difficulty: 'N3-low',
    type: 'reading',
    kanji: '値段',
    options: ['ねだん', 'かかく', 'ちだん', 'ねかく'],
    correctIndex: 0,
    meaning: 'price',
  },
  {
    id: 'k-016',
    section: 'kanji',
    difficulty: 'N3-low',
    type: 'reading',
    kanji: '相談',
    options: ['そうだん', 'しょうだん', 'そうたん', 'あいだん'],
    correctIndex: 0,
    meaning: 'consultation',
  },

  // N3-high (2 items)
  {
    id: 'k-017',
    section: 'kanji',
    difficulty: 'N3-high',
    type: 'reading',
    kanji: '雰囲気',
    options: ['ふんいき', 'ふいんき', 'ふんきい', 'ぶんいき'],
    correctIndex: 0,
    meaning: 'atmosphere / mood',
  },
  {
    id: 'k-018',
    section: 'kanji',
    difficulty: 'N3-high',
    type: 'meaning',
    kanji: '我慢',
    options: ['patience / endurance', 'selfishness', 'manliness', 'arrogance'],
    correctIndex: 0,
  },

  // N2 (2 items, manga-relevant since Lorenzo wants to read seinen)
  {
    id: 'k-019',
    section: 'kanji',
    difficulty: 'N2',
    type: 'reading',
    kanji: '俺',
    options: ['おれ', 'ぼく', 'わたし', 'きみ'],
    correctIndex: 0,
    meaning: 'I (rough male, common in seinen)',
  },
  {
    id: 'k-020',
    section: 'kanji',
    difficulty: 'N2',
    type: 'meaning',
    kanji: '殺す',
    options: ['to chase', 'to kill', 'to scold', 'to hide'],
    correctIndex: 1,
  },

  // ============================================================
  // VOCAB (20 items)
  // ============================================================
  // N5 (4 items)
  {
    id: 'v-001',
    section: 'vocab',
    difficulty: 'N5',
    type: 'jp-to-en',
    word: 'たかい',
    options: ['cheap', 'tall / expensive', 'short', 'wide'],
    correctIndex: 1,
  },
  {
    id: 'v-002',
    section: 'vocab',
    difficulty: 'N5',
    type: 'en-to-jp',
    meaning: 'water',
    options: ['おゆ', 'おちゃ', 'みず', 'こおり'],
    correctIndex: 2,
  },
  {
    id: 'v-003',
    section: 'vocab',
    difficulty: 'N5',
    type: 'jp-to-en',
    word: 'やすみ',
    options: ['day off / rest', 'work', 'study', 'meeting'],
    correctIndex: 0,
  },
  {
    id: 'v-004',
    section: 'vocab',
    difficulty: 'N5',
    type: 'en-to-jp',
    meaning: 'often',
    options: ['ぜんぜん', 'あまり', 'よく', 'ときどき'],
    correctIndex: 2,
  },

  // N4-low (4 items, including audit-flagged weak themes)
  {
    id: 'v-005',
    section: 'vocab',
    difficulty: 'N4-low',
    type: 'jp-to-en',
    word: 'ゆき',
    options: ['rain', 'snow', 'cloud', 'wind'],
    correctIndex: 1,
  },
  {
    id: 'v-006',
    section: 'vocab',
    difficulty: 'N4-low',
    type: 'en-to-jp',
    meaning: 'serious / diligent (personality)',
    options: ['まじめ', 'やさしい', 'しんせつ', 'いじわる'],
    correctIndex: 0,
  },
  {
    id: 'v-007',
    section: 'vocab',
    difficulty: 'N4-low',
    type: 'jp-to-en',
    word: 'いそぐ',
    options: ['to wait', 'to hurry', 'to forget', 'to remember'],
    correctIndex: 1,
  },
  {
    id: 'v-008',
    section: 'vocab',
    difficulty: 'N4-low',
    type: 'en-to-jp',
    meaning: 'red (the colour, noun form)',
    options: ['あお', 'しろ', 'あか', 'くろ'],
    correctIndex: 2,
  },

  // N4-high (4 items)
  {
    id: 'v-009',
    section: 'vocab',
    difficulty: 'N4-high',
    type: 'jp-to-en',
    word: 'はずかしい',
    options: ['painful', 'embarrassing', 'frightening', 'lonely'],
    correctIndex: 1,
  },
  {
    id: 'v-010',
    section: 'vocab',
    difficulty: 'N4-high',
    type: 'en-to-jp',
    meaning: 'to repair',
    options: ['なおす', 'こわす', 'つくる', 'かえる'],
    correctIndex: 0,
  },
  {
    id: 'v-011',
    section: 'vocab',
    difficulty: 'N4-high',
    type: 'jp-to-en',
    word: 'しょうらい',
    options: ['the past', 'the future', 'last week', 'a long time'],
    correctIndex: 1,
  },
  {
    id: 'v-012',
    section: 'vocab',
    difficulty: 'N4-high',
    type: 'en-to-jp',
    meaning: 'opinion',
    options: ['しつもん', 'いけん', 'ようじ', 'よてい'],
    correctIndex: 1,
  },

  // N3-low (4 items)
  {
    id: 'v-013',
    section: 'vocab',
    difficulty: 'N3-low',
    type: 'jp-to-en',
    word: 'なんとなく',
    options: ['absolutely', 'somehow / for no clear reason', 'on purpose', 'by mistake'],
    correctIndex: 1,
  },
  {
    id: 'v-014',
    section: 'vocab',
    difficulty: 'N3-low',
    type: 'en-to-jp',
    meaning: 'to be in time / to make it',
    options: ['まにあう', 'おくれる', 'すぎる', 'あう'],
    correctIndex: 0,
  },
  {
    id: 'v-015',
    section: 'vocab',
    difficulty: 'N3-low',
    type: 'jp-to-en',
    word: 'ふくざつ',
    options: ['simple', 'complicated', 'normal', 'rare'],
    correctIndex: 1,
  },
  {
    id: 'v-016',
    section: 'vocab',
    difficulty: 'N3-low',
    type: 'en-to-jp',
    meaning: 'to cancel (an appointment, event)',
    options: ['とりけす', 'やめる', 'ことわる', 'おわる'],
    correctIndex: 0,
  },

  // N3-high (2 items)
  {
    id: 'v-017',
    section: 'vocab',
    difficulty: 'N3-high',
    type: 'jp-to-en',
    word: 'おもいきって',
    options: ['unwillingly', 'boldly / decisively', 'secretly', 'casually'],
    correctIndex: 1,
  },
  {
    id: 'v-018',
    section: 'vocab',
    difficulty: 'N3-high',
    type: 'en-to-jp',
    meaning: 'to put up with / endure',
    options: ['がまんする', 'えんりょする', 'しんぱいする', 'ようじんする'],
    correctIndex: 0,
  },

  // N2 (2 items, seinen / anime relevant)
  {
    id: 'v-019',
    section: 'vocab',
    difficulty: 'N2',
    type: 'jp-to-en',
    word: 'うっとうしい',
    options: ['refreshing', 'annoying / oppressive', 'bright', 'nostalgic'],
    correctIndex: 1,
  },
  {
    id: 'v-020',
    section: 'vocab',
    difficulty: 'N2',
    type: 'en-to-jp',
    meaning: 'to confess / admit (often a feeling)',
    options: ['うちあける', 'はなしあう', 'みとめる', 'しらべる'],
    correctIndex: 0,
  },

  // ============================================================
  // GRAMMAR (25 items)
  // ============================================================
  // N5 (5 items: particle and basic conjugation reactivation)
  {
    id: 'g-001',
    section: 'grammar',
    difficulty: 'N5',
    type: 'cloze',
    sentence: 'わたし___がくせいです。',
    blank: '___',
    options: ['は', 'が', 'を', 'の'],
    correctIndex: 0,
    explanation: 'は marks the topic. The classic A は B です pattern.',
  },
  {
    id: 'g-002',
    section: 'grammar',
    difficulty: 'N5',
    type: 'cloze',
    sentence: 'まいにち がっこう___いきます。',
    blank: '___',
    options: ['で', 'に', 'を', 'と'],
    correctIndex: 1,
    explanation: 'に marks the destination of motion verbs like いく.',
  },
  {
    id: 'g-003',
    section: 'grammar',
    difficulty: 'N5',
    type: 'choice',
    prompt: 'Pick the correct past negative of たべます.',
    options: ['たべません', 'たべませんでした', 'たべました', 'たべない'],
    correctIndex: 1,
    explanation: 'ます past negative is ませんでした.',
  },
  {
    id: 'g-004',
    section: 'grammar',
    difficulty: 'N5',
    type: 'cloze',
    sentence: 'コーヒー___おちゃ、どちらがすきですか。',
    blank: '___',
    options: ['と', 'や', 'も', 'で'],
    correctIndex: 0,
    explanation: 'と is the exhaustive "and" used when listing two specific options.',
  },
  {
    id: 'g-005',
    section: 'grammar',
    difficulty: 'N5',
    type: 'choice',
    prompt: 'Which is the correct te-form of かう (to buy)?',
    options: ['かいて', 'かって', 'かうて', 'かんで'],
    correctIndex: 1,
    explanation: 'う-ending u-verbs take って in the te-form.',
  },

  // N4-low (5 items: te-form derivations and the four-conditional gap)
  {
    id: 'g-006',
    section: 'grammar',
    difficulty: 'N4-low',
    type: 'cloze',
    sentence: 'ここで しゃしんを とっ___いいですか。',
    blank: '___',
    options: ['たり', 'ても', 'てから', 'てしまう'],
    correctIndex: 1,
    explanation: '〜てもいいですか asks for permission.',
  },
  {
    id: 'g-007',
    section: 'grammar',
    difficulty: 'N4-low',
    type: 'cloze',
    sentence: 'やすみのひは えいがを みたり、ほんを よん___します。',
    blank: '___',
    options: ['たり', 'だり', 'たら', 'だら'],
    correctIndex: 1,
    explanation: 'よむ ends in む so the past form is よんだ, hence よんだり.',
  },
  {
    id: 'g-008',
    section: 'grammar',
    difficulty: 'N4-low',
    type: 'choice',
    prompt: 'Which is the potential form of のむ (to drink)?',
    options: ['のまれる', 'のめる', 'のんでる', 'のもう'],
    correctIndex: 1,
    explanation: 'U-verbs form potential by shifting the final u to e and adding る.',
  },
  {
    id: 'g-009',
    section: 'grammar',
    difficulty: 'N4-low',
    type: 'cloze',
    sentence: 'もし あめが ふっ___、いきません。',
    blank: '___',
    options: ['たら', 'なら', 'と', 'ば'],
    correctIndex: 0,
    explanation: '〜たら is the most flexible conditional and works with もし for hypothetical events.',
  },
  {
    id: 'g-010',
    section: 'grammar',
    difficulty: 'N4-low',
    type: 'cloze',
    sentence: 'にほんごが はなせる___なりました。',
    blank: '___',
    options: ['ように', 'ことに', 'そうに', 'ために'],
    correctIndex: 0,
    explanation: '〜ようになる expresses change of state, especially newly acquired ability.',
  },

  // N4-high (6 items: the audit-identified gaps. Passive, causative, ので, のに, はず)
  {
    id: 'g-011',
    section: 'grammar',
    difficulty: 'N4-high',
    type: 'cloze',
    sentence: 'せんせいに しゅくだいを わすれ___しまいました。',
    blank: '___',
    options: ['られて', 'させて', 'て', 'られ'],
    correctIndex: 0,
    explanation: '〜られる is the passive. Here: "I had my homework forgetting noticed by the teacher" (suffering passive).',
  },
  {
    id: 'g-012',
    section: 'grammar',
    difficulty: 'N4-high',
    type: 'cloze',
    sentence: 'あめが ふっている___、しあいは ちゅうしです。',
    blank: '___',
    options: ['から', 'ので', 'のに', 'けど'],
    correctIndex: 1,
    explanation: 'ので gives a reason in a softer/more formal register than から. Both work, but ので reads more natural in announcements.',
  },
  {
    id: 'g-013',
    section: 'grammar',
    difficulty: 'N4-high',
    type: 'cloze',
    sentence: 'たくさん べんきょうした___、しけんに おちました。',
    blank: '___',
    options: ['から', 'ので', 'のに', 'ために'],
    correctIndex: 2,
    explanation: 'のに expresses contrast with an unexpected outcome. Despite studying a lot, I failed.',
  },
  {
    id: 'g-014',
    section: 'grammar',
    difficulty: 'N4-high',
    type: 'cloze',
    sentence: 'かれは もう ついている___です。',
    blank: '___',
    options: ['はず', 'つもり', 'よう', 'らしい'],
    correctIndex: 0,
    explanation: '〜はず expresses logical certainty: "he should have arrived already" (based on what I know).',
  },
  {
    id: 'g-015',
    section: 'grammar',
    difficulty: 'N4-high',
    type: 'choice',
    prompt: 'Which is the causative form of たべる?',
    options: ['たべられる', 'たべさせる', 'たべさせられる', 'たべよう'],
    correctIndex: 1,
    explanation: 'Ru-verbs form the causative by replacing る with させる. Means "to make/let someone eat".',
  },
  {
    id: 'g-016',
    section: 'grammar',
    difficulty: 'N4-high',
    type: 'cloze',
    sentence: 'この りょうりは つくり___です。',
    blank: '___',
    options: ['すぎ', 'やすい', 'にくい', 'がち'],
    correctIndex: 1,
    explanation: '〜やすい attached to the verb stem means "easy to do".',
  },

  // N3-low (5 items)
  {
    id: 'g-017',
    section: 'grammar',
    difficulty: 'N3-low',
    type: 'cloze',
    sentence: 'いそがし___、てつだえなくて ごめん。',
    blank: '___',
    options: ['くて', 'で', 'なくて', 'ながら'],
    correctIndex: 0,
    explanation: 'い-adjective stem + くて links a reason. いそがしい becomes いそがしくて.',
  },
  {
    id: 'g-018',
    section: 'grammar',
    difficulty: 'N3-low',
    type: 'cloze',
    sentence: 'おんがくを ききながら、しゅくだい___します。',
    blank: '___',
    options: ['は', 'を', 'が', 'に'],
    correctIndex: 1,
    explanation: 'を marks the direct object. The ながら construction does not change normal particle use.',
  },
  {
    id: 'g-019',
    section: 'grammar',
    difficulty: 'N3-low',
    type: 'cloze',
    sentence: 'あした あめが ふる___しれません。',
    blank: '___',
    options: ['よう', 'はず', 'かも', 'そう'],
    correctIndex: 2,
    explanation: '〜かもしれない expresses possibility ("might rain").',
  },
  {
    id: 'g-020',
    section: 'grammar',
    difficulty: 'N3-low',
    type: 'cloze',
    sentence: 'かのじょは げんき___みたいです。',
    blank: '___',
    options: ['だ', 'な', 'の', '∅'],
    correctIndex: 3,
    explanation: 'みたい attaches directly to な-adjectives without だ or な. げんきみたい is correct.',
  },
  {
    id: 'g-021',
    section: 'grammar',
    difficulty: 'N3-low',
    type: 'choice',
    prompt: 'Pick the keigo (sonkeigo) form of "to do".',
    options: ['いたします', 'なさいます', 'します', 'やります'],
    correctIndex: 1,
    explanation: 'なさる is the honorific (sonkeigo) form of する, used about the listener or a superior.',
  },

  // N3-high (3 items)
  {
    id: 'g-022',
    section: 'grammar',
    difficulty: 'N3-high',
    type: 'cloze',
    sentence: 'いくら たかくても、これは かう___あります。',
    blank: '___',
    options: ['ことが', 'ものが', 'はずが', 'べきで'],
    correctIndex: 0,
    explanation: '〜ことがある (with non-past verb) means "there are times when" or, in this construction with かう, "the value of buying it exists". Conversational pattern: this is worth buying.',
  },
  {
    id: 'g-023',
    section: 'grammar',
    difficulty: 'N3-high',
    type: 'cloze',
    sentence: 'にほんに きた___、おすしを たべていません。',
    blank: '___',
    options: ['ばかり', 'ところ', 'のに', 'うちに'],
    correctIndex: 0,
    explanation: '〜たばかり means "just did". "Even though I just arrived in Japan, I have not eaten sushi."',
  },
  {
    id: 'g-024',
    section: 'grammar',
    difficulty: 'N3-high',
    type: 'cloze',
    sentence: 'こどもの ころ、よく かわで およいだ___です。',
    blank: '___',
    options: ['もの', 'こと', 'よう', 'ばかり'],
    correctIndex: 0,
    explanation: '〜たものだ expresses nostalgic recollection of a habitual past action.',
  },

  // N2 (1 item)
  {
    id: 'g-025',
    section: 'grammar',
    difficulty: 'N2',
    type: 'cloze',
    sentence: 'かれは いそがしい___、まいあさ ジョギングを している。',
    blank: '___',
    options: ['にもかかわらず', 'からこそ', 'うえに', 'ばかりか'],
    correctIndex: 0,
    explanation: '〜にもかかわらず means "despite / regardless of". Strong concessive used in written N2 register.',
  },

  // ============================================================
  // LISTENING (15 items)
  // audioUrl placeholders use a stable filename pattern. Audio assets generated separately.
  // ============================================================
  // N5 (3 items)
  {
    id: 'l-001',
    section: 'listening',
    difficulty: 'N5',
    type: 'comprehension',
    audioUrl: '/audio/diagnostic/l-001.mp3',
    transcript: 'いま、なんじですか。さんじはんです。',
    question: 'What time is it?',
    options: ['3:00', '3:30', '4:00', '4:30'],
    correctIndex: 1,
  },
  {
    id: 'l-002',
    section: 'listening',
    difficulty: 'N5',
    type: 'comprehension',
    audioUrl: '/audio/diagnostic/l-002.mp3',
    transcript: 'すみません、トイレは どこですか。あそこです。',
    question: 'What is the speaker asking about?',
    options: ['the train station', 'the toilet', 'the hotel', 'the menu'],
    correctIndex: 1,
  },
  {
    id: 'l-003',
    section: 'listening',
    difficulty: 'N5',
    type: 'comprehension',
    audioUrl: '/audio/diagnostic/l-003.mp3',
    transcript: 'コーヒーを ふたつ ください。',
    question: 'How many coffees did the speaker order?',
    options: ['one', 'two', 'three', 'four'],
    correctIndex: 1,
  },

  // N4-low (3 items)
  {
    id: 'l-004',
    section: 'listening',
    difficulty: 'N4-low',
    type: 'comprehension',
    audioUrl: '/audio/diagnostic/l-004.mp3',
    transcript: 'あした えいがを みに いきませんか。すみません、あしたは ちょっと…。',
    question: 'How did the second speaker respond?',
    options: ['accepted enthusiastically', 'politely declined', 'asked for the time', 'changed the date'],
    correctIndex: 1,
  },
  {
    id: 'l-005',
    section: 'listening',
    difficulty: 'N4-low',
    type: 'comprehension',
    audioUrl: '/audio/diagnostic/l-005.mp3',
    transcript: 'えきまで あるいて じゅっぷんぐらい かかります。',
    question: 'How long does it take to walk to the station?',
    options: ['about 5 minutes', 'about 10 minutes', 'about 15 minutes', 'about 20 minutes'],
    correctIndex: 1,
  },
  {
    id: 'l-006',
    section: 'listening',
    difficulty: 'N4-low',
    type: 'comprehension',
    audioUrl: '/audio/diagnostic/l-006.mp3',
    transcript: 'たなかさんは いま でかけています。さんじごろ もどります。',
    question: 'When will Tanaka return?',
    options: ['around 1:00', 'around 3:00', 'tomorrow', 'tonight'],
    correctIndex: 1,
  },

  // N4-high (3 items)
  {
    id: 'l-007',
    section: 'listening',
    difficulty: 'N4-high',
    type: 'comprehension',
    audioUrl: '/audio/diagnostic/l-007.mp3',
    transcript: 'あした しゅっちょうで おおさかへ いかなければ なりません。だから ミーティングは こんしゅうの きんようびに かえてください。',
    question: 'Why does the speaker want to change the meeting?',
    options: [
      'they are sick',
      'they have a business trip to Osaka',
      'they have a holiday',
      'the room is unavailable',
    ],
    correctIndex: 1,
  },
  {
    id: 'l-008',
    section: 'listening',
    difficulty: 'N4-high',
    type: 'comprehension',
    audioUrl: '/audio/diagnostic/l-008.mp3',
    transcript: 'この ほんは おもしろそうですね。よんだ ことが ありますか。いいえ、まだです。',
    question: 'Has the second speaker read the book?',
    options: ['yes, recently', 'yes, long ago', 'no, not yet', 'they do not remember'],
    correctIndex: 2,
  },
  {
    id: 'l-009',
    section: 'listening',
    difficulty: 'N4-high',
    type: 'comprehension',
    audioUrl: '/audio/diagnostic/l-009.mp3',
    transcript: 'こどもの とき、ピアノを ならわせられました。いまは ぜんぜん ひけません。',
    question: 'What is the speaker saying about piano?',
    options: [
      'they were made to learn it as a child but cannot play now',
      'they learned it for fun and still play',
      'they want to start learning now',
      'their child is learning piano',
    ],
    correctIndex: 0,
  },

  // N3-low (3 items)
  {
    id: 'l-010',
    section: 'listening',
    difficulty: 'N3-low',
    type: 'comprehension',
    audioUrl: '/audio/diagnostic/l-010.mp3',
    transcript: 'らいしゅうから あたらしい プロジェクトが はじまるので、しゅうまつに しりょうを じゅんびして おかなければ なりません。',
    question: 'What does the speaker need to do this weekend?',
    options: [
      'rest before the new project',
      'meet the new team',
      'prepare materials in advance',
      'take a business trip',
    ],
    correctIndex: 2,
  },
  {
    id: 'l-011',
    section: 'listening',
    difficulty: 'N3-low',
    type: 'comprehension',
    audioUrl: '/audio/diagnostic/l-011.mp3',
    transcript: 'あの レストラン、ねだんは たかいけど、サービスが いいから また いきたいと おもう。',
    question: 'How does the speaker feel about the restaurant?',
    options: [
      'wants to avoid it because it is expensive',
      'wants to go again because the service is good',
      'thinks the food is not worth the price',
      'has never been there',
    ],
    correctIndex: 1,
  },
  {
    id: 'l-012',
    section: 'listening',
    difficulty: 'N3-low',
    type: 'comprehension',
    audioUrl: '/audio/diagnostic/l-012.mp3',
    transcript: 'もし あめが ふらなかったら、あした こうえんで バーベキューを する つもりです。',
    question: 'Under what condition will the BBQ happen?',
    options: ['if it rains', 'if it does not rain', 'regardless of weather', 'only if friends come'],
    correctIndex: 1,
  },

  // N3-high (2 items, anime-pace casual speech)
  {
    id: 'l-013',
    section: 'listening',
    difficulty: 'N3-high',
    type: 'comprehension',
    audioUrl: '/audio/diagnostic/l-013.mp3',
    transcript: 'まじで?あいつ また ちこくしたの?しんじられない。',
    question: 'How does the speaker feel?',
    options: [
      'pleasantly surprised',
      'indifferent',
      'frustrated and disbelieving',
      'sympathetic',
    ],
    correctIndex: 2,
  },
  {
    id: 'l-014',
    section: 'listening',
    difficulty: 'N3-high',
    type: 'comprehension',
    audioUrl: '/audio/diagnostic/l-014.mp3',
    transcript: 'おれが やらなきゃ、だれも やらないだろう。しかたない、やってやるよ。',
    question: 'What is the speaker deciding?',
    options: [
      'to ask someone else to do it',
      'to do it themselves reluctantly',
      'to refuse the task',
      'to delay until tomorrow',
    ],
    correctIndex: 1,
  },

  // N2 (1 item, news-style register)
  {
    id: 'l-015',
    section: 'listening',
    difficulty: 'N2',
    type: 'comprehension',
    audioUrl: '/audio/diagnostic/l-015.mp3',
    transcript: 'きょう、とうきょうとないで おおあめに よる こうつうの こんらんが ほうこくされました。でんしゃは いちじてきに とまり、おおくの ひとが えきで まちつづけました。',
    question: 'What was reported today?',
    options: [
      'a power cut affecting trains',
      'traffic disruption caused by heavy rain',
      'a strike by train workers',
      'a new train line opening',
    ],
    correctIndex: 1,
  },
];

// ============================================================
// ADAPTIVE LOGIC
// ============================================================

export const adaptiveLogic = {
  // Starting band per section
  seedBand: {
    kanji: 'N4-low' as ItemDifficulty,
    vocab: 'N4-low' as ItemDifficulty,
    grammar: 'N4-low' as ItemDifficulty,
    listening: 'N5' as ItemDifficulty,
  },
  // Group size: how many items in a row before re-evaluating
  groupSize: 3,
  // Thresholds (rolling accuracy across the latest group)
  escalateAt: 0.8, // 80% or more -> jump up one band
  deEscalateAt: 0.5, // less than 50% -> drop one band
  // Section caps
  minItemsPerSection: {
    kanji: 10,
    vocab: 10,
    grammar: 12,
    listening: 6,
  },
  maxItemsPerSection: {
    kanji: 15,
    vocab: 15,
    grammar: 18,
    listening: 10,
  },
  // Stop condition once minItems reached: 2 consecutive groups on the same band
  stableGroupsRequired: 2,
  // Band ladder used for escalation/de-escalation
  bandLadder: ['N5', 'N4-low', 'N4-high', 'N3-low', 'N3-high', 'N2'] as ItemDifficulty[],
  // If less than 30% of items are answered in under 2 seconds, the section is trusted
  fastResponseThresholdMs: 2000,
  fastResponseSectionFlagPct: 0.3,
};

// ============================================================
// SCORING WEIGHTS
// ============================================================

export const scoringWeights = {
  bandWeight: {
    N5: 1.0,
    'N4-low': 1.5,
    'N4-high': 2.0,
    'N3-low': 2.5,
    'N3-high': 3.0,
    N2: 3.5,
  },
  // Normalised score (0-100) -> band label
  scoreToBand: [
    { min: 0, max: 20, label: 'sub-N5' },
    { min: 21, max: 40, label: 'N5' },
    { min: 41, max: 55, label: 'N4-low' },
    { min: 56, max: 70, label: 'N4-high' },
    { min: 71, max: 85, label: 'N3-low' },
    { min: 86, max: 95, label: 'N3-high' },
    { min: 96, max: 100, label: 'N2+' },
  ],
  // Skipped sections return null and trigger audit-default recommendations
  inconclusiveItemFloor: 3,
};

// ============================================================
// LESSON RECOMMENDATION MAP
// Keyed by (axis, current band) -> ordered lesson IDs
// Lesson IDs follow the pattern: <axis>-<NN>-<slug>
// ============================================================

export const lessonRecommendationMap: Record<
  string,
  Record<string, string[]>
> = {
  kanji: {
    'sub-N5': ['kanji-01-numbers', 'kanji-02-time', 'kanji-03-people', 'kanji-04-self', 'kanji-05-directions'],
    N5: ['kanji-06-family', 'kanji-07-body-1', 'kanji-08-weather', 'kanji-09-school', 'kanji-10-food-1'],
    'N4-low': ['kanji-11-body-2', 'kanji-12-sickness', 'kanji-13-society', 'kanji-14-verbs-1', 'kanji-15-emotions'],
    'N4-high': ['kanji-16-business', 'kanji-17-news-1', 'kanji-18-news-2', 'kanji-19-manga-readings', 'kanji-20-onyomi-pairs'],
    'N3-low': ['kanji-21-news-3', 'kanji-22-abstract', 'kanji-23-seinen-1', 'kanji-24-onyomi-advanced', 'kanji-25-radicals-deep'],
    'N3-high': ['kanji-26-seinen-2', 'kanji-27-literary', 'kanji-28-historical', 'kanji-29-yojijukugo', 'kanji-30-rare-readings'],
    'N2+': ['kanji-31-formal-writing', 'kanji-32-newspaper-pro', 'kanji-33-classical-touch'],
  },
  vocab: {
    'sub-N5': ['vocab-01-survival', 'vocab-02-food-drink', 'vocab-03-numbers-counters', 'vocab-04-time', 'vocab-05-greetings'],
    N5: ['vocab-06-family-tree', 'vocab-07-colours', 'vocab-08-weather', 'vocab-09-clothing', 'vocab-10-rooms-house'],
    'N4-low': ['vocab-11-personality', 'vocab-12-emotions', 'vocab-13-cooking-tools', 'vocab-14-office', 'vocab-15-travel'],
    'N4-high': ['vocab-16-abstract-feelings', 'vocab-17-opinions', 'vocab-18-frequency-deep', 'vocab-19-onomatopoeia-1', 'vocab-20-business-formal'],
    'N3-low': ['vocab-21-news', 'vocab-22-onomatopoeia-2', 'vocab-23-anime-casual', 'vocab-24-time-precision', 'vocab-25-modality-words'],
    'N3-high': ['vocab-26-seinen-vocab', 'vocab-27-formal-register', 'vocab-28-idioms-1'],
    'N2+': ['vocab-29-newspaper', 'vocab-30-yojijukugo', 'vocab-31-keigo-vocab'],
  },
  grammar: {
    'sub-N5': ['gr-01-particles-core', 'gr-02-copula', 'gr-03-masu-form', 'gr-04-arimasu-imasu', 'gr-05-this-that'],
    N5: ['gr-06-particles-deep', 'gr-07-i-na-adj', 'gr-08-te-form-intro', 'gr-09-past-casual', 'gr-10-question-words'],
    'N4-low': ['gr-11-te-chains', 'gr-12-potential', 'gr-13-volitional', 'gr-14-tara-conditional', 'gr-15-keredo-demo'],
    'N4-high': [
      'gr-16-passive', // audit MISSING priority
      'gr-17-causative', // audit MISSING priority
      'gr-18-four-conditionals', // audit MISSING priority (covers ば, と, なら together)
      'gr-19-node-noni', // audit MISSING (ので) and MISSING (のに contrastive)
      'gr-20-modality-bundle', // covers はず, かもしれない, ようだ, らしい, みたい (all MISSING in audit)
    ],
    'N3-low': ['gr-21-keigo-intro', 'gr-22-yasui-nikui', 'gr-23-tokoro-bakari', 'gr-24-shi-nagara', 'gr-25-honorific-humble'],
    'N3-high': ['gr-26-keigo-deep', 'gr-27-causative-passive', 'gr-28-formal-written', 'gr-29-classical-touches', 'gr-30-conjunction-pro'],
    'N2+': ['gr-31-n2-essentials', 'gr-32-news-grammar', 'gr-33-literary-grammar'],
  },
  listening: {
    'sub-N5': ['listen-01-greetings', 'listen-02-numbers', 'listen-03-shopping', 'listen-04-time', 'listen-05-directions'],
    N5: ['listen-06-cafe', 'listen-07-station', 'listen-08-self-intro', 'listen-09-weather-talk', 'listen-10-family-talk'],
    'N4-low': ['listen-11-invitations', 'listen-12-plans', 'listen-13-asking-help', 'listen-14-shopping-deep', 'listen-15-anime-casual-1'],
    'N4-high': ['listen-16-business-meeting', 'listen-17-news-easy', 'listen-18-podcast-easy', 'listen-19-anime-casual-2', 'listen-20-keigo-listening'],
    'N3-low': ['listen-21-news-mid', 'listen-22-podcast-mid', 'listen-23-anime-fast', 'listen-24-business-deep', 'listen-25-jdrama-1'],
    'N3-high': ['listen-26-news-hard', 'listen-27-jdrama-2', 'listen-28-seinen-anime'],
    'N2+': ['listen-29-newscast-pro', 'listen-30-documentary'],
  },
};

// Always-on priority lesson queue surfaced regardless of level results.
// These map to gaps the archive audit flagged as MISSING.
export const auditDrivenPriorityLessons: string[] = [
  'gr-16-passive',
  'gr-17-causative',
  'gr-18-four-conditionals',
  'gr-19-node-noni',
  'gr-20-modality-bundle',
  'gr-21-keigo-intro',
  'kanji-06-family', // 兄, 弟, 妹 audit gap
  'kanji-11-body-2', // 体, 頭 audit gap
  'listen-01-greetings', // zero structured listening in archive
];

// Tie-breaker priority order when two axes score equal-lowest
export const axisTieBreakerOrder: DiagnosticSection[] = [
  'grammar',
  'listening',
  'vocab',
  'kanji',
];
