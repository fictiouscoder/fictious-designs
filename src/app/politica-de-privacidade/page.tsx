import PolicyLayout from "../components/PolicyLayout";

export const metadata: import("next").Metadata = {
  title: "Politica de Privacidade",
  description: "Conhece como a Fictious Media trata e protege os dados partilhados durante a utilizacao do website.",
  alternates: {
    canonical: "/politica-de-privacidade",
  },
};
const sections = [
  {
    title: "1. Introdução",
    content: [
      "A Fictious Media® respeita a privacidade dos visitantes do seu website e procura tratar os dados pessoais de forma responsável, transparente e limitada ao necessário para as finalidades descritas nesta política.",
      "Esta política explica que informações poderão ser tratadas quando navegas no website ou entras em contacto connosco.",
    ],
  },
  {
    title: "2. Informações que podemos receber",
    content: [
      "Podemos receber informações que decides partilhar connosco ao solicitar informações, pedir um orçamento ou contratar um serviço, como o teu nome, contacto, endereço de e-mail e os detalhes necessários para compreender o teu pedido.",
      "Os dados efetivamente recolhidos dependem dos canais de contacto utilizados e das informações que decides fornecer.",
    ],
  },
  {
    title: "3. Finalidade do tratamento",
    content: [
      "As informações recebidas poderão ser utilizadas para responder a pedidos, preparar propostas comerciais, comunicar contigo, prestar os serviços contratados, acompanhar projetos e proteger o funcionamento e a segurança do website.",
      "Não devemos utilizar os teus dados para finalidades incompatíveis com aquelas para as quais foram recolhidos, sem fundamento adequado.",
    ],
  },
  {
    title: "4. Partilha de informações",
    content: [
      "Os dados poderão ser tratados por fornecedores de serviços tecnológicos estritamente necessários ao funcionamento do website ou à comunicação, quando aplicável, bem como divulgados quando tal for exigido por lei.",
      "Não assumimos que todos os dados são partilhados com terceiros; qualquer partilha depende dos serviços efetivamente utilizados e das circunstâncias aplicáveis.",
    ],
  },
  {
    title: "5. Conservação e segurança",
    content: [
      "Procuramos conservar as informações apenas durante o período necessário para responder aos pedidos, prestar os serviços, cumprir obrigações aplicáveis e resolver questões relacionadas com os projetos.",
      "Adotamos cuidados razoáveis para proteger as informações, embora nenhum sistema de transmissão ou armazenamento digital possa garantir segurança absoluta.",
    ],
  },
  {
    title: "6. Cookies e tecnologias semelhantes",
    content: [
      "O funcionamento de cookies ou de ferramentas de análise depende das tecnologias efetivamente instaladas no website e dos serviços externos utilizados. Esta secção deverá ser ajustada caso sejam implementadas ferramentas de análise, publicidade ou rastreamento.",
    ],
  },
  {
    title: "7. Os teus direitos e pedidos",
    content: [
      "Se pretenderes esclarecer dúvidas sobre os teus dados, solicitar informações sobre o seu tratamento ou apresentar um pedido relacionado com a tua privacidade, podes entrar em contacto com a Fictious Media® através dos canais de contacto disponibilizados no website.",
      "Os pedidos serão analisados de acordo com as circunstâncias e a legislação aplicável.",
    ],
  },
  {
    title: "8. Atualizações desta política",
    content: [
      "Esta política poderá ser revista quando os serviços, as tecnologias utilizadas ou os requisitos legais aplicáveis sofrerem alterações. A versão publicada nesta página será a referência para os visitantes.",
    ],
  },
];

export default function PoliticaDePrivacidadePage() {
  return (
    <PolicyLayout
      title="Política de Privacidade"
      description="Como tratamos e protegemos as informações partilhadas durante a tua interação com a Fictious Media®."
    >
      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.title} className="space-y-3">
            <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
              {section.title}
            </h2>

            {section.content.map((paragraph) => (
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
