import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { TerminCard } from "@/components/TerminCard";
import { getKommendeTermine } from "@/data/termine";

export const metadata: Metadata = {
  title: "Aktuell",
  description: "Anstehende Veranstaltungen und Werkstätten der Interreligiösen Werkstatt.",
};

export default function AktuellPage() {
  const termine = getKommendeTermine(6);
  return (
    <>
      <Container as="section" id="teilnehmen" padding="lg" ariaLabelledby="teilnehmen-titel">
        <SectionHeader
          id="teilnehmen-titel"
          eyebrow="Aktuelles"
          titel="Anstehende Veranstaltungen"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {termine.map((termin) => <TerminCard key={termin.slug} termin={termin} />)}
        </div>
      </Container>
    </>
  );
}
