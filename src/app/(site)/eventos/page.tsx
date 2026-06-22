import type { Metadata } from "next";
import { pageMetadata, absoluteUrl } from "@/lib/site";
import { SchemaMarkup, generateBreadcrumbs } from "@/lib/schema";
import { getUpcomingEventos, getPastEventos } from "@/lib/content";
import { PageHeader } from "@/components/landing/page-header";
import { Container } from "@/components/landing/section";
import { LinkButton } from "@/components/landing/button";
import { EventosList } from "./eventos-list";

const PATH = "/eventos";

export const metadata: Metadata = pageMetadata({
  title: "Eventos",
  description:
    "Próximos eventos e histórico do GDG Belém: meetups, workshops, DevFest e Build with AI, abertos à comunidade.",
  path: PATH,
});

export default function EventosPage() {
  const events = [...getUpcomingEventos(), ...getPastEventos()];

  return (
    <>
      <SchemaMarkup
        schema={generateBreadcrumbs([
          { name: "Início", url: absoluteUrl("/") },
          { name: "Eventos", url: absoluteUrl(PATH) },
        ])}
      />
      <PageHeader
        eyebrow="Agenda da comunidade"
        title="Eventos do GDG Belém"
        lead="Encontros para aprender, trocar ideias e conhecer gente que respira tecnologia na Amazônia."
        crumbs={[{ label: "Início", href: "/" }, { label: "Eventos" }]}
      >
        <LinkButton href="https://gdg.community.dev/gdg-belem/" target="_blank" rel="noopener noreferrer">
          Participar
        </LinkButton>
      </PageHeader>

      <section className="py-14 md:py-20">
        <Container>
          <EventosList events={events} />
        </Container>
      </section>
    </>
  );
}
