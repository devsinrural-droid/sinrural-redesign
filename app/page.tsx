import Image from "next/image";

const SERVICES = [
  {
    icon: "⚖",
    title: "Jurídico",
    body: "Aposentadoria rural, defesa em ações trabalhistas e cíveis.",
  },
  {
    icon: "🧾",
    title: "Fiscal",
    body: "Emissão de Notas Fiscais de Produtor Rural.",
  },
  {
    icon: "📊",
    title: "Contábil",
    body: "Cadastro de produtor, contratos, ITR, IRPF, CCIR e ADA-IBAMA.",
  },
  {
    icon: "👥",
    title: "Pessoal",
    body: "Contratação e demissão de empregados rurais.",
  },
  {
    icon: "🌿",
    title: "Ambiental",
    body: "Preenchimento do FCEI e licenciamento ambiental.",
  },
  {
    icon: "💳",
    title: "PRONAF",
    body: "Encaminhamento e aprovação de crédito rural.",
  },
];

const NEWS = [
  {
    tag: "Expass Agro",
    date: "12 abr 2026",
    title: "Expass Agro 2026 abre inscrições para o 2º Concurso de Qualidade do Café",
    excerpt:
      "Com prêmio de R$ 10 mil ao primeiro lugar, o concurso retorna para a edição de junho com novidades.",
  },
  {
    tag: "Leilão",
    date: "08 abr 2026",
    title: "Leilão Misto Quinzenal supera 200 lotes em pregão eletrônico",
    excerpt:
      "Edição de abril teve transmissão simultânea no parque e via Multpix, com forte adesão de produtores do Sudoeste de MG.",
  },
  {
    tag: "Beneficente",
    date: "02 abr 2026",
    title: "16ª edição do Leilão Beneficente do HRC arrecada valor recorde",
    excerpt:
      "Renda integral foi destinada ao Hospital Regional do Câncer de Passos. Transmissão pelo YouTube SinRural Passos.",
  },
];

const PARTNERS = [
  { name: "FAEMG", desc: "Federação da Agricultura e Pecuária de MG" },
  { name: "SENAR-MG", desc: "Serviço Nacional de Aprendizagem Rural" },
  { name: "CNA", desc: "Confederação da Agricultura e Pecuária do Brasil" },
  { name: "HRC Passos", desc: "Hospital Regional do Câncer" },
  { name: "Multpix", desc: "Plataforma de leilões virtuais" },
];

export default function Home() {
  return (
    <>
      {/* ============================== Top Utility Bar ============================== */}
      <div className="bg-vermelho text-white text-[12px]">
        <div className="container-prose flex h-9 items-center justify-between">
          <div className="flex items-center gap-5">
            <a href="tel:+553535292650" className="hover:opacity-80 transition">
              ☏ (35) 3529-2650
            </a>
            <a
              href="mailto:sindicatopassos@gmail.com"
              className="hidden sm:inline hover:opacity-80 transition"
            >
              ✉ sindicatopassos@gmail.com
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4 text-white/85">
            <a
              href="https://www.instagram.com/sinruralpassos/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/sinruralpassos/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Facebook
            </a>
            <a
              href="https://www.youtube.com/@SinRuralPassos"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>

      {/* ============================== Main Header ============================== */}
      <header className="sticky top-0 z-40 bg-white border-b border-foreground/8 [box-shadow:var(--shadow-nav)]">
        <div className="container-prose flex h-20 items-center justify-between gap-6">
          <a href="/" className="flex items-center gap-3" aria-label="SinRural - Início">
            <Image
              src="/logo.png"
              alt="SinRural"
              width={56}
              height={56}
              priority
              className="rounded-md"
            />
            <div className="leading-tight hidden sm:block">
              <div className="font-bold text-lg text-foreground">SinRural</div>
              <div className="text-[10.5px] uppercase tracking-[0.14em] text-foreground/55">
                Sindicato Rural de Passos
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-foreground/85">
            <a href="#institucional" className="hover:text-vermelho transition">Institucional</a>
            <a href="#servicos" className="hover:text-vermelho transition">Serviços</a>
            <a href="#noticias" className="hover:text-vermelho transition">Notícias</a>
            <a href="#eventos" className="hover:text-vermelho transition">Eventos</a>
            <a href="#contato" className="hover:text-vermelho transition">Contato</a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="hidden md:inline-flex btn-outlined !py-[0.55rem] !text-sm">
              Entrar
            </button>
            <button className="btn-primary !py-[0.55rem] !text-sm">
              Área do Associado
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* ============================== Hero ============================== */}
        <section className="relative overflow-hidden bg-sindicato text-white">
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 800px 400px at 80% 30%, rgba(255,255,255,0.08), transparent 60%)",
            }}
            aria-hidden
          />
          {/* Faixa decorativa vermelha — referência ao triângulo do logo */}
          <div className="absolute top-0 right-0 w-1.5 h-32 bg-vermelho hidden md:block" aria-hidden />

          <div className="container-prose relative grid grid-cols-1 lg:grid-cols-12 gap-10 py-16 md:py-24">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-cafe mb-6 font-semibold">
                <span className="h-2 w-2 bg-vermelho rounded-sm" />
                Desde 1966 · Utilidade Pública
              </div>

              <h1 className="font-display text-[2.75rem] md:text-[4.25rem] leading-[1.05] tracking-[-0.015em] text-white">
                Unidos pelo <span className="italic text-cafe">Agro</span>
              </h1>

              <p className="text-lg md:text-xl leading-[1.55] text-white/85 mt-6 max-w-2xl">
                Há 60 anos representando ~1.300 produtores rurais de Passos e do
                Sudoeste de Minas Gerais. Filiados à FAEMG, SENAR-MG e CNA — defendendo
                direitos, simplificando o cotidiano do produtor.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <a href="#servicos" className="btn-primary">
                  Solicitar atendimento
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="#institucional"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-1.5 border-white/40 text-white font-semibold text-sm hover:bg-white/10 transition"
                >
                  Conhecer o sindicato
                </a>
              </div>
            </div>

            {/* Right: institutional fact card */}
            <div className="lg:col-span-5 flex items-center">
              <div className="w-full bg-white text-foreground rounded-xl shadow-[0_20px_60px_-20px_rgba(0,61,34,0.6)] overflow-hidden">
                <div className="bg-cafe-cream px-6 py-3 flex items-center gap-3 border-b border-cafe/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-cafe" />
                  <span className="text-[11px] uppercase tracking-[0.18em] text-mata font-semibold">
                    Recorde mundial · 2025
                  </span>
                </div>
                <div className="px-6 py-6">
                  <div className="font-display text-3xl text-sindicato leading-tight">
                    Bloger FIV Ribeirão Grande
                  </div>
                  <div className="text-sm text-foreground/65 mt-1.5">
                    Vaca jovem · raça GIR leiteiro
                  </div>
                  <div className="mt-5 pt-5 border-t border-foreground/10 grid grid-cols-2 gap-4">
                    <div>
                      <div className="font-display text-3xl font-bold text-vermelho">
                        64,940
                      </div>
                      <div className="text-[11px] uppercase tracking-[0.16em] text-foreground/55 mt-1">
                        kg leite / dia
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-3xl font-bold text-sindicato">
                        1ª
                      </div>
                      <div className="text-[11px] uppercase tracking-[0.16em] text-foreground/55 mt-1">
                        Expass Agro 2025
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-cinza px-6 py-3 text-[12px] text-foreground/60 italic">
                  Apresentado na Expass Agro 2025
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================== Stats strip ============================== */}
        <section className="bg-mata text-white border-y-2 border-vermelho">
          <div className="container-prose grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { value: "1.300", label: "Produtores associados" },
              { value: "75", label: "Municípios atendidos" },
              { value: "60", label: "Anos de história" },
              { value: "20.000+", label: "Produtores via SENAR/ano" },
            ].map((s) => (
              <div key={s.label} className="px-4 py-9 text-center first:pl-0 last:pr-0">
                <p className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white">
                  {s.value}
                </p>
                <p className="text-[12px] uppercase tracking-[0.16em] text-cafe/85 mt-2">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ============================== Serviços ============================== */}
        <section id="servicos" className="py-20 md:py-24 bg-white">
          <div className="container-prose">
            <div className="text-center md:text-left max-w-3xl mb-12">
              <p className="text-[11px] uppercase tracking-[0.22em] text-vermelho font-bold mb-4">
                06 Departamentos
              </p>
              <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.15] text-foreground tracking-tight">
                Atendimento completo,{" "}
                <span className="text-sindicato">presencial e por WhatsApp</span>
              </h2>
              <p className="text-base md:text-lg text-foreground/70 mt-4 max-w-xl">
                Da simples emissão de uma nota fiscal ao crédito do PRONAF — operamos
                seis departamentos para liberar o seu tempo no campo.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES.map((svc) => (
                <a
                  key={svc.title}
                  href="#"
                  className="group bg-white p-7 rounded-xl border border-foreground/10 hover:border-sindicato hover:shadow-[0_8px_24px_-8px_rgba(0,97,54,0.18)] transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl" aria-hidden>{svc.icon}</span>
                    <span className="text-vermelho text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Saiba mais →
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-sindicato mb-2 group-hover:text-mata transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-[14.5px] leading-[1.55] text-foreground/70">
                    {svc.body}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ============================== Notícias ============================== */}
        <section id="noticias" className="py-20 md:py-24 bg-cream">
          <div className="container-prose">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-vermelho font-bold mb-4">
                  Comunicação
                </p>
                <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.15] text-foreground tracking-tight">
                  Notícias <span className="text-sindicato">recentes</span>
                </h2>
              </div>
              <a
                href="#"
                className="text-vermelho font-semibold text-sm hover:text-tinto transition inline-flex items-center gap-2"
              >
                Ver todas as notícias <span aria-hidden>→</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {NEWS.map((n, idx) => (
                <article
                  key={n.title}
                  className={[
                    "bg-white rounded-xl overflow-hidden border border-foreground/8 hover:shadow-[0_12px_32px_-12px_rgba(0,61,34,0.18)] transition-all flex flex-col",
                    idx === 0 ? "md:col-span-1" : "",
                  ].join(" ")}
                >
                  <div
                    className="aspect-[16/10] bg-gradient-to-br from-sindicato to-mata flex items-end p-5 relative overflow-hidden"
                  >
                    <div
                      className="absolute inset-0 opacity-15"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.4) 0%, transparent 50%)",
                      }}
                      aria-hidden
                    />
                    <span className="relative inline-block px-2.5 py-1 bg-vermelho text-white text-[11px] uppercase tracking-[0.14em] font-bold rounded">
                      {n.tag}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-[12px] text-foreground/50 mb-2 font-mono">
                      {n.date}
                    </span>
                    <h3 className="font-bold text-[17px] leading-[1.3] text-foreground mb-3 line-clamp-3">
                      {n.title}
                    </h3>
                    <p className="text-[14px] text-foreground/65 leading-[1.55] line-clamp-3 flex-1">
                      {n.excerpt}
                    </p>
                    <a
                      href="#"
                      className="mt-4 text-sindicato font-semibold text-sm hover:text-vermelho transition inline-flex items-center gap-1.5 self-start"
                    >
                      Ler matéria <span aria-hidden>→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================== Expass Agro feature band ============================== */}
        <section
          id="institucional"
          className="bg-mata text-white relative overflow-hidden"
        >
          <div
            className="absolute top-1/2 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.07] blur-3xl"
            style={{ background: "var(--color-cafe)" }}
            aria-hidden
          />
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-vermelho" aria-hidden />

          <div className="container-prose relative py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-cafe/40 text-cafe text-[11px] uppercase tracking-[0.2em] mb-7 font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-cafe" />
                  Carro-chefe institucional
                </div>

                <h2 className="font-display text-4xl md:text-6xl font-bold leading-[0.96] tracking-tight text-white">
                  Expass <span className="italic text-cafe">Agro</span> 2026
                </h2>

                <p className="text-lg md:text-xl leading-[1.55] text-white/80 mt-6 max-w-xl">
                  A maior feira do agronegócio do Sudoeste de Minas. Exposições de Gir,
                  Girolando, Guzerá e Bubalino. Torneio leiteiro. Concurso de qualidade
                  do café. Workshops e palestras técnicas.
                </p>

                <div className="flex flex-wrap gap-3 mt-9">
                  <a href="#" className="btn-primary">
                    Inscrever-se · 25 a 28 jun
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-1.5 border-white/40 text-white font-semibold text-sm hover:bg-white/10 transition"
                  >
                    Histórico de edições
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <dl className="grid grid-cols-2 gap-x-5 gap-y-7">
                  {[
                    { k: "70 mil+", v: "Visitantes esperados" },
                    { k: "R$ 35M+", v: "Em negócios na edição 2025" },
                    { k: "4 dias", v: "De programação técnica" },
                    { k: "R$ 10mil", v: "Prêmio · Concurso de Café" },
                  ].map((m) => (
                    <div key={m.v} className="border-l-2 border-vermelho pl-4">
                      <dt className="font-display text-2xl md:text-3xl font-bold text-white">
                        {m.k}
                      </dt>
                      <dd className="text-[12px] uppercase tracking-[0.14em] text-cafe/85 mt-1.5 font-semibold">
                        {m.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* ============================== Próximos eventos ============================== */}
        <section id="eventos" className="py-20 md:py-24 bg-white">
          <div className="container-prose">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-vermelho font-bold mb-4">
                  Calendário
                </p>
                <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.15] text-foreground tracking-tight">
                  Próximos <span className="text-sindicato">eventos</span>
                </h2>
              </div>
              <a
                href="#"
                className="text-vermelho font-semibold text-sm hover:text-tinto transition inline-flex items-center gap-2"
              >
                Ver calendário completo <span aria-hidden>→</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <article className="bg-white border border-foreground/10 rounded-xl p-7 flex flex-col gap-4 hover:border-sindicato hover:shadow-[0_8px_24px_-8px_rgba(0,97,54,0.18)] transition-all">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] font-bold">
                  <span className="text-vermelho">Feira anual</span>
                  <span className="text-foreground/40 font-mono">25 — 28 jun</span>
                </div>
                <h3 className="font-bold text-xl text-foreground leading-tight">
                  Expass Agro 2026
                </h3>
                <p className="text-[14px] text-foreground/65 leading-[1.6] flex-1">
                  Quatro dias de exposição, leilões, torneio leiteiro, concurso de café e
                  palestras técnicas no Parque Adolpho Coelho Lemos.
                </p>
                <a href="#" className="text-sindicato font-semibold text-sm hover:text-vermelho transition inline-flex items-center gap-1.5">
                  Ver programação <span aria-hidden>→</span>
                </a>
              </article>

              <article className="bg-white border border-foreground/10 rounded-xl p-7 flex flex-col gap-4 hover:border-sindicato hover:shadow-[0_8px_24px_-8px_rgba(0,97,54,0.18)] transition-all">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] font-bold">
                  <span className="text-sindicato">Quinzenal</span>
                  <span className="text-foreground/40 font-mono">Próximo</span>
                </div>
                <h3 className="font-bold text-xl text-foreground leading-tight">
                  Leilão Misto · Multpix
                </h3>
                <p className="text-[14px] text-foreground/65 leading-[1.6] flex-1">
                  Pregão presencial no parque ou via plataforma virtual Multpix. Lotes
                  de bovinos de corte e leite.
                </p>
                <a href="#" className="text-sindicato font-semibold text-sm hover:text-vermelho transition inline-flex items-center gap-1.5">
                  Ver edital <span aria-hidden>→</span>
                </a>
              </article>

              <article className="bg-cafe-cream border border-cafe/30 rounded-xl p-7 flex flex-col gap-4 hover:border-cafe hover:shadow-[0_8px_24px_-8px_rgba(203,162,88,0.3)] transition-all">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] font-bold">
                  <span className="text-cafe-foreground" style={{ color: "#8a6f2a" }}>★ Beneficente</span>
                  <span className="text-foreground/40 font-mono">Dezembro</span>
                </div>
                <h3 className="font-bold text-xl text-foreground leading-tight">
                  Leilão HRC · 17ª edição
                </h3>
                <p className="text-[14px] text-foreground/65 leading-[1.6] flex-1">
                  Renda integral revertida ao Hospital Regional do Câncer de Passos.
                  Transmissão ao vivo no YouTube SinRural.
                </p>
                <a href="#" className="font-semibold text-sm transition inline-flex items-center gap-1.5" style={{ color: "#8a6f2a" }}>
                  Apoiar a causa <span aria-hidden>→</span>
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* ============================== Parceiros ============================== */}
        <section className="py-16 bg-cream border-y border-foreground/8">
          <div className="container-prose">
            <p className="text-center text-[11px] uppercase tracking-[0.22em] text-foreground/55 font-bold mb-8">
              Filiação institucional & parceiros
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
              {PARTNERS.map((p) => (
                <div
                  key={p.name}
                  className="group relative bg-white border border-foreground/12 rounded-lg px-5 py-3 hover:border-sindicato transition"
                >
                  <div className="font-bold text-base text-sindicato leading-none">
                    {p.name}
                  </div>
                  <div className="text-[11px] text-foreground/55 mt-1.5 leading-tight max-w-[14rem]">
                    {p.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================== Footer ============================== */}
        <footer
          id="contato"
          className="bg-mata text-white relative overflow-hidden border-t-4 border-vermelho"
        >
          <div className="container-prose relative pt-16 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
              <div className="md:col-span-5">
                <div className="flex items-center gap-3 mb-5">
                  <Image
                    src="/logo.png"
                    alt="SinRural"
                    width={64}
                    height={64}
                    className="rounded-md bg-white p-1.5"
                  />
                  <div className="leading-tight">
                    <div className="font-bold text-2xl">SinRural</div>
                    <div className="text-[11px] uppercase tracking-[0.16em] text-cafe/85">
                      Sindicato dos Produtores Rurais
                    </div>
                  </div>
                </div>
                <p className="text-[14.5px] leading-[1.6] text-white/72 max-w-md">
                  Há 60 anos representando quem trabalha o campo no Sudoeste de Minas Gerais.
                  Entidade de utilidade pública. Filiada à FAEMG, SENAR-MG e CNA.
                </p>
              </div>

              <div className="md:col-span-3">
                <h4 className="text-[12px] uppercase tracking-[0.18em] text-cafe mb-4 font-bold">
                  Endereço
                </h4>
                <p className="text-[14px] text-white/85 leading-[1.7]">
                  Av. Comendador Francisco Avelino Maia, 4052
                  <br />
                  Bairro Exposição
                  <br />
                  Passos – MG · CEP 37902-367
                </p>
              </div>

              <div className="md:col-span-2">
                <h4 className="text-[12px] uppercase tracking-[0.18em] text-cafe mb-4 font-bold">
                  Contato
                </h4>
                <ul className="text-[14px] text-white/85 space-y-2">
                  <li>
                    <a href="tel:+553535292650" className="hover:text-cafe transition">
                      (35) 3529-2650
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:sindicatopassos@gmail.com"
                      className="hover:text-cafe transition break-all"
                    >
                      sindicatopassos@gmail.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-2">
                <h4 className="text-[12px] uppercase tracking-[0.18em] text-cafe mb-4 font-bold">
                  Redes sociais
                </h4>
                <ul className="text-[14px] text-white/85 space-y-2">
                  <li>
                    <a
                      href="https://www.instagram.com/sinruralpassos/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cafe transition"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/sinruralpassos/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cafe transition"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@SinRuralPassos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cafe transition"
                    >
                      YouTube
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-7 border-t border-white/12 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[12px] text-white/55">
              <p>© 1966 — {new Date().getFullYear()} SinRural · CNPJ 17.923.335/0001-84</p>
              <p className="font-mono tracking-[0.18em] uppercase">
                Unidos pelo agro · Passos · MG
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
