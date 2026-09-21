import { LegalDocument } from "@/types";

export const termsPt: LegalDocument = {
  slug: "terms",
  product: "TirzeFlow",
  title: "Termos de Uso",
  summary:
    "Estes termos regem o uso do TirzeFlow. O ponto que mais importa cabe em uma linha: o aplicativo é um diário pessoal de tratamento, não um dispositivo médico e não um conselho clínico. Ele registra o que o seu prescritor orientou e nunca sugere conduta.",
  updatedAt: "2026-09-21",
  sections: [
    {
      id: "aceite",
      heading: "1. Aceite destes termos",
      blocks: [
        {
          type: "paragraph",
          text: "Ao criar uma conta no TirzeFlow, você declara que leu, entendeu e aceita estes termos e a Política de Privacidade. Se você não concorda com algum ponto, não crie a conta e não use o aplicativo.",
        },
        {
          type: "paragraph",
          text: "O TirzeFlow é fornecido por Guilherme Passarinho, pessoa física, no Brasil. Contato: guilhermepassarinho@gmail.com.",
        },
      ],
    },
    {
      id: "o-que-e",
      heading: "2. O que o TirzeFlow é, e o que ele não é",
      blocks: [
        {
          type: "paragraph",
          text: "O TirzeFlow é um diário pessoal para acompanhar um tratamento com tirzepatida e a perda de peso associada. Ele permite registrar aplicações, pesagens, medidas corporais, efeitos colaterais, treinos e alimentação, e apresenta esses registros organizados ao longo do tempo.",
        },
        {
          type: "callout",
          title: "O aplicativo não prescreve",
          text: "O TirzeFlow não é dispositivo médico, não realiza diagnóstico e não oferece aconselhamento médico, farmacêutico ou nutricional. Ele não sugere dose, não indica quando aumentar ou reduzir a dose, não recomenda conduta e não substitui consulta com profissional de saúde. Toda dose registrada é aquela que o seu prescritor orientou.",
        },
        {
          type: "paragraph",
          text: "Os números calculados pelo aplicativo — índice de massa corporal, meta calórica, meta de proteína, média semanal, faixa de manutenção — vêm de fórmulas nutricionais de uso corrente e são estimativas informativas. Eles não consideram o seu quadro clínico e não devem ser usados como base isolada para decisões sobre a sua saúde.",
        },
        {
          type: "paragraph",
          text: "Procure imediatamente um profissional de saúde diante de qualquer sintoma preocupante. Em emergência, acione o serviço de urgência local. Não use o aplicativo para decidir sobre uma emergência.",
        },
      ],
    },
    {
      id: "elegibilidade",
      heading: "3. Quem pode usar",
      blocks: [
        {
          type: "paragraph",
          text: "Você precisa ter 18 anos ou mais e capacidade civil plena para criar uma conta. O aplicativo pressupõe que você está sob acompanhamento de um profissional de saúde responsável pelo seu tratamento.",
        },
      ],
    },
    {
      id: "conta",
      heading: "4. Sua conta",
      blocks: [
        {
          type: "list",
          items: [
            "Informe dados verdadeiros no cadastro. O endereço de e-mail precisa ser seu e estar acessível, porque é por ele que chegam o código de verificação e a redefinição de senha.",
            "A senha é pessoal e intransferível. Você é responsável pelo que for feito na sua conta enquanto ela estiver acessível a terceiros.",
            "Avise imediatamente, pelo e-mail de contato, se suspeitar de acesso indevido.",
            "Uma conta pertence a uma única pessoa. Não a compartilhe.",
          ],
        },
      ],
    },
    {
      id: "uso-aceitavel",
      heading: "5. Uso aceitável",
      blocks: [
        {
          type: "paragraph",
          text: "Ao usar o TirzeFlow, você concorda em não:",
        },
        {
          type: "list",
          items: [
            "Usar o aplicativo para qualquer finalidade ilegal ou para orientar tratamento de terceiros.",
            "Tentar acessar dados de outras pessoas, contornar a autenticação ou explorar falhas de segurança.",
            "Automatizar requisições em volume capaz de degradar o serviço, ou tentar contornar os limites de uso.",
            "Fazer engenharia reversa, descompilar ou redistribuir o aplicativo, salvo no que a lei permitir independentemente de autorização.",
          ],
        },
      ],
    },
    {
      id: "seus-dados",
      heading: "6. Os seus registros pertencem a você",
      blocks: [
        {
          type: "paragraph",
          text: "Tudo que você registra no diário é seu. O TirzeFlow não reivindica propriedade sobre esse conteúdo e o usa exclusivamente para prestar o serviço a você, nos termos da Política de Privacidade.",
        },
        {
          type: "paragraph",
          text: "Você pode exportar seus dados em formato aberto a qualquer momento, e pode apagá-los excluindo a conta dentro do aplicativo.",
        },
        {
          type: "paragraph",
          text: "Manter uma cópia própria dos registros que forem importantes para você é recomendável. A exclusão da conta é definitiva e não há como recuperar os dados depois.",
        },
      ],
    },
    {
      id: "servico",
      heading: "7. Disponibilidade do serviço",
      blocks: [
        {
          type: "paragraph",
          text: "O TirzeFlow é mantido por uma pessoa e oferecido no estado em que se encontra. Não há garantia de disponibilidade ininterrupta: pode haver manutenção, instabilidade ou indisponibilidade temporária.",
        },
        {
          type: "paragraph",
          text: "Funcionalidades podem ser alteradas ou descontinuadas. Se o serviço for encerrado, o aviso será dado dentro do aplicativo com antecedência razoável, e haverá prazo para exportar os seus dados antes do desligamento.",
        },
      ],
    },
    {
      id: "encerramento",
      heading: "8. Encerramento",
      blocks: [
        {
          type: "paragraph",
          text: "Você pode encerrar sua conta quando quiser, pela aba Perfil, sem precisar justificar. A exclusão apaga a conta e todos os registros associados, de forma definitiva.",
        },
        {
          type: "paragraph",
          text: "A conta pode ser suspensa ou encerrada em caso de violação relevante destes termos, especialmente tentativa de acesso a dados de outras pessoas. Quando possível, o aviso será prévio.",
        },
      ],
    },
    {
      id: "propriedade",
      heading: "9. Propriedade intelectual",
      blocks: [
        {
          type: "paragraph",
          text: "O nome TirzeFlow, a identidade visual, o código e o desenho das telas pertencem ao desenvolvedor. Estes termos não transferem nenhum desses direitos. Marcas de terceiros mencionadas no aplicativo pertencem aos seus respectivos titulares.",
        },
      ],
    },
    {
      id: "responsabilidade",
      heading: "10. Limitação de responsabilidade",
      blocks: [
        {
          type: "paragraph",
          text: "O aplicativo é fornecido sem garantias de qualquer natureza quanto à exatidão dos cálculos exibidos, à adequação a uma finalidade específica ou à ausência de interrupções.",
        },
        {
          type: "paragraph",
          text: "Na máxima extensão permitida pela legislação brasileira, o desenvolvedor não responde por decisões clínicas tomadas com base no conteúdo do aplicativo, por perda de dados decorrente de exclusão feita por você, nem por danos indiretos ou lucros cessantes.",
        },
        {
          type: "paragraph",
          text: "Nada nestes termos afasta direitos que a lei assegura ao consumidor e que não podem ser limitados por contrato, inclusive os previstos no Código de Defesa do Consumidor.",
        },
      ],
    },
    {
      id: "alteracoes",
      heading: "11. Alterações destes termos",
      blocks: [
        {
          type: "paragraph",
          text: "Estes termos podem ser atualizados. A data da última atualização fica no topo desta página, e mudança relevante é avisada dentro do aplicativo antes de entrar em vigor. Continuar usando o aplicativo depois disso significa aceitar a nova versão; se você não aceitar, pode excluir a conta.",
        },
      ],
    },
    {
      id: "lei",
      heading: "12. Lei aplicável e foro",
      blocks: [
        {
          type: "paragraph",
          text: "Estes termos são regidos pela lei brasileira. Fica eleito o foro do domicílio do usuário para dirimir qualquer controvérsia.",
        },
      ],
    },
    {
      id: "contato",
      heading: "13. Contato",
      blocks: [
        {
          type: "paragraph",
          text: "Dúvidas sobre estes termos ou sobre o aplicativo: guilhermepassarinho@gmail.com.",
        },
      ],
    },
  ],
};
