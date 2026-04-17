# V0 scaffolding notes

Decisions and TODOs left for Phase 2 agents.

## Architectural decisions

- **Static data layer**: `src/data/*.ts` holds all V0 state (curriculum, manga ladder, user state, sample Kaishi cards, lesson content). Phase 2 swaps these for Neon Postgres reads behind the same TypeScript interfaces.
- **Lesson registry pattern**: `src/data/lessons/index.ts` is a registry keyed by slug. Each new lesson adds one file plus one line to the registry. Ten parallel agents can add ten lessons without merge conflicts.
- **LessonFlow as a single engine**: Every lesson page just calls `<LessonFlow content={...} />`. The dynamic route at `/lessons/[slug]/page.tsx` handles both built and planned lessons (planned ones get a polished placeholder).
- **Server Components by default**: Only LessonFlow, LessonExamples, LessonDrill, LessonListening, LessonReading, LessonWrap, StepProgress, and StepNav use `"use client"` (interactive state). Everything else is RSC.
- **Build with --webpack**: Turbopack panics on multi-byte characters in the absolute path (the 日本語 folder). The `build` script in package.json passes `--webpack` to sidestep this. The dev server still uses Turbopack via `turbopack.root` set to the app directory. Vercel builds work fine either way because the deploy path is ASCII.

## Stubs and TODOs

- **Audio**: `LessonExamples` shows a Volume2 button with a "Phase 2: VOICEVOX" tooltip; no playback. `LessonListening` has the same stub. Wire to pre-baked VOICEVOX MP3s stored in `public/audio/<lesson-slug>/<index>.mp3`, with a fallback to browser SpeechSynthesis.
- **Furigana adaptive logic**: `Furigana.tsx` shows the reading by default. Phase 2: thread a `userKnownKanji: Set<string>` through context and only render `<rt>` when the kanji is unknown (Satori Reader pattern).
- **Reading helper tool**: Just a static page with a disabled textarea. Wire to Claude Sonnet via Vercel AI Gateway. Recommended: stream sentence-by-sentence breakdown, with each sentence collapsible.
- **Diagnostic**: Stub page only.
- **Conversation practice**: Stub card on `/tools`.
- **Sentence mining tool**: Stub card on `/tools`.
- **Pitch accent drill**: Stub card on `/tools`.
- **Kanji explorer**: Stub card on `/tools`.
- **Mining queue**: Quick action on hub points to `/tools`. Phase 2: dedicated page reading from Postgres.
- **Streak**: Spec calls for weekly streak (5/7 days) with pre-allocated freeze days. Not in V0; add to `UserState` and a `<StreakRail>` component when ready.
- **Diagnostic flow**: Spec section 3 mentions a diagnostic completion event. Once built, this should populate the FSRS queue with weak items.
- **Cheatsheet PDF export**: `LessonCheatsheet` renders the table inline. Phase 2: add a "Print to PDF" button using Typst (the user's preferred PDF tool) called via an API route.
- **SRS scheduling**: `LessonWrap` shows items "going into your SRS queue" but does nothing. Wire ts-fsrs and persist to Postgres.

## Data sources to wire

- **jmdict-simplified** (already cloned at `/Users/lorenzobonari/Desktop/Claude Projects/Friends & Family/Personal/日本語/mirrors/jmdict-simplified/`) for dictionary lookups.
- **Kaishi 1.5k** (`mirrors/Kaishi/`) for the full vocab deck. V0 ships 50 hand-curated cards in `src/data/kaishi-sample.ts`.
- **kanjivg** (`mirrors/kanjivg/`) for stroke-order SVGs in the kanji explorer.
- **kuroshiro** (`mirrors/kuroshiro/`) for runtime kana/romaji conversion.

## Known issues

- **Build dev only**: To get a clean local build of Google Fonts the local Node fetch must reach `fonts.googleapis.com`. In sandboxed CI this can flake; deploys to Vercel are fine.
- **Lesson placeholders mention `na-adjectives`**: All "see the demo" CTAs point to that one. Once more lessons land, replace with curriculum-aware suggestions.

## Style guardrails for Phase 2 agents

- British English throughout. Lorenzo will reject anything with US spelling.
- No em-dashes or en-dashes anywhere. Commas, periods, parens, semicolons only.
- Don't use markdown links in any user-facing copy. Plain URLs only.
- Don't add emojis to code, lesson content, or UI copy unless explicitly requested.
- Keep the design discipline tight: one accent colour, single-layer shadows, generous whitespace, font-display Klee One only for headlines.
- Use the existing `Pill`, `Card`, `Button` primitives. Don't reinvent.
- Wrap Japanese text in `<JapaneseText>` so it picks up the JP font and `lang="ja"`.
