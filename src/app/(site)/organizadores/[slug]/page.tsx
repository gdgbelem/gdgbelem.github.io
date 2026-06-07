import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMetadata, absoluteUrl } from "@/lib/site";
import { SchemaMarkup, generateBreadcrumbs, generatePersonSchema } from "@/lib/schema";
import {
  getOrganizers,
  getPessoaBySlug,
  getEventosForPessoa,
  pessoaSocials,
} from "@/lib/content";
import { PersonProfile } from "@/components/landing/person-profile";

export function generateStaticParams() {
  return getOrganizers().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const person = getPessoaBySlug(slug);
  if (!person) return { title: "Organizador não encontrado", robots: { index: false } };
  return pageMetadata({
    title: person.name,
    description: person.tagline ?? `${person.name} organiza o GDG Belém.`,
    path: `/organizadores/${person.slug}`,
    image: person.avatar || undefined,
  });
}

export default async function OrganizadorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const person = getPessoaBySlug(slug);
  if (!person || !person.role.includes("organizer")) notFound();

  const events = getEventosForPessoa(person.slug);

  return (
    <>
      <SchemaMarkup
        schema={[
          generatePersonSchema({
            name: person.name,
            description: person.tagline,
            jobTitle: person.title,
            url: absoluteUrl(`/organizadores/${person.slug}`),
            image: person.avatar ? absoluteUrl(person.avatar) : undefined,
            sameAs: pessoaSocials(person).map((s) => s.href),
          }),
          generateBreadcrumbs([
            { name: "Início", url: absoluteUrl("/") },
            { name: "Organizadores", url: absoluteUrl("/organizadores") },
            { name: person.name, url: absoluteUrl(`/organizadores/${person.slug}`) },
          ]),
        ]}
      />
      <PersonProfile
        person={person}
        events={events}
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Organizadores", href: "/organizadores" },
          { label: person.name },
        ]}
      />
    </>
  );
}
