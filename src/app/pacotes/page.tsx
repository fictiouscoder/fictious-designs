import type { Metadata } from "next";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Palette,
  Rocket,
  Crown,
  MessageCircle,
} from "lucide-react";

const whatsappNumber = "258861846870";

const packages = [
  {
    price: "6.000 MT",
    id: "essence",
    number: "01",
    name: "Essence",
    subtitle: "Start Your Digital Presence",
    description:
      "O ponto de partida para negócios que precisam de uma presença visual consistente e profissional.",
    audience:
      "Ideal para pequenas empresas e marcas que estão a construir a sua presença digital.",
    icon: Palette,
    featured: false,
    services: [
      "8 publicações mensais com design profissional alinhado com a marca;",
      "Identidade visual básica: cores, tipografia e estilo visual;",
      "Optimização básica do perfil: biografia, links e destaques;",
      "Estratégia simples de conteúdos;",
      "Feedback directo e 1 ronda de revisões;",
    ],
  },
  {
    price: "15.000 MT",
    id: "momentum",
    number: "02",
    name: "Momentum",
    subtitle: "Accelerate Your Engagement",
    description:
      "Uma solução para marcas que procuram comunicar com regularidade e desenvolver a sua presença digital.",
    audience:
      "Ideal para negócios que pretendem reforçar o envolvimento do público e melhorar a consistência dos conteúdos.",
    icon: Rocket,
    featured: true,
    services: [
      "20 publicações mensais para até 2 plataformas: Instagram e Facebook;",
      "Estratégia personalizada de crescimento e envolvimento;",
      "SEO local avançado: Google Maps e palavras-chave locais;",
      "Legendas optimizadas e hashtags relevantes;",
      "Acompanhamento do desempenho e relatório mensal simples;",
      "2 rondas de revisões e ajustes de conteúdos;",
      "Consultoria de branding e posicionamento.",
    ],
  },
  {
  price: "Sob orçamento",
  id: "pinnacle",
  number: "03",
  name: "Pinnacle",
  subtitle: "Reach Your Digital Peak",
  description:
    "Para projetos personalizados e necessidades mais avançadas.",
  audience:
    "Ideal para marcas que necessitam de maior consistência, planeamento e acompanhamento estratégico.",
  icon: Crown,
  featured: false,
  services: [
    "30 ou mais publicações mensais para até 3 plataformas: Instagram, Facebook e TikTok;",
    "Gestão completa das redes sociais incluídas no serviço;",
    "Criação e manutenção da identidade visual para a marca e campanhas;",
    "Estratégia de SEO local e optimização mensal no Google Maps;",
    "Adição e optimização do negócio no Yango Maps;",
    "Planeamento de campanhas publicitárias - investimento em anúncios não incluído;",
    "Relatórios detalhados e reuniões mensais de acompanhamento;",
    "Consultoria estratégica e ajustes ilimitados no âmbito do serviço contratado.",
  ],
},
];

function createWhatsAppLink(packageName: string) {
  const messages: Record<string, string> = {
    Essence:
      "Olá, Fictious Designs! Tenho interesse no pacote Essence. Gostaria de saber mais sobre os serviços incluídos e como posso avançar.",

    Momentum:
      "Olá, Fictious Designs! Tenho interesse no pacote Momentum. Gostaria de conhecer melhor os serviços incluídos e os próximos passos para contratar.",

    Pinnacle:
      "Olá, Fictious Designs! Tenho interesse no pacote Pinnacle e gostaria de apresentar as necessidades do meu projeto para receber uma proposta personalizada.",
  };

  const message =
    messages[packageName] ??
    `Olá, Fictious Designs! Gostaria de saber mais sobre o pacote ${packageName}.`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}


export const metadata: Metadata = {
  alternates: {
    canonical: "/pacotes",
  },

  title: "Pacotes de Serviços Digitais",
  description: "Conhece os pacotes de serviços digitais da Fictious Designs e encontra soluções para reforçar a identidade visual e a presença online da tua marca.",
};
export default function PackagesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#09090B] text-white">
      {/* Navegação */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#09090B]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight transition hover:text-violet-300"
          >
            FICTIOUS<span className="text-violet-500">.</span>
          </Link>

          <Link
            href="/#pacotes"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Voltar ao início
          </Link>
        </div>
      </nav>

      {/* Introdução */}
      <section className="relative isolate overflow-hidden px-5 pb-16 pt-20 sm:pb-20 sm:pt-28 md:px-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-700/15 blur-[120px]"
        />

        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-violet-400/20 bg-violet-500/[0.06] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-violet-300 sm:text-xs">
              Soluções para a tua marca
            </span>
          </div>

          <h1 className="mt-8 text-4xl font-semibold leading-[1.1] tracking-[-0.045em] sm:text-5xl md:text-7xl">
            Encontra o pacote certo para{" "}
            <span className="text-violet-400">a tua marca.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            Três níveis de acompanhamento, pensados para diferentes
            necessidades. Explora os serviços incluídos e solicita uma proposta
            ajustada aos objectivos do teu negócio.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
  <span
    className="cursor-default rounded-full border border-white/15 px-5 py-3 text-sm text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-violet-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.10)]"
  >
    Essence
  </span>

  <span
    className="cursor-default rounded-full border border-violet-400/40 bg-violet-500/10 px-5 py-3 text-sm text-violet-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/70 hover:bg-violet-500/20 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
  >
    Momentum
  </span>

  <span
    className="cursor-default rounded-full border border-white/15 px-5 py-3 text-sm text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-violet-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.10)]"
  >
    Pinnacle
  </span>
</div>
        </div>
      </section>

      {/* Cartões dos pacotes */}
      <section className="px-5 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto grid max-w-7xl items-stretch gap-6 lg:grid-cols-3">
          {packages.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                id={item.id}
                className={`relative flex scroll-mt-28 flex-col overflow-hidden rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 sm:p-8 ${
                  item.featured
                    ? "border-violet-400/40 bg-[#15111D] shadow-[0_0_50px_rgba(139,92,246,0.08)]"
                    : "border-white/[0.09] bg-[#111114] hover:border-violet-400/30"
                }`}
              >
                                {item.featured && (
                  <div className="mb-5">
                    <span className="inline-flex rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.16em] text-violet-300 sm:text-[10px]">
                      Mais abrangente
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-medium tracking-[0.2em] text-violet-400">
                    {item.number} / PACOTE
                  </span>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/[0.08] text-violet-300">
                    <Icon size={21} strokeWidth={1.5} />
                  </div>
                </div>

                <h2 className="mt-7 text-3xl font-semibold tracking-tight sm:text-4xl">
                  {item.name}
                </h2>

                <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-violet-300">
                  {item.subtitle}
                </p>

                <p className="mt-5 text-sm leading-7 text-zinc-400">
                  {item.description}
                </p>

                <div className="mt-6 rounded-xl border border-white/[0.07] bg-black/20 p-4">
                  <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500">
                    Para quem é
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">
                    {item.audience}
                  </p>
                </div>

                <div className="mt-7 border-t border-white/[0.08] pt-6">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
                    O que está incluído
                  </p>

                  <ul className="mt-5 space-y-4">
                    {item.services.map((service) => (
                      <li
                        key={service}
                        className="flex items-start gap-3 text-sm leading-6 text-zinc-300"
                      >
                        <Check
                          size={17}
                          strokeWidth={1.8}
                          className="mt-0.5 shrink-0 text-violet-400"
                        />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-8">
  <div className="border-t border-white/[0.08] pt-6">
    <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">
      Investimento
    </p>

    <p className="mt-2 text-2xl font-semibold text-white">
      {item.price}
    </p>

    <p className="mt-2 text-xs leading-5 text-zinc-500">
      {item.id === "pinnacle"
        ? "Para projetos personalizados e necessidades mais avançadas."
        : "Preço do pacote conforme os serviços incluídos."}
    </p>

    <a
      href={createWhatsAppLink(item.name)}
      target="_blank"
      rel="noopener noreferrer"
      className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium transition duration-300 hover:-translate-y-0.5 ${
        item.featured
          ? "bg-violet-600 text-white hover:bg-violet-500"
          : "border border-white/15 text-white hover:border-violet-400/50 hover:bg-violet-500/10"
      }`}
    >
      <MessageCircle size={17} />
      {item.id === "pinnacle" ? "Solicitar orçamento" : "Escolher pacote"}
      <ArrowUpRight size={16} />
    </a>
  </div>
</div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Nota final */}
      <section className="px-5 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-2xl border border-white/[0.08] bg-[#111114] p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">
              Precisas de uma solução à medida?
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-400">
              Podemos analisar os teus objectivos e preparar uma proposta
              personalizada. O investimento em publicidade paga não está
              incluído no planeamento de campanhas.
            </p>
          </div>

          <a
            href={createWhatsAppLink("personalizado")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-violet-600 px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-violet-500"
          >
            Entrar em Contacto
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="border-t border-white/10 px-5 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="w-fit font-semibold tracking-tight text-white">
            FICTIOUS<span className="text-violet-500">.</span>
          </Link>
          <p>
            © {new Date().getFullYear()} Fictious Designs. Design com intenção.
          </p>
          <Link href="/#contacto" className="w-fit transition hover:text-white">
            Contacto <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </footer>
    </main>
  );
}
