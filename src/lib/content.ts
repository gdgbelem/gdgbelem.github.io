import { queryCollection } from "nextjs-studio/server";

// ── Domain types (frontmatter-shaped, body added by the studio) ──────────────
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

// ── Eventos ──────────────────────────────────────────────────────────────────
export function getAllEventos(): Evento[] {
  return queryCollection("eventos").all() as unknown as Evento[];
}

export function getUpcomingEventos(): Evento[] {
  return queryCollection("eventos")
    .where({ status: "upcoming" })
    .sort("date", "asc")
    .all() as unknown as Evento[];
}

export function getPastEventos(): Evento[] {
  return queryCollection("eventos")
    .where({ status: "past" })
    .sort("date", "desc")
    .all() as unknown as Evento[];
}

export function getEventoBySlug(slug: string): Evento | undefined {
  return queryCollection("eventos").where({ slug }).first() as unknown as Evento | undefined;
}

// Eventos a pessoa participou (como palestrante ou na agenda).
export function getEventosForPessoa(pessoaSlug: string): Evento[] {
  return getAllEventos()
    .filter(
      (e) =>
        e.speakers?.includes(pessoaSlug) ||
        e.agenda?.some((a) => a.speaker === pessoaSlug),
    )
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

// ── Pessoas ──────────────────────────────────────────────────────────────────
export function getAllPessoas(): Pessoa[] {
  return queryCollection("pessoas").all() as unknown as Pessoa[];
}

export function getPessoaBySlug(slug: string): Pessoa | undefined {
  return queryCollection("pessoas").where({ slug }).first() as unknown as Pessoa | undefined;
}

export function getSpeakers(): Pessoa[] {
  return getAllPessoas().filter((p) => p.role?.includes("speaker"));
}

export function getOrganizers(): Pessoa[] {
  return getAllPessoas().filter((p) => p.role?.includes("organizer"));
}

// Resolve a list of pessoa slugs to full records, preserving order.
export function resolvePessoas(slugs: string[] = []): Pessoa[] {
  const all = getAllPessoas();
  return slugs
    .map((slug) => all.find((p) => p.slug === slug))
    .filter((p): p is Pessoa => Boolean(p));
}

// ── Parceiros ──────────────────────────────────────────────────────────────────
const tierOrder: Record<Parceiro["tier"], number> = {
  diamante: 0,
  ouro: 1,
  prata: 2,
  apoio: 3,
};

export function getAllParceiros(): Parceiro[] {
  return (queryCollection("parceiros").all() as unknown as Parceiro[]).sort(
    (a, b) => tierOrder[a.tier] - tierOrder[b.tier],
  );
}

// ── Código de conduta ──────────────────────────────────────────────────────────
export function getCodigoConduta(): CodigoConduta | undefined {
  return queryCollection("codigo-de-conduta").first() as unknown as CodigoConduta | undefined;
}

// ── FAQ / Números / Atividades (singletons em JSON) ─────────────────────────────
export function getFaq(): FaqItem[] {
  return queryCollection("faq").all() as unknown as FaqItem[];
}

export function getNumeros(): Numero[] {
  return queryCollection("numeros").all() as unknown as Numero[];
}

export function getAtividades(): Atividade[] {
  return queryCollection("atividades").all() as unknown as Atividade[];
}

// ── Social links helper for a pessoa ───────────────────────────────────────────
export function pessoaSocials(p: Pessoa): { key: string; href: string; label: string }[] {
  return [
    { key: "linkedin", href: p.linkedin, label: "LinkedIn" },
    { key: "instagram", href: p.instagram, label: "Instagram" },
    { key: "twitter", href: p.twitter, label: "Twitter" },
    { key: "github", href: p.github, label: "GitHub" },
    { key: "website", href: p.website, label: "Site" },
  ].filter((s): s is { key: string; href: string; label: string } => Boolean(s.href));
}
