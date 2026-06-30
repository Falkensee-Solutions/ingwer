import { ButtonLink } from "./Button";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";

type Props = {
  eyebrow?: string;
  titel: string;
  text: string;
  primaryCta?: { href: string; label: string; external?: boolean };
  secondaryCta?: { href: string; label: string; external?: boolean };
  variant?: "soft" | "primary";
};

export function CTASection({
  eyebrow,
  titel,
  text,
  primaryCta,
  secondaryCta,
  variant = "soft",
}: Props) {
  const bg =
    variant === "primary"
      ? "bg-[color:var(--color-primary)] text-white"
      : "bg-[color:var(--color-surface)] text-[color:var(--color-ink)] border border-[color:var(--color-line)]";
  const textTone =
    variant === "primary"
      ? "text-white/85"
      : "text-[color:var(--color-ink-soft)]";

  return (
    <section
      aria-labelledby="cta-titel"
      className={`my-12 overflow-hidden rounded-3xl ${bg} relative`}
    >
      {variant === "primary" ? (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[color:var(--color-accent)]/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-white/5 blur-3xl"
          />
        </>
      ) : null}
      <Container padding="md" className="relative py-12 md:flex md:items-center md:justify-between md:gap-12 md:py-14">
        <div className="max-w-2xl">
          {eyebrow ? (
            <p
              className={`eyebrow mb-4 ${
                variant === "primary"
                  ? "!text-white/70"
                  : ""
              }`}
            >
              {eyebrow}
            </p>
          ) : null}
          <h2
            id="cta-titel"
            className={`text-[1.8rem] font-extrabold leading-tight tracking-[-0.02em] md:text-[2.2rem] ${
              variant === "primary" ? "text-white" : ""
            }`}
          >
            {titel}
          </h2>
          <p className={`mt-4 text-base leading-relaxed md:text-lg ${textTone}`}>{text}</p>
        </div>
        <div className="mt-7 flex flex-wrap gap-3 md:mt-0 md:flex-shrink-0">
          {primaryCta ? (
            <ButtonLink
              href={primaryCta.href}
              external={primaryCta.external}
              variant={variant === "primary" ? "secondary" : "primary"}
              size="lg"
            >
              {primaryCta.label}
            </ButtonLink>
          ) : null}
          {secondaryCta ? (
            <ButtonLink
              href={secondaryCta.href}
              external={secondaryCta.external}
              variant={variant === "primary" ? "subtle" : "ghost"}
              size="lg"
            >
              {secondaryCta.label}
            </ButtonLink>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

// Re-export für intuitiveren Import in Sektionen
export { SectionHeader };
