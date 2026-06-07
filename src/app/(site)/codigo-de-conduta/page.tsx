import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMetadata, absoluteUrl } from "@/lib/site";
import { SchemaMarkup, generateBreadcrumbs } from "@/lib/schema";
import { getCodigoConduta } from "@/lib/content";
import { renderMdx } from "@/lib/render-mdx";
import { PageHeader } from "@/components/landing/page-header";
import { Container } from "@/components/landing/section";

const PATH = "/codigo-de-conduta";

export const metadata: Metadata = pageMetadata({
  title: "Código de Conduta",
  description:
    "O código de conduta do GDG Belém: um compromisso com uma comunidade acolhedora e livre de assédio para todas as pessoas.",
  path: PATH,
});

const fmt = new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "long", year: "numeric" });

export default async function CodigoCondutaPage() {
  const doc = getCodigoConduta();
  if (!doc) notFound();

  const body = doc.body ? await renderMdx(doc.body) : null;

  return (
    <>
      <SchemaMarkup
        schema={generateBreadcrumbs([
          { name: "Início", url: absoluteUrl("/") },
          { name: "Código de Conduta", url: absoluteUrl(PATH) },
        ])}
      />
      <PageHeader
        eyebrow="Nosso compromisso"
        eyebrowTone="bg-google-red"
        title={doc.title}
        lead={`Atualizado em ${fmt.format(new Date(doc.updatedAt))}.`}
        crumbs={[{ label: "Início", href: "/" }, { label: "Código de Conduta" }]}
      />

      <section className="py-14 md:py-20">
        <Container>
          <div className="prose-gdg max-w-prose font-light leading-relaxed text-muted-foreground [&_a]:text-google-blue [&_blockquote]:mt-5 [&_blockquote]:border-l-2 [&_blockquote]:border-border [&_blockquote]:pl-4 [&_blockquote]:italic [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_li]:mt-1.5 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5">
            {body ?? <p>Conteúdo em breve.</p>}
          </div>
        </Container>
      </section>
    </>
  );
}
