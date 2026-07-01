import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { HinweisBox } from "@/components/HinweisBox";
import { SectionHeader } from "@/components/SectionHeader";
import { WIR_BRINGEN, WIR_ERWARTEN } from "@/data/collaboration";

export const metadata: Metadata = {
  title: "Mitorganisieren",
  description:
    "Interreligiöse Werkstätten mitorganisieren: Informationen für Institutionen, Gemeinden, Schulen, Hochschulen, Träger und Jugendverbände.",
};

const PLANUNGSSCHRITTE = [
  {
    titel: "Institutionen und Gemeinden gewinnen",
    text: "Am Anfang steht der Aufbau von Vertrauen: Gemeinden, Schulen, Hochschulen oder Träger öffnen ihren Kreis, werben für Teilnahme und geben dem Format institutionellen Rückhalt.",
  },
  {
    titel: "Koordinierungsgruppe bilden",
    text: "Das Konzepthandbuch empfiehlt eine möglichst paritätische Gruppe aus Vertreter:innen der beteiligten Gemeinden und Institutionen, die lokale Sensibilitäten, theologische Fragen und mögliche Partner berät.",
  },
  {
    titel: "Orgateam aufstellen",
    text: "Für Planung und Durchführung braucht es Menschen mit Erfahrung in Jugendfahrten, Bildungsarbeit oder Gemeindearbeit, die Bedürfnisse der eigenen Tradition einbringen und gemeinsam Verantwortung übernehmen.",
  },
  {
    titel: "Vorbereitung und Werkstatt verbinden",
    text: "Vorbereitende Workshops, Besuche und Reflexionen führen in die religiösen Traditionen ein und bereiten die Teilnehmenden auf die mehrtägige gemeinsame Werkstatt vor.",
  },
];

function CollaborationList({
  titel,
  intro,
  items,
  icon,
}: {
  titel: string;
  intro: string;
  items: typeof WIR_BRINGEN;
  icon: string;
}) {
  return (
    <div className="rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-7 md:p-9">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-sage)] text-base font-bold text-white"
        >
          {icon}
        </span>
        <h3 className="text-2xl font-extrabold text-[color:var(--color-ink)]">
          {titel}
        </h3>
      </div>
      <p className="mt-3 text-[15px] text-[color:var(--color-ink-soft)]">
        {intro}
      </p>

      <ul className="mt-6 space-y-5">
        {items.map((item) => (
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
  );
}

export default function MitorganisierenPage() {
  return (
    <>
      <Hero
        eyebrow="Mitorganisieren"
        titel="Werkstätten gemeinsam möglich machen"
        claim="Interreligiöse Begegnung braucht institutionelle Partner."
        lead="Die Interreligiöse Werkstatt entsteht dort, wo Gemeinden, Schulen, Hochschulen, Ausbildungsstätten, Träger und religiöse Institutionen Verantwortung teilen. Wenn Ihre Institution Menschen für Dialog gewinnen, Räume öffnen oder ein Format mittragen möchte, begleiten wir Sie von der ersten Idee bis zur Auswertung."
        ctas={[
          { href: "/kontakt", label: "Kooperation anfragen", variant: "primary" },
          { href: "/konzept#formate", label: "Formate ansehen", variant: "ghost" },
        ]}
      />

      <Container as="section" padding="lg" ariaLabelledby="institutionen-titel">
        <SectionHeader
          id="institutionen-titel"
          eyebrow="Für Institutionen"
          titel="Aus Netzwerk wird Werkstatt"
          lead="Das Konzepthandbuch betont: Die erste Planung geschieht auf zwei Ebenen. Zuerst finden sich Institutionen, die Vertrauen schaffen und Teilnahme ermöglichen. Danach entsteht ein Orgateam, das die Werkstatt konkret vorbereitet und durchführt."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PLANUNGSSCHRITTE.map((schritt) => (
            <article
              key={schritt.titel}
              className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 shadow-[var(--shadow-card)]"
            >
              <h3 className="text-lg font-bold text-[color:var(--color-ink)]">
                {schritt.titel}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--color-ink-soft)]">
                {schritt.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <HinweisBox titel="Zeit für Vertrauensaufbau einplanen">
            Gerade die erste Werkstatt braucht Geduld: Gemeinden und Institutionen müssen
            einander kennenlernen, lokale Sensibilitäten verstehen und klären, wer welche
            Verantwortung übernimmt. Das ist keine Hürde, sondern Teil des Konzepts.
          </HinweisBox>
        </div>
      </Container>

      <section
        aria-labelledby="zusammenarbeit-titel"
        className="border-y border-[color:var(--color-line)] bg-[color:var(--color-bg-deep)]"
      >
        <Container padding="lg">
          <SectionHeader
            id="zusammenarbeit-titel"
            eyebrow="Zusammenarbeit"
            titel="Was wir beitragen – und was wir von Institutionen erwarten"
            lead="Eine Werkstatt gelingt, wenn beide Seiten wissen, was sie einbringen und was sie voneinander erwarten dürfen. Diese Grundlage stammt aus unserer bisherigen Zusammenarbeit mit Trägern und Partnerinstitutionen."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
            <CollaborationList
              titel="Was wir beitragen"
              intro="Was Sie von der Projektleitung und dem Trägerverbund erwarten dürfen."
              items={WIR_BRINGEN}
              icon="+"
            />
            <CollaborationList
              titel="Was wir erwarten"
              intro="Was es von einer kooperierenden Institution braucht, damit eine Werkstatt tatsächlich gelingt."
              items={WIR_ERWARTEN}
              icon="→"
            />
          </div>
        </Container>
      </section>

      <Container padding="md">
        <CTASection
          variant="primary"
          eyebrow="Erstgespräch"
          titel="Möchte Ihre Institution eine Werkstatt mittragen?"
          text="Schreiben Sie uns, in welchem Kontext Sie eine Werkstatt denken: Zielgruppe, mögliche Partner, Zeitraum und vorhandene Ressourcen reichen für den ersten Schritt aus."
          primaryCta={{ href: "/kontakt", label: "Kooperation anfragen" }}
          secondaryCta={{ href: "/regelwerk", label: "Regelwerk lesen" }}
        />
      </Container>
    </>
  );
}
