import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { PartnerLogoBar } from "@/components/PartnerLogoBar";
import { SectionHeader } from "@/components/SectionHeader";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Interreligiöse Werkstatt",
  description: SITE.description,
};

const KERNINHALTE = [
  ["Mehrtägigkeit", "Dialog braucht Zeit. Deshalb finden Werkstätten über mehrere Tage statt."],
  ["Interreligiöse Zimmer", "In einem vertrauensvollen Rahmen tauschen sich die Teilnehmenden auch außerhalb des Seminarraums über Glaubenserfahrungen aus."],
  ["Sichtbare religiöse und spirituelle Praxis", "Gebet, Stille, Besinnung, Rituale, Speiseregeln und religiöse Alltagspraktiken werden sichtbar praktiziert."],
];

export default function Home() {
  return <>
    <Hero titel="Interreligiöse Werkstatt" claim={SITE.claim} lead="Die Interreligiöse Werkstatt ist ein Bildungsformat vom Forum Dialog e.V. für junge Menschen mit evangelischen, katholischen oder muslimischen Hintergründen. Gleichzeitig sind alle interessierten Menschen mit einer dialogoffenen Weltanschauung willkommen. Im Mittelpunkt steht eine mehrtägige Exkursion. Das Ziel hierbei ist das gegenseitige Kennenlernen, wertschätzende Gespräche im geschützten Raum, das Teilen von Mahlzeiten und Zimmern sowie die Arbeit an einem interreligiös-kreativen Projekt, bei dem der Dialog greifbar wird." ctas={[{ href: "/aktuell#teilnehmen", label: "Werkstatt teilnehmen", variant: "primary" }, { href: "/aktuell#mitplanen", label: "Werkstatt mitplanen", variant: "secondary" }]} />
    <Container as="section" padding="lg" ariaLabelledby="konzept-titel">
      <SectionHeader id="konzept-titel" eyebrow="Konzept" titel="Das Konzept" lead="Dialog entsteht in der persönlichen Begegnung." />
      <div className="mt-8 max-w-3xl space-y-4 text-lg leading-relaxed text-[color:var(--color-ink-soft)]"><p>Durch Menschen, ihren Alltag und ihre gelebte Spiritualität lernen wir Religionen kennen. Interreligiöser Dialog entwickelt sich dort, wo Menschen einander in und mit ihrer religiösen Identität wahrnehmen.</p><p>Im Rahmen der Interreligiösen Werkstatt kommt es zu Begegnungen, die einen authentischen Austausch ermöglichen. Die Einzigartigkeit der eigenen Perspektive soll dabei erkundet und greifbar gemacht werden. Dialog ist dann die Erfahrung, das Eigene im Anderen zu erkennen.</p></div>
    </Container>
    <section className="border-y border-[color:var(--color-line)] bg-[color:var(--color-bg-deep)]"><Container padding="lg"><SectionHeader eyebrow="Format" titel="Das Format" lead="Die Interreligiöse Werkstatt führt Gruppen verschiedener Institutionen und/oder Glaubensrichtungen zusammen. Sie bildet den Höhepunkt des Projektes im Anschluss an die vorbereitenden Workshops." /><div className="mt-8 max-w-3xl space-y-4 text-lg leading-relaxed text-[color:var(--color-ink-soft)]"><p>Teilnehmende verbringen mehrere Tage miteinander, teilen Alltagssituationen, erleben religiöse und spirituelle Praxis nebeneinander und kommen über Glauben, Weltanschauung, Werte und gesellschaftliche Verantwortung ins Gespräch.</p><p>Das Format schafft Nähe, ohne Unterschiede aufzulösen. Was vorher abstrakt war, wird konkret. In einem geschützten Rahmen kann jeder Teilnehmende offen seine eigene Perspektive einbringen.</p></div></Container></section>
    <Container as="section" padding="lg" ariaLabelledby="kern-titel"><SectionHeader id="kern-titel" eyebrow="Kern des Formats" titel="Die drei Kerninhalte des Formats" /><ul className="mt-10 grid gap-6 md:grid-cols-3">{KERNINHALTE.map(([titel, text]) => <li key={titel} className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6"><h3 className="text-lg font-bold text-[color:var(--color-ink)]">{titel}</h3><p className="mt-3 text-[color:var(--color-ink-soft)]">{text}</p></li>)}</ul></Container>
    <PartnerLogoBar />
    <Container padding="md"><div className="rounded-3xl bg-[color:var(--color-primary)] p-8 text-white"><h2 className="text-3xl font-bold">Mehr über die Begegnung</h2><p className="mt-3 max-w-2xl text-white/85">Die grundlegende Struktur und ein möglicher Ablauf werden auf der Seite Begegnung beschrieben.</p><Link href="/begegnung" className="mt-6 inline-flex rounded-full bg-white px-5 py-3 font-bold text-[color:var(--color-primary)] no-underline">Begegnung kennenlernen</Link></div></Container>
  </>;
}
