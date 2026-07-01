import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { MaterialFilter } from "@/components/MaterialFilter";
import { HinweisBox } from "@/components/HinweisBox";
import { MATERIALIEN, SICHTBARE_STATUS } from "@/data/materialien";

export const metadata: Metadata = {
  title: "Workshops",
  description:
    "Workshop- und Methodenbibliothek für die Interreligiöse Werkstatt: Workshopkonzepte, Methoden, Ablaufpläne, Regelwerk, Evaluation und mehr.",
};

export default function MaterialienPage() {
  const sichtbar = MATERIALIEN.filter((m) => SICHTBARE_STATUS.includes(m.status));

  return (
    <>
      <Hero
        eyebrow="Workshops"
        titel="Workshops und Methoden"
        lead="Die Interreligiöse Werkstatt stellt Workshopkonzepte, Methoden und Vorlagen für Planung, Durchführung und Auswertung zur Verfügung. Sie richten sich an Institutionen, Lehrende, Teamer:innen, Gemeinden und Fachkräfte der Bildungs- und Jugendarbeit."
      />

      <Container padding="lg">
        <HinweisBox>
          Einige Workshops und Methoden werden derzeit überarbeitet oder sind zunächst
          „auf Anfrage“ verfügbar. Inhalte können als PDF, Markdown, Word-Vorlage oder
          Präsentation bereitgestellt werden.
        </HinweisBox>

        <div
          id="methoden"
          className="mt-8 rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-sage-soft)]/45 p-6 md:p-8"
        >
          <p className="eyebrow mb-2">Methoden</p>
          <h2 className="text-2xl font-extrabold text-[color:var(--color-ink)]">
            Kurze Übungen für Begegnung, Reflexion und Dialog
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[color:var(--color-ink-soft)]">
            Methoden sind einzelne Bausteine innerhalb einer Werkstatt: Frageformate,
            Kennenlernspiele, Reflexionsübungen, gemeinsame Aktivitäten oder spirituelle
            Impulse. Sie ergänzen die vorbereitenden Workshops und helfen, das Lernen
            durch Begegnung konkret zu gestalten.
          </p>
        </div>

        <div className="mt-8">
          <Suspense fallback={<p>Filter wird geladen …</p>}>
            <MaterialFilter materialien={sichtbar} />
          </Suspense>
        </div>
      </Container>
    </>
  );
}
