# Interreligiöse Werkstatt — Website

Statische Next.js-Website (App Router, TypeScript, Tailwind v4) für das Projekt
**Interreligiöse Werkstatt** von Forum Dialog e.V. in Kooperation mit EKBO,
Erzbistum Berlin und House of One.

Die verbindlichen inhaltlichen Quellen liegen im übergeordneten Workspace-Ordner als
Briefing-Markdown-Dateien (`01-projektbrief.md` bis `08-offene-punkte.md`).

## Setup

```powershell
cd web
npm install
npm run dev
```

Server läuft dann unter http://localhost:3000.

### Build & Lint

```powershell
npm run build
npm run lint
```

## Projektstruktur

```
web/
├── src/
│   ├── app/                  Next.js App Router – alle Seiten
│   │   ├── layout.tsx        Root-Layout (Header, Footer, Skip-Link)
│   │   ├── page.tsx          Startseite
│   │   ├── konzept/          /konzept
│   │   ├── formate/          /formate + dynamische /formate/[slug]
│   │   ├── materialien/      /materialien + /materialien/[slug]
│   │   ├── werkstattprodukte/
│   │   ├── termine/
│   │   ├── partner/
│   │   ├── regelwerk/
│   │   ├── kontakt/          mit mailto-Formular (Client-Component)
│   │   ├── impressum/        Platzhalter
│   │   ├── datenschutz/      Platzhalter
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── not-found.tsx
│   │   └── globals.css       Tailwind v4 @theme + Design-Tokens
│   ├── components/           wiederverwendbare UI-Komponenten
│   ├── data/                 dünne TS-Wrapper (Typen + Helfer) um content/*.json
│   └── lib/                  Helfer (cn, mailto, site)
├── content/                  inhaltliche JSON-Dateien (CMS-Quelle, siehe unten)
│   ├── site.json
│   ├── partner.json
│   ├── formate.json
│   ├── materialien.json
│   ├── termine.json
│   └── regelwerk.json
└── public/
    ├── admin/                Sveltia CMS (index.html + config.yml)
    ├── logos/                Partner-Logos (separat einfügen)
    ├── images/               Bild-Assets (separat einfügen)
    └── downloads/            PDFs etc.
```

## Inhalte pflegen

Alle redaktionellen Inhalte liegen als **JSON-Dateien** unter `web/content/`. Die
TypeScript-Module unter `src/data/` sind dünne Wrapper – sie importieren die JSONs
und stellen Typen sowie Hilfsfunktionen bereit. Komponenten und Seiten müssen für
Inhaltspflege **nicht** angefasst werden.

Es gibt zwei Wege, Inhalte zu pflegen:

1. **Visuell über `/admin`** – Sveltia CMS, Login per GitHub.
   Empfohlen für Redakteur:innen. Siehe Abschnitt
   [CMS-Login einrichten](#cms-login-einrichten-sveltia-cms) weiter unten.
2. **Direkt in den JSON-Dateien** – über GitHubs Web-Editor oder lokal.
   Sinnvoll für Entwickler:innen oder kleinere Patches.

### Wege im Detail

#### a) Visuell über `/admin` (Sveltia CMS)

- Nach Setup (siehe unten) Browser öffnen: `https://<domain>/admin/`
- Mit GitHub einloggen
- Collection wählen (z. B. „Formate“), Eintrag bearbeiten, „Save“ klicken
- Sveltia committet automatisch in den `main`-Branch.
- Vercel/Netlify bauen die Website daraufhin neu.

#### b) Direkt im JSON über GitHub Web-Editor

1. Datei im Repo öffnen (z. B. `web/content/formate.json`).
2. Auf das Stift-Symbol klicken („Edit this file“).
3. Deutschen Text zwischen den `"…"` ändern – Kommas, Klammern und Anführungs-
   zeichen **nicht** löschen.
4. „Commit changes…“ klicken.
5. Wenn Vercel/Netlify angebunden ist, baut sich die Website automatisch neu.

**Welche Felder sind sicher bearbeitbar?**

- `partner.json`: `rolle`, `beschreibung`, `url`, `logoPfad`
- `formate.json`: `titel`, `kurz`, `einleitung`, `ziele[]`, `ablauf[]`,
  `voraussetzungen[]`, `institutionsrolle[]`, `besonderheiten`, `zertifikat`, `cta`
- `materialien.json`: `titel`, `kurzbeschreibung`, `ziel`, `dauer`, `status`, `download`
- `termine.json`: `titel`, `zeitraum`, `sortDate`, `ort`, `zielgruppe`, `beschreibung`,
  `hinweis`, `status`, `downloads`
- `regelwerk.json`: `titel`, `kurz`, `lang` (jede Regel) sowie `titel`, `text`,
  `punkte` (jeder Schutz-Abschnitt)
- `site.json`: Claim, Kontakt-E-Mail, Instagram-Handle

**Nicht ändern**, ohne mit Entwickler:innen Rücksprache zu halten:

- `slug`-Felder (bestimmen URLs – Änderungen brechen Links)
- TS-Typen unter `src/data/*.ts`
- Statuswerte: nur die bereits vorhandenen Werte verwenden
  (`fix | geplant | in-klaerung | abgeschlossen` bzw. `oeffentlich |
  in-ueberarbeitung | auf-anfrage | entwurf`)

**Längere Fließtexte** (z. B. die Konzeptseite) stehen weiterhin als JSX in den
`src/app/<seite>/page.tsx`-Dateien. Diese können über CMS *nicht* gepflegt werden –
bei Bedarf bitte den GitHub-Web-Editor verwenden (Vorsicht mit HTML-Tags wie
`<p>`, `<h2>`).

### Termine — `content/termine.json`

- Status: `fix`, `geplant`, `in-klaerung`, `abgeschlossen`
- Felder: `titel`, `zeitraum` (Anzeigetext), `sortDate` (für Reihenfolge),
  `ort`, `zielgruppe`, `beschreibung`, optional `hinweis` und `downloads[]`
- Reihenfolge auf der Seite: erst fix, dann geplant, in-klaerung, abgeschlossen.
  Innerhalb jeder Gruppe nach `sortDate`.

### Materialien — `content/materialien.json`

- Status: `oeffentlich`, `in-ueberarbeitung`, `auf-anfrage`, `entwurf`
- Nur Materialien mit Status `oeffentlich`, `in-ueberarbeitung` oder `auf-anfrage`
  erscheinen auf `/materialien` (`SICHTBARE_STATUS`).
- Ist `download: null`, zeigt die Karte automatisch einen passenden Status-Hinweis
  („Material in Überarbeitung“, „Auf Anfrage verfügbar“, „Download folgt“).
- PDF zuerst nach `public/downloads/…` ablegen, dann `download: "/downloads/…"` setzen.

### Formate — `content/formate.json`

Vier Formate (Universitäten, Schulen, Ausbildung, Gemeinden). Slugs sind in den
Routen `/formate/[slug]` fest verdrahtet. Eine Änderung der Slugs erfordert ein
Update in `FormatSlug`-Typ (`src/data/formate.ts`) und in `generateStaticParams`.

### Partner — `content/partner.json`

Reihenfolge der Partner steuert die Anzeige in der Partner-Leiste auf der Startseite
und auf der `/partner`-Seite.

### Regelwerk — `content/regelwerk.json`

17 Regeln mit Kurz- und Langfassung sowie 6 Schutz-Abschnitte (Räume, Unterbringung,
Verpflegung, Fotos, Beschwerdewege, Eskalationslogik).

## Logos einfügen

Siehe `public/logos/README.md`.

Solange keine Logo-Datei vorhanden ist, zeigt die `PartnerLogoBar`-Komponente einen
neutralen Textplatzhalter pro Partner.

## Bilder einfügen

Siehe `public/images/README.md`. **Keine erkennbaren Gesichter ohne schriftliche
Einwilligung.**

## Kontaktformular

Das Kontaktformular auf `/kontakt` erstellt eine `mailto:`-URL und öffnet das
lokale E-Mail-Programm. Es werden **keine Daten** auf der Website gespeichert. Logik
in `src/lib/mailto.ts`.

## Design-System (Kurzüberblick)

- **Typografie**: Inter (Sans, Fließtext) + Fraunces (Display-Serif für Headlines).
  Beide werden über `next/font/google` ohne externe Requests eingebunden.
- **Farben**: warmes Creme als Hintergrund, tiefes Petrol als Primär-, gebranntes
  Orange als Akzent-, gedämpftes Salbeigrün als Sekundärfarbe. Alle Werte als
  CSS-Variablen in `src/app/globals.css` (`@theme`-Block).
- **Komponenten** folgen einem konsistenten Muster: weiche Schatten, abgerundete
  Ecken (`rounded-2xl`), dezente Hover-Lifts, Eyebrow-Labels in Sans-Caps.
- **Status-Information** wird immer doppelt kommuniziert (Farbe + Text/Marker),
  damit sie auch ohne Farbe verständlich bleibt.

## CMS-Login einrichten (Sveltia CMS)

Die Website nutzt **[Sveltia CMS](https://github.com/sveltia/sveltia-cms)** – eine
moderne, schlanke Alternative zu Decap CMS. Es wird per CDN-Script in
`public/admin/index.html` geladen, **kein npm-Paket nötig**. Konfiguration:
`public/admin/config.yml`.

**Was Sveltia tut:**
Redakteur:innen öffnen `https://<domain>/admin/`, loggen sich mit ihrem
GitHub-Konto ein, bearbeiten Inhalte über visuelle Formulare und klicken auf
„Save“. Sveltia committet die Änderung an `web/content/*.json` in den `main`-Branch.
Vercel/Netlify bauen die Website daraufhin automatisch neu (1–2 Minuten).

### Schritt 1: Konfiguration anpassen

In `web/public/admin/config.yml` Folgendes setzen:

```yaml
backend:
  name: github
  repo: BENUTZER/REPO      # z. B. "interwerkstatt/website"
  branch: main
  base_url: https://YOUR-WORKER.workers.dev  # OAuth-Proxy, siehe Schritt 3
```

**Pfad-Hinweis:** Die Datei nimmt an, dass die **Repo-Wurzel das `web/`-Verzeichnis**
ist. Wenn stattdessen das gesamte `INTWER/`-Verzeichnis als Repo deployed wird,
müssen alle `file:`-Pfade in `config.yml` mit `web/` beginnen
(z. B. `web/content/site.json` statt `content/site.json`) und `media_folder`
auf `web/public/images` gesetzt werden.

### Schritt 2: GitHub OAuth App anlegen

1. GitHub → Settings → **Developer settings** → **OAuth Apps** → **New OAuth App**.
2. Felder ausfüllen:
   - **Application name**: z. B. „Interreligiöse Werkstatt CMS“
   - **Homepage URL**: `https://<euer-domain>`
   - **Authorization callback URL**: `https://YOUR-WORKER.workers.dev/callback`
     (wird im nächsten Schritt erzeugt)
3. **Client ID** und **Client Secret** notieren.

### Schritt 3: OAuth-Proxy auf Cloudflare Workers (kostenlos)

Da GitHubs OAuth-Flow ein Server-Secret braucht (im Browser ist es nicht sicher),
ist ein winziger Proxy nötig. Cloudflare Workers bietet das im Free-Tier.

Empfohlene fertige Lösung: **[sveltia-cms-auth](https://github.com/sveltia/sveltia-cms-auth)**.

Kurzfassung der Schritte (Details in der verlinkten README):

1. Cloudflare-Konto anlegen (kostenlos).
2. Repo `sveltia/sveltia-cms-auth` lokal klonen oder als Template auf GitHub forken.
3. In Cloudflare Dashboard → **Workers & Pages** → **Create** → mit GitHub-Repo
   verbinden, deployen.
4. Im Worker unter **Settings → Variables and Secrets** anlegen:
   - `GITHUB_CLIENT_ID` (aus Schritt 2)
   - `GITHUB_CLIENT_SECRET` (aus Schritt 2)
   - `ALLOWED_DOMAINS` = die Domain der Website (z. B. `interwerkstatt.de`)
5. Worker-URL (z. B. `https://sveltia-cms-auth.IHR-NAME.workers.dev`) als
   `base_url` in `config.yml` eintragen.
6. Diese Worker-URL + `/callback` in der GitHub OAuth App als Callback URL eintragen.

### Schritt 4: Berechtigungen

Damit jemand das CMS nutzen kann, braucht ihr GitHub-Account **Schreibrechte**
auf das Repo (Rolle „Write“ oder höher). Verwaltung über GitHub → Repo →
**Settings** → **Collaborators**.

### Schritt 5: Erstes Login

1. `https://<domain>/admin/` öffnen.
2. „Login with GitHub“ klicken → GitHub-Login → App autorisieren.
3. Dashboard mit den Collections erscheint:
   Website-Grunddaten, Partner, Formate, Materialien, Termine, Regelwerk.
4. Bearbeiten → „Save“ → Commit landet im Repo → Build startet automatisch.

### Lokal testen (ohne Worker)

Für lokale Tests gegen die Live-`main`-Branch:

```powershell
cd web
npm run dev
# Browser: http://localhost:3000/admin/
```

In `config.yml` temporär `backend: name: github` durch `backend: name: test-repo`
ersetzen → CMS läuft mit In-Memory-Daten, keine Commits. Vor dem Deployen
zurückstellen.

### Hinweise

- Das `/admin/`-Verzeichnis ist mit `<meta name="robots" content="noindex">`
  ausgestattet und taucht nicht in Suchmaschinen auf.
- Sveltia speichert keinen Server-Stand; Inhalte sind **immer** das, was im
  `main`-Branch steht.
- Bei Konflikten (zwei Personen editieren gleichzeitig) erkennt Sveltia das
  über Git und meldet es.

## Offene Punkte vor Veröffentlichung
2. Impressum und Datenschutz juristisch prüfen lassen (aktuell Platzhalter)
3. Bilder mit Einwilligungen kuratieren
4. PDF-Materialien hochladen und in `materialien.ts` / `termine.ts` verlinken
5. Instagram-Handle verifizieren — siehe `src/lib/site.ts` (`instagramHandle`,
   `instagramUrl`)
6. Anfrage-Bearbeitung: Zuständigkeit klären
7. Jahreszahl für IW Körner offiziell bestätigen (aktuell 2027 gesetzt)
8. Datum für IW Lazarus entscheiden (06.–09.04. vs. 13.–16.04.)
9. Echte Produktionsdomain in `src/app/sitemap.ts` eintragen (statt `example.org`)
