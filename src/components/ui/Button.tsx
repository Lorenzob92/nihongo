import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
type LinkButtonProps = CommonProps & {
  href: string;
  external?: boolean;
};

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-[#638dff] disabled:opacity-40 disabled:cursor-not-allowed";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-[#638dff] text-white hover:bg-[#4f72d6]",
  secondary:
    "bg-white/5 text-white border border-white/10 hover:bg-white/10",
  ghost: "bg-transparent text-zinc-300 hover:bg-white/5 hover:text-white",
};

export function Button({
  variant = "primary",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={cn(BASE, VARIANTS[variant], className)} {...rest}>
      {children}
    </button>
  );
}

export function LinkButton({
  variant = "primary",
  className,
  children,
  href,
  external,
}: LinkButtonProps) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(BASE, VARIANTS[variant], className)}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cn(BASE, VARIANTS[variant], className)}>
      {children}
    </Link>
  );
}
