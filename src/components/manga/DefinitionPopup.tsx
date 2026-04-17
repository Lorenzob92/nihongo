"use client";

import { useEffect, useState } from "react";
import { Inbox, X, Loader2, ExternalLink } from "lucide-react";
import { JapaneseText } from "@/components/japanese/JapaneseText";

type Props = {
  text: string;
  anchorX: number;
  anchorY: number;
  onClose: () => void;
};

const MINING_KEY = "nihongo:mining-queue";

function addToMining(item: { text: string; gloss: string; addedAt: string }) {
  try {
    const raw = localStorage.getItem(MINING_KEY);
    const list = raw ? JSON.parse(raw) : [];
    list.unshift(item);
    localStorage.setItem(MINING_KEY, JSON.stringify(list.slice(0, 200)));
    return true;
  } catch {
    return false;
  }
}

export function DefinitionPopup({ text, anchorX, anchorY, onClose }: Props) {
  const [gloss, setGloss] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mined, setMined] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    setGloss(null);
    setMined(false);

    fetch("/api/reading-helper/define", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    })
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const j = await res.json();
        if (!cancelled) {
          setGloss(j.definition || "(no definition)");
          setLoading(false);
        }
      })
      .catch((e) => {
        if (!cancelled) {
          setError(String(e?.message ?? e));
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [text]);

  // Close on outside click / esc handled by parent. Position the popup
  // intelligently: try below the tap, fall back to above if it'd overflow.
  const popupHeight = 220;
  const popupWidth = 320;
  const fitsBelow = anchorY + popupHeight + 16 < window.innerHeight;
  const top = fitsBelow ? Math.min(anchorY + 16, window.innerHeight - popupHeight - 8) : Math.max(8, anchorY - popupHeight - 16);
  const left = Math.max(8, Math.min(anchorX - popupWidth / 2, window.innerWidth - popupWidth - 8));

  return (
    <div
      className="fixed z-50 w-[320px] rounded-[12px] border border-white/10 bg-surface-2 shadow-card"
      style={{ top, left }}
      onClick={(e) => e.stopPropagation()}
    >
      <header className="flex items-start justify-between gap-2 border-b border-white/10 p-3">
        <JapaneseText size="lg" className="text-white">
          {text}
        </JapaneseText>
        <button
          onClick={onClose}
          aria-label="Close"
          className="grid h-6 w-6 place-items-center rounded-md text-zinc-400 hover:bg-white/10 hover:text-white"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </header>

      <div className="p-3 max-h-[180px] overflow-y-auto">
        {loading ? (
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <Loader2 className="h-3.5 w-3.5 animate-spin" /> Looking up...
          </div>
        ) : error ? (
          <p className="text-xs text-red-400">{error}</p>
        ) : (
          <p className="whitespace-pre-line text-sm leading-relaxed text-zinc-200">
            {gloss}
          </p>
        )}
      </div>

      <footer className="flex items-center justify-between gap-2 border-t border-white/10 p-2">
        <button
          onClick={() => {
            const ok = addToMining({
              text,
              gloss: gloss ?? "",
              addedAt: new Date().toISOString(),
            });
            setMined(ok);
          }}
          className="inline-flex items-center gap-1.5 rounded-md bg-[#638dff]/15 px-2.5 py-1 text-[11px] font-semibold text-[#638dff] hover:bg-[#638dff]/25 disabled:opacity-50"
          disabled={mined || loading || !!error}
        >
          <Inbox className="h-3.5 w-3.5" />
          {mined ? "Added" : "Add to mining"}
        </button>
        <a
          href={`https://jisho.org/search/${encodeURIComponent(text)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-zinc-400 hover:text-white"
        >
          Jisho <ExternalLink className="h-3 w-3" />
        </a>
      </footer>
    </div>
  );
}
