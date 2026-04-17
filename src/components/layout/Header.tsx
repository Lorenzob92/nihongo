import Link from "next/link";
import { USER_STATE } from "@/data/user-state";
import { PHASE_META } from "@/lib/phase";
import { Pill } from "@/components/ui/Pill";

const NAV = [
  { href: "/", label: "Hub" },
  { href: "/lessons", label: "Lessons" },
  { href: "/tools", label: "Tools" },
  { href: "/manga-ladder", label: "Manga" },
];

export function Header() {
  const phase = PHASE_META[USER_STATE.currentPhase];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <span
            className="font-display text-2xl leading-none tracking-tight text-ink-deep"
            lang="ja"
          >
            日本語
          </span>
          <span className="hidden text-xs font-mono uppercase tracking-[0.18em] text-muted sm:inline">
            Lorenzo
          </span>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[10px] px-3 py-1.5 text-sm font-medium text-ink/80 transition-colors hover:bg-surface-soft hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Pill tone="phase" phaseColor={phase.color}>
            {phase.label}
          </Pill>
          <Pill tone="muted" className="hidden sm:inline-flex">
            day {USER_STATE.dayCounter}
          </Pill>
        </div>
      </div>

      {/* Mobile nav strip */}
      <nav className="flex items-center gap-1 overflow-x-auto border-t border-line px-3 py-2 sm:hidden" aria-label="Primary mobile">
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap rounded-[10px] px-3 py-1.5 text-sm font-medium text-ink/80 hover:bg-surface-soft"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
