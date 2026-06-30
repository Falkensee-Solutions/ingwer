import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** als <main> rendern, wenn dies der Hauptinhalt der Seite ist */
  as?: "div" | "section" | "main" | "header" | "footer";
  /** vertikale Polsterung */
  padding?: "none" | "sm" | "md" | "lg";
  id?: string;
  /** ARIA-Beschreibung für Sektionen */
  ariaLabelledby?: string;
};

const PADDING = {
  none: "",
  sm: "py-8",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-24",
};

export function Container({
  children,
  className,
  as = "div",
  padding = "none",
  id,
  ariaLabelledby,
}: Props) {
  const Tag = as as keyof React.JSX.IntrinsicElements;
  return (
    <Tag
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn("mx-auto w-full max-w-[72rem] px-4 sm:px-6 lg:px-8", PADDING[padding], className)}
    >
      {children}
    </Tag>
  );
}
