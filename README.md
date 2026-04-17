# 日本語

Lorenzo's personal Japanese learning system. Reactivate, Bridge, Immerse, Native. From rusty N5 to seinen manga in 24 months.

V0 scope, scaffolded for Phase 2 expansion. Single-user, opinionated, no signups, no analytics, no tracking.

## Stack

- Next.js 16 (App Router, React 19)
- Tailwind CSS 4
- Motion (Framer) v12
- Lucide React icons
- TypeScript

## Design system: "Soft Sumi"

Cream background (#faf8f3, NOT pure white) per Kenya Hara whiteness principle. Sumi-grey ink scale. One restrained accent: soft blue #5a8eea (the Lorenzo blue). Klee One for headlines, Inter for UI body, Noto Sans JP for Japanese, JetBrains Mono for labels and code.

Inspiration: Bunpro's clean review surface, Satori Reader's adaptive furigana, Migaku's glass dictionary tooltip, MUJI design discipline, Naoto Fukasawa restraint.

Colour tokens live in `src/app/globals.css` and are exposed as Tailwind theme tokens (`bg-background`, `text-ink`, `text-accent-deep`, etc).

## Routes

```
/                   Hub dashboard
/lessons            Curriculum grid (75 lessons by section A-K)
/lessons/[slug]     Dynamic lesson route (built or placeholder)
/tools              Tools index
/tools/reading-helper  Stub for the Claude paragraph breakdown tool
/diagnostic         Phase 2 placeholder
/manga-ladder       Full manga ladder visualisation
/api/health         Health check JSON
```

## Project layout

```
src/
  app/                  Next.js App Router routes
  components/
    layout/             Header, Footer
    ui/                 Pill, Card, Button (small primitives)
    japanese/           Furigana, JapaneseText, KanjiCard
    hub/                PhaseIndicator, TodaySession, ProgressRails, MangaLadderMini, QuickActions
    lesson/             LessonFlow + 8 step components + StepProgress + StepNav
    manga/              MangaLadder
  data/
    sections.ts         11 curriculum sections (A-K) metadata
    curriculum.ts       All 75 lessons (slugs, prereqs, status: planned | built)
    manga-ladder.ts     12 manga rungs from Yotsubato to the boss fights
    user-state.ts       Mocked single-user state (Phase 2 wires this to Postgres)
    kaishi-sample.ts    50 sample Kaishi 1.5k cards for the demo
    lessons/            One file per built lesson, registered in index.ts
      index.ts          Lesson content registry
      na-adjectives.ts  The V0 demo lesson
  lib/
    types.ts            Shared types (LessonContent, LessonStep, UserState, etc)
    phase.ts            Phase metadata (label, colour, description)
    utils.ts            cn helper, percent and clamp helpers
```

## Adding a new lesson

Phase 2 agents: each lesson is one file in `src/data/lessons/<slug>.ts`, exporting a `LessonContent` object. The slug must match an entry in `src/data/curriculum.ts`. Steps follow the standard 8-section template (hook, concept, examples, drill, listening, reading, cheatsheet, wrap). Not every step is required, but the order should be preserved if present.

Workflow:

1. Pick a `planned` lesson in `src/data/curriculum.ts` and copy its slug.
2. Create `src/data/lessons/<slug>.ts`, mirroring the shape in `na-adjectives.ts`.
3. Register it in `src/data/lessons/index.ts`.
4. Flip the lesson's `status` in `curriculum.ts` to `built`.
5. The lesson route at `/lessons/<slug>` will now render the `LessonFlow` instead of the placeholder.

The `LessonFlow` engine handles step navigation, progress, animations, and scroll-to-top. Each step component (LessonHook, LessonConcept, LessonExamples, LessonDrill, LessonListening, LessonReading, LessonCheatsheet, LessonWrap) is independent and can be improved without touching the others.

## Local dev

```sh
npm run dev    # http://localhost:3000
npm run build  # Note: uses --webpack because Turbopack panics on multi-byte
               # path chars (the 日本語 in the parent dir). Vercel builds work
               # fine either way.
```

## Deployment

Pushes to `main` deploy to Vercel automatically once the GitHub repo is linked to a Vercel project (account: lorenzobonari@gmail.com).

## Phase plan

- **V0 (now)**: Hub renders with mocked data, lessons grid is complete, na-adjectives is the only built lesson, reading-helper is a stub, manga ladder fully styled.
- **V1 (Phase 2)**: First 10 lessons content, FSRS engine, reading helper wired to Claude Sonnet via Vercel AI Gateway, jmdict-simplified Postgres lookups.
- **V2 (Phase 3)**: Full grammar SRS, sentence mining tool, conversation practice, mobile polish, PWA manifest.
- **V3 onwards**: Lessons 10 to 75 produced one per week.

See the spec at `../docs/specs/2026-04-18-nihongo-design.md` and the supporting `../research/` files for everything behind it.

## Conventions

- British English everywhere (colour, organised, favourite).
- No em-dashes or en-dashes in copy. Commas, periods, parens only.
- Plain URLs in copy, never markdown hyperlinks.
- Server Components by default; `"use client"` only when needed.
- Tailwind theme tokens preferred over hardcoded colours.
- All Japanese text wrapped in `<JapaneseText>` so it picks up Noto Sans JP and `lang="ja"`.
