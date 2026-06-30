import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container padding="lg" className="max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-accent-hover)]">
        404
      </p>
      <h1 className="mt-3 text-4xl font-bold">Seite nicht gefunden</h1>
      <p className="mt-4 text-[color:var(--color-ink-soft)]">
        Die aufgerufene Seite existiert nicht oder wurde verschoben.
      </p>
      <p className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center rounded-md bg-[color:var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white no-underline"
        >
          Zur Startseite
        </Link>
      </p>
    </Container>
  );
}
