"use client";

import { useEffect, useRef, useState } from "react";
import { MokuroOverlay, type MokuroPageData } from "./MokuroOverlay";

type MangaPageProps = {
  mangaSlug: string;
  volume: string;
  page: number;
  showOverlay: boolean;
  onTextClick: (text: string, x: number, y: number) => void;
};

export function MangaPage({
  mangaSlug,
  volume,
  page,
  showOverlay,
  onTextClick,
}: MangaPageProps) {
  const padded = String(page).padStart(4, "0");
  const imgUrl = `/manga/${mangaSlug}/${volume}/pages/${padded}.jpg`;
  const ocrUrl = `/manga/${mangaSlug}/${volume}/_ocr/pages/${padded}.json`;

  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [ocr, setOcr] = useState<MokuroPageData | null>(null);
  const [renderSize, setRenderSize] = useState<{ w: number; h: number } | null>(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  // Load OCR JSON for this page
  useEffect(() => {
    let cancelled = false;
    setOcr(null);
    fetch(ocrUrl)
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        if (!cancelled) setOcr(j);
      })
      .catch(() => {
        if (!cancelled) setOcr(null);
      });
    return () => {
      cancelled = true;
    };
  }, [ocrUrl]);

  // Track rendered image size for the overlay
  useEffect(() => {
    if (!imgLoaded) return;
    function update() {
      const el = imgRef.current;
      if (!el) return;
      setRenderSize({ w: el.clientWidth, h: el.clientHeight });
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [imgLoaded, page]);

  return (
    <div
      ref={wrapRef}
      className="relative mx-auto flex h-full w-full items-center justify-center"
    >
      <div className="relative inline-block max-h-full max-w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={imgUrl}
          ref={imgRef}
          src={imgUrl}
          alt={`Page ${page}`}
          onLoad={() => setImgLoaded(true)}
          className="block max-h-[100dvh] max-w-full object-contain select-none"
          draggable={false}
        />
        {showOverlay && ocr && renderSize ? (
          <MokuroOverlay
            data={ocr}
            renderWidth={renderSize.w}
            renderHeight={renderSize.h}
            onTextClick={onTextClick}
          />
        ) : null}
      </div>
    </div>
  );
}
