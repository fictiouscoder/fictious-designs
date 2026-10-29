import Reveal from "@/app/components/Reveal";
import Navigation from "@/app/components/Navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Desenvolvimento Web",
  description:
    "Explora websites, lojas online e experiências digitais desenvolvidas pela Fictious Media.",
};

export default function DesenvolvimentoWebPage() {

  const galleryImages = [
    {
      src: "desenvolvimento web1.png",
      number: "02",
    },
    {
      src: "desenvolvimento web2.png",
      number: "03",
    },
    {
      src: "desenvolvimento web3.png",
      number: "04",
    },
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
    Portfólio / Desenvolvimento Web
  </p>
</Reveal>

          <Reveal delay={150} variant="mask">
  <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
    Experiências
    <br />
    digitais que{" "}
    <span className="text-violet-400">marcam.</span>
  </h1>
</Reveal>

          <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
  <Reveal delay={280}>
    <p className="max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
      Desenvolvemos experiências digitais que combinam estética,
      funcionalidade e propósito. Explora uma seleção de websites,
      lojas online e soluções digitais.
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
       <div className="mb-12 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
  <Reveal delay={100}>
    <div>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">
        Seleção digital
      </p>

      <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
        Projetos em destaque
      </h2>
    </div>
  </Reveal>

  <Reveal delay={220}>
    <p className="max-w-sm text-sm leading-7 text-zinc-500">
      Cada detalhe conta para transformar uma visita numa experiência
      digital memorável.
    </p>
  </Reveal>
</div>
        <Reveal delay={100} variant="mask">
  <article className="group relative transition-transform duration-500 ease-out hover:-translate-y-1">
          <Link
            href="/"
            aria-label="UrbanStyle Ecommerce Workspace — voltar à página inicial"
            className="block"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#141419] transition-[border-color,box-shadow] duration-500 ease-out group-hover:border-violet-400/40 group-hover:shadow-[0_20px_60px_rgba(139,92,246,0.12)] sm:aspect-[16/9]">
              <Image
                src="/images/portfolio/desenvolvimento-web/UrbanStyle%20Ecommerce%20Workspace.png"
                alt="Projeto UrbanStyle Ecommerce Workspace — design de loja online e desenvolvimento web"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover transform-gpu transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] motion-reduce:transition-none"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-10">
                <div>
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-violet-300">
                    Web design & E-commerce
                  </p>

                  <h3 className="text-2xl font-semibold tracking-tight sm:text-4xl">
                    UrbanStyle Ecommerce Workspace
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-300">
                    Uma experiência digital concebida para apresentar produtos
                    e simplificar a navegação numa loja online.
                  </p>
                </div>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 transition-colors group-hover:border-violet-400 group-hover:bg-violet-500">
                  <ArrowUpRight size={20} />
                </span>
              </div>
            </div>
          </Link>

          <div className="mt-5 flex items-center justify-between gap-4 text-xs text-zinc-500 sm:text-sm">
            <span>Web design · E-commerce</span>
            <span>Projeto 01</span>
          </div>
          </article>
</Reveal>

        <div className="mt-20 border-t border-white/10 pt-10 sm:mt-28 sm:pt-14">
  <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">
        Explora o nosso trabalho
      </p>

      <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
        Experiências digitais.
      </h2>
    </div>

    <p className="max-w-sm text-sm leading-7 text-zinc-500">
      Interfaces pensadas para combinar identidade visual, funcionalidade
      e uma experiência de navegação intuitiva.
    </p>
  </div>

  <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
    {galleryImages.map((image, index) => (
  <Reveal
    key={image.number}
    delay={(index % 2) * 120}
    variant="mask"
  >
    <article
      className={`group transition-transform duration-500 ease-out hover:-translate-y-1 ${
        index === 1 ? "sm:mt-16" : ""
      }`}
    >
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#141419] transition-[border-color,box-shadow] duration-500 ease-out group-hover:border-violet-400/40 group-hover:shadow-[0_20px_60px_rgba(139,92,246,0.12)]">
          <Image
            src={`/images/portfolio/desenvolvimento-web/${encodeURIComponent(image.src)}`}
            alt={`Projeto de desenvolvimento web ${image.number}`}
            width={1024}
            height={1536}
            sizes="(max-width: 639px) 100vw, 50vw"
           className="h-auto w-full transform-gpu transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] motion-reduce:transition-none"
          />
        </div>

        <div className="flex items-center justify-between gap-4 py-4">
          <span className="text-sm text-zinc-400">
            Web design & Desenvolvimento
          </span>

          <span className="text-xs tracking-widest text-zinc-600">
            {image.number}
          </span>
        </div>
           </article>
    </Reveal>
  ))}
  </div>
</div>
      </section>

            {/* Processo de desenvolvimento */}
      <section
        id="processo"
        className="border-t border-white/10 bg-[#0c0c10]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <Reveal delay={100}>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">
              Da ideia ao lançamento
            </p>

            <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Um processo claro.
              <br />
              <span className="text-zinc-500">
                Um resultado com propósito.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              Cada projeto começa com uma ideia e ganha forma através de
              etapas bem definidas. Trabalhamos contigo para transformar
              os teus objetivos numa experiência digital funcional,
              consistente e preparada para o teu negócio.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {[
              {
                number: "01",
                title: "Descobrir",
                description:
                  "Conhecemos o teu negócio, os teus objetivos e o teu público. Analisamos as necessidades do projeto e definimos juntos a direção a seguir.",
              },
              {
                number: "02",
                title: "Planear",
                description:
                  "Organizamos as páginas, a estrutura e a navegação. Definimos a hierarquia dos conteúdos e as funcionalidades necessárias antes de avançar.",
              },
              {
                number: "03",
                title: "Desenvolver",
                description:
                  "Damos vida ao projeto através de um design cuidado e de uma implementação responsiva, com atenção à usabilidade e ao desempenho.",
              },
              {
                number: "04",
                title: "Rever e lançar",
                description:
                  "Testamos as funcionalidades, verificamos a experiência em diferentes dispositivos e revemos contigo os ajustes acordados antes da publicação.",
              },
            ].map((step) => (
              <Reveal key={step.number} delay={100}>
                <article className="group h-full bg-[#0c0c10] p-7 transition-colors duration-300 hover:bg-[#121119] sm:p-10">
                  <div className="mb-12 flex items-center justify-between">
                    <span className="text-sm font-medium tracking-widest text-violet-300">
                      {step.number}
                    </span>
                    <span className="h-px w-10 bg-white/20 transition-all duration-300 group-hover:w-16 group-hover:bg-violet-400" />
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight">
                    {step.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400 sm:text-base">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-sm leading-7 text-zinc-500">
            Ao longo do projeto, mantemos a comunicação contigo para
            partilhar o progresso, esclarecer dúvidas e validar as decisões
            importantes. As etapas são ajustadas à dimensão e às necessidades
            de cada projeto.
          </p>
        </div>
      </section>

      {/* Resultado */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-start lg:gap-20">
          <Reveal delay={100}>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">
              Mais do que presença online
            </p>

            <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Um website pensado para fazer o teu negócio avançar.
            </h2>
          </Reveal>

          <Reveal delay={220}>
            <div className="space-y-5 text-base leading-8 text-zinc-400">
              <p>
                A tua presença digital deve comunicar o valor da tua marca,
                apresentar os teus serviços com clareza e ajudar os visitantes
                a encontrar aquilo de que precisam.
              </p>

              <p>
                Por isso, desenvolvemos websites com estruturas intuitivas,
                identidade visual consistente e experiências adaptadas a
                diferentes dispositivos.
              </p>

              <p>
                O resultado é uma base digital que podes utilizar para
                apresentar o teu negócio, reforçar a tua credibilidade e
                criar novas oportunidades de contacto.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Clareza",
              description:
                "Conteúdos organizados para facilitar a compreensão dos teus serviços.",
            },
            {
              title: "Experiência",
              description:
                "Navegação intuitiva e uma apresentação consistente em vários ecrãs.",
            },
            {
              title: "Evolução",
              description:
                "Uma estrutura que pode ser adaptada às necessidades futuras do negócio.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 120}>
              <article className="h-full rounded-xl border border-white/10 bg-white/[0.02] p-7 transition-colors duration-300 hover:border-violet-400/30">
                <span className="mb-8 block h-1 w-10 rounded-full bg-violet-400" />

                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* O que está incluído */}
      <section className="border-y border-white/10 bg-[#0c0c10]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
          <Reveal delay={100}>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">
              O que podes esperar
            </p>

            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
              Os elementos que dão forma ao teu projeto.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400">
              Cada solução é definida de acordo com os objetivos e o âmbito
              acordado. Conforme o projeto, a entrega poderá incluir:
            </p>
          </Reveal>

          <div className="mt-12 grid gap-x-12 sm:grid-cols-2">
            {[
              "Estrutura e organização das páginas.",
              "Design adaptado a computadores, tablets e smartphones.",
              "Desenvolvimento das páginas e funcionalidades acordadas.",
              "Integração dos conteúdos e elementos visuais fornecidos.",
              "Formulários e canais de contacto, quando aplicável.",
              "Verificação da navegação e das funcionalidades.",
              "Preparação e publicação do website, conforme o acordo.",
              "Orientações para utilização e manutenção, quando incluídas.",
            ].map((item, index) => (
              <Reveal key={item} delay={(index % 2) * 100}>
                <div className="flex gap-4 border-b border-white/10 py-5">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-violet-400/40 text-violet-300">
                    <span className="text-xs">✓</span>
                  </span>

                  <p className="text-sm leading-7 text-zinc-300 sm:text-base">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-7 text-xs leading-6 text-zinc-500">
            Os elementos efetivamente incluídos, bem como eventuais serviços
            adicionais, serão definidos na proposta de cada projeto.
          </p>
        </div>
      </section>

      {/* Perguntas frequentes */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal delay={100}>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">
              Perguntas frequentes
            </p>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              O que precisas de saber antes de começar.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-zinc-400 sm:text-base">
              Reunimos algumas das dúvidas mais comuns para te ajudar a
              compreender o processo e a preparar o teu próximo projeto.
            </p>
          </Reveal>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {[
              {
                question: "Quanto tempo demora a desenvolver um website?",
                answer:
                  "O prazo depende da dimensão do projeto, das funcionalidades e da disponibilidade dos conteúdos. Depois de conhecermos as tuas necessidades, apresentamos uma estimativa adequada.",
              },
              {
                question: "Quanto custa desenvolver um website?",
                answer:
                  "O investimento varia conforme o número de páginas, as funcionalidades e a complexidade do projeto. Podemos analisar os teus objetivos e preparar uma proposta ajustada às tuas necessidades.",
              },
              {
                question: "O website funciona em telemóveis?",
                answer:
                  "Sim. Os projetos são desenvolvidos com atenção à experiência em diferentes tamanhos de ecrã, incluindo smartphones, tablets e computadores.",
              },
              {
                question: "Já tenho um website. Posso modernizá-lo?",
                answer:
                  "Sim. Podemos analisar a estrutura atual e identificar oportunidades de melhoria no design, na navegação, no desempenho e nas funcionalidades. A solução dependerá das características do website existente.",
              },
              {
                question: "Posso acompanhar o desenvolvimento?",
                answer:
                  "Sim. Mantemos a comunicação durante o projeto e partilhamos os pontos de revisão acordados para que possas acompanhar o progresso e dar feedback nas etapas relevantes.",
              },
              {
                question: "O que preciso para iniciar o projeto?",
                answer:
                  "Uma breve descrição do teu negócio, os objetivos do website e os conteúdos ou referências que já tenhas são um bom ponto de partida. Ajudamos-te a identificar o que falta preparar.",
              },
            ].map((faq, index) => (
              <Reveal key={faq.question} delay={(index % 2) * 100}>
                <details className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-medium transition-colors hover:text-violet-300 [&::-webkit-details-marker]:hidden">
                    <span>{faq.question}</span>

                    <ArrowDown
                      size={18}
                      className="shrink-0 text-violet-300 transition-transform duration-300 group-open:rotate-180"
                    />
                  </summary>

                  <p className="max-w-2xl pt-4 pr-8 text-sm leading-7 text-zinc-400">
                    {faq.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
        <Reveal delay={100} variant="mask">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#111016] px-7 py-14 sm:px-12 sm:py-20 lg:px-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-violet-600/20 blur-[110px]"
            />

            <div className="relative max-w-3xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">
                Vamos conversar
              </p>

              <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Vamos dar vida ao teu próximo website?
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400">
                Conta-nos um pouco sobre o teu negócio e aquilo que pretendes
                criar. Vamos conversar sobre os teus objetivos, esclarecer
                as tuas dúvidas e identificar uma direção adequada para o
                teu projeto.
              </p>

              <Link
                href="/#contacto"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-violet-500 px-6 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-violet-400"
              >
                Agendar uma reunião
                <ArrowUpRight size={18} />
              </Link>

              <p className="mt-5 text-xs leading-6 text-zinc-500">
                A primeira conversa serve para compreender as tuas
                necessidades e avaliar o âmbito do projeto.
              </p>
            </div>
          </div>
        </Reveal>
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