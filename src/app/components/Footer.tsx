import Image from "next/image";
import Link from "next/link";

const exploreLinks = [
  { label: "Serviços", href: "/desenvolvimento-web" },
  { label: "Pacotes", href: "/pacotes" },
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
    <footer className="px-5 py-10 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1.4fr_auto] lg:items-start lg:gap-10">
          <div className="space-y-2">
            <Link
              href="/"
              className="inline-block text-xl font-bold tracking-tight text-white"
            >
              FICTIOUS<span className="text-violet-500">.</span>
            </Link>

            <p className="max-w-xs text-sm leading-6 text-zinc-500">
              Design com intenção. Presença com propósito.
            </p>
          </div>

          <nav aria-label="Explorar" className="space-y-4">
            <h2 className="text-sm font-semibold text-white">Explorar</h2>

            <div className="flex flex-col items-start gap-3">
              {exploreLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-zinc-500 transition-colors hover:text-violet-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <nav aria-label="Informações legais" className="space-y-4">
            <h2 className="text-sm font-semibold text-white">
              Informações legais
            </h2>

            <div className="flex flex-col items-start gap-3">
              {legalLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-zinc-500 transition-colors hover:text-violet-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-white">
              Redes sociais
            </h2>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/fictiousdesigns/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Fictious Designs"
                className="flex size-11 items-center justify-center rounded-xl bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08]"
              >
                <Image
                  src="/instagram%20icon.png"
                  alt=""
                  width={26}
                  height={26}
                  className="object-contain"
                />
              </a>

              <a
                href="https://wa.me/258861846870"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Fictious Designs"
                className="flex size-11 items-center justify-center rounded-xl bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08]"
              >
                <Image
                  src="/whatsapp%20icon.png"
                  alt=""
                  width={26}
                  height={26}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Fictious Designs®. Todos os direitos
            reservados.
          </p>

          <Link
            href="/"
            className="w-fit transition-colors hover:text-zinc-300"
          >
            Voltar à página inicial
          </Link>
        </div>
      </div>
    </footer>
  );
}