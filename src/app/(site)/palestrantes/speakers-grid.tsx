"use client";

import { useMemo, useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import type { Pessoa } from "@/lib/content-types";
import { PersonCard } from "@/components/landing/person-card";

// Client-side name search over speakers read on the server.
export function SpeakersGrid({ people }: { people: Pessoa[] }) {
  const [q, setQ] = useState("");

  const shown = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return people;
    return people.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.company?.toLowerCase().includes(term) ||
        p.interests?.some((i) => i.toLowerCase().includes(term)),
    );
  }, [people, q]);

  return (
    <div>
      <div className="relative max-w-sm">
        <IconSearch
          size={18}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar por nome, empresa ou área"
          aria-label="Buscar palestrantes"
          className="w-full rounded-full border border-border bg-background py-2.5 pl-11 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-google-blue focus-visible:ring-4 focus-visible:ring-google-blue/30"
        />
      </div>

      {shown.length > 0 ? (
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((person) => (
            <li key={person.slug}>
              <PersonCard person={person} base="/palestrantes" />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-12 rounded-2xl border border-dashed border-border p-10 text-center font-light text-muted-foreground">
          Ninguém encontrado com esse termo.
        </p>
      )}
    </div>
  );
}
