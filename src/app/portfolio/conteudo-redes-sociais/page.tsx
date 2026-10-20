import Parallax from "@/app/components/Parallax";
import Reveal from "@/app/components/Reveal";
import Navigation from "@/app/components/Navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Conteúdo & Redes Sociais",
  description:
    "Explora projetos de conteúdo digital, design para redes sociais e comunicação visual da Fictious Designs.",
};

export default function ConteudoRedesSociaisPage() {
  const galleryImages = [
    { src: "redes sociais1.png", number: "02" },
    { src: "redes sociais2.png", number: "03" },
    { src: "redes sociais3.png", number: "04" },
    { src: "redes sociais4.png", number: "05" },
    { src: "redes sociais7.png", number: "06" },
    { src: "redes sociais8.png", number: "07" },
    { src: "redes sociais10.png", number: "08" },
    { src: "redes sociais11.png", number: "09" },
    { src: "redes sociais12.png", number: "10" },
    { src: "redes sociais13.png", number: "11" },
    { src: "redes sociais14.png", number: "12" },
    { src: "redes sociais15.png", number: "13" },
    { src: "redes sociais16.png", number: "14" },
    { src: "redes sociais17.png", number: "15" },
    { src: "redes sociais18.png", number: "16" },
    { src: "redes sociais19.png", number: "17" },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#09090b] text-white">
      {/* Navigation partilhada */}
<Navigation />

      {/* Hero */}
      <section className="relative mx-auto flex min-h-[72vh] max-w-7xl flex-col justify-center px-6 py-24 sm:px-10 lg:px-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-violet-600/15 blur-[120px]"
        />

        <div className="relative max-w-5xl">
          <Reveal delay={50}>
            <p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-violet-300 sm:text-sm">
              <span className="h-px w-8 bg-violet-400" />
              Portfólio / Conteúdo & Redes Sociais
            </p>
          </Reveal>

         <Reveal delay={150} variant="mask">
  <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
    Conteúdo que
    <br />
    comunica.
    <br />
    <span className="text-violet-400">
      Design que conecta.
    </span>
  </h1>
</Reveal>

          <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
  <Reveal delay={280}>
    <p className="max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
      Desenvolvemos conteúdos visuais que dão personalidade às
      marcas e ajudam a transmitir mensagens com clareza. Explora
      uma seleção de publicações, campanhas e peças criativas para
      o digital.
    </p>
  </Reveal>

  <Reveal delay={450}>
    <a
      href="#projetos"
      className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm transition-colors hover:border-violet-400/60 hover:bg-violet-400/10"
    >
      Explorar projetos
      <ArrowDown size={16} />
    </a>
  </Reveal>
</div>
        </div>

        <div className="absolute bottom-0 left-6 right-6 h-px bg-white/10 sm:left-10 sm:right-10 lg:left-16 lg:right-16" />
      </section>

      {/* Projects */}
      <section
        id="projetos"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
      >
        <Reveal>
          <div className="mb-12 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">
                Seleção criativa
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                Ideias em destaque
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-zinc-500">
              Cada peça visual é uma oportunidade de criar ligação entre
              uma marca e o seu público.
            </p>
          </div>
        </Reveal>

        <article className="group relative transition-transform duration-500 ease-out hover:-translate-y-1">
          <Reveal delay={100} variant="mask">
            <Link
              href="/"
              aria-label="Nexa Tech — voltar à página inicial"
              className="block"
            >
             <Parallax className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#141419] sm:aspect-[16/9]">
                <Image
                  src="/images/portfolio/conteudo-redes-sociais/Nexa%20Tech.png"
                  alt="Projeto Nexa Tech — conteúdo e design para redes sociais"
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-cover transform-gpu transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] motion-reduce:transition-none"
                  priority
                  
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-10">
                  <div>
                    <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-violet-300">
                      Conteúdo & Comunicação Visual
                    </p>

                    <h3 className="text-2xl font-semibold tracking-tight sm:text-4xl">
                      Nexa Tech
                    </h3>

                    <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-300">
                      Uma apresentação visual dedicada à comunicação
                      digital de uma marca de tecnologia.
                    </p>
                  </div>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 transition-colors group-hover:border-violet-400 group-hover:bg-violet-500">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
              </Parallax>
            </Link>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-5 flex items-center justify-between gap-4 text-xs text-zinc-500 sm:text-sm">
              <span>Design gráfico · Redes sociais</span>
              <span>Projeto 01</span>
            </div>
          </Reveal>
        </article>

        {/* Gallery */}
        <div className="mt-20 border-t border-white/10 pt-10 sm:mt-28 sm:pt-14">
          <Reveal>
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">
                  Explora o nosso trabalho
                </p>

                <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                  Mais do nosso universo.
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-zinc-500">
                Uma coleção de peças visuais criadas para comunicar ideias,
                destacar marcas e captar a atenção.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
  <Reveal
    key={image.number}
    delay={(index % 3) * 100}
    variant="mask"
  >
                <article className="group relative transition-transform duration-500 ease-out hover:-translate-y-1">
                  <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#141419] transition-[border-color,box-shadow] duration-500 ease-out group-hover:border-violet-400/40 group-hover:shadow-[0_20px_60px_rgba(139,92,246,0.12)]">
                    <Image
                      src={`/images/portfolio/conteudo-redes-sociais/${encodeURIComponent(image.src)}`}
                      alt={`Projeto de conteúdo para redes sociais ${image.number}`}
                      width={1122}
                      height={1402}
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="h-auto w-full transform-gpu transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07] motion-reduce:transition-none"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4 py-4">
                    <span className="text-sm text-zinc-400 transition-colors duration-300 group-hover:text-white">
                      Design para redes sociais
                    </span>

                    <span className="text-xs tracking-widest text-zinc-600 transition-colors duration-300 group-hover:text-violet-400">
                      {image.number}
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
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
            Descobrir a Fictious Designs
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </footer>
    </main>
  );
}