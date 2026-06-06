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

export const nav = [
  { label: "Sobre", href: "#sobre" },
  { label: "Números", href: "#numeros" },
  { label: "Atividades", href: "#atividades" },
  { label: "Dúvidas", href: "#faq" },
] as const;

export const hero = {
  subtitle: "A comunidade pulsante de desenvolvedores da região Norte",
  description:
    "Conectamos desenvolvedores, estudantes e entusiastas de tecnologia em torno das ferramentas do Google. Aprenda, compartilhe e cresça com a gente.",
  ctaPrimary: { label: "Quero participar", href: "https://gdg.community.dev/gdg-belem/" },
  ctaSecondary: { label: "Ver atividades", href: "#atividades" },
} as const;

export const about = {
  title: "Sobre o GDG Belém",
  description:
    "Os Google Developer Groups (GDG) são comunidades locais de pessoas interessadas nas tecnologias do Google. Em Belém, promovemos encontros gratuitos e abertos para todos os níveis — do iniciante ao profissional.",
  highlights: [
    {
      color: "google-blue",
      title: "Aberto a todos",
      text: "Eventos gratuitos e inclusivos, para qualquer pessoa interessada em tecnologia.",
    },
    {
      color: "google-red",
      title: "Aprendizado prático",
      text: "Workshops e palestras com conteúdo hands-on sobre Android, Web, Cloud e IA.",
    },
    {
      color: "google-yellow",
      title: "Networking",
      text: "Conecte-se com outros devs, mentores e empresas da região Norte.",
    },
    {
      color: "google-green",
      title: "Open source",
      text: "Incentivamos a colaboração e a contribuição para projetos da comunidade.",
    },
  ],
} as const;

export const stats = {
  title: "O GDG Belém em números",
  items: [
    { value: "1.000+", label: "membros" },
    { value: "50+", label: "eventos" },
    { value: "10+", label: "anos" },
    { value: "20+", label: "palestrantes" },
  ],
} as const;

export const speakers = [
  { name: "Em breve", role: "Palestrante", location: "Belém, PA" },
  { name: "Em breve", role: "Palestrante", location: "Belém, PA" },
] as const;

export const partners = [
  "Sua empresa aqui",
  "Sua empresa aqui",
  "Sua empresa aqui",
  "Sua empresa aqui",
] as const;

export const activities = [
  {
    color: "google-blue",
    title: "Meetups",
    text: "Encontros regulares com palestras curtas e tempo para networking.",
  },
  {
    color: "google-red",
    title: "Workshops",
    text: "Sessões práticas para mão na massa em Android, Web, Cloud e IA.",
  },
  {
    color: "google-yellow",
    title: "DevFest",
    text: "Nosso maior evento anual, com trilhas, speakers e atividades o dia todo.",
  },
  {
    color: "google-green",
    title: "Study Jams",
    text: "Grupos de estudo guiados para aprender novas tecnologias em conjunto.",
  },
] as const;

export const faq = [
  {
    q: "Preciso pagar para participar?",
    a: "Não. Todos os eventos do GDG Belém são gratuitos e abertos à comunidade.",
  },
  {
    q: "Preciso ser programador?",
    a: "Não. Estudantes, designers, profissionais de produto e curiosos são bem-vindos — temos conteúdo para todos os níveis.",
  },
  {
    q: "Como fico sabendo dos próximos eventos?",
    a: "Acompanhe nossas redes sociais e a comunidade no GDG Community para receber os anúncios.",
  },
  {
    q: "Posso palestrar ou propor um tema?",
    a: "Sim! Estamos sempre buscando novas pessoas para compartilhar conhecimento. Entre em contato conosco.",
  },
] as const;

export const cta = {
  title: "Faça parte da comunidade",
  description:
    "Participe dos próximos eventos, conheça outros desenvolvedores e aprenda as tecnologias que movem o mundo.",
  button: { label: "Quero participar", href: `mailto:${"gdgbelem@gmail.com"}` },
} as const;

export function absoluteUrl(path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${site.siteUrl}${basePath}${clean === "/" ? "" : clean}` || site.siteUrl;
}

export function socialLinks(): string[] {
  return Object.values(site.social).filter(Boolean);
}
