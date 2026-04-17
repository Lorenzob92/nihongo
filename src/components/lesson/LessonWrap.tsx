"use client";

import { CheckCircle2, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import type { LessonStep } from "@/lib/types";
import { Button, LinkButton } from "@/components/ui/Button";

type Props = Extract<LessonStep, { type: "wrap" }>;

export function LessonWrap(props: Props) {
  return (
    <section className="space-y-6">
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="flex items-center gap-3"
      >
        <span className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--recommend)]/10 text-recommend">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Lesson complete
          </p>
          <h2 className="font-display text-2xl text-ink-deep sm:text-3xl">
            Scheduled for review
          </h2>
        </div>
      </motion.div>

      <div className="rounded-[16px] border border-line bg-surface p-5">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Going into your SRS queue
        </p>
        <ul className="space-y-2">
          {props.srsItems.map((item, i) => (
            <li
              key={i}
              className="flex items-start justify-between gap-3 rounded-[10px] border border-line bg-surface-soft px-3 py-2"
            >
              <div>
                <p className="text-sm font-medium text-ink-deep">{item.front}</p>
                <p className="text-xs text-muted">{item.back}</p>
              </div>
              <span className="flex-none rounded-full bg-surface px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                {item.type}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        <LinkButton href="/" variant="primary">
          Back to hub
        </LinkButton>
        <LinkButton href="/lessons" variant="secondary">
          Pick the next lesson
        </LinkButton>
        <LinkButton
          href="https://ankiweb.net/decks"
          variant="ghost"
          external
        >
          Open Anki
          <ExternalLink className="h-4 w-4" />
        </LinkButton>
      </div>
    </section>
  );
}
