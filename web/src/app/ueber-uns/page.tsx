import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { PARTNER } from "@/data/partner";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Wer hinter der Interreligiösen Werkstatt steht: Projektleitung, Konzeptteam, Träger und Kooperationspartner. Was wir in eine Werkstatt einbringen und was wir von kooperierenden Institutionen erwarten.",
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

const KOORDINATIONSTEAM: Person[] = [
  {
    name: "Angelika Hilsebein",
    rolle: "Koordinationsteam",
    organisation: "Erzbistum Berlin",
    kurzprofil:
      "Bringt die römisch-katholische Perspektive sowie Erfahrung im interreligiösen Dialog in die gemeinsame Koordination ein.",
  },
  {
    name: "Dorothea Gauland",
    rolle: "Koordinationsteam",
    organisation:
      "Evangelische Kirche Berlin-Brandenburg-schlesische Oberlausitz (EKBO)",
    kurzprofil:
      "Vertritt die evangelische Perspektive und begleitet die institutionelle Abstimmung innerhalb der EKBO.",
  },
  {
    name: "Kadir Sancı",
    rolle: "Koordinationsteam",
    organisation: "House of One",
    kurzprofil:
      "Begleitet die Koordination als Imam mit muslimischer Perspektive und Erfahrung in interreligiöser Begegnung.",
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
        lead="Die Interreligiöse Werkstatt entsteht im Zusammenspiel von Projektleitung, einem interreligiös zusammengesetzten Konzeptteam und einem Träger mit drei Kooperationspartnern. Wir bringen Erfahrung, Material und Begleitung mit – und wir benennen klar, was eine gelingende Werkstatt von Institutionen voraussetzt."
      />

      {/* Wer wir sind */}
      <Container as="section" padding="lg" ariaLabelledby="team-titel">
        <SectionHeader
          id="team-titel"
          eyebrow="Team"
          titel="Projektleitung, Konzept und Koordination"
          lead="Die Projektleitung und das Konzeptteam gestalten das Format. Ein interreligiös besetztes Koordinationsteam verbindet die Arbeit mit den beteiligten Institutionen."
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

          <div>
            <p className="eyebrow mb-5">Koordinationsteam</p>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {KOORDINATIONSTEAM.map((p) => (
                <PersonCard key={p.name} person={p} />
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Träger und Partner – kurz */}
      <Container as="section" padding="lg" ariaLabelledby="traeger-titel">
        <SectionHeader
          id="traeger-titel"
          eyebrow="Kooperationen"
          titel="Träger und Partner"
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
