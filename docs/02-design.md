# Sistema de Design SinRural

> **Origem:** Adaptado do DESIGN.md do Starbucks (VoltAgent/awesome-design-md). Mantida a estrutura 1–9 do formato Stitch DESIGN.md.
> **Por que Starbucks:** paleta verde-terra calibrada em 4 tons + canvas creme quente (não branco frio) + cerimônia em dourado + storytelling de produtor — exatamente a matriz emocional de uma entidade sindical rural com 60 anos.
> **Adaptações deste arquivo:**
> 1. Tokens renomeados (Starbucks → SinRural / Pasto / Mata / Café / Cal Cream / etc.)
> 2. Typeface proprietária SoDoSans → **Inter** (Google Fonts), preservando tracking apertado `-0.16px`
> 3. Floating "Frap" → **WhatsApp CTA flutuante** (canal dominante no agro)
> 4. Exemplos de café/cup/rewards reescritos para leilão, Expass Agro, área do associado e serviços por departamento

---

## 1. Visual Theme & Atmosphere

O sistema do SinRural é uma **entidade sindical confiante e quente**, vestindo o verde do pasto e da mata sobre cada superfície. O canvas alterna entre um creme neutro-quente (`#f2f0eb`) e um creme adobe levemente mais saturado (`#edebe9`) — cores que referenciam materiais reais do mundo do produtor: cal de curral, parede de adobe, papel de protocolo, madeira de mourão — enquanto o **SinRural Green** (`#006241`) ancora o momento institucional em hero bands, CTAs e na área do associado. Os verdes vêm em quatro tons calibrados (SinRural / Pasto / Mata / Cerrado), cada um mapeado para um papel específico de superfície, e o **Café Gold** (`#cba258`) aparece **apenas em momentos de cerimônia** — leilão beneficente HRC, recordes (ex.: Bloger FIV), posse de diretoria, homenagens — nunca como acento de uso geral.

A tipografia carrega quase todo o peso da voz da marca. **Inter** (Google Fonts) atravessa praticamente toda superfície com tracking apertado `-0.16px` — lê confiante e amigável, não revista de moda severa. Em momentos editoriais específicos (história do sindicato, mensagem do presidente, manifesto "Unidos pelo Agro!", artigos longos de notícias), entra um serif quente (**Lora**) que ecoa o sentimento de carta institucional de papel timbrado. Um único uso opcional de script (**Kalam**) fica reservado para citações manuscritas em fotos de produtor — referência ao caderno de campo. Três tipos, três contextos — disciplina rígida sobre quando cada um aparece.

As superfícies respiram através de geometria arredondada. Todo botão é uma full-pill de 50px. Cards usam retângulo arredondado de 12px. O **WhatsApp Floating CTA** — botão circular de 56px com fill verde WhatsApp (`#25D366`) — é o gesto de profundidade signature do produto: flutua no bottom-right com stack de sombras em camadas (`0 0 6px rgba(0,0,0,0.24)` base + `0 8px 12px rgba(0,0,0,0.14)` ambient) e comprime via `scale(0.95)` no press. Elevações são, de resto, contidas — sombras de card ficam num sussurro de `0.14/0.24` alpha, nav global ganha um stack de três camadas baixas. O sistema todo soa como sinalização limpa de cooperativa: legível, quente, nunca grita.

**Características-Chave:**
- Sistema de quatro verdes (SinRural / Pasto Accent / Mata / Cerrado Uplift), cada um mapeado para um papel distinto de superfície — não é um único "verde da marca"
- Café Gold reservado para cerimônia (leilão beneficente, recordes, posse, homenagens); nunca acento genérico
- Canvas creme-quente (`#f2f0eb` / `#edebe9`) no lugar de branco frio — referencia cal, adobe, papel de protocolo
- Inter como voz universal, com tracking `-0.16px` consistente
- Trocas de typeface contextualizadas: serif (Lora) para momentos editoriais (história, mensagens, manifesto, notícias longas)
- Botões full-pill (`50px` radius) universais; `scale(0.95)` ativo é a micro-interação signature
- WhatsApp CTA flutuante (`56px` circular, fill `#25D366` exclusivo, stack de sombras) — único elemento elevado, persistente em qualquer scroll
- Tiles de evento (Expass Agro, leilões) tratados como **fotografia de produto físico** — cada edição tem foto autoral, nunca arte gerada genérica
- Card radius de 12px + sombras-sussurro mantêm content cards "flat-com-um-toque-de-elevação"
- Spacing escala em rem, ancorada em `1.6rem` (~16px) = `--space-3`, escalando até `6.4rem` (~64px)

**Ritmo de bandas (color-block page rhythm):** Cream hero → White content sections → Mata Green (`#1E3932`) feature band com texto branco → Cream utility zone → Mata Green footer com texto branco / dourado — um bookend "café preto" emoldurando o corpo claro.

---

## 2. Color Palette & Roles

**Páginas-fonte previstas:** home, institucional (história, diretoria, missão), notícias, eventos (Expass Agro hub), leilões (calendário + detalhe), área do associado, contato, formulários de serviço por departamento.

### Primary (Verdes)

- **SinRural Green** (`#006241`): O verde institucional histórico. Usado em h1, headers de seção principais (área do associado, página de departamento), e como sinal de marca dominante onde uma única cor precisa carregar peso.
- **Pasto Accent** (`#00754A`): Verde levemente mais luminoso. Cor primária de CTA filled ("Solicitar atendimento", "Ver calendário de leilões", "Inscrever-se na Expass Agro").
- **Mata Green** (`#1E3932`): Verde quase-preto, profundo. Footer, feature bands, surfaces escuras de cerimônia, hero institucional ("Unidos pelo Agro").
- **Cerrado Uplift** (`#2b5148`): Verde médio-escuro secundário, usado parcamente em acentos decorativos e momentos de gradient escuro.
- **Pasto Light** (`#d4e9e2`): Wash mint pálido para tints de form-valid e superfícies utilitárias verde-claras.

### Cerimônia (Dourados)

Uso restrito a: **leilão beneficente HRC**, **recordes** (ex.: Bloger FIV), **posse de diretoria**, **homenagens / utilidade pública**, **edições aniversário da Expass Agro**. Nunca acento de uso geral.

- **Café Gold** (`#cba258`): Dourado base — pílulas e badges de cerimônia, callouts de recorde, selos de utilidade pública.
- **Café Light** (`#dfc49d`): Dourado mais suave para washes de fundo em seções de cerimônia.
- **Creme Café** (`#faf6ee`): Wash creme-dourado de superfície de página sob seções de cerimônia — amarra o dourado ao sistema neutro-quente.

### Surface & Background

- **White** (`#ffffff`): Superfície primária de card e modal.
- **Neutral Cool** (`#f9f9f9`): Cinza-frio sutil para dropdowns, wraps de form-card e containers utilitários quietos.
- **Cal Cream** (`#f2f0eb`): O creme quente — **canvas primário de página**, hero bands, utility zones.
- **Adobe Warm** (`#edebe9`): Creme um pouco mais saturado para zonas separadoras, washes de seção e bandas de cerimônia.
- **Black** (`#000000`): Tinta profunda reservada para a faixa CTA do topo ("Área do Associado") e botões de alto contraste do nav superior.

### Text

- **Text Black** (`rgba(0, 0, 0, 0.87)`): Cor primária de heading e body em superfícies claras. Não é preto puro — preto a 87% para combinar com o canvas creme.
- **Text Black Soft** (`rgba(0, 0, 0, 0.58)`): Texto secundário/metadata em superfícies claras (datas de notícia, captions, labels de form).
- **Text White** (`rgba(255, 255, 255, 1)`): Heading/body primário em superfícies verde-escuras.
- **Text White Soft** (`rgba(255, 255, 255, 0.70)`): Texto secundário em superfícies verde-escuras — descrições de link de footer, captions.
- **Associado Green** (`#33433d`): Slate-verde apagado dedicado a blocos de texto da **área do associado** — leitura ligeiramente "empoeirada" que sinaliza "superfície de membro" sem usar o SinRural Green inteiro.

### Semântica

- **Red** (`#c82014`): Erro e ação destrutiva (form inválido, cancelamento).
- **Yellow** (`#fbbc05`): Estado de warning (boleto vencendo, prazo de inscrição).
- **Pasto Light** (`#d4e9e2` a 33% opacity = `hsl(160 32% 87% / 33%)`): Tint de fundo de campo válido.
- **Red Tint** (`hsl(4 82% 43% / 5%)`): Tint de campo inválido.

### Plataforma (Exceção Documentada)

- **WhatsApp Green** (`#25D366`): Verde de marca da Meta/WhatsApp. **Uso exclusivo no WhatsApp Floating CTA** — quebra deliberada do sistema de cor para preservar reconhecimento instantâneo do canal. Mesma disciplina do Café Gold: aparece em um lugar e em mais nenhum.

### Black / White Alpha Ladders

Duas escalas translúcidas paralelas para overlays e texto secundário:
- `rgba(0,0,0,0.06)` até `rgba(0,0,0,0.90)` em passos de 10% — overlays escuros sobre superfície clara
- `rgba(255,255,255,0.10)` até `rgba(255,255,255,0.90)` em passos de 10% — overlays claros sobre superfície escura

### Gradient System

Sem tokens estruturais de gradient. Hierarquia de superfície é **color-block sólido** ao longo de todo o sistema — confiamos na paleta de cinco superfícies creme/verde, não em gradients.

---

## 3. Typography Rules

### Font Family

- **Primary:** `Inter, "Helvetica Neue", Helvetica, Arial, sans-serif` — disponível no Google Fonts, geometric humanist, ampla escala de pesos. Substituto do SoDoSans proprietário.
- **Loading Fallback:** `"Helvetica Neue", Helvetica, Arial, sans-serif`
- **Editorial Serif:** `"Lora", "Iowan Old Style", Georgia, serif` — usado em momentos editoriais específicos (história institucional, mensagem do presidente, manifesto "Unidos pelo Agro", artigos longos de notícia). Quente, papel-timbrado.
- **Caderno Script (opcional):** `"Kalam", "Comic Sans MS", cursive` — uso pontual em citações de produtor sobre fotos de campo. Fica reservado e raro.

> **Observação importante sobre o tracking:** Inter precisa de `-0.005em` em vez de `-0.01em` em alguns tamanhos pra não ficar apertado demais. Tokens abaixo já preveem essa flexibilidade (`letterSpacingNormal` é semântico, não literal).

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Notas |
|------|------|--------|-------------|----------------|-------|
| Display (text-10) | 5.0rem / 80px | 400–600 | 1.2 | -0.16px | Maior display de hero institucional |
| Jumbo (text-9) | 3.6rem / 58px | 400–600 | 1.2 | -0.16px | Headings de hero secundários |
| Hero Large (text-8) | 2.8rem / 45px | 400–600 | 1.2–1.5 | -0.16px | Headlines de seção landing |
| H1 | 24px | 600 | 36px | -0.16px | Heading primário em SinRural Green |
| H2 | 24px | 400 | 36px | -0.16px | Título de seção em peso regular, Text Black |
| Body Large | 19px | 400–600 | 33.25px (~1.75) | -0.16px | Lead de hero, body de feature band |
| Body (text-3) | 1.6rem / 16px | 400 | 1.5 (24px) | -0.005em | Body padrão |
| Small (text-2) | 1.4rem / ~14px | 400–600 | 1.5 | -0.005em | Label de botão, metadata, label de form |
| Micro (text-1) | 1.3rem / ~13px | 400 | 1.5 | -0.005em | Float-label ativo, micro-copy |
| Button Label | 14–16px | 400–600 | 1.2 | -0.005em | Todo label de pill button |

**Letter-spacing tokens:**
- `letterSpacingNormal`: `-0.005em` (default — apertado, característico)
- `letterSpacingLoose`: `0.1em` (caps enfatizados)
- `letterSpacingLooser`: `0.15em` (labels uppercase, ênfase extrema)

**Line-height tokens:**
- `lineHeightNormal`: `1.5` (body)
- `lineHeightCompact`: `1.2` (display/buttons)

### Princípios

- **Tracking negativo apertado (`-0.005em`)** atravessa quase todo o produto — leve compressão geral dá ao Inter presença confiante sem parecer espremido.
- **Hierarquia por peso, não por tamanho.** H1 e H2 dividem 24px/36px; só peso (600 vs 400) e cor (SinRural Green vs Text Black) os separam.
- **Tokens de tamanho em rem, ancorados em `1rem = 10px`** via `font-size: 62.5%` no `:root`. Então `1.6rem` = 16px, `2.4rem` = 24px. Escala é semântica (textSize-1 → textSize-10), não pixel arbitrário.
- **Trocas contextuais de typeface** — Lora em momentos editoriais — são deliberadas e localizadas. Nunca misturar com sans dentro da mesma superfície.
- **Body nunca é preto puro** — fica em `rgba(0,0,0,0.87)` para casar com a temperatura do canvas creme.

### Substituições Documentadas

| Original (Starbucks) | Substituto (SinRural) | Razão |
|---|---|---|
| SoDoSans (proprietário) | **Inter** (Google Fonts) | Geometric humanist, mesma sensação confiante, peso 100–900 |
| Lander Tall (proprietário) | **Lora** (Google Fonts) | Serif quente editorial; alternativa: Source Serif Pro |
| Kalam (já no Google Fonts) | **Kalam** (mantido) | Único típo proprietary-free do trio Starbucks; fica como uso opcional |

Se em algum momento decidirmos investir em typeface customizada (Inter Display variant, ou um humanist proprietário), trocar centralizadamente via `--font-primary` no token system.

---

## 4. Component Stylings

### Buttons

**1. Primary Filled — "Solicitar atendimento jurídico / Ver calendário de leilões"**
- Background: `#00754A` (Pasto Accent)
- Text: `#ffffff`
- Border: `1px solid #00754A`
- Radius: `50px` (full pill)
- Padding: `7px 16px`
- Font: Inter, 16px, weight 600, letter-spacing `-0.005em`
- Active state: `transform: scale(0.95)` via `--buttonActiveScale`
- Transition: `all 0.2s ease`

**2. Primary Outlined — "Saiba mais / Ver edital"**
- Background: transparent
- Text: `#00754A` (Pasto Accent)
- Border: `1px solid #00754A`
- Mesmo radius/padding/active/transition do Filled

**3. Black Filled — "Área do Associado"**
- Background: `#000000`
- Text: `#ffffff`
- Border: `1px solid #000000`
- Radius: `50px`, Padding: `7px 16px`
- Font: 14px, weight 600
- Usado na faixa de topo e momentos de conversão

**4. Dark Outlined — "Entrar"**
- Background: transparent
- Text: `rgba(0, 0, 0, 0.87)` (Text Black)
- Border: `1px solid rgba(0, 0, 0, 0.87)`
- Radius: `50px`, Padding: `7px 16px`
- Font: 14px, weight 600

**5. Green-on-Green Inverted — "Inscrever-se na Expass Agro"**
- Background: `#ffffff`
- Text: `#00754A`
- Border: `1px solid #ffffff`
- Usado quando a banda atrás é Mata Green — pílula branca com texto verde no lugar de verde-em-verde

**6. Outlined on Dark — "Saiba mais / Ver agenda"**
- Background: transparent
- Text: `#ffffff`
- Border: `1px solid #ffffff`
- Usado em feature bands Mata Green pareado com filled branco

**7. Consent Agree (variante verde de banner)**
- Background: `rgb(0, 130, 72)`
- Text: `#ffffff`
- Sem border, `50px` radius, `7px 16px` padding, 14px / weight 400
- Levemente mais brilhante que Pasto Accent — exclusivo do banner de cookies

**8. WhatsApp CTA Flutuante (signature do produto)**
- Background: `#25D366` (WhatsApp Green — exceção documentada)
- Icon: `#ffffff` (logo WhatsApp)
- Size: `5.6rem / 56px` (padrão), `4rem / 40px` (variante mini)
- Radius: `50%` (círculo)
- Posição: fixed bottom-right, `-0.8rem` touch offset para conforto extra de tap
- Shadow stack: base `0 0 6px rgba(0,0,0,0.24)` + ambient `0 8px 12px rgba(0,0,0,0.14)`
- Active state: ambient fade para `0 8px 12px rgba(0,0,0,0)` + `scale(0.95)`
- Comportamento: `<a href="https://wa.me/553535292650?text=...">` — link direto para o número institucional do sindicato. Texto pré-preenchido por contexto de página (ex.: "Olá, vim pelo site sobre Leilões")
- Este é o elemento de elevação signature — flutua sobre toda superfície com scroll. Justificativa estratégica: WhatsApp é canal dominante no agro; tornar a entrada para conversa o gesto mais visível do site

**9. Feedback Tab — "Fale com a secretaria"**
- Background: `#00754A`
- Text: `#ffffff`
- Radius: `12px 12px 0px 0px` (top-rounded apenas)
- Padding: `8px 16px`
- Font: 14px, weight 400
- Fixed bottom-right-inside, ancorado à borda do viewport (alternativa quando WhatsApp CTA já estiver ocupando bottom-right)

### Cards & Containers

**Content Card (default)**
- Background: `#ffffff` (`--cardBackgroundColor`)
- Radius: `12px` (`--cardBorderRadius`)
- Shadow: `0px 0px .5px 0px rgba(0,0,0,0.14), 0px 1px 1px 0px rgba(0,0,0,0.24)` (`--cardBoxShadow`)
- Usado para: card de notícia, card de departamento (Jurídico, Fiscal, PRONAF…), card de evento, painel de status do associado

**Event Tile (Expass Agro / Leilão)**
- Background: fotografia da edição preenche o tile (sem cor sólida)
- Radius: `~12px`, levemente mais apertado nos cantos
- Shadow: mais leve que o card padrão — tratados como peças físicas pousadas no canvas creme
- Etiquetado por categoria acima do grid: "Próximos leilões", "Edições anteriores da Expass Agro", "Leilões beneficentes", "Leilões de leite"
- Fotos autorais do parque/animal/feira preferíveis a stock genérico

**Status Cards de Associado (área do associado)**
- Grid de até 3 colunas: documentos / boletos / histórico de serviços — cada qual um painel Mata Green (`#1E3932`):
  - Header com faixa de cor (categoria de serviço)
  - Badge numerado (ex.: "3 boletos em aberto")
  - Título de status em Inter 24px weight 600
  - Lista de itens em texto branco/translúcido
  - Caption inferior "Atualizado em 06/05/2026"

**Card de Cerimônia (leilão beneficente / recorde / posse)**
- Background: `#faf6ee` (Creme Café) — superfície creme-dourada
- Conteúdo: foto institucional centrada, com texto descritivo abaixo, badge dourado (`#cba258`) "16ª edição" / "Recorde mundial" / "Gestão 2024–2028"
- Radius e shadow seguem spec de card padrão

**Dropdown Menu (Departamentos / Eventos no nav)**
- Background: `#f9f9f9` (Neutral Cool)
- Items em `24px / weight 400` em Text Black
- Sem border — apenas surface shift contra branco

**Modal (form de solicitação de serviço, edital de leilão)**
- Padding: `2.4rem` (`--modalPadding`)
- Top padding: `8.8rem` (`--modalTopPadding`) — espaço para botão close / header
- Padding vertical combinado: `11.2rem`
- Radius herda de card (`12px`)

### Inputs & Forms

> **Contexto SinRural:** forms aparecem em (a) solicitação de serviço por departamento, (b) inscrição em evento, (c) login do associado, (d) contato. Audiência inclui produtores mais velhos — labels grandes, validação clara, sem armadilhas.

**Floating Label Input**
- Label flutua acima da borda quando focado/preenchido
- Desktop label: `1.9rem` default, anima para `1.4rem` ativo
- Mobile label: `1.6rem` default, anima para `1.3rem` ativo
- Label horizontal offset: `12px` da esquerda
- Active label translate: até `-12px` com `-50%` Y translation
- Field padding: `12px`
- Form horizontal padding: `1.6rem`
- Validação: campo válido ganha tint `rgba(pasto-light, 0.33)`; inválido ganha tint `rgba(red, 0.05)`
- Transition: `0.3s option-label-marker-expansion cubic-bezier(0.32, 2.32, 0.61, 0.27)` em checked-input

**Option Icon (checkbox/radio para "Tipo de serviço")**
- Padding: `3px` interno
- Usa o cubic-bezier de checked-input acima (curva levemente "springy" com overshoot 2.32)

**Department Select (campo "Qual departamento?")**
- White bg, `1px solid #d6dbde`, radius `4px`
- Float label "Departamento" em 13/700 Text Black uppercase, `0.325px` letter-spacing
- Valor centrado: "Jurídico", "Fiscal", "Contábil", "Ambiental", "PRONAF"
- Chevron-down direito em Text Black Soft
- Focus: borda muda para Pasto Accent (`#00754A`)

### Navigation

**Global Nav (top bar)**
- Fixed com alturas progressivas: `64px` xs → `72px` mobile → `83px` tablet → `99px` desktop
- Shadow stack: `0 1px 3px rgba(0,0,0,0.1), 0 2px 2px rgba(0,0,0,0.06), 0 0 2px rgba(0,0,0,0.07)` — três camadas soft lift
- Esquerda: wordmark/brasão SinRural, offset `99px` (md) / `131px` (lg) da esquerda
- Links primários inline em Inter weight 400–600: **Institucional · Serviços · Eventos · Notícias · Contato**
- Direita: botão "Entrar" (outlined) + "Área do Associado" (black filled)

**Sub-nav (segunda barra, ex.: "Eventos")**
- Altura: `53px` (subnav global) / `48px` (subnav interno)
- Tab horizontal: "Expass Agro · Leilões Mistos · Leilões de Leite · Leilão Beneficente HRC"

**Mobile Nav**
- Hamburger drawer abaixo do breakpoint tablet
- WhatsApp CTA flutuante persiste no bottom-right independente do estado do nav

### Image Treatment

- **Hero photography**: Foto autoral do parque, do produtor em campo, ou de animal — ocupa ~40vw em layout split-hero; texto ocupa os outros 60vw (`--headerCrateProportion: 40vw` / `--contentCrateProportion: 60vw`)
- **Tiles de evento**: cada edição da Expass Agro / cada leilão é uma fotografia distinta — autoral, calorosa, jamais arte gerada genérica
- **Cerimônia**: fotografias do leilão beneficente HRC, do recorde Bloger FIV, da posse de diretoria — composições angulares, foto-em-contexto
- **Notícia thumbnail**: 4:3 com fundo creme/branco, leve drop-shadow
- **Image fade-in**: transition `opacity 0.3s ease-in` no load (`--imageFadeTransition`)

### Feature Band (faixa Mata Green)

Faixa full-width `#1E3932` (Mata Green) com:
- Esquerda: headline branco + subhead + linha de CTAs
- Direita: foto institucional (parque, presidente, produtor)
- Split ratio ~40/60 ou 50/50 dependendo da seção
- Texto branco com `rgba(255,255,255,0.70)` em copy secundária
- CTAs seguem combo Green-on-Green Inverted (filled branco) + Outlined on Dark (border branco)
- **Uso típico:** "Unidos pelo Agro" hero institucional, banda de inscrição Expass Agro, banda de leilão beneficente

### Expander / Accordion (FAQ de departamento, dúvidas de leilão)

- Duration: `300ms` (`--expanderDuration`)
- Curva: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` — ease-out medido
- Usado em FAQs por departamento (Jurídico, Fiscal, PRONAF…) e dúvidas de edital de leilão

### Cookie Consent

Modal Mata Green no topo da página com "Aceitar" (filled verde) e "Preferências" (outlined). Aparece na primeira visita; descartável.

### Cluster de Detalhe — Leilão (PDP-equivalente)

Cluster repetível usado nas páginas de detalhe de leilão (ex.: `/leilao/2026-05-15-leilao-misto`). Estende inventário sem mudar tokens.

**Lot Selector (lote do leilão)**
- Linha horizontal de lotes — cada item: número do lote + foto miniatura do animal + categoria (Macho/Fêmea/Touro/Bezerro)
- Active state: ring circular Pasto Accent (`2px solid #00754A`) ao redor do lote selecionado
- Inactive: sem ring, mesma tipografia
- Container radius: `12px`; ícones individuais `50%` circular
- Padding interno: `16px 24px`

**Add-in / Filtro de Categoria (retângulo outlined)**
- Background: `#ffffff`
- Border: `1px solid #d6dbde`
- Radius: `4px`
- Float label acima da top border: "Raça" / "Faixa de peso" / "Tipo" — 13/700 Text Black uppercase, `0.325px` letter-spacing
- Valor centrado (ex.: "Gir", "Girolando", "Bubalino"): 16/400 Text Black
- Chevron direito em Text Black Soft
- Focus: border muda para Pasto Accent

**"Inscrever-se" Button (PDP do leilão)**
- Background: `#00754A` (Pasto Accent)
- Text: `#ffffff`
- Radius: `50px`
- Padding: `14px 32px`
- Pinado top-right do card de leilão e/ou direita da banda de info
- Mesmo `scale(0.95)` ativo dos outros CTAs primários

**Cerimônia Cost Pill — "Beneficente HRC"**
- Background: transparent
- Border: `1px solid #cba258` (Café Gold)
- Text: `#cba258`
- Radius: `50px`
- Padding: `4px 12px`
- Conteúdo: ícone ★ ou ♥ + texto "Beneficente" / "16ª edição" / "Recorde"
- Font: 13/700, `0.5px` letter-spacing
- Usado **apenas** em itens com componente cerimonial

**Banda de Descrição do Leilão**
- Faixa full-width Mata Green
- Conteúdo top-down:
  1. Cerimônia Cost Pill (dourado) se aplicável
  2. Body de descrição em branco (16/400/1.5)
  3. Resumo inline ("12 lotes · 06/05/2026 · 19h · Parque Adolpho Coelho Lemos") em 14/700 branco
  4. Botão outlined-white-on-green "Ver edital completo (PDF)"
- Padding: `32px` vertical

**Tabela de Edital (substitui "Nutrição")**
- Layout 2 colunas dentro de card branco
- Esquerda: header "Lotes" + lista numerada com peso/idade/raça
- Direita: header "Condições" + label/valor (Comissão, Forma de pagamento, ITR, GTA, Local de retirada)
- Cada linha: label esquerda (Inter 14/400) + valor direita (Inter 14/700) separadas por hairline `1px solid #e7e7e7`
- Footnote em 13/400 Text Black Soft no rodapé

**Selector de Plataforma de Lance**
- Aparece em feature band Mata Green acima do lot selector
- Retângulo full-width arredondado com interior translúcido-branco
- Texto: "Lance presencial ou via Multpix" em branco 14/400
- Direita: chevron-down + ícone Multpix em outline branco
- Radius: `4px`, altura: ~48px

**Breadcrumb PDP do Leilão**
- "Eventos / Leilões / Leilão Misto Quinzenal — 06/05/2026" acima do título
- Separador: `/` em Text Black Soft
- Página atual sem link, anteriores em verde-accent linkados
- Font: 14/400 Inter

**Back Chevron (sub-páginas profundas)**
- "← Voltar" acima de heading de seção
- Verde Pasto Accent (`#00754A`) 14/700
- Chevron `<` no mesmo verde
- Alternativa ao breadcrumb completo em sub-páginas profundas (ex.: edital PDF embedded view)

---

## 5. Layout Principles

### Spacing System

Escala semântica em rem (ancorada em `1rem = 10px` via `font-size: 62.5%`):

| Token | Rem | Pixels | Uso típico |
|-------|-----|--------|-------------|
| `--space-1` | `0.4rem` | 4px | Padding inline mais apertado |
| `--space-2` | `0.8rem` | 8px | Gap pequeno, padding vertical de botão |
| `--space-3` | `1.6rem` | 16px | Default — padding de card, gutter externo xs |
| `--space-4` | `2.4rem` | 24px | Spacing interno de seção, gutter externo md |
| `--space-5` | `3.2rem` | 32px | Spacing maior entre seções |
| `--space-6` | `4rem` | 40px | Gaps grandes, gutter externo lg, header crate |
| `--space-7` | `4.8rem` | 48px | Spacing seção-a-seção |
| `--space-8` | `5.6rem` | 56px | Respiro grande — altura do WhatsApp CTA |
| `--space-9` | `6.4rem` | 64px | Padding de seção mais largo |

**Gutter tokens:**
- `--outerGutter: 1.6rem` (16px, mobile)
- `--outerGutterMedium: 2.4rem` (24px, tablet)
- `--outerGutterLarge: 4.0rem` (40px, desktop)

**Constante de ritmo universal:** `1.6rem` (16px) aparece em toda página como gutter externo default, baseline de padding de card e body text-3 — a unidade de spacing mais frequente do sistema.

### Grid & Container

- Escala de coluna: `--columnWidthSmall: 343px` / `Medium: 500px` / `Large: 720px` / `XLarge: 1440px`
- Grid de evento (Expass Agro / Leilões): grid responsivo 3-5-up de tiles `~343px`
- Status do associado: 3 painéis Mata Green em `lg+`
- Hero: split assimétrico 40% (imagem) / 60% (conteúdo) via `--headerCrateProportion` / `--contentCrateProportion`

### Filosofia de Whitespace

Whitespace carrega o sentimento de "espaço aberto, parque arejado". Padding de seção generoso (40–64px). Blocos separados por whitespace, não por divisores. O canvas creme (`#f2f0eb`) é em si uma respiração visual entre cards brancos e bandas verde-escuras.

### Border Radius Scale

| Valor | Uso |
|-------|-----|
| `12px` | Cards, modais, tiles (`--cardBorderRadius`) |
| `12px 12px 0 0` | Feedback tab full-width (top-rounded apenas) |
| `50px` | Todos os botões — full-pill (`--buttonBorderRadius`) |
| `50%` | Ícones circulares, WhatsApp CTA, avatares |

---

## 6. Depth & Elevation

| Nível | Tratamento | Uso |
|-------|-----------|-----|
| Card | `0 0 0.5px rgba(0,0,0,0.14), 0 1px 1px rgba(0,0,0,0.24)` | Content cards default — dual-shadow sussurro |
| Global Nav | `0 1px 3px rgba(0,0,0,0.1), 0 2px 2px rgba(0,0,0,0.06), 0 0 2px rgba(0,0,0,0.07)` | Triple-layer soft lift na top bar fixed |
| WhatsApp CTA Base | `0 0 6px rgba(0,0,0,0.24)` | Halo base ao redor do botão circular flutuante |
| WhatsApp CTA Ambient | `0 8px 12px rgba(0,0,0,0.14)` | Ambient direcional empilhado — flutua o CTA pra frente |
| Event Tile | Drop shadow leve ao redor da fotografia da edição | Feel de peça física no canvas creme |

**Filosofia de sombra:** Sussurro-suave em camadas sobre sólido — o sistema nunca alcança uma única drop shadow pesada. Em vez disso, empilha 2–3 sombras de baixa alpha em offsets diferentes para simular ambient + luz direta. O WhatsApp CTA é o elemento mais elevado em qualquer página.

### Profundidade Decorativa

- **Sem sistema de gradient** — superfícies são color-block sólido
- **Banda de cor** carrega profundidade percebida (bandas Mata Green leem como "zonas-feature recuadas" entre seções creme/brancas)
- **Drop shadows SVG** em peças institucionais (selo de utilidade pública, brasão) acrescentam fisicalidade 3D leve sem box-shadow

---

## 7. Do's and Don'ts

### Do

- Use Cal Cream (`#f2f0eb`) ou Adobe Warm (`#edebe9`) como canvas no lugar de branco puro — o creme quente é signature
- Mapeie os tons de verde para seu papel: SinRural Green em headings, Pasto Accent em CTAs, Mata Green em bandas profundas, Cerrado Uplift em decorativo
- Mantenha tracking apertado em `-0.005em` / `-0.16px` em Inter ao longo de todo o sistema
- Use radius full-pill 50px em todo botão sem exceção
- Aplique `transform: scale(0.95)` como active state universal de botão
- Reserve Café Gold para momentos de cerimônia (leilão beneficente, recordes, posse, homenagem)
- Use Inter para quase tudo; mude para Lora apenas em headlines editoriais (história, mensagem do presidente, manifesto, notícia longa)
- Empilhe 2–3 sombras de baixa alpha em vez de uma drop shadow pesada
- Use o WhatsApp CTA flutuante como entrada persistente para conversa em toda superfície de scroll
- Deixe o canvas creme respirar entre cards — use whitespace, não divisores
- Trate cada edição da Expass Agro / cada leilão como peça fotográfica autoral, não card genérico

### Don't

- Não use branco puro como canvas — a temperatura creme é load-bearing pra identidade
- Não escolha "um único verde da marca" — o sistema de quatro verdes é intencional; usar só `#006241` em tudo achata a marca
- Não use Café Gold como acento genérico — é sinal de cerimônia exclusivo
- Não esquadre os cantos dos botões — pílula 50px é universal
- Não introduza fills de gradient — o sistema é color-block ao longo de todo
- Não contraste H1 e H2 por tamanho — hierarquia vem de peso + cor (600 SinRural Green vs 400 Text Black)
- Não use preto puro em body text — `rgba(0,0,0,0.87)` casa com canvas quente
- Não pule o `scale(0.95)` ativo nos botões — é micro-interação signature
- Não empilhe sombras pesadas únicas; sempre layer 2–3 baixa-alpha
- Não introduza serifs ou scripts no fluxo principal de serviço/leilão — pertencem a contexto editorial
- Não use WhatsApp Green (`#25D366`) em nada além do CTA flutuante — quebraria a disciplina de cor

---

## 8. Responsive Behavior

### Breakpoints

Inferidos a partir dos tokens de largura de componente e alturas progressivas de nav:

| Nome | Largura | Mudanças-chave |
|------|---------|----------------|
| xs | < 480px | Nav 64px; hamburger; layouts 1 coluna; pílulas full-width |
| Mobile | 480–767px | Nav 72px; grid de evento 2-up; padding de card aperta |
| Tablet | 768–1023px | Nav 83px; grid de evento 3-up; split de hero começa a aparecer |
| Desktop | 1024–1439px | Nav 99px; grid de evento 4-up; split assimétrico 40/60 completo |
| XLarge | 1440px+ | Conteúdo capa em `--columnWidthXLarge`; grid 5-up; margem creme extra |

### Touch Targets

- Pílulas em `7px 16px` medem ~32px de altura — abaixo dos 44px WCAG AAA mínimos pra superfície touch-only. **Em mobile, expandir padding visual para atender o mínimo** (importante: público inclui produtores mais velhos com toque menos preciso).
- WhatsApp CTA em `56px` está bem acima do mínimo.
- WhatsApp CTA usa `--whatsappTouchOffset: calc(-1 * .8rem)` para estender área de toque 8px além da borda visual.
- Float-label inputs crescem o label em mobile (1.6rem base vs 1.9rem desktop) — fácil de ler/tocar de braço estendido (no campo, sob sol).

### Estratégia de Collapse

- **Altura do nav escala progressivamente**: 64 → 72 → 83 → 99px ao longo dos breakpoints
- **Hero split colapsa**: 40/60 assimétrico → empilhado (imagem em cima, conteúdo abaixo) em mobile
- **Grid de evento**: 5-up → 4-up → 3-up → 2-up → 1-up
- **Feature bands**: full-width permanente, mas texto + imagem empilham em mobile
- **Outer gutter escala**: 16px → 24px → 40px
- **Status do associado 3-col**: empilha em mobile

### Comportamento de Imagem

- Foto de hero corta mais apertado vertical em mobile; conteúdo vira âncora visual
- Tiles de evento preservam aspect ratio; grid reflow
- `opacity 0.3s ease-in` no load (evita pop-in chocante em conexão 4G ruim — caso típico do produtor no campo)
- Foto institucional em ângulo escala proporcionalmente; nunca estica

---

## 9. Agent Prompt Guide

### Quick Color Reference

- CTA primário: "Pasto Accent (`#00754A`)"
- Texto de CTA primário: "White (`#ffffff`)"
- Heading da marca: "SinRural Green (`#006241`)"
- Feature band / footer: "Mata Green (`#1E3932`)"
- Canvas de página: "Cal Cream (`#f2f0eb`)"
- Canvas de card: "White (`#ffffff`)"
- Heading em superfície clara: "Text Black (`rgba(0,0,0,0.87)`)"
- Body em superfície clara: "Text Black Soft (`rgba(0,0,0,0.58)`)"
- Body em Mata Green: "Text White Soft (`rgba(255,255,255,0.70)`)"
- Cerimônia: "Café Gold (`#cba258`)"
- Texto da área do associado: "Associado Green (`#33433d`)"
- Destrutivo: "Red (`#c82014`)"
- WhatsApp CTA (uso único): "WhatsApp Green (`#25D366`)"

### Prompts de Componente (Exemplos)

1. "Crie um botão CTA pílula primário SinRural com background Pasto Accent (`#00754A`), texto branco 'Solicitar atendimento jurídico', fonte Inter 16px peso 600 com letter-spacing `-0.005em`, border-radius `50px` (full pill), padding `7px 16px`. Aplique `transform: scale(0.95)` no active com transition `0.2s ease`."

2. "Desenhe um content card com background White (`#ffffff`), border-radius `12px`, sombra em camadas `0 0 0.5px rgba(0,0,0,0.14), 0 1px 1px rgba(0,0,0,0.24)`. Padding `16–24px` (`--space-3` a `--space-4`). Posicione sobre canvas Cal Cream (`#f2f0eb`) com gap `16px` para irmãos."

3. "Construa o WhatsApp CTA flutuante — diâmetro `56px`, fill WhatsApp Green (`#25D366`), ícone WhatsApp branco centrado. Sombra em camadas: `0 0 6px rgba(0,0,0,0.24)` + `0 8px 12px rgba(0,0,0,0.14)`. Posição fixed bottom-right com touch offset `-0.8rem`. Active state colapsa o ambient para `0 8px 12px rgba(0,0,0,0)` com `scale(0.95)`. Link href: `https://wa.me/553535292650?text=...` com texto pré-preenchido por contexto de página."

4. "Construa uma feature band Mata Green — seção full-width com background `#1E3932`. Coluna esquerda: H2 Inter 24px peso 600 branco ('Unidos pelo Agro'), seguido por parágrafo body em Text White Soft (`rgba(255,255,255,0.70)`) e linha de CTA com dois botões (filled branco com texto Pasto Accent para primário, outlined branco para secundário). Coluna direita: foto institucional do parque ou produtor. Split 40/60, empilha vertical abaixo de `768px`."

5. "Crie um Status Card de Associado — painel Mata Green (`#1E3932`) com border-radius `12px`, faixa colorida no topo (categoria de serviço). Título em Inter 24px peso 600 branco. Lista de itens em bullets brancos com captions secundárias `rgba(255,255,255,0.70)`. Caption inferior em Text White Soft 'Atualizado em 06/05/2026'. Empilhe 3 painéis em grid em `lg+`, coluna única em mobile."

6. "Desenhe um Event Tile — card radius `12px`, fill com fotografia autoral (foto de campo do parque, animal, ou edição da feira) cobrindo toda a superfície. Drop shadow sutil dá feel de peça física pousada no canvas creme. Agrupe sob etiqueta de categoria ('Próximos leilões', 'Edições anteriores da Expass Agro') em Inter 24px peso 400 acima do grid."

7. "Crie um header de detalhe de leilão — banda Mata Green (`#1E3932`) com breadcrumb 'Eventos / Leilões / Leilão Misto Quinzenal — 06/05/2026' em 14/400 branco acima do título do leilão em Inter 32/700 uppercase branco. Foto do animal/lote centrada abaixo. Abaixo da foto: linha selector de lotes — cada botão mostra número do lote, foto miniatura, e categoria ('Macho', 'Fêmea', 'Touro'). Lote selecionado envolve a miniatura num ring circular `2px solid #00754A`."

8. "Construa o fluxo de inscrição em serviço — sob o departamento selector, 3 linhas empilhadas de input outlined-rectangle (white bg, `1px solid #d6dbde`, radius `4px`). Cada uma tem label flutuante ('CPF', 'Nome', 'Telefone') acima da top border em 13/700 Text Black uppercase. Valor centrado. Direita: chevron-down em Text Black Soft. Abaixo dos campos: pílula outlined verde 'Anexar documento' com ícone clipe, radius `50px`, padding `14px 40px`. Pareie com pílula filled Pasto Accent 'Enviar solicitação' na mesma linha."

9. "Desenhe banda de descrição de leilão beneficente — full-width Mata Green (`#1E3932`) abaixo do header. Topo: pílula outlined dourada 'Beneficente HRC · 16ª edição' (radius `50px`, padding `4px 12px`, border e texto Café Gold `#cba258`). Abaixo: descrição em branco 16/400/1.5. Resumo inline em branco 14/700 ('12 lotes · 06/05/2026 · 19h · Parque Adolpho Coelho Lemos'). Pílula outlined-white-on-green 'Ver edital completo (PDF)'. Padding vertical 32px."

10. "Crie tabela de edital de leilão — layout 2 colunas dentro de card branco. Coluna esquerda: header 'Lotes' (24/400 Text Black), seguido por lista numerada de lotes com peso/idade/raça em 14/400 Text Black Soft. Coluna direita: header 'Condições', depois linhas label/valor (Comissão, Forma de pagamento, ITR exigido, GTA, Local de retirada) separadas por hairlines `1px solid #e7e7e7`. Tipografia: labels 14/400 Text Black, valores 14/700 Text Black alinhado à direita. Footnote asterisco em 13/400 Text Black Soft no rodapé."

### Iteration Guide

Ao refinar telas geradas com este sistema:
1. Foque em UM componente por vez
2. Referencie nomes de cor e hex deste documento
3. Use linguagem natural ("canvas creme quente", "sistema de quatro verdes") junto a valores exatos
4. Preserve a pílula 50px + `scale(0.95)` ativo universalmente
5. Verifique que verdes estão mapeados ao papel correto (Pasto Accent para CTA, SinRural Green para heading, Mata Green para banda)
6. Não introduza gradients — sistema é color-block
7. Mantenha tracking de Inter em `-0.005em` / `-0.16px`
8. WhatsApp Green só no CTA flutuante; Café Gold só em cerimônia

### Gaps Conhecidos

- Inter é gratuita (Google Fonts); se em algum momento for desejável typeface proprietária mais identitária (ex.: humanist com terminações ligeiramente arredondadas), trocar via `--font-primary` no token system
- Animações específicas por componente além das documentadas (`--duration: 0.4s`, `--iconTransition: all ease-out 0.2s`, `--expanderDuration: 300ms`) ficam para o frontend definir caso a caso
- Estilo completo de form error-state (peso da borda vermelha, posição do ícone) está visível no token tint mas não exaustivamente extraído
- Componentes específicos da área do associado (login social? 2ª via de boleto? histórico de serviço?) ficam como TODO — referenciados em texto mas não cobertos por prompt de exemplo
- Mapa do parque + agenda do calendário anual da Expass Agro (item 14 da auditoria) requer componente custom, fora do escopo deste DESIGN.md
