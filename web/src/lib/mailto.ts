export const KONTAKT_EMAIL = "werkstatt@forumdialog.org";

export type MailtoFields = {
  institution?: string;
  ansprechperson?: string;
  email?: string;
  format?: string;
  zeitraum?: string;
  personenzahl?: string;
  anliegen?: string;
};

/**
 * Builds a mailto: URL with prefilled subject and body.
 * All inputs are URL-encoded so the user's mail client receives clean text.
 */
export function buildMailto(fields: MailtoFields): string {
  const subject = fields.institution
    ? `Anfrage Interreligiöse Werkstatt – ${fields.institution}`
    : "Anfrage Interreligiöse Werkstatt";

  const lines = [
    "Sehr geehrtes Team der Interreligiösen Werkstätten,",
    "",
    "ich möchte folgende Anfrage stellen:",
    "",
    fields.institution ? `Institution: ${fields.institution}` : null,
    fields.ansprechperson ? `Ansprechperson: ${fields.ansprechperson}` : null,
    fields.email ? `E-Mail: ${fields.email}` : null,
    fields.format ? `Gewünschtes Format: ${fields.format}` : null,
    fields.zeitraum ? `Zeitraum: ${fields.zeitraum}` : null,
    fields.personenzahl ? `Personenzahl: ${fields.personenzahl}` : null,
    "",
    fields.anliegen ? "Anliegen:" : null,
    fields.anliegen ?? null,
    "",
    "Mit freundlichen Grüßen",
  ].filter((line) => line !== null);

  const body = lines.join("\n");

  return `mailto:${KONTAKT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
