import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = { title: "Archiv 2026" };
const VERANSTALTUNGEN = ["Gemeinsames Fastenbrechen", "Wanderung", "Wanderung", "Weitere Veranstaltung"];

export default function Archiv2026Page() {
  return <><Hero eyebrow="2026" titel="Archiv 2026" /><Container padding="lg"><div className="grid gap-6 sm:grid-cols-2">{VERANSTALTUNGEN.map((titel, index) => <article key={`${titel}-${index}`} className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6"><SectionHeader as="h2" eyebrow="2026" titel={titel} lead="x" /></article>)}</div></Container></>;
}
