"use client";

export type MokuroBlock = {
  box: [number, number, number, number]; // x1, y1, x2, y2 in source pixels
  vertical: boolean;
  font_size: number;
  lines: string[];
  lines_coords?: number[][][];
};

export type MokuroPageData = {
  version: string;
  img_width: number;
  img_height: number;
  blocks: MokuroBlock[];
  img_path?: string;
};

type Props = {
  data: MokuroPageData;
  renderWidth: number;
  renderHeight: number;
  onTextClick: (text: string, clientX: number, clientY: number) => void;
};

export function MokuroOverlay({ data, renderWidth, renderHeight, onTextClick }: Props) {
  const sx = renderWidth / data.img_width;
  const sy = renderHeight / data.img_height;

  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{ width: renderWidth, height: renderHeight }}
    >
      {data.blocks.map((b, i) => {
        const [x1, y1, x2, y2] = b.box;
        const left = x1 * sx;
        const top = y1 * sy;
        const width = (x2 - x1) * sx;
        const height = (y2 - y1) * sy;
        const text = b.lines.join("");

        return (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              onTextClick(text, e.clientX, e.clientY);
            }}
            className="pointer-events-auto absolute rounded-[3px] border-2 border-[#638dff]/70 bg-[#638dff]/15 shadow-[0_0_0_1px_rgba(99,141,255,0.25)] transition-colors hover:bg-[#638dff]/40 hover:border-[#638dff] active:bg-[#638dff]/60"
            style={{
              left: `${left}px`,
              top: `${top}px`,
              width: `${width}px`,
              height: `${height}px`,
            }}
            title={text}
            aria-label={text}
          >
            <span className="sr-only">{text}</span>
          </button>
        );
      })}
    </div>
  );
}
