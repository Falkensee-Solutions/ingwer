import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Archiv",
  description: "Vergangene Workshops, Werkstätten und Veranstaltungen.",
};

const JAHRE = ["2025", "2026"];

export default function ArchivPage() {
  return (
    <>
      <Hero eyebrow="Archiv" titel="Projekte und Veranstaltungen" lead="Im Archiv werden vergangene Workshops, Werkstätten und Veranstaltungen chronologisch nach Jahren dokumentiert." />
      <Container as="section" padding="lg" ariaLabelledby="jahre-titel">
        <SectionHeader id="jahre-titel" eyebrow="Jahresübersicht" titel="Vergangene Projekte" />
        <ul className="mt-10 grid gap-6 sm:grid-cols-3">
          {JAHRE.map((jahr) => (
            <li key={jahr}>
              <Link href={`/archiv/${jahr}`} className="block rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-8 text-2xl font-bold text-[color:var(--color-primary)] no-underline shadow-[var(--shadow-card)] hover:border-[color:var(--color-primary)]">
                Archiv {jahr}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
