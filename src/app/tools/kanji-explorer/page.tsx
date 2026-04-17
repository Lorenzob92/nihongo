import type { Metadata } from "next";
import { KanjiExplorerClient } from "@/components/kanji-explorer/KanjiExplorerClient";

export const metadata: Metadata = {
  title: "Kanji explorer",
  description: "Search any kanji and watch its stroke order animate.",
};

export default function KanjiExplorerPage() {
  return <KanjiExplorerClient />;
}
