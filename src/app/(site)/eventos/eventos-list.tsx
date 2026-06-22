"use client";

import { useMemo, useState } from "react";
import type { Evento } from "@/lib/content-types";
import { EventCard } from "@/components/landing/event-card";

type Filter = "todos" | "upcoming" | "past";

// Client-side filter over events already read on the server.
export function EventosList({ events }: { events: Evento[] }) {
  const [filter, setFilter] = useState<Filter>("todos");
  const [year, setYear] = useState<string>("todos");

  const years = useMemo(
    () =>
      Array.from(new Set(events.map((e) => new Date(e.date).getFullYear()))).sort((a, b) => b - a),
    [events],
  );

  const shown = useMemo(
    () =>
      events.filter((e) => {
        const okStatus = filter === "todos" || e.status === filter;
        const okYear = year === "todos" || String(new Date(e.date).getFullYear()) === year;
        return okStatus && okYear;
      }),
    [events, filter, year],
  );

  const tabs: { key: Filter; label: string }[] = [
    { key: "todos", label: "Todos" },
    { key: "upcoming", label: "Próximos" },
    { key: "past", label: "Encerrados" },
  ];

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <div className="inline-flex rounded-full border border-border p-1">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setFilter(t.key)}
              aria-pressed={filter === t.key}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === t.key
                  ? "bg-google-blue text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          aria-label="Filtrar por ano"
          className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium outline-none focus-visible:ring-4 focus-visible:ring-google-blue/30"
        >
          <option value="todos">Todos os anos</option>
          {years.map((y) => (
            <option key={y} value={String(y)}>
              {y}
            </option>
          ))}
        </select>
      </div>

      {shown.length > 0 ? (
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      ) : (
        <p className="mt-12 rounded-2xl border border-dashed border-border p-10 text-center font-light text-muted-foreground">
          Nenhum evento encontrado para esse filtro. Em breve teremos novidades, acompanhe as nossas
          redes.
        </p>
      )}
    </div>
  );
}
