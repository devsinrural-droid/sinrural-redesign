const SERVICES = [
  {
    code: "01",
    title: "Jurídico",
    body: "Aposentadoria rural, defesa em ações trabalhistas e cíveis, orientação previdenciária.",
  },
  {
    code: "02",
    title: "Fiscal",
    body: "Emissão de Notas Fiscais de Produtor Rural com agilidade e segurança documental.",
  },
  {
    code: "03",
    title: "Contábil",
    body: "Cadastro de produtor, contratos, ITR, IRPF, CCIR e ADA-IBAMA — tudo num lugar só.",
  },
  {
    code: "04",
    title: "Pessoal",
    body: "Contratação e demissão de empregados rurais conforme a legislação vigente.",
  },
  {
    code: "05",
    title: "Ambiental",
    body: "Preenchimento do FCEI e orientação completa sobre licenciamento ambiental rural.",
  },
  {
    code: "06",
    title: "PRONAF",
    body: "Encaminhamento e aprovação de crédito rural junto ao Banco do Brasil.",
  },
];

const STATS = [
  { value: "1.300", label: "produtores associados" },
  { value: "75", label: "municípios atendidos" },
  { value: "60", label: "anos no campo" },
  { value: "R$ 35M+", label: "Expass Agro 2025" },
];

const UPCOMING = [
  {
    badge: "Feira anual",
    title: "Expass Agro 2026",
    date: "25 — 28 jun",
    desc: "Exposições de raças, torneio leiteiro, palestras técnicas e workshops para mais de 70.000 visitantes esperados.",
    cta: "Inscrever-se",
  },
  {
    badge: "Leilão misto",
    title: "Quinzenal · Multpix",
    date: "Próximo: confira",
    desc: "Pregão presencial no parque ou via plataforma digital Multpix. Lotes de bovinos de corte e leite.",
    cta: "Ver calendário",
  },
  {
    badge: "Cerimônia · Beneficente",
    title: "Leilão HRC · 17ª edição",
    date: "Dezembro",
    desc: "Renda revertida ao Hospital Regional do Câncer de Passos. Transmitido ao vivo no YouTube SinRural.",
    cta: "Apoiar",
    accent: true,
  },
];

export default function Home() {
  return (
    <>
      {/* ============================== Top Nav ============================== */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-cream/85 border-b border-mata/8">
        <div className="container-prose flex h-16 items-center justify-between md:h-20">
          <a href="/" className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-medium tracking-tight text-mata">
              Sin<span className="text-sinrural">Rural</span>
            </span>
            <span className="hidden md:block text-[11px] uppercase tracking-[0.18em] text-mata/55">
              Passos · MG
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-[14px] font-medium text-mata/80">
            <a href="#institucional" className="hover:text-sinrural transition">Institucional</a>
            <a href="#servicos" className="hover:text-sinrural transition">Serviços</a>
            <a href="#eventos" className="hover:text-sinrural transition">Eventos</a>
            <a href="#contato" className="hover:text-sinrural transition">Contato</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden md:inline-flex btn-pill border border-mata/85 text-mata bg-transparent hover:bg-mata/5">
              Entrar
            </button>
            <button className="btn-pill bg-mata text-white hover:bg-mata/90">
              Área do Associado
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* ============================== Hero ============================== */}
        <section className="relative overflow-hidden">
          <div className="container-prose relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-16 pb-24 md:pt-24 md:pb-32">
            {/* Left — editorial */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="rise" style={{ animationDelay: "0.05s" }}>
                <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-mata/55 mb-7">
                  <span className="h-px w-10 bg-cafe" />
                  Desde 1966 · Utilidade Pública
                </div>
              </div>

              <h1
                className="font-display text-[clamp(3.25rem,8.5vw,7.5rem)] leading-[0.92] tracking-[-0.025em] text-mata rise"
                style={{ animationDelay: "0.15s" }}
              >
                Unidos
                <br />
                pelo <span className="italic text-sinrural">Agro.</span>
              </h1>

              <p
                className="font-display-body text-[1.25rem] md:text-[1.4rem] leading-[1.55] text-mata/82 mt-8 max-w-xl rise"
                style={{ animationDelay: "0.3s" }}
              >
                Há seis décadas, o Sindicato dos Produtores Rurais de Passos representa quem
                trabalha o campo no Sudoeste de Minas — defendendo direitos, simplificando o
                cotidiano, e dando voz ao agro mineiro.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-3 mt-10 rise"
                style={{ animationDelay: "0.45s" }}
              >
                <a href="#servicos" className="btn-pill bg-pasto text-white hover:bg-sinrural">
                  Solicitar atendimento
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="#institucional"
                  className="btn-pill border border-pasto text-pasto bg-transparent hover:bg-pasto/5"
                >
                  Conhecer o sindicato
                </a>
              </div>
            </div>

            {/* Right — institutional marker stone */}
            <div className="lg:col-span-5 relative">
              <div
                className="relative rise"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="absolute -top-4 -left-4 hidden lg:block">
                  <span className="font-mono text-[11px] tracking-widest text-mata/45 [writing-mode:vertical-rl]">
                    1966 — 2026
                  </span>
                </div>

                {/* Hero card stack */}
                <div className="relative">
                  <div className="rounded-3xl bg-mata text-white p-8 md:p-10 shadow-[0_20px_60px_-20px_rgba(30,57,50,0.45)] horizon-grid">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-[10rem] md:text-[12rem] leading-none tracking-tight">
                        60
                      </span>
                      <span className="font-display text-2xl md:text-3xl text-cafe">
                        anos
                      </span>
                    </div>
                    <div className="mt-6 pt-6 border-t border-white/15">
                      <p className="text-[13px] uppercase tracking-[0.2em] text-cafe/90 mb-2">
                        Filiação
                      </p>
                      <p className="font-display text-xl text-white/95">
                        FAEMG · SENAR-MG · CNA
                      </p>
                    </div>
                    <div className="mt-5 pt-5 border-t border-white/15">
                      <p className="text-[13px] uppercase tracking-[0.2em] text-cafe/90 mb-2">
                        Sede
                      </p>
                      <p className="font-display-body text-[15px] text-white/85 leading-relaxed">
                        Parque de Exposições
                        <br />
                        Adolpho Coelho Lemos
                      </p>
                    </div>
                  </div>

                  {/* Floating gold ceremonial chip */}
                  <div className="absolute -bottom-5 -left-5 md:-left-8 rotate-[-3deg]">
                    <div className="bg-cafe-cream border border-cafe/40 rounded-2xl px-5 py-3 shadow-[0_8px_24px_-8px_rgba(203,162,88,0.5)]">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-cafe">
                        Recorde Mundial
                      </p>
                      <p className="font-display text-base text-mata">
                        64,940 kg/dia
                      </p>
                      <p className="text-[11px] text-mata/55">
                        Bloger FIV · Gir leiteiro
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative bottom rule */}
          <div className="container-prose">
            <div className="h-px bg-gradient-to-r from-transparent via-mata/15 to-transparent" />
          </div>
        </section>

        {/* ============================== Stats strip ============================== */}
        <section className="bg-mata text-white relative overflow-hidden">
          <div className="absolute inset-0 horizon-grid opacity-50" aria-hidden />
          <div className="container-prose relative grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {STATS.map((s) => (
              <div key={s.label} className="px-2 py-10 md:py-14 first:pl-0 last:pr-0">
                <p className="font-display text-4xl md:text-6xl tracking-tight text-white">
                  {s.value}
                </p>
                <p className="text-[12px] uppercase tracking-[0.18em] text-cafe/85 mt-3">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ============================== Serviços ============================== */}
        <section id="servicos" className="py-24 md:py-32">
          <div className="container-prose">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-14">
              <div className="lg:col-span-5">
                <p className="text-[11px] uppercase tracking-[0.22em] text-pasto mb-5">
                  06 departamentos
                </p>
                <h2 className="font-display text-[2.75rem] md:text-[3.75rem] leading-[1.02] tracking-[-0.015em] text-mata">
                  Tudo o que o produtor precisa,{" "}
                  <span className="italic text-sinrural">sob um mesmo teto.</span>
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7 flex items-end">
                <p className="font-display-body text-[1.1rem] leading-[1.7] text-mata/75 max-w-md">
                  Da emissão de uma simples nota fiscal ao crédito do PRONAF, da defesa
                  trabalhista ao licenciamento ambiental — operamos seis departamentos
                  presenciais para liberar o seu tempo no campo.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-mata/10 rounded-3xl overflow-hidden border border-mata/10">
              {SERVICES.map((svc) => (
                <a
                  key={svc.code}
                  href="#"
                  className="group bg-card p-8 md:p-10 transition-colors hover:bg-cafe-cream"
                >
                  <div className="flex items-baseline justify-between mb-8">
                    <span className="font-mono text-xs tracking-widest text-mata/40">
                      / {svc.code}
                    </span>
                    <span className="font-mono text-xs text-pasto opacity-0 group-hover:opacity-100 transition-opacity">
                      saiba mais →
                    </span>
                  </div>
                  <h3 className="font-display text-[1.85rem] tracking-tight text-mata mb-3 group-hover:text-sinrural transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-[15px] leading-[1.6] text-mata/70">{svc.body}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ============================== Expass Agro feature band ============================== */}
        <section
          id="institucional"
          className="bg-mata text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 horizon-grid opacity-30" aria-hidden />
          <div
            className="absolute top-1/2 -right-32 w-[560px] h-[560px] rounded-full opacity-[0.08] blur-3xl"
            style={{ background: "var(--color-cafe)" }}
            aria-hidden
          />

          <div className="container-prose relative py-24 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-cafe/40 text-cafe text-[11px] uppercase tracking-[0.2em] mb-8">
                  <span className="h-1.5 w-1.5 rounded-full bg-cafe" />
                  Carro-chefe institucional
                </div>

                <h2 className="font-display text-[3rem] md:text-[5.5rem] leading-[0.94] tracking-[-0.022em] text-white">
                  Expass <span className="italic text-cafe">Agro.</span>
                </h2>

                <p className="font-display-body text-[1.15rem] md:text-[1.3rem] leading-[1.55] text-white/75 mt-7 max-w-xl">
                  A maior feira do agronegócio do Sudoeste de Minas. Exposições de Gir,
                  Girolando, Guzerá e Bubalino. Torneio leiteiro. Concurso de qualidade do
                  café. Workshops, palestras técnicas e o Encontro de Mulheres do Agro.
                </p>

                <div className="flex flex-wrap gap-3 mt-10">
                  <a href="#" className="btn-pill bg-cafe text-mata hover:bg-cafe/90">
                    Edição 2026 — 25 a 28 de junho
                  </a>
                  <a
                    href="#"
                    className="btn-pill border border-white/40 text-white bg-transparent hover:bg-white/10"
                  >
                    Histórico de edições
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-1 lg:gap-y-10">
                  {[
                    { k: "70.000+", v: "visitantes esperados" },
                    { k: "R$ 35M+", v: "em negócios na edição 2025" },
                    { k: "1ª", v: "edição com Concurso de Café" },
                    { k: "R$ 10mil", v: "prêmio para o melhor café" },
                  ].map((m) => (
                    <div key={m.v} className="border-l border-cafe/30 pl-5">
                      <dt className="font-display text-3xl md:text-4xl text-white">
                        {m.k}
                      </dt>
                      <dd className="text-[13px] uppercase tracking-[0.16em] text-cafe/85 mt-2">
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
        <section id="eventos" className="py-24 md:py-32">
          <div className="container-prose">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-pasto mb-5">
                  Calendário
                </p>
                <h2 className="font-display text-[2.5rem] md:text-[3.5rem] leading-[1.02] tracking-[-0.015em] text-mata">
                  Próximos eventos
                </h2>
              </div>
              <a
                href="#"
                className="text-pasto font-medium hover:text-sinrural transition inline-flex items-center gap-2"
              >
                Ver calendário completo <span aria-hidden>→</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {UPCOMING.map((ev) => (
                <article
                  key={ev.title}
                  className={[
                    "rounded-3xl p-8 flex flex-col gap-5 transition-all duration-300",
                    "border [box-shadow:var(--shadow-card)] hover:shadow-[0_12px_32px_-12px_rgba(30,57,50,0.25)]",
                    ev.accent
                      ? "bg-cafe-cream border-cafe/30 hover:bg-cafe/15"
                      : "bg-card border-mata/8 hover:bg-cream",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em]">
                    <span className={ev.accent ? "text-cafe" : "text-pasto"}>
                      {ev.badge}
                    </span>
                    <span className="text-mata/45 font-mono">{ev.date}</span>
                  </div>

                  <h3 className="font-display text-[1.85rem] leading-[1.05] tracking-tight text-mata">
                    {ev.title}
                  </h3>

                  <p className="text-[15px] leading-[1.6] text-mata/70 flex-1">{ev.desc}</p>

                  <a
                    href="#"
                    className={[
                      "inline-flex items-center gap-2 font-medium text-[15px]",
                      ev.accent ? "text-mata" : "text-pasto",
                      "hover:gap-3 transition-all",
                    ].join(" ")}
                  >
                    {ev.cta} <span aria-hidden>→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================== Footer ============================== */}
        <footer
          id="contato"
          className="bg-mata text-white relative overflow-hidden mt-12"
        >
          <div className="absolute inset-0 horizon-grid opacity-25" aria-hidden />
          <div className="container-prose relative pt-20 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
              <div className="md:col-span-5">
                <div className="font-display text-3xl tracking-tight">
                  Sin<span className="text-cafe">Rural</span>
                </div>
                <p className="text-[12px] uppercase tracking-[0.2em] text-cafe/80 mt-2">
                  Sindicato dos Produtores Rurais de Passos
                </p>
                <p className="font-display-body text-[1.05rem] leading-[1.55] text-white/70 max-w-sm mt-6">
                  Há 60 anos representando quem trabalha o campo no Sudoeste de Minas Gerais.
                  Utilidade pública. Filiado a FAEMG, SENAR-MG e CNA.
                </p>
              </div>

              <div className="md:col-span-3">
                <h4 className="text-[12px] uppercase tracking-[0.2em] text-cafe mb-5">
                  Endereço
                </h4>
                <p className="text-[15px] text-white/85 leading-[1.7]">
                  Av. Comendador Francisco Avelino Maia, 4052
                  <br />
                  Bairro Exposição
                  <br />
                  Passos – MG · CEP 37902-367
                </p>
              </div>

              <div className="md:col-span-2">
                <h4 className="text-[12px] uppercase tracking-[0.2em] text-cafe mb-5">
                  Contato
                </h4>
                <ul className="text-[15px] text-white/85 space-y-2">
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
                <h4 className="text-[12px] uppercase tracking-[0.2em] text-cafe mb-5">
                  Redes
                </h4>
                <ul className="text-[15px] text-white/85 space-y-2">
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

            <div className="pt-8 border-t border-white/12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[12px] text-white/55">
              <p>
                © 1966 — {new Date().getFullYear()} SinRural. CNPJ 17.923.335/0001-84.
              </p>
              <p className="font-mono tracking-widest uppercase">
                Unidos pelo agro · Passos · MG
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
