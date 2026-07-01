import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { HinweisBox } from "@/components/HinweisBox";
import { WIR_BRINGEN, WIR_ERWARTEN } from "@/data/collaboration";
import { PARTNER } from "@/data/partner";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Wer hinter der Interreligiösen Werkstatt steht: Projektleitung, Konzeptteam, Trägerschaft. Was wir in eine Werkstatt einbringen und was wir von kooperierenden Institutionen erwarten.",
};

type Person = {
  name: string;
  rolle: string;
  organisation?: string;
  kurzprofil?: string;
};

const PROJEKTLEITUNG: Person[] = [
  {
    name: "Erkam Cebi",
    rolle: "Projektleitung",
    organisation: "Forum Dialog e.V.",
    kurzprofil:
      "Verantwortet die Gesamtkoordination, Partnerkommunikation, Finanzierung und Weiterentwicklung des Formats.",
  },
];

const KONZEPTTEAM: Person[] = [
  {
    name: "Semiha Çambudak",
    rolle: "Konzeptteam",
    kurzprofil:
      "Bringt muslimisch-interreligiöse Perspektive, Dialogerfahrung und pädagogische Praxis ein.",
  },
  {
    name: "Johannes Buskühl",
    rolle: "Konzeptteam",
    kurzprofil:
      "Verantwortet Konzeptarbeit aus evangelischer Perspektive sowie didaktische und theologische Reflexion.",
  },
  {
    name: "Fee Wüstenberg",
    rolle: "Konzeptteam",
    kurzprofil:
      "Begleitet das Format mit Erfahrung in Bildungsarbeit, Methodik und interreligiöser Praxis.",
  },
];

function PersonCard({ person }: { person: Person }) {
  const initials = person.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <li className="flex h-full flex-col rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-4">
        <span
          aria-hidden="true"
          className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[color:var(--color-sage-soft)] text-base font-bold text-[color:var(--color-primary-ink)]"
        >
          {initials}
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-accent-hover)]">
            {person.rolle}
          </p>
          <h3 className="mt-0.5 text-lg font-bold text-[color:var(--color-ink)]">
            {person.name}
          </h3>
          {person.organisation ? (
            <p className="text-sm text-[color:var(--color-ink-muted)]">
              {person.organisation}
            </p>
          ) : null}
        </div>
      </div>
      {person.kurzprofil ? (
        <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--color-ink-soft)]">
          {person.kurzprofil}
        </p>
      ) : null}
    </li>
  );
}

export default function UeberUnsPage() {
  return (
    <>
      <Hero
        eyebrow="Über uns"
        titel="Wer hinter der Werkstatt steht"
        claim="Ein Projekt, getragen von vielen Stimmen."
        lead="Die Interreligiöse Werkstatt entsteht im Zusammenspiel von Projektleitung, einem interreligiös zusammengesetzten Konzeptteam und vier Trägern aus christlichen, muslimischen und interreligiösen Kontexten. Wir bringen Erfahrung, Material und Begleitung mit – und wir benennen klar, was eine gelingende Werkstatt von Institutionen voraussetzt."
        ctas={[
          { href: "/kontakt", label: "Werkstatt anfragen", variant: "primary" },
          { href: "/partner", label: "Partner kennenlernen", variant: "ghost" },
        ]}
      />

      {/* Wer wir sind */}
      <Container as="section" padding="lg" ariaLabelledby="team-titel">
        <SectionHeader
          id="team-titel"
          eyebrow="Team"
          titel="Projektleitung und Konzeptteam"
          lead="Verantwortung und Konzeptarbeit liegen bei einem kleinen, interreligiös zusammengesetzten Team innerhalb von Forum Dialog e.V."
        />

        <div className="mt-10 space-y-12">
          <div>
            <p className="eyebrow mb-5">Projektleitung</p>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PROJEKTLEITUNG.map((p) => (
                <PersonCard key={p.name} person={p} />
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Konzeptteam</p>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {KONZEPTTEAM.map((p) => (
                <PersonCard key={p.name} person={p} />
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Was wir beitragen / Was wir erwarten – prominent als zwei Spalten */}
      <section
        aria-labelledby="beitrag-titel"
        className="border-y border-[color:var(--color-line)] bg-[color:var(--color-bg-deep)]"
      >
        <Container padding="lg">
          <SectionHeader
            id="beitrag-titel"
            eyebrow="Zusammenarbeit"
            titel="Was wir beitragen – und was wir von Institutionen erwarten"
            lead="Eine Werkstatt gelingt nicht, weil eine Seite alles bringt. Sie gelingt, wenn beide Seiten wissen, was sie einbringen und was sie voneinander erwarten dürfen."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
            {/* Wir bringen mit */}
            <div className="rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-7 md:p-9">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-sage)] text-base font-bold text-white"
                >
                  +
                </span>
                <h3 className="text-2xl font-extrabold text-[color:var(--color-ink)]">
                  Was wir beitragen
                </h3>
              </div>
              <p className="mt-3 text-[15px] text-[color:var(--color-ink-soft)]">
                Was Sie von der Projektleitung und dem Trägerverbund erwarten dürfen.
              </p>

              <ul className="mt-6 space-y-5">
                {WIR_BRINGEN.map((item) => (
                  <li key={item.titel} className="border-t border-[color:var(--color-line)] pt-5 first:border-0 first:pt-0">
                    <p className="text-base font-bold text-[color:var(--color-ink)]">
                      {item.titel}
                    </p>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-[color:var(--color-ink-soft)]">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Wir erwarten */}
            <div className="rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-7 md:p-9">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-accent)] text-base font-bold text-white"
                >
                  →
                </span>
                <h3 className="text-2xl font-extrabold text-[color:var(--color-ink)]">
                  Was wir erwarten
                </h3>
              </div>
              <p className="mt-3 text-[15px] text-[color:var(--color-ink-soft)]">
                Was es von einer kooperierenden Institution braucht, damit eine Werkstatt
                tatsächlich gelingt.
              </p>

              <ul className="mt-6 space-y-5">
                {WIR_ERWARTEN.map((item) => (
                  <li key={item.titel} className="border-t border-[color:var(--color-line)] pt-5 first:border-0 first:pt-0">
                    <p className="text-base font-bold text-[color:var(--color-ink)]">
                      {item.titel}
                    </p>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-[color:var(--color-ink-soft)]">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <HinweisBox titel="Verbindlichkeit">
              Diese Liste ist kein Vertrag, aber Grundlage jedes Erstgesprächs. Wenn
              einzelne Punkte in Ihrem Kontext schwierig sind, sprechen Sie uns an – wir
              suchen gemeinsam eine tragfähige Lösung, statt das Format zu verwässern.
            </HinweisBox>
          </div>
        </Container>
      </section>

      {/* Träger – kurz */}
      <Container as="section" padding="lg" ariaLabelledby="traeger-titel">
        <SectionHeader
          id="traeger-titel"
          eyebrow="Trägerschaft"
          titel="Vier Träger, eine gemeinsame Verantwortung"
          lead="Die Werkstatt wird von Forum Dialog e.V. getragen und gemeinsam mit drei Kooperationspartnern weiterentwickelt."
        />

        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {PARTNER.map((p) => {
            const istTraeger = p.rolle === "Träger des Projekts";
            return (
              <li
                key={p.slug}
                className="flex h-full flex-col rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 shadow-[var(--shadow-card)]"
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
                <h3 className="mt-3 text-lg font-bold text-[color:var(--color-ink)]">
                  {p.name}
                </h3>
                <p className="mt-2 text-[15px] text-[color:var(--color-ink-soft)]">
                  {p.beschreibung}
                </p>
              </li>
            );
          })}
        </ul>

        <p className="mt-8 text-sm">
          <Link
            href="/partner"
            className="font-semibold text-[color:var(--color-primary)]"
          >
            Mehr zu den Partnern →
          </Link>
        </p>
      </Container>

      {/* Kontakt-CTA */}
      <Container padding="md">
        <CTASection
          variant="primary"
          eyebrow="Erstgespräch"
          titel="Passt die Werkstatt zu Ihrer Institution?"
          text="Schreiben Sie uns kurz, in welchem Rahmen Sie das Format einsetzen möchten. Wir prüfen gemeinsam, ob die Voraussetzungen passen, und planen die nächsten Schritte."
          primaryCta={{ href: "/kontakt", label: "Kontakt aufnehmen" }}
          secondaryCta={{ href: "/regelwerk", label: "Regelwerk lesen" }}
        />
      </Container>
    </>
  );
}
