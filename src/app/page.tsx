import Image from "next/image";
import LogoMarquee from "@/app/components/LogoMarquee";
import Footer from "@/app/components/Footer";
import Navigation from "@/app/components/Navigation";
import {
  Palette,
  Share2,
  Monitor,
  Megaphone,
  Camera,
  Search,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import ScrollReveal from "@/app/components/ScrollReveal";
import LeadForm from "@/app/components/LeadForm";


export const metadata: import("next").Metadata = {
  title: "Design, Branding e Presenca Digital em Mocambique",
  description: "A Fictious Designs cria identidades visuais, websites e estrategias digitais para empresas e marcas em Mocambique.",
  alternates: {
    canonical: "/",
  },
};
export default function Home() {
  return (
    <main className="ambient-glow min-h-screen bg-[#09090B] text-white">
      <ScrollReveal />

      <div aria-hidden="true" className="ambient-glow-layer">
        <div className="ambient-glow-orb" />
      </div>

      {/* Mantém aqui todas as tuas secções existentes */}

        {/* O RESTO DO TEU CÓDIGO CONTINUA AQUI */}

      {/* Navegação responsiva */}
<Navigation />

      <section
  id="inicio"
  className="relative isolate overflow-hidden border-b border-white/10 px-5 py-10 sm:px-6 sm:py-12 md:px-16 lg:py-16 xl:py-20"
>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-violet-700/10 blur-[120px]"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-8 sm:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          <div className="relative z-10">
            <div className="hero-enter hero-enter-1 mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-violet-500" />
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-violet-300 md:text-sm">
                Design · Estratégia · Digital
              </p>
            </div>

<h1 className="hero-enter hero-enter-2 max-w-4xl text-[clamp(2.1rem,8vw,3rem)] font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl md:text-7xl xl:text-8xl">              Marcas com identidade.
              <br />
              Negócios com{" "}
              <span className="text-violet-400">presença.</span>
            </h1>

            <p className="hero-enter hero-enter-3 mt-6 max-w-xl text-base leading-7 text-zinc-400 md:mt-8 md:text-lg md:leading-8">
              Transformamos ideias em identidades visuais, experiências
              digitais e estratégias que ajudam marcas a destacar-se.
            </p>

            <div className="hero-enter hero-enter-4 mt-7 flex flex-wrap items-center gap-3 sm:gap-4 md:mt-10">
              <a
                href="#contacto"
                className="inline-flex items-center gap-3 rounded-full bg-violet-600 px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-violet-500"
              >
                Iniciar um projeto
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/60 hover:bg-white/[0.04]"
              >
                Explorar serviços
              </a>
            </div>

            <div className="hero-enter hero-enter-5 mt-9 flex items-center gap-3 text-xs text-zinc-500 sm:mt-12 sm:text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-violet-500" />
              </span>
              Criatividade com intenção. Design com propósito.
            </div>
          </div>

          {/* Elemento visual animado */}
          <div
            aria-hidden="true"
            className="hero-enter hero-enter-3 relative mx-auto flex aspect-square w-full max-w-[300px] items-center justify-center sm:max-w-[360px] lg:max-w-[460px]"
          >
            <div className="absolute inset-[5%] rounded-full border border-white/[0.07]" />
            <div className="absolute inset-[15%] rounded-full border border-violet-400/15" />
            <div className="absolute inset-[25%] rounded-full border border-white/[0.06]" />

            <div className="hero-orb-glow absolute h-[75%] w-[75%] rounded-full bg-violet-700/20 blur-[75px]" />

            <div className="hero-orb-float relative h-[55%] w-[55%] rounded-full bg-[radial-gradient(circle_at_30%_25%,#ddd6fe_0%,#a78bfa_12%,#8b5cf6_28%,#5b21b6_52%,#21103f_75%,#09090b_100%)] shadow-[0_0_80px_rgba(139,92,246,0.22)]">
              <div className="absolute inset-[8%] rounded-full border border-white/20" />
              <div className="absolute left-[12%] top-[10%] h-[22%] w-[35%] rounded-full bg-white/20 blur-xl" />
            </div>

            <div className="absolute right-[4%] top-[19%] h-3 w-3 rounded-full bg-violet-300 shadow-[0_0_24px_rgba(167,139,250,0.9)]" />
            <div className="absolute bottom-[18%] left-[8%] h-2 w-2 rounded-full bg-white/70" />

            <div className="absolute bottom-[8%] right-0 rounded-xl border border-white/10 bg-[#141419]/90 px-4 py-3 backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                Fictious Designs
              </p>
              <p className="mt-1 text-sm font-medium text-white">
                Ideias em movimento.
              </p>
            </div>
          </div>
        </div>
            </section>

      <LogoMarquee />

      {/* Serviços */}
      <section id="servicos" className="scroll-mt-24 px-5 py-12 sm:px-6 sm:py-14 md:px-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
              O que fazemos
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Soluções criativas para marcas com{" "}
              <span className="text-violet-400">ambição.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
              Combinamos design, estratégia e tecnologia para construir uma
              presença digital coerente, profissional e preparada para crescer.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Design Gráfico & Branding",
                description:
                  "Criamos identidades visuais, materiais gráficos e sistemas de marca que comunicam valor e personalidade.",
                contratacao: "Por projecto",
                icon: Palette,
              },
              {
                number: "02",
                title: "Gestão de Redes Sociais",
                description:
                  "Planeamos conteúdos e uma presença consistente para aproximar a tua marca do público certo.",
                contratacao: "Acompanhamento mensal",
                icon: Share2,
              },
              {
  number: "03",
  title: "UI/UX Design & Desenvolvimento Web",
  description:
    "Concebemos interfaces intuitivas e desenvolvemos websites modernos e responsivos, combinando experiência do utilizador, design e tecnologia para responder aos objectivos do teu negócio.",
  contratacao: "Projectos personalizados",
  icon: Monitor,
},
              {
                number: "04",
                title: "Marketing Digital & Ads",
                description:
                  "Estruturamos campanhas e acções digitais orientadas para aumentar a visibilidade e gerar oportunidades.",
                contratacao: "Por campanha ou mensal",
                icon: Megaphone,
              },
              {
                number: "05",
                title: "Estratégia de Conteúdo",
                description:
                  "Transformamos ideias em conteúdos relevantes, com uma direcção criativa consistente para a tua marca.",
                contratacao: "Por projecto ou mensal",
                icon: Camera,
              },
              {
                number: "06",
                title: "SEO Local",
                description:
                  "Melhoramos a presença da tua empresa nas pesquisas locais para facilitar a descoberta pelos clientes.",
                contratacao: "Por projecto ou mensal",
                icon: Search,
              },
            ].map((servico) => {
              const Icon = servico.icon;

              return (
               <article
  key={servico.number}
className="scroll-reveal group relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111114] p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-[#15131b] sm:min-h-[280px] sm:p-6 md:p-7">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/[0.08] text-violet-300 transition duration-300 group-hover:border-violet-400/30 group-hover:bg-violet-500/15">
                      <Icon size={22} strokeWidth={1.6} />
                    </div>

                    <span className="text-sm font-medium tracking-wider text-violet-400/80">
                      {servico.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-semibold tracking-tight text-white">
                    {servico.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {servico.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                    <span className="text-xs font-medium tracking-wide text-violet-300">
                      {servico.contratacao}
                    </span>
                  </div>

                  <div className="mt-auto flex justify-end pt-6">
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.6}
                      className="text-zinc-500 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="mt-10 flex justify-center">
  <a
    href="/servicos"
    className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/60 hover:bg-violet-500/[0.06]"
  >
    Explorar todos os serviços
    <ArrowUpRight size={17} />
  </a>
</div>
      </section>

      {/* Pacotes */}
      <section id="pacotes" className="scroll-mt-24 px-5 py-12 sm:px-6 sm:py-14 md:px-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
              Soluções para a tua marca
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Estratégia certa.
              <br />
              <span className="text-violet-400">Presença com propósito.</span>
            </h2>

            <p className="relative mt-5 max-w-lg text-sm leading-7 text-zinc-400 md:text-base">
  Ideal para marcas que procuram começar ou manter uma presença
  profissional nas redes sociais, com conteúdos organizados e uma
  comunicação visual consistente.
</p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {/* Essence */}
<article className="scroll-reveal group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-[#111114] p-5 transition duration-300 hover:border-violet-500/35 sm:p-7 md:p-9">              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-700/[0.08] blur-[90px] transition duration-500 group-hover:bg-violet-700/[0.14]"
              />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-violet-400">
                    01 - PACOTE
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    Essence
                  </h3>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/[0.08] text-violet-300">
                  <Palette size={23} strokeWidth={1.5} />
                </div>
              </div>

              <p className="relative mt-5 max-w-lg text-sm leading-7 text-zinc-400 md:text-base">
                Para marcas que procuram uma identidade visual distinta e uma
                comunicação que transmita profissionalismo, personalidade e
                valor.
              </p>

              <div className="relative mt-8 border-t border-white/[0.08] pt-6">
  <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
    Ideal para
  </p>

  <ul className="mt-4 space-y-3 text-sm text-zinc-300">
    <li className="flex items-start gap-3">
      <ArrowUpRight
        size={16}
        className="mt-0.5 shrink-0 text-violet-400"
      />
      Planeamento básico de conteúdos para redes sociais;
    </li>
    <li className="flex items-start gap-3">
      <ArrowUpRight
        size={16}
        className="mt-0.5 shrink-0 text-violet-400"
      />
      Criação de designs para publicações;
    </li>
    <li className="flex items-start gap-3">
      <ArrowUpRight
        size={16}
        className="mt-0.5 shrink-0 text-violet-400"
      />
      Gestão da presença digital da marca, conforme o plano contratado.
    </li>
  </ul>
</div>

               <div className="relative mt-auto flex flex-col gap-4 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-white">
  Gestão mensal de redes sociais
</p>
<p className="mt-1 text-xs text-zinc-500">
  Plano essencial para a tua marca
</p>
                </div>

                <a
                  href="/pacotes#essence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-violet-400/50 hover:bg-violet-500/10 hover:shadow-[0_0_24px_rgba(139,92,246,0.18)]"
                >
                  Explorar Essence
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </article>

            {/* Momentum */}
<article className="scroll-reveal group relative flex flex-col overflow-hidden rounded-2xl border border-violet-400/25 bg-[#111114] p-5 transition duration-300 hover:border-violet-400/50 sm:p-7 md:p-9">              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-700/[0.12] blur-[90px] transition duration-500 group-hover:bg-violet-700/[0.18]"
              />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-violet-400">
                    02 - PACOTE
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    Momentum
                  </h3>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/[0.1] text-violet-300">
                  <Share2 size={23} strokeWidth={1.5} />
                </div>
              </div>

              <p className="relative mt-5 max-w-lg text-sm leading-7 text-zinc-400 md:text-base">
  Para negócios que querem fortalecer a sua presença nas redes sociais
  através de planeamento estratégico, conteúdos consistentes e uma
  gestão mais estruturada da sua comunicação digital.
</p>

              <div className="relative mt-8 border-t border-white/[0.08] pt-6">
  <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
    Ideal para
  </p>

  <ul className="mt-4 space-y-3 text-sm text-zinc-300">
    <li className="flex items-start gap-3">
      <ArrowUpRight
        size={16}
        className="mt-0.5 shrink-0 text-violet-400"
      />
      Planeamento estratégico de conteúdos;
    </li>
    <li className="flex items-start gap-3">
      <ArrowUpRight
        size={16}
        className="mt-0.5 shrink-0 text-violet-400"
      />
      Criação de conteúdos e design para publicações;
    </li>
    <li className="flex items-start gap-3">
      <ArrowUpRight
        size={16}
        className="mt-0.5 shrink-0 text-violet-400"
      />
      Gestão e acompanhamento contínuo das redes sociais.
    </li>
  </ul>
</div>

               <div className="relative mt-auto flex flex-col gap-4 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-white">
  Gestão mensal de redes sociais
</p>
<p className="mt-1 text-xs text-zinc-500">
  Plano intermédio para marcas em crescimento
</p>
                </div>

                <a
                  href="/pacotes#momentum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 px-5 py-3 text-sm font-medium text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-violet-500 hover:shadow-[0_0_28px_rgba(139,92,246,0.3)]"
                >
                  Explorar Momentum
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          </div>

          <p className="mt-8 text-sm leading-6 text-zinc-500">
            Cada proposta é ajustada ao âmbito, aos objectivos e às necessidades
            específicas do projecto.
          </p>
        </div>
      </section>

      {/* Portfólio */}
      <section id="portfolio" className="scroll-mt-24 px-5 py-12 sm:px-6 sm:py-14 md:px-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
                Portfólio selecionado
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                Ideias que ganham{" "}
                <span className="text-violet-400">forma.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
                Uma seleção de trabalhos criativos, identidades visuais e
                experiências digitais. Em breve, poderás explorar os nossos
                projetos.
              </p>
            </div>

            <span className="w-fit rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-wider text-zinc-400">
             
            </span>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {/* Projeto 01 — DIAMAM */}
            <article className="scroll-reveal group rounded-2xl transition-all duration-500 ease-out motion-reduce:transition-none hover:-translate-y-1 hover:drop-shadow-[0_16px_32px_rgba(139,92,246,0.12)]">
              <a href="/portfolio/branding" className="block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111114] transition-colors duration-500 group-hover:border-violet-500/40">
                  <Image
                    src="/images/portfolio/branding/DIAMAM%20Clothing%20Brand%20Showcase.png"
                    alt="Projeto DIAMAM Clothing Brand Showcase — identidade visual e branding"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    Branding
                  </span>
                  <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition duration-300 group-hover:bg-violet-600">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-violet-400">
                      Branding & identidade
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight">
                      Identidades que deixam marca
                    </h3>
                  </div>
                  <span className="pt-1 text-sm text-zinc-600">01</span>
                </div>
              </a>
            </article>

            {/* Projeto 02 — UrbanStyle */}
            <article className="scroll-reveal group rounded-2xl transition-all duration-500 ease-out motion-reduce:transition-none hover:-translate-y-1 hover:drop-shadow-[0_16px_32px_rgba(139,92,246,0.12)]">
              <a href="/portfolio/desenvolvimento-web" className="block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111114] transition-colors duration-500 group-hover:border-violet-500/40">
                  <Image
                    src="/images/portfolio/desenvolvimento-web/UrbanStyle%20Ecommerce%20Workspace.png"
                    alt="Projeto UrbanStyle Ecommerce Workspace — desenvolvimento web"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    Web design
                  </span>
                  <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition duration-300 group-hover:bg-violet-600">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-violet-400">
                      Desenvolvimento web
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight">
                      Experiências digitais
                    </h3>
                  </div>
                  <span className="pt-1 text-sm text-zinc-600">02</span>
                </div>
              </a>
            </article>

            {/* Projeto 03 — Nexa Tech */}
            <article className="scroll-reveal group rounded-2xl transition-all duration-500 ease-out motion-reduce:transition-none hover:-translate-y-1 hover:drop-shadow-[0_16px_32px_rgba(139,92,246,0.12)]">
              <a href="/portfolio/conteudo-redes-sociais" className="block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111114] transition-colors duration-500 group-hover:border-violet-500/40">
                  <Image
                    src="/images/portfolio/conteudo-redes-sociais/Nexa%20Tech.png"
                    alt="Projeto Nexa Tech — conteúdo e design para redes sociais"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    Social media
                  </span>
                  <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition duration-300 group-hover:bg-violet-600">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-violet-400">
                      Conteúdo & redes sociais
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight">
                      Conteúdo que comunica
                    </h3>
                  </div>
                  <span className="pt-1 text-sm text-zinc-600">03</span>
                </div>
              </a>
            </article>
          </div>

          <div className="mt-6 border-t border-white/[0.08] pt-5">
            <p className="text-sm leading-6 text-zinc-500">
              Cada projeto terá o seu espaço para apresentar o desafio, a
              solução criativa e o resultado.
            </p>
          </div>
        </div>
      </section>


      {/* Desenvolvimento Web */}
      <section
        id="desenvolvimento-web"
        className="relative isolate scroll-mt-24 overflow-hidden border-y border-white/[0.06] px-5 py-14 sm:px-6 sm:py-16 md:px-16 lg:py-20"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-10%] top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-violet-700/[0.12] blur-[120px]"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Conteúdo */}
          <div className="scroll-reveal">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-violet-500" />
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-300 sm:text-sm">
                Desenvolvimento Web
              </p>
            </div>

            <h2 className="mt-7 max-w-xl text-4xl font-semibold leading-[1.1] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              A tua marca merece mais do que{" "}
              <span className="text-violet-400">estar online.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
              Criamos websites modernos, responsivos e personalizados que
              transformam a identidade do teu negócio numa experiência digital
              profissional, intuitiva e preparada para crescer.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Design personalizado",
                "Experiência responsiva",
                "Soluções à medida",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/[0.09] bg-white/[0.02] px-3.5 py-2 text-xs text-zinc-300 transition duration-300 hover:border-violet-400/30 hover:bg-violet-500/[0.06] sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="/desenvolvimento-web"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-violet-600 px-6 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.22)]"
              >
                Explorar desenvolvimento web
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            <p className="mt-5 text-xs leading-6 text-zinc-500">
              Do conceito ao lançamento. Uma solução pensada para o teu negócio.
            </p>
          </div>

          {/* Composição visual */}
          <div className="scroll-reveal relative mx-auto w-full max-w-2xl">
            <div
              aria-hidden="true"
              className="absolute inset-[10%] rounded-full bg-violet-600/[0.12] blur-[90px]"
            />

            <div className="group relative overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0D0D11] p-2 shadow-[0_25px_100px_rgba(0,0,0,0.35)] transition duration-500 hover:-translate-y-1 hover:border-violet-400/30 sm:rounded-3xl sm:p-3">
              {/* Janela do browser */}
              <div className="flex items-center justify-between border-b border-white/[0.08] px-3 py-3 sm:px-5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                </div>

                <div className="rounded-md border border-white/[0.07] bg-white/[0.03] px-4 py-1.5 text-[10px] text-zinc-500 sm:px-8">
                  a-tua-marca.pt
                </div>

                <Monitor
                  size={16}
                  strokeWidth={1.5}
                  className="text-zinc-500"
                />
              </div>

              {/* Website conceptual */}
              <div className="relative m-2 min-h-[290px] overflow-hidden rounded-xl border border-white/[0.06] bg-[#111116] p-5 sm:m-4 sm:min-h-[370px] sm:p-8">
                <div
                  aria-hidden="true"
                  className="absolute right-[-15%] top-[-20%] h-64 w-64 rounded-full bg-violet-600/[0.17] blur-[70px] transition duration-700 group-hover:bg-violet-600/[0.25]"
                />

                <div className="relative flex items-center justify-between border-b border-white/[0.08] pb-5">
                  <span className="text-xs font-semibold tracking-[0.18em] text-white sm:text-sm">
                    YOUR BRAND<span className="text-violet-400">.</span>
                  </span>

                  <div className="hidden items-center gap-4 text-[9px] text-zinc-500 sm:flex">
                    <span>Sobre</span>
                    <span>Serviços</span>
                    <span>Contacto</span>
                  </div>

                  <span className="h-7 w-7 rounded-full border border-violet-400/30 bg-violet-500/[0.08]" />
                </div>

                <div className="relative grid min-h-[225px] grid-cols-[1.1fr_0.9fr] items-center gap-2 sm:min-h-[270px] sm:gap-4">
                  <div className="py-5">
                    <p className="text-[8px] font-medium uppercase tracking-[0.22em] text-violet-300 sm:text-[10px]">
                      A new digital experience
                    </p>

                    <div className="mt-4 space-y-2">
                      <div className="h-3 w-full rounded-full bg-white/80 sm:h-4" />
                      <div className="h-3 w-4/5 rounded-full bg-white/70 sm:h-4" />
                      <div className="h-3 w-3/5 rounded-full bg-violet-400 sm:h-4" />
                    </div>

                    <div className="mt-5 max-w-[180px] space-y-2">
                      <div className="h-1.5 w-full rounded-full bg-white/[0.16]" />
                      <div className="h-1.5 w-4/5 rounded-full bg-white/[0.10]" />
                    </div>

                    <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-violet-600 px-3 py-2 text-[9px] font-medium text-white sm:px-4 sm:text-[10px]">
                      Discover more
                      <ArrowUpRight size={12} />
                    </div>
                  </div>

                  <div className="relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-xl border border-violet-400/20 bg-gradient-to-br from-[#35205C] via-[#17121F] to-[#09090B]">
                    <div className="absolute inset-3 rounded-full border border-white/[0.08] sm:inset-5" />
                    <div className="absolute inset-[18%] rounded-full border border-violet-300/20" />

                    <div className="relative h-[58%] w-[58%] rounded-full bg-[radial-gradient(circle_at_30%_25%,#ddd6fe_0%,#a78bfa_14%,#7c3aed_38%,#2e1065_68%,#09090b_100%)] shadow-[0_0_45px_rgba(139,92,246,0.3)] transition duration-700 group-hover:scale-105" />

                    <span className="absolute bottom-3 left-3 text-[8px] uppercase tracking-[0.18em] text-white/60 sm:bottom-5 sm:left-5 sm:text-[9px]">
                      Designed to stand out
                    </span>
                  </div>
                </div>

                <div className="relative grid grid-cols-3 gap-2 border-t border-white/[0.08] pt-4 sm:gap-4 sm:pt-5">
                  {[
                    { number: "01", label: "Estratégia" },
                    { number: "02", label: "Experiência" },
                    { number: "03", label: "Tecnologia" },
                  ].map((item) => (
                    <div key={item.number}>
                      <p className="text-[9px] text-violet-400">{item.number}</p>
                      <p className="mt-1 text-[9px] text-zinc-400 sm:text-xs">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Etiqueta flutuante */}
            <div className="absolute -bottom-5 right-3 rounded-xl border border-white/[0.12] bg-[#17171D]/95 px-4 py-3 shadow-xl backdrop-blur-xl sm:right-7 sm:px-5">
              <p className="text-[9px] uppercase tracking-[0.18em] text-zinc-500">
                Fictious Designs
              </p>
              <p className="mt-1 text-xs font-medium text-white sm:text-sm">
                Digital, com intenção.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Processo */}
      <section id="processo" className="scroll-mt-24 px-5 py-12 sm:px-6 sm:py-14 md:px-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
              O nosso processo
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Do conceito à{" "}
              <span className="text-violet-400">realidade.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
              Um processo claro, colaborativo e orientado para criar soluções
              alinhadas com os objectivos da tua marca.
            </p>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-6">
            {[
              {
                number: "01",
                title: "Descoberta",
                description:
                  "Conhecemos o teu negócio, os teus objectivos e o público que pretendes alcançar. Tudo começa com uma boa estratégia.",
                label: "Compreender",
              },
              {
                number: "02",
                title: "Criação",
                description:
                  "Transformamos a estratégia em conceitos visuais e soluções digitais, com atenção aos detalhes e à identidade da tua marca.",
                label: "Desenvolver",
              },
              {
                number: "03",
                title: "Entrega",
                description:
                  "Apresentamos a solução final, alinhamos os últimos detalhes e preparamos o projecto para dar o próximo passo.",
                label: "Concretizar",
              },
            ].map((etapa) => (
              <article
                key={etapa.number}
className="scroll-reveal group relative rounded-2xl border border-white/[0.08] bg-[#111114] p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-[#15131b] md:p-8"
>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium tracking-[0.2em] text-violet-400">
                    {etapa.number}
                  </span>
                  <span className="h-px w-12 bg-white/15 transition duration-300 group-hover:w-16 group-hover:bg-violet-400" />
                </div>

                <h3 className="mt-10 text-2xl font-semibold tracking-tight text-white">
                  {etapa.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {etapa.description}
                </p>

                <div className="mt-8 flex items-center gap-3 border-t border-white/[0.08] pt-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-300">
                    {etapa.label}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-5 rounded-2xl border border-violet-400/15 bg-violet-500/[0.05] p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <p className="text-lg font-semibold text-white">
                Tens uma ideia para tirar do papel?
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Vamos conversar sobre o teu projecto e encontrar a melhor
                solução.
              </p>
            </div>

            <a
              href="#contacto"
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-violet-600 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-violet-500"
            >
              Entrar em Contacto
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section
        id="contacto"
        className="relative isolate scroll-mt-24 overflow-hidden px-5 py-12 sm:px-6 sm:py-14 md:px-16 lg:py-20"
      >
        <div
          aria-hidden="true"
          className="hero-orb-glow pointer-events-none absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/10 blur-[120px]"
        />

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="text-center lg:text-left">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
            Entrar em Contacto
          </p>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            O próximo grande projecto pode{" "}
            <span className="text-violet-400">começar aqui.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
            Tens uma ideia, precisas de fortalecer a tua marca ou queres
            melhorar a tua presença digital? Vamos conversar sobre a melhor
            solução para o teu negócio.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/258861846870?text=Ol%C3%A1%2C%20Fictious%20Designs!%20Gostaria%20de%20falar%20sobre%20um%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-violet-600 px-7 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-violet-500 sm:w-auto"
            >
              <MessageCircle size={19} />
              Falar pelo WhatsApp
              <ArrowUpRight size={17} />
            </a>

            <a
              href="#servicos"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-white transition duration-300 hover:border-violet-400/50 hover:bg-white/[0.04] sm:w-auto"
            >
              Explorar serviços
            </a>
          </div>

          <p className="mt-8 text-sm text-zinc-500">
            Atendimento directo e personalizado para o teu projecto.
          </p>
          </div>
          <LeadForm />
        </div>
      </section>
      <Footer />
          </main>
  );
}
