import { LegalDocument } from "@/types";

export const deletionPt: LegalDocument = {
  slug: "deletion",
  product: "TirzeFlow",
  title: "Excluir conta",
  summary:
    "Como apagar a sua conta do TirzeFlow e tudo o que ela guarda — pelo app, ou por e-mail se você não tem mais o app instalado.",
  updatedAt: "2026-09-25",
  sections: [
    {
      id: "pelo-app",
      heading: "Pelo app",
      blocks: [
        {
          type: "paragraph",
          text: "Abra a aba Perfil, role até o fim da tela e toque em Excluir minha conta. O app mostra o que será apagado e pede confirmação. A conta é apagada na hora.",
        },
      ],
    },
    {
      id: "por-email",
      heading: "Sem o app instalado",
      blocks: [
        {
          type: "paragraph",
          text: "Escreva para o endereço abaixo pedindo a exclusão. Envie a partir do e-mail cadastrado na conta: é assim que se confirma que o pedido é seu. Pedido vindo de outro endereço não é atendido, para ninguém apagar a conta de outra pessoa.",
        },
        {
          type: "contact",
          label: "suporte@gguip.dev",
          email: "suporte@gguip.dev",
        },
        {
          type: "paragraph",
          text: "O pedido é atendido em até 15 dias, e você recebe a confirmação por e-mail.",
        },
      ],
    },
    {
      id: "o-que-e-apagado",
      heading: "O que é apagado",
      blocks: [
        {
          type: "list",
          items: [
            "A conta: nome, e-mail e senha.",
            "O perfil e todos os registros: aplicações, pesagens, medidas, efeitos colaterais, treinos, refeições, água e lembretes.",
            "O vínculo com a Apple, quando a conta foi criada com ela: o acesso do app ao seu ID Apple é revogado.",
          ],
        },
        {
          type: "paragraph",
          text: "Nada é guardado depois da exclusão: não há período de carência, cópia de retenção nem como recuperar. Se quiser os seus dados, exporte pelo app antes de excluir.",
        },
      ],
    },
  ],
};
