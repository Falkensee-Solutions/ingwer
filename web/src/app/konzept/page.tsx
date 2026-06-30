import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Konzept",
  description:
    "Das Konzept der Interreligiösen Werkstatt: Begegnung statt Belehrung. Mehrtägig, gemeinsam, dialogisch.",
};

export default function KonzeptPage() {
  return (
    <>
      <Hero
        eyebrow="Konzept"
        titel="Das Konzept"
        claim="Begegnung braucht mehr als Information."
        lead="Interreligiöser Dialog entsteht nicht nur durch Vorträge über Religion. Er entsteht dort, wo Menschen einander begegnen, Alltag teilen, Fragen stellen, zuhören und religiöse oder spirituelle Praxis im Leben anderer wahrnehmen können."
      />

      <Container padding="lg" className="prose-iw max-w-3xl">
        <p>
          Die Interreligiöse Werkstatt verbindet Bildungsarbeit, persönliche Begegnung,
          Reflexion und gemeinsames Handeln.
        </p>

        <h2>Was unterscheidet die Werkstatt von einem Workshop?</h2>
        <p>
          Ein Workshop kann Wissen vermitteln. Eine Werkstatt schafft einen
          Erfahrungsraum.
        </p>
        <p>
          Teilnehmende verbringen mehrere Tage gemeinsam. Sie essen zusammen, wohnen am
          selben Ort, nehmen an gemeinsamen Aktivitäten teil, erleben Gebet oder Stille,
          besuchen Gotteshäuser und reflektieren ihre Erfahrungen in begleiteten
          Gesprächsformaten.
        </p>
        <p>
          Dadurch entsteht ein anderer Zugang zu Religion und Weltanschauung: weniger
          abstrakt, persönlicher und nachhaltiger.
        </p>

        <h2>Pädagogischer Ansatz</h2>
        <p>Die Werkstatt folgt dem Prinzip „Lernen durch Begegnung“. Dazu gehören:</p>
        <ul>
          <li>Kurzinputs</li>
          <li>Moderierte Dialogrunden</li>
          <li>Übungen zur Selbstreflexion</li>
          <li>Methoden aus der Jugendarbeit</li>
          <li>Besuche von Gotteshäusern</li>
          <li>Gespräche mit Geistlichen und Expert:innen</li>
          <li>Gemeinsame kreative oder praktische Arbeit</li>
          <li>Tägliche Reflexionsrunden</li>
          <li>Evaluation</li>
        </ul>

        <h2>Interreligiös und interweltanschaulich</h2>
        <p>
          Das Format richtet sich an Menschen mit religiöser Identität, spirituellem
          Bezug oder Interesse an Religion und Dialog.
        </p>
        <p>
          Konfessionslose Menschen sind willkommen. Gleichzeitig braucht das Format eine
          hinreichende Beteiligung religiöser Menschen, damit sichtbare Glaubenspraxis
          und interreligiöse Begegnung tatsächlich stattfinden können.
        </p>

        <h2>Kein Raum für Missionierung</h2>
        <p>
          Die Werkstatt ist kein Ort für Bekehrung, Überredung oder religiöse Werbung.
        </p>
        <p>
          Teilnehmende dürfen sagen, was sie glauben, hoffen oder praktizieren. Sie
          dürfen auch sagen, dass ihr eigener Weg für sie wahr und wichtig ist. Nicht
          erlaubt ist es, andere abzuwerten, unter Druck zu setzen oder die eigene
          Überzeugung als allein gültigen Maßstab für alle zu setzen.
        </p>

        <h2>Werkstattprodukt</h2>
        <p>
          In vielen Formaten entsteht ein gemeinsames Werkstattprodukt, zum Beispiel:
        </p>
        <ul>
          <li>Ein gemeinsamer Text</li>
          <li>Eine künstlerische Arbeit</li>
          <li>Ein Musikstück</li>
          <li>Ein Video</li>
          <li>Eine interreligiöse Fürbitte oder ein Bittgebet</li>
          <li>Eine Ausstellung</li>
          <li>Ein Methodenprodukt</li>
        </ul>
        <p>
          Je nach Zielgruppe kann das Produkt unterschiedlich gewichtet werden. Für
          manche Zielgruppen ist es zentral, für andere optional.
        </p>

        <h2>Was bleibt?</h2>
        <p>Teilnehmende nehmen aus der Werkstatt mit:</p>
        <ul>
          <li>Persönliche Begegnungen</li>
          <li>Neue Perspektiven auf Religion und Weltanschauung</li>
          <li>Mehr Sicherheit im Umgang mit religiöser Vielfalt</li>
          <li>Sensibilisierung für Diskriminierung</li>
          <li>Erfahrung mit gelebter Praxis</li>
          <li>Methodenkompetenz</li>
          <li>Reflexionsfähigkeit</li>
          <li>Vertrauen in Dialogprozesse</li>
        </ul>
      </Container>

      <Container padding="md" className="border-t border-[color:var(--color-line)]">
        <SectionHeader
          eyebrow="Nächster Schritt"
          titel="Welches Format passt zu Ihrer Institution?"
          lead="Universitäten, Schulen, Ausbildungsinstitutionen, Gemeinden und Jugendarbeit: Für jede Zielgruppe gibt es ein eigenes Format."
        />
      </Container>
    </>
  );
}
