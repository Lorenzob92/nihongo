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
  "inline-flex items-center justify-center gap-2 rounded-[12px] px-4 py-2.5 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-[color:var(--accent)] disabled:opacity-40 disabled:cursor-not-allowed";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-deep shadow-[0_1px_2px_rgba(63,111,207,0.15)]",
  secondary:
    "bg-surface text-ink hairline hover:bg-surface-soft",
  ghost: "bg-transparent text-ink hover:bg-surface-soft",
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
