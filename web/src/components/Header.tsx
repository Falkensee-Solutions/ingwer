"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { MAIN_NAV, SECONDARY_NAV, SITE, type NavItem } from "@/lib/site";
import { cn } from "@/lib/cn";

function isHrefActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(href + "/");
}

function isNavItemActive(pathname: string, item: NavItem) {
  return (
    isHrefActive(pathname, item.href) ||
    item.children?.some((child) => isHrefActive(pathname, child.href)) ||
    false
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function DropdownItem({ item, pathname }: { item: NavItem; pathname: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const active = isNavItemActive(pathname, item);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [open]);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    function handle(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [open]);

  if (!item.children) {
    return (
      <li>
        <Link
          href={item.href}
          aria-current={active ? "page" : undefined}
          className={cn(
            "relative inline-flex items-center rounded-full px-3 py-2 text-[0.88rem] font-medium no-underline transition-colors xl:px-3.5 xl:text-[0.92rem]",
            active
              ? "text-[color:var(--color-primary)]"
              : "text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)]"
          )}
        >
          {item.label}
          {active && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-3.5 -bottom-[3px] h-[2px] rounded-full bg-[color:var(--color-accent)]"
            />
          )}
        </Link>
      </li>
    );
  }

  return (
    <li ref={ref} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex items-center gap-1 rounded-full px-3 py-2 text-[0.88rem] font-medium no-underline transition-colors xl:px-3.5 xl:text-[0.92rem]",
          active || open
            ? "text-[color:var(--color-primary)]"
            : "text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)]"
        )}
      >
        {item.label}
        <ChevronDown className={cn("transition-transform duration-200", open && "rotate-180")} />
      </button>
      {open && (
        <ul
          role="menu"
          className="absolute left-0 top-full z-50 mt-1 min-w-[14rem] rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-bg)] py-1.5 shadow-lg"
        >
          {item.children.map((child) => {
            const childActive = isHrefActive(pathname, child.href);
            return (
              <li key={child.href} role="none">
                <Link
                  href={child.href}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block border-b border-[color:var(--color-line)]/60 px-4 py-2.5 text-[0.9rem] no-underline last:border-0",
                    childActive
                      ? "font-semibold text-[color:var(--color-primary)]"
                      : "text-[color:var(--color-ink)] hover:text-[color:var(--color-primary)]"
                  )}
                >
                  {child.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const allNavItems = [...MAIN_NAV, ...SECONDARY_NAV];

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  // ESC closes mobile menu
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--color-line)]/80 bg-[color:var(--color-bg)]/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[72rem] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
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

        {/* Desktop nav */}
        <nav aria-label="Hauptnavigation" className="hidden md:flex md:items-center md:gap-0">
          {/* Primary nav items */}
          <ul className="flex items-center gap-0">
            {MAIN_NAV.map((item) => (
              <DropdownItem key={item.href} item={item} pathname={pathname} />
            ))}
          </ul>

          {/* Divider */}
          <span aria-hidden="true" className="mx-1.5 h-5 w-px bg-[color:var(--color-line)] xl:mx-2" />

          {/* Secondary nav items */}
          <ul className="flex items-center gap-0">
            {SECONDARY_NAV.map((item) => (
              <DropdownItem key={item.href} item={item} pathname={pathname} />
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="/mitorganisieren"
            className="ml-2 inline-flex items-center rounded-full bg-[color:var(--color-primary)] px-3 py-2 text-[0.86rem] font-bold text-white no-underline transition-opacity hover:opacity-90 xl:ml-3 xl:px-4 xl:text-[0.9rem]"
          >
            Werkstatt anfragen
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-2 text-sm font-semibold text-[color:var(--color-ink)] hover:bg-[color:var(--color-bg-deep)] md:hidden"
        >
          <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
          <span>{mobileOpen ? "Schließen" : "Menü"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-[color:var(--color-line)]/80 bg-[color:var(--color-surface)] md:hidden"
        >
          <nav
            aria-label="Mobile Hauptnavigation"
            className="mx-auto w-full max-w-[72rem] px-4 py-3 sm:px-6"
          >
            <ul className="flex flex-col gap-0.5">
              {allNavItems.map((item) => {
                const active = isNavItemActive(pathname, item);
                if (item.children) {
                  const expanded = mobileExpanded === item.href;
                  return (
                    <li key={item.href}>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileExpanded(expanded ? null : item.href)
                        }
                        className={cn(
                          "flex w-full items-center justify-between rounded-md px-3 py-2.5 text-base font-medium",
                          active
                            ? "text-[color:var(--color-primary)]"
                            : "text-[color:var(--color-ink)]"
                        )}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "transition-transform duration-200",
                            expanded && "rotate-180"
                          )}
                        />
                      </button>
                      {expanded && (
                        <ul className="ml-4 flex flex-col gap-0.5 pb-1">
                          {item.children.map((child) => {
                            const childActive = isHrefActive(pathname, child.href);
                            return (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  className={cn(
                                    "block rounded-md px-3 py-2 text-[0.9rem] no-underline",
                                    childActive
                                      ? "font-semibold text-[color:var(--color-primary)]"
                                      : "text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)]"
                                  )}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                }
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
            <div className="mt-3 border-t border-[color:var(--color-line)]/60 pt-3">
              <Link
                href="/mitorganisieren"
                className="block rounded-full bg-[color:var(--color-primary)] px-4 py-2.5 text-center text-base font-bold text-white no-underline"
              >
                Werkstatt anfragen
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
