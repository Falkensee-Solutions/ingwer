import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "subtle";
type Size = "md" | "lg";

const VARIANT: Record<Variant, string> = {
  primary:
    "bg-[color:var(--color-primary)] text-white hover:bg-[color:var(--color-primary-hover)] border border-[color:var(--color-primary)] shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_10px_22px_-14px_rgba(28,74,82,0.7)]",
  secondary:
    "bg-[color:var(--color-accent)] text-white hover:bg-[color:var(--color-accent-hover)] border border-[color:var(--color-accent)] shadow-[0_1px_0_rgba(255,255,255,0.1)_inset,0_10px_22px_-14px_rgba(198,106,43,0.55)]",
  ghost:
    "bg-transparent text-[color:var(--color-primary)] hover:bg-[color:var(--color-primary-soft)] border border-[color:var(--color-primary)]",
  subtle:
    "bg-[color:var(--color-surface)] text-[color:var(--color-ink)] hover:bg-[color:var(--color-bg-deep)] border border-[color:var(--color-line)]",
};

const SIZE: Record<Size, string> = {
  md: "px-5 py-2.5 text-[0.95rem]",
  lg: "px-7 py-3.5 text-base",
};

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold no-underline transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed tracking-[0.005em]";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonLinkProps = CommonProps & {
  href: string;
  external?: boolean;
};

export function ButtonLink({
  href,
  external,
  variant = "primary",
  size = "md",
  className,
  children,
}: ButtonLinkProps) {
  const classes = cn(BASE, VARIANT[variant], SIZE[size], className);
  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}

type ButtonProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button {...rest} className={cn(BASE, VARIANT[variant], SIZE[size], className)}>
      {children}
    </button>
  );
}
