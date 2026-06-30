import { ButtonLink } from "./Button";
import { Container } from "./Container";

type Props = {
  eyebrow?: string;
  titel: string;
  claim?: string;
  lead?: string;
  ctas?: Array<{ href: string; label: string; variant?: "primary" | "secondary" | "ghost" | "subtle" }>;
};

export function Hero({ eyebrow, titel, claim, lead, ctas }: Props) {
  return (
    <section
      aria-labelledby="hero-titel"
      className="relative overflow-hidden border-b border-[color:var(--color-line)]/70 bg-[color:var(--color-bg)]"
    >
      {/* Bunte Brand-Blobs – analog Flyer/Ablaufplan (Lavendel, Sage, Sonne, Koralle, Orange). */}
      <div
        aria-hidden="true"
        className="brand-blob -right-32 -top-40 hidden h-[26rem] w-[26rem] bg-[color:var(--color-lavender-soft)] md:block"
      />
      <div
        aria-hidden="true"
        className="brand-blob -left-40 bottom-[-12rem] hidden h-[24rem] w-[24rem] bg-[color:var(--color-sage-soft)] md:block"
      />
      <div
        aria-hidden="true"
        className="brand-blob right-[10%] top-[35%] hidden h-32 w-32 bg-[color:var(--color-sunny-soft)] md:block"
      />
      <div
        aria-hidden="true"
        className="brand-blob left-[55%] top-[8%] hidden h-20 w-20 bg-[color:var(--color-accent-soft)] md:block"
      />

      {/* Hand-drawn Squiggle als kleiner Akzent rechts oben */}
      <span
        aria-hidden="true"
        className="brand-squiggle absolute right-[15%] top-[18%] hidden md:block"
      />

      <Container padding="lg" className="relative py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="eyebrow mb-6 inline-flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-block h-[1px] w-8 bg-[color:var(--color-accent-hover)]"
              />
              {eyebrow}
            </p>
          ) : null}
          <h1
            id="hero-titel"
            className="display-title text-[2.5rem] sm:text-5xl md:text-[4.2rem] lg:text-[5rem] text-[color:var(--color-ink)]"
          >
            {titel}
          </h1>
          {claim ? (
            <p className="script-claim mt-5 text-2xl text-[color:var(--color-primary)] md:text-[1.8rem]">
              {claim}
            </p>
          ) : null}
          {lead ? (
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[color:var(--color-ink-soft)] md:text-xl">
              {lead}
            </p>
          ) : null}
          {ctas && ctas.length > 0 ? (
            <div className="mt-10 flex flex-wrap gap-3">
              {ctas.map((cta, i) => (
                <ButtonLink
                  key={cta.href}
                  href={cta.href}
                  variant={cta.variant ?? (i === 0 ? "primary" : "ghost")}
                  size="lg"
                >
                  {cta.label}
                </ButtonLink>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
