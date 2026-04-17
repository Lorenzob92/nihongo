"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

type StepNavProps = {
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
  isLast: boolean;
};

export function StepNav({ onPrev, onNext, canPrev, canNext, isLast }: StepNavProps) {
  return (
    <div className="sticky bottom-0 z-30 border-t border-white/10 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Button variant="ghost" onClick={onPrev} disabled={!canPrev}>
          <ChevronLeft className="h-4 w-4" /> Previous
        </Button>
        <Button variant="primary" onClick={onNext} disabled={!canNext}>
          {isLast ? "Finish" : "Continue"}
          {!isLast ? <ChevronRight className="h-4 w-4" /> : null}
        </Button>
      </div>
    </div>
  );
}
