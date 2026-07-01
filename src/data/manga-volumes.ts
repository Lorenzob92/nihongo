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
  { mangaSlug: "doraemon", volume: "v01", title: "Doraemon Vol 1", titleJa: "ドラえもん 第1巻", totalPages: 192 },
  { mangaSlug: "shirokuma-cafe", volume: "v01", title: "Shirokuma Cafe Vol 1", titleJa: "しろくまカフェ 第1巻", totalPages: 171 },
  { mangaSlug: "crayon-shin-chan", volume: "v01", title: "Crayon Shin-chan Vol 1", titleJa: "クレヨンしんちゃん 第1巻", totalPages: 122 },
  { mangaSlug: "chi-sweet-home", volume: "v01", title: "Chi's Sweet Home Vol 1", titleJa: "チーズスイートホーム 第1巻", totalPages: 172 },
];

export const MANGA_VOLUMES_BY_KEY: Record<string, MangaVolume> = Object.fromEntries(
  MANGA_VOLUMES.map((v) => [`${v.mangaSlug}/${v.volume}`, v]),
);
