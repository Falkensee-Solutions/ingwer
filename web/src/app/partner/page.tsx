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
          {PARTNER.map((p) => {
            const istTraeger = p.rolle === "Träger des Projekts";
            return (
              <li
                key={p.slug}
                className="flex h-full flex-col rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--color-primary)]/40 hover:shadow-[var(--shadow-card-hover)]"
              >
                <span
                  className={
                    istTraeger
                      ? "inline-flex w-fit items-center rounded-full bg-[color:var(--color-primary)] px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-white"
                      : "inline-flex w-fit items-center rounded-full bg-[color:var(--color-lavender-soft)] px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-[color:var(--color-lavender-ink)]"
                  }
                >
                  {p.rolle}
                </span>
                <h2 className="mt-3 text-xl font-bold text-[color:var(--color-ink)]">{p.name}</h2>
                <p className="mt-3 text-[15px] text-[color:var(--color-ink-soft)]">
                  {p.beschreibung}
                </p>
                {p.url ? (
                  <p className="mt-4">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[color:var(--color-primary)]"
                    >
                      Website öffnen →
                    </a>
                  </p>
                ) : null}
              </li>
            );
          })}
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
