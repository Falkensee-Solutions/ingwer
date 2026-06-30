import { PARTNER } from "@/data/partner";
import { Container } from "./Container";

export function PartnerLogoBar({ titel = "In Kooperation mit" }: { titel?: string }) {
  return (
    <section
      aria-labelledby="partner-logo-titel"
      className="border-y border-[color:var(--color-line)]/70 bg-[color:var(--color-surface)] py-14"
    >
      <Container>
        <h2 id="partner-logo-titel" className="eyebrow mb-8 text-center">
          {titel}
        </h2>
        {/* Solange keine Logo-Dateien freigegeben sind: einheitliche Karten
            mit Partnernamen – flächig konsistent, ohne Fake-Logos. */}
        <ul className="flex flex-wrap items-stretch justify-center gap-4">
          {PARTNER.map((p) => (
            <li key={p.slug}>
              <div
                className="flex h-24 w-44 flex-col items-center justify-center rounded-2xl border border-[color:var(--color-line)]/60 bg-[color:var(--color-bg)] px-4 text-center transition-colors hover:border-[color:var(--color-primary)]/40"
                aria-label={`Partner: ${p.name}`}
              >
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)]">
                  Logo
                </span>
                <span className="mt-1.5 text-[0.95rem] font-semibold leading-tight text-[color:var(--color-ink)]">
                  {p.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-xs leading-relaxed text-[color:var(--color-ink-muted)]">
          Offizielle Logos folgen, sobald die Nutzungsrechte aller Partner final geklärt sind.
        </p>
      </Container>
    </section>
  );
}
