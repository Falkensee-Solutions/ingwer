"use client";

import { useState } from "react";
import { buildMailto, type MailtoFields } from "@/lib/mailto";
import { FORMATE } from "@/data/formate";

const FORMAT_OPTIONS = [
  { value: "", label: "Bitte wählen …" },
  ...FORMATE.map((f) => ({ value: f.titel, label: f.titel })),
  { value: "Andere / noch unklar", label: "Andere / noch unklar" },
];

export function KontaktFormular() {
  const [form, setForm] = useState<MailtoFields>({});

  function update<K extends keyof MailtoFields>(key: K, value: MailtoFields[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const href = buildMailto(form);
    window.location.href = href;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <Field
        id="institution"
        label="Institution"
        required
        value={form.institution ?? ""}
        onChange={(v) => update("institution", v)}
      />
      <Field
        id="ansprechperson"
        label="Ansprechperson"
        value={form.ansprechperson ?? ""}
        onChange={(v) => update("ansprechperson", v)}
      />
      <Field
        id="email"
        label="Ihre E-Mail-Adresse (optional)"
        type="email"
        value={form.email ?? ""}
        onChange={(v) => update("email", v)}
        hint="Wird nur in die E-Mail eingetragen, nicht gespeichert."
      />

      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-[color:var(--color-ink)]">
          Gewünschtes Format
        </span>
        <select
          value={form.format ?? ""}
          onChange={(e) => update("format", e.target.value)}
          className="w-full rounded-md border border-[color:var(--color-line)] bg-[color:var(--color-bg)] px-3 py-2.5 text-base"
        >
          {FORMAT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="zeitraum"
          label="Ungefährer Zeitraum"
          value={form.zeitraum ?? ""}
          onChange={(v) => update("zeitraum", v)}
          placeholder="z. B. Herbst 2027"
        />
        <Field
          id="personenzahl"
          label="Anzahl Teilnehmende"
          value={form.personenzahl ?? ""}
          onChange={(v) => update("personenzahl", v)}
          placeholder="z. B. 20"
        />
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-[color:var(--color-ink)]">
          Anliegen
        </span>
        <textarea
          value={form.anliegen ?? ""}
          onChange={(e) => update("anliegen", e.target.value)}
          rows={6}
          className="w-full rounded-md border border-[color:var(--color-line)] bg-[color:var(--color-bg)] px-3 py-2.5 text-base"
          placeholder="Worum geht es? Welche Rahmenbedingungen sind wichtig?"
        />
      </label>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-[color:var(--color-primary)] px-6 py-3 text-base font-semibold text-white hover:bg-[color:var(--color-primary-hover)]"
        >
          E-Mail-Entwurf öffnen
        </button>
        <p className="text-sm text-[color:var(--color-ink-muted)]">
          Es werden keine Daten auf dieser Website gespeichert.
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder,
  hint,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: "text" | "email";
  required?: boolean;
  placeholder?: string;
  hint?: string;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-1.5 block text-sm font-semibold text-[color:var(--color-ink)]">
        {label}
        {required ? <span aria-hidden="true" className="ml-1 text-[color:var(--color-accent-hover)]">*</span> : null}
      </span>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-[color:var(--color-line)] bg-[color:var(--color-bg)] px-3 py-2.5 text-base"
      />
      {hint ? <span className="mt-1 block text-xs text-[color:var(--color-ink-muted)]">{hint}</span> : null}
    </label>
  );
}
