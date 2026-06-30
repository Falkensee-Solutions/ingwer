import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { FormatCard } from "@/components/FormatCard";
import { FORMATE } from "@/data/formate";

export const metadata: Metadata = {
  title: "Formate",
  description:
    "Formate der Interreligiösen Werkstatt für Universitäten, Schulen, Ausbildungsinstitutionen sowie Gemeinden und Jugendarbeit.",
};

export default function FormatePage() {
  return (
    <>
      <Hero
        eyebrow="Formate"
        titel="Formate für unterschiedliche Institutionen"
        lead="Die Interreligiöse Werkstatt ist modular gedacht. Je nach Institution unterscheiden sich Zielgruppe, Vorbereitung, Einbindung und Werkstattprodukt – das Kernformat bleibt gleich."
      />

      <Container padding="lg">
        <div className="grid gap-6 md:grid-cols-2">
          {FORMATE.map((f) => (
            <FormatCard key={f.slug} format={f} />
          ))}
        </div>
      </Container>
    </>
  );
}
