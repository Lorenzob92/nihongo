"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, Search, RefreshCw, Play } from "lucide-react";
import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";
import { JapaneseText } from "@/components/japanese/JapaneseText";

type KanjiEntry = {
  unicode: string;
  strokeCount: number;
  svgPath: string;
  jlptLevel: string;
};

type KanjiIndex = Record<string, KanjiEntry>;

export function KanjiExplorerClient() {
  const [index, setIndex] = useState<KanjiIndex | null>(null);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string>("一");
  const [svg, setSvg] = useState<string>("");
  const [animKey, setAnimKey] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Load the index once
  useEffect(() => {
    let cancelled = false;
    fetch("/kanji-stroke-index.json")
      .then((r) => r.json())
      .then((data: KanjiIndex) => {
        if (cancelled) return;
        setIndex(data);
      })
      .catch(() => {
        // ignore
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Load the selected SVG
  useEffect(() => {
    if (!index) return;
    const entry = index[selected];
    if (!entry) {
      setSvg("");
      return;
    }
    fetch(entry.svgPath)
      .then((r) => r.text())
      .then((text) => {
        setSvg(text);
        setAnimKey((k) => k + 1);
      })
      .catch(() => setSvg(""));
  }, [index, selected]);

  // Apply the dashoffset animation after the SVG is mounted
  useEffect(() => {
    if (!containerRef.current || !svg) return;
    const svgEl = containerRef.current.querySelector("svg");
    if (!svgEl) return;
    // Make the SVG responsive
    svgEl.removeAttribute("width");
    svgEl.removeAttribute("height");
    svgEl.setAttribute("class", "w-full h-full");
    const paths = svgEl.querySelectorAll("path");
    paths.forEach((p, i) => {
      const len = (p as SVGPathElement).getTotalLength?.() ?? 0;
      if (!len) return;
      p.setAttribute("stroke", "#1f2937");
      p.setAttribute("stroke-width", "3");
      p.setAttribute("stroke-linecap", "round");
      p.setAttribute("stroke-linejoin", "round");
      p.setAttribute("fill", "none");
      const styleEl = p as unknown as { style: CSSStyleDeclaration };
      styleEl.style.strokeDasharray = `${len}`;
      styleEl.style.strokeDashoffset = `${len}`;
      styleEl.style.transition = `stroke-dashoffset 0.6s ease ${i * 0.55}s`;
    });
    // Force a reflow then animate to 0
    requestAnimationFrame(() => {
      paths.forEach((p) => {
        const styleEl = p as unknown as { style: CSSStyleDeclaration };
        styleEl.style.strokeDashoffset = "0";
      });
    });
  }, [svg, animKey]);

  const entry = index?.[selected];

  const allChars = useMemo(() => (index ? Object.keys(index) : []), [index]);

  const matches = useMemo(() => {
    if (!query) return allChars.slice(0, 30);
    const trimmed = query.trim();
    return allChars.filter((c) => c.includes(trimmed)).slice(0, 30);
  }, [query, allChars]);

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-10">
      <Link
        href="/tools"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-ink"
      >
        <ArrowLeft className="h-3 w-3" /> All tools
      </Link>

      <header className="mt-6 space-y-3">
        <div className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-[12px] bg-accent-soft text-accent-deep">
            <Search className="h-5 w-5" />
          </span>
          <Pill tone="recommend">Live</Pill>
        </div>
        <h1 className="font-display text-3xl text-ink-deep sm:text-4xl">
          Kanji explorer{" "}
          <JapaneseText size="2xl" className="ml-1 text-muted">
            漢字エクスプローラー
          </JapaneseText>
        </h1>
        <p className="max-w-2xl text-sm text-muted">
          {index ? `${allChars.length} kanji loaded from KanjiVG. Search any character to see its stroke-order animation.` : "Loading KanjiVG index…"}
        </p>
      </header>

      <section className="mt-6 grid gap-4 lg:grid-cols-[1fr_2fr]">
        <aside className="rounded-[16px] border border-line bg-surface p-4">
          <label className="mb-2 block text-xs font-medium text-muted">
            Search a kanji
          </label>
          <div className="flex gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="例: 桜"
              lang="ja"
              className="font-jp w-full rounded-[10px] border border-line bg-surface p-2 text-base"
            />
          </div>
          <p className="mt-3 text-[11px] text-muted">{matches.length} matches</p>
          <ul className="mt-2 grid max-h-[420px] grid-cols-6 gap-1 overflow-y-auto">
            {matches.map((c) => (
              <li key={c}>
                <button
                  type="button"
                  onClick={() => setSelected(c)}
                  className={
                    "flex h-10 w-full items-center justify-center rounded-[8px] border text-lg transition-colors " +
                    (c === selected
                      ? "border-accent bg-accent-soft text-accent-deep"
                      : "border-line bg-surface text-ink hover:border-line-strong")
                  }
                >
                  <JapaneseText>{c}</JapaneseText>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <div className="rounded-[16px] border border-line bg-surface p-5">
          <header className="mb-3 flex items-baseline justify-between gap-3">
            <JapaneseText size="3xl" className="text-ink-deep">
              {selected}
            </JapaneseText>
            <div className="flex items-center gap-2">
              {entry ? (
                <>
                  <Pill tone="muted">{entry.jlptLevel}</Pill>
                  <Pill tone="muted">{entry.strokeCount} strokes</Pill>
                </>
              ) : null}
            </div>
          </header>

          <div
            ref={containerRef}
            className="mx-auto aspect-square w-full max-w-[320px] rounded-[12px] border border-line bg-surface-soft p-4"
            // The SVG is injected so we can manipulate path attributes for the animation.
            dangerouslySetInnerHTML={{ __html: svg || "" }}
          />

          <div className="mt-4 flex justify-center gap-2">
            <Button variant="secondary" onClick={() => setAnimKey((k) => k + 1)}>
              <RefreshCw className="h-4 w-4" /> Replay strokes
            </Button>
            <Button variant="ghost" onClick={() => setAnimKey((k) => k + 1)}>
              <Play className="h-4 w-4" /> Animate again
            </Button>
          </div>

          <p className="mt-4 text-[11px] text-muted-soft">
            Stroke data: KanjiVG (Creative Commons). Animation uses the SVG `stroke-dashoffset` trick.
          </p>
        </div>
      </section>
    </main>
  );
}
