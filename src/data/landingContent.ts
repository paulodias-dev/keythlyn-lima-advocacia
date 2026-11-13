export interface PracticeAreaItem {
  id: string;
  number: string;
  title: string;
  description: string;
  whatsappContext: string;
  featured?: boolean;
}

export interface ProcessStepItem {
  number: string;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ImageAsset {
  webp: string;
  jpeg: string;
  width: number;
  height: number;
  alt: string;
}

export const ASSETS: Record<'heroPortrait' | 'aboutPortrait' | 'contactPortrait' | 'brandLogo', ImageAsset> = {
  heroPortrait: {
    webp: '/assets/site-images/01d739b7-66f2-4693-a1a7-577c414c1e15_d52b0d93.webp',
    jpeg: '/assets/site-images/01d739b7-66f2-4693-a1a7-577c414c1e15_d52b0d93.jpeg',
    width: 1122,
    height: 1402,
    alt: 'Dra. Keythlyn Evelyn Teixeira de Lima, Advogada especialista em Direito de Família (OAB/GO 67.481), em seu escritório.',
  },
  aboutPortrait: {
    webp: '/assets/site-images/d15e7b5a-5f6e-4c4d-b877-581a747086dd_3433b637.webp',
    jpeg: '/assets/site-images/d15e7b5a-5f6e-4c4d-b877-581a747086dd_3433b637.jpeg',
    width: 1086,
    height: 1448,
    alt: 'Keythlyn Evelyn Teixeira de Lima em atendimento no escritório em Goiânia – Goiás.',
  },
  contactPortrait: {
    webp: '/assets/site-images/8f21bbc7-2633-4dfc-aa56-f075d84ffd30_173ca69e.webp',
    jpeg: '/assets/site-images/8f21bbc7-2633-4dfc-aa56-f075d84ffd30_173ca69e.jpeg',
    width: 900,
    height: 1600,
    alt: 'Retrato profissional da advogada Keythlyn Lima com a balança da Justiça ao fundo.',
  },
  brandLogo: {
    webp: '/assets/site-images/5bc0fc36-c8c2-41f9-9fc3-f61bf40619d5_1e9d1abf.webp',
    jpeg: '/assets/site-images/5bc0fc36-c8c2-41f9-9fc3-f61bf40619d5_1e9d1abf.jpeg',
    width: 1080,
    height: 1350,
    alt: 'Monograma oficial Keythlyn Lima Advogada',
  },
};

export const LAWYER_PROFILE = {
  brandName: 'Keythlyn Lima',
  brandFullTitle: 'KEYTHLYN LIMA',
  brandSubtitle: 'ADVOCACIA',
  oab: 'OAB/GO 67.481',
  fullName: 'Keythlyn Evelyn Teixeira de Lima',
  role: 'Advogada – OAB/GO 67.481',
  specialty: 'Direito de Família',
  city: 'Goiânia – Goiás',
  attendanceMode: 'Atendimento presencial e online.',
};

export const HERO_CONTENT = {
  kicker: 'KEYTHLYN LIMA · ADVOCACIA · OAB/GO 67.481',
  headline: 'Direito de Família com responsabilidade, atenção e orientação individualizada.',
  paragraphs: [
    'Questões familiares envolvem decisões importantes e, muitas vezes, dúvidas sobre direitos e deveres.',
    'A orientação jurídica adequada permite compreender as possibilidades legais e avaliar as medidas cabíveis para cada situação.',
  ],
  attendanceNote: 'Atendimento presencial e online.',
  locationNote: 'Goiânia – Goiás',
  primaryCtaLabel: 'Entrar em contato pelo WhatsApp',
  secondaryCtaLabel: 'Áreas de atuação',
};

export const ABOUT_CONTENT = {
  sectionLabel: 'Sobre a Advogada',
  name: 'Keythlyn Evelyn Teixeira de Lima',
  credential: 'Advogada – OAB/GO 67.481',
  paragraphs: [
    'A atuação jurídica deve considerar não apenas a legislação aplicável, mas também as particularidades de cada situação.',
    'Meu trabalho é pautado na responsabilidade profissional, na análise individualizada dos casos e na transparência durante o atendimento.',
    'Cada demanda recebe atenção às suas circunstâncias, com orientação jurídica clara e avaliação das medidas legalmente cabíveis.',
  ],
  pillars: [
    {
      label: 'Responsabilidade profissional',
      detail: 'Condução técnica comprometida com a legislação e com os deveres éticos da advocacia.',
    },
    {
      label: 'Análise individualizada',
      detail: 'Estudo atento das circunstâncias e documentos específicos de cada família.',
    },
    {
      label: 'Transparência no atendimento',
      detail: 'Comunicação clara sobre possibilidades legais e medidas cabíveis em cada etapa.',
    },
  ],
};

export const PRACTICE_AREAS_CONTENT = {
  sectionLabel: 'Áreas de Atuação',
  title: 'Direito de Família',
  subtitle:
    'Atuação jurídica dedicada às relações familiares, com orientação clara para decisões seguras e responsáveis.',
  items: [
    {
      id: 'divorcio',
      number: '01',
      title: 'Divórcio e dissolução de união estável',
      description:
        'Orientação jurídica sobre divórcio consensual e litigioso, partilha de bens e dissolução de união estável.',
      whatsappContext: 'Divórcio e dissolução de união estável',
      featured: true,
    },
    {
      id: 'pensao-alimenticia',
      number: '02',
      title: 'Pensão alimentícia',
      description:
        'Orientação sobre fixação, revisão, exoneração e execução de alimentos, observando as necessidades de quem recebe e as possibilidades de quem paga.',
      whatsappContext: 'Pensão alimentícia',
      featured: true,
    },
    {
      id: 'guarda-dos-filhos',
      number: '03',
      title: 'Guarda dos filhos',
      description:
        'Questões relacionadas à guarda compartilhada, unilateral e definição das responsabilidades parentais.',
      whatsappContext: 'Guarda dos filhos',
    },
    {
      id: 'regulamentacao-convivencia',
      number: '04',
      title: 'Regulamentação de convivência',
      description:
        'Orientação sobre a organização da convivência familiar, considerando os direitos dos filhos e as particularidades de cada família.',
      whatsappContext: 'Regulamentação de convivência',
    },
    {
      id: 'investigacao-paternidade',
      number: '05',
      title: 'Investigação e reconhecimento de paternidade',
      description:
        'Atuação em questões relacionadas ao reconhecimento de filiação e seus efeitos jurídicos.',
      whatsappContext: 'Investigação e reconhecimento de paternidade',
    },
    {
      id: 'planejamento-partilha',
      number: '06',
      title: 'Planejamento familiar e partilha de bens',
      description:
        'Orientação sobre aspectos patrimoniais e jurídicos decorrentes das relações familiares.',
      whatsappContext: 'Planejamento familiar e partilha de bens',
    },
  ] satisfies PracticeAreaItem[],
};

export const PROCESS_CONTENT = {
  sectionLabel: 'Como funciona o atendimento?',
  title: 'Etapas claras desde o primeiro contato',
  subtitle:
    'Um fluxo objetivo para que você compreenda sua situação jurídica com segurança e privacidade.',
  steps: [
    {
      number: '01',
      title: 'Primeiro contato',
      description:
        'O atendimento começa com a apresentação da situação e identificação da necessidade jurídica.',
    },
    {
      number: '02',
      title: 'Análise individualizada',
      description:
        'São avaliadas as informações e os documentos pertinentes ao caso.',
    },
    {
      number: '03',
      title: 'Orientação jurídica',
      description:
        'São esclarecidas as possibilidades legais e as medidas que poderão ser adotadas.',
    },
    {
      number: '04',
      title: 'Acompanhamento',
      description:
        'O trabalho é desenvolvido conforme os serviços contratados e as necessidades jurídicas identificadas.',
    },
  ] satisfies ProcessStepItem[],
};

export const FAQ_CONTENT = {
  sectionLabel: 'Perguntas Frequentes',
  title: 'Esclarecimentos iniciais sobre Direito de Família',
  items: [
    {
      id: 'pensao-sem-casamento',
      question: 'Posso solicitar pensão alimentícia mesmo que não exista casamento entre os pais?',
      answer:
        'Sim. O dever de prestar alimentos aos filhos decorre do vínculo de filiação, independentemente de os pais terem sido casados ou vivido em união estável.',
    },
    {
      id: 'guarda-compartilhada-tempo',
      question: 'A guarda compartilhada significa que a criança ficará metade do tempo com cada genitor?',
      answer:
        'Não necessariamente. Guarda compartilhada diz respeito à responsabilidade conjunta nas decisões sobre os filhos, não significando divisão matemática do tempo de convivência.',
    },
    {
      id: 'revisao-pensao',
      question: 'É possível revisar o valor da pensão alimentícia?',
      answer:
        'Sim. Havendo alteração relevante nas necessidades de quem recebe ou nas possibilidades de quem paga, poderá ser analisada a possibilidade de revisão judicial.',
    },
    {
      id: 'divorcio-sem-concordancia',
      question: 'O divórcio pode ser realizado mesmo sem concordância do outro cônjuge?',
      answer:
        'Sim. O divórcio é um direito potestativo e não depende da concordância da outra parte, observados os procedimentos legais aplicáveis.',
    },
    {
      id: 'orientacao-online',
      question: 'Posso receber orientação jurídica pela internet?',
      answer:
        'Sim. O atendimento pode ser realizado de forma online, mediante organização e análise das informações e documentos necessários.',
    },
  ] satisfies FAQItem[],
};

export const CONTACT_CONTENT = {
  sectionLabel: 'Contato Profissional',
  title: 'Precisa de orientação sobre uma questão familiar?',
  description:
    'Entre em contato para apresentar sua situação e conhecer as possibilidades de atendimento jurídico.',
  ctaLabel: 'ENTRAR EM CONTATO PELO WHATSAPP',
  lawyerName: 'KEYTHLYN EVELYN TEIXEIRA DE LIMA',
  lawyerRole: 'Advogada – OAB/GO 67.481',
  attendance: 'Atendimento presencial e online.',
  location: 'Goiânia – Goiás.',
};

export const FOOTER_CONTENT = {
  disclaimer:
    'As informações desta página possuem caráter exclusivamente informativo e não substituem a análise individualizada de cada situação. A contratação de serviços jurídicos depende de avaliação específica do caso.',
};
