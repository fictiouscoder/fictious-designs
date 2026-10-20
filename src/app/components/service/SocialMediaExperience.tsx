"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  Check,
  ChevronDown,
  Heart,
  MessageCircle,
  MousePointer2,
  Sparkles,
} from "lucide-react";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("redes-sociais");
const ease = [0.22, 1, 0.36, 1] as const;

const contentCards = [
  {
    number: "01",
    category: "IDENTIDADE",
    title: "Uma marca reconhecível.",
    description: "Design consistente, com personalidade própria.",
    background: "#D8D0FF",
    foreground: "#211747",
    accent: "#7C5CFF",
    shape: "circle",
  },
  {
    number: "02",
    category: "CONTEÚDO",
    title: "Ideias que comunicam.",
    description: "Mensagens pensadas para o teu público.",
    background: "#E7F0E9",
    foreground: "#193D2D",
    accent: "#83AD91",
    shape: "square",
  },
  {
    number: "03",
    category: "ESTRATÉGIA",
    title: "Cada publicação tem intenção.",
    description: "Conteúdo alinhado com os objectivos da marca.",
    background: "#F4D9C9",
    foreground: "#582C20",
    accent: "#E88B66",
    shape: "circle",
  },
];

export default function SocialMediaExperience() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: reduceMotion ? 0 : 0.65, ease },
  };

  if (!service) {
    throw new Error(
      "Configuração do serviço Gestão de Redes Sociais não encontrada.",
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#09090B] text-[#F5F5F0]">
      <Navigation />

      <section className="relative flex min-h-[82svh] items-center px-5 pb-20 pt-32 sm:px-8 lg:min-h-[88svh] lg:px-12 lg:pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-20 h-[440px] w-[440px] rounded-full bg-[#7C5CFF]/15 blur-[130px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#3D7BFF]/10 blur-[120px]"
        />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.75, ease }}
          >
            <p className="mb-7 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-[#A996FF]">
              <span className="h-px w-8 bg-[#A996FF]" />
              {service.eyebrow}
            </p>

            <h1 className="max-w-3xl text-5xl font-medium leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
              A tua marca.
              <br />
              <span className="bg-gradient-to-r from-[#A996FF] to-[#6EA4FF] bg-clip-text text-transparent">
                A sua voz.
              </span>
              <br />
              Uma presença real.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              {service.subtitle}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contactos"
                className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-[#F5F5F0] px-6 py-3 text-sm font-medium text-[#09090B] transition hover:bg-[#A996FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A996FF]"
              >
                Construir presença
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <a
                href="#conteudo"
                className="inline-flex min-h-12 items-center gap-2 rounded-full px-4 py-3 text-sm text-white/70 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A996FF]"
              >
                Explorar o serviço
                <ArrowDown size={15} />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-6 text-xs tracking-wide text-white/45">
              <span>Estratégia</span>
              <span>Design</span>
              <span>Comunicação</span>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.9, delay: 0.1, ease }}
            className="relative mx-auto w-full max-w-[490px]"
          >
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-[#7C5CFF]/20 via-transparent to-[#3D7BFF]/15 blur-2xl" />

            <div className="relative rounded-[1.7rem] border border-white/10 bg-[#111114] p-3 shadow-2xl sm:p-4">
              <div className="flex items-center justify-between border-b border-white/10 px-3 pb-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#7C5CFF] to-[#3D7BFF]">
                    <Sparkles size={19} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">A tua marca</p>
                    <p className="mt-1 text-xs text-white/40">
                      Conteúdo com intenção
                    </p>
                  </div>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[9px] uppercase tracking-wider text-white/45">
                  Concept
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 py-3">
                <div
                  className="relative flex min-h-[190px] flex-col justify-between overflow-hidden rounded-2xl p-4 sm:min-h-[220px]"
                  style={{
                    background: "#D8D0FF",
                    color: "#211747",
                  }}
                >
                  <div
                    aria-hidden="true"
                    className="absolute -right-8 top-8 h-32 w-32 rounded-full border-[22px] border-[#7C5CFF]/80"
                  />
                  <p className="relative text-[9px] uppercase tracking-[0.2em]">
                    Design / 001
                  </p>
                  <div className="relative">
                    <p className="text-xs">Ideias com</p>
                    <p className="text-3xl font-medium leading-none tracking-tight sm:text-4xl">
                      impacto.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div
                    className="flex min-h-[103px] flex-1 flex-col justify-between rounded-2xl p-4"
                    style={{ background: "#20202A" }}
                  >
                    <CalendarDays size={19} className="text-[#A996FF]" />
                    <div>
                      <p className="text-xs font-medium">Planeamento</p>
                      <p className="mt-1 text-[10px] text-white/45">
                        Cada ideia no seu lugar.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex min-h-[103px] flex-1 flex-col justify-between rounded-2xl p-4"
                    style={{ background: "#17243A" }}
                  >
                    <BarChart3 size={19} className="text-[#8BB7FF]" />
                    <div>
                      <p className="text-xs font-medium">Acompanhamento</p>
                      <p className="mt-1 text-[10px] text-white/45">
                        Aprender e melhorar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#17171B] p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/45">
                      Uma presença consistente
                    </p>
                    <p className="mt-1 text-sm font-medium">
                      Estratégia + criatividade
                    </p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7C5CFF]/15 text-[#A996FF]">
                    <MousePointer2 size={18} />
                  </div>
                </div>
                <div className="mt-4 flex gap-1.5" aria-hidden="true">
                  {[35, 58, 43, 76, 55, 92, 68, 84, 61, 100, 72, 88].map(
                    (height, index) => (
                      <motion.span
                        key={index}
                        className="flex-1 rounded-full bg-gradient-to-t from-[#3D7BFF] to-[#A996FF]"
                        initial={{ height: 4, opacity: 0.5 }}
                        animate={{
                          height: `${height * 0.34}px`,
                          opacity: 1,
                        }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.55,
                          delay: reduceMotion ? 0 : index * 0.045,
                          ease,
                        }}
                      />
                    ),
                  )}
                </div>
                <p className="mt-3 text-[9px] text-white/30">
                  Ilustração conceptual. Não representa métricas reais.
                </p>
              </div>

              <div className="mt-3 flex items-center justify-between px-2 py-1 text-white/50">
                <div className="flex items-center gap-4">
                  <Heart size={17} />
                  <MessageCircle size={17} />
                </div>
                <span className="text-[9px] uppercase tracking-[0.16em]">
                  Ideia · Design · Estratégia
                </span>
              </div>
            </div>

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, -7, 0], rotate: [0, 1.5, 0] }
              }
              transition={{
                duration: 5,
                repeat: reduceMotion ? 0 : Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#17171B] px-4 py-3 shadow-xl sm:-left-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7C5CFF]/15 text-[#A996FF]">
                <Check size={17} />
              </span>
              <div>
                <p className="text-xs font-medium">Cada detalhe conta.</p>
                <p className="mt-1 text-[10px] text-white/40">
                  Uma marca, uma direcção.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        id="conteudo"
        className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div {...reveal} className="max-w-3xl">
            <p className="mb-5 text-xs uppercase tracking-[0.24em] text-[#A996FF]">
              Conteúdo com direcção
            </p>
            <h2 className="text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
              Publicar é fácil.
              <br />
              <span className="text-white/40">
                Comunicar com intenção é diferente.
              </span>
            </h2>
            <p className="mt-6 max-w-2xl leading-7 text-white/55">
              Uma presença digital consistente começa com uma mensagem clara,
              uma identidade reconhecível e conteúdos pensados para as pessoas
              que queres alcançar.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {contentCards.map((card, index) => (
              <motion.article
                key={card.number}
                {...reveal}
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  delay: reduceMotion ? 0 : index * 0.1,
                  ease,
                }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-3 transition-colors hover:border-[#7C5CFF]/40"
              >
                <div
                  className="relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-xl p-6 sm:min-h-[300px] sm:p-7"
                  style={{
                    backgroundColor: card.background,
                    color: card.foreground,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em]">
                      {card.category}
                    </span>
                    <span className="text-xs">{card.number} / 03</span>
                  </div>

                  {card.shape === "circle" ? (
                    <motion.div
                      aria-hidden="true"
                      animate={
                        reduceMotion
                          ? undefined
                          : { rotate: [0, 12, 0], scale: [1, 1.04, 1] }
                      }
                      transition={{
                        duration: 9,
                        repeat: reduceMotion ? 0 : Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute right-[-35px] top-[55px] h-44 w-44 rounded-full border-[30px] opacity-90 sm:h-52 sm:w-52"
                      style={{ borderColor: card.accent }}
                    />
                  ) : (
                    <motion.div
                      aria-hidden="true"
                      animate={
                        reduceMotion
                          ? undefined
                          : { rotate: [0, 8, 0], y: [0, -5, 0] }
                      }
                      transition={{
                        duration: 7,
                        repeat: reduceMotion ? 0 : Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute right-[-8px] top-[60px] h-40 w-40 rotate-12 rounded-[2rem] sm:h-48 sm:w-48"
                      style={{ backgroundColor: card.accent }}
                    />
                  )}

                  <div className="relative z-10">
                    <p className="max-w-[250px] text-3xl font-medium leading-tight tracking-[-0.045em] sm:text-4xl">
                      {card.title}
                    </p>
                    <p className="mt-3 max-w-[240px] text-sm leading-6 opacity-70">
                      {card.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 px-3 py-4">
                  <span className="text-xs text-white/50">
                    Direcção criativa
                  </span>
                  <ArrowUpRight
                    size={17}
                    className="text-white/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#A996FF]"
                  />
                </div>
              </motion.article>
            ))}
          </div>
          <p className="mt-5 text-xs leading-5 text-white/35">
            Exemplos visuais conceptuais criados para ilustrar a direcção
            criativa. Não representam trabalhos de clientes reais.
          </p>
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-[#0D0D10] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div {...reveal}>
            <p className="mb-5 text-xs uppercase tracking-[0.24em] text-[#A996FF]">
              O que fazemos
            </p>
            <h2 className="text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
              Uma presença que trabalha pela tua marca.
            </h2>
            <p className="mt-5 leading-7 text-white/55">
              Combinamos planeamento, criatividade e acompanhamento para
              construir uma comunicação mais coerente.
            </p>
            <Link
              href="/contactos"
              className="group mt-8 inline-flex items-center gap-2 text-sm text-[#A996FF] transition hover:text-white"
            >
              Falar sobre o teu projecto
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                {...reveal}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  delay: reduceMotion ? 0 : index * 0.06,
                  ease,
                }}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-colors hover:border-[#7C5CFF]/35 sm:p-6"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#7C5CFF]/15 text-[#A996FF]">
                  <Check size={17} />
                </span>
                <div>
                  <p className="text-sm font-medium leading-6">{benefit}</p>
                  <p className="mt-2 text-xs leading-5 text-white/40">
                    Definido de acordo com o plano e as necessidades do negócio.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <motion.div {...reveal}>
            <p className="mb-5 text-xs uppercase tracking-[0.24em] text-[#A996FF]">
              O nosso processo
            </p>
            <h2 className="text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
              Da estratégia à consistência.
            </h2>
            <p className="mt-5 leading-7 text-white/55">
              Um método colaborativo, adaptado aos objectivos e às necessidades
              de cada negócio.
            </p>
          </motion.div>

          <div>
            {service.process.map((step, index) => (
              <motion.article
                key={step.title}
                {...reveal}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                  delay: reduceMotion ? 0 : index * 0.07,
                  ease,
                }}
                className="grid grid-cols-[42px_1fr] gap-5 border-b border-white/10 py-7 first:pt-0 sm:grid-cols-[60px_1fr] sm:gap-7"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-xs text-[#A996FF] sm:h-12 sm:w-12">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-medium sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-white/55">
                    {step.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.07] bg-[#0D0D10] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <motion.div {...reveal}>
            <p className="mb-5 text-xs uppercase tracking-[0.24em] text-[#A996FF]">
              Perguntas frequentes
            </p>
            <h2 className="text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
              Antes de começarmos.
            </h2>
            <p className="mt-5 text-sm leading-6 text-white/50">
              Informação clara para decidires se este serviço faz sentido para
              a tua marca.
            </p>
          </motion.div>

          <div className="divide-y divide-white/10">
            {service.faqs.map((faq, index) => {
              const isOpen = activeFaq === index;

              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="flex min-h-16 w-full items-center justify-between gap-5 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A996FF]"
                  >
                    <span className="text-sm font-medium leading-6 sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-[#A996FF] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.25,
                      ease,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-2xl pb-6 pr-8 text-sm leading-7 text-white/55">
                      {faq.answer}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 pt-20 sm:px-8 lg:px-12 lg:pb-32">
        <motion.div
          {...reveal}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111116] px-6 py-12 sm:px-12 sm:py-16 lg:px-16"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-[#7C5CFF]/20 blur-[100px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-[#3D7BFF]/10 blur-[100px]"
          />

          <div className="relative grid items-end gap-8 md:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <p className="mb-5 text-xs uppercase tracking-[0.24em] text-[#A996FF]">
                Vamos conversar?
              </p>
              <h2 className="text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
                A tua marca merece uma presença com intenção.
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-white/55">
                Conta-nos o que pretendes alcançar. Vamos conversar sobre uma
                estratégia de conteúdos alinhada com o teu negócio.
              </p>
            </div>

            <Link
              href="/contactos"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#F5F5F0] px-6 py-3 text-sm font-medium text-[#09090B] transition hover:bg-[#A996FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A996FF]"
            >
              Iniciar um projecto
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </section>

      <ScrollReveal />
      <Footer />
    </main>
  );
}

