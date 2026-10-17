import PolicyLayout from "../components/PolicyLayout";

export const metadata: import("next").Metadata = {
  title: "Termos e Condicoes",
  description: "Consulta os termos de utilizacao do website e as condicoes gerais dos servicos da Fictious Designs.",
  alternates: {
    canonical: "/termos-e-condicoes",
  },
};
const sections = [
  {
    title: "1. Âmbito",
    paragraphs: [
      "Estes Termos e Condições estabelecem orientações gerais para a utilização do website da Fictious Designs® e para a contratação dos serviços apresentados.",
      "As condições específicas de cada projeto, incluindo o âmbito, o preço, os prazos e as entregas, serão definidas na proposta comercial ou no acordo celebrado com o cliente.",
    ],
  },
  {
    title: "2. Serviços",
    paragraphs: [
      "A Fictious Designs® disponibiliza serviços de design, desenvolvimento web e outras soluções digitais divulgadas nos seus canais oficiais.",
      "A disponibilidade, as características e o âmbito de cada serviço dependem da proposta apresentada e dos requisitos acordados para o projeto.",
    ],
  },
  {
    title: "3. Orçamentos e pagamentos",
    paragraphs: [
      "Os preços, os métodos de pagamento, os prazos e as condições de cobrança dependem do serviço contratado e do acordo estabelecido com o cliente.",
      "Qualquer sinal, pagamento por fases ou pagamento integral deverá ser definido antes do início dos trabalhos, quando aplicável.",
    ],
  },
  {
    title: "4. Responsabilidades do cliente",
    paragraphs: [
      "O cliente deverá fornecer informações, conteúdos, materiais e orientações necessários à execução do projeto, bem como confirmar que possui autorização para utilizar os materiais que disponibiliza.",
      "Atrasos na entrega de materiais, na prestação de esclarecimentos ou na aprovação de etapas poderão afetar o calendário acordado.",
    ],
  },
  {
    title: "5. Alterações e aprovação",
    paragraphs: [
      "O âmbito do serviço e as entregas previstas serão definidos no acordo do projeto. Pedidos que ultrapassem esse âmbito poderão exigir uma revisão do preço e do prazo, mediante entendimento entre as partes.",
      "As condições para revisões, alterações e aprovação final deverão ser esclarecidas na proposta ou no acordo aplicável.",
    ],
  },
  {
    title: "6. Propriedade intelectual",
    paragraphs: [
      "A utilização, a entrega e a titularidade dos materiais produzidos no âmbito de um projeto deverão respeitar o acordo celebrado entre a Fictious Designs® e o cliente, bem como os direitos de terceiros sobre ferramentas, fontes, imagens, software ou outros recursos utilizados.",
      "O cliente é responsável por assegurar que tem autorização para fornecer materiais de terceiros destinados ao projeto.",
    ],
  },
  {
    title: "7. Funcionamento e serviços de terceiros",
    paragraphs: [
      "Websites e produtos digitais podem depender de serviços externos, alojamento, domínios, plataformas ou ferramentas de terceiros. A disponibilidade e as condições desses serviços poderão estar sujeitas às respetivas entidades.",
      "Quaisquer responsabilidades relacionadas com manutenção, suporte, alojamento ou serviços externos deverão ser definidas no acordo específico, quando aplicável.",
    ],
  },
  {
    title: "8. Contacto e atualizações",
    paragraphs: [
      "Para esclarecer dúvidas sobre estes termos ou sobre um serviço, o interessado poderá utilizar os canais de contacto disponibilizados no website.",
      "Estes termos poderão ser atualizados para refletir alterações nos serviços ou nas condições aplicáveis. A utilização do website não substitui a necessidade de formalizar as condições específicas de cada projeto.",
    ],
  },
];

export default function TermosECondicoesPage() {
  return (
    <PolicyLayout
      title="Termos e Condições"
      description="Condições gerais de utilização do website e de contratação dos serviços da Fictious Designs®."
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
