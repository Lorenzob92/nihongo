import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
  padded?: boolean;
  hero?: boolean;
};

export function Card({
  children,
  className,
  as: Tag = "div",
  padded = true,
  hero = false,
}: CardProps) {
  return (
    <Tag
      className={cn(
        "bg-surface border border-white/10 shadow-card",
        hero ? "rounded-[16px]" : "rounded-[12px]",
        padded && "p-4 sm:p-5",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
