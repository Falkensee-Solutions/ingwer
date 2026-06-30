type ClassValue = string | number | false | null | undefined;

/** Minimal class-name merger (no dedup, no clsx dependency). */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
