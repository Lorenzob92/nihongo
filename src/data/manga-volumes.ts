/**
 * Registry of manga volumes that have been Mokuro-processed and bundled in
 * /public/manga/<slug>/<volume>/. Adding a new volume:
 *   1. Drop pages + _ocr/pages JSON + pages.mokuro into public/manga/<slug>/<vol>/
 *   2. Append an entry here.
 */

export type MangaVolume = {
  /** Manga ladder slug, must match src/data/manga-ladder.ts */
  mangaSlug: string;
  /** Volume slug used in URLs (e.g. "v01"). */
  volume: string;
  title: string;
  titleJa: string;
  totalPages: number;
};

export const MANGA_VOLUMES: MangaVolume[] = [
  {
    mangaSlug: "yotsubato",
    volume: "v01",
    title: "Yotsubato! Vol 1",
    titleJa: "よつばと！第1巻",
    totalPages: 231,
  },
];

export const MANGA_VOLUMES_BY_KEY: Record<string, MangaVolume> = Object.fromEntries(
  MANGA_VOLUMES.map((v) => [`${v.mangaSlug}/${v.volume}`, v]),
);
