import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = { title: "Archiv 2025" };

export default function Archiv2025Page() {
  return <><Hero eyebrow="2025" titel="Archiv 2025" /><Container padding="lg"><div className="grid gap-6 md:grid-cols-2"><article className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6"><SectionHeader as="h2" eyebrow="Workshop" titel="Grundlagen zum christlichen Glauben" lead="Methoden und Ablaufpläne werden zunächst nicht veröffentlicht." /></article><article className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6"><SectionHeader as="h2" eyebrow="Werkstatt" titel="Pilotwerkstatt" lead="Unsere erste Werkstatt… Konkrete Erfahrungen und der tatsächliche Ablauf gehören in diesen Archivbereich." /></article></div></Container></>;
}
