# Aktueller Stand der Website

> Vollständige Bestandsaufnahme der aktuell implementierten Next.js-Seiten, dynamischen Routen und nicht verlinkten Legacy-Seiten.
>
> **Stand:** 03.09.2026  
> **Projekt:** Interreligiöse Werkstatt  
> **Quelle:** `web/src/app`, `web/src/components`, `web/src/data`, `web/content`

## 1. Überblick

Die Website wird als Next.js-Anwendung unter `web/` betrieben. Die sichtbaren Seiten liegen überwiegend unter `web/src/app`.

### Implementierte Routentypen

- Startseite: `/`
- Inhaltsseiten: `/aktuell`, `/begegnung`, `/angebote`, `/archiv`, `/konzept`, `/formate`, `/mitmachen`, `/mitorganisieren`, `/teilnehmen`, `/ueber-uns`
- Kontakt und Rechtliches: `/kontakt`, `/impressum`, `/datenschutz`, `/regelwerk`
- Archiv-Unterseiten: `/archiv/2024`, `/archiv/2025`, `/archiv/2026`
- Dynamische Terminseiten: `/aktuell/[slug]`
- Dynamische Formatseiten: `/formate/[slug]`
- Dynamische Materialseiten: `/materialien/[slug]`
- Material- und Produktseiten: `/materialien`, `/werkstattprodukte`

### Nicht implementierte beziehungsweise entfernte Routen

- `/partner`: entfernt; es gibt keine `page.tsx` mehr.
- `/termine`: nicht implementiert; Termine liegen unter `/aktuell`.
- `/faq`: nicht implementiert, wird aber derzeit noch im Footer und in der Sitemap referenziert.

---

# 2. Globale Website-Texte

## Marke

- **Name:** Interreligiöse Werkstatt
- **Claim:** Lernen durch Begegnung
- **Beschreibung:** Mehrtägige Begegnungs- und Bildungsformate von Forum Dialog e.V. in Kooperation mit EKBO, Erzbistum Berlin und House of One.
- **E-Mail:** `werkstatt@forumdialog.org`
- **Instagram:** `interreligöse_werkstatt`
- **Instagram-URL:** derzeit nicht hinterlegt; der Handle wird als „Handle in Prüfung“ angezeigt.

Quelle: `web/content/site.json`, `web/src/lib/site.ts`

## Hauptnavigation

Aktuell in `MAIN_NAV`:

1. **Aktuell** → `/aktuell`
2. **Begegnung** → `/begegnung`
3. **Angebote** → `/angebote`
4. **Archiv** → `/archiv`
5. **Über uns** → `/ueber-uns`

Der frühere Menüpunkt **Kontakt** ist entfernt.

## Header-CTA

- **Werkstatt planen** → `/mitorganisieren`

## Footer

### Kontakt

- Kontakt
- `werkstatt@forumdialog.org`
- Instagram: `interreligöse_werkstatt` (Handle in Prüfung)

### Mehr

- Kontakt → `/kontakt`
- Regelwerk → `/regelwerk`
- Über uns → `/ueber-uns`
- FAQ → `/faq` (**aktuell nicht implementiert**)
- Impressum → `/impressum`
- Datenschutz → `/datenschutz`

### Copyright

© [aktuelles Jahr] Forum Dialog e.V. – Interreligiöse Werkstatt. Alle Inhalte vorbehaltlich juristischer Prüfung.

## Barrierefreiheit und mobile Navigation

- Zum Hauptinhalt springen
- Menü öffnen
- Menü schließen
- Schließen
- Hauptnavigation

---

# 3. Startseite `/`

**Datei:** `web/src/app/page.tsx`

## Hero

- **Titel:** Interreligiöse Werkstatt
- **Claim:** Lernen durch Begegnung
- **Inhalt:** Die Interreligiöse Werkstatt wird als mehrtägiges Begegnungs- und Bildungsformat für junge Menschen mit unterschiedlichen religiösen und weltanschaulichen Hintergründen vorgestellt. Im Mittelpunkt stehen gemeinsames Wohnen, Kennenlernen, geschützte Gespräche, religiöse Praxis und ein gemeinsames Werkstattprojekt.

## Abschnitte

- **Das Konzept** – Dialog entsteht in der persönlichen Begegnung.
- **Das Format** – Beschreibung der Werkstatt als mehrtägige Exkursion und gemeinsamer Erfahrungsraum.
- **Die drei Kerninhalte des Formats**
  - Mehrtägigkeit
  - Interreligiöse Zimmer beziehungsweise gemeinsame Unterkunft
  - Sichtbare religiöse und spirituelle Praxis
- Partnerlogo-Leiste: **In Kooperation mit**
- CTA: **Mehr über die Begegnung** / **Begegnung kennenlernen**

## Verlinkungen

- Werkstatt teilnehmen → `/aktuell#teilnehmen`
- Werkstatt planen → `/angebote#mitplanen`
- Begegnung kennenlernen → `/begegnung`

## Datenquellen

- `SITE` aus `web/content/site.json`
- Partnerlogos über `PartnerLogoBar`
- Partnerdaten aus `web/content/partner.json`

---

# 4. Aktuelle Veranstaltungen `/aktuell`

**Datei:** `web/src/app/aktuell/page.tsx`

## Inhalt

- **Eyebrow:** Aktuelles
- **Überschrift:** Anstehende Veranstaltungen

Die Seite zeigt bis zu sechs Termine, deren Status nicht `abgeschlossen` ist. Die Karten enthalten abhängig vom Datensatz:

- Titel
- Zeitraum
- Ort
- Status
- Zielgruppe
- Beschreibung
- Link zur Detailseite

## Aktuell angelegte nicht abgeschlossene Termine

- Interreligiöse Werkstatt Körner
- Interreligiöse Werkstatt Lazarus-Schulen
- Interreligiöse Werkstatt Schulen
- Interreligiöse Werkstatt Simojoki
- Interreligiöse Werkstatt Gemeinden / Frauen und Spiritualität

Die Ravensbrück-Werkstatt ist abgeschlossen und erscheint nicht in der Übersicht der kommenden Termine.

## Datenquelle

- `getKommendeTermine(6)` aus `web/src/data/termine.ts`
- `web/content/termine.json`

---

# 5. Termin-Detailseiten `/aktuell/[slug]`

**Datei:** `web/src/app/aktuell/[slug]/page.tsx`

Für jeden Eintrag in `web/content/termine.json` wird eine statische Detailseite erzeugt.

## Aktuelle Routen

- `/aktuell/iw-koerner-2027`
- `/aktuell/iw-lazarus`
- `/aktuell/iw-schulen-2027`
- `/aktuell/iw-simojoki-2027`
- `/aktuell/iw-gemeinden-frauen-2027`
- `/aktuell/iw-ravensbrueck-2025`

## Gemeinsame Seitenelemente

- Hero-Eyebrow: **Termin**
- Dynamischer Terminname
- Zeitraum und gegebenenfalls Ort
- Status-Badge
- Formatname
- Abschnitt **Details**
- Metadaten: Zeitraum, Ort, Zielgruppe, Status
- Teilnahme-Seitenkasten: **Anmeldung und Rückfragen**
- Optional: **Hinweis**
- Optional: **Downloads**
- Abschnitt **Weitere Formate**

## Statusabhängige CTAs

- `bestätigt`: **Anmeldung anfragen**
- `geplant`: **Interesse bekunden**
- `in-vorbereitung`: **Interesse bekunden**
- `abgeschlossen`: kein Anmeldebutton

Weitere Links:

- Zum Format
- Alle Termine dieses Formats ansehen

## Besondere Termintexte

### Interreligiöse Werkstatt Körner

- **Zeitraum:** 29.01.–02.02.2027
- **Status:** Bestätigt
- **Format:** Universitäten und Hochschulen
- **Zielgruppe:** Studierende und Gasthörer:innen im universitären Kontext.
- **Hinweis:** Teilnahme intern geregelt; externe Studierende können sich als Gasthörer:innen über die anbietende Hochschule informieren.

### Interreligiöse Werkstatt Lazarus-Schulen

- **Zeitraum:** 06.–09.04. oder 13.–16.04.; Jahr in Klärung
- **Ort:** Helenenhof bei Nauen vorgesehen
- **Status:** In Vorbereitung
- **Format:** Ausbildungsinstitutionen
- **Zielgruppe:** Bestehende Schulklasse der Lazarus-Schulen.
- **Hinweis:** Datum und Jahreszahl werden noch mit Schule und Unterkunft abgestimmt.

### Interreligiöse Werkstatt Schulen

- **Zeitraum:** voraussichtlich Juni 2027
- **Status:** Geplant
- **Format:** Schulen
- **Zielgruppe:** Oberstufen der Katholischen Schule Liebfrauen, Wilhelmstadtschulen und weiterer Partner in Klärung.
- **Hinweis:** Teilnehmende Schulen, Zeitraum und Anmeldung werden noch festgelegt.

### Interreligiöse Werkstatt Simojoki

- **Zeitraum:** voraussichtlich August 2027
- **Status:** In Vorbereitung
- **Format:** Universitäten und Hochschulen
- **Hinweis:** Zielgruppe, Inhalt und Ort werden mit den Kooperationspartnern abgestimmt.

### Interreligiöse Werkstatt Gemeinden / Frauen und Spiritualität

- **Zeitraum:** 20.–24.10.2027
- **Status:** Geplant
- **Format:** Gemeinden und Jugendarbeit
- **Zielgruppe:** Junge Frauen aus christlichen und muslimischen Gemeinden, Jugendarbeit und interreligiösen Netzwerken.
- **Hinweis:** Konzeptidee in Vorbereitung; der Schwerpunkt ist nicht vergleichend oder normierend angelegt.

### Interreligiöse Werkstatt Ravensbrück

- **Zeitraum:** 13.–17.11.2025
- **Ort:** Jugendherberge Ravensbrück
- **Status:** Abgeschlossen
- **Format:** Gemeinden und Jugendarbeit
- **Zielgruppe:** Junge Erwachsene aus katholischen, evangelischen und muslimischen Gemeinden.
- **Inhalt:** Pilotwerkstatt mit Wanderung, Workshops, Besuch der Mahn- und Gedenkstätte Ravensbrück, Podiumsdiskussion zum Thema Frieden, Besuch der Stadtkirche und interreligiöser Werkstattphase.
- **Downloads:** Ablaufpläne für Freitag, Samstag und Sonntag.
- **Hinweis:** Keine Anmeldung mehr möglich; Dokumentation und Materialien werden nach Veröffentlichung ergänzt.

---

# 6. Begegnung `/begegnung`

**Datei:** `web/src/app/begegnung/page.tsx`

## Hero

- **Titel:** Von der Kontaktaufnahme zur gemeinsamen Werkstatt
- **Inhalt:** Die Seite erklärt den Weg von der ersten Kontaktaufnahme bis zur Durchführung und Auswertung einer Werkstatt.

## Die fünf Phasen

1. **Kontaktaufnahme** – Interesse klären und passende Institutionen beziehungsweise Gruppen zusammenbringen.
2. **Individuelle Planung** – Zielgruppe, Rahmen, Schutz und organisatorische Bedingungen klären.
3. **Vorbereitende Workshops** – religiöse und weltanschauliche Hintergründe, Dialog und Regeln vorbereiten.
4. **Die mehrtägige Werkstatt** – gemeinsames Wohnen, Essen, religiöse Praxis, Besuche, Gespräche und Werkstattarbeit.
5. **Nachbereitung und Weiterentwicklung** – Erfahrungen auswerten und Folgekontakte ermöglichen.

## Weitere Inhalte

- Begegnung braucht Vorbereitung.
- Vertrauen und ein paritätisch zusammengesetztes Organisationsteam sind wichtig.
- Das Format wird an unterschiedliche Zielgruppen angepasst.

## CTAs

- Werkstatt teilnehmen → `/aktuell#teilnehmen`
- Werkstatt planen → `/angebote#mitplanen`

---

# 7. Angebote `/angebote`

**Datei:** `web/src/app/angebote/page.tsx`

## Hero und Hauptbereiche

- **Eyebrow:** Vorbereitung
- **Titel:** Workshops und Besuche
- Beschreibung vorbereitender Workshops, Besuche und Methoden.

## Workshop-Angebote

- Sensibilisierung für Diskriminierung
- Grundlagen zum muslimischen Glauben
- Grundlagen des katholischen und evangelischen Glaubens
- Dialog aus muslimischer Perspektive
- Dialog aus katholischer Perspektive
- Dialog aus evangelischer Perspektive

## CTA-Bereich

- **Titel:** Eine Interreligiöse Werkstatt gemeinsam vorbereiten
- Workshop anfragen → `/kontakt`
- Werkstatt planen → `/kontakt`

Die konkreten Methoden und Ablaufpläne werden nicht vollständig auf dieser Seite veröffentlicht.

---

# 8. Archiv `/archiv`

**Datei:** `web/src/app/archiv/page.tsx`

## Inhalt

- **Hero:** Projekte und Veranstaltungen
- **Abschnitt:** Vergangene Projekte
- Jahreskarten:
  - Archiv 2025 → `/archiv/2025`
  - Archiv 2026 → `/archiv/2026`

Die Route `/archiv/2024` ist implementiert, wird aber in der aktuellen Übersicht nicht verlinkt.

## `/archiv/2024`

**Datei:** `web/src/app/archiv/2024/page.tsx`

- Hero: **Archiv 2024**
- Inhalt: **Wird ergänzt.**

## `/archiv/2025`

**Datei:** `web/src/app/archiv/2025/page.tsx`

- Hero: **Archiv 2025**
- Karte: **Grundlagen zum christlichen Glauben** – Workshop; Methoden und Ablaufpläne werden zunächst nicht veröffentlicht.
- Karte: **Pilotwerkstatt** – erste Werkstatt; konkrete Erfahrungen und der tatsächliche Ablauf gehören in den Archivbereich.

## `/archiv/2026`

**Datei:** `web/src/app/archiv/2026/page.tsx`

Veranstaltungskarten:

- Gemeinsames Fastenbrechen
- Wanderung
- Wanderung
- Weitere Veranstaltung

Die Karten tragen aktuell den Eyebrow **2026** und den Platzhalter-Lead **x**.

---

# 9. Konzept `/konzept`

**Datei:** `web/src/app/konzept/page.tsx`

## Hero

- **Titel:** Das Konzept
- **Claim:** Begegnung braucht mehr als Informationsaustausch.
- **Kernaussage:** Dialog entsteht in der persönlichen Begegnung, im Alltag und in gelebter Spiritualität.

## Abschnitte

- **Was unterscheidet die Werkstatt von einem Workshop?**
  - Ein Workshop kann Wissen vermitteln.
  - Eine Werkstatt schafft einen Erfahrungsraum.
- **Pädagogischer Ansatz**
  - Kurzinputs
  - moderierte Dialogrunden
  - Selbstreflexionsübungen
  - Methoden aus der Jugendarbeit
  - Besuche von Gotteshäusern
  - Gespräche mit Geistlichen und Expert:innen
  - kreative oder praktische Arbeit
  - tägliche Reflexionsrunden
  - Evaluation
- **Interreligiös und interweltanschaulich**
- **Kein Raum für Missionierung**
- **Werkstattprodukt**
  - Text, künstlerische Arbeit, Musikstück, Video, Fürbitte/Bittgebet, Ausstellung oder Methodenprodukt
- **Was bleibt?**
  - persönliche Begegnungen
  - neue Perspektiven
  - Dialogkompetenz
  - Reflexionsfähigkeit
  - Sensibilisierung für Diskriminierung
- **Welches Format passt zu Ihrer Institution?**
- **Ein Konzept, unterschiedliche Zugänge**

Die vier Formate werden über `FORMATE` aus `web/content/formate.json` eingebunden.

---

# 10. Formate `/formate`

**Datei:** `web/src/app/formate/page.tsx`

## Hero

- **Titel:** Formate für unterschiedliche Institutionen
- **Kernaussage:** Die Werkstatt ist modular; Zielgruppe, Vorbereitung, Einbindung und Werkstattprodukt unterscheiden sich je nach Institution.

## Formatkarten

1. Universitäten und Hochschulen
2. Schulen
3. Ausbildungsinstitutionen
4. Gemeinden und Jugendarbeit

Jede Karte führt auf eine dynamische Detailseite.

---

# 11. Format-Detailseiten `/formate/[slug]`

**Datei:** `web/src/app/formate/[slug]/page.tsx`

## Aktuelle Routen

- `/formate/universitaeten`
- `/formate/schulen`
- `/formate/ausbildung`
- `/formate/gemeinden`

## Gemeinsame Struktur

1. Hero mit Formatname und Einleitung
2. Zielgruppe
3. Ziele
4. Typischer Ablauf
5. Voraussetzungen
6. Rolle der Institution
7. optional: Besonderheiten
8. optional: Zertifikat und Anerkennung
9. Nächster Schritt
10. Termine für dieses Format
11. Hinweis auf Workshops und Methoden

## Formatbezogene Inhalte

### Universitäten und Hochschulen

- Studierende, junge Erwachsene, theologische und religionswissenschaftliche Studiengänge sowie Lehramtsstudierende.
- Ziele: akademisch reflektierte Begegnung, religiöse Vielfalt, Dialogkompetenz und Vorbereitung auf pädagogische, soziale und theologische Berufsfelder.
- CTA: **Hochschulkooperation anfragen**.

### Schulen

- Oberstufen, Religions- und Ethikkurse und Projektwochen.
- Ziele: Begegnung, erfahrungsorientierte Bildung, Vorurteilsabbau und Dialogkompetenz.
- Besonderheit: Abstimmung mit Schulleitung, Eltern, Aufsichtspflicht, Abiturphase und Ferien.
- CTA: **Schul-Werkstatt mitorganisieren**.

### Ausbildungsinstitutionen

- Erzieher:innenausbildung, soziale Berufe und pädagogische Fachschulen.
- Ziele: Umgang mit religiöser und weltanschaulicher Vielfalt im pädagogischen Berufsalltag.
- Besonderheit: konfessionslose Teilnehmende sind ausdrücklich willkommen; Transfer in die Berufspraxis.
- CTA: **Ausbildungs-Werkstatt mitorganisieren**.

### Gemeinden und Jugendarbeit

- Junge Erwachsene, Gemeindejugend, Jugendverbände und interreligiöse Netzwerke.
- Ziele: Öffnung für Dialog, langfristige Beziehungen und Stärkung junger Dialogbotschafter:innen.
- Besonderheit: Besuche religiöser Orte, gemeinsame Gebete, Stille, kreative Werkstattphasen und Folgekontakte.
- CTA: **Gemeinde-Werkstatt mitorganisieren**.

## Gemeinsame CTAs

- Alle Formate → `/konzept#formate`
- Werkstatt planen → `/mitorganisieren`
- Workshops und Methoden ansehen → `/materialien`

Termine je Format werden aus `getTermineByFormatSlug()` geladen.

---

# 12. Workshops und Methoden `/materialien`

**Datei:** `web/src/app/materialien/page.tsx`

> Dieser Bereich ist technisch implementiert und wird hier deshalb dokumentiert, obwohl die Arbeitsfassung der redaktionellen Texte ihn ursprünglich ausgenommen hatte.

## Inhalt

- **Hero:** Workshops und Methoden
- Hinweisbox zu Überarbeitung und Verfügbarkeit
- **Kurze Übungen für Begegnung, Reflexion und Dialog**
- Clientseitiger Materialfilter

## Zielgruppen

- Institutionen
- Lehrende
- Teamer:innen
- Gemeinden
- Fachkräfte der Bildungs- und Jugendarbeit

## Sichtbare Statuswerte

- öffentlich verfügbar
- in Überarbeitung
- auf Anfrage verfügbar

Entwürfe werden nicht öffentlich angezeigt.

## Aktuelle Materialthemen

- Sensibilisierung für Diskriminierung
- Dialog aus muslimischer Perspektive
- Grundlagen des christlichen Glaubens
- Dialog aus evangelischer Perspektive
- Dialog aus katholischer Perspektive
- Moscheebesuch und Fragerunde
- Interreligiöses Kochen
- Chaosspiel
- Wanderung: Schöpfung, Natur, Besinnung
- Besuch einer Gedenkstätte

Quelle: `web/content/materialien.json`.

---

# 13. Material-Detailseiten `/materialien/[slug]`

**Datei:** `web/src/app/materialien/[slug]/page.tsx`

Die Detailseiten werden für alle Materialien erzeugt, deren Status nicht `entwurf` ist.

## Aktuelle Materialrouten

- `/materialien/sensibilisierung-diskriminierung`
- `/materialien/dialog-muslimisch`
- `/materialien/grundlagen-christlich`
- `/materialien/dialog-evangelisch`
- `/materialien/dialog-katholisch`
- `/materialien/moscheebesuch`
- `/materialien/interreligioeses-kochen`
- `/materialien/chaosspiel`
- `/materialien/wanderung-schoepfung`
- `/materialien/gedenkstaettenbesuch`

## Gemeinsame Seitenelemente

Je nach Datensatz erscheinen:

- Kategorie, Titel und Kurzbeschreibung
- Ziel
- religiöser und weltanschaulicher Bezug
- Vorbereitung
- Ablauf
- Tipps für die Durchführung
- Sensibilität und Schutz
- benötigte Materialien
- Seitenleiste **Eckdaten** mit Kategorie, Status, Dauer, Gruppengröße, Zielgruppe, Format und Sprache
- verwandte Workshops und Methoden
- Zurück zur Workshopübersicht

## Download-Status

- Download, wenn eine Datei vorhanden ist
- Material in Überarbeitung
- Auf Anfrage verfügbar
- Download folgt

---

# 14. Mitmachen `/mitmachen`

**Datei:** `web/src/app/mitmachen/page.tsx`

## Hero

- **Titel:** Der richtige Einstieg in die Interreligiöse Werkstatt
- **Claim:** Mitmachen heißt: entweder ermöglichen oder teilnehmen.
- **Text:** Die Seite unterscheidet zwischen Institutionen, die eine Werkstatt mitorganisieren, und Personen oder Gruppen, die teilnehmen möchten.

## Zwei Wege

### Für Institutionen

- **Titel:** Werkstatt mitorganisieren
- Für Schulen, Hochschulen, Ausbildungsstätten, Gemeinden, Träger und Partner.
- CTA: Mitorganisieren → `/mitorganisieren`

### Für Personen und Gruppen

- **Titel:** An einer Werkstatt teilnehmen
- Für Einzelpersonen, Freund:innen, Jugendgruppen, Seminargruppen, Studierende und Gemeindemitglieder.
- CTA: Teilnehmen → `/teilnehmen`

## Abschluss-CTA

- **Titel:** Sie wissen noch nicht, welcher Weg passt?
- Kontakt aufnehmen → `/kontakt`

---

# 15. Mitorganisieren `/mitorganisieren`

**Datei:** `web/src/app/mitorganisieren/page.tsx`

## Hero

- **Titel:** Werkstätten gemeinsam möglich machen
- **Claim:** Interreligiöse Begegnung braucht institutionelle Partner.
- Zielgruppe: Gemeinden, Schulen, Hochschulen, Ausbildungsstätten, Träger, religiöse Institutionen und Jugendverbände.

## Aus Netzwerk wird Werkstatt

1. Institutionen und Gemeinden gewinnen
2. Koordinierungsgruppe bilden
3. Orgateam aufstellen
4. Vorbereitung und Werkstatt verbinden

Hinweis: **Zeit für Vertrauensaufbau einplanen**.

## Zusammenarbeit

- Was wir beitragen
- Was wir erwarten

Die Inhalte stammen aus `WIR_BRINGEN` und `WIR_ERWARTEN` in `web/src/data/collaboration.ts`. Thematisiert werden unter anderem ein erprobtes Konzept, Materialien, ein interreligiöses Netzwerk, Begleitung, Regelwerk, eine verantwortliche Ansprechperson, Zielgruppenklärung, mehrtägige Teilnahme, religiöse Praxis und Evaluation.

## CTAs

- Werkstatt planen → `/kontakt`
- Formate ansehen → `/konzept#formate`
- Regelwerk lesen → `/regelwerk`

---

# 16. Teilnahme `/teilnehmen`

**Datei:** `web/src/app/teilnehmen/page.tsx`

## Hero

- **Titel:** An einer Interreligiösen Werkstatt teilnehmen
- **Claim:** Dialog wird lebendig, wenn Menschen sich begegnen.
- Zielgruppe: Einzelpersonen, Freund:innen, Jugendgruppen, Seminargruppen, Studierende und Gemeindemitglieder.

## Abschnitte

- **Mehr als eine Veranstaltung**
  - Glauben und Alltag sichtbar erleben
  - Fragen stellen dürfen
  - Gemeinschaft erfahren
- **Wer kann teilnehmen?**
  - Menschen mit Interesse an Religion und Begegnung
- **Gemeinsam oder einzeln anmelden**
- **Was Sie mitbringen sollten**
- **Vom Interesse zur Werkstatt**
  1. Interesse zeigen und Rahmen klären
  2. Informationen zu Ablauf, Regelwerk und Unterkunft erhalten
  3. Werkstatt erleben
  4. Erfahrungen auswerten und in die Gruppe zurücktragen
- **Anstehende Werkstätten**
- CTA: **Sie möchten bei einer Werkstatt dabei sein?**

## CTAs

- Termine ansehen → `#termine`
- Interesse anmelden / Werkstatt teilnehmen → `/kontakt`
- Regelwerk lesen → `/regelwerk`

---

# 17. Über uns `/ueber-uns`

**Datei:** `web/src/app/ueber-uns/page.tsx`

## Hero

- **Eyebrow:** Über uns
- **Titel:** Wer hinter der Werkstatt steht
- **Claim:** Ein Projekt, getragen von vielen Stimmen.
- **Aktueller Text:** Die Interreligiöse Werkstatt entsteht im Zusammenspiel von Projektleitung, einem interreligiös zusammengesetzten Konzeptteam und einem Träger mit drei Kooperationspartnern. Wir bringen Erfahrung, Material und Begleitung mit – und wir benennen klar, was eine gelingende Werkstatt von Institutionen voraussetzt.

## Team

### Projektleitung

- **Erkam Cebi**
- Rolle: Projektleitung
- Organisation: Forum Dialog e.V.
- Profil: Verantwortet Gesamtkoordination, Partnerkommunikation, Finanzierung und Weiterentwicklung des Formats.

### Konzeptteam

- **Semiha Çambudak** – muslimisch-interreligiöse Perspektive, Dialogerfahrung und pädagogische Praxis.
- **Johannes Buskühl** – evangelische Perspektive sowie didaktische und theologische Reflexion.
- **Fee Wüstenberg** – Bildungsarbeit, Methodik und interreligiöse Praxis.

## Zusammenarbeit

- **Was wir beitragen – und was wir von Institutionen erwarten**
- Einleitung: Eine Werkstatt gelingt, wenn beide Seiten wissen, was sie einbringen und voneinander erwarten dürfen.
- Die Seite zeigt die Listen `WIR_BRINGEN` und `WIR_ERWARTEN`.
- Hinweisbox: **Verbindlichkeit**

## Träger und Partner

- **Eyebrow:** Träger und Partner
- **Titel:** Ein Träger, drei Kooperationspartner
- **Text:** Die Werkstatt wird von Forum Dialog e.V. getragen und gemeinsam mit drei Kooperationspartnern weiterentwickelt.

### Träger

- **Forum Dialog e.V.**
- Rolle: Träger des Projekts
- Aufgabe: Koordination von Projektleitung, Organisation, Materialien, Förderanträgen und Weiterentwicklung.

### Kooperationspartner

- **EKBO** – Kooperationspartner
- **Erzbistum Berlin** – Kooperationspartner
- **House of One** – Kooperationspartner

Die Partnerkarten werden aus `web/content/partner.json` geladen. Die frühere Partner-Unterseite `/partner` ist gelöscht.

## Abschluss-CTA

- **Titel:** Passt die Werkstatt zu Ihrer Institution?
- Kontakt aufnehmen → `/kontakt`
- Regelwerk lesen → `/regelwerk`

---

# 18. Kontakt `/kontakt`

**Dateien:** `web/src/app/kontakt/page.tsx`, `web/src/app/kontakt/KontaktFormular.tsx`

## Hero

- **Eyebrow:** Kontakt
- **Titel:** Kontakt
- **Text:** Sie möchten eine Interreligiöse Werkstatt durchführen, Materialien nutzen oder eine Kooperation besprechen? Schreiben Sie uns.

## Anfrage per E-Mail

- Das Formular öffnet ein lokales E-Mail-Programm mit einer vorbereiteten Nachricht.
- Es werden keine Daten auf der Website gespeichert.

## Formularfelder

- Institution (Pflichtfeld)
- Ansprechperson
- E-Mail-Adresse (optional)
- Gewünschtes Format
- Ungefährer Zeitraum, zum Beispiel Herbst 2027
- Anzahl Teilnehmende, zum Beispiel 20
- Anliegen
- **Button:** E-Mail-Entwurf öffnen

## Direktkontakt

- E-Mail: `werkstatt@forumdialog.org`
- Instagram: `interreligöse_werkstatt` (Handle in Prüfung)
- Erwartete Angaben: Institution, Ansprechperson, Format, Zielgruppe, Zeitraum, Teilnehmendenzahl und besondere Rahmenbedingungen.

## Datenschutz-Hinweis

- **Titel:** Datenschutz
- Die Website speichert keine Anfragen, nutzt kein Backend und kein Tracking. Das Formular erzeugt lediglich einen E-Mail-Entwurf.

---

# 19. Regelwerk `/regelwerk`

**Datei:** `web/src/app/regelwerk/page.tsx`

## Hero

- **Titel:** Regeln, Schutz und Haltung
- **Text:** Die Werkstatt ist ein Raum der Begegnung, des Lernens und des Austauschs. Gemeinsame Regeln schützen diesen Raum.

## Regeln im Überblick

Die Regeln werden aus `web/content/regelwerk.json` geladen. Aktuell sind zehn Regeln vorhanden:

1. Würde und Respekt
2. Selbstbeschreibung statt Zuschreibung
3. Keine Missionierung
4. Ich-Perspektive
5. Aktives Zuhören
6. Fragen sind willkommen
7. Vertraulichkeit
8. Keine Diskriminierung
9. Religiöse und weltanschauliche Praxis
10. Freiwilligkeit und Grenzen

## Schutzabschnitte

- Gebets- und Rückzugsräume
- Unterbringung
- Verpflegung
- Fotos und Öffentlichkeitsarbeit
- Vertrauenspersonen

Behandelt werden unter anderem Schutz vor Diskriminierung, freiwillige Teilnahme, sensible Unterbringung, vegetarische oder vegane Verpflegung, Fotoeinwilligungen und Beschwerde- beziehungsweise Vertrauenswege.

---

# 20. Werkstattprodukte `/werkstattprodukte`

**Datei:** `web/src/app/werkstattprodukte/page.tsx`

## Aktueller Zustand

- **Hero:** Werkstattprodukte
- **Eyebrow:** In Vorbereitung
- **Titel:** Werkstattprodukte folgen mit Zustimmung

Die Seite zeigt aktuell keine veröffentlichten Produkte. Mögliche Produkte sind Texte, künstlerische Arbeiten, Musik, Videos, Gebete, Plakate oder andere Ausdrucksformen. Veröffentlichungen erfolgen erst nach Zustimmung der Teilnehmenden.

## CTAs

- Werkstatt planen → `/mitorganisieren`
- Zu den Workshops → `/materialien`

Die Liste `WERKSTATTPRODUKTE` ist derzeit leer.

---

# 21. Impressum `/impressum`

**Datei:** `web/src/app/impressum/page.tsx`

## Inhalt

- **Hero:** Impressum
- Hinweisbox: **Vorläufige Fassung**
- Angaben gemäß § 5 TMG
- Vertretungsberechtigt
- Kontakt
- Registereintrag
- Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
- Haftungsausschluss

## Vorhandene Angaben

Forum Dialog e.V.  
Anton-Wilhelm-Amo-Straße 34  
10117 Berlin  
E-Mail: `werkstatt@forumdialog.org`

Vertretungsberechtigung, Registereintrag, Verantwortlichkeit und Haftungsausschluss sind noch nicht final ergänzt und müssen juristisch geprüft werden.

---

# 22. Datenschutz `/datenschutz`

**Datei:** `web/src/app/datenschutz/page.tsx`

## Inhalt

- **Hero:** Datenschutz
- Hinweisbox: **Vorläufige Fassung**
- Verantwortliche Stelle
- Zugriffsdaten
- Kontaktaufnahme
- Tracking und Cookies
- Rechte der betroffenen Personen
- Hosting

Die Seite beschreibt die Website als statische Website ohne Backend. Das Kontaktformular speichert keine Daten auf der Website und erstellt lediglich einen E-Mail-Entwurf. Tracking-Dienste und Analyse-Cookies werden nicht eingesetzt. Die Fassung ist noch vorläufig und muss an die tatsächliche technische Umsetzung angepasst und juristisch geprüft werden.

---

# 23. Aktuelle Träger- und Partnerdaten

**Datei:** `web/content/partner.json`

Die Datenstruktur enthält vier Einträge:

1. Forum Dialog e.V. – **Träger des Projekts**
2. EKBO – **Kooperationspartner**
3. Erzbistum Berlin – **Kooperationspartner**
4. House of One – **Kooperationspartner**

Damit gilt aktuell eindeutig: **ein Träger und drei Kooperationspartner**.

---

# 24. Legacy- und Altstrukturen

## Entfernte Route `/partner`

- Keine `page.tsx` mehr vorhanden.
- Nicht in der Hauptnavigation.
- Nicht in der aktuellen Sitemap.
- Partnerdaten werden weiterhin auf `/ueber-uns` und in der Partnerlogo-Leiste verwendet.
- Historische Arbeitsdokumente können den alten Pfad noch erwähnen.

## Nicht implementierte Route `/termine`

- Kein `page.tsx` vorhanden.
- Terminübersicht: `/aktuell`
- Termin-Details: `/aktuell/[slug]`

## Nicht implementierte Route `/faq`

- Keine `web/src/app/faq/page.tsx` vorhanden.
- Der Link ist in `FOOTER_NAV` und in `sitemap.ts` noch vorhanden.
- Status: veraltete beziehungsweise noch zu klärende Referenz.

## Nicht verlinkte, aber implementierte Seiten

Die folgenden Seiten sind direkt erreichbar, aber nicht Bestandteil der aktuellen Hauptnavigation:

- `/konzept`
- `/formate`
- `/formate/[slug]`
- `/materialien`
- `/materialien/[slug]`
- `/mitmachen`
- `/mitorganisieren`
- `/teilnehmen`
- `/werkstattprodukte`
- `/archiv/2024`
- `/archiv/2025`
- `/archiv/2026`
- `/impressum`
- `/datenschutz`
- `/kontakt`
- `/regelwerk`

---

# 25. Sitemap- und Verlinkungsstand

**Datei:** `web/src/app/sitemap.ts`

## Derzeit statisch eingetragen

- `/`
- `/begegnung`
- `/aktuell`
- `/angebote`
- `/archiv`
- `/archiv/2024`
- `/archiv/2025`
- `/archiv/2026`
- `/faq` (**nicht implementiert**)
- `/kontakt`
- `/regelwerk`
- `/impressum`
- `/datenschutz`

## Dynamisch ergänzt

- alle `/aktuell/[slug]`-Routen aus `TERMINE`

## Implementierte Seiten, die aktuell in der Sitemap fehlen

- `/ueber-uns`
- `/konzept`
- `/formate`
- `/formate/[slug]`
- `/materialien`
- `/materialien/[slug]`
- `/mitmachen`
- `/mitorganisieren`
- `/teilnehmen`
- `/werkstattprodukte`

## Bekannte offene Punkte

1. `/faq` aus Footer und Sitemap entfernen oder eine FAQ-Seite anlegen.
2. Implementierte öffentliche Seiten bei Bedarf in die Sitemap aufnehmen.
3. `/archiv/2024` in der Archivübersicht verlinken oder bewusst als Legacy-Seite kennzeichnen.
4. Historische Verweise auf `/partner` bereinigen.
5. Vor Veröffentlichung Impressum und Datenschutz juristisch finalisieren.
6. Platzhaltertexte im Archiv 2026 (`x`) ersetzen.
7. Instagram-Handle und URL verifizieren.
