import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = { title: "Archiv 2024" };

export default function Archiv2024Page() {
  return <><Hero eyebrow="2024" titel="Archiv 2024" /><Container padding="lg"><p className="text-lg text-[color:var(--color-ink-soft)]">Wird ergänzt.</p></Container></>;
}
