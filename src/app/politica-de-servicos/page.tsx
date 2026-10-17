import PolicyLayout from "../components/PolicyLayout";

export const metadata: import("next").Metadata = {
  title: "Politica de Servicos",
  description: "Consulta as condicoes gerais, os prazos e as responsabilidades associados aos servicos da Fictious Designs.",
  alternates: {
    canonical: "/politica-de-servicos",
  },
};
const sections = [
  {
    title: "1. Âmbito dos serviços",
    paragraphs: [
      "A Fictious Designs® presta serviços de design, desenvolvimento web e soluções digitais de acordo com as necessidades e os requisitos definidos com cada cliente.",
      "As entregas, funcionalidades e atividades incluídas serão descritas na proposta comercial ou no acordo específico do projeto.",
    ],
  },
  {
    title: "2. Planeamento e prazos",
    paragraphs: [
      "Os prazos de execução serão definidos em função da complexidade, do âmbito e dos requisitos de cada projeto.",
      "O cumprimento do calendário poderá depender da entrega atempada de conteúdos, do fornecimento de informações, da aprovação de etapas e da colaboração do cliente. Eventuais alterações relevantes deverão ser comunicadas entre as partes.",
    ],
  },
  {
    title: "3. Revisões e alterações",
    paragraphs: [
      "As revisões incluídas e as condições para solicitar alterações deverão ser estabelecidas no acordo de cada projeto.",
      "Pedidos que impliquem trabalho adicional, novas funcionalidades ou alterações significativas ao âmbito inicial poderão exigir um orçamento e um prazo revistos, sujeitos à aprovação do cliente.",
    ],
  },
  {
    title: "4. Obrigações do cliente",
    paragraphs: [
      "O cliente deverá disponibilizar os conteúdos, materiais, acessos e informações necessários à execução do serviço, assegurando que possui os direitos ou as autorizações necessárias para a sua utilização.",
      "O cliente deverá rever os materiais apresentados e comunicar correções ou aprovações dentro dos prazos acordados, sempre que aplicável.",
    ],
  },
  {
    title: "5. Entrega e aprovação",
    paragraphs: [
      "O formato, os materiais e os elementos entregues serão os previstos no acordo do projeto.",
      "A entrega de ficheiros, código-fonte, credenciais, documentação ou outros elementos específicos deverá seguir as condições acordadas entre as partes.",
    ],
  },
  {
    title: "6. Manutenção e suporte",
    paragraphs: [
      "A manutenção, as atualizações, o suporte técnico e o acompanhamento após a entrega não estão automaticamente incluídos em todos os serviços.",
      "Quando necessários, estes serviços deverão ser definidos separadamente ou incluídos expressamente no acordo, com o respetivo âmbito, prazo e preço.",
    ],
  },
  {
    title: "7. Serviços e plataformas de terceiros",
    paragraphs: [
      "Alguns projetos poderão depender de serviços externos, como alojamento, domínios, plataformas, integrações ou software de terceiros.",
      "Os custos, as condições de utilização e a continuidade desses serviços dependem dos respetivos fornecedores. A responsabilidade por pagamentos, renovação de serviços e gestão de contas deverá ser esclarecida no acordo do projeto.",
    ],
  },
  {
    title: "8. Contacto e condições específicas",
    paragraphs: [
      "As condições particulares de cada serviço prevalecem na definição do âmbito, das entregas, dos prazos e das responsabilidades acordadas, respeitando a legislação aplicável.",
      "Para esclarecimentos sobre um serviço ou projeto, utiliza os canais de contacto disponibilizados pela Fictious Designs® no website.",
    ],
  },
];

export default function PoliticaDeServicosPage() {
  return (
    <PolicyLayout
      title="Política de Prestação de Serviços"
      description="Orientações sobre a execução, as entregas, as revisões e o acompanhamento dos serviços da Fictious Designs®."
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
