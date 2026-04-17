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
        "bg-surface hairline shadow-card",
        hero ? "rounded-[20px]" : "rounded-[16px]",
        padded && "p-5 sm:p-6",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
