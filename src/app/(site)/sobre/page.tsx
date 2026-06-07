import type { Metadata } from "next";
import { pageMetadata, absoluteUrl } from "@/lib/site";
import { SchemaMarkup, generateBreadcrumbs } from "@/lib/schema";
import { PageHeader } from "@/components/landing/page-header";
import { About } from "@/components/landing/about";
import { Stats } from "@/components/landing/stats";
import { Activities } from "@/components/landing/activities";

const PATH = "/sobre";

export const metadata: Metadata = pageMetadata({
  title: "Sobre",
  description:
    "O GDG Belém é um capítulo do Google Developer Groups na Amazônia. Conheça a missão, os valores e o que a comunidade faz.",
  path: PATH,
});

export default function SobrePage() {
  return (
    <>
      <SchemaMarkup
        schema={generateBreadcrumbs([
          { name: "Início", url: absoluteUrl("/") },
          { name: "Sobre", url: absoluteUrl(PATH) },
        ])}
      />
      <PageHeader
        eyebrow="Quem somos"
        title="Tecnologia que nasce na Amazônia"
        lead="Uma comunidade independente, sem fins lucrativos, que aproxima as ferramentas do Google de quem vive e cria no Norte do Brasil."
        crumbs={[{ label: "Início", href: "/" }, { label: "Sobre" }]}
      />

      <About />
      <Stats />
      <Activities />
    </>
  );
}
