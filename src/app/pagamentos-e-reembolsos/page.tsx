import PolicyLayout from "../components/PolicyLayout";

export const metadata: import("next").Metadata = {
  title: "Pagamentos e Reembolsos",
  description: "Consulta as condicoes de pagamento, cancelamento e reembolso dos servicos da Fictious Designs.",
  alternates: {
    canonical: "/pagamentos-e-reembolsos",
  },
};
const sections = [
  {
    title: "1. Condições de pagamento",
    paragraphs: [
      "O preço, o método de pagamento, os prazos e o calendário de cobrança são definidos de acordo com o serviço contratado e o acordo estabelecido entre a Fictious Designs® e o cliente.",
      "Quando aplicável, o acordo poderá prever um pagamento inicial, pagamentos por fases ou pagamento integral. As condições acordadas deverão ser esclarecidas antes do início dos trabalhos.",
    ],
  },
  {
    title: "2. Confirmação da contratação",
    paragraphs: [
      "Antes de iniciar um projeto, recomenda-se que as partes confirmem o serviço contratado, o preço, as entregas previstas, os prazos e as condições de pagamento por escrito.",
      "O início dos trabalhos e a confirmação de pagamentos seguirão o procedimento acordado para cada projeto.",
    ],
  },
  {
    title: "3. Cancelamento de projetos",
    paragraphs: [
      "Caso o cliente pretenda cancelar um projeto, deverá comunicar essa intenção à Fictious Designs® para que as partes possam analisar o trabalho realizado, os compromissos assumidos e as condições previstas no acordo.",
      "As consequências financeiras do cancelamento dependem das condições acordadas e da legislação aplicável. Não se estabelece nesta página uma penalização automática ou uma taxa de cancelamento universal.",
    ],
  },
  {
    title: "4. Pedidos de reembolso",
    paragraphs: [
      "Os pedidos de reembolso serão analisados individualmente, tendo em consideração o acordo celebrado, os pagamentos efetuados, o trabalho já realizado e as obrigações legais aplicáveis.",
      "A existência e o valor de um eventual reembolso não são definidos por uma percentagem universal nesta política. A decisão deverá respeitar as condições aplicáveis ao caso concreto e os direitos legalmente reconhecidos ao cliente.",
    ],
  },
  {
    title: "5. Alterações ao âmbito do projeto",
    paragraphs: [
      "Pedidos de alterações, funcionalidades ou entregas adicionais que não estejam incluídos no acordo inicial poderão implicar custos ou prazos adicionais.",
      "Quaisquer ajustes ao preço ou ao calendário deverão ser comunicados e acordados entre as partes antes da execução do trabalho adicional.",
    ],
  },
  {
    title: "6. Dúvidas e contacto",
    paragraphs: [
      "Para esclarecer questões sobre pagamentos, cancelamentos ou pedidos de reembolso, o cliente deverá contactar a Fictious Designs® através dos canais disponibilizados no website, indicando os dados necessários para identificar o projeto e o pedido.",
    ],
  },
];

export default function PagamentosEReembolsosPage() {
  return (
    <PolicyLayout
      title="Pagamentos e Reembolsos"
      description="Informações sobre cobrança, cancelamentos e análise de pedidos de reembolso nos serviços da Fictious Designs®."
    >
      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.title} className="space-y-3">
            <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
              {section.title}
            </h2>

            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-zinc-400">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </PolicyLayout>
  );
}
