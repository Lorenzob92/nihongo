# Wiring notes

Last update: 2026-04-17 (post-wiring pass)

## Live now (after wiring pass)

- 9 lessons (na-adjectives, wa-vs-ga, te-form, causative, particles-wo-ni-de mapped to both wo-particle and ni-vs-de slugs, four-conditionals-synthesis, passive, sonkeigo)
- /tools/reading-helper — streamObject + AI Gateway, full token grid + mining queue (localStorage)
- /tools/conversation — text V1, streamText + AI Gateway, exact spec system prompt, 5-turn correction cadence + on-demand "私の日本語、大丈夫？", end-of-session summary, localStorage memory
- /tools/kanji-explorer — KanjiVG (612 kanji) with stroke-order animation
- /tools/pitch-accent — V1 skeleton: 5 sample words across heiban/atamadaka/nakadaka/odaka with PitchGraph SVG component
- /diagnostic — adaptive 4-axis placement test (kanji, vocab, grammar, listening), localStorage results + recommended next 5 lessons

## Required env vars on Vercel

The AI features (reading helper + conversation) call AI Gateway. They expect ONE of:

- `AI_GATEWAY_API_KEY` (preferred, set on Vercel; auto-routes through the Gateway with Anthropic underneath)
- `ANTHROPIC_API_KEY` (fallback if calling Anthropic directly)

If neither is set, the API routes return a friendly 503 with a message instead of crashing. Detection also short-circuits when `process.env.VERCEL` is set so production credentials work transparently.

To set on Vercel: `vercel env add AI_GATEWAY_API_KEY` (or via the dashboard).

## Decisions log (wiring pass)

- na-adjectives: kept the foundation's clean schema and folded in the parallel agent's specific Frieren reference plus the kirei/kirai trap example. Result is the union of both.
- 5 of 8 drafted lessons (na-adjectives, four-conditionals, passive-voice, keigo-intro, particles-wo-ni-de) used a divergent schema (extra step types like `comparison`, nested `groups`, `kind`+`id`+`label` for SRS, `choice`/`reorder` drill types). All five were rewritten to match `LessonContent` while preserving every example sentence, drill item, listening transcript, reading passage, and SRS card from the drafts. Some structural niceties (decision tree as its own step type, side-by-side comparison tables) were folded into the existing `concept` and `cheatsheet` step types.
- particles-wo-ni-de is registered under both `wo-particle` and `ni-vs-de` slugs in the lesson registry so both curriculum entries (A2 and A3) flip to built. The composite lesson covers all three particles in one go, matching how the parallel agent drafted it.
- Used Claude Sonnet 4.6 (`anthropic/claude-sonnet-4-6`) via AI Gateway as instructed.
- API route paths follow the user's instruction (`/api/reading-helper`, `/api/conversation/message`) rather than the spec's nested `/api/tools/...`.
- Curriculum status type only allows "planned" | "built". The original instruction said to flip to "ready"; using "built" to stay within the type.

## Known gaps for the next pass

- Reading helper: word-define endpoint (click a token for inline definition) is not yet wired. The token chips render correctly but clicking them does nothing. Spec §5 covers this.
- Conversation partner: voice mode (V2). Whisper STT + VOICEVOX TTS deferred per spec.
- Conversation partner: weak_points list is hardcoded (Lorenzo's known issues from the audit). When Postgres lands, wire to FSRS state.
- Pitch accent: FSRS scheduling, mic input, full Wadoku/NHK pitch dictionary import — V2.
- Diagnostic: results persist to localStorage only; the recommendation slugs do not all map to live lessons in the curriculum yet (they refer to the broader tagged pool from the diagnostic spec).

---

# Original V0 scaffolding notes

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
