import Link from "next/link";
import { IconMapPin, IconArrowRight } from "@tabler/icons-react";
import type { Evento } from "@/lib/content";

const dateTone: Record<string, string> = {
  "google-blue": "bg-google-blue/10 text-google-blue-dark",
  "google-red": "bg-google-red/10 text-google-red",
  "google-yellow": "bg-google-yellow/20 text-[#b8860b]",
  "google-green": "bg-google-green/10 text-google-green",
};

const MONTHS = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

function parts(iso: string) {
  const d = new Date(iso);
  return { day: String(d.getDate()).padStart(2, "0"), month: MONTHS[d.getMonth()] ?? "" };
}

// Event card for grids/lists. Links to the event detail page.
export function EventCard({ event }: { event: Evento }) {
  const { day, month } = parts(event.date);
  const upcoming = event.status === "upcoming";
  return (
    <Link
      href={`/eventos/${event.slug}`}
      className="group flex flex-col rounded-2xl border border-border bg-card p-7 outline-none transition-[box-shadow,transform] duration-200 hover:-translate-y-1 hover:shadow-md focus-visible:ring-4 focus-visible:ring-google-blue/30"
    >
      <div className="flex items-center justify-between">
        <div
          className={`flex size-16 flex-col items-center justify-center rounded-xl ${dateTone[event.color]}`}
        >
          <span className="text-2xl font-extrabold leading-none">{day}</span>
          <span className="text-xs font-semibold uppercase">{month}</span>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1.5 text-xs font-semibold text-muted-foreground">
          {event.kind}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-semibold tracking-tight">{event.title}</h3>
      <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
        <IconMapPin size={15} /> {event.city}
      </p>
      <p className="mt-3 flex-1 font-light leading-relaxed text-muted-foreground">{event.summary}</p>

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-google-blue">
        {upcoming ? "Ver detalhes" : "Reviver o evento"}
        <IconArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
