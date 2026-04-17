import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Activity } from "lucide-react";
import { Pill } from "@/components/ui/Pill";

export const metadata: Metadata = {
  title: "Diagnostic",
  description: "One-time level diagnostic to set the right starting point.",
};

export default function DiagnosticPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-ink"
      >
        <ArrowLeft className="h-3 w-3" /> Hub
      </Link>

      <header className="mt-6 space-y-3">
        <div className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-[12px] bg-accent-soft text-accent-deep">
            <Activity className="h-5 w-5" />
          </span>
          <Pill tone="muted">Phase 2</Pill>
        </div>
        <h1 className="font-display text-3xl text-ink-deep sm:text-4xl">
          Diagnostic
        </h1>
        <p className="max-w-2xl text-sm text-muted">
          A one-time forced-recall test on particles, conjugations, and N5 vocab. The output sets the starting Reactivate phase weak-points to drill for the first month.
        </p>
      </header>

      <section className="mt-8 rounded-[16px] border border-line bg-surface p-6">
        <h2 className="font-display text-xl text-ink-deep">Coming in Phase 2</h2>
        <p className="mt-2 text-sm text-ink/80">
          The diagnostic will run as a 30-question adaptive set drawn from sections A through C of the curriculum. Results feed directly into the FSRS queue, prioritising your weakest items first.
        </p>
      </section>
    </main>
  );
}
