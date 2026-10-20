"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navigationLinks = [
  { label: "Início", href: "/#inicio" },
  { label: "Serviços", href: "/servicos" },
  { label: "Pacotes", href: "/#pacotes" },
  { label: "Portfólio", href: "/#portfolio" },
  { label: "Processo", href: "/#processo" },
  { label: "Contacto", href: "/contactos" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#09090B]/80 backdrop-blur-2xl transition-colors duration-300">
      <div className="relative flex h-[76px] items-center justify-between gap-4 px-5 sm:px-6 md:px-12 lg:px-16">
        {/* Logótipo oficial */}
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Fictious Designs — página inicial"
          className="flex shrink-0 items-center"
        >
          <Image
            src="/FD%20LOGO%20%20Branco.png"
            alt="Fictious Designs"
            width={240}
            height={100}
            priority
            className="h-[56px] w-auto max-w-[100px] object-contain sm:h-[54px] sm:max-w-[150px] lg:h-[150px] lg:max-w-[290px]"
          />
        </Link>

        {/* Navegação desktop */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-6">
          {navigationLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA desktop */}
        <Link
          href="/contactos"
          className="hidden shrink-0 items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-500/10 xl:inline-flex"
        >
          Vamos conversar
          <ArrowUpRight size={16} />
        </Link>

        {/* Botão mobile */}
        <button
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((previous) => !previous)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 text-white transition-colors hover:border-violet-400/40 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Menu mobile */}
        {isOpen && (
          <div
            id="mobile-navigation"
            className="absolute left-0 right-0 top-full border-b border-white/10 bg-[#09090B] px-5 pb-6 pt-3 shadow-2xl sm:px-6 lg:hidden"
          >
            <div className="flex flex-col">
              {navigationLinks.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex min-h-12 items-center justify-between border-b border-white/[0.06] py-3 text-sm text-zinc-300 transition-colors hover:text-violet-300"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-zinc-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </Link>
              ))}

              <Link
                href="/contactos"
                onClick={closeMenu}
                className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-violet-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-500"
              >
                Iniciar um projeto
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}