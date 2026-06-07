import type { Metadata } from "next";
import { pageMetadata, absoluteUrl } from "@/lib/site";
import { SchemaMarkup, generateBreadcrumbs } from "@/lib/schema";
import { getOrganizers } from "@/lib/content";
import { PageHeader } from "@/components/landing/page-header";
import { Container } from "@/components/landing/section";
import { LinkButton } from "@/components/landing/button";
import { PersonCard } from "@/components/landing/person-card";

const PATH = "/organizadores";

export const metadata: Metadata = pageMetadata({
  title: "Organizadores",
  description:
    "O time de voluntários que organiza o GDG Belém. Quem faz cada evento, palestra e meetup acontecer na Amazônia.",
  path: PATH,
});

export default function OrganizadoresPage() {
  const people = getOrganizers();

  return (
    <>
      <SchemaMarkup
        schema={generateBreadcrumbs([
          { name: "Início", url: absoluteUrl("/") },
          { name: "Organizadores", url: absoluteUrl(PATH) },
        ])}
      />
      <PageHeader
        eyebrow="Quem faz acontecer"
        eyebrowTone="bg-google-yellow"
        title="Organizadores"
        lead="O GDG Belém é movido por voluntários. Conheça quem dedica o tempo livre para a comunidade crescer."
        crumbs={[{ label: "Início", href: "/" }, { label: "Organizadores" }]}
      >
        <LinkButton href="mailto:gdgbelem@gmail.com?subject=Quero%20ajudar%20a%20organizar%20o%20GDG%20Bel%C3%A9m" variant="outline">
          Fazer parte do time
        </LinkButton>
      </PageHeader>

      <section className="py-14 md:py-20">
        <Container>
          {people.length > 0 ? (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {people.map((person) => (
                <li key={person.slug}>
                  <PersonCard person={person} base="/organizadores" />
                </li>
              ))}
            </ul>
          ) : (
            <p className="rounded-2xl border border-dashed border-border p-10 text-center font-light text-muted-foreground">
              Em breve apresentaremos o time aqui.
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
