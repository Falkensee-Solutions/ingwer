import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { CTASection } from "@/components/CTASection";
import { PARTNER } from "@/data/partner";

export const metadata: Metadata = {
  title: "Partner",
  description:
    "Forum Dialog e.V. trägt das Projekt. In Kooperation mit EKBO, Erzbistum Berlin und House of One.",
};

export default function PartnerPage() {
  return (
    <>
      <Hero
        eyebrow="Partner"
        titel="Partner"
        lead="Die Interreligiöse Werkstatt wird von Forum Dialog e.V. getragen und gemeinsam mit kirchlichen und interreligiösen Kooperationspartnern weiterentwickelt."
      />

      <Container padding="lg">
        <ul className="grid gap-6 md:grid-cols-2">
          {PARTNER.map((p) => (
            <li
              key={p.slug}
              className="flex h-full flex-col rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 shadow-[var(--shadow-card)]"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-accent-hover)]">
                {p.rolle}
              </p>
              <h2 className="mt-1 text-xl font-bold text-[color:var(--color-ink)]">{p.name}</h2>
              <p className="mt-3 text-[15px] text-[color:var(--color-ink-soft)]">
                {p.beschreibung}
              </p>
              {p.url ? (
                <p className="mt-4">
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[color:var(--color-primary)]">
                    Website öffnen →
                  </a>
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </Container>

      <Container padding="md">
        <CTASection
          eyebrow="Kooperation"
          titel="Kooperation anfragen"
          text="Institutionen, Gemeinden und Bildungsträger können sich melden, wenn sie eine Werkstatt durchführen oder ein eigenes Format entwickeln möchten."
          primaryCta={{ href: "/kontakt", label: "Kontakt aufnehmen" }}
        />
      </Container>
    </>
  );
}
