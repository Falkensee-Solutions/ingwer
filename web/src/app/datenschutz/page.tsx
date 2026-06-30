import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { HinweisBox } from "@/components/HinweisBox";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung der Interreligiösen Werkstatt – vorläufig, juristische Prüfung ausstehend.",
};

export default function DatenschutzPage() {
  return (
    <>
      <Hero eyebrow="Rechtliches" titel="Datenschutz" />

      <Container padding="lg" className="max-w-3xl">
        <HinweisBox variante="warnung" titel="Vorläufige Fassung">
          Diese Datenschutzerklärung ist ein <strong>Platzhalter</strong>. Vor der
          Veröffentlichung muss sie juristisch geprüft und an die tatsächliche
          technische Umsetzung angepasst werden.
        </HinweisBox>

        <div className="prose-iw mt-10">
          <h2>1. Verantwortliche Stelle</h2>
          <p>
            Forum Dialog e.V., Anton-Wilhelm-Amo-Straße 34, 10117 Berlin. Vollständige
            Angaben siehe Impressum.
          </p>

          <h2>2. Zugriffsdaten</h2>
          <p>
            Diese Website ist als statische Website ohne Backend ausgelegt. Beim Besuch
            werden lediglich technisch notwendige Zugriffsdaten durch den Hosting-Anbieter
            verarbeitet. Details werden im Rahmen der juristischen Prüfung ergänzt.
          </p>

          <h2>3. Kontaktaufnahme</h2>
          <p>
            Das Kontaktformular speichert keine Daten auf dieser Website. Es erstellt
            ausschließlich einen E-Mail-Entwurf in Ihrem lokalen E-Mail-Programm. Inhalt
            und Empfängerdaten werden an Ihr E-Mail-Programm und – bei Versand – an den
            E-Mail-Empfänger weitergegeben.
          </p>

          <h2>4. Tracking und Cookies</h2>
          <p>
            Es werden keine Tracking-Dienste oder Analyse-Cookies eingesetzt. Sollte sich
            dies ändern, wird diese Datenschutzerklärung entsprechend ergänzt.
          </p>

          <h2>5. Rechte der betroffenen Personen</h2>
          <p>
            Die Rechte nach DSGVO (Auskunft, Berichtigung, Löschung, Einschränkung,
            Widerspruch, Datenübertragbarkeit, Beschwerde bei der Aufsichtsbehörde) werden
            im Rahmen der finalen Fassung ausgeführt.
          </p>

          <h2>6. Hosting</h2>
          <p>Wird vor Veröffentlichung ergänzt.</p>
        </div>
      </Container>
    </>
  );
}
