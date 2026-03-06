# REQUIREMENTS.md — Landing Page "Mentoria Caixa Preta"

> **Este arquivo é a fonte de verdade do projeto.** Todos os detalhes visuais, tokens de design, copy COMPLETA e assets de cada seção da landing page estão documentados aqui. Ao implementar qualquer componente, consulte este documento primeiro.

---

## Resumo do Projeto

- **Produto:** Mentoria Caixa Preta da Escala Gringa (infoproduto high-ticket para afiliados)
- **Tipo:** Landing Page estática de vendas (sem backend, sem formulários)
- **Ação principal:** Botões de CTA que redirecionam para checkout externo
- **Hospedagem:** TurboCloud (hospedagem de arquivos estáticos)
- **Stack:** Next.js (Static Export `output: 'export'`) + Tailwind CSS + TypeScript + Framer Motion + Shadcn UI + Swiper.js
- **Largura Global:** Desktop possui `max-w-[1280px]` centralizado. No Mobile, a largura é `100%` (`w-full`) com padding lateral.
- **Figma:** https://www.figma.com/design/4wRecV0ljzxP6KLEdKVHy4/Anibal-%7C-Lan%C3%A7amento-Completo?node-id=4101-485&m=dev

---

## Regras e Boas Práticas Mobile-First

O site deve ser construído rigorosamente com a abordagem **Mobile-First**, garantindo performance e legibilidade, já que a maioria dos leads acessa pelo celular.

### 1. Tipografia e Espaçamentos (Mobile)
- **Tamanhos de Fonte no Mobile:**
  - `Body / Textos Complementares`: Usar tamanhos entre `12px` (`text-xs`) e `14px` (`text-sm`) no mobile para não comprometer a diagramação.
  - `Títulos (H1, H2, H3)`: Devem escalar responsivamente, sendo o foco da leitura. Evitar títulos gigantes (maiores que `40px`) em telas pequenas para não gerarem 4 ou 5 linhas.
- **Espaçamento Seguro (Paddings):**
  - O container principal deve ter no mínimo `px-4` (16px) ou `px-5` (20px) nas laterais no mobile (largura 100%).
  - Espaçamento vertical entre seções (`py`) deve ser equilibrado (ex: `py-12` no mobile, `md:py-24` no desktop).

### 2. Elementos Interativos e CTAs
- **Touch Targets (Alvos de Toque):** QUALQUER elemento clicável (botões, links, accordions do FAQ) DEVE ter uma altura/largura mínima de **`48px`** (`h-12`). Regra inegociável para evitar toques acidentais.
- **Área de Ação do Polegar (Thumb Zone):** Botões principais de CTA nas seções devem ocupar `w-full` ou ampla largura no mobile, centralizados, facilitando o clique com o polegar.

### 3. Adaptação de Layout (Grids e Cards)
- **Comportamento Padrão de Cards:**
  - Todo grid de cards (como os da Seção 7, 8 e 9) deve empilhar verticalmente `flex-col` ou `grid-cols-1` no mobile.
  - As quebras (breakpoints) devem ocorrer no `md:` (768px) ou `lg:` (1024px) para 2 ou 3 colunas.
- **Imagens:** Imagens de background e complementares (ex: iceberg, notas de dólar) precisam usar `object-cover`, ter max-widths (`max-w-full`) definidos para não estourar o viewport limitando o scroll horizontal acidental (`overflow-x-hidden` global).

---

## Design Tokens Globais

### Fontes
- **Display / Títulos:** `Tomorrow` (Google Fonts — carregada via `next/font/google`, self-hosted no build estático)
- **Body / Corpo:** `Helvetica, Arial, sans-serif` (fonte de sistema, NÃO é Google Font — usar como `fontFamily` nativo sem import)

> **Nota sobre Export Estático:** O `next/font/google` baixa e otimiza automaticamente as fontes do Google durante o build. Os arquivos `.woff2` resultantes ficam embutidos na pasta `out/` junto com o HTML/CSS/JS. Isso garante que as fontes funcionem perfeitamente no cPanel da TurboCloud sem dependência externa do Google Fonts CDN.

### Cores de Destaque de Texto (Gradientes e Sólidas)
| Token | Valor | Uso |
|---|---|---|
| `text-gradient-hero` | `linear-gradient(90deg, #E8160E 0%, #FFF 100%)` | H1 da Hero e outros destaques similares |
| `highlight-gold` | `#F2B705` | Destaques de texto na Seção 2 (ex: "+R$100K/dia", "EXATA MANEIRA") |
| `highlight-green` | `#5BFFB3` | Destaques de texto na Seção 2 (ex: "é ter acesso.") |
| `highlight-blue` | `#0E7BE8` | Destaques de texto na Seção 3 (ex: "BRECHA") |

---

## Componentes Globais

### Botão CTA — Variante Vermelha (Hero / Seções escuras)
```css
background: linear-gradient(0deg, #720000 0%, #D42727 100%);
border: 1px solid #000;
box-shadow: 0 -3px 30.459px 0 rgba(221, 0, 0, 0.23);
```
- Possui **moldura flutuante** (borda externa com gap preto entre a moldura e o botão).
- A moldura usa o mesmo gradiente do botão.
- Técnica de implementação: wrapper com pseudo-gap preto + gradiente externo (ver Notas Técnicas no final).

### Botão CTA — Variante Azul (Seção 3 / Seções claras)
```css
background: linear-gradient(0deg, #002A72 0%, #278CD4 100%);
box-shadow: 0 -3px 30.459px 0 rgba(0, 107, 221, 0.23);
```
- Mesma técnica de moldura flutuante, porém com gradiente azul.

---

## Estrutura de Seções — COPY COMPLETA

---

### SEÇÃO 1 — HERO

- **Background:** Escuro / Preto
- **Logo/Branding:** "MCP" (aparece em vários pontos da página)

**H1 (com gradiente `text-gradient-hero` no texto principal):**
> Mentoria Caixa Preta da Escala Gringa Para Você Faturar, No Mínimo, +R$100K/Dia Como Super Afiliado Nos EUA!

**Subtítulo:**
> Revelado pela primeira vez o arsenal completo de Estratégias Black que os maiores afiliados gringos usam em segredo, gerando mais de R$100 MILHÕES só nos últimos 12 meses.

**Texto secundário:**
> Todos meus segredos de R$200M em copy para chegar aos 6 ou 7 dígitos no mercado americano.

**CTA (Botão Vermelho com moldura flutuante):**
> Desbloquear Meu Acesso à Caixa Preta

**Badge:** BÔNUS

**Assets desta seção:**
| Elemento | Arquivo |
|---|---|
| Background Desktop | `/assets/backgrounds/hero-desktop.png` |
| Background Mobile | `/assets/backgrounds/hero-mobile.png` |
| Notas de dólar (decorativo) | `/assets/backgrounds/dolar.png` |

---

### SEÇÃO 2 — PROBLEMA / DOR / ACESSO

- **Background:** Escuro com gradiente sutil avermelhado no fundo

**Título:**
> Aplique Para a Primeira Mentoria à Prova de Falhas Para Afiliados de Nutra no Mercado Americano

**Copy completa (parágrafos na ordem):**

> Nós vamos abrir a tela da operação que já ultrapassou R$100 milhões em faturamento para te mostrar a **EXATA MANEIRA** *(bold #F2B705)* que nossos afiliados escalam **+R$100K/dia** *(bold #F2B705)* — os criativos, as decisões de escala, os timings, tudo.

> Porque mais importante do que saber rodar tráfego, **é ter acesso.** *(bold #5BFFB3, sublinhado)*

> Copiar criativos do mercado qualquer um faz. Agora imagina operar **POR DENTRO** *(bold #F2B705)* de uma máquina que produz VSLs de múltiplos 8 dígitos, receber os ativos antes de virarem tendência e saber exatamente o CPC, a taxa de conversão e o momento certo de apertar o botão de escala?

> É por isso que não existe nenhum programa no Brasil HOJE que posicione o afiliado com essa vantagem. É a primeira vez que um produtor que fatura múltiplos 7 dígitos por dia vai sentar com você, abrir o processo inteiro sem filtro e transformar você em parceiro da operação — não em mais um aluno largado às traças.

**CTA (Botão Vermelho):**
> Eu quero aplicar AGORA

**Assets desta seção:**
| Elemento | Arquivo |
|---|---|
| Elemento decorativo central (SVG) | `/assets/backgrounds/section-2-center.svg` |

---

### SEÇÃO 3 — "APROVEITE A BRECHA" (SEÇÃO CLARA)

- **Background:** Claro / Branco

**Título:**
> Aproveite a **BRECHA** *(destaque #0E7BE8)* que os maiores afiliados dos EUA usam para escalar milhões por dia — e que ninguém no Brasil ensina.

**Copy completa (parágrafos na ordem):**

> Existe uma falha no sistema de afiliação americano que os top affiliates exploram em silêncio: como afiliado, os seus ativos de tráfego não passam pela mesma revisão que a VSL do produtor.
>
> Isso significa que enquanto o produtor está preso a uma oferta conservadora, os afiliados que sabem disso criam presells e ângulos com uma agressividade cirúrgica — convertendo 2x, 3x mais com o mesmo funil.
>
> Esse é o segredo que separa quem fatura $1.000/dia de quem fatura $100.000.
>
> Não é sobre rodar mais tráfego. É sobre saber O QUE os afiliados que dominam o leilão fazem diferente com os mesmos ativos que você tem acesso.
>
> O problema? Essas estratégias nunca são compartilhadas abertamente. Elas circulam em grupos fechados, entre afiliados que escalam juntos.
>
> Quem está de fora, fica rodando no escuro — sem entender por que o concorrente escala 9x mais com o mesmo vídeo de vendas.
>
> A Caixa Preta reúne mais de 100 dessas estratégias, organizadas para você copiar, rodar e escalar.

**CTA (Botão Azul):**
> Desbloquear Meu Acesso à Caixa Preta

**Assets desta seção:**
| Elemento | Arquivo |
|---|---|
| Background da seção | `/assets/backgrounds/section-3.png` |

---

### SEÇÃO 4 — "OS AFILIADOS QUE ESCALAM MILHÕES"

- **Background:** Escuro com gradiente sutil

**Título:**
> Os Afiliados Que Escalam Milhões Por Dia Nos EUA Têm Métodos de Escala Que Nenhuma Spy Tool Vai Te Mostrar.

**Copy completa (parágrafos na ordem):**

> Você pode copiar o criativo. Pode copiar a VSL. Pode copiar o funil inteiro.
>
> E mesmo assim, o afiliado que você copiou vai continuar escalando 9x mais que você.
>
> Porque o segredo nunca esteve na oferta.
>
> Está no que acontece **DEPOIS** *(color: vermelho, ex: #D42727)* do play — nas **decisões de tráfego** *(color: #5BFFB3)*, nos **métodos de escala e nos timings** *(color: #5BFFB3)* que os top affiliates da gringa usam para dominar o leilão.

**Lista de itens (com ícones de check):**
> ✓ Quando aumentar o orçamento.
> ✓ Quando matar um criativo.
> ✓ Quando ressuscitar uma oferta milionária no momento exato.
> ✓ Qual CPC um ad precisa bater para justificar escala.
> ✓ A taxa de conversões mínima para não queimar budget.

**Parágrafo de fechamento:**
> Esse é o jogo invisível. O que separa quem roda no escuro de quem controla o ROI, o ROAS e o leilão inteiro.
>
> **E esse jogo só se aprende com quem já está dentro.** *(color: vermelho, ex: #D42727)*

**Assets desta seção:** Nenhum asset de imagem — seção puramente textual.

---

### BANNER INTERMEDIÁRIO (Após Seção 4)

- **Background:** `linear-gradient(0deg, #E8160E 0%, #FFF 266.61%)`
- **Texto:**
> ESSA É APENAS UMA DAS MAIS DE 100 ESTRATÉGIAS DENTRO DA CAIXA PRETA.

---

### SEÇÃO 5 — DEPOIMENTOS / CASES DE SUCESSO

- **Background:** Escuro
- **Biblioteca:** Swiper.js (`swiper` npm package)

**Título:**
> Confira os Depoimentos dos meus CASES DE SUCESSO.

#### Layout / Estrutura:
```
[Container da seção — fundo escuro, full-width]
  ├── [Título] — centralizado
  │
  ├── [Carrossel 1 — Swiper.js]
  │     Direção: auto-scroll para a ESQUERDA (contínuo/infinito)
  │     6 slides (imagens de depoimentos WhatsApp)
  │     Loop infinito: sim
  │     Usuário pode arrastar/scroll manualmente
  │     freeMode: true
  │
  └── [Carrossel 2 — Swiper.js]
        Direção: auto-scroll para a DIREITA (contínuo/infinito)
        6 slides (imagens de depoimentos WhatsApp)
        Loop infinito: sim
        Usuário pode arrastar/scroll manualmente
        freeMode: true
```

**Configuração Swiper sugerida:**
- `loop: true`
- `freeMode: true`
- `autoplay: { delay: 0, disableOnInteraction: false }`
- `speed: 5000` (transição lenta e contínua)
- `slidesPerView: 'auto'`
- `allowTouchMove: true`
- Carrossel 1: `reverseDirection: false` (esquerda)
- Carrossel 2: `reverseDirection: true` (direita)

**Assets desta seção:**
| Elemento | Arquivo |
|---|---|
| Carrossel 1 — slide 01 | `/assets/testimonials/carousel-1/01.png` |
| Carrossel 1 — slide 02 | `/assets/testimonials/carousel-1/02.png` |
| Carrossel 1 — slide 03 | `/assets/testimonials/carousel-1/03.png` |
| Carrossel 1 — slide 04 | `/assets/testimonials/carousel-1/04.png` |
| Carrossel 1 — slide 05 | `/assets/testimonials/carousel-1/05.png` |
| Carrossel 1 — slide 06 | `/assets/testimonials/carousel-1/06.png` |
| Carrossel 2 — slide 01 | `/assets/testimonials/carousel-2/01.png` |
| Carrossel 2 — slide 02 | `/assets/testimonials/carousel-2/02.png` |
| Carrossel 2 — slide 03 | `/assets/testimonials/carousel-2/03.png` |
| Carrossel 2 — slide 04 | `/assets/testimonials/carousel-2/04.png` |
| Carrossel 2 — slide 05 | `/assets/testimonials/carousel-2/05.png` |
| Carrossel 2 — slide 06 | `/assets/testimonials/carousel-2/06.png` |

---

### SEÇÃO 6 — "A CAIXA PRETA FUNCIONA PARA TODOS QUE…"

- **Background da seção:** Escuro (preto/gradiente)
- **Container da seção:** SEM max-width fixo (pode ultrapassar os 1280px)

#### Layout / Estrutura:
```
[Container da seção — fundo escuro, full-width]
  └── [Card Principal — fundo claro/branco]
        Border: 2px solid #ED453F (vermelho)
        Border-radius: arredondado
        Width: pode ultrapassar os 1280px (usar %, ex: 90% no desktop)
        Padding interno generoso
        │
        ├── [Título] — centralizado, fonte Tomorrow bold
        │     "A CAIXA PRETA funciona para todos que..."
        │     → "CAIXA PRETA" em vermelho (#E8160E ou #ED453F)
        │
        ├── [Container de 5 Cards — empilhados verticalmente]
        │     (No mobile: flex-col, espaçamento vertical reduzido (gap-4). No desktop: largura máxima p/ o texto não cruzar a tela toda)
        │     Cada card:
        │     ├── Ícone de Check (branco dentro de círculo com gradiente vermelho)
        │     │     background: linear-gradient(90deg, #EE1330 0%, #CF1322 100%)
        │     └── Texto do card (cor escura, fonte Helvetica)
        │
        └── [Botão CTA Vermelho com moldura flutuante] — centralizado
              "EU QUERO MEU PLANO À PROVA DE FALHAS! →"
```

#### Copy do título:
> A **CAIXA PRETA** *(vermelho #ED453F)* FUNCIONA PARA TODOS QUE…

#### Card 1:
> ✅ Já entenderam que o jogo não é SÓ acertar um criativo e jogar tráfego. É saber exatamente quando escalar, quando matar e quando ressuscitar uma oferta no timing perfeito.

#### Card 2:
> ✅ Já entenderam que o jogo não é SÓ acertar um criativo e jogar tráfego. É saber exatamente quando escalar, quando matar e quando ressuscitar uma oferta no timing perfeito.

#### Card 3:
> ✅ Têm, no mínimo, R$5.000 de caixa para colocar tráfego em cima de funis já validados.

#### Card 4:
> ✅ São afiliados iniciantes que precisam de acompanhamento direto com quem já fatura múltiplos 8 dígitos/mês

#### Card 5:
> ✅ E principalmente para quem já roda tráfego e sabe que com um CPA de +$200 e as estratégias certas, escalaria múltiplos 8 dígitos por ano como Super Afiliado.

**Ícone do Check:**
> Círculo com gradiente `linear-gradient(90deg, #EE1330 0%, #CF1322 100%)` + check branco dentro. Usar SVG ou Lucide React `<Check />` em branco sobre um `<div>` redondo com o gradiente.

**CTA:**
> EU QUERO MEU PLANO À PROVA DE FALHAS! → *(Botão Vermelho com moldura flutuante)*

**Assets desta seção:** Nenhum asset externo — ícone de check gerado via CSS/SVG.

---

### SEÇÃO 7 — OS 5 PILARES DA MENTORIA

#### Layout / Estrutura:
```
[Container da seção — fundo escuro]
  ├── [Título] — centralizado, texto com gradiente de destaque principal ("text-gradient-hero")
  │     "Entenda como vai funcionar a Mentoria Caixa Preta"
  │
  ├── [Subtítulo] — centralizado, texto menor
  │     "O programa é dividido em 5 pilares para transformar você em um Super Afiliado escalado no mercado americano:"
  │
  └── [Container Grid de Cards]
        Cada card tem:
        - Image background (`/assets/backgrounds/card-pilares.png`)
        - Border: `2px solid rgba(238, 19, 48, 0.25)` (#EE1330 com 25% opacidade)
        - Border-radius: arredondado (ex: rounded-xl)
        - Padding interno generoso
        - Ícone (SVG dourado)
        - Título (bold, branco)
        - Descrição (texto claro/cinza)
```

**Título:**
> Entenda como vai funcionar a Mentoria Caixa Preta *(gradiente `text-gradient-hero`)*

**Subtítulo:**
> O programa é dividido em 5 pilares para transformar você em um Super Afiliado escalado no mercado americano:

**Pilar #01:**
> *Ícone:* `/assets/icons/pilares/01.svg` (Engrenagem dourada)
> **#01 Conteúdo do básico ao avançado de Direct Response para a gringa**
> Mentorias ao vivo no Zoom onde eu abro a tela da operação e passo com você por tudo: copy, criativos, funil, tráfego e as estratégias black da Caixa Preta. Do zero até escala agressiva.

**Pilar #02:**
> *Ícone:* `/assets/icons/pilares/02.svg` (Diamante dourado)
> **#02 Acompanhamento premium**
> Calls semanais com Kauã Aníbal — oxigenação de ofertas, análise de métricas, decisões de escala em tempo real. Você traz suas campanhas e sai com o próximo passo definido.

**Pilar #03:**
> *Ícone:* `/assets/icons/pilares/03.svg` (Texto "NETFLIX" dourado)
> **#03 Programa de vantagens para afiliados**
> CPAs acima de $200, ofertas validadas com superprodução nível Netflix, criativos entregues antes de virarem tendência. Você entra no leilão já posicionado para vencer.

**Pilar #04:**
> *Ícone:* `/assets/icons/pilares/04.svg` (Cadeado dourado)
> **#04 Comunidade privada**
> Ambiente ultra-qualificado com Super Afiliados, mentores e gerente de afiliados dedicado. Grupo online + encontros presenciais nos principais estados do Brasil.

**Pilar #05:**
> *Ícone:* `/assets/icons/pilares/05.svg` (Carteira/Dinheiro dourado)
> **#05 Ranking de comissões**
> Quanto mais você escala, mais vantagem recebe. CPA maior (+US$200), acesso antecipado a ofertas, atendimento individual e listas de compradores para Lookalike. O sistema premia quem executa.

**Assets desta seção:**
| Elemento | Arquivo |
|---|---|
| Background dos cards | `/assets/backgrounds/card-pilares.png` |
| Ícone Pilar 01 | `/assets/icons/pilares/01.svg` |
| Ícone Pilar 02 | `/assets/icons/pilares/02.svg` |
| Ícone Pilar 03 | `/assets/icons/pilares/03.svg` |
| Ícone Pilar 04 | `/assets/icons/pilares/04.svg` |
| Ícone Pilar 05 | `/assets/icons/pilares/05.svg` |

- **Status detalhes visuais:** `⏳ AGUARDANDO ESPECIFICAÇÃO DO USUÁRIO`

---

### SEÇÃO 8 — VANTAGENS / OFERTAS VALIDADAS

- **Layout:** Título principal + Lista de Cards. Os 4 primeiros cards têm gradiente `#000310` a `#001130` com ícones azuis. O último card tem gradiente vermelho escuro `#800000` a `#B30000`.

**Título:**
> Vantagens para posicionar você à frente de qualquer concorrente

**Card 1 (Azul Dark):**
> *Background:* `linear-gradient(0deg, #000310 0%, #001130 100%)`
> *Ícone:* `/assets/icons/vantagens/01.svg` (Cadeado azul)
> **OFERTAS FECHADAS RODANDO NAS MAIORES PLATAFORMAS DO MUNDO COMO CLICKBANK, DIGISTORE E CARTPANDA**
> Desenvolvidas junto com alguns dos maiores dinossauros da escala na gringa.

**Card 2 (Azul Dark):**
> *Background:* `linear-gradient(0deg, #000310 0%, #001130 100%)`
> *Ícone:* `/assets/icons/vantagens/02.svg` (Lupa/busca azul)
> **OFERTAS VALIDADAS E PRONTAS PARA RECEBER TRÁFEGO NOS MAIORES NICHOS DO MERCADO INTERNACIONAL:**
> ED, Memória, Diabetes, Emagrecimento, Constipação, Dental, Visão, Tinnitus e Fungo.

**Card 3 (Azul Dark):**
> *Background:* `linear-gradient(0deg, #000310 0%, #001130 100%)`
> *Ícone:* `/assets/icons/vantagens/03.svg` (Caixa eletrônico/dinheiro azul)
> **INÍCIO DE SAQUE EM D+7 COM ESCALA EM D+2.**

**Card 4 (Azul Dark):**
> *Background:* `linear-gradient(0deg, #000310 0%, #001130 100%)`
> *Ícone:* `/assets/icons/vantagens/04.svg` (Calendário azul)
> **LIBERDADE TOTAL PARA APLICAR AS ESTRATÉGIAS DA CAIXA PRETA — SEM REEMBOLSO E SEM CHARGEBACK.**

**Card 5 (Destaque Vermelho):**
> *Background:* `linear-gradient(0deg, #800000 0%, #B30000 100%)`
> **NO PRIMEIRO ENCONTRO DA MENTORIA, 7 OFERTAS JÁ VALIDADAS SERÃO LIBERADAS PARA VOCÊ COMEÇAR A RODAR IMEDIATAMENTE.**

**CTA Final da Seção (Abaixo dos cards):**
> Desbloquear Meu Acesso à Caixa Preta (Usando o botão CTA Vermelho com moldura)

**Assets desta seção:**
| Elemento | Arquivo |
|---|---|
| Card 1 (Ícone Cadeado Azul) | `/assets/icons/vantagens/01.svg` |
| Card 2 (Ícone Lupa Azul) | `/assets/icons/vantagens/02.svg` |
| Card 3 (Ícone Caixa Azul) | `/assets/icons/vantagens/03.svg` |
| Card 4 (Ícone Calendário Azul) | `/assets/icons/vantagens/04.svg` |

---

### SEÇÃO 9 — ESTRATÉGIAS DA CAIXA PRETA (BÔNUS)

- **Background:** Claro / Branco

#### Layout / Estrutura:
```
[Container da seção — fundo claro]
  ├── [Bloco de Título] — texto centralizado, fundo branco
  │     Destaques: "AS ESTRATÉGIAS MAIS AGRESSIVAS" tem fundo vermelho #CF130C
  │     "Caixa Preta da Escala Gringa" usa gradiente texto: linear-gradient(90deg, #E8160E 0%, #6E1A1A 100%)
  │     "nunca foram compartilhadas abertamente no Brasil" usa color: #1962FF
  │
  ├── [Grid de 3 Cards Estratégia] — empilhados verticalmente, fundo escuro (#1A1A1A ou similar)
  │     Cada card: ícone amarelo/dourado no topo + título bold + descrição
  │
  ├── [Bloco "Iceberg"] — imagem do iceberg + textos centralizados
  │     Imagem: iceberg brilhante com fundo azul
  │     Texto: "Essa é apenas a PONTINHA do iceberg da caixa Preta."
  │       → "PONTINHA" tem fundo vermelho (#CF130C / #E8160E)
  │     Sub-texto: "E o melhor: você vai ver tudo acontecendo na tela..."
  │     Divisor horizontal
  │     Texto bold: "E ainda tem mais..."
  │
  ├── [Grid de 2 Cards Estratégia] — empilhados verticalmente, fundo escuro com borda vermelha sutil
  │     Card "Fechamento Amazon": ícone logo Amazon + título vermelho + descrição
  │     Card "Fechamento Manipulado": ícone chapéu+óculos + título vermelho + descrição
  │
  └── [CTA] — texto centralizado + botão vermelho com moldura
```

#### Cores do título:
| Elemento | Estilo |
|---|---|
| "AS ESTRATÉGIAS MAIS AGRESSIVAS" | `background: #CF130C; color: white;` (texto com fundo vermelho cheio) |
| "CAIXA PRETA DA ESCALA GRINGA" | `background: linear-gradient(90deg, #E8160E 0%, #6E1A1A 100%); -webkit-background-clip: text;` (gradiente no texto) |
| "nunca foram compartilhadas abertamente no Brasil." | `color: #1962FF;` (azul) |

#### Copy do título:
> Além dessas entregas ABSURDAS, você vai acessar **AS ESTRATÉGIAS MAIS AGRESSIVAS** *(fundo #CF130C)* da **CAIXA PRETA DA ESCALA GRINGA** *(gradiente texto 90deg #E8160E → #6E1A1A)* — as mesmas que os afiliados que escalam milhões por dia usam e que **nunca foram compartilhadas abertamente no Brasil.** *(color: #1962FF)*

#### Card 1 — Estratégia da Microlead Ilimitada:
> *Ícone:* 📄 (documento/página amarelo)
> *Título (bold, branco):* ESTRATÉGIA DA MICROLEAD ILIMITADA
> *Descrição:* Um passo a passo **COMPLETO** de **construção de microlead utilizando Pesquisa + ChatGpt** *(destaque dourado/amarelo, sublinhado)* para que qualquer pessoa, com menos de 2 minutos de trabalho, acerte de primeira a parte mais importante de um vídeo de venda.

#### Card 2 — Estratégia de Pressel Preview:
> *Ícone:* 📋 (clipboard amarelo)
> *Título (bold, branco):* ESTRATÉGIA DE PRESSEL PREVIEW
> *Descrição:* Capaz de fazer você **escalar 2X MAIS, mesmo rasgando 30% do seu dinheiro...** *(destaque dourado/amarelo, sublinhado)* Essa estratégia vai fazer você se sentir como um segurança de balada expulsando todo bêbado na porta que só vai entrar para dar problema para sua cabeça.

#### Card 3 — Estratégia do "Ad Gratuito":
> *Ícone:* 📢 (megafone amarelo)
> *Título (bold, branco):* ESTRATÉGIA DO "AD GRATUITO"
> *Descrição:* Template capaz de captar a atenção das pessoas 182% mais do que o seu concorrente e **fazer com que elas implorem para clicar no botão** *(bold)* - Estratégia que foi capaz de **aumentar a retenção na lead de 50% para 68%** *(destaque dourado/amarelo, sublinhado)* sem mudar nada no Script.

#### Bloco Iceberg (intermediário):
> *Imagem:* Iceberg brilhante (asset a fornecer)
> *Texto principal:* Essa é apenas a **PONTINHA** *(fundo vermelho #CF130C)* do iceberg da caixa Preta.
> *Sub-texto:* E o melhor: você vai ver tudo acontecendo na tela. Criativos, estratégias e decisões de escala — tudo explicado de forma simples para você copiar, rodar e escalar.
> *Divisor:* Linha horizontal curta centralizada
> *Texto bold:* **E ainda tem mais...**

#### Card 4 — Estratégia do Fechamento Amazon:
> *Background:* Escuro com borda vermelha sutil
> *Ícone:* Logo Amazon (asset)
> *Título:* **ESTRATÉGIA DO FECHAMENTO AMAZON** *(color: vermelho #E8160E ou gradiente)*
> *Descrição:* Como um simples aviso de 30 segundos dentro da VSL faz com que todo afiliado de fundo de funil passe fome. O sonho de todo afiliado que deseja escalar de verdade, pois otimiza apenas as vendas do topo.

#### Card 5 — Estratégia do Fechamento Manipulado:
> *Background:* Escuro com borda vermelha sutil
> *Ícone:* Chapéu + óculos (espião/hacker) (asset)
> *Título:* **ESTRATÉGIA DO FECHAMENTO MANIPULADO** *(color: vermelho #E8160E ou gradiente)*
> *Descrição:* Uma conversa entre mim e um dos maiores nomes da escala na gringa que resultou no fechamento mais apelativo da história dos nutracêuticos. Uma simples alteração que transcende a sofisticação inteira da sua VSL. Alerta: essa estratégia precisa ser utilizada com Cloaker porque ela é BlackHat para c*ralho.

#### CTA da seção:
> Texto acima: ACESSE AS ESTRATÉGIAS DOS AFILIADOS GRINGOS QUE FATURAM MAIS DE R$1 MILHÃO POR DIA.
> Botão: Desbloquear Meu Acesso à Caixa Preta (Botão Vermelho com moldura)

**Assets desta seção:**
| Elemento | Arquivo |
|---|---|
| Ícone documento/página | `/assets/icons/estrategias/01.svg` |
| Ícone clipboard | `/assets/icons/estrategias/02.svg` |
| Ícone megafone | `/assets/icons/estrategias/03.svg` |
| Imagem iceberg desktop | `/assets/backgrounds/iceberg-desktop.png` |
| Imagem iceberg mobile | `/assets/backgrounds/iceberg-mobile.png` |
| Logo Amazon | `/assets/icons/pitch/01.png` |
| Ícone chapéu+óculos | `/assets/icons/pitch/02.svg` |

---

### SEÇÃO 10 — PRICING / OFERTA (PITCH)

- **Background:** Escuro com gradiente avermelhado sutil

#### Layout / Estrutura:
```
[Container da seção — fundo escuro]
  ├── [Título centralizado acima] — texto uppercase branco
  │     "ACESSE AS ESTRATÉGIAS DOS AFILIADOS GRINGOS QUE FATURAM MAIS DE R$1 MILHÃO POR DIA."
  │
  └── [Container Grid — 2 colunas lado a lado]
        │
        ├── [Coluna Esquerda — Card de Preço]
        │     Background: gradiente vermelho escuro (do fundo da seção)
        │     ├── [Container 1: Logo + Texto]
        │     │     Logo "MCP" + texto "MENTORIA CAIXA PRETA"
        │     │
        │     ├── [Container 2: Textos de urgência]
        │     │     "NÃO PERCA MAIS TEMPO," (branco)
        │     │     "REALIZE A SUA INSCRIÇÃO" (vermelho/gradiente)
        │     │     "AGORA MESMO ANTES QUE AS 200 VAGAS ACABEM!" (branco, "ANTES" em vermelho)
        │     │
        │     ├── [Container 3: Bloco de Preço] — fundo branco, border-radius
        │     │     Texto menor: "Por: 12x de"
        │     │     Texto grande (destaque): "R$ 149,70"
        │     │     Texto menor: "ou apenas R$ 1.497,00 à vista!"
        │     │       → "R$ 1.497,00" em verde (#00C853 ou similar)
        │     │
        │     └── [Container 4: Botão CTA]
        │           Background: verde (#00C853 ou similar, tipo botão de checkout)
        │           Texto bold: "GARANTIR MINHA VAGA! →"
        │
        └── [Coluna Direita — Card de Urgência]
              Background: cinza escuro semi-transparente
              ├── [Bloco 1: Título]
              │     "Mas tem mais uma coisa..." (itálico, vermelho)
              │
              ├── [Bloco 2: Sub-texto]
              │     "Quem garantir a vaga enquanto essa live estiver no ar recebe duas
              │     vantagens que não estarão disponíveis depois:" (itálico, vermelho)
              │
              ├── [Bloco 3: Vantagem 1]
              │     🔒 "Acesso por apenas R$1.497" (bold) — "depois da live, o valor sobe
              │     para R$2.497. Sem exceção."
              │
              ├── [Bloco 4: Vantagem 2]
              │     🔒 "Entrada direta com CPA de $220 nas ofertas" (bold) — "enquanto quem
              │     entrar depois começa com $170, você já entra ganhando mais no leilão
              │     desde a primeira venda."
              │
              ├── [Divisor horizontal]
              │
              ├── [Bloco 5: Pergunta]
              │     "O que isso significa na prática?" (itálico, vermelho)
              │
              └── [Bloco 6: Resposta]
                    "Uma única venda como afiliado já paga o investimento inteiro na mentoria.
                    E a partir da segunda, é lucro." (bold, vermelho, "lucro." sublinhado)
```

#### Copy completa:

**Título da seção (acima do grid):**
> ACESSE AS ESTRATÉGIAS DOS AFILIADOS GRINGOS QUE FATURAM MAIS DE R$1 MILHÃO POR DIA.

**Coluna Esquerda — Card de Preço:**

> *Logo:* **MCP** + **MENTORIA CAIXA PRETA**
>
> NÃO PERCA MAIS TEMPO, **REALIZE A SUA INSCRIÇÃO** *(vermelho/gradiente)* AGORA MESMO **ANTES** *(vermelho)* QUE AS 200 VAGAS ACABEM!
>
> Por: 12x de
> **R$ 149,70** *(texto grande, destaque)*
> ou apenas **R$ 1.497,00** *(verde)* à vista!
>
> **CTA:** GARANTIR MINHA VAGA! → *(botão verde)*

**Coluna Direita — Card de Urgência:**

> *Mas tem mais uma coisa...* *(itálico, vermelho)*
>
> *Quem garantir a vaga enquanto essa live estiver no ar recebe duas vantagens que não estarão disponíveis depois:* *(itálico, vermelho)*
>
> 🔒 **Acesso por apenas R$1.497** — depois da live, o valor sobe para R$2.497. Sem exceção.
>
> 🔒 **Entrada direta com CPA de $220 nas ofertas** — enquanto quem entrar depois começa com $170, você já entra ganhando mais no leilão desde a primeira venda.
>
> *(divisor horizontal)*
>
> *O que isso significa na prática?* *(itálico, vermelho)*
>
> **Uma única venda como afiliado já paga o investimento inteiro na mentoria. E a partir da segunda, é *lucro*.** *(bold, vermelho, "lucro." sublinhado)*

**Assets desta seção:**
| Elemento | Arquivo |
|---|---|
| Logo MCP | `/assets/branding/logo-mcp-pitch.svg` |

---

### SEÇÃO 11 — FAQ (PERGUNTAS FREQUENTES)

**Título:**
> PERGUNTAS FREQUENTES

**Perguntas (cada uma é um accordion/expandível):**
> *Resposta placeholder (para todas):* "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

1. > Essa mentoria funciona para iniciantes?
2. > Eu preciso falar inglês para trabalhar como afiliado nos Estados Unidos?
3. > Eu preciso de muito dinheiro para começar?
4. > Quanto tempo eu tenho acesso ao conteúdo?
5. > É possível parcelar no boleto?
6. > Quando recebo acesso às ofertas validadas?
7. > Pode entrar com sócio?
8. > Tenho outras dúvidas que não encontrei aqui, quem pode me respondê-las?

---

### SEÇÃO 12 — CTA FINAL

- **Background:** Escuro (preto) + Elemento de brilho/glow verde sutil atrás do botão

#### Layout / Estrutura:
```
[Container da seção — fundo escuro]
  └── [Container centralizado]
        ├── [Texto de urgência superior]
        │     "NÃO PERCA MAIS TEMPO, REALIZE A SUA INSCRIÇÃO" (branco)
        │     "AGORA MESMO ANTES QUE AS 200 VAGAS ACABEM!" (amarelo/dourado #F2B705)
        │
        ├── [Bloco de Preço]
        │     "por 12x de R$ 149,70" (vermelho)
        │     "ou apenas R$ 1.497,00 à vista!" (branco)
        │
        └── [Botão CTA Verde]
              "GARANTIR MINHA VAGA! →"
              Botão com foco, background verde vibrante (#4CDE77 ou similar), texto preto com seta. Glow verde atrás.
```

**Copy completa:**
> NÃO PERCA MAIS TEMPO, REALIZE A SUA INSCRIÇÃO
> **AGORA MESMO ANTES QUE AS 200 VAGAS ACABEM!** *(amarelo)*
>
> **por 12x de R$ 149,70** *(vermelho grande)*
> ou apenas R$ 1.497,00 à vista!
>
> **CTA (botão verde):** GARANTIR MINHA VAGA! →

---

### SEÇÃO 13 — FOOTER

#### Layout / Estrutura:
```
[Container Footer]
  Background: Efeito Glassmorphism (`backdrop-filter: blur(10px) -webkit-backdrop-filter`, `background: rgba(255,255,255,0.05)`)
  Altura: 100px (Desktop), ajustável/menor para Mobile
  Alinhamento: Conteúdo centralizado vertical e horizontalmente
```

**Copy:**
> Todos os direitos reservados - Mentoria Caixa Preta

---

## Assets — Mapa Completo

> Todos os assets estão organizados em `public/assets/` seguindo a estrutura abaixo.
> Caminho de uso no código: `/assets/...` (Next.js serve de `public/` automaticamente).

### Estrutura de Pastas
```
public/assets/
├── backgrounds/
│   ├── hero-desktop.png       ← Seção 1 (Hero) — fundo desktop
│   ├── hero-mobile.png        ← Seção 1 (Hero) — fundo mobile
│   ├── section-2-center.svg   ← Seção 2 — elemento decorativo central
│   ├── section-3.png          ← Seção 3 (Brecha) — background
│   ├── card-pilares.png       ← Seção 7 (5 Pilares) — background dos cards
│   ├── dolar.png              ← Elemento decorativo (notas de dólar)
│   ├── iceberg-desktop.png    ← Seção 9 (Estratégias) — iceberg desktop
│   └── iceberg-mobile.png     ← Seção 9 (Estratégias) — iceberg mobile
│
├── branding/
│   └── logo-mcp-pitch.svg     ← Seção 10 (Pitch) — logo "MCP"
│
├── icons/
│   ├── pilares/               ← Seção 7 — ícones dos 5 pilares (dourados)
│   │   ├── 01.svg             ← Pilar #01: Engrenagem (Conteúdo/Direct Response)
│   │   ├── 02.svg             ← Pilar #02: Diamante (Acompanhamento premium)
│   │   ├── 03.svg             ← Pilar #03: Texto "NETFLIX" (Programa de vantagens)
│   │   ├── 04.svg             ← Pilar #04: Cadeado (Comunidade privada)
│   │   └── 05.svg             ← Pilar #05: Carteira/Dinheiro (Ranking de comissões)
│   │
│   ├── vantagens/             ← Seção 8 — ícones dos cards azuis
│   │   ├── 01.svg             ← Card 1: Cadeado (Ofertas fechadas)
│   │   ├── 02.svg             ← Card 2: Lupa/Busca (Ofertas validadas)
│   │   ├── 03.svg             ← Card 3: Caixa eletrônico (Saque D+7)
│   │   └── 04.svg             ← Card 4: Calendário (Liberdade total)
│   │
│   ├── estrategias/           ← Seção 9 — ícones dos cards de estratégia
│   │   ├── 01.svg             ← Estratégia 1: Documento/Página (Microlead)
│   │   ├── 02.svg             ← Estratégia 2: Clipboard (Pressel Preview)
│   │   └── 03.svg             ← Estratégia 3: Megafone (Ad Gratuito)
│   │
│   └── pitch/                 ← Seção 10 — ícones do bloco de pitch
│       ├── 01.png             ← Ícone Amazon (Estratégia Fechamento Amazon)
│       └── 02.svg             ← Chapéu+Óculos (Estratégia Fechamento Manipulado)
│
└── testimonials/              ← Seção 5 — screenshots de depoimentos WhatsApp
    ├── carousel-1/
    │   ├── 01.png
    │   ├── 02.png
    │   ├── 03.png
    │   ├── 04.png
    │   ├── 05.png
    │   └── 06.png
    └── carousel-2/
        ├── 01.png
        ├── 02.png
        ├── 03.png
        ├── 04.png
        ├── 05.png
        └── 06.png
```

### Referência Rápida por Seção

| Seção | Asset | Caminho |
|---|---|---|
| 1 (Hero) | Background Desktop | `/assets/backgrounds/hero-desktop.png` |
| 1 (Hero) | Background Mobile | `/assets/backgrounds/hero-mobile.png` |
| 2 (Problema) | Elemento central SVG | `/assets/backgrounds/section-2-center.svg` |
| 3 (Brecha) | Background | `/assets/backgrounds/section-3.png` |
| 5 (Depoimentos) | Carrossel 1 (6 imgs) | `/assets/testimonials/carousel-1/01-06.png` |
| 5 (Depoimentos) | Carrossel 2 (6 imgs) | `/assets/testimonials/carousel-2/01-06.png` |
| 7 (Pilares) | Background Card | `/assets/backgrounds/card-pilares.png` |
| 7 (Pilares) | 5 Ícones dourados | `/assets/icons/pilares/01-05.svg` |
| 8 (Vantagens) | 4 Ícones azuis | `/assets/icons/vantagens/01-04.svg` |
| 9 (Estratégias) | 3 Ícones dourados | `/assets/icons/estrategias/01-03.svg` |
| 9 (Estratégias) | Iceberg Desktop | `/assets/backgrounds/iceberg-desktop.png` |
| 9 (Estratégias) | Iceberg Mobile | `/assets/backgrounds/iceberg-mobile.png` |
| 9 (Estratégias) | Logo Amazon | `/assets/icons/pitch/01.png` |
| 9 (Estratégias) | Chapéu+Óculos | `/assets/icons/pitch/02.svg` |
| 10 (Pitch) | Logo MCP | `/assets/branding/logo-mcp-pitch.svg` |
| Decorativo | Notas de Dólar | `/assets/backgrounds/dolar.png` |

---

## Notas Técnicas

### Moldura Flutuante do Botão (Efeito "Borda Descolada")
O botão de CTA possui uma moldura com gradiente que "flutua" ao redor dele, como uma borda externa separada do elemento. Como CSS não suporta `border-image` com `border-radius`, a implementação será:

```tsx
{/* Wrapper externo = moldura */}
<div className="relative p-[3px] rounded-xl bg-gradient-to-b from-[#D42727] to-[#720000]">
  {/* Gap preto entre moldura e botão */}
  <div className="bg-black rounded-[10px] p-[4px]">
    {/* Botão real */}
    <button className="w-full bg-gradient-to-b from-[#D42727] to-[#720000] rounded-lg px-8 py-4 text-white font-bold">
      DESBLOQUEAR MEU ACESSO À CAIXA PRETA →
    </button>
  </div>
</div>
```

### Texto com Gradiente (CSS)
```css
.text-gradient-hero {
  background: linear-gradient(90deg, #E8160E 0%, #FFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```
