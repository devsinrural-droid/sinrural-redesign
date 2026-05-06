import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Proposta · Plataforma Digital SinRural",
  description:
    "Proposta de redesign do site institucional + plataforma operacional digital pro Sindicato dos Produtores Rurais de Passos.",
  robots: { index: false, follow: false },
};

const TODAY_PROBLEMS = [
  {
    title: "Site institucional de 2010",
    detail:
      "HTTP puro, sem certificado de segurança. Layout fixo, ruim no celular. URLs como /institucional/3/institucional2 que ninguém consegue compartilhar.",
  },
  {
    title: "Produtor liga pra cada documento",
    detail:
      "2ª via de boleto, declaração de associado, comprovante de pagamento, histórico de serviço. Tudo passa pela secretaria por telefone. Sem self-service.",
  },
  {
    title: "Notícias atualizadas com dificuldade",
    detail:
      "A secretaria depende de terceiros pra postar comunicado, edital, calendário de leilão. Comunicação direta só sai por Instagram.",
  },
  {
    title: "Expass sem bilheteria nem CRM",
    detail:
      "70 mil visitantes na edição 2025, R$ 35 milhões em negócios — mas ingresso vendido só na entrada e patrocínio renovado por contato manual ano após ano.",
  },
  {
    title: "Leilão dependente de plataforma externa",
    detail:
      "Toda transmissão e fluxo de lance acontece numa plataforma terceirizada. Sindicato perde audiência própria e branding fica de fora.",
  },
  {
    title: "Sem área do associado",
    detail:
      "1.300 produtores associados não têm onde entrar. Não há login, não há painel, não há histórico. Toda relação digital é feita por WhatsApp manual.",
  },
];

const PHASE1_DELIVERABLES = [
  {
    icon: "🌐",
    title: "Site institucional moderno",
    items: [
      "HTTPS · domínio próprio",
      "Mobile-first (perfeito no celular do produtor no campo)",
      "Identidade visual baseada no logo institucional",
      "Páginas: Home · Institucional · Diretoria · Serviços · Notícias · Eventos · Contato",
    ],
  },
  {
    icon: "📰",
    title: "Sistema de publicação (CMS)",
    items: [
      "Secretaria posta notícia, evento, edital pelo celular",
      "Sem precisar de desenvolvedor pra atualizar conteúdo",
      "Capa, texto, foto, categoria — interface simples, em português",
      "Histórico completo organizado por categoria e data",
    ],
  },
  {
    icon: "📅",
    title: "Calendário de eventos e leilões",
    items: [
      "Próximos leilões com data, lotes e edital",
      "Hub dedicado da Expass Agro com agenda da feira",
      "Página de transmissão ao vivo do leilão",
      "Histórico de edições passadas com fotos e resultados",
    ],
  },
  {
    icon: "📱",
    title: "WhatsApp integrado",
    items: [
      "Botão flutuante de conversa em todas as páginas",
      "Mensagem pré-preenchida por contexto (lance no leilão, dúvida no Jurídico, etc.)",
      "Atendimento direto sem passar por formulário burocrático",
    ],
  },
  {
    icon: "🔐",
    title: "Área do associado (interface inicial)",
    items: [
      "Tela de login pronta com identidade visual",
      "Estrutura preparada pra crescer (Fase 2 ativa as funções)",
      "Visualmente comunica modernidade e cuidado com o produtor",
    ],
  },
  {
    icon: "🚀",
    title: "Hospedagem profissional incluída",
    items: [
      "Servidor de alta performance (mesmo padrão usado por grandes portais)",
      "Sem custo mensal nos volumes atuais do sindicato",
      "Escala automaticamente em picos (período Expass, leilão ao vivo)",
      "Backups automáticos e segurança garantida",
    ],
  },
];

const PHASE2_MODULES = [
  {
    name: "Cobrança automática de mensalidade",
    benefit:
      "Pix recorrente com lembrete automático por WhatsApp em D-3 e D-1. Painel mostra quem está em dia e quem precisa de atenção. Tesoureiro recupera tempo gasto perseguindo cobrança no telefone.",
  },
  {
    name: "Self-service de serviços por departamento",
    benefit:
      "Produtor solicita NFe, ITR, FCEI ou contrato pelo site/WhatsApp e paga taxa por Pix antes da secretaria emitir. Secretaria atende mais demanda sem aumentar equipe.",
  },
  {
    name: "Portal do associado completo",
    benefit:
      "1.300 produtores fazem login com CPF e veem painel pessoal: mensalidade em dia, histórico de serviços, declarações, 2ª via de boleto. Acaba a fila de ligação por documento simples.",
  },
  {
    name: "Bilheteria Expass online",
    benefit:
      "Ingressos vendidos por Pix com até 90 dias de antecedência. Receita antecipada vira capital de giro pra produção da feira. Reduz fila no dia do evento.",
  },
  {
    name: "CRM de patrocinador da Expass",
    benefit:
      "Cada empresa, estande, valor, ano e contato comercial num único lugar. Renovação de patrocínio fica fácil — sem perder histórico quando muda gestão da diretoria.",
  },
  {
    name: "Comunicação segmentada",
    benefit:
      "Newsletter por interesse: gado de corte, leite, café, grãos. Edital de PRONAF chega pra quem produz grão; calendário de leilão chega pro pecuarista. Comunicação relevante = engajamento alto.",
  },
];

const TIMELINE = [
  { phase: "FASE 1", title: "Site institucional + CMS", duration: "3 semanas", state: "PRONTO PRA INICIAR" },
  { phase: "FASE 2", title: "Sistema MVP — Cobrança e Self-service", duration: "+8 a 12 semanas", state: "Aprovação após Fase 1" },
  { phase: "FASE 3", title: "Eventos · CRM · Comunicação", duration: "+8 a 12 semanas", state: "Aprovação após Fase 2" },
];

export default function SistemaPage() {
  return (
    <>
      {/* ============================== Top Bar ============================== */}
      <div className="sticky top-0 z-50 bg-mata text-white border-b border-vermelho print:hidden">
        <div className="container-prose flex items-center justify-between h-12 text-[12px]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 hover:text-cafe transition"
          >
            <span aria-hidden>←</span> Voltar pro site
          </Link>
          <div className="hidden md:flex items-center gap-5 text-white/65 uppercase tracking-[0.18em] text-[11px]">
            <a href="#hoje" className="hover:text-cafe">A SinRural hoje</a>
            <a href="#visao" className="hover:text-cafe">O que muda</a>
            <a href="#fase1" className="hover:text-cafe">Fase 1</a>
            <a href="#fases-2-3" className="hover:text-cafe">Fases 2 e 3</a>
            <a href="#cronograma" className="hover:text-cafe">Cronograma</a>
            <a href="#investimento" className="hover:text-cafe">Investimento</a>
          </div>
          <a
            href="/apresentacao-sinrural.pdf"
            download
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-vermelho text-white text-[11px] font-bold uppercase tracking-[0.16em] hover:bg-tinto transition"
          >
            <span aria-hidden>⬇</span> Baixar PDF
          </a>
        </div>
      </div>

      {/* ============================== Capa ============================== */}
      <section className="bg-cream relative overflow-hidden border-b border-foreground/8">
        <div className="absolute top-0 right-0 w-2 h-40 bg-vermelho" aria-hidden />
        <div className="absolute top-0 left-0 right-0 h-1 bg-sindicato" aria-hidden />

        <div className="container-prose relative py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <p className="text-[11px] uppercase tracking-[0.24em] text-vermelho font-bold mb-6">
                Proposta de modernização digital
              </p>

              <h1 className="font-display text-[3rem] md:text-[5rem] leading-[1] tracking-[-0.02em] text-mata">
                Plataforma <span className="italic text-sindicato">digital</span> da
                SinRural.
              </h1>

              <p className="text-lg md:text-xl leading-[1.6] text-foreground/75 mt-8 max-w-2xl">
                Site institucional novo + sistema operacional pro sindicato dos produtores
                rurais de Passos. Construído sob medida pro vocabulário do produtor,
                pensado pra sindicato com 60 anos de história e 1.300 associados.
              </p>

              <div className="flex flex-wrap gap-4 mt-10 text-[13px]">
                <div className="px-4 py-2 bg-white border border-mata/12 rounded-full">
                  <span className="text-foreground/60">Apresentado a:</span>{" "}
                  <strong className="text-mata">Diretoria SinRural 2024–2028</strong>
                </div>
                <div className="px-4 py-2 bg-white border border-mata/12 rounded-full">
                  <span className="text-foreground/60">Validade da proposta:</span>{" "}
                  <strong className="text-mata">30 dias</strong>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="bg-white p-6 rounded-2xl shadow-[0_20px_60px_-20px_rgba(0,61,34,0.4)]">
                <Image
                  src="/logo.png"
                  alt="SinRural"
                  width={220}
                  height={220}
                  priority
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== A SinRural hoje ============================== */}
      <section id="hoje" className="py-20 md:py-28 bg-white">
        <div className="container-prose">
          <SectionHeader
            kicker="Onde estamos"
            title="A SinRural tem escala — só falta a infraestrutura digital pra isso"
            lede="Vocês já são o maior representante do produtor rural do Sudoeste de Minas. O que falta é uma plataforma digital à altura desse tamanho."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 mb-14">
            {[
              { v: "1.300", l: "produtores associados" },
              { v: "75", l: "municípios atendidos" },
              { v: "60", l: "anos de história" },
              { v: "R$ 35M+", l: "Expass Agro 2025" },
            ].map((s) => (
              <div
                key={s.l}
                className="bg-cream border border-foreground/10 rounded-xl px-5 py-7 text-center"
              >
                <p className="font-display text-3xl md:text-4xl font-bold text-sindicato leading-none">
                  {s.v}
                </p>
                <p className="text-[11px] uppercase tracking-[0.16em] text-foreground/55 mt-3 font-semibold">
                  {s.l}
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-mata mb-2 leading-tight">
            Mas o ambiente digital atual{" "}
            <span className="text-vermelho">não acompanha esse tamanho</span>:
          </h3>
          <p className="text-foreground/65 mb-10">
            O que produtor, secretaria e diretoria enfrentam todos os dias:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TODAY_PROBLEMS.map((p, i) => (
              <div
                key={p.title}
                className="bg-white border border-foreground/10 rounded-xl p-6 hover:border-vermelho/30 transition"
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-mono text-xs text-vermelho font-bold tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-bold text-mata text-lg leading-tight">
                    {p.title}
                  </h4>
                </div>
                <p className="text-[14.5px] text-foreground/70 leading-[1.6]">
                  {p.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== Visão ============================== */}
      <section id="visao" className="py-20 md:py-28 bg-mata text-white relative overflow-hidden">
        <div
          className="absolute top-1/2 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.08] blur-3xl"
          style={{ background: "var(--color-cafe)" }}
          aria-hidden
        />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-vermelho" aria-hidden />

        <div className="container-prose relative">
          <SectionHeader
            kicker="O que muda"
            title="Imagine a SinRural com infraestrutura à altura dos 60 anos"
            lede="Não é só um site bonito. É a operação digital completa — do site institucional ao painel do tesoureiro — com a marca SinRural em todo lugar."
            dark
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/12 rounded-2xl p-8">
              <p className="text-cafe text-[11px] uppercase tracking-[0.18em] font-bold mb-4">
                Pro produtor
              </p>
              <p className="text-lg leading-[1.6] text-white/90">
                Entra no site, consulta sua mensalidade, baixa 2ª via, vê
                histórico de serviços, recebe edital de PRONAF na newsletter,
                acompanha leilão ao vivo e dá lance pelo WhatsApp — tudo com a
                marca SinRural, do celular dele, no campo.
              </p>
            </div>
            <div className="bg-white/5 border border-white/12 rounded-2xl p-8">
              <p className="text-cafe text-[11px] uppercase tracking-[0.18em] font-bold mb-4">
                Pra secretaria e diretoria
              </p>
              <p className="text-lg leading-[1.6] text-white/90">
                Posta notícia pelo celular, gerencia patrocinadores da Expass num
                CRM próprio, vê painel de inadimplência em tempo real, recebe
                solicitação de NFe já paga via Pix — secretaria foca em emitir,
                não em cobrar.
              </p>
            </div>
          </div>

          <div className="mt-10 bg-vermelho/10 border border-vermelho/30 rounded-xl p-6">
            <p className="text-[15px] leading-[1.6] text-white max-w-3xl">
              <strong>Em uma frase:</strong> a SinRural deixa de operar com ferramenta
              de 2010 e ganha uma plataforma própria, em domínio próprio, com a
              identidade visual do sindicato, escalável pro futuro.
            </p>
          </div>
        </div>
      </section>

      {/* ============================== Fase 1 ============================== */}
      <section id="fase1" className="py-20 md:py-28 bg-cream">
        <div className="container-prose">
          <SectionHeader
            kicker="Fase 1 · Pronto pra entregar"
            title="Site institucional novo + sistema de publicação"
            lede="Tudo o que vem nesta primeira entrega. Cobre a parte mais visível e urgente: o cartão de visita do sindicato no mundo digital."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {PHASE1_DELIVERABLES.map((d) => (
              <div
                key={d.title}
                className="bg-white border border-foreground/10 rounded-xl p-7 flex flex-col"
              >
                <div className="text-3xl mb-4" aria-hidden>
                  {d.icon}
                </div>
                <h3 className="font-bold text-mata text-lg leading-tight mb-4">
                  {d.title}
                </h3>
                <ul className="space-y-2 text-[14px] text-foreground/72 leading-[1.55]">
                  {d.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span className="text-sindicato font-bold mt-0.5" aria-hidden>
                        ✓
                      </span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-cafe-cream border-l-4 border-cafe p-6 rounded-r-xl">
            <p className="text-cafe text-[11px] uppercase tracking-[0.18em] font-bold mb-2">
              Resultado pra SinRural ao final da Fase 1
            </p>
            <p className="text-[15px] text-mata leading-[1.6] max-w-3xl">
              O sindicato tem um site profissional digno dos 60 anos, a
              secretaria atualiza conteúdo sozinha, e o produtor encontra
              informação organizada em qualquer celular. <strong>É o cartão de
              visita digital novo.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ============================== Fases 2 e 3 ============================== */}
      <section id="fases-2-3" className="py-20 md:py-28 bg-white">
        <div className="container-prose">
          <SectionHeader
            kicker="Fases 2 e 3 · Sistema operacional"
            title="Da apresentação institucional pra plataforma operacional completa"
            lede="Quando a Fase 1 estiver no ar e a SinRural estiver pronta pra próximo passo, são esses os módulos que entram. Cada um resolve uma dor específica do dia a dia."
          />

          <div className="mt-14 space-y-4">
            {PHASE2_MODULES.map((m, i) => (
              <div
                key={m.name}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-cream border border-foreground/10 rounded-xl p-7 hover:bg-white hover:border-sindicato transition-all"
              >
                <div className="md:col-span-1">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sindicato text-white font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="md:col-span-11">
                  <h3 className="font-bold text-xl text-mata mb-2 leading-tight">
                    {m.name}
                  </h3>
                  <p className="text-[15px] text-foreground/72 leading-[1.6]">
                    {m.benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-cream border border-foreground/10 rounded-xl p-7">
            <p className="text-[14px] text-foreground/70 leading-[1.6] max-w-3xl">
              <strong className="text-mata">Como funciona o investimento das Fases 2 e 3:</strong>{" "}
              cada módulo é cotado e aprovado separadamente, na hora em que a
              SinRural quiser ativar. Não é compromisso "tudo ou nada" — vocês
              decidem o ritmo, em função do orçamento e prioridade da diretoria.
            </p>
          </div>
        </div>
      </section>

      {/* ============================== Cronograma ============================== */}
      <section id="cronograma" className="py-20 md:py-28 bg-mata text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-vermelho" aria-hidden />

        <div className="container-prose relative">
          <SectionHeader
            kicker="Plano de entrega"
            title="Cronograma realista, fase por fase"
            lede="Cada fase é vendida e contratada separadamente. SinRural decide o ritmo. A Fase 1 já está pronta pra começar imediatamente após assinatura."
            dark
          />

          <div className="mt-14 space-y-5">
            {TIMELINE.map((t, i) => (
              <div
                key={t.phase}
                className="bg-white/5 border border-white/12 rounded-xl p-7"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-2">
                    <span
                      className={[
                        "inline-block px-3 py-1 rounded text-[11px] uppercase tracking-[0.18em] font-bold",
                        i === 0 ? "bg-vermelho text-white" : "bg-cafe text-mata",
                      ].join(" ")}
                    >
                      {t.phase}
                    </span>
                  </div>
                  <div className="md:col-span-6">
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {t.title}
                    </h3>
                  </div>
                  <div className="md:col-span-2 text-[13px] text-cafe font-semibold uppercase tracking-[0.14em]">
                    {t.duration}
                  </div>
                  <div className="md:col-span-2 text-[12px] text-white/65 uppercase tracking-[0.14em] text-right">
                    {t.state}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== Investimento ============================== */}
      <section id="investimento" className="py-20 md:py-28 bg-cream">
        <div className="container-prose">
          <SectionHeader
            kicker="Investimento"
            title="Valor da Fase 1 e o que está incluso"
            lede="Cobrança one-shot pra Fase 1, sem mensalidade obrigatória. Hospedagem fica incluída e gratuita nos volumes atuais do sindicato."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-14">
            <div className="lg:col-span-7">
              <div className="bg-white border border-foreground/10 rounded-2xl p-8 md:p-10 h-full">
                <p className="text-[11px] uppercase tracking-[0.2em] text-vermelho font-bold mb-3">
                  Fase 1 · Site institucional + CMS
                </p>
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-display text-5xl md:text-6xl font-bold text-mata">
                    R$ ____
                  </span>
                  <span className="text-foreground/60">one-shot</span>
                </div>

                <p className="text-[14.5px] text-foreground/70 leading-[1.65] mb-6">
                  Pagamento parcelado em 2 vezes: 50% na assinatura, 50% na entrega
                  do site no ar.
                </p>

                <div className="border-t border-foreground/10 pt-6">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-sindicato font-bold mb-3">
                    Está incluso
                  </p>
                  <ul className="space-y-2 text-[14px] text-foreground/72">
                    <li className="flex items-start gap-2">
                      <span className="text-sindicato font-bold mt-0.5" aria-hidden>✓</span>
                      <span>Todas as entregas listadas na Fase 1</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sindicato font-bold mt-0.5" aria-hidden>✓</span>
                      <span>Hospedagem profissional (sem custo nos volumes atuais)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sindicato font-bold mt-0.5" aria-hidden>✓</span>
                      <span>Treinamento da secretaria pra operar o CMS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sindicato font-bold mt-0.5" aria-hidden>✓</span>
                      <span>30 dias de suporte pós-entrega pra ajustes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-sindicato font-bold mt-0.5" aria-hidden>✓</span>
                      <span>Documentação técnica completa do que foi entregue</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-mata text-white border border-mata rounded-2xl p-8 md:p-10 h-full">
                <p className="text-cafe text-[11px] uppercase tracking-[0.2em] font-bold mb-3">
                  Custos contínuos do sindicato
                </p>
                <p className="text-[14.5px] leading-[1.6] text-white/85 mb-6">
                  Pra manter o site no ar depois da entrega, a SinRural só paga:
                </p>

                <ul className="space-y-4 text-[14px] mb-8">
                  <li className="flex justify-between items-baseline border-b border-white/15 pb-3">
                    <span>Domínio (sinrural.com.br)</span>
                    <strong className="text-cafe">~R$ 40 / ano</strong>
                  </li>
                  <li className="flex justify-between items-baseline border-b border-white/15 pb-3">
                    <span>Hospedagem do site</span>
                    <strong className="text-cafe">R$ 0</strong>
                  </li>
                  <li className="flex justify-between items-baseline border-b border-white/15 pb-3">
                    <span>Sistema de publicação (CMS)</span>
                    <strong className="text-cafe">R$ 0</strong>
                  </li>
                  <li className="flex justify-between items-baseline">
                    <span className="font-bold">Total / ano</span>
                    <strong className="text-cafe text-lg">~R$ 40</strong>
                  </li>
                </ul>

                <p className="text-[12px] text-white/55 italic leading-[1.55]">
                  Hospedagem e CMS rodam em planos gratuitos profissionais
                  (mesmos usados por grandes portais). Quando o sindicato crescer
                  muito, há opção de upgrade — mas pelos volumes atuais, custo é zero.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-white border border-foreground/10 rounded-xl p-7">
            <p className="text-[14px] text-foreground/70 leading-[1.6] max-w-3xl">
              <strong className="text-mata">Fases 2 e 3</strong> são cotadas separadamente
              quando a SinRural decidir avançar. Cada módulo tem orçamento próprio,
              proporcional ao escopo. Assim a diretoria mantém controle total do
              investimento ao longo do tempo.
            </p>
          </div>
        </div>
      </section>

      {/* ============================== Próximos passos ============================== */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-vermelho" aria-hidden />

        <div className="container-prose relative">
          <SectionHeader
            kicker="Próximos passos"
            title="Como avançamos a partir daqui"
            lede="Caminho prático e curto pra colocar o site da SinRural no ar nas próximas semanas."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-14">
            {[
              {
                step: "01",
                title: "Aprovação da proposta",
                detail:
                  "Diretoria valida escopo e investimento da Fase 1. Resposta de até 30 dias mantém o orçamento desta proposta.",
              },
              {
                step: "02",
                title: "Assinatura e início",
                detail:
                  "Contrato assinado, primeiro pagamento processado, projeto inicia imediatamente.",
              },
              {
                step: "03",
                title: "Acompanhamento semanal",
                detail:
                  "SinRural recebe atualizações de progresso semanais. Versão de pré-visualização disponível desde a primeira semana.",
              },
              {
                step: "04",
                title: "Entrega e treinamento",
                detail:
                  "Site no ar em domínio próprio. Treinamento da secretaria pra operar o CMS. Suporte de ajustes incluído por 30 dias.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="bg-cream border border-foreground/10 rounded-xl p-6 flex flex-col"
              >
                <p className="font-mono text-vermelho text-[12px] tracking-widest mb-3 font-bold">
                  / {s.step}
                </p>
                <h3 className="font-bold text-mata text-base leading-tight mb-3">
                  {s.title}
                </h3>
                <p className="text-[13.5px] text-foreground/65 leading-[1.55]">
                  {s.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-4 print:hidden">
            <a
              href="/apresentacao-sinrural.pdf"
              download
              className="btn-primary"
            >
              <span aria-hidden>⬇</span> Baixar esta proposta (PDF)
            </a>
            <a
              href="https://wa.me/553535292650"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Falar com o responsável
            </a>
            <Link href="/" className="btn-outlined">
              Ver demonstração do site
            </Link>
          </div>
        </div>
      </section>

      {/* ============================== Footer / Assinatura ============================== */}
      <footer className="bg-mata text-white border-t-4 border-vermelho">
        <div className="container-prose py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">
            <div className="md:col-span-6">
              <p className="text-cafe text-[11px] uppercase tracking-[0.2em] font-bold mb-4">
                Apresentado por
              </p>
              <h3 className="font-display text-2xl text-white mb-2">
                {"{ Sua assinatura }"}
              </h3>
              <p className="text-[13px] text-white/60 leading-[1.6] max-w-md">
                Substitua este bloco com seu nome, breve apresentação profissional,
                contato direto (telefone / WhatsApp / email). Esta proposta foi
                preparada exclusivamente pra Sindicato dos Produtores Rurais de Passos.
              </p>
            </div>

            <div className="md:col-span-6">
              <p className="text-cafe text-[11px] uppercase tracking-[0.2em] font-bold mb-4">
                Apresentado a
              </p>
              <h3 className="font-display text-2xl text-white mb-2">
                Diretoria SinRural · Gestão 2024–2028
              </h3>
              <p className="text-[13px] text-white/60 leading-[1.6]">
                Sindicato dos Produtores Rurais de Passos · CNPJ 17.923.335/0001-84
                <br />
                Av. Comendador Francisco Avelino Maia, 4052 · Passos – MG
              </p>
            </div>
          </div>

          <div className="pt-7 border-t border-white/12 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[12px] text-white/50">
            <p>Proposta confidencial · Plataforma Digital SinRural · v1</p>
            <p className="font-mono tracking-[0.18em] uppercase">
              Validade · 30 dias da emissão
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────

function SectionHeader({
  kicker,
  title,
  lede,
  dark,
}: {
  kicker: string;
  title: string;
  lede: string;
  dark?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-6">
        <p
          className={[
            "text-[11px] uppercase tracking-[0.22em] font-bold mb-4",
            dark ? "text-cafe" : "text-vermelho",
          ].join(" ")}
        >
          {kicker}
        </p>
        <h2
          className={[
            "text-[2.25rem] md:text-[3rem] font-bold leading-[1.05] tracking-tight",
            dark ? "text-white" : "text-mata",
          ].join(" ")}
        >
          {title}
        </h2>
      </div>
      <div className="lg:col-span-6 flex items-end">
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
