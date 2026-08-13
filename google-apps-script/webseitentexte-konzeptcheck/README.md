# Google-Docs-Konzeptcheck

Dieses gebundene Google Apps Script überträgt redaktionelle Hinweise aus dem Vergleich von:

- `Content/Konzepthandbuch.md` – maßgebliche, aktuellere Grundlage
- `webseitentexte-zur-ueberarbeitung.md` – aktueller Stand der Website

Das Skript enthält 36 konkrete Hinweise zu sachlichen Abweichungen, zu weit gehenden Aussagen und Präzisierungen.

## Wichtige technische Voraussetzung

Der reguläre Apps-Script-Dienst `DocumentApp` kann keine nativen Google-Docs-Kommentare erzeugen. Auch ein selbst definiertes `anchor`-JSON der Drive Comments API löst das Problem nicht: Google dokumentiert ausdrücklich, dass Google-Workspace-Editoren solche Kommentare als **unverankert** behandeln.

Echte, an eine markierte Textpassage gebundene Kommentare werden deshalb mit `InsertCommentRequest` der Google Docs API erzeugt. Diese Funktion befindet sich aktuell im **Google Workspace Developer Preview Program**.

Ein eigenes Google-Cloud-Projekt und aktivierte APIs sind notwendig, aber allein nicht ausreichend. Google muss sowohl das verwendete Workspace-Konto als auch genau dieses Cloud-Projekt für die Developer Preview registrieren.

Der Standardmodus ist deshalb `NATIVE_COMMENTS_PREVIEW`. Als Rückfalloption bleibt `ANNOTATIONS` erhalten:

1. Die betroffene Textstelle wird gelb markiert.
2. Am Ende des Dokuments wird eine nummerierte Liste der Verbesserungshinweise angelegt.
3. Über **Konzeptcheck → Erzeugte Anmerkungen entfernen** lässt sich dieser Abschnitt wieder löschen.

Der Rückfallmodus kann in `CONFIG` mit `mode: "ANNOTATIONS"` aktiviert werden.

## Einrichtung in Google Docs

1. Das hochgeladene Dokument als natives Google-Dokument öffnen. Falls es noch eine `.docx`-Datei ist, zuerst über **Datei → Als Google-Dokument speichern** konvertieren.
2. Im Dokument **Erweiterungen → Apps Script** öffnen.
3. Im Apps-Script-Editor unter **Projekteinstellungen → Google Cloud Platform (GCP)-Projekt** über **Projekt ändern** die numerische Projektnummer des eigenen Cloud-Projekts eintragen.
4. Im verknüpften Cloud-Projekt die **Google Docs API** aktivieren. Die Drive API ist für den verwendeten `InsertCommentRequest` nicht erforderlich; sie kann für andere Verwaltungsaufgaben zusätzlich aktiviert bleiben.
5. Das Workspace-Konto und genau dieses Cloud-Projekt beim [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview) anmelden und die Bestätigung abwarten.
6. Den Inhalt von `Code.gs` vollständig in die Apps-Script-Datei `Code.gs` kopieren.
7. In den Projekteinstellungen **Manifestdatei „appsscript.json“ im Editor anzeigen** aktivieren.
8. Den Inhalt der mitgelieferten `appsscript.json` in das Manifest kopieren.
9. Das Apps-Script-Projekt speichern und das Google-Dokument neu laden.
10. Im neuen Menü **Konzeptcheck → Preview-Zugriff testen** ausführen.
11. Danach **Prüflauf anzeigen** und schließlich **Hinweise einfügen** wählen.

Das manuelle Hinzufügen der erweiterten Dienste `Drive` und `Docs` ist für diese Fassung nicht notwendig. Das Skript ruft die Docs REST API direkt mit dem Apps-Script-OAuth-Token auf, damit die Preview-Anfrage `insertComment` unverändert übertragen wird.

## Verwendung

### Prüflauf anzeigen

Prüft, ob die hinterlegten Textanker im Google-Dokument vorkommen. Das Skript meldet:

- gefundene Textanker,
- fehlende Textanker,
- mehrfach vorkommende und deshalb mehrdeutige Textanker.

Wenn das Dokument nach dem Upload bereits verändert wurde, können einzelne Anker fehlen. In diesem Fall den jeweiligen `anchor` in `REVIEW_COMMENTS` an den aktuellen Wortlaut anpassen.

### Hinweise einfügen

Im Standardmodus werden für alle eindeutig gefundenen Textstellen echte Google-Docs-Kommentare angelegt. Der jeweils gefundene Textbereich wird dabei als native Kommentarverankerung verwendet.

Nur im Rückfallmodus `ANNOTATIONS` werden Textstellen gelb markiert und die Hinweise am Dokumentende ergänzt.

Vor dem endgültigen Lauf kann in `CONFIG` optional gesetzt werden:

```javascript
dryRun: true
```

Dann verändert das Skript das Dokument nicht.

### Erzeugte Anmerkungen entfernen

Entfernt den vom Skript angelegten Endabschnitt und setzt die Markierungen der bekannten Textanker zurück.

> Hinweis: Waren die betroffenen Passagen vorher bereits fett formatiert oder gelb markiert, wird diese Formatierung ebenfalls zurückgesetzt. Am besten zunächst mit einer Kopie des Google-Dokuments arbeiten.

## Native Kommentare

Der ausgelieferte Standard ist:

```javascript
mode: "NATIVE_COMMENTS_PREVIEW"
```

Dann versucht das Skript, echte Kommentar-Threads an den gefundenen Textbereichen anzulegen. Dafür müssen zusätzlich:

1. das Workspace-Konto und das Google-Cloud-Projekt für die Developer Preview registriert sein,
2. die Google Docs API im zugeordneten Cloud-Projekt aktiviert sein,
3. die OAuth-Scopes aus `appsscript.json` autorisiert sein.

Ohne Preview-Freischaltung schlägt dieser Modus mit einer API-Fehlermeldung fehl. Dann wieder auf `ANNOTATIONS` wechseln.

## Inhaltliche Einordnung

Die Kommentare sind redaktionelle Vorschläge. Besonders folgende Angaben müssen zusätzlich organisatorisch geprüft werden, weil sie nicht allein aus dem Konzepthandbuch bestätigt werden können:

- formaler Status und konkrete Beiträge der Kooperationspartner,
- Rolle von House of One,
- Verfügbarkeit einer operativen Begleitung,
- ECTS oder Leistungsanerkennung,
- wissenschaftliche Begleitung einzelner Formate,
- organisatorische Zuordnung der Teammitglieder.

## Offizielle technische Dokumentation

- Apps Script `DocumentApp`: <https://developers.google.com/apps-script/reference/document>
- Google Drive API – Kommentare verwalten: <https://developers.google.com/workspace/drive/api/guides/manage-comments>
- Google Drive API – Region Classifiers: <https://developers.google.com/workspace/drive/api/guides/ref-region-classifiers>
- Google Docs API – `InsertCommentRequest` (Developer Preview): <https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#InsertCommentRequest>
- Google Workspace Developer Preview: <https://developers.google.com/workspace/preview>
