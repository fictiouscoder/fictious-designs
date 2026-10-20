import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Camera,
  Check,
  Globe,
  Megaphone,
  Monitor,
  Palette,
  Search,
  Share2,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Serviços de Design, Marketing e Desenvolvimento Web",
  description:
    "Descobre os serviços da Fictious Designs: branding, design gráfico, gestão de redes sociais, desenvolvimento web, marketing digital e SEO local.",
  alternates: {
    canonical: "/servicos",
  },
};

const services = [
  {
    id: "branding",
    number: "01",
    title: "Design Gráfico & Branding",
    label: "Identidade visual",
    description:
      "Construímos uma identidade visual consistente para ajudar a tua marca a comunicar com clareza, personalidade e profissionalismo.",
    icon: Palette,
    benefits: [
      "Identidade visual alinhada com a marca;",
      "Materiais gráficos para comunicação;",
      "Consistência visual nos diferentes canais.",
    ],
    outcome:
      "Uma marca visualmente coerente, reconhecível e preparada para comunicar o seu valor.",
    href: "/servicos/branding",
    message:
      "Olá, Fictious Designs! Tenho interesse nos serviços de Design Gráfico e Branding.",
  },
  {
    id: "redes-sociais",
    number: "02",
    title: "Gestão de Redes Sociais",
    label: "Presença digital",
    description:
      "Planeamos e criamos conteúdos para ajudar a tua marca a manter uma presença digital consistente e a comunicar com o público certo.",
    icon: Share2,
    benefits: [
      "Planeamento de conteúdos;",
      "Design de publicações e legendas;",
      "Acompanhamento da presença digital.",
    ],
    outcome:
      "Uma comunicação mais organizada, consistente e alinhada com os objectivos da tua marca.",
    action: "Ver pacotes",
    href: "/servicos/redes-sociais",
  },
  {
    id: "desenvolvimento-web",
    number: "03",
    title: "UI/UX Design & Desenvolvimento Web",
    label: "Experiências digitais",
    description:
      "Concebemos interfaces intuitivas e desenvolvemos websites modernos e responsivos, combinando experiência do utilizador, design e tecnologia.",
    icon: Monitor,
    benefits: [
      "Interfaces pensadas para o utilizador;",
      "Websites adaptados a diferentes ecrãs;",
      "Estruturas alinhadas com os objectivos do negócio.",
    ],
    outcome:
      "Uma presença digital profissional que apresenta a tua marca e facilita a experiência dos visitantes.",
    action: "Explorar desenvolvimento web",
    href: "/desenvolvimento-web",
  },
  {
    id: "marketing-digital",
    number: "04",
    title: "Marketing Digital & Ads",
    label: "Campanhas digitais",
    description:
      "Estruturamos acções de marketing e campanhas publicitárias para aumentar a visibilidade da tua marca e alcançar potenciais clientes.",
    icon: Megaphone,
    benefits: [
      "Planeamento de campanhas;",
      "Definição de públicos e objectivos;",
      "Orientação para resultados mensuráveis.",
    ],
    outcome:
      "Acções digitais com uma direcção estratégica, objectivos definidos e maior clareza na comunicação.",
    href: "/servicos/marketing-digital",
    message:
      "Olá, Fictious Designs! Gostaria de saber mais sobre Marketing Digital e Ads.",
  },
  {
    id: "estrategia-conteudo",
    number: "05",
    title: "Estratégia de Conteúdo",
    label: "Comunicação estratégica",
    description:
      "Transformamos ideias em conteúdos relevantes, com uma direcção criativa que reflecte a identidade da marca e responde aos interesses do público.",
    icon: Camera,
    benefits: [
      "Planeamento editorial;",
      "Direcção criativa para conteúdos;",
      "Coerência entre mensagem e identidade visual.",
    ],
    outcome:
      "Conteúdos com propósito, uma mensagem consistente e uma comunicação mais bem organizada.",
    href: "/servicos/estrategia-conteudo",
    message:
      "Olá, Fictious Designs! Tenho interesse nos serviços de Estratégia de Conteúdo.",
  },
  {
    id: "seo-local",
    number: "06",
    title: "SEO Local",
    label: "Visibilidade nas pesquisas",
    description:
      "Trabalhamos a presença local da tua empresa para facilitar a sua descoberta por pessoas que procuram os serviços que oferece.",
    icon: Search,
    benefits: [
      "Optimização da presença local;",
      "Melhoria das informações do negócio;",
      "Orientação para pesquisas relevantes na região.",
    ],
    outcome:
      "Uma presença local mais organizada e preparada para ser encontrada por potenciais clientes.",
    href: "/servicos/seo-local",
    message:
      "Olá, Fictious Designs! Gostaria de saber mais sobre SEO Local.",
  },
];

const whatsappNumber = "258861846870";

function getWhatsAppLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export default function ServicosPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08080A] text-white">
      <ScrollReveal />
      <Navigation />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-700/[0.12] blur-[150px]"
      />

      {/* Hero */}
      <section className="relative px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-16 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <div className="scroll-reveal max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-violet-500" />
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-300 sm:text-sm">
                O que fazemos
              </p>
            </div>

            <h1 className="mt-8 text-5xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-8xl">
              Soluções criativas para{" "}
              <span className="text-violet-400">marcas com ambição.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              Combinamos design, estratégia e tecnologia para construir uma
              presença digital coerente, profissional e preparada para crescer.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#lista-servicos"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-violet-600 px-7 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-violet-500"
              >
                Explorar serviços
                <ArrowDown
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>

              <a
                href={getWhatsAppLink(
                  "Olá, Fictious Designs! Gostaria de conversar sobre um projecto para a minha marca.",
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 px-7 py-4 text-sm font-medium text-zinc-300 transition duration-300 hover:border-violet-400/40 hover:text-white"
              >
                Iniciar um projecto
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-4 border-t border-white/[0.08] pt-7 sm:grid-cols-3 sm:gap-8 sm:pt-9">
            {[
              {
                icon: Target,
                title: "Estratégia",
                description: "Soluções orientadas para objectivos concretos.",
              },
              {
                icon: Palette,
                title: "Criatividade",
                description: "Identidades e conteúdos com intenção.",
              },
              {
                icon: Globe,
                title: "Presença digital",
                description: "Experiências coerentes em diferentes canais.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/[0.08]">
                  <item.icon size={20} className="text-violet-300" />
                </div>

                <div>
                  <h2 className="text-sm font-medium text-white">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-zinc-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de serviços */}
      <section
        id="lista-servicos"
        className="relative border-t border-white/[0.06] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="scroll-reveal max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-300 sm:text-sm">
              As nossas áreas de actuação
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
              O que a tua marca precisa, num só lugar.
            </h2>

            <p className="mt-5 text-base leading-7 text-zinc-400">
              Explora as nossas soluções e descobre como podemos ajudar a tua
              empresa a comunicar melhor, fortalecer a sua marca e crescer no
              digital.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              const actionHref =
                "href" in service && service.href
                  ? service.href
                  : "message" in service && service.message
                    ? getWhatsAppLink(service.message)
                    : getWhatsAppLink(
                        "Olá, Fictious Designs! Gostaria de saber mais sobre " +
                          service.title +
                          ".",
                      );

              const isExternal = actionHref.startsWith("https://");

              return (
                <article
                  key={service.id}
                  id={service.id}
                  className="scroll-reveal group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-[#111114] p-6 transition duration-300 hover:border-violet-500/30 hover:bg-[#15131b] sm:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/[0.08]">
                      <Icon size={22} className="text-violet-300" />
                    </div>

                    <span className="text-sm font-medium tabular-nums text-zinc-600">
                      {service.number}
                    </span>
                  </div>

                  <p className="mt-7 text-xs font-medium uppercase tracking-[0.2em] text-violet-300">
                    {service.label}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
                    {service.description}
                  </p>

                  <div className="mt-7">
                    <p className="text-sm font-medium text-white">
                      O que podemos fazer
                    </p>

                    <ul className="mt-4 space-y-3">
                      {service.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-3 text-sm leading-6 text-zinc-400"
                        >
                          <Check
                            size={17}
                            className="mt-1 shrink-0 text-violet-300"
                          />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 border-t border-white/[0.08] pt-5">
                    <p className="text-sm leading-6 text-zinc-500">
                      {service.outcome}
                    </p>

                    <div className="mt-6">
                      {isExternal ? (
                        <a
                          href={actionHref}
                          target="_blank"
                          rel="noreferrer"
                          className="group/link inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-violet-300"
                        >
                          {service.action}
                          <ArrowUpRight
                            size={17}
                            className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                          />
                        </a>
                      ) : (
                        <Link
                          href={actionHref}
                          className="group/link inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-violet-300"
                        >
                          {service.action}
                          <ArrowRight
                            size={17}
                            className="transition-transform group-hover/link:translate-x-1"
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="scroll-reveal relative overflow-hidden rounded-3xl border border-violet-400/20 bg-[#111014] px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-violet-600/[0.15] blur-[100px]"
            />

            <div className="relative max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-300 sm:text-sm">
                Vamos conversar
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
                O próximo passo da tua marca começa com uma conversa.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                Conta-nos a tua ideia, os teus objectivos e os desafios que
                queres resolver. Vamos explorar a solução mais adequada para
                o teu negócio.
              </p>

              <a
                href={getWhatsAppLink(
                  "Olá, Fictious Designs! Gostaria de conversar sobre um projecto para a minha marca.",
                )}
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-violet-600 px-7 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-violet-500"
              >
                Iniciar um projecto
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}