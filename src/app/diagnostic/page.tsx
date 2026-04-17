import type { Metadata } from "next";
import { DiagnosticClient } from "@/components/diagnostic/DiagnosticClient";

export const metadata: Metadata = {
  title: "Diagnostic",
  description:
    "Adaptive 4-axis placement test (kanji, vocab, grammar, listening). ~15 minutes.",
};

export default function DiagnosticPage() {
  return <DiagnosticClient />;
}
