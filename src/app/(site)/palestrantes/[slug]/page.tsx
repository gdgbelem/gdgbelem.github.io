import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMetadata, absoluteUrl } from "@/lib/site";
import { SchemaMarkup, generateBreadcrumbs, generatePersonSchema } from "@/lib/schema";
import {
  getSpeakers,
  getPessoaBySlug,
  getEventosForPessoa,
  pessoaSocials,
} from "@/lib/content";
import { PersonProfile } from "@/components/landing/person-profile";

export function generateStaticParams() {
  return getSpeakers().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const person = getPessoaBySlug(slug);
  if (!person) return { title: "Palestrante não encontrado", robots: { index: false } };
  return pageMetadata({
    title: person.name,
    description: person.tagline ?? `${person.name} é palestrante do GDG Belém.`,
    path: `/palestrantes/${person.slug}`,
    image: person.avatar || undefined,
  });
}

export default async function PalestrantePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const person = getPessoaBySlug(slug);
  if (!person || !person.role.includes("speaker")) notFound();

  const events = getEventosForPessoa(person.slug);

  return (
    <>
      <SchemaMarkup
        schema={[
          generatePersonSchema({
            name: person.name,
            description: person.tagline,
            jobTitle: person.title,
            url: absoluteUrl(`/palestrantes/${person.slug}`),
            image: person.avatar ? absoluteUrl(person.avatar) : undefined,
            sameAs: pessoaSocials(person).map((s) => s.href),
          }),
          generateBreadcrumbs([
            { name: "Início", url: absoluteUrl("/") },
            { name: "Palestrantes", url: absoluteUrl("/palestrantes") },
            { name: person.name, url: absoluteUrl(`/palestrantes/${person.slug}`) },
          ]),
        ]}
      />
      <PersonProfile
        person={person}
        events={events}
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Palestrantes", href: "/palestrantes" },
          { label: person.name },
        ]}
      />
    </>
  );
}
