import Link from "next/link";
import { FOOTER_NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-[color:var(--color-line)]/80 bg-[color:var(--color-bg-deep)]">
      <div className="mx-auto w-full max-w-[72rem] px-4 py-16 sm:px-6 lg:px-8">
        {/* Ornament-Trenner oben */}
        <div className="ornament-rule mx-auto mb-12 max-w-xs" aria-hidden="true">
          <span className="ornament-rule__dot" />
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="text-[1.35rem] font-extrabold uppercase leading-tight tracking-[-0.015em] text-[color:var(--color-ink)]">
              {SITE.name}
            </p>
            <p className="script-claim mt-1 text-base text-[color:var(--color-primary)]">
              Lernen durch Begegnung
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
              Ein Projekt von Forum Dialog e.V. in
              Kooperation mit EKBO, Erzbistum Berlin und House of One.
            </p>
          </div>

          <div>
            <p className="eyebrow">Kontakt</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${SITE.email}`} className="text-[color:var(--color-primary)]">
                  {SITE.email}
                </a>
              </li>
              <li className="text-[color:var(--color-ink-soft)]">
                Instagram:{" "}
                {SITE.instagramUrl ? (
                  <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer">
                    {SITE.instagramHandle}
                  </a>
                ) : (
                  <span title="Handle wird noch verifiziert">
                    {SITE.instagramHandle}
                    <span className="ml-1 text-xs text-[color:var(--color-ink-muted)]">(Handle in Prüfung)</span>
                  </span>
                )}
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Mehr</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {FOOTER_NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[color:var(--color-primary)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-[color:var(--color-line)]/60 pt-6 text-xs leading-relaxed text-[color:var(--color-ink-muted)]">
          © {new Date().getFullYear()} Forum Dialog e.V. – Interreligiöse
          Werkstätten. Alle Inhalte vorbehaltlich juristischer Prüfung.
        </p>
      </div>
    </footer>
  );
}
