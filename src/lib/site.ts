// Central site config — single source of truth for SEO, metadata, sitemap and JSON-LD.

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const site = {
  siteName: "GDG Belém",
  siteTagline: "Google Developer Group Belém",
  siteDescription:
    "Comunidade de desenvolvedores do Google em Belém do Pará. Eventos, palestras, networking e aprendizado sobre tecnologias Google: Android, Web, Cloud, AI e mais.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://gdgbelem.github.io",
  locale: "pt-BR",
  ogImage: "/og-image.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,

  organizationName: "GDG Belém",
  contactEmail: "gdgbelem@gmail.com",

  region: "Pará",
  city: "Belém",
  country: "BR",

  keywords: [
    "GDG Belém",
    "Google Developer Group",
    "GDG",
    "Belém",
    "Pará",
    "comunidade de desenvolvedores",
    "Android",
    "Web",
    "Google Cloud",
    "Inteligência Artificial",
    "tecnologia",
    "eventos de tecnologia",
  ],

  social: {
    instagram: "https://www.instagram.com/gdgbelemoficial",
    linkedin: "https://www.linkedin.com/company/gdgbelem",
    twitter: "https://x.com/GDGBelem",
    facebook: "https://www.facebook.com/gdgbelem",
  },
} as const;

// Primary nav — kept to 5 items (Miller's law / impeccable cognitive-load).
// Secondary routes (organizadores, parceiros, faq, código) live in the footer.
export const nav = [
  { label: "Eventos", href: "/eventos" },
  { label: "Palestrantes", href: "/palestrantes" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
] as const;

// Footer link groups — full sitemap for humans.
export const footerNav = [
  {
    title: "Comunidade",
    links: [
      { label: "Sobre", href: "/sobre" },
      { label: "Organizadores", href: "/organizadores" },
      { label: "Palestrantes", href: "/palestrantes" },
      { label: "Código de conduta", href: "/codigo-de-conduta" },
    ],
  },
  {
    title: "Participar",
    links: [
      { label: "Eventos", href: "/eventos" },
      { label: "Parceiros", href: "/parceiros" },
      { label: "Dúvidas", href: "/faq" },
      { label: "Contato", href: "/contato" },
    ],
  },
] as const;

export const hero = {
  subtitle: "A comunidade de desenvolvedores da região Norte",
  description:
    "Eventos sobre as tecnologias do Google, abertos do iniciante ao experiente.",
  ctaPrimary: { label: "Quero participar", href: "https://gdg.community.dev/gdg-belem/" },
  ctaSecondary: { label: "Ver atividades", href: "#atividades" },
} as const;

export const about = {
  eyebrow: "Quem somos",
  title: ["Tecnologia que nasce", "na Amazônia"],
  description:
    "O GDG Belém é o grupo oficial de desenvolvedores Google de Belém e, desde 2014, compartilha conhecimento sobre as tecnologias do Google com a comunidade local. Um espaço acolhedor onde quem programa, estuda ou ama tecnologia se reúne para trocar conhecimento, fazer networking e fortalecer a comunidade da região Norte — juntos.",
  highlightTerm: "Google Developer Groups",
  pills: [
    { color: "google-green", label: "Open source" },
    { color: "google-blue", label: "Aprendizado contínuo" },
    { color: "google-red", label: "Comunidade regional" },
  ],
} as const;

// Section copy (the numbers come from the CMS — collection "numeros").
export const stats = {
  title: "O GDG Belém em números",
} as const;

// Section copy for the organizers/partners previews (the records come from the CMS).
export const organizers = {
  eyebrow: "Quem faz acontecer",
  title: ["Voluntários que movem", "a comunidade"],
  description:
    "O GDG Belém é tocado por voluntários, sem fins lucrativos. São essas pessoas que organizam cada evento, palestra e meetup.",
  ctaLabel: "Conhecer o time",
  ctaHref: "/organizadores",
} as const;

// Section copy for the partners preview (the records come from the CMS).
export const partners = {
  eyebrow: "Quem apoia",
  title: "Parceiros e patrocinadores",
  description:
    "Empresas e espaços que ajudam a manter os eventos acessíveis à comunidade. Quer apoiar?",
  ctaLabel: "Seja um parceiro",
  ctaHref: "mailto:gdgbelem@gmail.com?subject=Quero%20apoiar%20o%20GDG%20Bel%C3%A9m",
} as const;

// Section copy (the activity cards come from the CMS — collection "atividades").
export const activities = {
  eyebrow: "O que fazemos",
  title: ["Conhecimento de ponta,", "aberto a todos"],
} as const;

// Section copy for the events previews (the records come from the CMS).
export const upcomingEvents = {
  eyebrow: "Agenda",
  title: "Próximos eventos",
  ctaLabel: "Ver todos os eventos",
  ctaHref: "/eventos",
} as const;

export const pastEvents = {
  eyebrow: "Memória",
  title: "Eventos anteriores",
  ctaLabel: "Ver histórico",
  ctaHref: "/eventos",
} as const;

export const cta = {
  title: "Faça parte da maior comunidade dev do Norte",
  description: "Participe dos próximos eventos, conheça pessoas incríveis e evolua na carreira.",
  button: { label: "Participar agora", href: "https://gdg.community.dev/gdg-belem/" },
} as const;

export function absoluteUrl(path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${site.siteUrl}${basePath}${clean === "/" ? "" : clean}` || site.siteUrl;
}

// Build a complete Metadata object for an internal page (title, description,
// canonical, Open Graph, Twitter) from a path + copy. Keeps SEO consistent.
export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  const url = absoluteUrl(path);
  const fullTitle = `${title} · ${site.siteName}`;
  const ogImage = absoluteUrl(image ?? site.ogImage);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.siteName,
      locale: site.locale,
      type: "website" as const,
      images: [{ url: ogImage, width: site.ogImageWidth, height: site.ogImageHeight }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

export function socialLinks(): string[] {
  return Object.values(site.social).filter(Boolean);
}
