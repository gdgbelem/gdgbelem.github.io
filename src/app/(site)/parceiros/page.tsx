import type { Metadata } from "next";
import { pageMetadata, absoluteUrl, basePath } from "@/lib/site";
import { SchemaMarkup, generateBreadcrumbs } from "@/lib/schema";
import { getAllParceiros, type Parceiro } from "@/lib/content";
import { PageHeader } from "@/components/landing/page-header";
import { Container } from "@/components/landing/section";
import { LinkButton } from "@/components/landing/button";

const PATH = "/parceiros";

export const metadata: Metadata = pageMetadata({
  title: "Parceiros",
  description:
    "Empresas e espaços que apoiam o GDG Belém e ajudam a manter os eventos acessíveis. Seja um parceiro da comunidade.",
  path: PATH,
});

const tierLabel: Record<Parceiro["tier"], string> = {
  diamante: "Diamante",
  ouro: "Ouro",
  prata: "Prata",
  apoio: "Apoio",
};

const dotClass: Record<string, string> = {
  "google-blue": "bg-google-blue",
  "google-red": "bg-google-red",
  "google-yellow": "bg-google-yellow",
  "google-green": "bg-google-green",
};

export default function ParceirosPage() {
  const parceiros = getAllParceiros();
  const tiers: Parceiro["tier"][] = ["diamante", "ouro", "prata", "apoio"];
  const groups = tiers
    .map((tier) => ({ tier, items: parceiros.filter((p) => p.tier === tier) }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      <SchemaMarkup
        schema={generateBreadcrumbs([
          { name: "Início", url: absoluteUrl("/") },
          { name: "Parceiros", url: absoluteUrl(PATH) },
        ])}
      />
      <PageHeader
        eyebrow="Quem apoia"
        eyebrowTone="bg-google-green"
        title="Parceiros e patrocinadores"
        lead="Manter os eventos acessíveis só é possível com apoio. Conheça quem caminha junto com a comunidade."
        crumbs={[{ label: "Início", href: "/" }, { label: "Parceiros" }]}
      >
        <LinkButton href="mailto:gdgbelem@gmail.com?subject=Quero%20apoiar%20o%20GDG%20Bel%C3%A9m">
          Seja um parceiro
        </LinkButton>
      </PageHeader>

      <section className="py-14 md:py-20">
        <Container>
          {groups.length > 0 ? (
            <div className="flex flex-col gap-12">
              {groups.map((group) => (
                <div key={group.tier}>
                  <h2 className="mb-6 text-sm font-bold uppercase tracking-[0.1em] text-muted-foreground">
                    {tierLabel[group.tier]}
                  </h2>
                  <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {group.items.map((partner) => {
                      const Logo = partner.url ? "a" : "div";
                      const linkProps = partner.url
                        ? { href: partner.url, target: "_blank", rel: "noopener noreferrer" }
                        : {};
                      return (
                        <li key={partner.slug}>
                          <Logo
                            {...linkProps}
                            className="flex h-28 items-center justify-center gap-2.5 rounded-2xl border border-border bg-card px-5 text-center"
                          >
                            {partner.logo ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                src={`${basePath}${partner.logo}`}
                                alt={partner.name}
                                className="max-h-14 w-auto max-w-[80%] object-contain"
                              />
                            ) : (
                              <>
                                <span
                                  className={`size-2.5 shrink-0 rounded-full ${dotClass[partner.color]}`}
                                  aria-hidden
                                />
                                <span className="font-semibold text-muted-foreground">
                                  {partner.name}
                                </span>
                              </>
                            )}
                          </Logo>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <p className="rounded-2xl border border-dashed border-border p-10 text-center font-light text-muted-foreground">
              Estamos buscando parceiros. Que tal ser o primeiro?
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
