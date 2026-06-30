import { PARTNER } from "@/data/partner";
import { Container } from "./Container";

export function PartnerLogoBar({ titel = "In Kooperation mit" }: { titel?: string }) {
  return (
    <section aria-labelledby="partner-logo-titel" className="border-y border-[color:var(--color-line)]/70 bg-[color:var(--color-surface)] py-14">
      <Container>
        <h2 id="partner-logo-titel" className="eyebrow mb-8 text-center">
          {titel}
        </h2>
        <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 sm:gap-x-4">
          {PARTNER.map((p) => (
            <li key={p.slug}>
              {/*
                Wenn echte Logo-Dateien unter /public/logos/* vorliegen, hier
                später <Image> einsetzen. Solange kein freigegebenes Logo
                vorliegt, dient ein neutraler Textplatzhalter – KEINE Fake-Logos.
              */}
              <span
                className="inline-flex items-center rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-bg)] px-5 py-2.5 text-[0.85rem] font-medium tracking-[0.01em] text-[color:var(--color-ink-soft)] transition-colors hover:border-[color:var(--color-primary)]/40 hover:text-[color:var(--color-ink)]"
                aria-label={`Partner: ${p.name}`}
              >
                {p.name}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-xs leading-relaxed text-[color:var(--color-ink-muted)]">
          Logos werden eingefügt, sobald die Nutzungsrechte aller Partner final geklärt sind.
        </p>
      </Container>
    </section>
  );
}
