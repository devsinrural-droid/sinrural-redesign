import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sistema SinRural — Operação digital integrada",
  description:
    "Apresentação demonstrativa: como funcionaria o sistema de gestão integrado pro Sindicato dos Produtores Rurais de Passos.",
  robots: { index: false, follow: false }, // pitch page, não indexar
};

const REVENUE_SOURCES = [
  {
    id: "01",
    title: "Mensalidade associativa",
    estimate: "R$ 50–125 mil",
    period: "/ mês",
    detail:
      "~1.300 produtores associados pagando contribuição mensal. Receita recorrente, previsível, base do orçamento.",
    risk: "Inadimplência típica de 10–15%",
  },
  {
    id: "02",
    title: "Serviços por departamento",
    estimate: "Volume alto",
    period: "(variável)",
    detail:
      "Taxa por NFe de produtor, ITR, processo trabalhista, encaminhamento PRONAF, FCEI, contratos. Possivelmente metade do faturamento.",
    risk: "Capacidade limitada da secretaria",
  },
  {
    id: "03",
    title: "Comissão de leilão",
    estimate: "1–3%",
    period: "do arrematado",
    detail:
      "Leilões mistos quinzenais e leilões de leite mensais geram comissão. Multpix pega parte, sindicato pega parte. Volume gira centenas de milhares por edição.",
    risk: "Dependência do Multpix",
  },
  {
    id: "04",
    title: "Patrocínio + bilheteria Expass",
    estimate: "R$ 35M+",
    period: "em negócios 2025",
    detail:
      "Carro-chefe institucional. 70 mil visitantes, patrocínio de empresas, bilheteria, naming de espaços, exposição de raças.",
    risk: "Ciclo anual longo, gestão manual",
  },
];

const VALUE_MODULES = [
  {
    code: "A",
    name: "Cobrança Pix recorrente + painel de inadimplência",
    pain: "Inadimplência manual de 15% — tesoureiro perde tempo perseguindo cobrança no telefone",
    solution:
      "Cobrança Pix automática via boleto/QR. Lembrete em D-3, D-1, D+5 via WhatsApp. Painel mostra quem está em dia, em atraso, suspenso.",
    roi: "Inadimplência 15% → 5% num sindicato de 1.300 = aprox. R$ 100 mil/ano recuperado",
    priority: "ALTA",
  },
  {
    code: "B",
    name: "Self-service de serviços por departamento",
    pain: "Produtor liga, secretária anota, secretária emite, secretária cobra — 4 etapas pra cada NFe",
    solution:
      "Produtor solicita NFe pelo site/WhatsApp, paga taxa via Pix, secretária só emite. Sistema atende 3× mais sem contratar gente.",
    roi: "Mesma equipe atende 3× mais demanda. Capacidade de receita por hora de secretaria sobe 3×",
    priority: "ALTA",
  },
  {
    code: "C",
    name: "Bilheteria online da Expass + CRM patrocinador",
    pain: "Bilheteria física, ingresso só na entrada, base de patrocinador num caderno",
    solution:
      "Ingresso online via Pix 90 dias antes. CRM com cada empresa, estande comprado, valor, ano, contato — renovação fica fácil.",
    roi: "Receita antecipada (~R$ X mil) + reativação de patrocinador 30% maior",
    priority: "MÉDIA",
  },
  {
    code: "D",
    name: "Portal do associado",
    pain: "1.300 associados ligando pra pedir 2ª via, comprovante, declaração",
    solution:
      "Login com CPF, dashboard com mensalidade, histórico de serviços, downloads de declaração e CCIR. Carteirinha digital.",
    roi: "Reduz volume de ligações 40–60%. Secretária libera tempo pra serviço cobrável",
    priority: "ALTA",
  },
  {
    code: "E",
    name: "Página de leilão ao vivo + WhatsApp bid",
    pain: "Leilão usa Multpix (comissão) ou WhatsApp manual (caos da secretária)",
    solution:
      "Stream embedado, lote atual visível, CTA WhatsApp com texto pré-preenchido, lote atualizado pelo celular durante pregão.",
    roi: "Captura audiência própria. Em 1–2 anos, possível reduzir dependência Multpix",
    priority: "MÉDIA",
  },
  {
    code: "F",
    name: "Comunicação segmentada (newsletter + WhatsApp Business)",
    pain: "Newsletter inexistente. Comunicação só por Instagram e site lento",
    solution:
      "Lista por interesse (gado de corte, leite, café, grãos, geral). Disparo por evento (Expass, leilão, edital PRONAF).",
    roi: "Engagement direto. Cada campanha relevante = +X% adesão",
    priority: "MÉDIA",
  },
];

const MARKET = [
  {
    name: "SindApp",
    by: "FAEMG / SENAR-MG",
    pricing: "Subsidiado (filiados)",
    target: "Sindicato rural patronal",
    coverage: "8 módulos: Eleição, Associados, Financeiro, Patrimônio, Produtores, Serviços, Eventos, Portal",
    pros: "Oficial, gratuito ou perto disso. Ecossistema FAEMG.",
    cons: "Lançado nov/2024, ainda em piloto (2 SPRs). Time-to-value lento. Dependência política da FAEMG.",
    threat: "ALTA",
  },
  {
    name: "SindicatoWeb",
    by: "Privado",
    pricing: "R$ 254–497 / mês",
    target: "Sindicato em geral (laboral + patronal)",
    coverage: "Cadastro, cobrança Pix/boleto/cartão, portal do associado, eventos, cursos",
    pros: "Pricing transparente. Módulo de eventos.",
    cons: "Vocabulário de sindicato laboral, não rural. Não fala ITR/CCIR/CSR.",
    threat: "MÉDIA",
  },
  {
    name: "HiGestor",
    by: "Privado",
    pricing: "Sob consulta (R$ 400–1.500/mês est.)",
    target: "Sindicato laboral / associações",
    coverage: "Portal do associado, votação digital, carteirinha digital, CRM segmentado",
    pros: "Funcionalidades modernas (votação, carteirinha).",
    cons: "Sem foco rural. Sem integração Multpix.",
    threat: "BAIXA",
  },
  {
    name: "Kad Sindicato Rural",
    by: "Enkad",
    pricing: "R$ 295 one-shot",
    target: "Sindicato rural",
    coverage: "Cadastros, financeiro, mensalidade, planos de saúde",
    pros: "Barato, foco rural.",
    cons: "Desktop legado. Sem web/mobile/Pix. Tecnicamente obsoleto.",
    threat: "BAIXA",
  },
  {
    name: "Aliare / Siagri / TOTVS",
    by: "ERP enterprise",
    pricing: "R$ 3–15 mil / mês",
    target: "Cooperativa / agroindústria",
    coverage: "ERP completo, NFe, estoque, DRE",
    pros: "Robustos, completos.",
    cons: "Enterprise. Vocabulário cooperativa. Fora do bolso de SPR de 1.300 associados.",
    threat: "ZERO (mercado errado)",
  },
];

const ROADMAP = [
  {
    phase: "FASE 1",
    when: "Agora",
    title: "Site institucional + CMS notícias",
    items: [
      "Identidade visual nova (verde + vermelho do logo)",
      "HTTPS, mobile-first, performance",
      "CMS Sanity pra notícias e eventos",
      "Página /institucional, /servicos, /noticias, /eventos",
      "Página /leilao/ao-vivo com WhatsApp",
      "Área do associado (UI inicial — sem auth)",
    ],
    deliverable: "Pronto pra apresentar",
    pricing: "One-shot",
  },
  {
    phase: "FASE 2",
    when: "+3 a 6 meses",
    title: "Sistema MVP — Cobrança e Self-service",
    items: [
      "Módulo A — Cobrança Pix recorrente + painel inadimplência",
      "Módulo B — Self-service de serviços (NFe, ITR, contratos)",
      "Módulo D — Portal do associado (login real, carteirinha, 2ª via)",
      "Integração WhatsApp Business",
    ],
    deliverable: "Sindicato recupera receita perdida + escala atendimento",
    pricing: "Por módulo",
  },
  {
    phase: "FASE 3",
    when: "+6 a 12 meses",
    title: "Eventos e Comunicação",
    items: [
      "Módulo C — Bilheteria online Expass + CRM patrocinador",
      "Módulo E — Página de leilão ao vivo conectada com edital + lote",
      "Módulo F — Comunicação segmentada (newsletter por interesse)",
      "Dashboard executivo do presidente / tesoureiro",
    ],
    deliverable: "Operação Expass profissionalizada + receita antecipada",
    pricing: "Por módulo",
  },
];

const POSITIONING = [
  {
    aspect: "Tempo até estar funcionando",
    sinrural: "Fase 1 em 3 semanas. MVP em 4 meses.",
    sindapp: "Em piloto desde nov/2024 com 2 SPRs. Adesão depende da fila FAEMG.",
    winner: "Sistema SinRural",
  },
  {
    aspect: "Vocabulário de produtor rural",
    sinrural: "ITR, CCIR, FCEI, CSR, ADA-IBAMA, NFe de produtor — nativo",
    sindapp: "Foco SPR, mas é gestão sindical genérica. Boa cobertura, sem customização local.",
    winner: "Empate",
  },
  {
    aspect: "Integração Multpix (leilão)",
    sinrural: "Página dedicada com lance via WhatsApp + Multpix em paralelo",
    sindapp: "Sem módulo de leilão",
    winner: "Sistema SinRural",
  },
  {
    aspect: "Customização para SinRural",
    sinrural: "Branding total, fluxos pensados pra Passos, marca do parque",
    sindapp: "Multi-tenant — visual padronizado FAEMG",
    winner: "Sistema SinRural",
  },
  {
    aspect: "Custo total no ano 1",
    sinrural: "Maior — investimento próprio",
    sindapp: "Subsidiado / próximo de zero pra filiados",
    winner: "SindApp",
  },
  {
    aspect: "Independência política",
    sinrural: "Sindicato dono da operação",
    sindapp: "Dependência do roadmap FAEMG. Mudança de gestão pode afetar prioridades.",
    winner: "Sistema SinRural",
  },
];

export default function SistemaPage() {
  return (
    <>
      {/* ============================== Top Bar ============================== */}
      <div className="sticky top-0 z-50 bg-mata text-white border-b border-vermelho">
        <div className="container-prose flex items-center justify-between h-12 text-[12px]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 hover:text-cafe transition"
          >
            <span aria-hidden>←</span> Voltar pro site
          </Link>
          <div className="hidden md:flex items-center gap-5 text-white/65 uppercase tracking-[0.18em] text-[11px]">
            <a href="#receita" className="hover:text-cafe">01 · Receita</a>
            <a href="#valor" className="hover:text-cafe">02 · Valor</a>
            <a href="#mercado" className="hover:text-cafe">03 · Mercado</a>
            <a href="#modulos" className="hover:text-cafe">04 · Módulos</a>
            <a href="#roadmap" className="hover:text-cafe">05 · Roadmap</a>
            <a href="#vs-sindapp" className="hover:text-cafe">06 · vs SindApp</a>
          </div>
          <a
            href="/apresentacao-sinrural.pdf"
            download
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-vermelho text-white text-[11px] font-bold uppercase tracking-[0.16em] hover:bg-tinto transition print:hidden"
          >
            <span aria-hidden>⬇</span> Baixar PDF
          </a>
        </div>
      </div>

      {/* ============================== Hero ============================== */}
      <section className="bg-cream relative overflow-hidden border-b border-foreground/8">
        <div className="absolute top-0 right-0 w-2 h-40 bg-vermelho" aria-hidden />
        <div className="absolute top-0 left-0 right-0 h-1 bg-sindicato" aria-hidden />

        <div className="container-prose relative py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-[11px] uppercase tracking-[0.24em] text-vermelho font-bold mb-6">
              Apresentação demonstrativa · Sindicato dos Produtores Rurais de Passos
            </p>

            <h1 className="font-display text-[3rem] md:text-[5.25rem] leading-[1] tracking-[-0.02em] text-mata">
              Operação digital{" "}
              <span className="italic text-sindicato">integrada</span>{" "}
              pra um sindicato de 60 anos.
            </h1>

            <p className="text-lg md:text-xl leading-[1.6] text-foreground/75 mt-8 max-w-3xl">
              Hoje, a SinRural opera com planilha + sistema contábil legado +
              Multpix + WhatsApp manual. Ganha dinheiro de mensalidade,
              serviços, leilões e Expass — mas perde receita em inadimplência,
              gargalo de secretaria e bilheteria física.
              <br />
              <br />
              Esta apresentação mostra o que poderia ser construído por cima do
              site novo: <strong className="text-mata">um sistema operacional próprio do sindicato</strong>,
              em fases, sem comprometer o que já funciona.
            </p>

            <div className="flex flex-wrap gap-4 mt-10 text-[13px]">
              <div className="px-4 py-2 bg-white border border-mata/12 rounded-full">
                <span className="text-foreground/60">Lançamento previsto:</span>{" "}
                <strong className="text-mata">Fase 1 em 3 semanas</strong>
              </div>
              <div className="px-4 py-2 bg-white border border-mata/12 rounded-full">
                <span className="text-foreground/60">MVP do sistema:</span>{" "}
                <strong className="text-mata">+4 meses</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== 01. Receita ============================== */}
      <section id="receita" className="py-20 md:py-28 bg-white">
        <div className="container-prose">
          <SectionHeader
            number="01"
            kicker="Diagnóstico financeiro"
            title="Como o SinRural ganha dinheiro hoje"
            lede="Quatro fontes principais de receita. Algumas previsíveis, outras com gargalo de capacidade ou dependência de terceiro."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
            {REVENUE_SOURCES.map((src) => (
              <div
                key={src.id}
                className="bg-white border border-foreground/10 rounded-xl p-7 hover:border-sindicato hover:shadow-[0_8px_24px_-8px_rgba(0,97,54,0.18)] transition-all"
              >
                <div className="flex items-baseline justify-between mb-5">
                  <span className="font-mono text-xs tracking-widest text-foreground/40">
                    / {src.id}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-vermelho font-bold">
                    Risco: {src.risk}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-mata mb-3 leading-tight">
                  {src.title}
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-display text-4xl font-bold text-sindicato">
                    {src.estimate}
                  </span>
                  <span className="text-[13px] text-foreground/55">
                    {src.period}
                  </span>
                </div>
                <p className="text-[14.5px] text-foreground/70 leading-[1.6]">
                  {src.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-cream border-l-4 border-vermelho p-6 rounded-r-xl">
            <p className="text-[15px] text-mata leading-[1.6] max-w-3xl">
              <strong>Em uma frase:</strong> a SinRural arrecada bem, mas{" "}
              <em>perde tempo gerenciando manualmente</em> as receitas que poderiam
              ser automatizadas. Aqui é onde um sistema cria valor financeiro real.
            </p>
          </div>
        </div>
      </section>

      {/* ============================== 02. Valor ============================== */}
      <section id="valor" className="py-20 md:py-28 bg-mata text-white relative overflow-hidden">
        <div
          className="absolute top-1/2 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.08] blur-3xl"
          style={{ background: "var(--color-cafe)" }}
          aria-hidden
        />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-vermelho" aria-hidden />

        <div className="container-prose relative">
          <SectionHeader
            number="02"
            kicker="Tese central"
            title="Onde um sistema cria valor financeiro"
            lede="Site bonito não muda receita do sindicato. Sistema mexe na operação. Cada módulo ataca uma frente concreta — recuperação de inadimplência, escala de atendimento, antecipação de receita."
            dark
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-14">
            {VALUE_MODULES.map((m) => (
              <div
                key={m.code}
                className="bg-white/5 border border-white/12 rounded-xl p-7 hover:bg-white/8 transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-vermelho text-white font-bold text-sm">
                    {m.code}
                  </span>
                  <span
                    className={[
                      "px-2.5 py-1 rounded text-[10.5px] uppercase tracking-[0.14em] font-bold",
                      m.priority === "ALTA"
                        ? "bg-vermelho text-white"
                        : "bg-cafe/25 text-cafe",
                    ].join(" ")}
                  >
                    {m.priority}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white leading-tight mb-4">
                  {m.name}
                </h3>
                <div className="space-y-3 text-[14px] leading-[1.55]">
                  <div>
                    <span className="text-cafe text-[11px] uppercase tracking-[0.16em] font-bold">
                      Dor atual
                    </span>
                    <p className="text-white/72 mt-1">{m.pain}</p>
                  </div>
                  <div>
                    <span className="text-cafe text-[11px] uppercase tracking-[0.16em] font-bold">
                      Solução
                    </span>
                    <p className="text-white/85 mt-1">{m.solution}</p>
                  </div>
                  <div className="pt-3 border-t border-white/10">
                    <span className="text-cafe text-[11px] uppercase tracking-[0.16em] font-bold">
                      ROI
                    </span>
                    <p className="text-white font-medium mt-1">{m.roi}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== 03. Mercado ============================== */}
      <section id="mercado" className="py-20 md:py-28 bg-cream">
        <div className="container-prose">
          <SectionHeader
            number="03"
            kicker="Análise competitiva"
            title="Quais sistemas existem hoje pra sindicatos rurais"
            lede="Mercado fragmentado, com 5 categorias. Atenção especial pro SindApp da FAEMG: oficial, gratuito, mas em piloto desde nov/2024 e dependente de fila."
          />

          <div className="mt-14 space-y-4">
            {MARKET.map((m) => (
              <div
                key={m.name}
                className="bg-white border border-foreground/10 rounded-xl p-6 md:p-7"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-mata">{m.name}</h3>
                      <ThreatBadge level={m.threat} />
                    </div>
                    <p className="text-[12px] text-foreground/55 uppercase tracking-[0.12em]">
                      {m.by}
                    </p>
                    <p className="text-[15px] font-bold text-vermelho mt-3">
                      {m.pricing}
                    </p>
                    <p className="text-[12px] text-foreground/60 mt-1">
                      {m.target}
                    </p>
                  </div>

                  <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-4 text-[14px]">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.14em] text-sindicato font-bold mb-2">
                        Cobertura
                      </p>
                      <p className="text-foreground/75 leading-[1.55]">
                        {m.coverage}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.14em] text-sindicato font-bold mb-2">
                        Pontos fortes
                      </p>
                      <p className="text-foreground/75 leading-[1.55]">{m.pros}</p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.14em] text-vermelho font-bold mb-2">
                        Limitações
                      </p>
                      <p className="text-foreground/75 leading-[1.55]">{m.cons}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border-l-4 border-sindicato p-6 rounded-r-xl">
              <p className="text-[11px] uppercase tracking-[0.18em] text-sindicato font-bold mb-2">
                Conclusão de mercado
              </p>
              <p className="text-[15px] text-mata leading-[1.6]">
                Nenhum player cobre <strong>vocabulário de produtor rural</strong>{" "}
                + <strong>integração Multpix/WhatsApp</strong> + <strong>portal Pix-first</strong>.
                Existe nicho.
              </p>
            </div>
            <div className="bg-white border-l-4 border-vermelho p-6 rounded-r-xl">
              <p className="text-[11px] uppercase tracking-[0.18em] text-vermelho font-bold mb-2">
                Atenção
              </p>
              <p className="text-[15px] text-mata leading-[1.6]">
                <strong>SindApp (FAEMG)</strong> é o concorrente real.
                Subsidiado, oficial, mas em piloto desde nov/2024. SinRural é
                filiado FAEMG — vai receber a oferta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== 04. Módulos do Sistema SinRural ============================== */}
      <section id="modulos" className="py-20 md:py-28 bg-white">
        <div className="container-prose">
          <SectionHeader
            number="04"
            kicker="Sistema SinRural"
            title="Módulos do sistema próprio do sindicato"
            lede="Construído sob medida pro vocabulário de produtor rural. Sem dependência de FAEMG. Integra com o que já funciona (Multpix, WhatsApp). Modular — sindicato decide o que entra primeiro."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUE_MODULES.map((m) => (
              <div
                key={m.code}
                className="bg-cream border border-foreground/10 rounded-xl p-6 hover:bg-white hover:border-sindicato hover:shadow-[0_12px_32px_-12px_rgba(0,97,54,0.2)] transition-all flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-sindicato text-white font-bold text-sm">
                    {m.code}
                  </span>
                  <span
                    className={[
                      "text-[10.5px] uppercase tracking-[0.14em] font-bold",
                      m.priority === "ALTA" ? "text-vermelho" : "text-foreground/55",
                    ].join(" ")}
                  >
                    Prioridade {m.priority.toLowerCase()}
                  </span>
                </div>
                <h3 className="font-bold text-mata text-[17px] leading-tight mb-3">
                  {m.name}
                </h3>
                <p className="text-[13.5px] text-foreground/65 leading-[1.55] flex-1">
                  {m.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== 05. Roadmap ============================== */}
      <section id="roadmap" className="py-20 md:py-28 bg-cream">
        <div className="container-prose">
          <SectionHeader
            number="05"
            kicker="Plano de implementação"
            title="Três fases. Cada uma vendida separadamente."
            lede="Sindicato decide o ritmo. Fase 1 é o site, vendido agora. Fase 2 e 3 são módulos do sistema, vendidos quando fizer sentido. Sem comprometimento de tudo de uma vez."
          />

          <div className="mt-14 space-y-6">
            {ROADMAP.map((r, i) => (
              <div
                key={r.phase}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-white border border-foreground/10 rounded-xl p-7 md:p-9"
              >
                <div className="md:col-span-3">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={[
                        "px-3 py-1 rounded text-[11px] uppercase tracking-[0.18em] font-bold",
                        i === 0
                          ? "bg-vermelho text-white"
                          : "bg-sindicato/15 text-sindicato",
                      ].join(" ")}
                    >
                      {r.phase}
                    </span>
                  </div>
                  <p className="text-[12px] uppercase tracking-[0.16em] text-foreground/55 font-mono">
                    {r.when}
                  </p>
                  <p className="text-[12px] text-foreground/55 mt-1">
                    Cobrança: <strong className="text-mata">{r.pricing}</strong>
                  </p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-2xl font-bold text-mata mb-4 leading-tight">
                    {r.title}
                  </h3>
                  <ul className="space-y-2 mb-5">
                    {r.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[14.5px] text-foreground/75"
                      >
                        <span className="text-sindicato font-bold mt-0.5" aria-hidden>
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-cafe-cream border-l-3 border-cafe pl-4 py-2 rounded-r">
                    <p className="text-[12px] text-cafe uppercase tracking-[0.14em] font-bold mb-1">
                      Resultado pro sindicato
                    </p>
                    <p className="text-[14.5px] text-mata">{r.deliverable}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== 06. vs SindApp ============================== */}
      <section id="vs-sindapp" className="py-20 md:py-28 bg-mata text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-vermelho" aria-hidden />

        <div className="container-prose relative">
          <SectionHeader
            number="06"
            kicker="Posicionamento"
            title="Sistema próprio vs SindApp da FAEMG"
            lede="A pergunta honesta que o board vai fazer: por que pagar quando tem opção subsidiada da federação? Resposta: depende do que vocês priorizam — tempo, controle, customização ou custo zero."
            dark
          />

          <div className="mt-14 overflow-x-auto">
            <table className="w-full text-[14px] border-collapse">
              <thead>
                <tr className="border-b-2 border-vermelho">
                  <th className="text-left py-4 pr-4 text-cafe text-[11px] uppercase tracking-[0.18em] font-bold">
                    Critério
                  </th>
                  <th className="text-left py-4 px-4 text-cafe text-[11px] uppercase tracking-[0.18em] font-bold">
                    Sistema SinRural
                  </th>
                  <th className="text-left py-4 px-4 text-cafe text-[11px] uppercase tracking-[0.18em] font-bold">
                    SindApp (FAEMG)
                  </th>
                  <th className="text-left py-4 pl-4 text-cafe text-[11px] uppercase tracking-[0.18em] font-bold">
                    Vence
                  </th>
                </tr>
              </thead>
              <tbody>
                {POSITIONING.map((p, i) => (
                  <tr
                    key={p.aspect}
                    className={i < POSITIONING.length - 1 ? "border-b border-white/10" : ""}
                  >
                    <td className="py-5 pr-4 text-white font-semibold">{p.aspect}</td>
                    <td className="py-5 px-4 text-white/75 leading-[1.5]">{p.sinrural}</td>
                    <td className="py-5 px-4 text-white/75 leading-[1.5]">{p.sindapp}</td>
                    <td className="py-5 pl-4">
                      <span
                        className={[
                          "inline-block px-2.5 py-1 rounded text-[11px] uppercase tracking-[0.14em] font-bold whitespace-nowrap",
                          p.winner === "Sistema SinRural"
                            ? "bg-vermelho text-white"
                            : p.winner === "SindApp"
                              ? "bg-cafe text-mata"
                              : "bg-white/15 text-white",
                        ].join(" ")}
                      >
                        {p.winner}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 bg-white/5 border border-white/12 rounded-xl p-7">
            <p className="text-cafe text-[11px] uppercase tracking-[0.18em] font-bold mb-3">
              Recomendação honesta
            </p>
            <p className="text-[16px] leading-[1.7] text-white/90 max-w-3xl">
              Se o sindicato prioriza <strong>custo zero acima de tudo</strong>, espere o
              SindApp amadurecer e adira via convênio FAEMG.
              <br />
              <br />
              Se o sindicato prioriza <strong>independência operacional</strong>,
              <strong> identidade própria</strong>, <strong>integração com Multpix/WhatsApp</strong>{" "}
              e <strong>velocidade de implementação</strong>, faz sentido investir
              num sistema próprio. A escolha não é técnica — é estratégica.
            </p>
          </div>
        </div>
      </section>

      {/* ============================== CTA ============================== */}
      <section className="py-20 md:py-28 bg-cream relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-vermelho" aria-hidden />

        <div className="container-prose relative">
          <div className="max-w-4xl">
            <p className="text-[11px] uppercase tracking-[0.24em] text-vermelho font-bold mb-6">
              Próximos passos
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight text-mata">
              Fase 1 já está pronta.{" "}
              <span className="italic text-sindicato">
                Resta o sindicato decidir.
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
              <div className="bg-white border border-foreground/10 rounded-xl p-6">
                <p className="text-[11px] uppercase tracking-[0.18em] text-vermelho font-bold mb-3">
                  Decisão A
                </p>
                <h3 className="font-bold text-mata text-lg mb-2">
                  Aprova o site (Fase 1)
                </h3>
                <p className="text-[14px] text-foreground/70 leading-[1.55]">
                  Lança em 3 semanas. Resolve o problema mais urgente — site
                  HTTPS, mobile, CMS de notícias.
                </p>
              </div>
              <div className="bg-white border border-foreground/10 rounded-xl p-6">
                <p className="text-[11px] uppercase tracking-[0.18em] text-vermelho font-bold mb-3">
                  Decisão B
                </p>
                <h3 className="font-bold text-mata text-lg mb-2">
                  Pré-aprova Fase 2
                </h3>
                <p className="text-[14px] text-foreground/70 leading-[1.55]">
                  Sinaliza interesse no sistema MVP (cobrança Pix + self-service).
                  Começamos especificação enquanto Fase 1 está no ar.
                </p>
              </div>
              <div className="bg-white border border-foreground/10 rounded-xl p-6">
                <p className="text-[11px] uppercase tracking-[0.18em] text-vermelho font-bold mb-3">
                  Decisão C
                </p>
                <h3 className="font-bold text-mata text-lg mb-2">
                  Aguarda SindApp
                </h3>
                <p className="text-[14px] text-foreground/70 leading-[1.55]">
                  Caminho conservador. Fase 1 só, sistema próprio fica em standby
                  até FAEMG entregar SindApp pleno.
                </p>
              </div>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-4">
              <a
                href="/apresentacao-sinrural.pdf"
                download
                className="btn-primary"
              >
                <span aria-hidden>⬇</span> Baixar apresentação (PDF)
              </a>
              <Link href="/" className="btn-secondary">
                Voltar pra demonstração do site
              </Link>
              <a
                href="https://wa.me/553535292650"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outlined"
              >
                Conversar agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== Footer ============================== */}
      <footer className="bg-mata text-white border-t-4 border-vermelho">
        <div className="container-prose py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[12px] text-white/55">
          <p>Apresentação demonstrativa · Sistema SinRural · v1</p>
          <p className="font-mono tracking-[0.18em] uppercase">
            Confidencial · uso interno
          </p>
        </div>
      </footer>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Helpers

function SectionHeader({
  number,
  kicker,
  title,
  lede,
  dark,
}: {
  number: string;
  kicker: string;
  title: string;
  lede: string;
  dark?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-5">
        <div
          className={[
            "flex items-baseline gap-4 mb-4",
            dark ? "text-cafe" : "text-vermelho",
          ].join(" ")}
        >
          <span className="font-mono text-[12px] tracking-[0.2em]">/ {number}</span>
          <span className="text-[11px] uppercase tracking-[0.22em] font-bold">
            {kicker}
          </span>
        </div>
        <h2
          className={[
            "text-[2.25rem] md:text-[3rem] font-bold leading-[1.05] tracking-tight",
            dark ? "text-white" : "text-mata",
          ].join(" ")}
        >
          {title}
        </h2>
      </div>
      <div className="lg:col-span-6 lg:col-start-7 flex items-end">
        <p
          className={[
            "text-[1.05rem] leading-[1.65] max-w-xl",
            dark ? "text-white/75" : "text-foreground/70",
          ].join(" ")}
        >
          {lede}
        </p>
      </div>
    </div>
  );
}

function ThreatBadge({ level }: { level: string }) {
  const styles =
    level === "ALTA"
      ? "bg-vermelho text-white"
      : level === "MÉDIA"
        ? "bg-cafe text-mata"
        : level === "BAIXA"
          ? "bg-sindicato/20 text-sindicato"
          : "bg-foreground/10 text-foreground/60";

  return (
    <span
      className={[
        "px-2 py-0.5 rounded text-[10px] uppercase tracking-[0.14em] font-bold whitespace-nowrap",
        styles,
      ].join(" ")}
    >
      Ameaça {level.toLowerCase()}
    </span>
  );
}
