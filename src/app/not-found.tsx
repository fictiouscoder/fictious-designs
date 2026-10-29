import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-[#08080A] px-5 text-white">
      <div className="relative w-full max-w-2xl py-20 text-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/[0.12] blur-[120px]"
        />

        <div className="relative">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
            Fictious Media
          </p>

          <p className="mt-8 text-8xl font-semibold tracking-tighter text-violet-400 sm:text-9xl">
            404
          </p>

          <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
            Esta página não foi encontrada.
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
            O endereço pode estar incorrecto ou a página pode ter sido movida.
            Vamos ajudar-te a encontrar o caminho de volta.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-violet-500"
            >
              <ArrowLeft size={17} />
              Voltar à página inicial
            </Link>

            <Link
              href="/desenvolvimento-web"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm font-medium text-zinc-200 transition hover:border-violet-400/50 hover:text-white"
            >
              Explorar serviços
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
