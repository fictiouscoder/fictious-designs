import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/app/components/Navigation";
import ScrollReveal from "@/app/components/ScrollReveal";
import WebCodeAtmosphere from "@/app/components/service/WebCodeAtmosphere";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Globe,
  Layers3,
  Monitor,
  ShoppingBag,
  Smartphone,
} from "lucide-react";


export const metadata: Metadata = {
  alternates: {
    canonical: "/desenvolvimento-web",
  },

  title: "Desenvolvimento Web em Moçambique",
  description: "Criamos websites modernos, responsivos e estratégicos para empresas e marcas em Moçambique. Descobre as soluções de desenvolvimento web da Fictious Media.",
};
export default function DesenvolvimentoWebPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08080A] text-white">
      <ScrollReveal />
      <Navigation />

      {/* Background interactivo */}
<div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
  <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-700/[0.12] blur-[150px]" />
  <WebCodeAtmosphere />
</div>

      {/* Hero */}
      <section className="relative z-10 px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-16 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <div className="scroll-reveal max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-violet-500" />
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-300 sm:text-sm">
                Desenvolvimento Web
              </p>
            </div>

            <h1 className="mt-8 text-5xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-8xl">
              A tua próxima ideia merece{" "}
              <span className="text-violet-400">um lugar online.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              Desenvolvemos experiências digitais modernas, estratégicas e
              personalizadas para transformar a presença online da tua marca
              numa vantagem competitiva.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/258861846870"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-violet-600 px-7 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-violet-500"
              >
                Falar sobre o meu projeto
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="#solucoes"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 px-7 py-4 text-sm font-medium text-zinc-300 transition duration-300 hover:border-violet-400/40 hover:text-white"
              >
                Explorar soluções
                <ArrowRight size={17} />
              </a>
            </div>
          </div>

          {/* Indicadores */}
          <div className="mt-16 grid grid-cols-1 gap-4 border-t border-white/[0.08] pt-7 sm:grid-cols-3 sm:gap-8 sm:pt-9">
            {[
              {
                icon: Monitor,
                title: "Design personalizado",
                description: "Uma identidade digital pensada para a tua marca.",
              },
              {
                icon: Smartphone,
                title: "Experiência responsiva",
                description: "Uma experiência adaptada a diferentes ecrãs.",
              },
              {
                icon: Code2,
                title: "Desenvolvimento à medida",
                description: "Soluções construídas para os teus objetivos.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/[0.08]">
                  <item.icon size={20} className="text-violet-300" />
                </div>

                <div>
                  <h2 className="text-sm font-medium text-white">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-zinc-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soluções */}
      <section
        id="solucoes"
        className="relative border-t border-white/[0.06] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="scroll-reveal max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-300 sm:text-sm">
              As nossas soluções
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
              Websites criados com intenção.
            </h2>

            <p className="mt-5 text-base leading-7 text-zinc-400">
              Cada projeto começa com os objetivos do teu negócio. A partir
              daí, definimos a solução digital mais adequada.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Globe,
                number: "01",
                title: "Websites institucionais",
                description:
                  "Apresenta a tua empresa, os teus serviços e os teus valores através de uma presença digital profissional.",
                features: [
                  "Apresentação da marca;",
                  "Serviços e contactos;",
                  "Design responsivo.",
                ],
              },
              {
                icon: Layers3,
                number: "02",
                title: "Landing pages",
                description:
                  "Páginas focadas numa campanha, produto ou serviço, com uma estrutura pensada para orientar o visitante.",
                features: [
                  "Mensagem estratégica;",
                  "Chamadas à ação;",
                  "Estrutura objetiva.",
                ],
              },
              {
                icon: ShoppingBag,
                number: "03",
                title: "Lojas online",
                description:
                  "Uma experiência de compra digital organizada para apresentar produtos e facilitar a jornada do cliente.",
                features: [
                  "Catálogo de produtos;",
                  "Experiência de compra;",
                  "Estrutura adaptável.",
                ],
              },
            ].map((service) => (
              <article
                key={service.number}
                className="scroll-reveal group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-500/[0.03] sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/[0.08]">
                    <service.icon
                      size={22}
                      className="text-violet-300"
                    />
                  </div>

                  <span className="text-sm text-zinc-600">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3 border-t border-white/[0.08] pt-5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-zinc-300"
                    >
                      <Check
                        size={15}
                        className="shrink-0 text-violet-400"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Preços de desenvolvimento web */}
      <section
        id="precos"
        className="relative overflow-hidden border-t border-white/[0.06] px-5 py-20 sm:px-8 sm:py-28 lg:px-16"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/3 top-1/4 h-80 w-80 rounded-full bg-violet-700/[0.10] blur-[130px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="scroll-reveal mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-violet-500" />
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-300 sm:text-sm">
                Investimento
              </p>
              <span className="h-px w-8 bg-violet-500" />
            </div>

            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl md:text-5xl">
              O próximo passo da tua marca começa{" "}
              <span className="text-violet-400">online.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
              Soluções web pensadas para diferentes objectivos, com design
              personalizado, experiência responsiva e espaço para crescer.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Landing Page",
                price: "8.000 MT",
                description:
                  "Uma página estratégica para apresentar um serviço, promover uma oferta ou captar contactos.",
                features: [
                  "Uma página com até 6 secções principais",
                  "Design personalizado e responsivo",
                  "Botões de contacto e WhatsApp",
                  "Optimização SEO básica",
                  "Formulário de contacto, quando aplicável",
                ],
                featured: false,
              },
              {
                number: "02",
                title: "Website Institucional",
                price: "18.000 MT",
                description:
                  "Uma presença digital profissional para apresentar a empresa, os serviços e reforçar a credibilidade da marca.",
                features: [
                  "Até 5 páginas",
                  "Design personalizado e responsivo",
                  "Apresentação de serviços e empresa",
                  "Formulário e integração com WhatsApp",
                  "Optimização SEO básica",
                ],
                featured: true,
              },
              {
                number: "03",
                title: "Loja Online",
                price: "35.000 MT",
                description:
                  "Uma plataforma para apresentar produtos e organizar o processo de encomenda ou compra.",
                features: [
                  "Catálogo e páginas de produtos",
                  "Carrinho e fluxo de encomenda",
                  "Design personalizado e responsivo",
                  "Integração com WhatsApp, quando aplicável",
                  "Testes do processo de compra",
                ],
                featured: false,
              },
            ].map((plan) => (
              <article
                key={plan.number}
                className={`scroll-reveal relative flex flex-col rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 sm:p-8 ${
                  plan.featured
                    ? "border-violet-400/40 bg-violet-500/[0.08] shadow-[0_0_60px_rgba(139,92,246,0.08)]"
                    : "border-white/[0.09] bg-white/[0.02] hover:border-violet-400/30"
                }`}
              >
                {plan.featured && (
                  <span className="mb-5 w-fit rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-violet-300">
                    Mais versátil
                  </span>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                    {plan.number} / Solução
                  </span>
                  <span className="h-2 w-2 rounded-full bg-violet-400" />
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                  {plan.title}
                </h3>

                <p className="mt-3 min-h-20 text-sm leading-6 text-zinc-400">
                  {plan.description}
                </p>

                <div className="mt-6 border-b border-white/[0.08] pb-6">
                  <p className="text-xs text-zinc-500">Investimento inicial</p>
                  <p className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                    {plan.price}
                  </p>
                  <p className="mt-2 text-xs text-zinc-500">
                    Preço desde
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6 text-zinc-300"
                    >
                      <Check
                        size={16}
                        className="mt-1 shrink-0 text-violet-400"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/258861846870?text=${encodeURIComponent(
                    `Olá, Fictious Media! Gostaria de solicitar um orçamento para ${plan.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium transition duration-300 ${
                    plan.featured
                      ? "bg-violet-500 text-white hover:bg-violet-400"
                      : "border border-white/10 text-white hover:border-violet-400/40 hover:bg-violet-500/[0.08]"
                  }`}
                >
                  Solicitar orçamento
                  <ArrowUpRight size={16} />
                </a>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-zinc-500">
            Os valores são indicativos e podem variar conforme o âmbito do
            projecto. Domínio, alojamento, integrações de pagamento, serviços
            externos e funcionalidades adicionais são orçamentados à parte,
            quando aplicável. O orçamento final será confirmado antes do início
            do desenvolvimento.
          </p>
        </div>
      </section>
            {/* Tecnologias e funcionalidades */}
      <section
        id="tecnologias"
        className="relative overflow-hidden border-t border-white/[0.06] px-5 py-20 sm:px-8 sm:py-28 lg:px-16"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-violet-700/[0.10] blur-[130px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="scroll-reveal grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-violet-500" />
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-300 sm:text-sm">
                  Por detrás da experiência
                </p>
              </div>

              <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl md:text-5xl">
                Mais do que aparência.
                <span className="text-violet-400">
                  {" "}Pensamento, estrutura e tecnologia.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-zinc-400 lg:pb-1">
              Um bom website combina uma experiência visual consistente com
              uma base técnica adequada. Selecionamos as abordagens e
              funcionalidades em função do que o teu projeto realmente precisa.
              O resultado? Uma presença digital concebida para fazer sentido
              hoje e acompanhar os próximos passos da tua marca.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Monitor,
                number: "01",
                title: "Interface & experiência",
                description:
                  "Hierarquia visual, navegação intuitiva e conteúdo organizado para que cada visita tenha um propósito.",
                tag: "Pensado para pessoas",
              },
              {
                icon: Smartphone,
                number: "02",
                title: "Design responsivo",
                description:
                  "Layouts adaptáveis a diferentes ecrãs, com atenção à legibilidade, ao espaço e à facilidade de utilização.",
                tag: "Em diferentes ecrãs",
              },
              {
                icon: Code2,
                number: "03",
                title: "Desenvolvimento à medida",
                description:
                  "Uma estrutura técnica escolhida de acordo com a dimensão, os requisitos e os objetivos do projeto.",
                tag: "Adequado a cada projeto",
              },
              {
                icon: Globe,
                number: "04",
                title: "Visibilidade nos motores de busca",
                description:
                  "Boas práticas de estrutura, títulos e organização do conteúdo que ajudam os motores de busca a compreender o website.",
                tag: "Fundamentos de SEO",
              },
              {
                icon: Layers3,
                number: "05",
                title: "Funcionalidades personalizadas",
                description:
                  "Formulários, ligações a serviços externos e outras funcionalidades, conforme a viabilidade e o âmbito acordado.",
                tag: "Conforme os requisitos",
              },
              {
                icon: ShoppingBag,
                number: "06",
                title: "Possibilidades de expansão",
                description:
                  "Uma abordagem que considera as necessidades atuais do negócio e as funcionalidades que poderão fazer sentido no futuro.",
                tag: "Pensado para evoluir",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="scroll-reveal group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-500/[0.04] sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/[0.08]">
                    <item.icon
                      size={21}
                      strokeWidth={1.6}
                      className="text-violet-300"
                    />
                  </div>

                  <span className="text-xs tracking-widest text-zinc-600">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold tracking-tight text-white sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center gap-2 border-t border-white/[0.08] pt-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                  <span className="text-xs text-violet-300/80">
                    {item.tag}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-7">
            <div>
              <p className="text-sm font-medium text-white">
                Nem todos os projetos precisam das mesmas ferramentas.
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
                As tecnologias, integrações e funcionalidades são definidas
                durante o planeamento e confirmadas antes do desenvolvimento.
              </p>
            </div>

            <a
              href="https://wa.me/258861846870?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20as%20possibilidades%20para%20o%20meu%20projeto%20web."
              target="_blank"
              rel="noreferrer"
              className="group mt-5 inline-flex shrink-0 items-center gap-2 text-sm font-medium text-white transition-colors hover:text-violet-300 sm:mt-0"
            >
              Descobrir as possibilidades
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </section>

            {/* Contacto */}
      <section
        id="contacto"
        className="relative overflow-hidden border-t border-white/[0.06] px-5 py-24 sm:px-8 sm:py-32 lg:px-16"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/[0.12] blur-[140px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="scroll-reveal relative overflow-hidden rounded-3xl border border-violet-400/20 bg-[#0D0D11] px-6 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-violet-600/[0.10] blur-[100px]"
            />

            <div className="relative mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.06] px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-violet-300 sm:text-xs">
                  O próximo passo começa contigo
                </span>
              </div>

              <h2 className="mt-7 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                E se a tua próxima grande ideia começasse{" "}
                <span className="text-violet-400">aqui?</span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
                Cada marca tem uma história, uma ambição e algo que a torna
                diferente. Queremos conhecer a tua ideia e explorar contigo
                o que podemos transformar numa experiência digital.
              </p>

              <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <a
                  href="https://wa.me/258861846870?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20website%20da%20Fictious%20Designs%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto%20web."
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-violet-600 px-7 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-violet-500 hover:shadow-[0_0_35px_rgba(139,92,246,0.20)]"
                >
                  Vamos falar sobre a tua ideia
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.10] px-7 py-4 text-sm font-medium text-zinc-300 transition duration-300 hover:border-violet-400/30 hover:text-white"
                >
                  Conhecer a Fictious Media
                  <ArrowRight size={17} />
                </Link>
              </div>

              <p className="mt-6 text-xs leading-6 text-zinc-500">
                Uma conversa pode ser o início de algo extraordinário.
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* Processo de desenvolvimento */}
      <section
        id="processo"
        className="relative overflow-hidden border-t border-white/[0.06] px-5 py-20 sm:px-8 sm:py-28 lg:px-16"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-violet-700/[0.10] blur-[120px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="scroll-reveal max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-violet-500" />
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-300 sm:text-sm">
                O nosso processo
              </p>
            </div>

            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl md:text-5xl">
              Grandes ideias não acontecem por acaso.
              <span className="text-violet-400">
                {" "}São construídas com intenção.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
              Cada projeto segue um percurso pensado para transformar uma
              ideia numa experiência digital coerente com a identidade,
              os objetivos e a visão da tua marca.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                number: "01",
                title: "Briefing",
                description:
                  "Começamos por compreender o teu negócio, os teus objetivos e a experiência que pretendes oferecer aos teus clientes.",
                detail: "Tudo começa com as perguntas certas.",
              },
              {
                number: "02",
                title: "Design",
                description:
                  "Definimos a direção visual, a organização do conteúdo e a experiência que dará personalidade ao teu website.",
                detail: "Uma identidade digital com propósito.",
              },
              {
                number: "03",
                title: "Programação",
                description:
                  "Transformamos o conceito aprovado numa experiência funcional, estruturada e adaptada às necessidades do projeto.",
                detail: "A ideia começa a ganhar vida.",
              },
              {
                number: "04",
                title: "Testes",
                description:
                  "Verificamos a navegação, os elementos essenciais e a apresentação em diferentes tamanhos de ecrã.",
                detail: "Os detalhes também fazem a diferença.",
              },
              {
                number: "05",
                title: "Lançamento",
                description:
                  "Preparamos a publicação do website e os passos necessários para colocar a tua presença digital online.",
                detail: "O início de uma nova etapa.",
              },
            ].map((step) => (
              <article
                key={step.number}
                className="scroll-reveal group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-500/[0.04] sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium tracking-widest text-violet-400">
                    {step.number}
                  </span>

                  <span className="h-2 w-2 rounded-full bg-violet-500/50 transition duration-300 group-hover:bg-violet-300 group-hover:shadow-[0_0_12px_rgba(167,139,250,0.7)]" />
                </div>

                <h3 className="mt-8 text-xl font-semibold tracking-tight text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {step.description}
                </p>

                <div className="mt-6 border-t border-white/[0.08] pt-4">
                  <p className="text-xs leading-6 text-violet-300/80">
                    {step.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/[0.08] pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-6 text-zinc-500">
              Cada projeto tem as suas particularidades. O percurso é definido
              em função dos objetivos e das necessidades de cada cliente.
            </p>

            <a
              href="https://wa.me/258861846870?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto%20de%20desenvolvimento%20web."
              target="_blank"
              rel="noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-white transition-colors hover:text-violet-300"
            >
              Vamos conversar sobre a tua ideia
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] px-5 py-7 sm:px-8 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Fictious Media®. Todos os direitos
            reservados.
          </p>

          <Link
  href="/"
  className="transition-colors hover:text-violet-300"
>
  Voltar à página inicial
</Link>
        </div>
      </footer>
    </main>
  );
}




