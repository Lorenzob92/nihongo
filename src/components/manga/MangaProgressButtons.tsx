"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, BookOpen, Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "none" | "started" | "reading" | "complete";

const STATUSES: { value: Status; label: string; Icon: React.ComponentType<{ className?: string }> }[] = [
  { value: "started", label: "Started", Icon: Bookmark },
  { value: "reading", label: "Reading", Icon: BookOpen },
  { value: "complete", label: "Complete", Icon: CheckCircle2 },
];

const STORAGE_KEY = "nihongo:manga-progress";

function readAll(): Record<string, Status> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeAll(state: Record<string, Status>) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore quota errors
  }
}

export function MangaProgressButtons({ slug }: { slug: string }) {
  const [status, setStatus] = useState<Status>("none");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const all = readAll();
    setStatus(all[slug] ?? "none");
    setHydrated(true);
  }, [slug]);

  function set(next: Status) {
    setStatus(next);
    const all = readAll();
    if (next === "none") {
      delete all[slug];
    } else {
      all[slug] = next;
    }
    writeAll(all);
  }

  return (
    <div className="rounded-[10px] border border-white/10 bg-surface p-3">
      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
        My progress
      </p>
      <div className="grid grid-cols-3 gap-1.5">
        {STATUSES.map(({ value, label, Icon }) => {
          const isActive = hydrated && status === value;
          return (
            <button
              key={value}
              type="button"
              onClick={() => set(isActive ? "none" : value)}
              className={cn(
                "inline-flex flex-col items-center gap-1 rounded-md px-2 py-2 text-[10px] font-semibold uppercase tracking-wider transition-colors",
                isActive
                  ? "bg-[#638dff]/15 text-[#638dff] border border-[#638dff]/30"
                  : "bg-white/5 text-zinc-400 border border-white/10 hover:bg-white/10",
              )}
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
