"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

export default function ContactForm() {
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [contacto, setContacto] = useState("");
  const [descricao, setDescricao] = useState("");
  const [emailHref, setEmailHref] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const mensagem = [
      "Olá, Fictious Designs! Gostaria de iniciar um projecto.",
      "",
      `Nome: ${nome.trim()}`,
      ...(empresa.trim() ? [`Empresa ou marca: ${empresa.trim()}`] : []),
      `Contacto para resposta: ${contacto.trim()}`,
      "",
      "Descrição do projecto:",
      descricao.trim(),
    ].join("\n");

    const encodedMessage = encodeURIComponent(mensagem);
    const whatsappUrl = `https://wa.me/258861846870?text=${encodedMessage}`;

    setEmailHref(
      `mailto:fictiousdesigns@gmail.com?subject=${encodeURIComponent(
        "Novo pedido de projecto - Fictious Designs",
      )}&body=${encodedMessage}`,
    );

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-[#09090B] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-400 focus:ring-1 focus:ring-violet-400/30";

  return (
    <div className="rounded-2xl border border-white/10 bg-[#111114] p-5 sm:p-7 md:p-8">
      <div className="mb-7">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-violet-400">
          Vamos conversar
        </p>

        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Conta-nos a tua ideia.
        </h2>

        <p className="mt-3 text-sm leading-6 text-zinc-400">
          Preenche os teus dados e conta-nos o que pretendes desenvolver.
          Entraremos em contacto para conversar sobre os próximos passos.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label
            htmlFor="contact-nome"
            className="block text-sm font-medium text-zinc-200"
          >
            Nome completo
          </label>
          <input
            id="contact-nome"
            name="nome"
            autoComplete="name"
            value={nome}
            onChange={(event) => {
              setNome(event.target.value);
              setEmailHref("");
            }}
            placeholder="Como te chamas?"
            className={inputClass}
            required
            maxLength={100}
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="contact-empresa"
            className="block text-sm font-medium text-zinc-200"
          >
            Empresa ou marca{" "}
            <span className="font-normal text-zinc-500">(opcional)</span>
          </label>
          <input
            id="contact-empresa"
            name="empresa"
            autoComplete="organization"
            value={empresa}
            onChange={(event) => {
              setEmpresa(event.target.value);
              setEmailHref("");
            }}
            placeholder="Nome da tua empresa ou marca"
            className={inputClass}
            maxLength={120}
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="contact-contacto"
            className="block text-sm font-medium text-zinc-200"
          >
            Contacto para resposta
          </label>
          <input
            id="contact-contacto"
            name="contacto"
            autoComplete="email"
            value={contacto}
            onChange={(event) => {
              setContacto(event.target.value);
              setEmailHref("");
            }}
            placeholder="Telefone ou endereço de email"
            className={inputClass}
            required
            maxLength={150}
          />
          <p className="text-xs leading-5 text-zinc-500">
            Indica o número ou email onde preferes receber a nossa resposta.
          </p>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="contact-descricao"
            className="block text-sm font-medium text-zinc-200"
          >
            Descrição do projecto
          </label>
          <textarea
            id="contact-descricao"
            name="descricao"
            value={descricao}
            onChange={(event) => {
              setDescricao(event.target.value);
              setEmailHref("");
            }}
            placeholder="O que pretendes criar? Quais são os teus objectivos?"
            rows={5}
            className={`${inputClass} resize-y`}
            required
            minLength={10}
            maxLength={2000}
          />
        </div>

        <button
          type="submit"
          className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-violet-600 px-6 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111114]"
        >
          <MessageCircle size={19} />
          Continuar pelo WhatsApp
          <ArrowUpRight size={17} />
        </button>

        {emailHref && (
          <div
            role="status"
            className="space-y-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
          >
            <p className="text-sm leading-6 text-zinc-300">
              A mensagem está preparada. Se o WhatsApp não abrir, podes
              continuar por email com os mesmos dados.
            </p>
            <a
              href={emailHref}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white transition hover:border-violet-400/50 hover:bg-violet-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              <Mail size={17} />
              Enviar por email
              <ArrowUpRight size={16} />
            </a>
          </div>
        )}

        <p className="text-xs leading-5 text-zinc-500">
          Os teus dados serão incluídos na mensagem que escolheres enviar.
          O pedido só será enviado quando confirmares o envio no WhatsApp ou
          no teu serviço de email.
        </p>
      </form>
    </div>
  );
}