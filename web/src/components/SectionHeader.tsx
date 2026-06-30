import { cn } from "@/lib/cn";

type Props = {
  eyebrow?: string;
  titel: string;
  lead?: string;
  /** Heading-Ebene */
  as?: "h1" | "h2" | "h3";
  align?: "left" | "center";
  className?: string;
  id?: string;
};

export function SectionHeader({
  eyebrow,
  titel,
  lead,
  as = "h2",
  align = "left",
  className,
  id,
}: Props) {
  const Heading = as;
  const size =
    as === "h1"
      ? "text-[2.4rem] sm:text-5xl md:text-[3.5rem]"
      : as === "h2"
      ? "text-3xl md:text-[2.4rem]"
      : "text-xl md:text-2xl";

  return (
    <div className={cn(align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-3xl", className)}>
      {eyebrow ? (
        <p className="eyebrow mb-4 inline-flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-block h-[1px] w-6 bg-[color:var(--color-accent-hover)]"
          />
          {eyebrow}
        </p>
      ) : null}
      <Heading id={id} className={cn(size, "text-[color:var(--color-ink)]")}>
        {titel}
      </Heading>
      {lead ? (
        <p className="mt-5 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">{lead}</p>
      ) : null}
    </div>
  );
}
