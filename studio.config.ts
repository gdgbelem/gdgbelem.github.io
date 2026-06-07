import type { StudioConfig } from "nextjs-studio";

// Helper for select/multi-select option literals.
const opt = (value: string, label = value) => ({ label, value });

// Google color rotation, reused across people/events for the DevFest Playground look.
const googleColors = [
  opt("google-blue", "Azul"),
  opt("google-red", "Vermelho"),
  opt("google-yellow", "Amarelo"),
  opt("google-green", "Verde"),
];

const config: StudioConfig = {
  collections: {
    // ── Eventos ──────────────────────────────────────────────────────────
    // Body MDX = descrição longa do evento. Agenda é opcional (array).
    eventos: {
      mediaDir: "public/images/eventos",
      schema: {
        collection: "eventos",
        label: "Eventos",
        fields: [
          { name: "title", type: "text", required: true, label: "Título" },
          { name: "slug", type: "slug", from: "title", required: true },
          { name: "date", type: "date", includeTime: true, required: true, label: "Data e hora" },
          { name: "status", type: "select", required: true, label: "Situação",
            options: [opt("upcoming", "Próximo"), opt("past", "Encerrado")] },
          { name: "kind", type: "select", required: true, label: "Tipo",
            options: [opt("DevFest"), opt("GDG Talks"), opt("Build with AI"), opt("Meetup"), opt("Study Jam"), opt("+Tech")] },
          { name: "color", type: "select", required: true, label: "Cor", options: googleColors },
          { name: "location", type: "text", required: true, label: "Local" },
          { name: "city", type: "text", required: true, label: "Cidade" },
          { name: "summary", type: "long-text", required: true, label: "Resumo (card)", rows: 2 },
          { name: "cover", type: "media", accept: ["image/*"], label: "Capa" },
          { name: "registrationUrl", type: "url", label: "Link de inscrição" },
          { name: "speakers", type: "relation", collection: "pessoas", multiple: true, label: "Palestrantes" },
          // Agenda opcional: só preenchida quando o evento tem grade de horários.
          { name: "agenda", type: "array", label: "Programação", itemFields: [
            { name: "time", type: "text", required: true, label: "Horário" },
            { name: "title", type: "text", required: true, label: "Atividade" },
            { name: "speaker", type: "relation", collection: "pessoas", label: "Palestrante" },
          ] },
        ],
      },
    },

    // ── Pessoas (palestrantes + organizadores) ───────────────────────────
    // Uma collection com `role`; body MDX = bio longa.
    pessoas: {
      mediaDir: "public/images/pessoas",
      schema: {
        collection: "pessoas",
        label: "Pessoas",
        fields: [
          { name: "name", type: "text", required: true, label: "Nome" },
          { name: "slug", type: "slug", from: "name", required: true },
          { name: "role", type: "multi-select", required: true, label: "Papel",
            options: [opt("speaker", "Palestrante"), opt("organizer", "Organizador(a)")] },
          { name: "title", type: "text", label: "Cargo / função" },
          { name: "company", type: "text", label: "Empresa" },
          { name: "color", type: "select", required: true, label: "Cor", options: googleColors },
          { name: "avatar", type: "media", accept: ["image/*"], label: "Foto" },
          { name: "tagline", type: "text", label: "Resumo (card)" },
          { name: "interests", type: "multi-select", label: "Áreas de interesse",
            options: [opt("Android"), opt("Flutter"), opt("Web"), opt("Cloud"), opt("IA"), opt("Firebase"), opt("Kotlin"), opt("Segurança"), opt("DevOps"), opt("UX")] },
          { name: "linkedin", type: "url", label: "LinkedIn" },
          { name: "instagram", type: "url", label: "Instagram" },
          { name: "twitter", type: "url", label: "Twitter / X" },
          { name: "github", type: "url", label: "GitHub" },
          { name: "website", type: "url", label: "Site" },
        ],
      },
    },

    // ── Parceiros / patrocinadores ───────────────────────────────────────
    parceiros: {
      mediaDir: "public/images/parceiros",
      schema: {
        collection: "parceiros",
        label: "Parceiros",
        fields: [
          { name: "name", type: "text", required: true, label: "Nome" },
          { name: "slug", type: "slug", from: "name", required: true },
          { name: "tier", type: "select", required: true, label: "Categoria",
            options: [opt("apoio", "Apoio"), opt("prata", "Prata"), opt("ouro", "Ouro"), opt("diamante", "Diamante")] },
          { name: "logo", type: "media", accept: ["image/*"], label: "Logo" },
          { name: "url", type: "url", label: "Site" },
          { name: "color", type: "select", required: true, label: "Cor", options: googleColors },
        ],
      },
    },

    // ── FAQ (lista única) ────────────────────────────────────────────────
    faq: {
      schema: {
        collection: "faq",
        label: "Dúvidas frequentes",
        fields: [
          { name: "q", type: "text", required: true, label: "Pergunta" },
          { name: "a", type: "long-text", required: true, label: "Resposta" },
        ],
      },
    },

    // ── Números / estatísticas (lista única) ──────────────────────────────
    numeros: {
      schema: {
        collection: "numeros",
        label: "Números",
        fields: [
          { name: "value", type: "text", required: true, label: "Valor" },
          { name: "label", type: "text", required: true, label: "Rótulo" },
        ],
      },
    },

    // ── Atividades / o que fazemos (lista única) ──────────────────────────
    atividades: {
      schema: {
        collection: "atividades",
        label: "Atividades",
        fields: [
          { name: "title", type: "text", required: true, label: "Título" },
          { name: "text", type: "long-text", required: true, label: "Descrição" },
          { name: "color", type: "select", required: true, label: "Cor", options: googleColors },
          { name: "icon", type: "select", required: true, label: "Ícone",
            options: [opt("calendar"), opt("devfest"), opt("ai"), opt("talks"), opt("network"), opt("free")] },
        ],
      },
    },

    // ── Código de conduta (texto longo único) ────────────────────────────
    "codigo-de-conduta": {
      schema: {
        collection: "codigo-de-conduta",
        label: "Código de Conduta",
        fields: [
          { name: "title", type: "text", required: true, label: "Título" },
          { name: "slug", type: "slug", from: "title", required: true },
          { name: "updatedAt", type: "date", required: true, label: "Atualizado em" },
        ],
      },
    },
  },
};

export default config;
