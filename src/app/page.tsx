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
  title: { absolute: "Fictious Media" },
  description: "A Fictious Media cria identidades visuais, websites e estrategias digitais para empresas e marcas em Mocambique.",
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

      {/* MantÃ©m aqui todas as tuas secÃ§Ãµes existentes */}

        {/* O RESTO DO TEU CÃ“DIGO CONTINUA AQUI */}

      {/* NavegaÃ§Ã£o responsiva */}
<Navigation />

      <section
  id="inicio"
  className="relative isolate flex min-h-[min(760px,calc(100svh-5rem))] items-center overflow-hidden px-5 py-12 sm:px-8 md:px-12 lg:px-16"
>
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-[-3%] -z-20 grid scale-105 grid-cols-3 grid-rows-2 gap-1 opacity-70 blur-[5px]"
  >
    <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/portfolio/branding/DIAMAM%20Clothing%20Brand%20Showcase.png')" }} />
    <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/portfolio/desenvolvimento-web/UrbanStyle%20Ecommerce%20Workspace.png')" }} />
    <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/portfolio/conteudo-redes-sociais/Nexa%20Tech.png')" }} />
    <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/portfolio/desenvolvimento-web/UrbanStyle%20Ecommerce%20Workspace.png')" }} />
    <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/portfolio/conteudo-redes-sociais/Nexa%20Tech.png')" }} />
    <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/portfolio/branding/DIAMAM%20Clothing%20Brand%20Showcase.png')" }} />
  </div>

  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 -z-10 bg-[#09090B]/65"
  />
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#09090B]/85 via-[#09090B]/35 to-[#09090B]/50"
  />
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#09090B]/35 via-transparent to-[#09090B]/70"
  />

  <div className="mx-auto w-full max-w-[1500px]">
    <div className="mb-6 flex items-center gap-3 sm:mb-8">
      <span className="h-px w-8 bg-violet-400" />
      <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-violet-300 sm:text-xs">
        Design · Estratégia · Digital
      </p>
    </div>

    <h1 className="max-w-[1400px] text-[clamp(2.7rem,6.4vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-white">
      Marcas com identidade.
      <br />
      Negócios com <span className="text-violet-400">presença.</span>
    </h1>

    <div className="mt-6 flex flex-col items-start justify-between gap-8 sm:mt-8 lg:flex-row lg:items-end lg:gap-10">
  <div className="flex flex-col items-start gap-5">
    <p className="max-w-sm text-sm leading-6 text-zinc-300 sm:text-base sm:leading-7">
      Design e estratégia para marcas que querem destacar-se.
    </p>

    <div className="flex flex-wrap items-center gap-3">
      <a
        href="#contacto"
        className="inline-flex items-center gap-3 rounded-full bg-violet-600 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-violet-500"
      >
        Iniciar um projeto <span aria-hidden="true">↗</span>
      </a>

      <a
        href="#servicos"
        className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-medium text-white transition duration-300 hover:border-violet-400 hover:bg-white/10"
      >
        Explorar serviços
      </a>
    </div>
  </div>

  <div className="flex flex-wrap items-center gap-8 sm:gap-12">
    <div className="flex flex-col gap-1">
      <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        5<span className="text-violet-400">+</span>
      </p>
      <p className="text-xs text-zinc-300 sm:text-sm">
        Anos de experiência
      </p>
    </div>

    <div aria-hidden="true" className="h-12 w-px bg-white/15" />

    <div className="flex flex-col gap-1">
      <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        <span className="text-violet-400">+</span>50
      </p>
      <p className="text-xs text-zinc-300 sm:text-sm">
        Projectos concluídos
      </p>
    </div>
  </div>
</div>
</div>
</section>

      <LogoMarquee />

            {/* Serviços */}
      <section
        id="servicos"
        className="scroll-mt-24 px-5 py-16 sm:px-6 sm:py-20 md:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-[1fr_0.65fr] md:items-end">
            <div className="max-w-3xl scroll-reveal">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-violet-400">
                O que fazemos
              </p>

              <h2 className="mt-5 text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Ideias com intenção.
                <span className="block text-zinc-500">
                  Soluções com impacto.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-zinc-400 md:justify-self-end md:text-base">
              Do conceito à execução, combinamos criatividade, estratégia e
              tecnologia para construir marcas com uma presença consistente
              no mundo digital.
            </p>
          </div>

          <div className="mt-14 grid gap-x-6 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Design Gráfico & Branding",
                description:
                  "Criamos identidades visuais e materiais gráficos que comunicam o valor e a personalidade da tua marca.",
                contratacao: "Por projecto",
                icon: Palette,
              },
              {
                number: "02",
                title: "Gestão de Redes Sociais",
                description:
                  "Planeamos conteúdos e construímos uma presença consistente para aproximar a tua marca do público certo.",
                contratacao: "Acompanhamento mensal",
                icon: Share2,
              },
              {
                number: "03",
                title: "Desenvolvimento Web",
                description:
                  "Desenvolvemos websites modernos, responsivos e intuitivos, alinhados com os objectivos do teu negócio.",
                contratacao: "Projectos personalizados",
                icon: Monitor,
              },
            ].map((servico) => {
              const Icon = servico.icon;

              return (
                <article
                  key={servico.number}
                  className="group relative flex min-h-[290px] flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.02] p-6 transition-all duration-300 hover:border-violet-400/30 hover:bg-white/[0.035] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      size={23}
                      strokeWidth={1.4}
                      className="text-violet-300 transition-transform duration-300 group-hover:scale-110"
                    />

                    <span className="font-mono text-xs tracking-widest text-zinc-600">
                      {servico.number}
                    </span>
                  </div>

                  <h3 className="mt-10 text-xl font-medium leading-snug tracking-tight text-white sm:text-2xl">
                    {servico.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {servico.description}
                  </p>

                  <div className="mt-auto flex items-end justify-between gap-3 pt-7">
                    <span className="text-xs text-zinc-500">
                      {servico.contratacao}
                    </span>

                    <ArrowUpRight
                      size={19}
                      strokeWidth={1.5}
                      className="shrink-0 text-zinc-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300"
                    />
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-16 border-t border-white/[0.09]">
            <p className="py-6 text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
              Outras soluções
            </p>

            {[
              {
                number: "04",
                title: "Marketing Digital & Ads",
                description:
                  "Campanhas digitais orientadas para aumentar a visibilidade e gerar oportunidades.",
                icon: Megaphone,
              },
              {
                number: "05",
                title: "Estratégia de Conteúdo",
                description:
                  "Direcção criativa para transformar ideias em conteúdos relevantes para a tua marca.",
                icon: Camera,
              },
              {
                number: "06",
                title: "SEO Local",
                description:
                  "Melhoramos a presença da tua empresa nas pesquisas locais.",
                icon: Search,
              },
            ].map((servico) => {
              const Icon = servico.icon;

              return (
                <article
                  key={servico.number}
                  className="group grid gap-3 border-b border-white/[0.08] py-5 transition-colors duration-300 hover:border-violet-400/30 sm:grid-cols-[60px_1fr_auto] sm:items-center sm:gap-5"
                >
                  <span className="font-mono text-xs tracking-widest text-zinc-600">
                    {servico.number}
                  </span>

                  <div>
                    <h3 className="text-base font-medium text-zinc-200 transition-colors group-hover:text-white sm:text-lg">
                      {servico.title}
                    </h3>

                    <p className="mt-1 max-w-2xl text-sm leading-6 text-zinc-500">
                      {servico.description}
                    </p>
                  </div>

                  <Icon
                    size={19}
                    strokeWidth={1.5}
                    className="hidden text-violet-300/70 transition-transform duration-300 group-hover:translate-x-1 sm:block"
                  />
                </article>
              );
            })}
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-6 text-zinc-500">
              Cada solução é pensada de acordo com os objectivos e as
              necessidades da tua marca.
            </p>

            <a
              href="/servicos"
              className="inline-flex w-fit items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-500/[0.06]"
            >
              Explorar todos os serviços
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

            {/* Pacotes */}
      <section
        id="pacotes"
        className="scroll-mt-24 px-5 py-12 sm:px-6 sm:py-14 md:px-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="scroll-reveal text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
              Soluções para a tua marca
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              O próximo passo.
              <br />
              <span className="text-violet-400">
                Começa com a escolha certa.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-400 md:text-base">
              Cada marca tem o seu caminho. Descobre a solução que melhor
              acompanha a tua visão e os teus próximos objectivos.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {/* Essence */}
            <article className="scroll-reveal group relative flex min-h-[340px] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0e0e12] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:shadow-[0_16px_48px_rgba(139,92,246,0.08)] sm:p-8 md:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-700/[0.08] blur-[90px] transition duration-500 group-hover:bg-violet-700/[0.14]"
              />

              <div className="relative flex items-center justify-between gap-4">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-violet-400">
                  01 / Identidade & Design
                </p>

                <Palette
                  size={23}
                  strokeWidth={1.5}
                  className="shrink-0 text-violet-300"
                />
              </div>

              <div className="relative mt-10">
                <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Essence<span className="text-violet-400">.</span>
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400 md:text-base">
                  A identidade da tua marca começa com uma visão clara.
                  Cria uma presença visual distinta, coerente e feita para
                  deixar uma impressão duradoura.
                </p>
              </div>

              <div className="relative mt-auto flex items-center justify-between gap-4 border-t border-white/[0.08] pt-6">
                <p className="text-xs leading-5 text-zinc-500 sm:text-sm">
                  Dá forma à tua identidade.
                </p>

                <a
                  href="/pacotes#essence"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-500/10"
                >
                  Descobrir Essence
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </article>

            {/* Momentum */}
            <article className="scroll-reveal group relative flex min-h-[340px] flex-col overflow-hidden rounded-2xl border border-violet-400/20 bg-[#100e15] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/45 hover:shadow-[0_16px_48px_rgba(139,92,246,0.12)] sm:p-8 md:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-700/[0.12] blur-[90px] transition duration-500 group-hover:bg-violet-700/[0.18]"
              />

              <div className="relative flex items-center justify-between gap-4">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-violet-400">
                  02 / Redes Sociais
                </p>

                <Share2
                  size={23}
                  strokeWidth={1.5}
                  className="shrink-0 text-violet-300"
                />
              </div>

              <div className="relative mt-10">
                <h3 className="text-3xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-violet-100 md:text-4xl">
                  Momentum<span className="text-violet-400">.</span>
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400 md:text-base">
                  A tua marca tem mais para mostrar. Reforça a tua presença
                  digital com comunicação consistente, conteúdo pensado
                  com intenção e uma imagem que merece atenção.
                </p>
              </div>

              <div className="relative mt-auto flex items-center justify-between gap-4 border-t border-violet-400/[0.12] pt-6">
                <p className="text-xs leading-5 text-zinc-500 sm:text-sm">
                  Dá movimento à tua presença.
                </p>

                <a
                  href="/pacotes#momentum"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-violet-600 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-500 hover:shadow-[0_0_28px_rgba(139,92,246,0.25)]"
                >
                  Descobrir Momentum
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          </div>

          <p className="mt-8 text-sm leading-6 text-zinc-500">
            Explora cada solução e descobre todos os detalhes na página do
            respectivo pacote.
          </p>
        </div>
      </section>

                  {/* Portfólio */}
      <section
        id="portfolio"
        className="scroll-mt-24 px-5 py-16 sm:px-6 sm:py-20 md:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-violet-400">
                Portfólio selecionado
              </p>

              <h2 className="mt-5 text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Ideias que ganham{" "}
                <span className="text-zinc-500">forma.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-zinc-400 md:text-base">
              Uma selecção de projectos que reflectem a nossa abordagem ao
              branding, ao design e às experiências digitais.
            </p>
          </div>

          <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Projeto 01 — DIAMAM */}
            <article className="scroll-reveal group">
              <a href="/portfolio/branding" className="block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#111114]">
                  <Image
                    src="/images/portfolio/branding/DIAMAM%20Clothing%20Brand%20Showcase.png"
                    alt="Projecto DIAMAM Clothing — identidade visual e branding"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
                  />
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-violet-400">
                      Branding & identidade
                    </p>

                    <h3 className="mt-2 text-xl font-medium tracking-tight text-white transition-colors group-hover:text-violet-200">
                      Identidades que deixam marca
                    </h3>
                  </div>

                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.5}
                    className="mt-1 shrink-0 text-zinc-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300"
                  />
                </div>
              </a>
            </article>

            {/* Projeto 02 — UrbanStyle */}
            <article className="scroll-reveal group">
              <a href="/portfolio/desenvolvimento-web" className="block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#111114]">
                  <Image
                    src="/images/portfolio/desenvolvimento-web/UrbanStyle%20Ecommerce%20Workspace.png"
                    alt="Projecto UrbanStyle — experiência de comércio electrónico"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
                  />
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-violet-400">
                      Desenvolvimento web
                    </p>

                    <h3 className="mt-2 text-xl font-medium tracking-tight text-white transition-colors group-hover:text-violet-200">
                      Experiências digitais
                    </h3>
                  </div>

                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.5}
                    className="mt-1 shrink-0 text-zinc-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300"
                  />
                </div>
              </a>
            </article>

            {/* Projeto 03 — Nexa Tech */}
            <article className="scroll-reveal group">
              <a href="/portfolio/conteudo-redes-sociais" className="block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#111114]">
                  <Image
                    src="/images/portfolio/conteudo-redes-sociais/Nexa%20Tech.png"
                    alt="Projecto Nexa Tech — conteúdo e design para redes sociais"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
                  />
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-violet-400">
                      Conteúdo & redes sociais
                    </p>

                    <h3 className="mt-2 text-xl font-medium tracking-tight text-white transition-colors group-hover:text-violet-200">
                      Conteúdo que comunica
                    </h3>
                  </div>

                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.5}
                    className="mt-1 shrink-0 text-zinc-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300"
                  />
                </div>
              </a>
            </article>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-zinc-400">
              Estratégia, criatividade e execução ao serviço de cada marca.
            </p>

            <a
              href="#contacto"
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-violet-400 transition-colors hover:text-violet-300"
            >
              Vamos criar o teu próximo projecto
              <ArrowUpRight size={16} />
            </a>
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
          {/* ConteÃºdo */}
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
              className="pointer-events-none absolute inset-[12%] rounded-full bg-violet-600/[0.12] blur-[100px]"
            />

            {/* Janela do website */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0C0C10] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.4)] transition duration-500 hover:border-violet-400/25 sm:rounded-3xl sm:p-3">
              {/* Barra do browser */}
              <div className="flex items-center justify-between border-b border-white/[0.08] px-3 py-3 sm:px-5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                  <span className="text-[10px] tracking-wide text-zinc-400">
                    preview.website
                  </span>
                </div>

                <Monitor
                  size={16}
                  strokeWidth={1.5}
                  className="text-zinc-500"
                />
              </div>

              {/* Interface do website */}
              <div className="relative m-2 overflow-hidden rounded-xl border border-white/[0.07] bg-[#111114] sm:m-4">
                {/* Navegação */}
                <header className="relative flex items-center justify-between border-b border-white/[0.08] px-4 py-4 sm:px-6 sm:py-5">
                  <span className="text-sm font-semibold tracking-[-0.04em] text-white sm:text-base">
                    STUDIO<span className="text-violet-400">.</span>
                  </span>

                  <nav className="hidden items-center gap-5 text-[10px] text-zinc-400 sm:flex">
                    <span>Início</span>
                    <span>Projectos</span>
                    <span>Sobre</span>
                  </nav>

                  <span className="inline-flex items-center gap-2 text-[9px] font-medium text-white sm:text-[10px]">
                    Vamos conversar
                    <ArrowUpRight size={13} className="text-violet-300" />
                  </span>
                </header>

                {/* Hero da demonstração */}
                <div className="relative grid min-h-[300px] grid-cols-[1.1fr_0.9fr] items-center gap-3 px-4 py-8 sm:min-h-[370px] sm:gap-5 sm:px-7 sm:py-10">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-16 top-10 h-48 w-48 rounded-full bg-violet-600/[0.08] blur-[70px]"
                  />

                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 border border-violet-400/20 bg-violet-500/[0.06] px-2.5 py-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                      <span className="text-[8px] uppercase tracking-[0.14em] text-violet-200 sm:text-[9px]">
                        Presença digital
                      </span>
                    </div>

                    <h3 className="mt-5 text-3xl font-medium leading-[0.98] tracking-[-0.07em] text-white sm:mt-7 sm:text-5xl">
                      Ideias
                      <br />
                      que criam
                      <br />
                      <span className="text-violet-400">impacto.</span>
                    </h3>

                    <p className="mt-4 max-w-[210px] text-[10px] leading-5 text-zinc-400 sm:mt-5 sm:text-xs sm:leading-6">
                      Experiências digitais pensadas para marcas com visão.
                    </p>

                    <div className="mt-5 inline-flex items-center gap-3 bg-violet-600 px-3.5 py-2.5 text-[9px] font-medium text-white transition-colors group-hover:bg-violet-500 sm:mt-7 sm:px-4 sm:text-[10px]">
                      Explorar projecto
                      <ArrowUpRight size={13} />
                    </div>
                  </div>

                  {/* Composição gráfica */}
                  <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden border border-white/[0.08] bg-[#17141F]">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:22px_22px]"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.12] via-transparent to-black/50"
                    />

                    <div className="absolute left-3 top-3 flex items-center gap-1.5 sm:left-4 sm:top-4">
                      <span className="h-1 w-1 rounded-full bg-violet-300" />
                      <span className="text-[7px] uppercase tracking-[0.16em] text-zinc-400 sm:text-[8px]">
                        Digital / 001
                      </span>
                    </div>

                    <div className="relative flex h-[68%] w-[78%] items-center justify-center border border-violet-300/20 bg-gradient-to-br from-violet-500/[0.12] to-transparent">
                      <div className="absolute inset-3 border border-white/[0.08] sm:inset-4" />

                      <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-violet-300/25 bg-[radial-gradient(circle_at_35%_30%,rgba(196,181,253,0.5),rgba(124,58,237,0.2)_40%,rgba(9,9,11,0.95)_75%)] shadow-[0_0_55px_rgba(139,92,246,0.15)] transition-transform duration-700 group-hover:scale-105 sm:h-36 sm:w-36">
                        <span className="text-4xl font-medium tracking-[-0.1em] text-white/90 sm:text-5xl">
                          FD
                        </span>
                      </div>

                      <span className="absolute -right-2 top-[28%] h-4 w-4 border border-violet-300/50 bg-[#17141F] sm:h-5 sm:w-5" />
                      <span className="absolute -bottom-1.5 left-[25%] h-3 w-3 rounded-full bg-violet-400/80 shadow-[0_0_18px_rgba(139,92,246,0.5)]" />
                    </div>

                    <span className="absolute bottom-3 left-3 text-[7px] uppercase tracking-[0.16em] text-zinc-500 sm:bottom-4 sm:left-4 sm:text-[8px]">
                      Design with purpose
                    </span>

                    <span className="absolute bottom-3 right-3 text-[8px] text-violet-300 sm:bottom-4 sm:right-4 sm:text-[9px]">
                      01 — 03
                    </span>
                  </div>
                </div>

                {/* Especialidades */}
                <div className="grid grid-cols-3 border-t border-white/[0.08]">
                  {[
                    { number: "01", label: "Estratégia" },
                    { number: "02", label: "Experiência" },
                    { number: "03", label: "Tecnologia" },
                  ].map((item) => (
                    <div
                      key={item.number}
                      className="border-r border-white/[0.08] px-3 py-4 last:border-r-0 sm:px-5 sm:py-5"
                    >
                      <p className="text-[9px] text-violet-300">
                        {item.number}
                      </p>
                      <p className="mt-1.5 text-[9px] text-zinc-300 sm:text-xs">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Assinatura da agência */}
            <div className="absolute -bottom-5 right-3 border border-white/[0.12] bg-[#17171D]/95 px-4 py-3 shadow-xl backdrop-blur-xl sm:right-7 sm:px-5">
              <p className="text-[9px] uppercase tracking-[0.18em] text-zinc-500">
                Fictious Media
              </p>
              <p className="mt-1 text-xs font-medium text-white sm:text-sm">
                Digital, com intenção.
              </p>
            </div>
          </div>
        </div>
      </section>


            {/* Processo */}
      <section
        id="processo"
        className="scroll-mt-24 px-5 py-16 sm:px-6 sm:py-20 md:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          {/* Cabeçalho */}
          <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
                O nosso processo
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Do conceito à{" "}
                <span className="text-violet-400">realidade.</span>
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-zinc-400 md:justify-self-end md:text-lg">
              Cada projecto começa com uma ideia. O nosso trabalho é
              transformá-la numa solução com intenção, identidade e impacto.
            </p>
          </div>

          {/* Etapas */}
          <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-8">
            {[
              {
                number: "01",
                title: "Descoberta",
                description:
                  "Conhecemos o teu negócio, os teus objectivos e o público que pretendes alcançar.",
                label: "Compreender",
              },
              {
                number: "02",
                title: "Criação",
                description:
                  "Transformamos a estratégia em conceitos visuais e soluções digitais alinhadas com a tua marca.",
                label: "Desenvolver",
              },
              {
                number: "03",
                title: "Entrega",
                description:
                  "Finalizamos os detalhes e preparamos a solução para a tua marca dar o próximo passo.",
                label: "Concretizar",
              },
            ].map((etapa) => (
              <article key={etapa.number} className="group">
                <div className="flex items-center gap-4 border-t border-white/15 pt-5 transition-colors duration-300 group-hover:border-violet-400/70">
                  <span className="text-sm font-medium tracking-[0.2em] text-violet-400">
                    {etapa.number}
                  </span>

                  <span className="h-px flex-1 bg-white/[0.08] transition-colors duration-300 group-hover:bg-violet-400/30" />

                  <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500">
                    {etapa.label}
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-violet-300 sm:text-3xl">
                  {etapa.title}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-400 sm:text-base">
                  {etapa.description}
                </p>
              </article>
            ))}
          </div>

          {/* Chamada para acção */}
          <div className="mt-16 flex flex-col gap-5 border-t border-white/[0.08] pt-7 sm:flex-row sm:items-center sm:justify-between md:mt-20">
            <div>
              <p className="text-lg font-medium text-white sm:text-xl">
                Tens uma ideia para tirar do papel?
              </p>
              <p className="mt-2 text-sm text-zinc-500">
                Vamos encontrar a melhor solução para o teu projecto.
              </p>
            </div>

            <a
              href="#contacto"
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:border-violet-400/50 hover:bg-violet-500/10"
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

                <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Mensagem de contacto */}
          <div className="relative flex flex-col items-center text-center lg:sticky lg:top-28 lg:items-start lg:text-left">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-300">
                Entrar em Contacto
              </span>
            </div>

            <h2 className="mt-7 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
              O próximo grande projecto pode{" "}
              <span className="text-violet-400">começar aqui.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
              Tens uma ideia, precisas de fortalecer a tua marca ou queres
              melhorar a tua presença digital? Vamos encontrar a solução certa
              para o teu negócio.
            </p>

            <div className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row lg:items-start">
              <a
                href="https://wa.me/258861846870?text=Ol%C3%A1%2C%20Fictious%20Designs!%20Gostaria%20de%20falar%20sobre%20um%20projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-violet-600 px-6 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-violet-500 sm:w-auto"
              >
                <MessageCircle size={18} />
                Falar pelo WhatsApp
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="#servicos"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/[0.12] px-6 py-4 text-sm font-medium text-zinc-300 transition duration-300 hover:border-violet-400/40 hover:bg-white/[0.03] hover:text-white sm:w-auto"
              >
                Explorar serviços
              </a>
            </div>

            <div className="mt-10 flex max-w-md items-start gap-4 border-t border-white/[0.09] pt-6 text-left">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/[0.08] text-violet-300">
                <MessageCircle size={18} />
              </div>

              <div>
                <p className="text-sm font-medium text-zinc-200">
                  Contacto directo e personalizado
                </p>
                <p className="mt-1 text-sm leading-6 text-zinc-500">
                  Conta-nos o que tens em mente. Vamos conversar sobre os
                  objectivos e os próximos passos do teu projecto.
                </p>
              </div>
            </div>
          </div>

          {/* Formulário de orçamento — lógica original preservada */}
          <div className="relative min-w-0">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-violet-500/[0.06] blur-2xl"
            />

            <LeadForm />
          </div>
        </div>
      </section>
      <Footer />
          </main>
  );
}






