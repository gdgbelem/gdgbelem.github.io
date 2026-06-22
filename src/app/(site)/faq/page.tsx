import type { Metadata } from "next";
import { pageMetadata, absoluteUrl } from "@/lib/site";
import { getFaq } from "@/lib/content";
import { SchemaMarkup, generateBreadcrumbs, generateFaqSchema } from "@/lib/schema";
import { PageHeader } from "@/components/landing/page-header";
import { Faq } from "@/components/landing/faq";

const PATH = "/faq";

export const metadata: Metadata = pageMetadata({
  title: "Dúvidas frequentes",
  description:
    "Respostas para as perguntas mais comuns sobre o GDG Belém: quanto custa, precisa ser programador, como participar e como palestrar.",
  path: PATH,
});

export default function FaqPage() {
  return (
    <>
      <SchemaMarkup
        schema={[
          generateFaqSchema(getFaq()),
          generateBreadcrumbs([
            { name: "Início", url: absoluteUrl("/") },
            { name: "Dúvidas frequentes", url: absoluteUrl(PATH) },
          ]),
        ]}
      />
      <PageHeader
        eyebrow="Antes de participar"
        eyebrowTone="bg-google-yellow"
        title="Dúvidas frequentes"
        lead="Tudo que você precisa saber antes de aparecer no próximo encontro."
        crumbs={[{ label: "Início", href: "/" }, { label: "Dúvidas frequentes" }]}
      />
      <Faq />
    </>
  );
}
