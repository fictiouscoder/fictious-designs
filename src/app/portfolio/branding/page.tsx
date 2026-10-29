import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/app/components/Navigation";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Branding & Identidade Visual",
  description:
    "Explora projetos de branding, identidade visual e direção criativa da Fictious Media.",
};

export default function BrandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#09090b] text-white">
      <Navigation />

      {/* Hero */}
      <section className="relative mx-auto flex min-h-[72vh] max-w-7xl flex-col justify-center px-6 py-24 sm:px-10 lg:px-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-violet-600/15 blur-[120px]"
        />

        <div className="relative max-w-5xl">
          <p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-violet-300 sm:text-sm">
            <span className="h-px w-8 bg-violet-400" />
            Portfólio / Branding
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            Identidades
            <br />
            que deixam{" "}
            <span className="text-violet-400">marca.</span>
          </h1>

          <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
              Criamos universos visuais que traduzem a essência de cada marca.
              Explora uma seleção de projetos de identidade visual, branding e
              direção criativa.
            </p>

            <a
              href="#projetos"
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm transition-colors hover:border-violet-400/60 hover:bg-violet-400/10"
            >
              Explorar projetos
              <ArrowDown size={16} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-6 right-6 h-px bg-white/10 sm:left-10 sm:right-10 lg:left-16 lg:right-16" />
      </section>

      {/* Projects */}
      <section
        id="projetos"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
      >
        <div className="mb-12 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">
              Seleção criativa
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Trabalhos em destaque
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-zinc-500">
            Cada identidade começa com uma ideia e ganha forma através do
            design.
          </p>
        </div>

        <article className="group">
          <Link
  href="/portfolio/branding/diamam"
  aria-label="Ver estudo de caso da DIAMAM Clothing Brand Showcase"
  className="block"
>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#141419] sm:aspect-[16/9]">
              <Image
                src="/images/portfolio/branding/DIAMAM%20Clothing%20Brand%20Showcase.png"
                alt="Projeto DIAMAM Clothing Brand Showcase — identidade visual e branding"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-10">
                <div>
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-violet-300">
                    Branding & Identidade Visual
                  </p>

                  <h3 className="text-2xl font-semibold tracking-tight sm:text-4xl">
                    DIAMAM Clothing Brand Showcase
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-300">
                    Uma apresentação visual dedicada à identidade de uma marca
                    de moda.
                  </p>
                </div>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 transition-colors group-hover:border-violet-400 group-hover:bg-violet-500">
                  <ArrowUpRight size={20} />
                </span>
              </div>
            </div>
          </Link>

          <div className="mt-5 flex items-center justify-between gap-4 text-xs text-zinc-500 sm:text-sm">
            <span>Identidade visual · Moda</span>
            <span>Projeto 01</span>
          </div>
        </article>

        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-24 sm:pt-10">
          <p className="text-sm leading-7 text-zinc-500">
            Esta seleção será expandida com novos projetos, explorando
            diferentes marcas, linguagens visuais e universos criativos.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Fictious Media
          </p>

          <Link
            href="/"
            className="inline-flex w-fit items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Descobrir a Fictious Media
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </footer>
    </main>
  );
}