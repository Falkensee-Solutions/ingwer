import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { HinweisBox } from "@/components/HinweisBox";
import { KontaktFormular } from "./KontaktFormular";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt zur Interreligiösen Werkstatt. Anfragen per E-Mail. Werkstatt für Ihre Institution planen.",
};

export default function KontaktPage() {
  return (
    <>
      <Hero
        eyebrow="Kontakt"
        titel="Kontakt"
        lead="Sie möchten eine Interreligiöse Werkstatt durchführen, Materialien nutzen oder eine Kooperation besprechen? Schreiben Sie uns."
      />

      <Container padding="lg">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-[color:var(--color-ink)]">
              Anfrage per E-Mail
            </h2>
            <p className="mt-2 text-[color:var(--color-ink-soft)]">
              Das Formular öffnet Ihr E-Mail-Programm mit einer vorbereiteten Nachricht.
              Es werden keine Daten auf dieser Website gespeichert.
            </p>

            <div className="mt-8">
              <KontaktFormular />
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6">
              <h2 className="text-base font-bold text-[color:var(--color-ink)]">
                Direktkontakt
              </h2>
              <p className="mt-3 text-sm text-[color:var(--color-ink-soft)]">E-Mail</p>
              <p className="mt-1">
                <a href={`mailto:${SITE.email}`} className="text-[color:var(--color-primary)]">
                  {SITE.email}
                </a>
              </p>
              <p className="mt-4 text-sm text-[color:var(--color-ink-soft)]">Instagram</p>
              <p className="mt-1 text-[color:var(--color-ink)]">
                {SITE.instagramHandle}{" "}
                <span className="text-xs text-[color:var(--color-ink-muted)]">
                  (Handle in Prüfung)
                </span>
              </p>

              <hr className="my-5 border-[color:var(--color-line)]" />

              <p className="text-sm font-semibold text-[color:var(--color-ink)]">
                Bitte geben Sie nach Möglichkeit an:
              </p>
              <ul className="mt-2 space-y-1.5 text-sm text-[color:var(--color-ink-soft)]">
                <li>Name der Institution</li>
                <li>Ansprechperson</li>
                <li>gewünschtes Format</li>
                <li>Zielgruppe</li>
                <li>ungefährer Zeitraum</li>
                <li>Anzahl der Teilnehmenden</li>
                <li>besondere Rahmenbedingungen</li>
              </ul>
              <p className="mt-4 text-sm text-[color:var(--color-ink-soft)]">
                Wir melden uns zur weiteren Abstimmung.
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-12">
          <HinweisBox titel="Datenschutz">
            Diese Website nutzt kein Backend und speichert keine Anfragen.
            Das Kontaktformular erstellt lediglich eine vorbereitete E-Mail in Ihrem
            lokalen Mailprogramm. Es findet kein Tracking statt.
          </HinweisBox>
        </div>
      </Container>
    </>
  );
}
