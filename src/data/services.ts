export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type ServiceConfig = {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  headline: string;
  subtitle: string;
  description: string;
  accent: string;
  accentSecondary: string;
  price: number | null;
  priceLabel: string;
  benefits: string[];
  process: ServiceProcessStep[];
  faqs: ServiceFaq[];
  seo: {
    title: string;
    description: string;
  };
};

export const services: ServiceConfig[] = [
  {
    slug: "branding",
    name: "Branding & Identidade Visual",
    shortName: "Branding",
    eyebrow: "01 — IDENTIDADE",
    headline: "A tua marca merece ser reconhecida.",
    subtitle:
  "Criamos identidades visuais que distinguem o teu negócio, transmitem profissionalismo e tornam a tua marca mais reconhecível.",
description:
  "Do conceito à aplicação, desenvolvemos sistemas visuais alinhados com o posicionamento e os objectivos do teu negócio. A identidade é pensada para manter uma comunicação consistente em logótipos, redes sociais, materiais publicitários e outros pontos de contacto com os teus clientes.",
    accent: "#FF3D81",
    accentSecondary: "#FF8A5B",
    price: null,
    priceLabel: "Sob orçamento",
    benefits: [
  "Criação ou renovação de logótipos alinhados com a marca",
  "Definição de paleta de cores e tipografia",
  "Sistema visual consistente para diferentes canais",
  "Design de materiais digitais e impressos conforme o projecto",
  "Manual de identidade visual com orientações de utilização",
  "Aplicações gráficas para reforçar o reconhecimento da marca",
],
    process: [
  {
    title: "Descoberta",
    description:
      "Conhecemos o negócio, o público, a concorrência e os objectivos da marca para compreender o que a distingue e o que precisa de comunicar.",
  },
  {
    title: "Direcção criativa",
    description:
      "Definimos o conceito visual, as referências e a abordagem criativa, alinhando a identidade com o posicionamento e a personalidade da marca.",
  },
  {
    title: "Desenvolvimento",
    description:
      "Desenvolvemos a identidade visual e refinamos as propostas seleccionadas, procurando equilíbrio, clareza e consistência nas suas aplicações.",
  },
  {
    title: "Entrega",
    description:
      "Preparamos os ficheiros finais e as orientações de utilização previstas na proposta, para facilitar a aplicação consistente da identidade.",
  },
],
    faqs: [
  {
    question: "O que está incluído num projecto de branding?",
    answer:
      "Depende das necessidades da marca e da proposta aprovada. O projecto pode incluir logótipo, paleta de cores, tipografia, sistema visual, manual de identidade e aplicações gráficas.",
  },
  {
    question: "Posso contratar apenas a criação de um logótipo?",
    answer:
      "Sim. Podemos desenvolver um projecto focado no logótipo, com entregáveis, condições e investimento definidos na proposta.",
  },
  {
    question: "Como sei se o meu negócio precisa de branding?",
    answer:
      "O serviço pode ser útil se a tua marca ainda não tem uma identidade definida, apresenta uma imagem inconsistente ou precisa de se diferenciar melhor no mercado.",
  },
  {
    question: "Quanto tempo demora a desenvolver uma identidade visual?",
    answer:
      "O prazo depende da complexidade do projecto, dos materiais incluídos e do tempo necessário para analisar e aprovar as propostas.",
  },
  {
    question: "Vou receber os ficheiros finais da identidade?",
    answer:
      "Sim, os formatos e ficheiros incluídos são definidos na proposta. Os ficheiros editáveis específicos devem ser confirmados antes do início do projecto.",
  },
  {
    question: "Posso solicitar alterações durante o projecto?",
    answer:
      "Sim. As revisões são realizadas de acordo com as condições e o número de rondas definidos na proposta aprovada.",
  },
  {
    question: "Como posso solicitar um orçamento?",
    answer:
      "Envia-nos uma breve descrição do negócio, do que pretendes desenvolver e dos teus objectivos através da página de contactos. Vamos analisar as necessidades para preparar uma proposta adequada.",
  },
],
    seo: {
  title: "Branding e Identidade Visual",
  description:
    "Desenvolvemos identidades visuais estratégicas, logótipos e sistemas gráficos que distinguem a tua marca, comunicam os seus valores e reforçam a sua presença profissional.",
},
  },
  {
    slug: "redes-sociais",
    name: "Gestão de Redes Sociais",
    shortName: "Redes Sociais",
    eyebrow: "02 — PRESENÇA",
    headline: "Transforma presença em ligação.",
    subtitle:
  "Transformamos a presença da tua marca nas redes sociais numa comunicação consistente, relevante e alinhada com os teus objectivos comerciais.",
description:
  "Planeamos e desenvolvemos conteúdos visuais e textuais que apresentam os teus produtos ou serviços, reforçam a identidade da marca e ajudam a criar relações com o público. A gestão é adaptada ao teu negócio, às plataformas escolhidas e às prioridades de comunicação definidas em conjunto.",
    accent: "#7C5CFF",
    accentSecondary: "#3D7BFF",
    price: null,
    priceLabel: "Planos mensais",
   benefits: [
  "Planeamento editorial alinhado com os objectivos do negócio",
  "Design de publicações para reforçar a identidade visual da marca",
  "Redacção de legendas e mensagens orientadas para o público",
  "Adaptação de conteúdos aos formatos das plataformas seleccionadas",
  "Organização do calendário de publicações e do fluxo de aprovação",
  "Análise dos indicadores disponíveis e recomendações de melhoria",
],
    process: [
  {
    title: "Diagnóstico",
    description:
      "Analisamos a presença digital da marca, os conteúdos existentes, o público e os objectivos comerciais para identificar prioridades e oportunidades de melhoria.",
  },
  {
    title: "Planeamento",
    description:
      "Definimos os pilares de conteúdo, os formatos, o tom de comunicação e o calendário editorial, de acordo com as necessidades do negócio e o plano contratado.",
  },
  {
    title: "Produção",
    description:
      "Desenvolvemos os designs e os textos previstos no plano, mantendo a identidade visual e preparando os conteúdos para as plataformas seleccionadas.",
  },
  {
    title: "Acompanhamento",
    description:
      "Acompanhamos os indicadores disponíveis, identificamos os conteúdos com melhor desempenho e recomendamos ajustes para melhorar a comunicação ao longo do tempo.",
  },
],
    faqs: [
  {
    question: "Que redes sociais podem ser geridas?",
    answer:
      "Podemos trabalhar com plataformas como Instagram, Facebook e TikTok, de acordo com o público, os objectivos do negócio e o plano definido na proposta.",
  },
  {
    question: "O serviço inclui criação de publicações?",
    answer:
      "Sim. O plano pode incluir design de publicações, legendas, planeamento editorial e preparação de conteúdos, com quantidades e formatos definidos na proposta.",
  },
  {
    question: "A Fictious Media também produz fotografias e vídeos?",
    answer:
      "Podemos avaliar as necessidades de fotografia e vídeo para o teu negócio. A produção, gravação e edição devem ser confirmadas na proposta.",
  },
  {
    question: "A gestão inclui anúncios pagos?",
    answer:
      "A publicidade paga pode ser contratada como um serviço complementar. O investimento destinado às plataformas de anúncios não está automaticamente incluído no valor da gestão.",
  },
  {
    question: "Posso aprovar os conteúdos antes da publicação?",
    answer:
      "Sim. O processo de aprovação é acordado no início do serviço para facilitar a revisão dos conteúdos e manter a comunicação alinhada com a marca.",
  },
  {
    question: "A gestão inclui responder a mensagens e comentários?",
    answer:
      "O acompanhamento de mensagens e comentários depende do âmbito contratado. As responsabilidades e os horários de resposta devem ficar definidos na proposta.",
  },
  {
    question: "Em quanto tempo vou ver resultados?",
    answer:
      "Os resultados variam conforme o sector, a oferta, a qualidade dos conteúdos, a consistência e outros factores. Acompanhamos os indicadores disponíveis para identificar oportunidades, sem garantir métricas específicas.",
  },
  {
    question: "Como posso contratar o serviço?",
    answer:
      "Envia-nos informações sobre o teu negócio, as plataformas que utilizas e os teus objectivos através da página de contactos. Vamos analisar as necessidades para preparar uma proposta adequada.",
  },
],
   seo: {
  title: "Gestão de Redes Sociais",
  description:
    "Planeamos e gerimos conteúdos para redes sociais, combinando estratégia, design e copywriting para fortalecer a presença digital da tua marca e comunicar com o público certo.",
},
  },
  {
    slug: "marketing-digital",
    name: "Marketing Digital & Publicidade",
    shortName: "Marketing Digital",
    eyebrow: "03 — PERFORMANCE",
    headline: "Investe com intenção. Aprende com os dados.",
    subtitle:
  "Planeamos campanhas digitais para aproximar a tua oferta do público certo, aproveitar melhor o orçamento e acompanhar o desempenho.",
description:
  "Desenvolvemos estratégias de marketing digital alinhadas com os objectivos comerciais da tua marca. O trabalho pode incluir definição de públicos, planeamento de campanhas, criação de anúncios e análise de indicadores para identificar oportunidades de optimização. Os canais, os entregáveis e o investimento publicitário são definidos conforme as necessidades do negócio.",
    accent: "#FF9F1C",
    accentSecondary: "#FF5E3A",
    price: null,
    priceLabel: "Sob orçamento",
    benefits: [
  "Definição de objectivos e indicadores para cada campanha",
  "Planeamento de campanhas alinhadas com as prioridades do negócio",
  "Segmentação de públicos conforme a oferta e os objectivos",
  "Criação de conceitos e mensagens publicitárias",
  "Orientação para a distribuição do orçamento publicitário",
  "Acompanhamento de resultados e recomendações de optimização",
],
    process: [
  {
    title: "Diagnóstico",
    description:
      "Analisamos a oferta, o público, a presença digital e os objectivos comerciais para identificar oportunidades e definir as prioridades da campanha.",
  },
  {
    title: "Estratégia",
    description:
      "Seleccionamos os canais adequados, definimos os públicos, as mensagens, os formatos e os indicadores que ajudarão a avaliar o desempenho.",
  },
  {
    title: "Implementação",
    description:
      "Preparamos os materiais publicitários e configuramos as campanhas de acordo com o plano aprovado, os acessos disponíveis e o orçamento definido.",
  },
  {
    title: "Análise e optimização",
    description:
      "Acompanhamos os indicadores disponíveis, avaliamos o desempenho e recomendamos ajustes para melhorar a utilização do orçamento e a eficácia das campanhas.",
  },
],
    faqs: [
  {
    question: "Que serviços de marketing digital disponibilizam?",
    answer:
      "Apoiamos o planeamento de estratégias digitais, a criação de campanhas publicitárias, a preparação de anúncios e a análise de desempenho. O âmbito do trabalho depende das necessidades do negócio e da proposta aprovada.",
  },
  {
    question: "Em que plataformas podem ser realizadas campanhas?",
    answer:
      "Podemos trabalhar com plataformas como Meta Ads (Facebook e Instagram) e Google Ads, conforme os objectivos da campanha, o público e a adequação de cada canal.",
  },
  {
    question: "O orçamento dos anúncios está incluído no serviço?",
    answer:
      "Não. O valor do nosso serviço e a verba destinada às plataformas publicitárias são custos separados. O investimento em anúncios é definido com o cliente antes do início da campanha.",
  },
  {
    question: "É necessário ter redes sociais ou um website?",
    answer:
      "Depende dos objectivos da campanha. Algumas estratégias utilizam redes sociais, enquanto outras podem beneficiar de um website ou de uma página específica para receber contactos e pedidos de orçamento.",
  },
  {
    question: "Quanto tempo demora a obter resultados?",
    answer:
      "O tempo varia conforme o objectivo, o orçamento, o público, a concorrência e a qualidade da oferta. Acompanhamos os indicadores disponíveis para avaliar o desempenho, sem garantir resultados específicos.",
  },
  {
    question: "Como acompanham o desempenho das campanhas?",
    answer:
      "Analisamos os indicadores relevantes para cada objectivo, como alcance, cliques, interacções e contactos gerados, quando esses dados estão disponíveis. Com base na análise, identificamos oportunidades de melhoria.",
  },
  {
    question: "Como posso solicitar uma proposta?",
    answer:
      "Entra em contacto com a Fictious Media e explica-nos o teu negócio, os objectivos que pretendes alcançar e os canais que utilizas. Com essas informações, podemos avaliar as necessidades e preparar uma proposta adequada.",
  },
],
    seo: {
  title: "Marketing Digital e Publicidade",
  description:
    "Planeamos campanhas de marketing digital, criamos anúncios e acompanhamos indicadores de desempenho para ajudar a tua marca a alcançar o público certo e aproveitar melhor o investimento publicitário.",
},
  },
  {
    slug: "estrategia-conteudo",
    name: "Estratégia de Conteúdo",
    shortName: "Conteúdo",
    eyebrow: "04 — NARRATIVA",
    headline: "Dá direcção às ideias da tua marca.",
    subtitle:
  "Transformamos ideias em conteúdos relevantes que comunicam o valor da tua marca, despertam interesse e apoiam os teus objectivos de negócio.",
description:
  "Desenvolvemos estratégias de conteúdo que ajudam a tua marca a comunicar de forma consistente, útil e diferenciada. O trabalho parte dos objectivos do negócio, do público e dos canais de comunicação para definir temas, mensagens e formatos adequados. A estratégia pode incluir planeamento editorial, copywriting e orientação criativa para conteúdos digitais, conforme o âmbito do projecto.",
    accent: "#B6FF3B",
    accentSecondary: "#3BFFA3",
    price: null,
    priceLabel: "Por projecto ou mensal",
    benefits: [
  "Definição de pilares de conteúdo alinhados com os objectivos da marca",
  "Identificação de temas relevantes para o público-alvo",
  "Planeamento de mensagens para diferentes etapas da jornada do cliente",
  "Copywriting para publicações, campanhas e comunicação digital",
  "Orientação criativa para formatos e abordagens de conteúdo",
  "Calendário editorial para organizar a comunicação ao longo do tempo",
],
    process: [
  {
    title: "Imersão",
    description:
      "Conhecemos o negócio, os objectivos da marca, o público e os canais de comunicação para compreender o que deve ser comunicado e porquê.",
  },
  {
    title: "Planeamento editorial",
    description:
      "Definimos os pilares de conteúdo, os temas prioritários, as mensagens-chave e os formatos mais adequados ao público e aos objectivos estabelecidos.",
  },
  {
    title: "Desenvolvimento",
    description:
      "Criamos os textos, as orientações criativas e a estrutura dos conteúdos previstos na proposta, respeitando a identidade e o tom de comunicação da marca.",
  },
  {
    title: "Avaliação",
    description:
      "Definimos critérios para avaliar a relevância e o desempenho dos conteúdos, identificando oportunidades de melhoria conforme os indicadores disponíveis.",
  },
],
    faqs: [
  {
    question: "O que é uma estratégia de conteúdo?",
    answer:
      "É um plano que define o que a marca deve comunicar, para quem, em que formatos e com que objectivos. Ajuda a organizar a comunicação e a manter uma mensagem consistente nos canais seleccionados.",
  },
  {
    question: "Qual é a diferença entre estratégia de conteúdo e gestão de redes sociais?",
    answer:
      "A estratégia de conteúdo concentra-se no planeamento das mensagens, dos temas e dos formatos. A gestão de redes sociais inclui a organização e o acompanhamento da presença da marca nas plataformas. Os dois serviços podem funcionar em conjunto ou ser contratados separadamente.",
  },
  {
    question: "Que tipos de conteúdo podem desenvolver?",
    answer:
      "Podemos trabalhar ideias para publicações, textos publicitários, legendas, mensagens de campanha e outros conteúdos digitais, conforme os objectivos e o âmbito definidos para o projecto.",
  },
  {
    question: "O serviço inclui design gráfico?",
    answer:
      "O design gráfico pode ser incluído quando estiver previsto na proposta. O âmbito do projecto esclarece se a entrega contempla apenas estratégia e textos ou também peças visuais.",
  },
  {
    question: "A estratégia é adaptada ao meu negócio?",
    answer:
      "Sim. Consideramos os objectivos comerciais, o público, a identidade da marca, os canais utilizados e os recursos disponíveis para desenvolver uma abordagem adequada ao teu negócio.",
  },
  {
    question: "Como são definidos os temas e as mensagens?",
    answer:
      "Partimos dos objectivos da marca, das necessidades do público, das características da oferta e das prioridades de comunicação. A partir daí, organizamos os temas e as mensagens em pilares de conteúdo.",
  },
  {
    question: "Como posso contratar este serviço?",
    answer:
      "Entra em contacto com a Fictious Media e partilha os objectivos da tua marca, os canais que utilizas e os desafios de comunicação que pretendes resolver. Com base nessas informações, podemos preparar uma proposta adequada.",
  },
],
    seo: {
  title: "Estratégia de Conteúdo e Copywriting",
  description:
    "Criamos estratégias de conteúdo, planeamento editorial e textos para comunicação digital, ajudando a tua marca a transmitir mensagens consistentes, relevantes e alinhadas com os seus objectivos.",
},
  },
  {
    slug: "seo-local",
    name: "SEO Local",
    shortName: "SEO Local",
    eyebrow: "05 — DESCOBERTA",
    headline: "Faz a tua marca ser encontrada perto de quem procura.",
    subtitle:
  "Melhoramos a presença local do teu negócio para facilitar a descoberta da tua marca por pessoas que procuram os teus produtos ou serviços na tua região.",
description:
  "Trabalhamos a presença digital local da tua empresa para melhorar a forma como aparece nas pesquisas relevantes e nos serviços de mapas. O trabalho pode incluir optimização do Perfil de Empresa no Google, revisão de informações comerciais, categorias, serviços, conteúdos e orientação para fortalecer a relevância local. As acções são definidas conforme a situação actual do negócio e os objectivos estabelecidos.",
    accent: "#22D3EE",
    accentSecondary: "#3B82F6",
    price: null,
    priceLabel: "Por projecto ou mensal",
    benefits: [
  "Optimização do Perfil de Empresa no Google",
  "Revisão de morada, contactos, horários e categorias comerciais",
  "Organização de produtos e serviços apresentados no perfil",
  "Orientação para melhorar a relevância nas pesquisas locais",
  "Recomendações para gerir avaliações e reforçar a confiança",
  "Acompanhamento dos indicadores de visibilidade e interacção disponíveis",
],
    process: [
  {
    title: "Auditoria local",
    description:
      "Analisamos a presença actual do negócio nas pesquisas locais, no Perfil de Empresa no Google e nos serviços de mapas para identificar problemas e oportunidades de melhoria.",
  },
  {
    title: "Optimização",
    description:
      "Revemos as informações comerciais, as categorias, os serviços, as descrições e os restantes elementos do perfil, de acordo com as características e os objectivos do negócio.",
  },
  {
    title: "Reforço da presença",
    description:
      "Identificamos oportunidades para melhorar a consistência das informações comerciais, a apresentação da empresa e a gestão da reputação local.",
  },
  {
    title: "Acompanhamento",
    description:
      "Analisamos os indicadores de desempenho disponíveis e recomendamos ajustes para melhorar a presença local ao longo do tempo.",
  },
],
    faqs: [
  {
    question: "O que é SEO Local?",
    answer:
      "SEO Local é o conjunto de práticas que ajudam uma empresa a melhorar a sua presença nos resultados de pesquisa associados à sua localização e aos serviços que oferece.",
  },
  {
    question: "O serviço inclui a optimização do Google Maps?",
    answer:
      "Sim. O trabalho pode incluir a optimização do Perfil de Empresa no Google, que ajuda a apresentar informações comerciais relevantes na Pesquisa Google e no Google Maps.",
  },
  {
    question: "E se a minha empresa ainda não tiver um perfil no Google?",
    answer:
      "Podemos avaliar a situação e orientar a criação ou configuração do perfil, de acordo com os requisitos e os processos de verificação definidos pelo Google.",
  },
  {
    question: "O SEO Local garante que a minha empresa apareça em primeiro lugar?",
    answer:
      "Não. A posição nos resultados depende de factores como relevância, distância e notoriedade, entre outros. Trabalhamos para melhorar a presença local, mas não podemos garantir posições específicas.",
  },
  {
    question: "Quanto tempo demora a ver melhorias?",
    answer:
      "O prazo varia conforme o estado inicial do perfil, a concorrência, o mercado e as acções necessárias. O SEO Local é um trabalho progressivo e os resultados devem ser acompanhados ao longo do tempo.",
  },
  {
    question: "Preciso de ter uma loja física?",
    answer:
      "A elegibilidade depende do modelo de negócio e das regras do Google. Algumas empresas que atendem clientes presencialmente ou se deslocam até eles podem ser elegíveis, enquanto negócios exclusivamente online têm restrições.",
  },
  {
    question: "Podem ajudar a gerir avaliações de clientes?",
    answer:
      "Podemos orientar boas práticas para acompanhar e responder a avaliações de forma profissional. A gestão contínua de avaliações deve ser definida no âmbito da proposta.",
  },
  {
    question: "Como posso contratar o serviço?",
    answer:
      "Entra em contacto com a Fictious Media e partilha a localização, a actividade e os objectivos do teu negócio. Avaliamos a presença local existente e identificamos as prioridades para uma proposta adequada.",
  },
],
  seo: {
  title: "SEO Local e Google Maps",
  description:
    "Melhora a presença local do teu negócio com serviços de SEO Local e optimização do Google Maps. Ajudamos a tua marca a fortalecer a visibilidade nas pesquisas locais e a facilitar a descoberta dos teus produtos ou serviços.",
},
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
