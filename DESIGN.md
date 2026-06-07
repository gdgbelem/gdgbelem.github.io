---
name: GDG Belém
description: Landing page da comunidade Google Developer Group Belém — estilo DevFest, cores Google, geometria lúdica.
colors:
  google-blue: "#4285f4"
  google-blue-dark: "#1a73e8"
  google-red: "#ea4335"
  google-yellow: "#fbbc04"
  google-green: "#34a853"
  google-pink: "#fce4e4"
  ink: "#252628"
  ink-muted: "#73767b"
  surface: "#ffffff"
  surface-soft: "#f7f7f8"
  line: "#e9eaec"
typography:
  display:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 9.5vw, 6rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 300
    lineHeight: 1.6
  label:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.14em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "10px"
  xl: "20px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "28px"
  lg: "56px"
  xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.google-blue}"
    textColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "13px 24px"
  button-primary-hover:
    backgroundColor: "{colors.google-blue-dark}"
    textColor: "{colors.surface}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "28px"
  pill:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "9px 18px"
  stat-band:
    backgroundColor: "{colors.google-blue}"
    textColor: "{colors.surface}"
    padding: "56px clamp(28px, 5vw, 64px)"
---

# Design System: GDG Belém

## 1. Overview

**Creative North Star: "The DevFest Playground"**

GDG Belém é a tela onde a comunidade brinca. O sistema empresta a linguagem dos eventos GDG DevFest — as quatro cores do Google em estado puro, formas geométricas (escadas pixeladas, triângulos, grades de pontos, círculos) flutuando pelo espaço, e um diagrama de ecossistema vivo e pulsante. A base é clara e generosa, quase toda branca; a energia vem da cor e do movimento, não da densidade. O tom é acolhedor antes de ser impressionante: um iniciante deve se sentir convidado, nunca intimidado.

O sistema rejeita o corporativismo cinza e sem rosto, o "AI slop" de gradientes roxo-azul e heros genéricos, e a seriedade técnica que afasta quem está começando. Cor com propósito, geometria com assinatura, e sempre um convite claro para participar.

É uma identidade GDG, não uma réplica do Google: as cores e a geometria são a assinatura, com o rodapé sempre deixando claro que é uma comunidade independente.

**Key Characteristics:**
- Base branca e arejada; a cor é evento, não plano de fundo.
- Geometria Google como decoração progressiva (some no mobile, nunca atrapalha a leitura).
- Movimento vivo mas respeitoso de `prefers-reduced-motion`.
- Poppins em todos os pesos: o contraste de peso (300 ↔ 800) faz a hierarquia.

## 2. Colors

Uma paleta de quatro acentos Google sobre neutros quentes-frios quase brancos. Os acentos nunca competem: cada um marca um momento.

### Primary
- **Google Blue** (#4285f4): cor de ação. Botão primário, faixa de números, faixa de CTA, links em hover, underline da navegação. É a voz dominante da marca.
- **Google Blue Dark** (#1a73e8): estado hover do azul primário. Nunca aparece em repouso.

### Secondary
- **Google Red** (#ea4335): acento de destaque rotativo — pontos de eyebrow, barra superior de card, grade de pontos decorativa.
- **Google Yellow** (#fbbc04): acento de destaque rotativo — triângulos, barras de card, ícone Gemini no ecossistema.
- **Google Green** (#34a853): acento de destaque rotativo — escada pixelada, pin de localização, ícone Android.

### Tertiary
- **Google Pink** (#fce4e4): exclusivo das listras diagonais decorativas. Nunca para texto ou superfície de conteúdo.

### Neutral
- **Ink** (#252628 / oklch(0.145 0 0)): texto principal e títulos.
- **Ink Muted** (#73767b / oklch(0.556 0 0)): texto de apoio, parágrafos leves, labels.
- **Surface** (#ffffff): fundo da página e dos cards.
- **Surface Soft** (#f7f7f8 / oklch(0.97 0 0)): fundo de seção alternada e pills.
- **Line** (#e9eaec / oklch(0.922 0 0)): bordas de card, divisórias, contorno de chips.

### Named Rules
**The Four-Color Rotation Rule.** As quatro cores Google aparecem em ordem — azul, vermelho, amarelo, verde — em conjuntos de quatro (cards de destaque, atividades, eyebrows por seção). Nunca duas do mesmo acento lado a lado num mesmo conjunto. A rotação é a assinatura.

**The Blue-Acts Rule.** Azul é a única cor de ação. Vermelho, amarelo e verde decoram e sinalizam, mas nunca são o alvo de um clique primário.

## 3. Typography

**Display Font:** Poppins (com ui-sans-serif, system-ui, sans-serif)
**Body Font:** Poppins (mesma família, peso 300)
**Label/Mono Font:** Geist Mono (somente código, raro)

**Character:** Uma única família geométrica em todo o espectro de pesos. O contraste entre o leve (300) dos parágrafos e o extra-bold (800) do wordmark cria a hierarquia sem precisar de uma segunda fonte. Poppins é redonda e amigável — combina com o tom acolhedor.

### Hierarchy
- **Display** (800, clamp(3rem → 6rem), line-height 1): wordmark "GDG Belém" e heros. Letras coloridas pela rotação Google.
- **Headline** (700, clamp(1.875rem → 2.25rem), 1.1): títulos de seção.
- **Title** (600, 1.125rem, 1.3): títulos de card e de atividade.
- **Body** (300, 1.125rem, 1.6): parágrafos. Peso leve é intencional; manter linha em 65–75ch.
- **Label** (600, 0.8125rem, letter-spacing 0.14em, UPPERCASE): eyebrows de seção, sempre com um ponto colorido antes.

### Named Rules
**The Weight-Not-Family Rule.** Hierarquia vem do peso (300 ↔ 800), não de uma segunda fonte. Proibido adicionar uma fonte concorrente "para dar contraste".

**The Eyebrow Dot Rule.** Toda label/eyebrow começa com um ponto de uma cor Google. O ponto, não o caixa-alta, é o que sinaliza "isto é uma seção".

## 4. Elevation

Plano por padrão, levanta no hover. Superfícies descansam planas com uma borda fina de 1px (`line`). A sombra é uma resposta de estado, não um adorno permanente: cards e chips ganham uma sombra suave só ao passar o mouse, frequentemente combinada com um leve `translateY(-2px)`. As únicas exceções persistentes são os "chips" flutuantes do diagrama de ecossistema e o hub central, que carregam sombra em repouso para parecerem suspensos.

### Shadow Vocabulary
- **sm** (`box-shadow: 0 1px 2px rgba(60,64,67,.08), 0 2px 8px rgba(60,64,67,.06)`): repouso de cards interativos.
- **md** (`box-shadow: 0 6px 18px rgba(60,64,67,.10), 0 2px 6px rgba(60,64,67,.06)`): hover de cards, chips do ecossistema.
- **lg** (`box-shadow: 0 18px 48px rgba(60,64,67,.16), 0 6px 16px rgba(60,64,67,.08)`): hub do ecossistema, hover de elementos elevados.

### Named Rules
**The Flat-By-Default Rule.** Superfícies de conteúdo são planas em repouso, com borda de 1px. Sombra aparece como resposta a hover/foco. Sombra estática só nos elementos flutuantes do ecossistema.

## 5. Components

### Buttons
- **Shape:** cantos suaves (10px, `rounded.lg`).
- **Primary:** fundo Google Blue, texto branco, padding 13px 24px. A âncora-como-botão usa `buttonVariants()` direto no `<a>` (o preset base-nova não tem `asChild`).
- **Hover / Focus:** fundo escurece para Blue Dark; foco com ring visível.
- **Ghost:** link com seta (→) que desliza no hover e texto que vira azul. Usado para CTA secundário ("Ver atividades →").

### Chips / Pills
- **Style:** fundo Surface Soft, texto Ink, formato pílula (999px), com um ponto de cor Google antes do texto.
- **State:** estáticas (tags de destaque). Não são filtros clicáveis.

### Cards / Containers
- **Corner Style:** 20px (`rounded.xl`).
- **Background:** Surface (branco).
- **Shadow Strategy:** plano em repouso, `md` no hover (ver Elevation).
- **Border:** 1px Line.
- **Internal Padding:** 28px.
- **Signature:** muitos cards levam uma barra colorida de 1.5px no topo, seguindo a rotação Google.

### Navigation
- **Style:** header sticky, fundo translúcido com blur; ganha borda inferior ao rolar.
- **Typography:** 15px, peso 500, Ink Muted → Ink no hover.
- **Active/Hover:** underline azul que cresce da esquerda (width 0 → 100%).
- **Mobile:** botão hambúrguer com borda; menu full-width abaixo do header.

### Stat / CTA Band (signature)
Faixa Google Blue de largura quase total com **cantos cortados** via `clip-path` (notch de 38px). Texto branco, números em peso 800. A faixa de números corta os cantos superior-direito e inferior-esquerdo; a de CTA inverte (superior-esquerdo / inferior-direito). É o gesto geométrico mais marcante do sistema.

### Ecosystem Diagram (signature)
Hub central com o losango Google de 4 cores, seis chips flutuantes (Android, Firebase, Cloud, Gemini, Web, Flutter) ligados por linhas que pulsam em cores Google. Animações `eco-float`, `eco-pulse`, `hub-ring` — todas desligadas em `prefers-reduced-motion`.

## 6. Do's and Don'ts

### Do:
- **Do** girar as quatro cores Google em ordem (azul → vermelho → amarelo → verde) em qualquer conjunto de quatro.
- **Do** usar azul como única cor de ação primária.
- **Do** abrir toda eyebrow com um ponto de cor Google + texto em caixa-alta curto (≤4 palavras).
- **Do** manter parágrafos em peso 300 e ≤75ch.
- **Do** usar os cantos cortados (notch clip-path) nas faixas azuis de Números e CTA.
- **Do** deixar a geometria decorativa sumir no mobile; ela é progressiva.
- **Do** respeitar `prefers-reduced-motion` em toda animação.

### Don't:
- **Don't** cair em sites corporativos genéricos, cinza e sem personalidade.
- **Don't** usar gradientes roxo-azul clichê, ícones decorativos aleatórios ou hero centralizado sem identidade ("AI slop").
- **Don't** adotar seriedade técnica que afaste iniciantes.
- **Don't** aninhar cards ou criar densidade de dashboard — a base é arejada.
- **Don't** adicionar uma segunda família tipográfica; a hierarquia é por peso.
- **Don't** usar vermelho, amarelo ou verde como alvo de clique primário.
- **Don't** deixar sombra estática em cards de conteúdo — plano em repouso.
- **Don't** esconder que é comunidade independente; o rodapé sempre traz o disclaimer.
