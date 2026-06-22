// Client-safe types and pure helpers. NO `nextjs-studio/server` import here, so this
// module can be imported from client components (e.g. PersonCard inside a "use client" grid).

export type GoogleColor = "google-blue" | "google-red" | "google-yellow" | "google-green";

export interface AgendaItem {
  time: string;
  title: string;
  speaker?: string; // pessoa slug
}

export interface Evento {
  title: string;
  slug: string;
  date: string;
  status: "upcoming" | "past";
  kind: string;
  color: GoogleColor;
  location: string;
  city: string;
  summary: string;
  cover?: string;
  registrationUrl?: string;
  speakers?: string[]; // pessoa slugs
  agenda?: AgendaItem[];
  body?: string;
}

export type PessoaRole = "speaker" | "organizer";

export interface Pessoa {
  name: string;
  slug: string;
  role: PessoaRole[];
  gender?: "m" | "f";
  title?: string;
  company?: string;
  color: GoogleColor;
  avatar?: string;
  tagline?: string;
  interests?: string[];
  linkedin?: string;
  instagram?: string;
  twitter?: string;
  github?: string;
  website?: string;
  body?: string;
}

export interface Parceiro {
  name: string;
  slug: string;
  tier: "apoio" | "prata" | "ouro" | "diamante";
  logo?: string;
  url?: string;
  color: GoogleColor;
}

export interface CodigoConduta {
  title: string;
  slug: string;
  updatedAt: string;
  body?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Numero {
  value: string;
  label: string;
}

export interface Atividade {
  title: string;
  text: string;
  color: GoogleColor;
  icon: string;
}

// Primary role label for listings: organizer outranks speaker (most important first).
// Gendered: Organizador (m) / Organizadora (f); falls back to "Organizador(a)" when unknown.
export function primaryRoleLabel(p: Pessoa): string {
  if (p.role?.includes("organizer")) {
    if (p.gender === "f") return "Organizadora";
    if (p.gender === "m") return "Organizador";
    return "Organizador(a)";
  }
  if (p.role?.includes("speaker")) return "Palestrante";
  return "";
}

// Social links helper for a pessoa (pure — safe on client).
export function pessoaSocials(p: Pessoa): { key: string; href: string; label: string }[] {
  return [
    { key: "linkedin", href: p.linkedin, label: "LinkedIn" },
    { key: "instagram", href: p.instagram, label: "Instagram" },
    { key: "twitter", href: p.twitter, label: "Twitter" },
    { key: "github", href: p.github, label: "GitHub" },
    { key: "website", href: p.website, label: "Site" },
  ].filter((s): s is { key: string; href: string; label: string } => Boolean(s.href));
}
