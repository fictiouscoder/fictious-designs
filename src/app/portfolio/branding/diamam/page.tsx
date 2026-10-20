import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/app/components/Navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Palette,
  Share2,
  Monitor,
} from "lucide-react";

export const metadata: Metadata = {
  title: "DIAMAM Clothing | Estudo de Caso",
  description:
    "Conhece o trabalho da Fictious Designs para a DIAMAM, incluindo branding, identidade visual, gestão de redes sociais e desenvolvimento web.",
};

const services = [
  {
    number: "01",
    icon: Palette,
    title: "Branding & Identidade Visual",
    description:
      "Desenvolvimento da identidade visual e construção de uma linguagem gráfica alinhada com a marca DIAMAM.",
    status: "Trabalho desenvolvido",
  },
  {
    number: "02",
    icon: Share2,
    title: "Gestão de Redes Sociais",
    description:
      "Gestão da presença digital da marca através de conteúdos visuais e comunicação nas redes sociais.",
    status: "Acompanhamento contínuo",
  },
  {
    number: "03",
    icon: Monitor,
    title: "Desenvolvimento Web",
    description:
      "Criação da presença digital da DIAMAM através de um website pensado para apresentar a marca no ambiente digital.",
    status: "Em desenvolvimento",
  },
];

const socialPosts = [
  {
    src: "/images/portfolio/branding/diamam/redes-sociais/10MIL%20SEGUIDORES%20DIAMAM.png",
    title: "10 mil seguidores",
  },
  {
    src: "/images/portfolio/branding/diamam/redes-sociais/25JUNHO%20DIAMAM%20(1).png",
    title: "25 de Junho",
  },
  {
    src: "/images/portfolio/branding/diamam/redes-sociais/7SETDIAMAM%20(3).png",
    title: "7 de Setembro",
  },
  {
    src: "/images/portfolio/branding/diamam/redes-sociais/Banding%20boxes.png",
    title: "Branding boxes",
  },
  {
    src: "/images/portfolio/branding/diamam/redes-sociais/Diadacidademaputo.png",
    title: "Dia da Cidade de Maputo",
  },
  {
    src: "/images/portfolio/branding/diamam/redes-sociais/DIAMAM%20JULY%20BLACKOUTT%2025%25.png",
    title: "July Blackout",
  },
  {
    src: "/images/portfolio/branding/diamam/redes-sociais/DIAMMbolsas.png",
    title: "Colecção de bolsas",
  },
  {
    src: "/images/portfolio/branding/diamam/redes-sociais/LACOSTESHOES1.png",
    title: "Lacoste Shoes — 01",
  },
  {
    src: "/images/portfolio/branding/diamam/redes-sociais/LACOSTESHOES2.png",
    title: "Lacoste Shoes — 02",
  },
  {
    src: "/images/portfolio/branding/diamam/redes-sociais/LACOSTESHOES3.png",
    title: "Lacoste Shoes — 03",
  },
  {
    src: "/images/portfolio/branding/diamam/redes-sociais/Watches25%25%20(1).png",
    title: "Campanha de relógios",
  },
];

export default function DIAMAMCaseStudyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#09090b] text-white">
      <Navigation />

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-12 sm:px-10 sm:pb-24 sm:pt-16 lg:px-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-violet-600/15 blur-[120px]"
        />

        <div className="relative">
          <Link
            href="/portfolio/branding"
            className="mb-12 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-violet-300"
          >
            <ArrowLeft size={16} />
            Voltar ao portfólio de Branding
          </Link>

          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-xs font-medium text-violet-300">
              Estudo de caso
            </span>

            <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-400">
              Cliente real
            </span>
          </div>

          <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-violet-300 sm:text-sm">
            <span className="h-px w-8 bg-violet-400" />
            Branding · Social Media · Web
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            DIAMAM
            <br />
            <span className="text-violet-400">
              Clothing Brand.
            </span>
          </h1>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              Um projecto de colaboração contínua que reúne identidade
              visual, comunicação nas redes sociais e desenvolvimento
              da presença digital da marca.
            </p>

            <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm text-zinc-300">
              <Clock3 size={16} className="text-violet-400" />
              Projecto em curso
            </span>
          </div>
        </div>
      </section>

      {/* Project image */}
      <section className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#141419] sm:aspect-[16/9]">
          <Image
            src="/images/portfolio/branding/DIAMAM%20Clothing%20Brand%20Showcase.png"
            alt="Apresentação visual do projecto DIAMAM Clothing Brand Showcase"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
            priority
          />
        </div>

        <p className="mt-4 text-xs leading-6 text-zinc-500">
          DIAMAM Clothing Brand Showcase · Branding & Identidade Visual
        </p>
      </section>

      {/* Overview */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-16 lg:py-32">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">
            01 / Visão geral
          </p>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Uma marca.
            <br />
            Várias dimensões
            <br />
            de comunicação.
          </h2>
        </div>

        <div className="space-y-6 text-base leading-8 text-zinc-400">
          <p>
            A colaboração entre a Fictious Designs e a DIAMAM
            estende-se para além da identidade visual. O trabalho
            envolve diferentes áreas da presença digital da marca,
            desde a sua apresentação visual até à comunicação nas
            redes sociais e ao desenvolvimento do website.
          </p>

          <p>
            Esta abordagem permite trabalhar diferentes pontos de
            contacto da marca de forma articulada, respeitando a
            identidade visual e as necessidades de comunicação de
            cada canal.
          </p>

          <p className="border-l border-violet-400/60 pl-5 text-sm leading-7 text-zinc-500">
            O projecto permanece em evolução, com o desenvolvimento
            do website ainda em curso.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="mb-14 max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">
              02 / Áreas de trabalho
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Da identidade à presença digital.
            </h2>

            <p className="mt-5 text-base leading-8 text-zinc-400">
              Três áreas de trabalho que contribuem para a construção
              e comunicação da marca DIAMAM.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="flex flex-col rounded-2xl border border-white/10 bg-[#0d0d10] p-6 transition-colors hover:border-violet-400/30 sm:p-8"
                >
                  <div className="mb-10 flex items-center justify-between">
                    <span className="text-sm text-zinc-500">
                      {service.number}
                    </span>

                    <Icon
                      size={22}
                      className="text-violet-400"
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-zinc-400">
                    {service.description}
                  </p>

                  <div className="mt-8 border-t border-white/10 pt-5">
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                      {service.number === "03" ? (
                        <Clock3
                          size={15}
                          className="text-amber-400"
                        />
                      ) : (
                        <CheckCircle2
                          size={15}
                          className="text-violet-400"
                        />
                      )}

                      {service.status}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Brand identity */}
<section className="border-t border-white/10">
  <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <div>
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">
          03 / Identidade visual
        </p>

        <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Uma identidade que representa a marca.
        </h2>

        <p className="mt-6 text-base leading-8 text-zinc-400">
          O trabalho de branding da DIAMAM faz parte de uma abordagem
          visual contínua, pensada para manter a identidade da marca
          reconhecível nos diferentes pontos de contacto com o público.
        </p>

        <div className="mt-8 flex items-center gap-3 text-sm text-zinc-300">
          <span className="h-px w-8 bg-violet-400" />
          Branding & Identidade Visual
        </div>
      </div>

      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#111114] p-10 sm:p-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute h-48 w-48 rounded-full bg-violet-600/10 blur-[80px]"
        />

        <Image
          src="/images/portfolio/branding/diamam/branding/Logo-Diamam.png"
          alt="Logótipo branco da marca DIAMAM"
          width={1402}
          height={1122}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="relative z-10 h-auto w-full object-contain"
        />
      </div>
    </div>
  </div>
</section>

      {/* Social media gallery */}
<section className="border-t border-white/10">
  <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
    <div className="mb-12 max-w-2xl sm:mb-16">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">
        04 / Direcção criativa
      </p>

      <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
        A marca em cada publicação.
      </h2>

      <p className="mt-5 text-base leading-8 text-zinc-400">
        Uma selecção de conteúdos visuais desenvolvidos para a
        comunicação da DIAMAM, incluindo campanhas promocionais,
        produtos e datas comemorativas.
      </p>
    </div>

    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
      {socialPosts.map((post, index) => (
        <article key={post.src} className="group min-w-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-[#141419]">
            <Image
              src={post.src}
              alt={`Publicação de redes sociais da DIAMAM: ${post.title}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>

          <div className="mt-3 flex items-start justify-between gap-2">
            <p className="text-sm leading-6 text-zinc-300">
              {post.title}
            </p>

            <span className="shrink-0 text-xs text-zinc-600">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

      {/* Web development status */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="relative overflow-hidden rounded-3xl border border-violet-400/20 bg-[#111014] p-7 sm:p-12 lg:p-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-600/15 blur-[100px]"
          />

          <div className="relative max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/5 px-4 py-2 text-xs text-amber-300">
              <Clock3 size={14} />
              Em desenvolvimento
            </span>

            <h2 className="mt-8 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              A próxima etapa da presença digital da DIAMAM.
            </h2>

            <p className="mt-6 text-base leading-8 text-zinc-400">
              O website faz parte da evolução do projecto e encontra-se
              actualmente em desenvolvimento. Esta página será
              actualizada à medida que existirem novos materiais
              disponíveis para apresentar.
            </p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:py-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">
              Fictious Designs
            </p>

            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Cada projecto é uma oportunidade para construir algo com identidade.
            </h2>
          </div>

          <Link
            href="/portfolio/branding"
            className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-white/15 px-6 py-4 text-sm transition-colors hover:border-violet-400/60 hover:bg-violet-400/10"
          >
            Explorar Branding
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Fictious Designs
          </p>

          <Link
            href="/"
            className="inline-flex w-fit items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Página inicial
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </footer>
    </main>
  );
}