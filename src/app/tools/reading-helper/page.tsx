import type { Metadata } from "next";
import { ReadingHelperClient } from "@/components/reading-helper/ReadingHelperClient";

export const metadata: Metadata = {
  title: "Reading helper",
  description: "Paste a Japanese paragraph and get a sentence-by-sentence breakdown.",
};

export default function ReadingHelperPage() {
  return <ReadingHelperClient />;
}
