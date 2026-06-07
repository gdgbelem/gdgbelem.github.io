import type { Metadata } from "next";
import {
  IconMail,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandFacebook,
  IconUsersGroup,
} from "@tabler/icons-react";
import type { ComponentType } from "react";
import { pageMetadata, absoluteUrl, site } from "@/lib/site";
import { SchemaMarkup, generateBreadcrumbs } from "@/lib/schema";
import { PageHeader } from "@/components/landing/page-header";
import { Container } from "@/components/landing/section";

const PATH = "/contato";

export const metadata: Metadata = pageMetadata({
  title: "Contato",
  description:
    "Fale com o GDG Belém. E-mail, redes sociais e a comunidade no GDG Community. Estamos por aqui para ajudar.",
  path: PATH,
});

type Channel = {
  Icon: ComponentType<{ size?: number; stroke?: number }>;
  label: string;
  value: string;
  href: string;
  color: string;
};

const dotClass: Record<string, string> = {
  "google-blue": "bg-google-blue/12 text-google-blue",
  "google-red": "bg-google-red/12 text-google-red",
  "google-yellow": "bg-google-yellow/20 text-[#b8860b]",
  "google-green": "bg-google-green/12 text-google-green",
};

export default function ContatoPage() {
  const channels: Channel[] = [
    { Icon: IconMail, label: "E-mail", value: site.contactEmail, href: `mailto:${site.contactEmail}`, color: "google-blue" },
    { Icon: IconUsersGroup, label: "GDG Community", value: "gdg.community.dev/gdg-belem", href: "https://gdg.community.dev/gdg-belem/", color: "google-green" },
    { Icon: IconBrandInstagram, label: "Instagram", value: "@gdgbelemoficial", href: site.social.instagram, color: "google-red" },
    { Icon: IconBrandLinkedin, label: "LinkedIn", value: "GDG Belém", href: site.social.linkedin, color: "google-blue" },
    { Icon: IconBrandX, label: "Twitter / X", value: "@GDGBelem", href: site.social.twitter, color: "google-yellow" },
    { Icon: IconBrandFacebook, label: "Facebook", value: "GDG Belém", href: site.social.facebook, color: "google-blue" },
  ];

  return (
    <>
      <SchemaMarkup
        schema={generateBreadcrumbs([
          { name: "Início", url: absoluteUrl("/") },
          { name: "Contato", url: absoluteUrl(PATH) },
        ])}
      />
      <PageHeader
        eyebrow="Vamos conversar"
        title="Fale com a gente"
        lead="Dúvida, ideia, proposta de palestra ou parceria? Escolha o canal que preferir."
        crumbs={[{ label: "Início", href: "/" }, { label: "Contato" }]}
      />

      <section className="py-14 md:py-20">
        <Container>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-1 hover:border-google-blue/40 hover:shadow-md"
                >
                  <span className={`grid size-12 place-items-center rounded-xl ${dotClass[c.color]}`}>
                    <c.Icon size={24} stroke={1.8} />
                  </span>
                  <span>
                    <span className="block text-sm text-muted-foreground">{c.label}</span>
                    <span className="font-semibold group-hover:text-google-blue">{c.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
