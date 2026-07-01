"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import {
  KATEGORIE_LABEL,
  STATUS_LABEL,
  ZIELGRUPPE_LABEL,
  type Material,
  type MaterialKategorie,
  type MaterialStatus,
  type MaterialZielgruppe,
} from "@/data/materialien";
import { MaterialCard } from "./MaterialCard";

type Props = {
  materialien: Material[];
};

const KATEGORIE_KEY = "kategorie";
const ZIELGRUPPE_KEY = "zielgruppe";
const STATUS_KEY = "status";

export function MaterialFilter({ materialien }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const kategorie = (params.get(KATEGORIE_KEY) as MaterialKategorie | null) ?? "alle";
  const zielgruppe = (params.get(ZIELGRUPPE_KEY) as MaterialZielgruppe | null) ?? "alle";
  const status = (params.get(STATUS_KEY) as MaterialStatus | "alle" | null) ?? "alle";

  const verfuegbareKategorien = useMemo(
    () => Array.from(new Set(materialien.map((m) => m.kategorie))),
    [materialien]
  );
  const verfuegbareZielgruppen = useMemo(
    () => Array.from(new Set(materialien.flatMap((m) => m.zielgruppen))),
    [materialien]
  );
  const verfuegbareStatus = useMemo(
    () => Array.from(new Set(materialien.map((m) => m.status))),
    [materialien]
  );

  const gefiltert = useMemo(() => {
    return materialien.filter((m) => {
      if (kategorie !== "alle" && m.kategorie !== kategorie) return false;
      if (zielgruppe !== "alle" && !m.zielgruppen.includes(zielgruppe as MaterialZielgruppe)) return false;
      if (status !== "alle" && m.status !== status) return false;
      return true;
    });
  }, [materialien, kategorie, zielgruppe, status]);

  function setParam(key: string, value: string) {
    const next = new URLSearchParams(params.toString());
    if (value === "alle") next.delete(key);
    else next.set(key, value);
    router.replace(`${pathname}?${next.toString()}`, { scroll: false });
  }

  function reset() {
    router.replace(pathname, { scroll: false });
  }

  return (
    <div>
      <div className="rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-4">
        <div className="grid gap-4 md:grid-cols-3">
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-ink-soft)]">
              Kategorie
            </span>
            <select
              value={kategorie}
              onChange={(e) => setParam(KATEGORIE_KEY, e.target.value)}
              className="rounded-md border border-[color:var(--color-line)] bg-[color:var(--color-bg)] px-3 py-2 text-sm"
            >
              <option value="alle">Alle Kategorien</option>
              {verfuegbareKategorien.map((k) => (
                <option key={k} value={k}>
                  {KATEGORIE_LABEL[k]}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-ink-soft)]">
              Zielgruppe
            </span>
            <select
              value={zielgruppe}
              onChange={(e) => setParam(ZIELGRUPPE_KEY, e.target.value)}
              className="rounded-md border border-[color:var(--color-line)] bg-[color:var(--color-bg)] px-3 py-2 text-sm"
            >
              <option value="alle">Alle Zielgruppen</option>
              {verfuegbareZielgruppen.map((z) => (
                <option key={z} value={z}>
                  {ZIELGRUPPE_LABEL[z]}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-ink-soft)]">
              Status
            </span>
            <select
              value={status}
              onChange={(e) => setParam(STATUS_KEY, e.target.value)}
              className="rounded-md border border-[color:var(--color-line)] bg-[color:var(--color-bg)] px-3 py-2 text-sm"
            >
              <option value="alle">Alle Status</option>
              {verfuegbareStatus.map((s) => (
                <option key={s} value={s}>
                  {STATUS_LABEL[s]}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-[color:var(--color-ink-soft)]" aria-live="polite">
            {gefiltert.length} {gefiltert.length === 1 ? "Eintrag" : "Einträge"} angezeigt
          </p>
          <button
            type="button"
            onClick={reset}
            className="text-sm font-semibold text-[color:var(--color-primary)] underline"
          >
            Filter zurücksetzen
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gefiltert.map((m) => (
          <MaterialCard key={m.slug} material={m} />
        ))}
      </div>

      {gefiltert.length === 0 ? (
        <div className="mt-12 rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-sage-soft)]/40 p-10 text-center">
          <p className="font-semibold text-[color:var(--color-ink)]">
            Keine Workshops oder Methoden gefunden
          </p>
          <p className="mt-2 text-sm text-[color:var(--color-ink-soft)]">
            Mit den aktuellen Filtern werden keine Workshops oder Methoden angezeigt. Setzen Sie die Filter zurück, um alle Einträge zu sehen.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-5 inline-flex items-center rounded-full bg-[color:var(--color-primary)] px-5 py-2 text-sm font-semibold text-white hover:bg-[color:var(--color-primary-hover)]"
          >
            Filter zurücksetzen
          </button>
        </div>
      ) : null}
    </div>
  );
}
