"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { LessonContent, LessonStep } from "@/lib/types";
import { Pill } from "@/components/ui/Pill";
import { JapaneseText } from "@/components/japanese/JapaneseText";
import { StepProgress } from "./StepProgress";
import { StepNav } from "./StepNav";
import { LessonHook } from "./LessonHook";
import { LessonConcept } from "./LessonConcept";
import { LessonExamples } from "./LessonExamples";
import { LessonDrill } from "./LessonDrill";
import { LessonListening } from "./LessonListening";
import { LessonReading } from "./LessonReading";
import { LessonCheatsheet } from "./LessonCheatsheet";
import { LessonWrap } from "./LessonWrap";

const STEP_TITLES: Record<LessonStep["type"], string> = {
  hook: "Hook",
  concept: "Concept",
  examples: "Examples",
  drill: "Drill",
  listening: "Listening",
  reading: "Reading",
  cheatsheet: "Cheatsheet",
  wrap: "Wrap",
};

function renderStep(step: LessonStep) {
  switch (step.type) {
    case "hook":
      return <LessonHook {...step} />;
    case "concept":
      return <LessonConcept {...step} />;
    case "examples":
      return <LessonExamples {...step} />;
    case "drill":
      return <LessonDrill {...step} />;
    case "listening":
      return <LessonListening {...step} />;
    case "reading":
      return <LessonReading {...step} />;
    case "cheatsheet":
      return <LessonCheatsheet {...step} />;
    case "wrap":
      return <LessonWrap {...step} />;
  }
}

type LessonFlowProps = {
  content: LessonContent;
};

export function LessonFlow({ content }: LessonFlowProps) {
  const [index, setIndex] = useState(0);
  const total = content.steps.length;
  const step = content.steps[index];

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [index]);

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(total - 1, i + 1));

  return (
    <div className="flex flex-1 flex-col">
      <StepProgress
        currentIndex={index}
        total={total}
        label={STEP_TITLES[step.type]}
        onPick={(i) => setIndex(i)}
        steps={content.steps.map((s) => ({ type: s.type }))}
      />

      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
          <header className="mb-5 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <Pill tone="accent">Section {content.section}</Pill>
              <Pill tone="jlpt">{content.jlptLevel}</Pill>
              <Pill tone="muted">{content.estimatedMin} min</Pill>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              {content.title}
            </h1>
            <JapaneseText size="xl" className="text-zinc-400 font-atmos">
              {content.titleJa}
            </JapaneseText>
          </header>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 24 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
              }}
              exit={{ opacity: 0, x: -24, transition: { duration: 0.18 } }}
            >
              {renderStep(step)}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <StepNav
        onPrev={goPrev}
        onNext={goNext}
        canPrev={index > 0}
        canNext={index < total - 1}
        isLast={index === total - 1}
      />
    </div>
  );
}
