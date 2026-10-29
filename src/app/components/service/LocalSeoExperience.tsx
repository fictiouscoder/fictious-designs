"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Compass,
  Clock3,
  MapPin,
  MessageCircle,
  Radar,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";
import SeoGrowthFlow from "@/app/components/service/SeoGrowthFlow";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("seo-local")!;

const benefits = [
  {
    number: "01",
    title: "Mais clareza",
    description:
      "Informações consistentes ajudam as pessoas a compreender o teu negócio e a entrar em contacto.",
    icon: Search,
  },
  {
    number: "02",
    title: "Presença optimizada",
    description:
      "Revemos os perfis e os conteúdos locais para identificar oportunidades de melhoria.",
    icon: Target,
  },
  {
    number: "03",
    title: "Confiança local",
    description:
      "Uma apresentação cuidada facilita o acesso a informações, serviços e contactos.",
    icon: ShieldCheck,
  },
];

const auditItems = [
  {
    title: "Perfil de Empresa no Google",
    description: "Informações, categorias e completude do perfil.",
  },
  {
    title: "Contactos e localização",
    description: "Consistência do nome, morada, telefone e horário.",
  },
  {
    title: "Conteúdo local",
    description: "Relevância dos serviços e das palavras-chave utilizadas.",
  },
  {
    title: "Avaliações dos clientes",
    description: "Presença das avaliações e oportunidades de resposta.",
  },
];

const localSeoPackages = [
  {
    number: "01",
    category: "Essencial",
    name: "Local Start",
    price: "2.500",
    billing: "pagamento único",
    hours: "4–6 horas",
    delivery: "3–5 dias úteis",
    recommended: false,
    description:
      "Para negócios que querem começar a construir a sua presença nas pesquisas locais.",
    features: [
      "Auditoria inicial da presença digital local.",
      "Configuração ou optimização básica do Perfil de Empresa no Google.",
      "Actualização dos dados comerciais fornecidos pelo cliente.",
      "Descrição comercial optimizada.",
      "Organização de categorias e serviços.",
      "Adição de website e contactos relevantes.",
      "Orientações para fotografias adequadas.",
      "Configuração ou melhoria no Yango Maps, quando disponível e elegível.",
      "Orientações para recolher avaliações legítimas.",
    ],
    details: [
      "A verificação das plataformas pode demorar mais do que o prazo estimado.",
      "O cliente deve fornecer informações correctas e comprovar a elegibilidade do negócio.",
    ],
  },
  {
    number: "02",
    category: "Profissional",
    name: "Local Growth",
    price: "3.500",
    billing: "por mês",
    hours: "5–8 h no primeiro mês; 3–5 h nos seguintes",
    delivery: "5–7 dias úteis para configuração inicial",
    recommended: true,
    description:
      "Para empresas que querem melhorar a relevância local e manter os seus perfis actualizados.",
    features: [
      "Tudo do Local Start, incluindo optimização inicial.",
      "Monitorização mensal do Perfil de Empresa no Google.",
      "Pesquisa de palavras-chave locais relevantes.",
      "Optimização de até 10 serviços ou produtos, quando aplicável.",
      "Até 4 actualizações mensais no Perfil de Empresa no Google.",
      "Monitorização de avaliações e orientação para respostas profissionais.",
      "Verificação mensal da consistência dos dados comerciais.",
      "Relatório mensal de visualizações, pesquisas e interacções disponíveis.",
      "Recomendações para melhorar a visibilidade local.",
      "Acompanhamento no Yango Maps, quando permitido pela plataforma.",
    ],
    details: [
      "O primeiro mês inclui aproximadamente 5–8 horas de trabalho; os meses seguintes, 3–5 horas.",
      "O acompanhamento é contínuo, sujeito à disponibilidade de dados e funcionalidades das plataformas.",
      "O pagamento mensal é antecipado e o trabalho realizado é documentado num relatório.",
    ],
  },
  {
    number: "03",
    category: "Premium",
    name: "Local Authority",
    price: "7.500",
    billing: "por mês",
    hours: "10–16 h no primeiro mês; 6–10 h nos seguintes",
    delivery: "7–12 dias úteis para implementação inicial",
    recommended: false,
    description:
      "Para empresas que pretendem trabalhar a visibilidade local de forma mais abrangente, incluindo o website.",
    features: [
      "Tudo do Local Growth.",
      "Auditoria mensal de SEO local e do website existente.",
      "Pesquisa e mapeamento de palavras-chave locais.",
      "Optimização on-page de até 5 páginas existentes.",
      "Optimização de títulos SEO, meta descriptions e cabeçalhos.",
      "Recomendações para melhorar a experiência em dispositivos móveis.",
      "Verificação de indexação e problemas técnicos básicos.",
      "Estratégia de conteúdo orientada para pesquisas locais.",
      "Análise de até 3 concorrentes locais.",
      "Monitorização das palavras-chave seleccionadas, através das ferramentas disponíveis.",
      "Relatório mensal com análise e plano de acção.",
    ],
    details: [
      "O primeiro mês inclui aproximadamente 10–16 horas de trabalho; os meses seguintes, 6–10 horas.",
      "A implementação depende do acesso ao website, às contas e dos recursos técnicos disponíveis.",
      "O pagamento mensal é antecipado e o trabalho realizado é documentado num relatório.",
    ],
  },
];

const localSeoOneOffServices = [
  { name: "Auditoria de presença local", price: "800-1.500 MT" },
  { name: "Configuração do Perfil de Empresa no Google", price: "1.500-2.000 MT" },
  { name: "Optimização de perfil existente", price: "1.200-1.800 MT" },
  { name: "Descrição comercial optimizada", price: "500-800 MT" },
  { name: "Pesquisa de palavras-chave locais", price: "1.000-2.000 MT" },
  { name: "Configuração ou melhoria no Yango Maps", price: "500–1.200 MT" },
  { name: "Auditoria de SEO on-page", price: "1.500–3.000 MT" },
  { name: "Optimização SEO de uma página", price: "800–1.500 MT" },
  { name: "Análise de concorrentes locais", price: "1.000–2.000 MT" },
  { name: "Relatório de desempenho SEO", price: "800–1.500 MT" },
];

const faqs = service.faqs;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function LocalSeoExperience() {
  const reduceMotion = useReducedMotion();
  const [businessName, setBusinessName] = useState("");
  const [city, setCity] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [radius, setRadius] = useState(50);
  const [expandedPackage, setExpandedPackage] = useState<number | null>(1);

  const motionTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const };

  function handleAuditSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!businessName.trim() || !city.trim()) return;

    setSubmitted(true);
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07070A] text-[#F5F5F7]">
      <ScrollReveal />
      <Navigation />
      <SeoGrowthFlow />
      <div className="relative z-10">

      {/* Hero */}
      <section className="relative px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40 lg:px-16 lg:pb-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: reduceMotion ? 0 : 0.12,
                },
              },
            }}
          >
            <motion.div
              variants={fadeUp}
              transition={motionTransition}
              className="flex items-center gap-3"
            >
              <span className="h-px w-10 bg-cyan-400" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300 sm:text-sm">
                {service.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={motionTransition}
              className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            >
              {service.headline.split("perto")[0]}
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                perto
              </span>
              {service.headline.split("perto")[1] ?? ""}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={motionTransition}
              className="mt-7 max-w-xl text-base leading-8 text-white/60 sm:text-lg"
            >
              {service.subtitle}
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={motionTransition}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#diagnostico"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-cyan-300 px-7 py-4 text-sm font-semibold text-[#071014] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                Explorar diagnóstico
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 px-7 py-4 text-sm font-medium text-white/80 transition hover:border-cyan-300/40 hover:text-white"
              >
                Como funciona
                <ArrowDown size={16} />
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={motionTransition}
              className="mt-10 flex items-center gap-3 text-sm text-white/40"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/[0.08]">
                <Compass size={15} className="text-cyan-300" />
              </span>
              Estratégia local adaptada ao teu negócio
            </motion.div>
          </motion.div>

          {/* Mapa ilustrativo */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={motionTransition}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-cyan-400/[0.06] blur-2xl" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.1] bg-[#0D1017] p-4 shadow-2xl shadow-cyan-950/20 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                    Descoberta local
                  </p>
                  <p className="mt-1 text-sm font-medium text-white/90">
                    A tua área de actuação
                  </p>
                </div>
                <span className="flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-3 py-1.5 text-xs text-cyan-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  Ilustração
                </span>
              </div>

              <div className="relative mt-5 aspect-square overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111923]">
                <svg
                  viewBox="0 0 400 400"
                  role="img"
                  aria-label="Mapa abstracto ilustrativo com ruas e um marcador de localização"
                  className="absolute inset-0 h-full w-full"
                  fill="none"
                >
                  <defs>
                    <pattern
                      id="local-grid"
                      width="26"
                      height="26"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 26 0 L 0 0 0 26"
                        stroke="#94A3B8"
                        strokeOpacity=".08"
                        strokeWidth=".7"
                      />
                    </pattern>
                    <linearGradient id="local-road" x1="0" y1="0" x2="1" y2="1">
                      <stop stopColor="#64748B" stopOpacity=".5" />
                      <stop offset="1" stopColor="#475569" stopOpacity=".16" />
                    </linearGradient>
                  </defs>

                  <rect width="400" height="400" fill="url(#local-grid)" />

                  <g
                    stroke="url(#local-road)"
                    strokeWidth="10"
                    strokeLinecap="round"
                  >
                    <path d="M-30 85 L115 140 L235 85 L430 140" />
                    <path d="M-20 265 L120 210 L255 280 L430 230" />
                    <path d="M80 -20 L135 100 L100 220 L170 430" />
                    <path d="M295 -20 L255 105 L310 200 L275 430" />
                  </g>

                  <g
                    stroke="#22D3EE"
                    strokeOpacity=".42"
                    strokeWidth="1.5"
                    strokeDasharray="5 7"
                  >
                    <circle cx="200" cy="195" r="55" />
                    <circle cx="200" cy="195" r="94" />
                    <circle cx="200" cy="195" r="135" />
                  </g>

                  <g fill="#1E293B" stroke="#64748B" strokeOpacity=".25">
                    <rect x="26" y="35" width="42" height="25" rx="5" />
                    <rect x="162" y="38" width="49" height="28" rx="5" />
                    <rect x="324" y="48" width="42" height="24" rx="5" />
                    <rect x="35" y="315" width="55" height="28" rx="5" />
                    <rect x="312" y="316" width="49" height="27" rx="5" />
                    <rect x="155" y="320" width="36" height="24" rx="5" />
                  </g>

                  <g transform="translate(200 195)">
                    <circle r="35" fill="#22D3EE" fillOpacity=".08">
                      <animate
                        attributeName="r"
                        values="25;40;25"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle r="23" fill="#22D3EE" fillOpacity=".12" />
                    <circle r="12" fill="#22D3EE" fillOpacity=".18" />
                    <path
                      d="M0 -17 C-10 -17 -17 -9 -17 1 C-17 13 0 26 0 26 C0 26 17 13 17 1 C17 -9 10 -17 0 -17Z"
                      fill="#22D3EE"
                    />
                    <circle cy="0" r="5" fill="#071014" />
                  </g>
                </svg>

                <div className="absolute left-4 top-4 rounded-xl border border-white/10 bg-[#090D14]/90 px-3 py-2 backdrop-blur">
                  <p className="text-[10px] uppercase tracking-wider text-white/40">
                    Área de pesquisa
                  </p>
                  <p className="mt-1 text-xs font-medium text-white/80">
                    Proximidade + relevância
                  </p>
                </div>

                <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-cyan-300/20 bg-[#090D14]/90 px-3 py-2 text-xs text-cyan-200 backdrop-blur">
                  <MapPin size={14} />
                  Ponto ilustrativo
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                  ["Perfil", "Optimização"],
                  ["Conteúdo", "Relevância"],
                  ["Dados", "Consistência"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3"
                  >
                    <p className="text-[10px] text-white/40">{label}</p>
                    <p className="mt-1 text-xs font-medium text-white/80">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-[11px] leading-5 text-white/35">
                Representação conceptual. Não apresenta dados geográficos,
                posições reais no Google ou resultados de pesquisa.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="relative border-y border-white/[0.06] px-5 py-20 sm:px-8 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="scroll-reveal max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-cyan-300">
              O valor do SEO Local
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Ser encontrado começa com uma boa base.
            </h2>
            <p className="mt-5 leading-7 text-white/55">
              Não existem atalhos garantidos. Existem informações bem
              organizadas, conteúdo relevante e melhorias consistentes.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.article
                  key={benefit.number}
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    ...motionTransition,
                    delay: reduceMotion ? 0 : index * 0.1,
                  }}
                  className="group rounded-[1.5rem] border border-white/[0.08] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-cyan-300/25 hover:bg-cyan-300/[0.035] sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/30">
                      {benefit.number}
                    </span>
                    <Icon
                      size={21}
                      strokeWidth={1.5}
                      className="text-cyan-300 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="mt-10 text-xl font-medium tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {benefit.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pacotes de SEO Local */}
      <section
        id="pacotes-seo-local"
        className="scroll-mt-24 border-y border-white/[0.06] bg-white/[0.015] px-5 py-20 sm:px-8 sm:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-cyan-300">
              Investimento em visibilidade local
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Escolhe o nível certo para o teu negócio.
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-white/55">
              Desde uma presença local bem organizada até um trabalho contínuo
              de SEO no perfil comercial e no website. Cada plano tem um âmbito
              definido e objectivos realistas.
            </p>
          </div>

          <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
            {localSeoPackages.map((pkg, index) => (
              <motion.article
                key={pkg.name}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  ...motionTransition,
                  delay: reduceMotion ? 0 : index * 0.08,
                }}
                className={`relative flex h-full flex-col rounded-3xl border p-6 sm:p-7 ${
                  pkg.recommended
                    ? "border-cyan-300/40 bg-cyan-300/[0.055] shadow-xl shadow-cyan-950/10"
                    : "border-white/10 bg-[#0B0D12]"
                }`}
              >
                {pkg.recommended && (
                  <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/[0.09] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-200">
                    <Sparkles size={12} />
                    Recomendado
                  </span>
                )}

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                      {pkg.number} / {pkg.category}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                      {pkg.name}
                    </h3>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06] text-cyan-200">
                    {index === 0 ? (
                      <MapPin size={19} />
                    ) : index === 1 ? (
                      <Radar size={19} />
                    ) : (
                      <Target size={19} />
                    )}
                  </span>
                </div>

                <p className="mt-4 min-h-[3.5rem] text-sm leading-6 text-white/55">
                  {pkg.description}
                </p>

                <div className="mt-6 border-b border-white/[0.08] pb-6">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className="text-4xl font-semibold tracking-[-0.05em] text-white">
                      {pkg.price}
                    </span>
                    <span className="text-sm text-white/45">MT</span>
                  </div>
                  <p className="mt-1 text-xs text-white/40">{pkg.billing}</p>
                </div>

                <div className="mt-5 space-y-3">
                  {pkg.features.slice(0, expandedPackage === index ? pkg.features.length : 5).map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-cyan-300"
                      />
                      <p className="text-sm leading-6 text-white/70">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <div className="flex items-start gap-3">
                    <Clock3 size={16} className="mt-0.5 shrink-0 text-cyan-300" />
                    <div>
                      <p className="text-xs font-medium text-white/75">
                        Tempo estimado de trabalho
                      </p>
                      <p className="mt-1 text-xs leading-5 text-white/45">
                        {pkg.hours}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-start gap-3">
                    <Compass size={16} className="mt-0.5 shrink-0 text-cyan-300" />
                    <div>
                      <p className="text-xs font-medium text-white/75">
                        Prazo de implementação
                      </p>
                      <p className="mt-1 text-xs leading-5 text-white/45">
                        {pkg.delivery}
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  aria-expanded={expandedPackage === index}
                  onClick={() =>
                    setExpandedPackage(
                      expandedPackage === index ? null : index,
                    )
                  }
                  className="mt-5 flex w-full items-center justify-between gap-3 py-2 text-left text-sm text-white/65 transition hover:text-cyan-200"
                >
                  <span>{expandedPackage === index ? "Mostrar menos benefícios" : "Ver todos os benefícios"}</span>
                  <ChevronDown
                    size={16}
                    className={`shrink-0 transition-transform ${
                      expandedPackage === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedPackage === index && (
                  <div className="space-y-2 pb-2">
                    {pkg.details.map((detail) => (
                      <p
                        key={detail}
                        className="text-xs leading-5 text-white/45"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                )}

                <div className="mt-auto pt-7">
                  <Link
                    href={`/contactos?servico=seo-local&pacote=${encodeURIComponent(pkg.name)}`}
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium transition ${
                      pkg.recommended
                        ? "bg-cyan-300 text-[#071014] hover:bg-cyan-200"
                        : "border border-white/15 text-white hover:border-cyan-300/40 hover:text-cyan-200"
                    }`}
                  >
                    Pedir orçamento
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Serviços avulsos */}
          <div className="mt-20">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-cyan-300">
                Sem compromisso mensal
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Serviços avulsos
              </h3>
              <p className="mt-3 leading-7 text-white/50">
                Precisas apenas de uma tarefa específica? Podes contratar um
                serviço individual, conforme as necessidades do teu negócio.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {localSeoOneOffServices.map((item) => (
                <div
                  key={item.name}
                  className="flex items-start justify-between gap-4 rounded-2xl border border-white/[0.08] bg-[#0B0D12] p-5"
                >
                  <p className="text-sm leading-6 text-white/70">
                    {item.name}
                  </p>
                  <p className="shrink-0 text-right text-sm font-medium text-cyan-200">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Condições comerciais */}
          <div className="mt-12 rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <ShieldCheck
                size={21}
                className="mt-0.5 shrink-0 text-cyan-300"
              />
              <div>
                <h3 className="text-lg font-medium text-white">
                  Condições importantes
                </h3>
                <div className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {[
                    "As contas comerciais permanecem sob propriedade e controlo do cliente.",
                    "O cliente deve fornecer dados correctos, acessos necessários e comprovativos de elegibilidade.",
                    "A verificação e aprovação dependem das plataformas; os prazos podem variar.",
                    "Não garantimos posições específicas no Google, número de clientes ou resultados comerciais.",
                    "Publicidade paga, orçamento de anúncios, criação de websites, fotografia e ferramentas pagas não estão incluídos.",
                    "Não compramos nem fabricamos avaliações. As recomendações de resposta devem ser honestas.",
                    "Os serviços mensais são pagos antecipadamente e acompanhados por relatório.",
                    "O prazo depende do acesso às contas, dos materiais, das aprovações e da disponibilidade das plataformas.",
                  ].map((condition) => (
                    <div key={condition} className="flex items-start gap-3">
                      <Check
                        size={15}
                        className="mt-1 shrink-0 text-cyan-300/80"
                      />
                      <p className="text-sm leading-6 text-white/50">
                        {condition}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-6 border-t border-white/[0.07] pt-5 text-xs leading-5 text-white/35">
              Os valores apresentados são preços de referência da Fictious
              Designs. O orçamento final depende do âmbito do trabalho, dos
              recursos disponíveis e da elegibilidade do negócio nas plataformas.
            </p>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section
        id="como-funciona"
        className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28 lg:px-16"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="scroll-reveal">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-cyan-300">
              Método de trabalho
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Cada melhoria tem uma razão.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-white/55">
              Uma abordagem organizada para perceber o ponto de partida,
              definir prioridades e acompanhar o trabalho.
            </p>

            <a
              href="https://wa.me/258861846870?text=Ola%2C%20gostaria%20de%20saber%20mais%20sobre%20SEO%20Local."
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-white"
            >
              Falar sobre o meu negócio
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="space-y-0">
            {service.process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={reduceMotion ? false : { opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  ...motionTransition,
                  delay: reduceMotion ? 0 : index * 0.08,
                }}
                className="grid grid-cols-[44px_1fr] gap-4 border-b border-white/[0.08] py-6 first:pt-0 sm:grid-cols-[56px_1fr] sm:gap-6 sm:py-8"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/20 text-xs text-cyan-200 sm:h-12 sm:w-12">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-medium">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/55">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnóstico demonstrativo */}
      <section
        id="diagnostico"
        className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/[0.07] via-[#0B0D13] to-blue-500/[0.07] p-5 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3 py-1.5 text-xs text-cyan-200">
                <Sparkles size={14} />
                Ferramenta demonstrativa
              </span>
              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Começa por conhecer a tua presença local.
              </h2>
              <p className="mt-5 max-w-lg leading-7 text-white/55">
                Introduz o nome do negócio e a cidade para gerar uma lista
                ilustrativa de pontos a rever. Esta demonstração não consulta
                o Google nem analisa dados reais.
              </p>

              <form onSubmit={handleAuditSubmit} className="mt-8 space-y-4">
                <div>
                  <label
                    htmlFor="business-name"
                    className="mb-2 block text-sm text-white/75"
                  >
                    Nome do negócio
                  </label>
                  <input
                    id="business-name"
                    value={businessName}
                    onChange={(event) => {
                      setBusinessName(event.target.value);
                      setSubmitted(false);
                    }}
                    placeholder="Ex.: A minha empresa"
                    maxLength={100}
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="business-city"
                    className="mb-2 block text-sm text-white/75"
                  >
                    Cidade ou zona
                  </label>
                  <input
                    id="business-city"
                    value={city}
                    onChange={(event) => {
                      setCity(event.target.value);
                      setSubmitted(false);
                    }}
                    placeholder="Ex.: Maputo"
                    maxLength={100}
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/10"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-4 text-sm font-semibold text-[#071014] transition hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                >
                  Preparar lista demonstrativa
                  <ArrowRight size={17} />
                </button>
              </form>

              {submitted && (
                <p role="status" className="mt-4 text-sm leading-6 text-cyan-200">
                  Lista preparada para {businessName.trim()} — {city.trim()}.
                  Os pontos apresentados são genéricos e ainda precisam de
                  verificação real.
                </p>
              )}
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#080A10]/80 p-5 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                    Lista de verificação
                  </p>
                  <h3 className="mt-2 text-xl font-medium">
                    {submitted ? businessName.trim() : "Pontos a analisar"}
                  </h3>
                  <p className="mt-1 text-sm text-white/40">
                    {submitted ? city.trim() : "Exemplo genérico"}
                  </p>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.08] text-cyan-200">
                  <Radar size={20} />
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {auditItems.map((item, index) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-4"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 text-cyan-200">
                      {submitted ? (
                        <Check size={13} />
                      ) : (
                        <span className="text-[10px]">{index + 1}</span>
                      )}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-white/85">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-white/45">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs leading-5 text-white/35">
                Os indicadores não representam uma auditoria efectuada. Não
                foram consultados perfis, avaliações, mapas ou rankings reais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Área de actuação */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-[1.75rem] border border-white/[0.08] bg-white/[0.02] p-6 sm:p-10 md:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-cyan-300">
              Proximidade relevante
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-4xl">
              O contexto local faz diferença.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/55">
              A presença local depende de factores como relevância, distância,
              qualidade das informações e concorrência. Explora uma área
              ilustrativa para compreender o conceito de proximidade.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-[#0A0D13] p-5">
            <div className="flex items-center justify-between gap-3">
              <label htmlFor="radius" className="text-sm text-white/75">
                Área conceptual
              </label>
              <span className="text-sm font-medium text-cyan-200">
                {radius}%
              </span>
            </div>
            <input
              id="radius"
              type="range"
              min="10"
              max="100"
              step="10"
              value={radius}
              onChange={(event) => setRadius(Number(event.target.value))}
              className="mt-5 w-full accent-cyan-300"
            />
            <div className="relative mt-5 flex aspect-[2/1] items-center justify-center overflow-hidden rounded-xl border border-white/[0.06] bg-[#111923]">
              <div
                className="absolute rounded-full border border-cyan-300/40 bg-cyan-300/[0.07] transition-all duration-300"
                style={{
                  width: `${radius}%`,
                  height: `${radius}%`,
                }}
              />
              <div
                className="absolute rounded-full border border-blue-400/30"
                style={{
                  width: `${Math.max(12, radius * 0.55)}%`,
                  height: `${Math.max(12, radius * 0.55)}%`,
                }}
              />
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300 text-[#071014] shadow-lg shadow-cyan-300/20">
                <MapPin size={19} />
              </span>
            </div>
            <p className="mt-3 text-xs leading-5 text-white/35">
              Visualização conceptual, não geográfica. O controlo não calcula
              distâncias nem representa uma área real de pesquisa.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div className="scroll-reveal">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-cyan-300">
              Perguntas frequentes
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              O que precisas de saber.
            </h2>
            <p className="mt-5 leading-7 text-white/55">
              Informação clara para decidires se o SEO Local faz sentido para
              o teu negócio.
            </p>
          </div>

          <div className="divide-y divide-white/[0.08]">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              const panelId = `local-seo-faq-${index}`;

              return (
                <div key={faq.question} className="py-2">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                      className="flex w-full items-center justify-between gap-5 py-5 text-left text-sm font-medium text-white/85 transition hover:text-cyan-200 sm:text-base"
                    >
                      {faq.question}
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-cyan-300 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    hidden={!isOpen}
                    className="max-w-2xl pb-5 text-sm leading-7 text-white/55"
                  >
                    {faq.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="px-5 pb-24 pt-8 sm:px-8 sm:pb-32 lg:px-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={motionTransition}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-[#0C1118] px-6 py-14 text-center sm:px-12 sm:py-20"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-cyan-400/[0.12] blur-[100px]"
          />
          <div className="relative">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.08] text-cyan-200">
              <MessageCircle size={22} />
            </span>
            <h2 className="mx-auto mt-7 max-w-3xl text-3xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Vamos melhorar a presença local da tua marca?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              Conta-nos sobre o teu negócio e os teus objectivos. Vamos avaliar
              as necessidades e propor próximos passos realistas.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://wa.me/258861846870?text=Ola%2C%20gostaria%20de%20avaliar%20o%20SEO%20Local%20do%20meu%20negocio."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-7 py-4 text-sm font-semibold text-[#071014] transition hover:-translate-y-0.5 hover:bg-cyan-200"
              >
                Pedir uma avaliação
                <ArrowUpRight size={17} />
              </a>
              <Link
                href="/servicos"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-7 py-4 text-sm font-medium text-white/80 transition hover:border-cyan-300/30 hover:text-white"
              >
                Explorar serviços
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
      </div>
    </main>
  );
}



