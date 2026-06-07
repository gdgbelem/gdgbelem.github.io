import type { Metadata } from "next";
import { pageMetadata, absoluteUrl } from "@/lib/site";
import { SchemaMarkup, generateBreadcrumbs } from "@/lib/schema";
import { getSpeakers } from "@/lib/content";
import { PageHeader } from "@/components/landing/page-header";
import { Container } from "@/components/landing/section";
import { LinkButton } from "@/components/landing/button";
import { SpeakersGrid } from "./speakers-grid";

const PATH = "/palestrantes";

export const metadata: Metadata = pageMetadata({
  title: "Palestrantes",
  description:
    "Conheça quem compartilha conhecimento no GDG Belém. Palestrantes da comunidade falando sobre Android, Web, Cloud, IA e mais.",
  path: PATH,
});

export default function PalestrantesPage() {
  const people = getSpeakers();

  return (
    <>
      <SchemaMarkup
        schema={generateBreadcrumbs([
          { name: "Início", url: absoluteUrl("/") },
          { name: "Palestrantes", url: absoluteUrl(PATH) },
        ])}
      />
      <PageHeader
        eyebrow="Quem compartilha conhecimento"
        eyebrowTone="bg-google-red"
        title="Palestrantes"
        lead="As pessoas que sobem ao palco para ensinar, inspirar e abrir caminhos na comunidade dev do Norte."
        crumbs={[{ label: "Início", href: "/" }, { label: "Palestrantes" }]}
      >
        <LinkButton href="mailto:gdgbelem@gmail.com?subject=Quero%20palestrar%20no%20GDG%20Bel%C3%A9m" variant="outline">
          Quero palestrar
        </LinkButton>
      </PageHeader>

      <section className="py-14 md:py-20">
        <Container>
          <SpeakersGrid people={people} />
        </Container>
      </section>
    </>
  );
}
