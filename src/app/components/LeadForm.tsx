"use client";

import { useRef, useState, type FormEvent } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { ArrowUpRight, MessageCircle } from "lucide-react";

const serviceOptions: Record<string, string[]> = {
  pontual: [
    "Logótipo",
    "Post para redes sociais",
    "Cartaz ou panfleto",
    "Flyer para evento",
    "Cartão de visita",
    "Outro design gráfico",
  ],
  completo: [
    "Design gráfico e branding",
    "Gestão de redes sociais",
    "Desenvolvimento web",
    "Marketing digital",
    "Estratégia de conteúdo",
    "SEO Local",
    "Pacote completo",
  ],
  orientacao: [
    "Preciso de orientação",
    "Logótipo ou design gráfico",
    "Redes sociais",
    "Website",
    "Outro serviço",
  ],
};

const logoPrices: Record<string, string> = {
  Normal: "300 MT",
  "2D": "600 MT",
  "3D": "800 MT",
};

const servicePrices: Record<string, Record<string, string>> = {
  pontual: {
    "Post para redes sociais": "400 MT",
    "Cartaz ou panfleto": "600 MT",
    "Flyer para evento": "600 MT",
    "Cartão de visita": "400 MT",
    "Outro design gráfico": "A partir de 300 MT",
  },
  completo: {
    "Design gráfico e branding": "3.000 MT",
    "Gestão de redes sociais": "5.000 MT/mês",
    "Desenvolvimento web": "A partir de 10.000 MT",
    "Marketing digital": "A partir de 4.000 MT/mês",
    "Estratégia de conteúdo": "A partir de 2.000 MT",
    "SEO Local": "A partir de 2.000 MT",
    "Pacote completo": "Sob consulta",
  },
};

export default function LeadForm() {
  const [tipo, setTipo] = useState("pontual");
  const [servico, setServico] = useState("Logótipo");
  const [variacaoLogotipo, setVariacaoLogotipo] = useState("Normal");
  const [descricao, setDescricao] = useState("");
  const [continuacao, setContinuacao] = useState(false);
  const formStartTracked = useRef(false);

function handleFormInteraction() {
  if (formStartTracked.current) return;

  formStartTracked.current = true;

 sendGAEvent("event", "quote_form_start");
}

  const isLogotipo = tipo === "pontual" && servico === "Logótipo";

  const preco =
    tipo === "orientacao"
      ? ""
      : isLogotipo
        ? logoPrices[variacaoLogotipo]
        : servicePrices[tipo]?.[servico] ?? "";

  function handleTypeChange(value: string) {
    setTipo(value);
    setServico(serviceOptions[value][0]);
    setVariacaoLogotipo("Normal");
    setContinuacao(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendGAEvent("event", "quote_request_initiated");

    const tipoLabel =
      tipo === "pontual"
        ? "Trabalho pontual"
        : tipo === "completo"
          ? "Serviço ou pacote completo"
          : "Preciso de orientação";

    const mensagem = [
      "Olá, Fictious Media! Gostaria de solicitar um orçamento.",
      "",
      `Tipo de pedido: ${tipoLabel}`,
      `Serviço: ${servico}`,
      ...(isLogotipo
        ? [`Variante do logótipo: ${variacaoLogotipo}`]
        : []),
      ...(tipo !== "orientacao" && preco
        ? [`Preço indicado: ${preco}`]
        : []),
      `Descrição: ${descricao.trim() || "Não indicada"}`,
      "",
      "Gostaria de conhecer os próximos passos. Obrigado!",
    ].join("\n");

    const whatsappUrl = `https://wa.me/258861846870?text=${encodeURIComponent(mensagem)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setContinuacao(true);
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-[#09090B] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-400";

  return (
    <div className="rounded-2xl border border-white/10 bg-[#111114] p-5 sm:p-7 md:p-8">
      <div className="mb-7">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-violet-400">
          Vamos conversar
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Conta-nos a tua ideia.
        </h3>
        <p className="mt-3 text-sm leading-6 text-zinc-400">
          Precisas de um único design ou de uma solução completa? Conta-nos o
          que procuras e vamos preparar o próximo passo.
        </p>
      </div>

      <form
  onSubmit={handleSubmit}
  onFocusCapture={handleFormInteraction}
  className="space-y-5"
>
        <div className="space-y-2">
          <label
            htmlFor="lead-tipo"
            className="block text-sm font-medium text-zinc-200"
          >
            Que tipo de trabalho procuras?
          </label>
          <select
            id="lead-tipo"
            value={tipo}
            onChange={(event) => handleTypeChange(event.target.value)}
            className={inputClass}
          >
            <option value="pontual">Um design específico</option>
            <option value="completo">Um serviço ou pacote completo</option>
            <option value="orientacao">Ainda preciso de orientação</option>
          </select>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="lead-servico"
            className="block text-sm font-medium text-zinc-200"
          >
            Qual é o serviço?
          </label>
          <select
            id="lead-servico"
            value={servico}
            onChange={(event) => {
              setServico(event.target.value);
              setVariacaoLogotipo("Normal");
              setContinuacao(false);
            }}
            className={inputClass}
          >
            {serviceOptions[tipo].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {isLogotipo && (
          <div className="space-y-2">
            <label
              htmlFor="lead-logotipo"
              className="block text-sm font-medium text-zinc-200"
            >
              Escolhe a variante do logótipo
            </label>
            <select
              id="lead-logotipo"
              value={variacaoLogotipo}
              onChange={(event) => {
                setVariacaoLogotipo(event.target.value);
                setContinuacao(false);
              }}
              className={inputClass}
            >
              <option value="Normal">Normal - 300 MT</option>
              <option value="2D">2D - 600 MT</option>
              <option value="3D">3D - 800 MT</option>
            </select>
          </div>
        )}

        {tipo !== "orientacao" && preco && (
          <div className="space-y-2">
            <p className="block text-sm font-medium text-zinc-200">
              Preço do serviço
            </p>
            <div
              aria-live="polite"
              className="rounded-xl border border-violet-400/20 bg-violet-500/[0.06] px-4 py-3"
            >
              <p className="text-lg font-semibold text-violet-300">{preco}</p>
              <p className="mt-1 text-xs leading-5 text-zinc-400">
                {preco === "Sob consulta"
                  ? "O valor será definido conforme as tuas necessidades."
                  : preco.startsWith("A partir de")
                    ? "Preço inicial. O valor final depende do trabalho solicitado."
                    : "Preço indicado para o serviço seleccionado."}
              </p>
            </div>
          </div>
        )}

        <div className="space-y-2">
          <label
            htmlFor="lead-descricao"
            className="block text-sm font-medium text-zinc-200"
          >
            Descreve brevemente o teu projecto
            <span className="ml-2 font-normal text-zinc-500">
              (opcional)
            </span>
          </label>
          <textarea
            id="lead-descricao"
            value={descricao}
            onChange={(event) => {
              setDescricao(event.target.value);
              setContinuacao(false);
            }}
            placeholder="O que precisas de criar? Para que marca ou finalidade?"
            rows={4}
            className={`${inputClass} resize-y`}
          />
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-violet-600 px-6 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-violet-500"
        >
          <MessageCircle size={19} />
          Continuar pelo WhatsApp
          <ArrowUpRight size={17} />
        </button>

        {continuacao && (
          <p
            role="status"
            className="rounded-xl border border-violet-400/20 bg-violet-500/[0.06] p-4 text-sm leading-6 text-violet-200"
          >
            O WhatsApp deverá abrir com a tua mensagem preparada. Revê os
            detalhes e carrega em Enviar no WhatsApp para concluir o pedido.
            Se não abriu, verifica se o navegador bloqueou a nova janela.
          </p>
        )}

        <p className="text-xs leading-5 text-zinc-500">
          O pedido só será enviado quando confirmares e enviares a mensagem
          pelo WhatsApp. O preço final poderá variar conforme o trabalho
          solicitado.
        </p>
      </form>
    </div>
  );
}
