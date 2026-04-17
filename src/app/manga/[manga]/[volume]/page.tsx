import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MANGA_VOLUMES, MANGA_VOLUMES_BY_KEY } from "@/data/manga-volumes";
import { MangaReader } from "@/components/manga/MangaReader";

type Params = { manga: string; volume: string };

export function generateStaticParams() {
  return MANGA_VOLUMES.map((v) => ({ manga: v.mangaSlug, volume: v.volume }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { manga, volume } = await params;
  const v = MANGA_VOLUMES_BY_KEY[`${manga}/${volume}`];
  if (!v) return { title: "Reader" };
  return {
    title: v.title,
    description: `In-app manga reader for ${v.title}.`,
  };
}

export default async function MangaReaderPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { manga, volume } = await params;
  const v = MANGA_VOLUMES_BY_KEY[`${manga}/${volume}`];
  if (!v) notFound();

  return <MangaReader volume={v} />;
}
