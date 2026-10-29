"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,

  ChevronDown,
  MousePointer2,
  MousePointerClick,
  Megaphone,
  Target,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("marketing-digital");

const stats = [
  { label: "Alcance", value: "Visibilidade", icon: TrendingUp },
  { label: "Cliques", value: "Interesse", icon: MousePointerClick },
  { label: "Conversões", value: "Acção", icon: Target },
];

const channels = [
  { name: "Meta Ads", description: "Facebook e Instagram", number: "01" },
  { name: "Google Ads", description: "Pesquisa e intenção", number: "02" },
  { name: "Outros canais", description: "Conforme a estratégia", number: "03" },
];

const icons = [Target, BarChart3, Megaphone, Wallet, TrendingUp, MousePointer2];
const marketingAdPackages = [
  {
    number: "01",
    category: "Digital Presence",
    name: "IGNITE",
    price: "5.500",
    hours: "5–7 horas por mês",
    recommended: false,
    description:
      "Para negócios que querem começar a promover os seus produtos e serviços através de publicidade digital.",
    features: [
      "Análise inicial do negócio e dos objectivos da campanha.",
      "Definição de um objectivo publicitário principal.",
      "Planeamento de até 2 campanhas por mês.",
      "Configuração e gestão de campanhas Meta Ads (Facebook e Instagram).",
      "Configuração de públicos e segmentação geográfica.",
      "Até 3 variações de anúncios com materiais fornecidos pelo cliente.",
      "Monitorização e optimização básica das campanhas.",
      "Relatório mensal com os principais indicadores de desempenho.",
      "Recomendações para melhorar os resultados.",
    ],
    ideal:
      "Pequenos negócios, lojas, restaurantes e prestadores de serviços.",
  },
  {
    number: "02",
    category: "Customer Acquisition",
    name: "VELOCITY",
    price: "9.500",
    hours: "9–13 horas por mês",
    recommended: true,
    description:
      "Para marcas que pretendem aumentar a procura, gerar contactos e transformar o interesse em oportunidades comerciais.",
    features: [
      "Tudo o que está incluído no IGNITE.",
      "Planeamento de até 3 campanhas mensais.",
      "Estratégia de aquisição de clientes e geração de leads.",
      "Pesquisa e análise de públicos-alvo.",
      "Testes de até 5 variações de anúncios e criativos.",
      "Textos publicitários orientados para conversão.",
      "Testes de mensagens, ofertas e chamadas para acção.",
      "Optimização semanal das campanhas.",
      "Acompanhamento de CPC, CTR, leads e custo por resultado, conforme os dados disponíveis.",
      "Recomendações para melhorar o percurso até ao contacto ou compra.",
      "Relatório mensal com análise de desempenho e próximos passos.",
    ],
    ideal:
      "Boutiques, imobiliárias, clínicas, empresas de serviços, restaurantes e negócios que precisam de gerar contactos regularmente.",
  },
  {
    number: "03",
    category: "Performance & Scaling",
    name: "APEX",
    price: "16.000",
    hours: "16–22 horas por mês",
    recommended: false,
    description:
      "Para empresas que procuram uma operação publicitária estruturada, com testes contínuos e optimização orientada por dados.",
    features: [
      "Tudo o que está incluído no VELOCITY.",
      "Planeamento estratégico com base nos objectivos comerciais.",
      "Gestão de até 5 campanhas activas, conforme a estrutura da conta.",
      "Aquisição e remarketing, quando existirem dados e condições técnicas adequadas.",
      "Testes contínuos de públicos, mensagens e criativos.",
      "Até 8 variações de anúncios por mês.",
      "Monitorização de custos, resultados e oportunidades de optimização.",
      "Análise de desempenho por campanha, público e criativo.",
      "Recomendações para melhorar páginas de destino e processos de conversão.",
      "Revisão mensal das métricas e da estratégia.",
      "Relatório detalhado com recomendações para o ciclo seguinte.",
    ],
    ideal:
      "Empresas com oferta validada, orçamento publicitário consistente e capacidade para responder aos contactos gerados.",
  },
];

const marketingAdOneOffServices = [
  { name: "Auditoria de campanhas publicitárias", price: "1.500–2.500 MT" },
  { name: "Configuração inicial do Meta Ads Manager", price: "1.500–2.500 MT" },
  { name: "Configuração do Meta Pixel e eventos", price: "Desde 2.000 MT" },
  { name: "Pesquisa de público e planeamento de campanha", price: "1.500–3.000 MT" },
  { name: "Copywriting para anúncios", price: "300–600 MT / anúncio" },
  { name: "Design de criativo publicitário", price: "400–800 MT / peça" },
  { name: "Configuração de uma campanha pontual", price: "1.000–2.000 MT" },
  { name: "Relatório e análise de campanha", price: "800–1.500 MT" },
  { name: "Consultoria de marketing digital", price: "800–1.500 MT / hora" },
];


export default function MarketingExperience() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [expandedMarketingPackage, setExpandedMarketingPackage] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  if (!service) {
    throw new Error("Configuração do serviço Marketing Digital não encontrada.");
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#09090B] text-[#F5F5F0]">
      <Navigation />

      <section className="relative flex min-h-[88svh] items-center px-5 pb-20 pt-32 sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute right-[-15%] top-[12%] h-[480px] w-[480px] rounded-full bg-[#FF5E3A]/10 blur-[120px] sm:h-[600px] sm:w-[600px]" />
        <div className="pointer-events-none absolute right-[12%] top-[32%] h-[260px] w-[260px] rounded-full bg-[#FF9F1C]/10 blur-[100px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.24em] text-[#FF9F1C]"
            >
              <span className="h-px w-8 bg-[#FF9F1C]" />
              {service.eyebrow}
            </motion.p>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="max-w-3xl text-5xl font-medium leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-7xl"
            >
              Investe com intenção.
              <span className="mt-2 block bg-gradient-to-r from-[#FF9F1C] to-[#FF5E3A] bg-clip-text text-transparent">
                Aprende com os dados.
              </span>
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 max-w-xl text-base leading-7 text-[#A1A1AA] sm:text-lg sm:leading-8"
            >
              {service.description} Cada campanha começa com um objectivo,
              uma estratégia e critérios claros para avaliar o desempenho.
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contactos"
                className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-[#FF9F1C] px-6 py-3 text-sm font-semibold text-[#09090B] transition-colors hover:bg-[#FFB84D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF9F1C]"
              >
                Falar sobre uma campanha
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
              <a
                href="#estrategia"
                className="inline-flex min-h-12 items-center gap-2 rounded-full px-4 py-3 text-sm text-[#D4D4D8] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF9F1C]"
              >
                Explorar o serviço
                <ArrowDown size={15} />
              </a>
            </motion.div>

            <p className="mt-8 text-xs text-[#71717A]">
              Estratégia · Campanhas · Análise · Optimização
            </p>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-[#FF9F1C]/10 via-transparent to-[#FF5E3A]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.10] bg-[#111114]/95 p-5 shadow-2xl shadow-black/30 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-[#71717A]">VISÃO DE CAMPANHA</p>
                  <h2 className="mt-2 text-lg font-medium">Painel de desempenho</h2>
                </div>
                <span className="rounded-full border border-[#FF9F1C]/20 bg-[#FF9F1C]/10 px-3 py-1.5 text-[10px] uppercase tracking-wider text-[#FFB84D]">
                  Conceptual
                </span>
              </div>

              <div className="mt-7 grid grid-cols-3 gap-2 sm:gap-3">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-3 sm:p-4"
                    >
                      <Icon size={17} className="text-[#FF9F1C]" />
                      <p className="mt-4 text-[11px] text-[#A1A1AA]">
                        {stat.label}
                      </p>
                      <p className="mt-1 text-xs font-medium text-white sm:text-sm">
                        {stat.value}
                      </p>
                      <span className="mt-2 block text-[9px] text-[#71717A]">
                        Etapa {index + 1}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-2xl border border-white/[0.07] bg-[#09090B] p-4 sm:p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium">Evolução da campanha</p>
                    <p className="mt-1 text-xs text-[#71717A]">
                      Exemplo ilustrativo de acompanhamento
                    </p>
                  </div>
                  <BarChart3 size={19} className="text-[#FF9F1C]" />
                </div>

                <div
                  aria-label="Gráfico ilustrativo sem dados reais"
                  className="mt-6 flex h-32 items-end gap-2"
                >
                  {[30, 43, 36, 57, 49, 68, 60, 79, 70, 92, 76, 100].map(
                    (height, index) => (
                      <motion.div
                        key={index}
                        initial={reduceMotion ? false : { height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.65,
                          delay: reduceMotion ? 0 : index * 0.045,
                        }}
                        className="min-w-0 flex-1 rounded-t-sm bg-gradient-to-t from-[#FF5E3A]/40 to-[#FF9F1C]"
                      />
                    ),
                  )}
                </div>
                <div className="mt-3 flex justify-between text-[10px] text-[#71717A]">
                  <span>Início</span>
                  <span>Análise</span>
                  <span>Optimização</span>
                </div>
              </div>

              <div className="mt-4 flex items-start gap-3 rounded-xl border border-[#FF9F1C]/15 bg-[#FF9F1C]/[0.05] p-4">
                <Target size={18} className="mt-0.5 shrink-0 text-[#FF9F1C]" />
                <p className="text-xs leading-5 text-[#A1A1AA]">
                  Uma campanha eficaz não se mede apenas por cliques. Os
                  indicadores devem estar ligados ao objectivo do negócio.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="estrategia" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduceMotion ? 0 : 0.6 }}>
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.22em] text-[#FF9F1C]">
                Uma abordagem com propósito
              </p>
              <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
                Não é apenas anunciar.
                <span className="block text-[#71717A]">
                  É saber porquê.
                </span>
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-[#A1A1AA]">
                Ligamos objectivos comerciais a decisões de campanha,
                acompanhando os indicadores disponíveis para identificar o que
                merece ser ajustado.
              </p>
            </div>
          </motion.div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((benefit, index) => {
              const Icon = icons[index % icons.length];
              return (
                <motion.div key={benefit} initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduceMotion ? 0 : 0.6, delay: index * 0.06 }}>
                  <div className="group h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-[#FF9F1C]/30 hover:bg-[#FF9F1C]/[0.035] sm:p-7">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#71717A]">
                        0{index + 1}
                      </span>
                      <Icon
                        size={20}
                        className="text-[#FF9F1C] transition-transform group-hover:scale-110"
                      />
                    </div>
                    <h3 className="mt-8 text-lg font-medium">{benefit}</h3>
                    <div className="mt-5 h-px w-10 bg-gradient-to-r from-[#FF9F1C] to-[#FF5E3A] transition-all duration-300 group-hover:w-20" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Pacotes de Marketing Digital & Ads */}
      <section
        id="pacotes-marketing-ads"
        className="scroll-mt-24 border-y border-white/[0.06] bg-[#0D0D10] px-5 py-24 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#FF9F1C]">
              Estratégia · Aquisição · Performance
            </p>
            <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.045em] sm:text-5xl">
              Publicidade com um propósito.
              <span className="mt-2 block text-[#71717A]">
                Investimento orientado por dados.
              </span>
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-[#A1A1AA]">
              Escolhe o nível de acompanhamento adequado aos teus objectivos,
              à capacidade de resposta da tua equipa e ao orçamento disponível
              para publicidade.
            </p>
          </div>

          <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
            {marketingAdPackages.map((pkg, index) => (
              <motion.article
                key={pkg.name}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  delay: reduceMotion ? 0 : index * 0.08,
                }}
                className={`relative flex h-full flex-col rounded-3xl border p-6 sm:p-7 ${
                  pkg.recommended
                    ? "border-[#FF9F1C]/50 bg-gradient-to-b from-[#FF9F1C]/[0.09] to-[#111114] shadow-xl shadow-orange-950/10"
                    : "border-white/[0.09] bg-[#111114]"
                }`}
              >
                {pkg.recommended && (
                  <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#FF9F1C]/25 bg-[#FF9F1C]/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#FFB84D]">
                    <TrendingUp size={12} />
                    Recomendado
                  </span>
                )}

                <p className="text-[10px] uppercase tracking-[0.2em] text-[#71717A]">
                  {pkg.number} · {pkg.category}
                </p>

                <h3 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-white">
                  {pkg.name}
                </h3>

                <p className="mt-4 min-h-[4.5rem] text-sm leading-6 text-[#A1A1AA]">
                  {pkg.description}
                </p>

                <div className="mt-6 border-b border-white/[0.08] pb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-medium tracking-[-0.05em] text-white">
                      {pkg.price}
                    </span>
                    <span className="text-sm text-[#A1A1AA]">MT</span>
                  </div>
                  <p className="mt-1 text-xs text-[#71717A]">por mês</p>
                </div>

                <div className="mt-6">
                  <p className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-[#A1A1AA]">
                    Serviços incluídos
                  </p>

                  <div className="space-y-3">
                    {pkg.features
                      .slice(
                        0,
                        expandedMarketingPackage === index
                          ? pkg.features.length
                          : 5,
                      )
                      .map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#FF9F1C]/10">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#FF9F1C]" />
                          </span>
                          <p className="text-sm leading-6 text-[#D4D4D8]">
                            {feature}
                          </p>
                        </div>
                      ))}
                  </div>

                  <button
                    type="button"
                    aria-expanded={expandedMarketingPackage === index}
                    onClick={() =>
                      setExpandedMarketingPackage(
                        expandedMarketingPackage === index ? null : index,
                      )
                    }
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#FFB84D] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF9F1C]"
                  >
                    {expandedMarketingPackage === index
                      ? "Mostrar menos benefícios"
                      : "Ver todos os benefícios"}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        expandedMarketingPackage === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                <div className="mt-6 rounded-2xl border border-white/[0.07] bg-black/20 p-4">
                  <div className="flex items-start gap-3">
                    <BarChart3
                      size={16}
                      className="mt-0.5 shrink-0 text-[#FF9F1C]"
                    />
                    <div>
                      <p className="text-xs font-medium text-white/80">
                        Tempo estimado
                      </p>
                      <p className="mt-1 text-xs leading-5 text-[#A1A1AA]">
                        {pkg.hours}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-start gap-3">
                    <Target
                      size={16}
                      className="mt-0.5 shrink-0 text-[#FF9F1C]"
                    />
                    <div>
                      <p className="text-xs font-medium text-white/80">
                        Ideal para
                      </p>
                      <p className="mt-1 text-xs leading-5 text-[#A1A1AA]">
                        {pkg.ideal}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-7">
                  <Link
                    href={`/contactos?servico=marketing-digital&pacote=${encodeURIComponent(pkg.name)}`}
                    className={`group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF9F1C] ${
                      pkg.recommended
                        ? "bg-[#FF9F1C] text-[#09090B] hover:bg-[#FFB84D]"
                        : "border border-white/15 text-white hover:border-[#FF9F1C]/50 hover:text-[#FFB84D]"
                    }`}
                  >
                    Escolher {pkg.name}
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Serviços avulsos */}
          <div className="mt-20">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#FF9F1C]">
                Trabalhos pontuais
              </p>
              <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-white sm:text-3xl">
                Serviços avulsos
              </h3>
              <p className="mt-3 leading-7 text-[#A1A1AA]">
                Para quem precisa de uma intervenção específica, sem assumir
                uma mensalidade de gestão de campanhas.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {marketingAdOneOffServices.map((item) => (
                <div
                  key={item.name}
                  className="flex items-start justify-between gap-4 rounded-2xl border border-white/[0.08] bg-[#111114] p-5"
                >
                  <p className="text-sm leading-6 text-[#D4D4D8]">
                    {item.name}
                  </p>
                  <p className="shrink-0 text-right text-sm font-medium text-[#FFB84D]">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-[#71717A]">
              Valores de referência comercial. Implementações técnicas,
              integrações e configurações complexas são orçamentadas
              separadamente, após avaliação.
            </p>
          </div>

          {/* Condições comerciais */}
          <div className="mt-12 rounded-3xl border border-white/[0.08] bg-[#111114] p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <Wallet
                size={20}
                className="mt-0.5 shrink-0 text-[#FF9F1C]"
              />
              <div>
                <h3 className="text-lg font-medium text-white">
                  O que está incluído e o que é cobrado à parte?
                </h3>
                <div className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {[
                    "O orçamento publicitário não está incluído. O cliente paga directamente à Meta ou à plataforma utilizada.",
                    "Os pacotes incluem apenas as variações de criativos indicadas. Fotografia, filmagens e vídeos complexos são cobrados à parte.",
                    "Gestão de redes sociais, publicação orgânica e resposta a mensagens não estão incluídas.",
                    "Desenvolvimento, alojamento e manutenção de websites ou landing pages são serviços separados.",
                    "Não garantimos um número específico de vendas, leads ou retorno financeiro.",
                    "A mensalidade é paga antecipadamente. O cliente deve disponibilizar os acessos e materiais necessários antes do início.",
                    "Os relatórios dependem dos dados disponíveis nas plataformas e das ferramentas efectivamente configuradas.",
                    "Os prazos e o âmbito podem depender da aprovação das contas, dos materiais e da rapidez das respostas do cliente.",
                  ].map((condition) => (
                    <div key={condition} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF9F1C]" />
                      <p className="text-sm leading-6 text-[#A1A1AA]">
                        {condition}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Estimativa de rentabilidade */}
          <div className="mt-12">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#FF9F1C]">
                Planeamento interno
              </p>
              <h3 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-white sm:text-3xl">
                Estimativa de horas por pacote
              </h3>
              <p className="mt-3 leading-7 text-[#A1A1AA]">
                Usa estas estimativas para avaliar a capacidade de trabalho
                mensal. O valor por hora é bruto e não representa lucro líquido.
              </p>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {[
                {
                  name: "IGNITE",
                  price: "3.500 MT",
                  hours: "5–7 h",
                  hourly: "500–700 MT/h",
                },
                {
                  name: "VELOCITY",
                  price: "6.500 MT",
                  hours: "9–13 h",
                  hourly: "500–722 MT/h",
                },
                {
                  name: "APEX",
                  price: "11.000 MT",
                  hours: "16–22 h",
                  hourly: "500–688 MT/h",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-white/[0.08] bg-[#111114] p-5"
                >
                  <p className="text-xs uppercase tracking-[0.15em] text-[#71717A]">
                    {item.name}
                  </p>
                  <p className="mt-3 text-xl font-medium text-white">
                    {item.price}
                  </p>
                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/[0.07] pt-4">
                    <span className="text-sm text-[#A1A1AA]">
                      {item.hours}
                    </span>
                    <span className="text-xs font-medium text-[#FFB84D]">
                      {item.hourly}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-[#71717A]">
              Estimativas baseadas no fornecimento atempado dos materiais e no
              acesso a contas funcionais. Não incluem desenvolvimento web,
              filmagens ou produção extensa de conteúdos.
            </p>
          </div>
        </div>
      </section>


      <section className="border-y border-white/[0.06] bg-[#0D0D10] px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduceMotion ? 0 : 0.6 }}>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#FF9F1C]">
                  Canais e formatos
                </p>
                <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                  A estratégia define o canal.
                </h2>
                <p className="mt-5 leading-7 text-[#A1A1AA]">
                  A escolha depende do público, da oferta, do objectivo e do
                  orçamento disponível. Nem todas as campanhas precisam de
                  estar em todas as plataformas.
                </p>
              </div>

              <div className="space-y-3">
                {channels.map((channel) => (
                  <div
                    key={channel.number}
                    className="flex items-center gap-4 rounded-2xl border border-white/[0.08] p-5 transition-colors hover:border-[#FF9F1C]/30 sm:gap-6 sm:p-6"
                  >
                    <span className="text-xs text-[#FF9F1C]">
                      {channel.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-medium">{channel.name}</h3>
                      <p className="mt-1 text-sm text-[#71717A]">
                        {channel.description}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-[#71717A]"
                    />
                  </div>
                ))}
                <p className="pt-2 text-xs leading-5 text-[#71717A]">
                  Os canais finais são seleccionados após análise do projecto.
                  A disponibilidade de cada plataforma depende da estratégia
                  aprovada.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduceMotion ? 0 : 0.6 }}>
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.22em] text-[#FF9F1C]">
                Como trabalhamos
              </p>
              <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
                Da intenção à optimização.
              </h2>
              <p className="mt-5 leading-7 text-[#A1A1AA]">
                Um processo organizado para tomar decisões mais claras em cada
                fase da campanha.
              </p>
            </div>
          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:gap-x-16">
            {service.process.map((step, index) => (
              <motion.div key={step.title} initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduceMotion ? 0 : 0.6, delay: index * 0.08 }}>
                <div className="flex gap-5 border-t border-white/[0.10] py-7">
                  <span className="text-sm text-[#FF9F1C]">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-medium">{step.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-[#A1A1AA]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0D0D10] px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduceMotion ? 0 : 0.6 }}>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#FF9F1C]">
                Perguntas frequentes
              </p>
              <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                Antes de lançar.
              </h2>
              <p className="mt-5 leading-7 text-[#A1A1AA]">
                Informação clara para definires o âmbito da campanha e os
                próximos passos.
              </p>
            </div>
          </motion.div>

          <div className="space-y-2">
            {service.faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={faq.question}
                  className="border-b border-white/[0.09]"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF9F1C]"
                  >
                    <span className="text-sm font-medium sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-[#FF9F1C] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: reduceMotion ? 0 : 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-2xl pb-5 pr-8 text-sm leading-6 text-[#A1A1AA]">
                      {faq.answer}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduceMotion ? 0 : 0.6 }}>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[#FF9F1C]/20 bg-[#111114] px-6 py-14 sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[#FF5E3A]/15 blur-[90px]" />
            <div className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-[#FF9F1C]/10 blur-[90px]" />

            <div className="relative max-w-3xl">
              <p className="text-xs uppercase tracking-[0.22em] text-[#FF9F1C]">
                Vamos falar de resultados
              </p>
              <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.045em] sm:text-5xl">
                A próxima campanha começa com uma boa conversa.
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-[#A1A1AA]">
                Conta-nos o que pretendes alcançar. Vamos avaliar os objectivos
                e definir uma abordagem adequada ao teu negócio.
              </p>
              <Link
                href="/contactos"
                className="group mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#FF9F1C] px-6 py-3 text-sm font-semibold text-[#09090B] transition-colors hover:bg-[#FFB84D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF9F1C]"
              >
                Iniciar um projecto
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}





