import Link from "next/link";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { PartnerLogoBar } from "@/components/PartnerLogoBar";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { FormatCard } from "@/components/FormatCard";
import { MaterialCard } from "@/components/MaterialCard";
import { TerminCard } from "@/components/TerminCard";
import { FORMATE } from "@/data/formate";
import { MATERIALIEN } from "@/data/materialien";
import { getKommendeTermine } from "@/data/termine";
import { SITE } from "@/lib/site";

const KERNPRINZIPIEN = [
  {
    titel: "Mehrtägigkeit",
    text: "Dialog braucht Zeit. Deshalb finden Werkstätten über mehrere Tage statt.",
  },
  {
    titel: "Gemeinsame Unterkunft",
    text: "Das gemeinsame Wohnen schafft einen privaten und vertrauensvollen Rahmen, in dem Begegnung nicht nur im Seminarraum geschieht.",
  },
  {
    titel: "Sichtbare religiöse und spirituelle Praxis",
    text: "Gebet, Stille, Besinnung, Rituale, Speiseregeln und religiöse Alltagspraktiken dürfen sichtbar sein und werden respektiert.",
  },
  {
    titel: "Dialog ohne Missionierung",
    text: "Eigene Überzeugungen dürfen geteilt werden. Niemand wird überredet, bewertet oder gedrängt.",
  },
];

export default function Home() {
  const teaserMaterialien = MATERIALIEN.filter((m) => m.status !== "entwurf").slice(0, 3);
  const kommendeTermine = getKommendeTermine(3);

  return (
    <>
      <Hero
        titel="Interreligiöse Werkstatt"
        claim={SITE.claim}
        lead="Die Interreligiöse Werkstatt ist ein mehrtägiges Begegnungs- und Bildungsformat für Menschen unterschiedlicher religiöser und weltanschaulicher Hintergründe. Im Mittelpunkt stehen gemeinsames Wohnen, gegenseitiges Kennenlernen, sichtbare religiöse und spirituelle Praxis, geschützte Gespräche und gemeinsames Arbeiten an Werkstattprodukten."
        ctas={[
          { href: "/konzept", label: "Konzept kennenlernen", variant: "primary" },
          { href: "/materialien", label: "Materialien ansehen", variant: "ghost" },
          { href: "/kontakt", label: "Werkstatt anfragen", variant: "secondary" },
        ]}
      />

      <PartnerLogoBar />

      {/* Was ist eine Werkstatt? */}
      <Container as="section" padding="lg" ariaLabelledby="was-ist-titel">
        <SectionHeader
          id="was-ist-titel"
          eyebrow="Format"
          titel="Was ist eine Interreligiöse Werkstatt?"
          lead="Eine Interreligiöse Werkstatt ist kein klassischer Workshop und keine reine Exkursion. Sie ist ein gemeinsamer Erfahrungsraum."
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <div className="space-y-4 text-lg text-[color:var(--color-ink-soft)]">
            <p>
              Teilnehmende verbringen mehrere Tage miteinander, teilen Alltagssituationen,
              erleben religiöse und spirituelle Praxis nebeneinander und kommen über
              Glauben, Weltanschauung, Werte und gesellschaftliche Verantwortung ins
              Gespräch.
            </p>
            <p>
              Das Format schafft Nähe, ohne Unterschiede aufzulösen. Es lädt dazu ein, die
              Perspektive anderer Menschen kennenzulernen und die eigene Haltung zu
              reflektieren.
            </p>
          </div>

          <aside
            aria-hidden="true"
            className="relative self-start overflow-hidden rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-sage-soft)]/50 p-7"
          >
            <span
              className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[color:var(--color-lavender-soft)]/70"
            />
            <span
              className="absolute -bottom-8 -left-6 h-20 w-20 rounded-full bg-[color:var(--color-orange-soft)]/70"
            />
            <p className="script-claim relative text-2xl leading-snug text-[color:var(--color-primary-ink)] md:text-[1.75rem]">
              &bdquo;Begegnung beginnt da, wo Menschen einander beim Beten, Essen und Schweigen erleben dürfen.&ldquo;
            </p>
            <p className="relative mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-ink-muted)]">
              Leitgedanke der Werkstatt
            </p>
          </aside>
        </div>
      </Container>

      {/* Kernprinzipien */}
      <section
        aria-labelledby="kern-titel"
        className="bg-[color:var(--color-sage-soft)]/40"
      >
        <Container padding="lg">
          <SectionHeader
            id="kern-titel"
            eyebrow="Kern des Formats"
            titel="Vier Prinzipien, die den Unterschied machen"
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {KERNPRINZIPIEN.map((p, i) => {
              const accent = [
                { bg: "var(--color-sage)", ink: "#fff" },
                { bg: "var(--color-lavender)", ink: "#fff" },
                { bg: "var(--color-sunny)", ink: "var(--color-sunny-ink)" },
                { bg: "var(--color-accent)", ink: "#fff" },
              ][i % 4];
              return (
                <li
                  key={p.titel}
                  className="rounded-2xl border border-[color:var(--color-line)] bg-white p-6"
                >
                  <div
                    className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold"
                    style={{ background: accent.bg, color: accent.ink }}
                  >
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[color:var(--color-ink)]">{p.titel}</h3>
                  <p className="mt-2 text-[15px] text-[color:var(--color-ink-soft)]">{p.text}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* Zielgruppen-Kacheln */}
      <Container as="section" padding="lg" ariaLabelledby="zielgruppen-titel">
        <SectionHeader
          id="zielgruppen-titel"
          eyebrow="Für wen"
          titel="Für wen ist das Format geeignet?"
          lead="Die Interreligiöse Werkstatt richtet sich an Institutionen, die Dialog erfahrbar machen möchten."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FORMATE.map((f) => (
            <FormatCard key={f.slug} format={f} />
          ))}
        </div>
      </Container>

      {/* Materialien-Teaser */}
      <section
        aria-labelledby="materialien-teaser-titel"
        className="bg-[color:var(--color-lavender-soft)]/40"
      >
        <Container padding="lg">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeader
              id="materialien-teaser-titel"
              eyebrow="Materialien"
              titel="Praxismaterialien für Institutionen"
              lead="Workshopkonzepte, Methoden, Ablaufpläne, Regelwerk, Reflexionsfragen, Evaluation, Finanzierungstipps und Vorlagen."
            />
            <Link
              href="/materialien"
              className="text-sm font-semibold text-[color:var(--color-primary)]"
            >
              Alle Materialien ansehen →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teaserMaterialien.map((m) => (
              <MaterialCard key={m.slug} material={m} />
            ))}
          </div>
        </Container>
      </section>

      {/* Termine-Teaser */}
      <Container as="section" padding="lg" ariaLabelledby="termine-teaser-titel">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader
            id="termine-teaser-titel"
            eyebrow="Termine"
            titel="Aktuelle und geplante Werkstätten"
            lead="Werkstätten werden in Status angezeigt: fix, geplant oder in Klärung. Unsichere Termine werden bewusst nicht als final dargestellt."
          />
          <Link href="/termine" className="text-sm font-semibold text-[color:var(--color-primary)]">
            Alle Termine ansehen →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {kommendeTermine.map((t) => (
            <TerminCard key={t.slug} termin={t} />
          ))}
        </div>
      </Container>

      {/* Regelwerk-Hinweis */}
      <Container padding="md">
        <CTASection
          eyebrow="Schutz und Haltung"
          titel="Werkstätten brauchen Regeln."
          text="Alle Werkstätten folgen einem gemeinsamen Regelwerk. Es schützt die Würde der Teilnehmenden, verhindert Missionierung, achtet Privatsphäre und macht deutlich: Diskriminierung, Abwertung und Grenzverletzungen haben keinen Platz."
          primaryCta={{ href: "/regelwerk", label: "Regelwerk lesen" }}
        />
      </Container>

      {/* Kontakt-CTA */}
      <Container padding="md">
        <CTASection
          variant="primary"
          eyebrow="Kontakt"
          titel="Werkstatt an Ihrer Institution durchführen?"
          text="Schreiben Sie uns. Wir begleiten Planung, Materialien und Durchführung gemeinsam mit Ihnen."
          primaryCta={{ href: "/kontakt", label: "Werkstatt anfragen" }}
          secondaryCta={{ href: `mailto:${SITE.email}`, label: SITE.email, external: true }}
        />
      </Container>
    </>
  );
}
