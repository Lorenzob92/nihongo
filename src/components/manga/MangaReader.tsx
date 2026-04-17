"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight, Eye, EyeOff, X } from "lucide-react";
import type { MangaVolume } from "@/data/manga-volumes";
import { MangaPage } from "./MangaPage";
import { DefinitionPopup } from "./DefinitionPopup";
import { cn } from "@/lib/utils";

type ReaderProps = {
  volume: MangaVolume;
};

const STORAGE_KEY_PREFIX = "nihongo:reader-pos:";

export function MangaReader({ volume }: ReaderProps) {
  const total = volume.totalPages;
  const storageKey = `${STORAGE_KEY_PREFIX}${volume.mangaSlug}/${volume.volume}`;

  const [page, setPage] = useState(1);
  const [showOverlay, setShowOverlay] = useState(true);
  const [definitionTarget, setDefinitionTarget] = useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);
  const [hudVisible, setHudVisible] = useState(true);
  const hudTimer = useRef<number | null>(null);

  // Hydrate position from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const n = parseInt(raw, 10);
        if (n >= 1 && n <= total) setPage(n);
      }
    } catch {
      // ignore
    }
  }, [storageKey, total]);

  // Persist
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, String(page));
    } catch {
      // ignore
    }
  }, [storageKey, page]);

  const goPrev = useCallback(() => {
    setPage((p) => Math.max(1, p - 1));
    setDefinitionTarget(null);
  }, []);
  const goNext = useCallback(() => {
    setPage((p) => Math.min(total, p + 1));
    setDefinitionTarget(null);
  }, [total]);

  // Keyboard nav
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft" || e.key === "PageDown" || e.key === "ArrowDown") {
        // Manga reads right-to-left, but for simplicity left arrow = previous page (Western reading)
        goPrev();
      } else if (e.key === "ArrowRight" || e.key === "PageUp" || e.key === "ArrowUp") {
        goNext();
      } else if (e.key === "Escape") {
        setDefinitionTarget(null);
      } else if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        goNext();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext]);

  // Auto-hide HUD after 3s of inactivity
  const showHud = useCallback(() => {
    setHudVisible(true);
    if (hudTimer.current) window.clearTimeout(hudTimer.current);
    hudTimer.current = window.setTimeout(() => setHudVisible(false), 3500);
  }, []);

  useEffect(() => {
    showHud();
    return () => {
      if (hudTimer.current) window.clearTimeout(hudTimer.current);
    };
  }, [page, showHud]);

  const onTextClick = useCallback(
    (text: string, x: number, y: number) => {
      setDefinitionTarget({ text, x, y });
    },
    [],
  );

  // Touch swipe handling for mobile
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  }, []);
  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!touchStart.current) return;
      const t = e.changedTouches[0];
      const dx = t.clientX - touchStart.current.x;
      const dy = t.clientY - touchStart.current.y;
      touchStart.current = null;
      if (Math.abs(dx) < 60 || Math.abs(dy) > Math.abs(dx)) return;
      // swipe right = previous page (mimic page-flip from right edge)
      if (dx > 0) goPrev();
      else goNext();
    },
    [goPrev, goNext],
  );

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black"
      onMouseMove={showHud}
      onTouchStart={(e) => {
        showHud();
        onTouchStart(e);
      }}
      onTouchEnd={onTouchEnd}
    >
      {/* Top HUD */}
      <header
        className={cn(
          "absolute inset-x-0 top-0 z-30 flex items-center justify-between gap-3 px-3 py-2 transition-opacity duration-300",
          "bg-gradient-to-b from-black/80 to-transparent text-white",
          hudVisible ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <Link
          href={`/manga-ladder/${volume.mangaSlug}`}
          className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm hover:bg-white/20"
        >
          <ArrowLeft className="h-3 w-3" /> Back
        </Link>
        <div className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-300">
            {volume.title}
          </p>
          <p className="font-mono text-[10px] text-zinc-500">
            page {page} / {total}
          </p>
        </div>
        <button
          onClick={() => setShowOverlay((s) => !s)}
          title={showOverlay ? "Hide text overlay" : "Show text overlay"}
          className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm hover:bg-white/20"
        >
          {showOverlay ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
          OCR
        </button>
      </header>

      {/* Page */}
      <div className="relative flex-1 overflow-hidden">
        <MangaPage
          mangaSlug={volume.mangaSlug}
          volume={volume.volume}
          page={page}
          showOverlay={showOverlay}
          onTextClick={onTextClick}
        />

        {/* Click zones for previous / next */}
        <button
          onClick={goPrev}
          aria-label="Previous page"
          className="absolute inset-y-0 left-0 z-10 w-1/4 cursor-w-resize"
        />
        <button
          onClick={goNext}
          aria-label="Next page"
          className="absolute inset-y-0 right-0 z-10 w-1/4 cursor-e-resize"
        />
      </div>

      {/* Bottom HUD */}
      <footer
        className={cn(
          "absolute inset-x-0 bottom-0 z-30 flex items-center justify-between gap-3 px-3 py-2 transition-opacity duration-300",
          "bg-gradient-to-t from-black/80 to-transparent text-white",
          hudVisible ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <button
          onClick={goPrev}
          disabled={page === 1}
          className="inline-flex items-center gap-1 rounded-md bg-white/10 px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-30 hover:bg-white/20"
        >
          <ChevronLeft className="h-4 w-4" />
          Prev
        </button>
        <PageSlider page={page} total={total} onChange={setPage} />
        <button
          onClick={goNext}
          disabled={page === total}
          className="inline-flex items-center gap-1 rounded-md bg-white/10 px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-30 hover:bg-white/20"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </button>
      </footer>

      {/* Definition popup */}
      {definitionTarget ? (
        <DefinitionPopup
          text={definitionTarget.text}
          anchorX={definitionTarget.x}
          anchorY={definitionTarget.y}
          onClose={() => setDefinitionTarget(null)}
        />
      ) : null}
    </div>
  );
}

function PageSlider({
  page,
  total,
  onChange,
}: {
  page: number;
  total: number;
  onChange: (n: number) => void;
}) {
  return (
    <div className="flex flex-1 items-center gap-2 px-2">
      <input
        type="range"
        min={1}
        max={total}
        value={page}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        className="flex-1 accent-[#638dff]"
      />
      <span className="font-mono text-[10px] text-zinc-400 w-16 text-right">
        {page} / {total}
      </span>
    </div>
  );
}
