import { PARTNER } from "@/data/partner";
import { Container } from "./Container";

export function PartnerLogoBar({ titel = "In Kooperation mit" }: { titel?: string }) {
  return (
    <section
      aria-labelledby="partner-logo-titel"
      className="border-y border-[color:var(--color-line)]/70 bg-[color:var(--color-surface)] py-14"
    >
      <Container>
        <h2 id="partner-logo-titel" className="eyebrow mb-8 text-center">{titel}</h2>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:flex-nowrap md:gap-x-10">
          {PARTNER.map((p) => (
            <li key={p.slug}>
              <div className="flex h-24 w-44 flex-col items-center justify-center rounded-2xl border border-[color:var(--color-line)]/60 bg-[color:var(--color-bg)] px-4 text-center transition-colors hover:border-[color:var(--color-primary)]/40" aria-label={`${p.rolle}: ${p.name}`}>
                {p.slug === "erzbistum-berlin" ? (
                  <div className="flex h-16 items-center gap-1" aria-label={p.name}>
                    <img src="/logos/erzbistum-icon.svg" alt="" className="h-14 w-auto" />
                    <div className="flex h-14 w-24 flex-col justify-center overflow-hidden">
                      <img src="/logos/erzbistum-text.svg" alt="Erzbistum Berlin" className="h-auto w-full" />
                      <img src="/logos/erzbistum-kathkirche.svg" alt="Katholische Kirche in Berlin, Brandenburg und Vorpommern" className="mt-1 h-auto w-full" />
                    </div>
                  </div>
                ) : p.logoPfad ? (
                  <img src={p.logoPfad} alt={p.name} className={`max-h-16 w-auto max-w-full object-contain ${p.slug === "ekbo" ? "rounded-sm bg-[#62358c] px-3 py-2" : ""}`} />
                ) : null}
                <span className="mt-2 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--color-ink-muted)]">{p.rolle === "Träger des Projekts" ? "Träger" : "Kooperationspartner"}</span>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
