import type { ReactNode } from "react";

// Lesson content writes furigana inline as 漢字(かな). This turns each
// kanji run + bracketed kana reading into a real <ruby> element, so the
// reading sits small above the kanji instead of interrupting the line.
const RUBY = /([一-鿿々〆ヶ]+)\(([ぁ-ゖァ-ヺー]+)\)/g;

export function withRuby(text: string): ReactNode {
  if (!text.includes("(")) return text;
  const out: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const m of text.matchAll(RUBY)) {
    const at = m.index ?? 0;
    if (at > last) out.push(text.slice(last, at));
    out.push(
      <ruby key={key++} lang="ja">
        {m[1]}
        <rt>{m[2]}</rt>
      </ruby>,
    );
    last = at + m[0].length;
  }
  if (out.length === 0) return text;
  if (last < text.length) out.push(text.slice(last));
  return out;
}
