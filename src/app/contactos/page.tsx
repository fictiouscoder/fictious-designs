import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import ScrollReveal from "@/app/components/ScrollReveal";
import ContactForm from "@/app/components/ContactForm";

export const metadata: Metadata = {
  title: "Contactos | Vamos falar sobre o teu projecto",
  description:
    "Fala com a Fictious Media sobre design gráfico, branding, redes sociais e desenvolvimento web. Solicita um orçamento pelo WhatsApp ou contacta-nos por email.",
  alternates: {
    canonical: "/contactos",
  },
};

export default function ContactosPage() {
  return (
    <main className="ambient-glow min-h-screen bg-[#09090B] text-white">
      <ScrollReveal />

      <div aria-hidden="true" className="ambient-glow-layer">
        <div className="ambient-glow-orb" />
      </div>

      <Navigation />

      <section className="relative isolate overflow-hidden px-5 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 md:px-12 lg:px-16 lg:pb-24 lg:pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-700/15 blur-[120px] sm:h-96 sm:w-96"
        />

        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl sm:mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-400 sm:text-sm">
              Contactos · Fictious Media
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
              A tua próxima ideia começa com{" "}
              <span className="text-violet-400">uma conversa.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              Conta-nos o que tens em mente. Vamos conhecer os teus objectivos
              e explorar uma solução adequada para a tua marca ou negócio.
            </p>

            <a
              href="#formulario-contacto"
              className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-white transition-colors hover:text-violet-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              Falar sobre o meu projecto
              <ArrowDown size={16} />
            </a>
          </div>

          <div
            id="formulario-contacto"
            className="grid scroll-mt-28 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-12"
          >
            <aside className="space-y-6 lg:sticky lg:top-28">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-violet-400">
                  Contacto directo
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Vamos encontrar a solução certa.
                </h2>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  Preferes falar directamente connosco? Escolhe o canal que
                  te for mais conveniente. O WhatsApp é a nossa opção
                  prioritária para pedidos de projecto.
                </p>
              </div>

              <a
                href="https://wa.me/258861846870?text=Ol%C3%A1%2C%20Fictious%20Designs%21%20Gostaria%20de%20falar%20sobre%20um%20projecto."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-16 items-center gap-4 rounded-2xl border border-violet-400/25 bg-violet-500/[0.07] p-4 transition-colors hover:border-violet-400/50 hover:bg-violet-500/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                  <MessageCircle size={21} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-white">
                    WhatsApp
                  </span>
                  <span className="mt-1 block text-sm text-zinc-400">
                    +258 86 184 6870
                  </span>
                </span>

                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-zinc-500 transition-colors group-hover:text-violet-300"
                />
              </a>

              <a
                href="mailto:fictiousdesigns@gmail.com?subject=Pedido%20de%20informa%C3%A7%C3%B5es%20-%20Fictious%20Designs"
                className="group flex min-h-16 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition-colors hover:border-white/20 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-zinc-300">
                  <Mail size={20} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-white">
                    Email
                  </span>
                  <span className="mt-1 block break-all text-sm text-zinc-400">
                    fictiousdesigns@gmail.com
                  </span>
                </span>

                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-zinc-500 transition-colors group-hover:text-white"
                />
              </a>

              <div className="rounded-2xl border border-white/[0.08] p-5">
                <p className="text-sm font-medium text-white">
                  Para começarmos
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Partilha a tua ideia, o que pretendes alcançar e qualquer
                  informação que nos ajude a compreender o projecto.
                </p>
              </div>

              <p className="text-sm text-zinc-500">
                Queres conhecer primeiro os nossos serviços?{" "}
                <Link
                  href="/servicos"
                  className="text-violet-300 underline decoration-violet-400/40 underline-offset-4 transition-colors hover:text-violet-200"
                >
                  Explora os serviços
                </Link>
                .
              </p>
            </aside>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}