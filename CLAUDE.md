# GDG Belém — Site

Site oficial da comunidade **GDG Belém** (Google Developer Group). Projeto ainda não inicializado — o código será criado posteriormente. A intenção é construir com **Next.js (App Router, v16+)**.

## Stack pretendida

- **Framework:** Next.js 16+ (App Router, React Server Components)
- **Linguagem:** TypeScript
- **Estilo:** a definir (Tailwind CSS é a referência inicial)

## Ambiente Claude Code (local, neste projeto)

Tudo é **local ao projeto** — nada instalado globalmente.

### Skills instaladas (`.claude/skills/`)

- **next-best-practices** — convenções de arquivos, RSC boundaries, data fetching, metadata, otimização de imagem/fonte. Usar ao escrever ou revisar código Next.js.
- **impeccable** — vocabulário de design para evitar "slop" de UI gerada por IA. Rodar `/impeccable init` para configurar o contexto de design do projeto.
- **seo-audit** — auditoria de SEO (crawlability, técnico, on-page, conteúdo). Usar antes de publicar e em revisões de páginas.

### MCP (`.mcp.json`)

- **next-devtools** (`next-devtools-mcp`) — dá ao agente acesso em tempo real ao dev server do Next.js (erros, rotas, logs, metadata). Requer Next.js 16+. Conecta automaticamente quando `npm run dev` está rodando.

### Design system

- **DESIGN.md** — ainda **não criado**. Quando o projeto e a identidade visual existirem, criar um `DESIGN.md` (formato plain-text de design system) ou rodar `/impeccable init` para gerar o contexto de design.

## Diretrizes para o agente

- Escrever código Next.js seguindo a skill **next-best-practices**.
- Ao criar/ajustar UI, consultar a skill **impeccable** para manter qualidade visual e evitar padrões genéricos.
- Antes de finalizar páginas públicas, passar pela skill **seo-audit**.
- Usar o MCP **next-devtools** para diagnosticar erros e inspecionar rotas durante o desenvolvimento.
- Manter tudo no escopo do projeto; não instalar skills ou configs globais.

## Versionamento

O `.gitignore` ignora `.claude/` por padrão e **reincluí** (`!`) `skills/`, `settings.json`, `commands/` e `agents/`, para versionar a configuração da equipe. `settings.local.json` permanece ignorado (config pessoal).
