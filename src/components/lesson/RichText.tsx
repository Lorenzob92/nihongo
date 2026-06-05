import { JapaneseText } from "@/components/japanese/JapaneseText";

// Renders lesson prose with structure. Splits on blank lines for paragraphs,
// detects numbered lists, "Example:" callouts, and inline ✗/✓ rule markers.

type Block =
  | { kind: "paragraph"; text: string }
  | { kind: "ordered-list"; intro?: string; items: string[] }
  | { kind: "example"; text: string };

function parseBlocks(input: string): Block[] {
  const out: Block[] = [];
  const paras = input
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  for (const para of paras) {
    const lines = para
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);

    const firstNumIdx = lines.findIndex((l) => /^\d+[.)]\s/.test(l));
    const tailIsAllNumbered =
      firstNumIdx !== -1 &&
      lines.slice(firstNumIdx).every((l) => /^\d+[.)]\s/.test(l));

    if (tailIsAllNumbered) {
      const intro =
        firstNumIdx > 0 ? lines.slice(0, firstNumIdx).join(" ") : undefined;
      const items = lines
        .slice(firstNumIdx)
        .map((l) => l.replace(/^\d+[.)]\s*/, ""));
      out.push({ kind: "ordered-list", intro, items });
      continue;
    }

    if (/^Example[:：]?\s/i.test(para) || /^例[:：]\s/.test(para)) {
      out.push({
        kind: "example",
        text: para.replace(/^(Example|例)[:：]?\s*/i, ""),
      });
      continue;
    }

    out.push({ kind: "paragraph", text: para });
  }

  return out;
}

// Highlight ✗ and ✓ tokens with red/green chips. Captures the marker plus
// the immediately following non-whitespace run (CJK or ASCII) so phrases
// like ✗食べるに行く become a single chip.
const RULE_TOKEN = /([✗✓×○][^\s.。、，！？!?]+)/g;

function InlineRich({ text }: { text: string }) {
  const parts = text.split(RULE_TOKEN);
  return (
    <>
      {parts.map((p, i) => {
        if (!p) return null;
        if (p.startsWith("✗") || p.startsWith("×")) {
          return (
            <span
              key={i}
              className="mx-0.5 inline-flex items-center rounded-[6px] bg-[color:var(--warn)]/15 px-1.5 py-0.5 text-[0.95em] font-medium text-warn"
            >
              <JapaneseText>{p}</JapaneseText>
            </span>
          );
        }
        if (p.startsWith("✓") || p.startsWith("○")) {
          return (
            <span
              key={i}
              className="mx-0.5 inline-flex items-center rounded-[6px] bg-[color:var(--recommend)]/15 px-1.5 py-0.5 text-[0.95em] font-medium text-recommend"
            >
              <JapaneseText>{p}</JapaneseText>
            </span>
          );
        }
        return <span key={i}>{p}</span>;
      })}
    </>
  );
}

type RichTextProps = {
  text: string;
  className?: string;
};

export function RichText({ text, className }: RichTextProps) {
  const blocks = parseBlocks(text);
  return (
    <div
      className={
        "space-y-4 text-base leading-relaxed text-ink/85 sm:text-[17px] sm:leading-[1.7] " +
        (className ?? "")
      }
    >
      {blocks.map((b, i) => {
        if (b.kind === "ordered-list") {
          return (
            <div key={i} className="space-y-3">
              {b.intro ? (
                <p>
                  <InlineRich text={b.intro} />
                </p>
              ) : null}
              <ol className="space-y-2.5">
                {b.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-[color:var(--accent)]/15 text-[11px] font-semibold text-accent-deep">
                      {j + 1}
                    </span>
                    <div className="flex-1">
                      <InlineRich text={item} />
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          );
        }
        if (b.kind === "example") {
          return (
            <div
              key={i}
              className="rounded-[14px] border border-[color:var(--accent)]/25 bg-[color:var(--accent)]/8 px-4 py-3"
            >
              <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-deep">
                Example
              </p>
              <p className="text-[15px] leading-relaxed sm:text-base">
                <InlineRich text={b.text} />
              </p>
            </div>
          );
        }
        return (
          <p key={i}>
            <InlineRich text={b.text} />
          </p>
        );
      })}
    </div>
  );
}
