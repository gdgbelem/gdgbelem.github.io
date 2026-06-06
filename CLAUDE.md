# GDG Belém — Site

Site oficial da comunidade **GDG Belém** (Google Developer Group), construído com **Next.js (App Router)**.

## Stack

- **Framework:** Next.js 16 (App Router, React Server Components) com **Turbopack**
- **Linguagem:** TypeScript
- **UI:** React 19
- **Estilo:** Tailwind CSS v4
- **Componentes:** shadcn/ui (preset `base-nova`, base color `neutral`, ícones `lucide`)
- **Gerenciador de pacotes:** **Yarn** (clássico). Para o CLI do shadcn use `npx shadcn@latest ...` (o Yarn 1 não tem `dlx`); deps continuam no Yarn.

### Estrutura

- `src/app/` — rotas (App Router)
- `src/components/ui/` — componentes shadcn
- `src/lib/utils.ts` — helper `cn()`
- `src/lib/site.ts` — config central do site (fonte única para SEO/metadata/sitemap)
- `src/lib/schema.tsx` — JSON-LD (schema.org) + componente `<SchemaMarkup>`
- `inspiration/` — material de referência (sites antigos), **fora** do build e do TypeScript

### SEO & static export

- **Static export:** `output: "export"` no `next.config.ts` → gera HTML em `out/`. Hospedagem: **GitHub Pages**.
- **basePath:** vazio para org page (`gdgbelem.github.io`); o CI detecta project pages e injeta `NEXT_PUBLIC_BASE_PATH=/repo`.
- **Metadata:** API `Metadata` do Next no `layout.tsx` (root) + por página, lendo de `src/lib/site.ts`. Inclui Open Graph, Twitter card, canonical, robots.
- **JSON-LD:** `Organization` + `WebSite` no layout; use `<SchemaMarkup>` com `generateEventSchema` / `generateFaqSchema` / `generateBreadcrumbs` nas páginas.
- **Sitemap/robots:** `next-sitemap` roda no `postbuild` e escreve `sitemap.xml` + `robots.txt` em `out/`.
- Texto visível em **pt-BR**; código e comentários em **inglês**.

### Comandos

- `yarn dev` — dev server (Turbopack)
- `yarn build` — build estático (`out/`) + sitemap (postbuild)
- `yarn serve` — serve a pasta `out/` localmente
- `yarn lint` — ESLint
- `yarn ts-check` — typecheck (`tsc --noEmit`)

### Deploy (CI)

- `.github/workflows/deploy.yml` — build no push para `main` e deploy no **GitHub Pages** (`out/` + `.nojekyll`). Node fixado via `.nvmrc` (22), deps com `yarn install --frozen-lockfile`.


## Ambiente Claude Code (local, neste projeto)

Tudo é **local ao projeto** — nada instalado globalmente.

### Skills instaladas (`.claude/skills/`)

- **next-best-practices** — convenções de arquivos, RSC boundaries, data fetching, metadata, otimização de imagem/fonte. Usar ao escrever ou revisar código Next.js.
- **impeccable** — vocabulário de design para evitar "slop" de UI gerada por IA. Rodar `/impeccable init` para configurar o contexto de design do projeto.
- **seo-audit** — auditoria de SEO (crawlability, técnico, on-page, conteúdo). Usar antes de publicar e em revisões de páginas.

### MCP (`.mcp.json`)

- **next-devtools** (`next-devtools-mcp`) — dá ao agente acesso em tempo real ao dev server do Next.js (erros, rotas, logs, metadata). Requer Next.js 16+. Conecta automaticamente quando `yarn dev` está rodando.

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
