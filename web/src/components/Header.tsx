"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MAIN_NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Menü beim Routenwechsel schließen
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // ESC schließt Menü
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--color-line)]/80 bg-[color:var(--color-bg)]/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[72rem] items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex flex-col text-[color:var(--color-ink)] no-underline"
          aria-label={`${SITE.name} – Startseite`}
        >
          <span className="text-[1.05rem] font-extrabold uppercase leading-tight tracking-[-0.01em] text-[color:var(--color-ink)] md:text-[1.2rem]">
            {SITE.name}
          </span>
          <span className="script-claim mt-0.5 hidden text-sm text-[color:var(--color-primary)] md:block">
            Lernen durch Begegnung
          </span>
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {MAIN_NAV.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative rounded-full px-3.5 py-2 text-[0.92rem] font-medium no-underline transition-colors",
                      active
                        ? "text-[color:var(--color-primary)]"
                        : "text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)]"
                    )}
                  >
                    {item.label}
                    {active ? (
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-3.5 -bottom-[3px] h-[2px] rounded-full bg-[color:var(--color-accent)]"
                      />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-2 text-sm font-semibold text-[color:var(--color-ink)] hover:bg-[color:var(--color-bg-deep)] lg:hidden"
        >
          {open ? "Schließen" : "Menü"}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-[color:var(--color-line)]/80 bg-[color:var(--color-surface)] lg:hidden"
        >
          <nav aria-label="Mobile Hauptnavigation" className="mx-auto w-full max-w-[72rem] px-4 py-3 sm:px-6">
            <ul className="flex flex-col gap-1">
              {MAIN_NAV.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "block rounded-md px-3 py-2.5 text-base font-medium no-underline",
                        active
                          ? "bg-[color:var(--color-sage-soft)] text-[color:var(--color-ink)]"
                          : "text-[color:var(--color-ink)] hover:bg-[color:var(--color-surface-alt)]"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
