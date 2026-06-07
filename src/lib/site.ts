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
  eyebrow: "Quem somos",
  title: ["Tecnologia que nasce", "na Amazônia"],
  description:
    "O GDG Belém é um capítulo da comunidade global Google Developer Groups, dedicado a impulsionar a inovação e o aprendizado em torno das tecnologias do Google na Amazônia. Um espaço acolhedor onde quem programa, estuda ou ama tecnologia se reúne para trocar conhecimento, fazer networking e construir o futuro — juntos.",
  highlightTerm: "Google Developer Groups",
  pills: [
    { color: "google-green", label: "Open source" },
    { color: "google-blue", label: "Aprendizado contínuo" },
    { color: "google-red", label: "Comunidade regional" },
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

export const activities = {
  eyebrow: "O que fazemos",
  title: ["Conhecimento de ponta,", "aberto a todos"],
  items: [
    {
      color: "google-blue",
      icon: "calendar",
      title: "Eventos técnicos",
      text: "Palestras, workshops e meetups sobre Android, Flutter, Cloud, IA e muito mais.",
    },
    {
      color: "google-red",
      icon: "devfest",
      title: "DevFest Belém",
      text: "Nosso maior evento anual, reunindo a comunidade tech de todo o Norte.",
    },
    {
      color: "google-yellow",
      icon: "ai",
      title: "Build with AI",
      text: "Sessões hands-on com as ferramentas de inteligência artificial do Google.",
    },
    {
      color: "google-green",
      icon: "talks",
      title: "GDG Talks",
      text: "Conversas sobre software, cibersegurança e boas práticas de desenvolvimento.",
    },
    {
      color: "google-blue",
      icon: "network",
      title: "Networking real",
      text: "Conexões que viram parcerias, oportunidades e amizades para a vida toda.",
    },
    {
      color: "google-red",
      icon: "free",
      title: "Tudo gratuito",
      text: "Conhecimento de ponta acessível a todos, sem custo, do início ao fim.",
    },
  ],
} as const;

export const upcomingEvents = {
  eyebrow: "Agenda",
  title: "Próximos eventos",
  items: [
    {
      day: "26",
      month: "Jun",
      title: "+Tech Sul e Sudeste Pará — Marabá",
      location: "Marabá, Pará",
      text: "O futuro da tecnologia desembarca em Marabá. Um dia de palestras, conexões e novidades para a comunidade dev do sul e sudeste do estado.",
      href: "https://gdg.community.dev/gdg-belem/",
    },
    {
      day: "27",
      month: "Jun",
      title: "+Tech Sul e Sudeste Pará — Parauapebas",
      location: "Parauapebas, Pará",
      text: "Inovação chegando a Parauapebas. Encontre a comunidade, troque ideias e descubra as tecnologias que estão moldando o futuro do Norte.",
      href: "https://gdg.community.dev/gdg-belem/",
    },
  ],
} as const;

export const pastEvents = {
  eyebrow: "Memória",
  title: "Eventos anteriores",
  items: [
    { color: "google-blue", icon: "ai", tag: "Build with AI", date: "Abr 2026", title: "GDG Talks 2 — Build with AI" },
    { color: "google-red", icon: "devfest", tag: "DevFest", date: "Dez 2025", title: "DevFest Belém 2025 — A Jornada do Futuro" },
    { color: "google-green", icon: "build", tag: "Build with AI", date: "Mai 2025", title: "Build with AI: GDG Belém" },
    { color: "google-yellow", icon: "talks", tag: "GDG Talks", date: "Fev 2026", title: "GDG Talks — Build with AI edition" },
  ],
} as const;

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
  title: "Faça parte da maior comunidade dev do Norte",
  description: "Participe dos próximos eventos, conheça pessoas incríveis e evolua na carreira.",
  button: { label: "Participar agora", href: "https://gdg.community.dev/gdg-belem/" },
} as const;

export function absoluteUrl(path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${site.siteUrl}${basePath}${clean === "/" ? "" : clean}` || site.siteUrl;
}

export function socialLinks(): string[] {
  return Object.values(site.social).filter(Boolean);
}
