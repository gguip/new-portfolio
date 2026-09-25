import { LegalDocument } from "@/types";

export const supportPt: LegalDocument = {
  slug: "support",
  product: "TirzeFlow",
  title: "Suporte",
  summary:
    "Como resolver o que mais aparece, e como falar comigo quando nada aqui resolver. O TirzeFlow é mantido por uma pessoa só, então a resposta não é imediata — mas é de gente.",
  sections: [
    {
      id: "contato",
      heading: "Falar comigo",
      blocks: [
        {
          type: "paragraph",
          text: "Escreva contando o que aconteceu, em que tela, e o que você esperava que acontecesse. Se puder, diga o modelo do aparelho e a versão do sistema — isso costuma cortar metade das idas e vindas.",
        },
        {
          type: "contact",
          label: "suporte@gguip.dev",
          email: "suporte@gguip.dev",
        },
        {
          type: "paragraph",
          text: "Resposta em até dois dias úteis. Não mande print com peso, dose ou sintoma se não precisar: para identificar a conta, o endereço de e-mail cadastrado basta.",
        },
      ],
    },
    {
      id: "conta",
      heading: "Conta e acesso",
      blocks: [
        {
          type: "faq",
          items: [
            {
              question: "Como excluo minha conta?",
              answer:
                "Abra a aba Perfil, role até o fim da tela e toque em Excluir conta. O app mostra o que será apagado e pede confirmação. A exclusão é definitiva e apaga em cascata todos os registros — perfil, aplicações, pesagens, medidas, efeitos colaterais, treinos, refeições, água e lembretes. Não há período de carência nem como recuperar depois.",
            },
            {
              question: "Como exporto meus dados?",
              answer:
                "O app exporta tudo em formato aberto, legível por máquina. Vale fazer isso antes de excluir a conta, porque a exclusão não tem volta.",
            },
            {
              question: "Não recebi o código de verificação.",
              answer:
                "Confira a caixa de spam e espere alguns minutos: o envio depende do seu provedor de e-mail. O código vale 15 minutos; passado esse prazo, peça outro na própria tela. Se o e-mail estiver digitado errado, volte e cadastre de novo — a conta só é criada depois da verificação, então não fica nada preso.",
            },
            {
              question: "Esqueci minha senha.",
              answer:
                "Toque em \"Esqueci minha senha\" na tela de entrada. Chega um código de seis dígitos por e-mail e você redefine sem sair do app. O código vale 15 minutos e aceita cinco tentativas.",
            },
            {
              question: "Criei a conta com a Apple e não consigo entrar no Android.",
              answer:
                "O Sign in with Apple só existe no iOS, e a conta criada por ele nasce sem senha. Por enquanto não há como acessar essa mesma conta pelo Android. Se isso for um problema para você, me escreva — é a informação que decide se vale construir a saída.",
            },
          ],
        },
      ],
    },
    {
      id: "registros",
      heading: "Registros do diário",
      blocks: [
        {
          type: "faq",
          items: [
            {
              question: "Registrei a aplicação na semana errada. E agora?",
              answer:
                "O app aceita uma aplicação por semana. Ao tentar registrar a segunda na mesma semana, ele oferece corrigir a que já existe em vez de criar outra. Pelo histórico da tela de Dose você também edita ou apaga qualquer registro.",
            },
            {
              question: "Por que o app não deixa registrar duas aplicações na mesma semana?",
              answer:
                "Porque duas aplicações na mesma semana são, quase sempre, erro de digitação — e um registro duplicado estraga a série que o app usa para calcular média e tendência. Se o seu protocolo mudou, edite o registro existente.",
            },
            {
              question: "O peso mudou de unidade sozinho.",
              answer:
                "O app guarda tudo em quilos e converte na exibição, conforme o sistema de unidades do seu perfil. Se estiver mostrando libras sem você ter pedido, confira essa opção no Perfil.",
            },
          ],
        },
      ],
    },
    {
      id: "limites",
      heading: "O que o app faz, e o que não faz",
      blocks: [
        {
          type: "callout",
          title: "O aplicativo não prescreve",
          text: "O TirzeFlow é um diário. Ele registra o que o seu prescritor orientou. Não sugere dose, não indica quando aumentar ou reduzir, não substitui consulta e não constitui aconselhamento médico. Qualquer decisão sobre o seu tratamento é do profissional de saúde que acompanha você.",
        },
        {
          type: "paragraph",
          text: "Os números que o app calcula — índice de massa corporal, meta calórica, meta de proteína, média semanal, faixa de manutenção — vêm de fórmulas nutricionais de uso corrente e são estimativas informativas. Eles não conhecem o seu quadro clínico.",
        },
      ],
    },
    {
      id: "requisitos",
      heading: "Requisitos e idiomas",
      blocks: [
        {
          type: "list",
          items: [
            "iPhone com iOS 13 ou mais recente para entrar com a Apple; versões anteriores continuam com e-mail e senha.",
            "Android com Google Play Services para entrar com o Google.",
            "Interface em português, inglês e espanhol, seguindo o idioma do aparelho — e trocável no Perfil.",
            "É preciso conexão para sincronizar: o app conversa com o servidor a cada registro.",
          ],
        },
      ],
    },
    {
      id: "privacidade",
      heading: "Privacidade",
      blocks: [
        {
          type: "paragraph",
          text: "Os seus registros são dados de saúde, e o app trata assim: sem publicidade, sem rastreamento, sem analytics e sem compartilhar nada com plano de saúde, empregador ou empresa de dados. O detalhe inteiro está na política de privacidade.",
        },
      ],
    },
  ],
};
