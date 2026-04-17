import type { Metadata } from "next";
import { LessonsBrowser } from "@/components/lessons/LessonsBrowser";

export const metadata: Metadata = {
  title: "Lessons",
  description: "All 75 lessons in the curriculum, grouped by section, JLPT, or status.",
};

export default function LessonsIndexPage() {
  return <LessonsBrowser />;
}
