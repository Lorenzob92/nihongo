"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  Maximize2,
  Minimize2,
} from "lucide-react";
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
  const [isFullscreen, setIsFullscreen] = useState(false);
  const hudTimer = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

  // Keyboard nav: Japanese manga reads RIGHT to LEFT.
  // To advance one page (NEXT) the user tap-flips toward the LEFT.
  // So Left arrow / Down / Space / Enter = NEXT, Right arrow / Up = PREVIOUS.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft" || e.key === "PageDown" || e.key === "ArrowDown") {
        goNext();
      } else if (e.key === "ArrowRight" || e.key === "PageUp" || e.key === "ArrowUp") {
        goPrev();
      } else if (e.key === "Escape") {
        if (definitionTarget) setDefinitionTarget(null);
        else if (document.fullscreenElement) document.exitFullscreen();
      } else if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        goNext();
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [goPrev, goNext, definitionTarget]);

  // Fullscreen handling
  const toggleFullscreen = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      el.requestFullscreen?.().catch(() => {
        // Fallback: try webkit
        type FsEl = HTMLElement & { webkitRequestFullscreen?: () => Promise<void> };
        (el as FsEl).webkitRequestFullscreen?.();
      });
    } else {
      document.exitFullscreen?.();
    }
  }, []);

  useEffect(() => {
    function onFsChange() {
      setIsFullscreen(!!document.fullscreenElement);
    }
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  // Auto-hide HUD after inactivity
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

  // Touch swipe (mobile). Japanese manga: swipe LEFT = NEXT page (drag the
  // current page off to the left, exposing the next-leftward page).
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
      // Swipe LEFT (dx negative) = NEXT page in Japanese reading order
      // Swipe RIGHT (dx positive) = PREVIOUS page
      if (dx < 0) goNext();
      else goPrev();
    },
    [goPrev, goNext],
  );

  return (
    <div
      ref={containerRef}
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
            page {page} / {total} . reads right to left
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setShowOverlay((s) => !s)}
            title={showOverlay ? "Hide text overlay (T)" : "Show text overlay (T)"}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold backdrop-blur-sm",
              showOverlay
                ? "bg-[#638dff]/30 text-white ring-1 ring-[#638dff]/60 hover:bg-[#638dff]/40"
                : "bg-white/10 text-white hover:bg-white/20",
            )}
          >
            {showOverlay ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
            OCR
          </button>
          <button
            onClick={toggleFullscreen}
            title={isFullscreen ? "Exit fullscreen (F)" : "Fullscreen (F)"}
            className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm hover:bg-white/20"
          >
            {isFullscreen ? (
              <Minimize2 className="h-3 w-3" />
            ) : (
              <Maximize2 className="h-3 w-3" />
            )}
          </button>
        </div>
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

        {/* Click zones: Japanese manga reads right to left.
            Click LEFT half = NEXT page. Click RIGHT half = PREVIOUS page. */}
        <button
          onClick={goNext}
          aria-label="Next page (left side)"
          className="absolute inset-y-0 left-0 z-10 w-1/4 cursor-w-resize"
        />
        <button
          onClick={goPrev}
          aria-label="Previous page (right side)"
          className="absolute inset-y-0 right-0 z-10 w-1/4 cursor-e-resize"
        />
      </div>

      {/* Bottom HUD: arrows reflect Japanese reading order.
          Left chevron = NEXT (you flip leftward to advance). */}
      <footer
        className={cn(
          "absolute inset-x-0 bottom-0 z-30 flex items-center justify-between gap-3 px-3 py-2 transition-opacity duration-300",
          "bg-gradient-to-t from-black/80 to-transparent text-white",
          hudVisible ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <button
          onClick={goNext}
          disabled={page === total}
          className="inline-flex items-center gap-1 rounded-md bg-white/10 px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-30 hover:bg-white/20"
        >
          <ChevronLeft className="h-4 w-4" />
          Next
        </button>
        <PageSlider page={page} total={total} onChange={setPage} />
        <button
          onClick={goPrev}
          disabled={page === 1}
          className="inline-flex items-center gap-1 rounded-md bg-white/10 px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-30 hover:bg-white/20"
        >
          Prev
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
  // Slider is reversed visually: dragging RIGHT goes to EARLIER pages,
  // dragging LEFT advances. We achieve this with `direction: rtl` on the input.
  return (
    <div className="flex flex-1 items-center gap-2 px-2">
      <input
        type="range"
        min={1}
        max={total}
        value={page}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        className="flex-1 accent-[#638dff]"
        style={{ direction: "rtl" }}
      />
      <span className="font-mono text-[10px] text-zinc-400 w-16 text-right">
        {page} / {total}
      </span>
    </div>
  );
}
