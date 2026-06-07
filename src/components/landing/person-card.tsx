import Link from "next/link";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import type { Pessoa } from "@/lib/content";

// Tonal avatar (bg tint + solid ink) per Google color — mirrors activities .ic tones.
const avatarTone: Record<string, string> = {
  "google-blue": "bg-google-blue/12 text-google-blue",
  "google-red": "bg-google-red/12 text-google-red",
  "google-yellow": "bg-google-yellow/20 text-[#b8860b]",
  "google-green": "bg-google-green/12 text-google-green",
};

const roleLabel: Record<string, string> = {
  speaker: "Palestrante",
  organizer: "Organizador(a)",
};

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

// Person card for grids. `base` is the route prefix (/palestrantes or /organizadores).
export function PersonCard({ person, base }: { person: Pessoa; base: string }) {
  const label = person.title ?? person.role.map((r) => roleLabel[r] ?? r).join(" · ");
  return (
    <Link
      href={`${base}/${person.slug}`}
      className="group flex flex-col rounded-2xl border border-border bg-card p-6 outline-none transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-1 hover:border-google-blue/40 hover:shadow-md focus-visible:ring-4 focus-visible:ring-google-blue/30"
    >
      {person.avatar ? (
        <Image
          src={person.avatar}
          alt={person.name}
          width={80}
          height={80}
          className="size-20 rounded-full object-cover"
        />
      ) : (
        <span
          className={`grid size-20 place-items-center rounded-full text-2xl font-extrabold ${avatarTone[person.color]}`}
          aria-hidden
        >
          {initials(person.name)}
        </span>
      )}

      <h3 className="mt-4 text-lg font-semibold tracking-tight">{person.name}</h3>
      <p className="mt-0.5 text-sm font-medium text-muted-foreground">{label}</p>
      {person.tagline && (
        <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-muted-foreground">
          {person.tagline}
        </p>
      )}
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-google-blue">
        Ver perfil
        <IconArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
