import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { MaterialFilter } from "@/components/MaterialFilter";
import { HinweisBox } from "@/components/HinweisBox";
import { MATERIALIEN, SICHTBARE_STATUS } from "@/data/materialien";

export const metadata: Metadata = {
  title: "Materialien",
  description:
    "Materialbibliothek für Interreligiöse Werkstätten: Workshopkonzepte, Methoden, Ablaufpläne, Regelwerk, Evaluation und mehr.",
};

export default function MaterialienPage() {
  const sichtbar = MATERIALIEN.filter((m) => SICHTBARE_STATUS.includes(m.status));

  return (
    <>
      <Hero
        eyebrow="Materialien"
        titel="Materialien"
        lead="Die Interreligiösen Werkstätten stellen Materialien für Planung, Durchführung und Auswertung zur Verfügung. Die Materialien richten sich an Institutionen, Lehrende, Teamer:innen, Gemeinden und Fachkräfte der Bildungs- und Jugendarbeit."
      />

      <Container padding="lg">
        <HinweisBox>
          Einige Materialien werden derzeit überarbeitet oder sind zunächst „auf Anfrage“
          verfügbar. Materialien können als PDF, Markdown, Word-Vorlage oder Präsentation
          bereitgestellt werden.
        </HinweisBox>

        <div className="mt-8">
          <Suspense fallback={<p>Filter wird geladen …</p>}>
            <MaterialFilter materialien={sichtbar} />
          </Suspense>
        </div>
      </Container>
    </>
  );
}
