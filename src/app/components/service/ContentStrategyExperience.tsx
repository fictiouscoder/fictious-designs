"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Compass,
  Lightbulb,
  MessageSquareText,
  PenLine,
  Sparkles,
  Target,
} from "lucide-react";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("estrategia-conteudo");
const ease = [0.22, 1, 0.36, 1] as const;

const pillars = [
  {
    number: "01",
    title: "Educar",
    description: "Responder a dúvidas e partilhar conhecimento útil.",
    label: "VALOR",
    icon: Lightbulb,
    color: "#B6FF3B",
  },
  {
    number: "02",
    title: "Apresentar",
    description: "Mostrar produtos, serviços e soluções com clareza.",
    label: "OFERTA",
    icon: Sparkles,
    color: "#3BFFA3",
  },
  {
    number: "03",
    title: "Humanizar",
    description: "Dar voz à marca e aproximá-la das pessoas.",
    label: "CONEXÃO",
    icon: MessageSquareText,
    color: "#D2FF8A",
  },
  {
    number: "04",
    title: "Converter",
    description: "Orientar o público para o próximo passo.",
    label: "ACÇÃO",
    icon: Target,
    color: "#83EFC1",
  },
];

const week = [
  {
    day: "SEG",
    date: "01",
    type: "EDUCAR",
    title: "Uma ideia útil",
    color: "#B6FF3B",
  },
  {
    day: "TER",
    date: "02",
    type: "MARCA",
    title: "O que nos distingue",
    color: "#3BFFA3",
  },
  {
    day: "QUA",
    date: "03",
    type: "OFERTA",
    title: "Uma solução real",
    color: "#D2FF8A",
  },
  {
    day: "QUI",
    date: "04",
    type: "COMUNIDADE",
    title: "Uma pergunta ao público",
    color: "#83EFC1",
  },
  {
    day: "SEX",
    date: "05",
    type: "ACÇÃO",
    title: "O próximo passo",
    color: "#B6FF3B",
  },
];

const icons = [Compass, Target, CalendarDays, PenLine, MessageSquareText, Sparkles];

export default function ContentStrategyExperience() {
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
      "Configuração do serviço Estratégia de Conteúdo não encontrada.",
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#09090B] text-[#F5F5F0]">
      <Navigation />

      <section className="relative flex min-h-[82svh] items-center px-5 pb-20 pt-32 sm:px-8 lg:min-h-[88svh] lg:px-12 lg:pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-16 h-[440px] w-[440px] rounded-full bg-[#B6FF3B]/10 blur-[130px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#3BFFA3]/10 blur-[120px]"
        />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.75, ease }}
          >
            <p className="mb-7 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-[#B6FF3B]">
              <span className="h-px w-8 bg-[#B6FF3B]" />
              {service.eyebrow}
            </p>

            <h1 className="max-w-3xl text-5xl font-medium leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Dá direcção às{" "}
              <span className="text-[#B6FF3B]">ideias</span> da tua marca.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-[#A1A1AA] sm:text-lg sm:leading-8">
              {service.description}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contactos"
                className="group inline-flex items-center gap-3 rounded-full bg-[#B6FF3B] px-6 py-3.5 text-sm font-medium text-[#11130B] transition-transform hover:-translate-y-0.5"
              >
                Construir uma estratégia
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <a
                href="#calendario"
                className="inline-flex items-center gap-2 px-3 py-3 text-sm text-[#D4D4D8] transition-colors hover:text-[#B6FF3B]"
              >
                Explorar o método
                <ArrowDown size={15} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-[#71717A]">
              <span className="flex items-center gap-2">
                <Check size={14} className="text-[#B6FF3B]" />
                Intenção antes de publicação
              </span>
              <span className="flex items-center gap-2">
                <Check size={14} className="text-[#B6FF3B]" />
                Consistência com propósito
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.12,
              ease,
            }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-[2rem] bg-[#B6FF3B]/[0.035] blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/[0.09] bg-[#101012] shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4 sm:px-6">
                <div>
                  <p className="text-sm font-medium text-[#F5F5F0]">
                    Plano editorial
                  </p>
                  <p className="mt-1 text-xs text-[#71717A]">
                    Exemplo conceptual · Semana
                  </p>
                </div>
                <span className="rounded-full border border-[#B6FF3B]/20 bg-[#B6FF3B]/[0.07] px-3 py-1.5 text-[10px] uppercase tracking-wider text-[#B6FF3B]">
                  Planeamento
                </span>
              </div>

              <div className="space-y-3 p-4 sm:p-6">
                {week.map((item, index) => (
                  <motion.div
                    key={item.day}
                    initial={reduceMotion ? false : { opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.45,
                      delay: reduceMotion ? 0 : 0.2 + index * 0.08,
                      ease,
                    }}
                    className="flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3 sm:gap-4 sm:p-4"
                  >
                    <div className="w-10 shrink-0 text-center">
                      <p className="text-[9px] tracking-wider text-[#71717A]">
                        {item.day}
                      </p>
                      <p className="mt-1 text-lg font-medium text-[#F5F5F0]">
                        {item.date}
                      </p>
                    </div>

                    <div
                      className="h-10 w-1 shrink-0 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />

                    <div className="min-w-0 flex-1">
                      <p
                        className="text-[9px] font-medium tracking-[0.14em]"
                        style={{ color: item.color }}
                      >
                        {item.type}
                      </p>
                      <p className="mt-1 truncate text-sm text-[#E4E4E7]">
                        {item.title}
                      </p>
                    </div>

                    <CalendarDays
                      size={15}
                      className="shrink-0 text-[#52525B]"
                    />
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center gap-3 border-t border-white/[0.07] px-5 py-4 sm:px-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#B6FF3B]/10 text-[#B6FF3B]">
                  <Compass size={17} />
                </div>
                <div>
                  <p className="text-xs font-medium text-[#E4E4E7]">
                    Cada ideia tem um papel.
                  </p>
                  <p className="mt-1 text-[11px] text-[#71717A]">
                    Exemplo ilustrativo, não um calendário de cliente.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="calendario"
        className="scroll-mt-20 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div {...reveal} className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#B6FF3B]">
              A lógica por trás do conteúdo
            </p>
            <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
              Publicar mais não significa comunicar melhor.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-[#A1A1AA]">
              Uma boa estratégia equilibra informação, identidade, oferta e
              relacionamento. O objectivo é criar uma narrativa coerente, não
              preencher o calendário por preencher.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <motion.article
                  key={pillar.number}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.6,
                    delay: index * 0.07,
                    ease,
                  }}
                  className="group min-h-64 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-[#B6FF3B]/25 hover:bg-[#B6FF3B]/[0.025] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs tracking-wider"
                      style={{ color: pillar.color }}
                    >
                      {pillar.number}
                    </span>
                    <Icon
                      size={19}
                      style={{ color: pillar.color }}
                      strokeWidth={1.5}
                    />
                  </div>

                  <p
                    className="mt-9 text-[10px] uppercase tracking-[0.18em]"
                    style={{ color: pillar.color }}
                  >
                    {pillar.label}
                  </p>
                  <h3 className="mt-2 text-xl font-medium">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#A1A1AA]">
                    {pillar.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-[#0D0D10] px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div {...reveal}>
            <p className="text-xs uppercase tracking-[0.22em] text-[#B6FF3B]">
              O que construímos
            </p>
            <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
              Uma estrutura para comunicar com intenção.
            </h2>
            <p className="mt-5 leading-7 text-[#A1A1AA]">
              {service.subtitle}
            </p>
            <Link
              href="/contactos"
              className="mt-7 inline-flex items-center gap-2 text-sm text-[#B6FF3B] transition-colors hover:text-[#D5FF8F]"
            >
              Falar sobre o teu projecto <ArrowRight size={16} />
            </Link>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            {service.benefits.map((benefit, index) => {
              const Icon = icons[index % icons.length];

              return (
                <motion.div
                  key={benefit}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.55,
                    delay: index * 0.06,
                    ease,
                  }}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5"
                >
                  <Icon size={19} className="text-[#B6FF3B]" strokeWidth={1.5} />
                  <p className="mt-5 text-sm leading-6 text-[#E4E4E7]">
                    {benefit}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div {...reveal} className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#B6FF3B]">
              Do pensamento à execução
            </p>
            <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
              Um processo claro. Ideias com direcção.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-x-12 md:grid-cols-2 lg:mt-16">
            {service.process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  delay: index * 0.08,
                  ease,
                }}
                className="flex gap-5 border-t border-white/[0.10] py-7"
              >
                <span className="pt-1 text-sm text-[#B6FF3B]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-medium">{step.title}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-[#A1A1AA]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0D0D10] px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <motion.div {...reveal}>
            <p className="text-xs uppercase tracking-[0.22em] text-[#B6FF3B]">
              Perguntas frequentes
            </p>
            <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
              Antes de começar.
            </h2>
            <p className="mt-5 leading-7 text-[#A1A1AA]">
              Cada projecto é definido de acordo com os objectivos, as
              necessidades e o âmbito aprovado.
            </p>
          </motion.div>

          <div className="space-y-2">
            {service.faqs.map((faq, index) => (
              <motion.div
                {...reveal}
                key={faq.question}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                  delay: index * 0.04,
                  ease,
                }}
                className="border-b border-white/[0.09]"
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? null : index)
                  }
                  aria-expanded={activeFaq === index}
                  className="flex w-full items-center justify-between gap-5 py-5 text-left"
                >
                  <span className="text-sm font-medium leading-6 text-[#E4E4E7] sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-[#B6FF3B] transition-transform duration-300 ${
                      activeFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: activeFaq === index ? "auto" : 0,
                    opacity: activeFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: reduceMotion ? 0 : 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-5 pr-8 text-sm leading-7 text-[#A1A1AA]">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <motion.div
          {...reveal}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[#B6FF3B]/20 bg-[#111114] px-6 py-14 sm:px-12 sm:py-20"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[#B6FF3B]/10 blur-[90px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-[#3BFFA3]/10 blur-[90px]"
          />

          <div className="relative max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-[#B6FF3B]">
              {service.eyebrow}
            </p>
            <h2 className="mt-5 text-3xl font-medium tracking-[-0.045em] sm:text-5xl">
              As boas ideias merecem uma estratégia.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-[#A1A1AA]">
              Vamos organizar a comunicação da tua marca e definir um caminho
              editorial alinhado com os teus objectivos.
            </p>
            <Link
              href="/contactos"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#B6FF3B] px-6 py-3.5 text-sm font-medium text-[#11130B] transition-transform hover:-translate-y-0.5"
            >
              Iniciar um projecto
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
