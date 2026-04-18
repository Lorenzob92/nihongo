import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, ExternalLink, Search, Star } from "lucide-react";
import { MANGA_LADDER, MANGA_LADDER_BY_SLUG } from "@/data/manga-ladder";
import { MANGA_COVERS } from "@/data/manga-covers";
import { Pill } from "@/components/ui/Pill";
import { JapaneseText } from "@/components/japanese/JapaneseText";
import { MangaProgressButtons } from "@/components/manga/MangaProgressButtons";

type Params = { slug: string };

export function generateStaticParams() {
  return MANGA_LADDER.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = MANGA_LADDER_BY_SLUG[slug];
  if (!m) return { title: "Not found" };
  return {
    title: m.title,
    description: m.notes,
  };
}

export default async function MangaDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const m = MANGA_LADDER_BY_SLUG[slug];
  if (!m) notFound();

  const cover = MANGA_COVERS[slug];
  const banner = cover?.bannerImage ?? cover?.coverExtraLarge ?? null;

  return (
    <main className="mx-auto w-full max-w-5xl">
      {/* Banner */}
      <div className="relative h-40 sm:h-64 w-full overflow-hidden border-b border-white/10">
        {banner ? (
          <Image
            src={banner}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-40"
            priority
          />
        ) : (
          <div className="absolute inset-0 hero-halo" />
        )}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, #0a0a12 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Header */}
      <div className="px-4 sm:px-6 -mt-20 sm:-mt-24 relative z-10">
        <Link
          href="/manga-ladder"
          className="mb-4 inline-flex items-center gap-1.5 text-[11px] font-semibold text-zinc-400 hover:text-white"
        >
          <ArrowLeft className="h-3 w-3" /> Back to ladder
        </Link>

        <div className="flex flex-col sm:flex-row gap-5">
          <div className="relative h-56 w-40 sm:h-64 sm:w-48 flex-none overflow-hidden rounded-[12px] border border-white/10 bg-black shadow-card">
            {cover?.coverExtraLarge ? (
              <Image
                src={cover.coverExtraLarge}
                alt={m.title}
                fill
                sizes="200px"
                className="object-cover"
                priority
              />
            ) : null}
          </div>

          <div className="flex flex-1 flex-col gap-3 pt-2 sm:pt-16">
            <div className="flex flex-wrap items-center gap-1.5">
              <Pill tone="accent">Rung {m.rung}</Pill>
              <Pill tone="jlpt">{m.jlptLevel}</Pill>
              {m.jpdbLevel ? <Pill tone="muted">jpdb {m.jpdbLevel}</Pill> : null}
              {m.tier ? <Pill tone="muted">{m.tier}-tier</Pill> : null}
              {cover?.averageScore ? (
                <Pill tone="muted">
                  <Star className="h-3 w-3 text-amber-400" /> {cover.averageScore}
                </Pill>
              ) : null}
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              {m.title}
            </h1>
            <JapaneseText size="2xl" className="text-zinc-400 font-atmos">
              {m.titleJa}
            </JapaneseText>
            {cover?.titleEnglish && cover.titleEnglish !== m.title ? (
              <p className="text-xs text-zinc-500">English: {cover.titleEnglish}</p>
            ) : null}
            <div className="flex flex-wrap gap-3 text-[11px] text-zinc-500">
              {cover?.year ? <span>{cover.year}</span> : null}
              {cover?.volumes ? <span>{cover.volumes} volumes</span> : null}
              {cover?.chapters ? <span>{cover.chapters} chapters</span> : null}
              {cover?.status ? <span className="capitalize">{cover.status.toLowerCase()}</span> : null}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-5 px-4 sm:px-6 py-6 sm:py-8 lg:grid-cols-[1fr_280px]">
        <div className="space-y-5">
          {/* Why at this rung */}
          <section className="rounded-[12px] border border-white/10 bg-surface p-4 sm:p-5 shadow-card">
            <h2 className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-zinc-400">
              Why this rung
            </h2>
            <p className="text-sm leading-relaxed text-zinc-300">
              {m.whyAtThisRung ?? m.notes}
            </p>
          </section>

          {/* Synopsis */}
          {cover?.description ? (
            <section className="rounded-[12px] border border-white/10 bg-surface p-4 sm:p-5 shadow-card">
              <h2 className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-zinc-400">
                Synopsis
              </h2>
              <p className="whitespace-pre-line text-sm leading-relaxed text-zinc-300">
                {cover.description}
              </p>
              {cover.aniListId ? (
                <a
                  href={`https://anilist.co/manga/${cover.aniListId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-[#638dff] hover:underline"
                >
                  View on AniList <ExternalLink className="h-3 w-3" />
                </a>
              ) : null}
            </section>
          ) : null}

          {/* Vocabulary placeholder */}
          <section className="rounded-[12px] border border-white/10 bg-surface p-4 sm:p-5 shadow-card">
            <h2 className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-zinc-400">
              Vocabulary you will meet
            </h2>
            <p className="text-xs text-zinc-500">
              Phase 2: pulled from the jpdb frequency list filtered by JLPT band, with click-to-mine into the queue. For now, see the in-app reader (where available) for sentence-level lookups.
            </p>
          </section>
        </div>

        {/* Side panel */}
        <aside className="space-y-3 lg:sticky lg:top-24 lg:self-start">
          {m.readingAid?.mokuroAvailable && m.readingAid.mokuroVolume ? (
            <Link
              href={`/manga/${m.slug}/${m.readingAid.mokuroVolume}`}
              className="flex items-center gap-2 rounded-[10px] bg-[#638dff] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#4f72d6]"
            >
              <BookOpen className="h-4 w-4" />
              Read Volume {m.readingAid.mokuroVolume.replace(/^v0?/, "")} in app
            </Link>
          ) : null}

          <MangaProgressButtons slug={m.slug} />

          {/* Search raws on Nyaa: opens a search URL, you pick what you want */}
          <div className="grid grid-cols-2 gap-2">
            <a
              href={`https://nyaa.si/?f=0&c=3_0&q=${encodeURIComponent(m.titleJa || m.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-[10px] border border-white/10 bg-surface px-3 py-2 text-[11px] font-semibold text-white hover:bg-surface-2"
            >
              <Search className="h-3 w-3" />
              Nyaa (JP)
            </a>
            <a
              href={`https://nyaa.si/?f=0&c=3_0&q=${encodeURIComponent(m.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-[10px] border border-white/10 bg-surface px-3 py-2 text-[11px] font-semibold text-white hover:bg-surface-2"
            >
              <Search className="h-3 w-3" />
              Nyaa (EN)
            </a>
          </div>

          {m.readingAid?.sourceTip ? (
            <div className="rounded-[10px] border border-white/10 bg-surface p-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                Where to get it
              </p>
              <p className="mt-1 text-xs text-zinc-300">{m.readingAid.sourceTip}</p>
            </div>
          ) : null}

          {cover?.genres && cover.genres.length > 0 ? (
            <div className="rounded-[10px] border border-white/10 bg-surface p-3">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                Genres
              </p>
              <div className="flex flex-wrap gap-1">
                {cover.genres.slice(0, 6).map((g) => (
                  <Pill key={g} tone="muted">
                    {g}
                  </Pill>
                ))}
              </div>
            </div>
          ) : null}
        </aside>
      </div>
    </main>
  );
}
