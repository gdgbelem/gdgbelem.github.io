import { queryCollection } from "nextjs-studio/server";
import type {
  Evento,
  Pessoa,
  Parceiro,
  CodigoConduta,
  FaqItem,
  Numero,
  Atividade,
} from "./content-types";

// Re-export types + pure helpers so existing `@/lib/content` imports keep working.
// (Server-only functions live here; client-safe stuff lives in ./content-types.)
export * from "./content-types";

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
const byName = (a: Pessoa, b: Pessoa) => a.name.localeCompare(b.name, "pt-BR");

export function getAllPessoas(): Pessoa[] {
  return queryCollection("pessoas").all() as unknown as Pessoa[];
}

export function getPessoaBySlug(slug: string): Pessoa | undefined {
  return queryCollection("pessoas").where({ slug }).first() as unknown as Pessoa | undefined;
}

export function getSpeakers(): Pessoa[] {
  return getAllPessoas()
    .filter((p) => p.role?.includes("speaker"))
    .sort(byName);
}

export function getOrganizers(): Pessoa[] {
  return getAllPessoas()
    .filter((p) => p.role?.includes("organizer"))
    .sort(byName);
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
