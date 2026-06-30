import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { HinweisBox } from "@/components/HinweisBox";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Interreligiösen Werkstatt – vorläufig, juristische Prüfung ausstehend.",
};

export default function ImpressumPage() {
  return (
    <>
      <Hero eyebrow="Rechtliches" titel="Impressum" />

      <Container padding="lg" className="max-w-3xl">
        <HinweisBox variante="warnung" titel="Vorläufige Fassung">
          Dieser Text ist ein <strong>Platzhalter</strong>. Vor der Veröffentlichung der
          Website muss das Impressum juristisch geprüft und finalisiert werden.
        </HinweisBox>

        <div className="prose-iw mt-10">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            Forum Dialog e.V.
            <br />
            Anton-Wilhelm-Amo-Straße 34
            <br />
            10117 Berlin
          </p>

          <h2>Vertretungsberechtigt</h2>
          <p>Wird vor Veröffentlichung ergänzt.</p>

          <h2>Kontakt</h2>
          <p>
            E-Mail:{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>

          <h2>Registereintrag</h2>
          <p>Wird vor Veröffentlichung ergänzt.</p>

          <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>Wird vor Veröffentlichung ergänzt.</p>

          <h2>Haftungsausschluss</h2>
          <p>Wird im Rahmen der juristischen Prüfung formuliert.</p>
        </div>
      </Container>
    </>
  );
}
