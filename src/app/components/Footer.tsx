import Image from "next/image";
import Link from "next/link";

const exploreLinks = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Pacotes", href: "/pacotes" },
  { label: "Desenvolvimento Web", href: "/desenvolvimento-web" },
  { label: "Contacto", href: "/contactos" },
];

const legalLinks = [
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
  { label: "Termos e Condições", href: "/termos-e-condicoes" },
  { label: "Pagamentos e Reembolsos", href: "/pagamentos-e-reembolsos" },
  { label: "Prestação de Serviços", href: "/politica-de-servicos" },
];

export default function Footer() {
  return (
    <footer className="px-5 pb-6 pt-8 sm:px-8 sm:pt-10 lg:px-16">
      <div className="mx-auto max-w-7xl border-t border-white/[0.09] pt-10 sm:pt-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_0.8fr] lg:gap-12">
          {/* Identidade */}
          <div className="flex flex-col items-start">
            <Link
              href="/"
              className="inline-block text-2xl font-bold tracking-[-0.06em] text-white transition-opacity hover:opacity-80"
            >
              FICTIOUS<span className="text-violet-400">.</span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-7 text-zinc-400">
              Marcas com identidade. Negócios com presença.
            </p>

            <p className="mt-3 max-w-xs text-xs leading-6 text-zinc-600">
              Design, estratégia e soluções digitais pensadas para fazer
              marcas evoluir.
            </p>
          </div>

          {/* Navegação */}
          <nav aria-label="Explorar" className="space-y-5">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-300">
              Explorar
            </h2>

            <ul className="flex flex-col items-start gap-3.5">
              {exploreLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-500 transition-colors duration-200 hover:text-violet-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Informação legal */}
          <nav aria-label="Informações legais" className="space-y-5">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-300">
              Informação legal
            </h2>

            <ul className="flex flex-col items-start gap-3.5">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 text-zinc-500 transition-colors duration-200 hover:text-violet-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Redes sociais */}
          <div className="space-y-5">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-300">
              Vamos conversar?
            </h2>

            <p className="max-w-xs text-sm leading-6 text-zinc-500">
              Tens um projecto em mente? Estamos disponíveis para ouvir a tua
              ideia.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/fictiousdesigns/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Fictious Media"
                className="flex size-11 items-center justify-center rounded-xl border border-white/[0.09] bg-white/[0.025] transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-500/[0.08]"
              >
                <Image
                  src="/instagram%20icon.png"
                  alt=""
                  width={23}
                  height={23}
                  className="object-contain"
                />
              </a>

              <a
                href="https://wa.me/258861846870"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Fictious Media"
                className="flex size-11 items-center justify-center rounded-xl border border-white/[0.09] bg-white/[0.025] transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-500/[0.08]"
              >
                <Image
                  src="/whatsapp%20icon.png"
                  alt=""
                  width={23}
                  height={23}
                  className="object-contain"
                />
              </a>
            </div>

            <a
              href="https://wa.me/258861846870"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-violet-300 transition-colors hover:text-violet-200"
            >
              Falar connosco
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/[0.07] pt-6 text-xs text-zinc-600 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Fictious Media®. Todos os direitos
            reservados.
          </p>

          <Link
            href="/"
            className="w-fit transition-colors duration-200 hover:text-zinc-300"
          >
            Voltar à página inicial ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}