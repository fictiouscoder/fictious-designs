import type { ReactNode } from "react";
import Link from "next/link";
import Footer from "./Footer";

type PolicyLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function PolicyLayout({
  title,
  description,
  children,
}: PolicyLayoutProps) {
  return (
    <>
      <main className="flex-1 px-5 py-16 sm:px-8 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-violet-300"
          >
            <span aria-hidden="true">←</span>
            Voltar à página inicial
          </Link>

          <header className="mt-10 border-b border-white/[0.08] pb-8 sm:mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
              Fictious Designs® / Informação legal
            </p>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              {description}
            </p>
          </header>

          <article className="py-10 text-sm leading-7 text-zinc-300 sm:py-12 sm:text-base">
            {children}
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
