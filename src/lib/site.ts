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
    instagram: "",
    linkedin: "",
    twitter: "",
    youtube: "",
  },
} as const;

export function absoluteUrl(path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${site.siteUrl}${basePath}${clean === "/" ? "" : clean}` || site.siteUrl;
}

export function socialLinks(): string[] {
  return Object.values(site.social).filter(Boolean);
}
