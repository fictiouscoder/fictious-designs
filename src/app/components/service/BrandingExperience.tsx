"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  ArrowUpRight,
  Layers3,
  Palette,
  PenTool,
  Sparkles,
  Type,
} from "lucide-react";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";
import BrandingMeshGradient from "@/app/components/service/BrandingMeshGradient";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("branding");

const palettes = [
  {
    name: "Editorial",
    description: "Elegância, contraste e sofisticação.",
    colors: ["#F3EBDD", "#25231F", "#da4319", "#D7B99B"],
    background: "#F3EBDD",
    foreground: "#25231F",
    accent: "#d14a25",
    muted: "#c06f1e",
  },
  {
    name: "Contemporânea",
    description: "Energia criativa com personalidade.",
    colors: ["#171717", "#FF3D81", "#dc5621", "#F8F4F0"],
    background: "#171717",
    foreground: "#F8F4F0",
    accent: "#FF3D81",
    muted: "#FF8A5B",
  },
  {
    name: "Natural",
    description: "Equilíbrio, calma e autenticidade.",
    colors: ["#E8E5D8", "#344638", "#A8B69A", "#e76814"],
    background: "#E8E5D8",
    foreground: "#344638",
    accent: "#e6640e",
    muted: "#A8B69A",
  },
];

const principles = [
  {
    number: "01",
    title: "Estratégia antes da estética",
    description:
      "Compreendemos o negócio, o público e o posicionamento antes de definir a direcção visual.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Um sistema, não apenas um símbolo",
    description:
      "Criamos uma linguagem visual que integra logótipo, cor, tipografia e elementos gráficos.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Consistência em cada aplicação",
    description:
      "Preparamos uma identidade pensada para funcionar nos diferentes pontos de contacto da marca.",
    icon: PenTool,
  },
];

const brandingPackages = [
  {
    number: "01",
    name: "Starter",
    category: "ESSENCIAL",
    price: "2.500",
    description: "Para negócios que precisam de uma identidade visual inicial.",
    hours: "4–6 horas",
    delivery: "2–3 dias úteis",
    recommended: false,
    features: [
      "Criação de logótipo principal",
      "1 proposta de conceito visual",
      "Paleta de cores da marca",
      "Selecção de tipografia",
      "2 variações simples do logótipo",
      "Ficheiros finais em PNG e PDF",
      "Até 2 rondas de revisões",
    ],
    details: [
      "Ficheiros preparados para utilização digital.",
      "Não inclui ficheiros-fonte editáveis nem impressão física.",
    ],
  },
  {
    number: "02",
    name: "Business",
    category: "PROFISSIONAL",
    price: "5.500",
    description: "Para empresas que procuram consistência nos diferentes pontos de contacto.",
    hours: "10–16 horas",
    delivery: "4–6 dias úteis",
    recommended: true,
    features: [
      "Tudo o que está incluído no Starter",
      "Sistema de identidade visual e aplicações do logótipo",
      "Versões adicionais para diferentes fundos",
      "Orientações de cores e tipografia",
      "Design de cartão de visita",
      "Assinatura de e-mail",
      "3 templates gráficos para redes sociais",
      "Manual básico de identidade visual em PDF",
      "Até 3 rondas de revisões",
    ],
    details: [
      "Ficheiros finais organizados para utilização digital e impressão.",
      "O cartão é entregue em formato digital; a impressão física não está incluída.",
      "Ficheiros-fonte editáveis apenas quando expressamente incluídos no orçamento.",
    ],
  },
  {
    number: "03",
    name: "Elite",
    category: "PREMIUM",
    price: "9.500",
    description: "Para marcas que precisam de uma identidade visual abrangente e diferenciada.",
    hours: "18–28 horas",
    delivery: "7–10 dias úteis",
    recommended: false,
    features: [
      "Tudo o que está incluído no Business",
      "Desenvolvimento aprofundado do conceito e direcção criativa",
      "Logótipo principal, secundário e símbolo",
      "Sistema de identidade visual completo",
      "Manual de marca detalhado",
      "Design de cartão de visita e papel timbrado",
      "6 templates gráficos para redes sociais",
      "2 aplicações gráficas adicionais, como embalagem, etiqueta ou sacola",
      "Apresentação profissional da identidade visual",
      "Até 4 rondas de revisões",
    ],
    details: [
      "Ficheiros finais preparados para utilização digital e impressão.",
      "As aplicações adicionais incluem apenas o design, não a produção física.",
      "Ficheiros-fonte editáveis apenas quando expressamente incluídos no orçamento.",
    ],
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function BrandingExperience() {
  const [activePalette, setActivePalette] = useState(0);
  const [expandedPackage, setExpandedPackage] = useState<number | null>(1);
  const [expandedFeatures, setExpandedFeatures] = useState<number[]>([]);
  const reduceMotion = useReducedMotion();
  const palette = palettes[activePalette];

  const reveal = {
    initial: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: reduceMotion ? 0 : 0.65, ease },
  };

  if (!service) {
    throw new Error("Configuração do serviço Branding não encontrada.");
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#09090B] text-[#F5F5F0]">
      <Navigation />

      <section className="relative flex min-h-[82svh] items-center px-5 pb-20 pt-32 sm:px-8 lg:min-h-[88svh] lg:px-12 lg:pt-36">
        <BrandingMeshGradient />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.75, ease }}
          >
            <p className="mb-7 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-[#FF8A5B]">
              <span className="h-px w-8 bg-[#FF8A5B]" />
              {service.eyebrow}
            </p>

            <h1 className="max-w-3xl text-5xl font-medium leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
              Marcas com
              <br />
              <span className="bg-gradient-to-r from-[#FF3D81] to-[#FF8A5B] bg-clip-text text-transparent">
                identidade.
              </span>
              <br />
              Presença com intenção.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              {service.subtitle}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contactos"
                className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-[#F5F5F0] px-6 py-3 text-sm font-medium text-[#09090B] transition hover:bg-[#FF8A5B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF8A5B]"
              >
                Criar a minha identidade
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <a
                href="#explorador"
                className="inline-flex min-h-12 items-center gap-2 rounded-full px-4 py-3 text-sm text-white/70 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF8A5B]"
              >
                Explorar identidades
                <ArrowDown size={15} />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-6 text-xs tracking-wide text-white/45">
              <span>Estratégia visual</span>
              <span>Design de marca</span>
              <span>Sistemas visuais</span>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.9, delay: 0.1, ease }}
            className="relative mx-auto w-full max-w-[510px]"
          >
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-[#FF3D81]/10 via-transparent to-[#FF8A5B]/10 blur-2xl" />

            <div className="relative rotate-[-2deg] rounded-[1.5rem] border border-white/10 bg-[#111114] p-3 shadow-2xl sm:p-4">
              <div className="overflow-hidden rounded-[1rem] bg-[#F2EDE5] text-[#26231F]">
                <div className="flex items-center justify-between border-b border-black/10 px-5 py-4 text-[9px] uppercase tracking-[0.2em] sm:px-7">
                  <span>Estudo de identidade</span>
                  <span>FD / 001</span>
                </div>

                <div className="relative flex min-h-[270px] flex-col justify-between overflow-hidden px-6 py-8 sm:min-h-[330px] sm:px-9 sm:py-10">
                  <div
                    aria-hidden="true"
                    className="absolute -right-12 top-8 h-48 w-48 rounded-full border-[35px] border-[#FF3D81]/90 sm:h-64 sm:w-64 sm:border-[48px]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -right-3 top-24 h-28 w-28 rounded-full bg-[#FF8A5B] mix-blend-multiply sm:top-32 sm:h-36 sm:w-36"
                  />

                  <div className="relative z-10 flex items-start justify-between">
                    <span className="text-[10px] uppercase tracking-[0.24em]">
                      Brand / Studio
                    </span>
                    <Sparkles size={18} strokeWidth={1.3} />
                  </div>

                  <div className="relative z-10">
                    <p className="mb-2 text-xs uppercase tracking-[0.22em]">
                      Ideias com identidade
                    </p>
                    <p className="text-6xl font-medium leading-none tracking-[-0.08em] sm:text-8xl">
                      Forma
                      <span className="text-[#C65B46]">.</span>
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 border-t border-black/10">
                  {[
                    { label: "Cor", value: "Direcção" },
                    { label: "Tipo", value: "Expressão" },
                    { label: "Forma", value: "Sistema" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="border-r border-black/10 px-3 py-4 last:border-r-0 sm:px-5"
                    >
                      <p className="text-[9px] uppercase tracking-[0.18em] text-black/45">
                        {item.label}
                      </p>
                      <p className="mt-1 text-xs font-medium sm:text-sm">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-white/10 bg-[#17171B] px-4 py-3 shadow-xl sm:-left-7 sm:px-5">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-1.5">
                  <span className="h-5 w-5 rounded-full border-2 border-[#17171B] bg-[#FF3D81]" />
                  <span className="h-5 w-5 rounded-full border-2 border-[#17171B] bg-[#FF8A5B]" />
                  <span className="h-5 w-5 rounded-full border-2 border-[#17171B] bg-[#F2EDE5]" />
                </div>
                <span className="text-xs text-white/70">Cada detalhe comunica.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div {...reveal} className="max-w-3xl">
            <p className="mb-5 text-xs uppercase tracking-[0.24em] text-[#FF8A5B]">
              O valor da identidade
            </p>
            <h2 className="text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
              Uma marca é mais do que aquilo que se vê.
              <span className="text-white/40"> É aquilo que fica.</span>
            </h2>
            <p className="mt-6 max-w-2xl leading-7 text-white/55">
              Uma identidade coerente ajuda a apresentar o teu negócio com
              clareza, a criar reconhecimento e a comunicar com intenção em
              cada ponto de contacto.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  {...reveal}
                  transition={{
                    duration: reduceMotion ? 0 : 0.6,
                    delay: reduceMotion ? 0 : index * 0.1,
                    ease,
                  }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-colors hover:border-[#FF3D81]/40 hover:bg-white/[0.045] sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-[0.2em] text-white/35">
                      {item.number}
                    </span>
                    <Icon
                      size={21}
                      strokeWidth={1.4}
                      className="text-[#FF8A5B] transition-transform group-hover:scale-110"
                    />
                  </div>
                  <h3 className="mt-10 text-xl font-medium tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-white/55">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="explorador"
        className="scroll-mt-24 border-y border-white/[0.07] bg-[#0D0D10] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div {...reveal}>
            <p className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#FF8A5B]">
              <Palette size={15} />
              Laboratório visual
            </p>
            <h2 className="text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
              A personalidade começa nas escolhas.
            </h2>
            <p className="mt-5 leading-7 text-white/55">
              Explora três direcções visuais conceptuais. Cada combinação
              transmite uma sensação diferente — a escolha certa depende da
              personalidade, do público e dos objectivos da marca.
            </p>

            <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Escolher uma paleta de cores">
              {palettes.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActivePalette(index)}
                  aria-pressed={activePalette === index}
                  className={`min-h-11 rounded-full border px-4 py-2 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF8A5B] ${
                    activePalette === index
                      ? "border-[#FF8A5B] bg-[#FF8A5B]/10 text-white"
                      : "border-white/15 text-white/60 hover:border-white/40 hover:text-white"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-3 text-xs leading-5 text-white/40">
              <Sparkles size={15} className="mt-0.5 shrink-0 text-[#FF8A5B]" />
              <p>
                Demonstração conceptual para inspiração. Não representa uma
                identidade criada para um cliente real.
              </p>
            </div>
          </motion.div>

          <motion.div
            key={palette.name}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.35, ease }}
            className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#151518] p-3 sm:p-5"
          >
            <div
              className="relative flex min-h-[290px] flex-col justify-between overflow-hidden rounded-[1rem] p-6 transition-colors duration-300 sm:min-h-[350px] sm:p-9"
              style={{
                backgroundColor: palette.background,
                color: palette.foreground,
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.25em]">
                  Direcção criativa / 0{activePalette + 1}
                </span>
                <ArrowUpRight size={18} />
              </div>

              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -right-5 -top-24 h-40 w-40 rounded-full opacity-80 sm:-right-2 sm:h-52 sm:w-52"
                  style={{ backgroundColor: palette.accent }}
                />
                <div
                  aria-hidden="true"
                  className="absolute right-12 -top-10 h-20 w-20 rotate-12 opacity-90 sm:right-20 sm:h-28 sm:w-28"
                  style={{ backgroundColor: palette.muted }}
                />
                <p className="relative text-xs uppercase tracking-[0.2em]">
                  Ideias que ganham forma
                </p>
                <p className="relative mt-3 text-5xl font-medium leading-none tracking-[-0.07em] sm:text-7xl">
                  Identidade<span style={{ color: palette.accent }}>.</span>
                </p>
                <p className="relative mt-4 max-w-xs text-sm opacity-70">
                  {palette.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-[1fr_auto] sm:items-end sm:p-5">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                  Paleta seleccionada
                </p>
                <p className="mt-1 text-lg font-medium">{palette.name}</p>
              </div>
              <div className="flex gap-2" aria-label={`Cores da paleta ${palette.name}`}>
                {palette.colors.map((color) => (
                  <div key={color} className="flex flex-col items-center gap-2">
                    <span
                      className="h-8 w-8 rounded-full border border-white/15 sm:h-10 sm:w-10"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                    <span className="text-[9px] text-white/40">{color}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-4 mb-3 flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3 sm:mx-5">
              <Type size={17} className="shrink-0 text-[#FF8A5B]" />
              <div>
                <p className="text-xs font-medium">Sistema tipográfico</p>
                <p className="mt-1 text-xs text-white/45">
                  Hierarquia, legibilidade e carácter.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="pacotes-branding"
        className="relative scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-[#FF3D81]/[0.06] blur-[120px]"
        />
        <div className="relative mx-auto max-w-7xl">
          <motion.div {...reveal} className="max-w-3xl">
            <p className="mb-5 text-xs uppercase tracking-[0.24em] text-[#FF8A5B]">
              Investimento em identidade
            </p>
            <h2 className="text-3xl font-medium tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Uma identidade à altura
              <br className="hidden sm:block" /> da sua marca.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
              Escolha o nível de identidade visual adequado ao momento do seu
              negócio. Cada projecto é desenvolvido com atenção ao contexto,
              aos objectivos e à personalidade da marca.
            </p>
          </motion.div>

          <div className="mt-12 grid items-start gap-5 lg:grid-cols-3">
            {brandingPackages.map((item, index) => {
              const isExpanded = expandedPackage === index;

              return (
                <motion.article
                  key={item.name}
                  {...reveal}
                  transition={{
                    duration: reduceMotion ? 0 : 0.55,
                    delay: reduceMotion ? 0 : index * 0.08,
                    ease,
                  }}
                  className={`relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border p-5 sm:p-6 ${
                    item.recommended
                      ? "border-[#FF8A5B]/60 bg-[#171416] shadow-[0_0_50px_rgba(255,61,129,0.08)]"
                      : "border-white/10 bg-[#111113]"
                  }`}
                >
                  {item.recommended && (
                    <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#FF8A5B]/30 bg-[#FF8A5B]/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#FFB08D]">
                      <Sparkles size={12} />
                      Recomendado
                    </span>
                  )}

                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                        {item.category}
                      </p>
                      <h3 className="mt-2 text-2xl font-medium tracking-tight">
                        {item.name}
                      </h3>
                    </div>
                    <span className="text-xs text-white/25">{item.number}</span>
                  </div>

                  <p className="mt-4 min-h-[3rem] text-sm leading-6 text-white/55">
                    {item.description}
                  </p>

                  <div className="mt-7 border-y border-white/10 py-5">
                    <p className="text-xs text-white/40">Investimento</p>
                    <p className="mt-1 flex items-baseline gap-2">
                      <span className="text-4xl font-medium tracking-[-0.06em]">
                        {item.price}
                      </span>
                      <span className="text-sm text-white/50">MT</span>
                    </p>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white/[0.04] p-3">
                      <Clock3 size={16} className="text-[#FF8A5B]" />
                      <p className="mt-2 text-xs text-white/40">Trabalho estimado</p>
                      <p className="mt-1 text-sm font-medium">{item.hours}</p>
                    </div>
                    <div className="rounded-xl bg-white/[0.04] p-3">
                      <CalendarDays size={16} className="text-[#FF8A5B]" />
                      <p className="mt-2 text-xs text-white/40">Prazo estimado</p>
                      <p className="mt-1 text-sm font-medium">{item.delivery}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex-1">
                    <p className="mb-4 text-xs uppercase tracking-[0.16em] text-white/40">
                      O que está incluído
                    </p>
                    {(() => {
  const showAllFeatures = expandedFeatures.includes(index);
  const visibleFeatures = showAllFeatures
    ? item.features
    : item.features.slice(0, 5);

  return (
    <>
      <ul className="space-y-3">
        {visibleFeatures.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm leading-5 text-white/75"
          >
            <Check
              size={16}
              className="mt-0.5 shrink-0 text-[#FF8A5B]"
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {item.features.length > 5 && (
        <button
          type="button"
          aria-expanded={showAllFeatures}
          onClick={() =>
            setExpandedFeatures((current) =>
              showAllFeatures
                ? current.filter((packageIndex) => packageIndex !== index)
                : [...current, index]
            )
          }
          className="mt-4 inline-flex min-h-10 items-center gap-2 text-sm font-medium text-[#FF8A5B] transition hover:text-[#FFB08D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF8A5B]"
        >
          {showAllFeatures ? "Mostrar menos" : "Ver todos os benefícios"}
          <ChevronDown
            size={15}
            className={`transition-transform ${
              showAllFeatures ? "rotate-180" : ""
            }`}
          />
        </button>
      )}
    </>
  );
})()}

                    {isExpanded && (
                      <div className="mt-5 space-y-3 rounded-xl border border-white/10 bg-black/20 p-4">
                        <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/60">
                          Notas do pacote
                        </p>
                        {item.details.map((detail) => (
                          <p key={detail} className="text-xs leading-5 text-white/50">
                            {detail}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    onClick={() => setExpandedPackage(isExpanded ? null : index)}
                    className="mt-6 flex min-h-11 w-full items-center justify-between gap-3 rounded-xl border border-white/10 px-4 py-3 text-sm text-white/70 transition hover:border-white/25 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8A5B]"
                  >
                    {isExpanded ? "Ocultar detalhes" : "Ver detalhes e condições"}
                    <ChevronDown
                      size={16}
                      className={`shrink-0 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                    />
                  </button>

                  <Link
                    href="/contactos"
                    className={`mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF8A5B] ${
                      item.recommended
                        ? "bg-[#F5F5F0] text-[#09090B] hover:bg-[#FF8A5B]"
                        : "border border-white/15 text-white hover:border-white/35 hover:bg-white/[0.04]"
                    }`}
                  >
                    Pedir orçamento
                    <ArrowUpRight size={16} />
                  </Link>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            {...reveal}
            className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5 sm:p-7"
          >
            <p className="text-sm font-medium">Condições comerciais</p>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <p className="text-sm text-white/80">Pagamento</p>
                <p className="mt-2 text-xs leading-5 text-white/50">
                  50% para iniciar o projecto e 50% antes da entrega dos
                  ficheiros finais sem marca de água.
                </p>
              </div>
              <div>
                <p className="text-sm text-white/80">Prazos e revisões</p>
                <p className="mt-2 text-xs leading-5 text-white/50">
                  Os prazos são estimativas e dependem da complexidade, da
                  recepção dos materiais e da aprovação do cliente. Alterações
                  ao conceito aprovado ou revisões adicionais podem ter custos
                  extra.
                </p>
              </div>
              <div>
                <p className="text-sm text-white/80">Produção e ficheiros-fonte</p>
                <p className="mt-2 text-xs leading-5 text-white/50">
                  A impressão e a produção física não estão incluídas.
                  Ficheiros editáveis, licenças de recursos de terceiros e
                  pedidos urgentes são tratados no orçamento.
                </p>
              </div>
            </div>
            <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-5 text-white/40">
              O âmbito final, os direitos de utilização e as condições
              específicas serão confirmados por escrito no orçamento antes
              do início do trabalho.
            </p>
          </motion.div>
        </div>
      </section>

           
      
      <section
        id="design-grafico-avulso"
        className="scroll-mt-24 px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#FF8A5B]">
              Sem compromisso mensal
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Design gráfico avulso
            </h2>

            <p className="mt-3 leading-7 text-white/50">
              Precisas apenas de uma peça específica? Contrata o serviço
              individual de que o teu negócio precisa.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Post para redes sociais", price: "300–500 MT" },
              { name: "Flyer promocional", price: "400–800 MT" },
              { name: "Cartaz publicitário", price: "500–1.000 MT" },
              { name: "Capa para Facebook", price: "400–700 MT" },
              { name: "Banner digital", price: "400–800 MT" },
              { name: "Cartão de visita", price: "500–800 MT" },
              { name: "Papel timbrado", price: "500–800 MT" },
              { name: "Carrossel até 5 páginas", price: "800–1.500 MT" },
              { name: "Menu de restaurante", price: "800–1.500 MT" },
              { name: "Catálogo até 10 páginas", price: "2.000–4.000 MT" },
              { name: "Apresentação até 10 slides", price: "2.000–4.000 MT" },
              { name: "Embalagem ou etiqueta", price: "Desde 1.500 MT" },
              { name: "Logótipo avulso", price: "Desde 2.500 MT" },
              { name: "Manual de identidade visual", price: "Desde 2.500 MT" },
            ].map((item) => (
              <div
                key={item.name}
                className="flex items-start justify-between gap-4 rounded-2xl border border-white/[0.08] bg-[#0B0D12] p-4 sm:p-5"
              >
                <p className="text-sm leading-6 text-white/70">
                  {item.name}
                </p>

                <p className="shrink-0 text-right text-sm font-medium text-[#FFB08D]">
                  {item.price}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-white/40">
              Preços indicativos. O valor final depende da complexidade do pedido.
            </p>

            <Link
              href="/contactos"
              className="inline-flex min-h-10 items-center gap-2 self-start text-sm font-medium text-[#FF8A5B] transition hover:text-[#FFB08D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF8A5B]"
            >
              Pedir orçamento
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>



      <section
        id="pacotes-mensais-design"
        className="scroll-mt-24 px-5 pt-8 pb-16 sm:px-8 lg:px-12 lg:pt-10 lg:pb-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#FF8A5B]">
              Produção gráfica recorrente
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Pacotes mensais de produção gráfica
            </h2>

            <p className="mt-3 leading-7 text-white/50">
              Mantém a comunicação visual da tua marca consistente com designs
              profissionais todos os meses.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                name: "FRAME",
                pieces: "5 peças por mês",
                price: "2.500 MT",
                description: "Para negócios que precisam de uma presença visual regular.",
                features: [
                  "5 designs personalizados;",
                  "Formatos para feed;",
                  "Consistência visual básica;",
                  "1 ronda de revisão por peça.",
                ],
              },
              {
                name: "COMPOSE",
                pieces: "10 peças por mês",
                price: "4.000 MT",
                description: "Para marcas com campanhas e promoções frequentes.",
                features: [
                  "10 designs personalizados;",
                  "Adaptações para campanhas e promoções;",
                  "Coerência com a identidade da marca;",
                  "2 rondas de revisão por peça.",
                ],
              },
              {
                name: "ARTIFACT",
                pieces: "20 peças por mês",
                price: "7.500 MT",
                description: "Para negócios com maior necessidade de conteúdo visual.",
                features: [
                  "20 designs personalizados;",
                  "Conteúdos promocionais e comerciais;",
                  "Adaptações aos formatos acordados;",
                  "2 rondas de revisão por peça.",
                ],
              },
            ].map((item) => (
              <div
                key={item.name}
                className="flex flex-col rounded-2xl border border-white/[0.08] bg-[#0B0D12] p-5 sm:p-6"
              >
                <p className="text-xs font-medium tracking-[0.18em] text-[#FF8A5B]">
                  {item.name}
                </p>

                <p className="mt-4 text-sm text-white/50">{item.pieces}</p>

                <p className="mt-1 text-2xl font-semibold tracking-tight text-white">
                  {item.price}
                  <span className="ml-1 text-xs font-normal text-white/40">
                    / mês
                  </span>
                </p>

                <p className="mt-3 min-h-12 text-sm leading-6 text-white/50">
                  {item.description}
                </p>

                <div className="my-5 h-px bg-white/[0.08]" />

                <ul className="flex-1 space-y-3">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2 text-sm leading-6 text-white/70"
                    >
                      <span className="text-[#FF8A5B]">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contactos"
                  className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white transition hover:border-[#FF8A5B]/50 hover:text-[#FFB08D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF8A5B]"
                >
                  Pedir este pacote
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs leading-5 text-white/40">
            Os pacotes incluem apenas produção gráfica. Não incluem publicação
            de conteúdos, gestão de redes sociais, filmagem ou edição de vídeo.
          </p>
        </div>
      </section>
      <section
        id="condicoes-comerciais"
        className="px-5 pt-4 pb-16 sm:px-8 lg:px-12 lg:pb-20"
      >
        <div className="mx-auto max-w-7xl rounded-2xl border border-white/[0.08] bg-[#0B0D12] p-6 sm:p-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#FF8A5B]">
              Antes de contratar
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Condições comerciais
            </h2>

            <p className="mt-3 leading-7 text-white/50">
              Para garantir um processo de trabalho claro e organizado,
              aplicam-se as seguintes condições aos serviços de design gráfico
              e identidade visual.
            </p>
          </div>

          <div className="mt-7 grid gap-x-10 gap-y-6 md:grid-cols-2">
            {[
              {
                title: "Pagamento",
                description:
                  "50% de entrada para iniciar o projecto e os restantes 50% antes da entrega dos ficheiros finais.",
              },
              {
                title: "Início do trabalho",
                description:
                  "O trabalho começa após a confirmação do pagamento inicial e a recepção de todas as informações necessárias.",
              },
              {
                title: "Revisões e alterações",
                description:
                  "Cada pacote inclui um número limitado de rondas de revisão. Alterações de conceito e pedidos adicionais são orçamentados à parte.",
              },
              {
                title: "Serviços não incluídos",
                description:
                  "Domínios, impressão, registo de marca, fotografia, licenças externas e desenvolvimento de websites não estão incluídos, salvo indicação expressa na proposta.",
              },
              {
                title: "Ficheiros editáveis",
                description:
                  "A entrega de ficheiros editáveis, como AI ou PSD, deve estar expressamente incluída na proposta comercial.",
              },
              {
                title: "Prazos de entrega",
                description:
                  "Os prazos dependem da complexidade do projecto e da rapidez com que o cliente fornece informações, feedback e aprovações.",
              },
            ].map((item, index) => (
              <div key={item.title} className="flex items-start gap-4">
                <span className="pt-0.5 text-xs font-medium tabular-nums text-[#FF8A5B]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-sm font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/50">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <motion.div
          {...reveal}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#131115] px-6 py-12 sm:px-12 sm:py-16 lg:px-16"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-[#FF3D81]/15 blur-[100px]"
          />
          <div className="relative grid items-end gap-8 md:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <p className="mb-5 text-xs uppercase tracking-[0.24em] text-[#FF8A5B]">
                O próximo passo
              </p>
              <h2 className="text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
                Vamos dar à tua marca uma identidade própria?
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-white/55">
                Conta-nos o que estás a construir. Vamos conversar sobre uma
                identidade visual alinhada com a tua marca e os teus objectivos.
              </p>
            </div>
            <Link
              href="/contactos"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#F5F5F0] px-6 py-3 text-sm font-medium text-[#09090B] transition hover:bg-[#FF8A5B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF8A5B]"
            >
              Falar sobre o projecto
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





