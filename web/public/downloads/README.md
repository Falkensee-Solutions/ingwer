# Downloads

PDFs und andere Dateien, die auf der Website verlinkt sind.

## Aktuell erwartete Dateien

### Ravensbrück 2025 (`ravensbrueck-2025/`)

- `ablaufplan-freitag.pdf`
- `ablaufplan-samstag.pdf`
- `ablaufplan-sonntag.pdf`

Die Dateien werden in `src/data/termine.ts` (Eintrag `iw-ravensbrueck-2025`) verlinkt.
Solange sie nicht abgelegt sind, führen die Links ins Leere – die Werkstatt-Termin-Karte
zeigt aber weiterhin die Liste der vorgesehenen Downloads.

## Allgemein

- Vor dem Hochladen: persönliche Daten und interne Notizen aus PDFs entfernen.
- Dateinamen klein schreiben, ohne Umlaute, mit `-` als Trenner.
- Bei jeder neuen Datei: passenden Eintrag in `src/data/materialien.ts` oder
  `src/data/termine.ts` ergänzen und das Feld `download` bzw. `downloads[]` setzen.
