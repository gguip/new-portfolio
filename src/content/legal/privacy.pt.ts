import { LegalDocument } from "@/types";

export const privacyPt: LegalDocument = {
  slug: "privacy",
  product: "TirzeFlow",
  title: "Política de Privacidade",
  summary:
    "O TirzeFlow é um diário pessoal de tratamento. Ele guarda dados de saúde que você mesmo registra — peso, doses, medidas, sintomas — e essa é a informação mais sensível que um aplicativo pode guardar. Esta política diz exatamente o que é coletado, por quê, com quem é compartilhado e como apagar tudo. Não há publicidade, não há rastreamento e nada é vendido.",
  updatedAt: "2026-10-04",
  sections: [
    {
      id: "controlador",
      heading: "1. Quem é responsável pelos seus dados",
      blocks: [
        {
          type: "paragraph",
          text: "O TirzeFlow é desenvolvido e mantido por Guilherme Passarinho, pessoa física, no Brasil. Para os fins da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), ele é o controlador dos dados pessoais tratados no aplicativo.",
        },
        {
          type: "paragraph",
          text: "Contato para qualquer assunto de privacidade, incluindo o exercício dos seus direitos: suporte@gguip.dev.",
        },
      ],
    },
    {
      id: "dados",
      heading: "2. Que dados o aplicativo coleta",
      blocks: [
        {
          type: "paragraph",
          text: "Os dados abaixo são fornecidos por você ou, no caso do peso, lidos do app Saúde ou do Health Connect quando você liga essa opção. O TirzeFlow não coleta nada em segundo plano e não acessa sua agenda, seus contatos nem sua localização. A câmera só é usada quando você escolhe tirar uma foto de progresso.",
        },
        {
          type: "paragraph",
          text: "Dados de conta, necessários para você entrar:",
        },
        {
          type: "list",
          items: [
            "Nome e endereço de e-mail.",
            "Senha, guardada apenas como hash argon2id — a senha em si nunca é gravada nem trafega em texto no servidor.",
            "Data e hora em que você aceitou os termos de uso e esta política.",
            "Se você entrar com Google ou Apple: o identificador da sua conta naquele provedor e, no caso da Apple, um token de atualização usado exclusivamente para revogar o acesso quando você excluir a conta.",
          ],
        },
        {
          type: "paragraph",
          text: "Dados de perfil, que alimentam os cálculos do aplicativo:",
        },
        {
          type: "list",
          items: [
            "Sexo biológico, data de nascimento e altura.",
            "Nível de atividade física, peso inicial, peso desejado e data de início do tratamento.",
            "Idioma, sistema de unidades, fuso horário e fase do tratamento.",
          ],
        },
        {
          type: "paragraph",
          text: "Registros de saúde, que são o conteúdo do diário:",
        },
        {
          type: "list",
          items: [
            "Aplicações: data e hora, dose em miligramas, local da aplicação, número do lote e observações.",
            "Pesagens: data, peso e a origem do registro (digitado por você ou lido do app Saúde / Health Connect).",
            "Medidas corporais: cintura, quadril, tórax, braço, coxa e percentual de gordura.",
            "Efeitos colaterais: data, tipo, intensidade e observações.",
            "Treinos: data, tipo, duração, percepção de esforço e observações.",
            "Alimentação: refeições com calorias e macronutrientes, e consumo de água.",
            "Fome e pensamentos sobre comida: duas notas de 1 a 5 por dia.",
            "Compras de canetas: data, dose, número de aplicações e, se você informar, o preço pago.",
            "Lembretes que você configurar.",
          ],
        },
        {
          type: "paragraph",
          text: "Dados técnicos, gerados pelo próprio funcionamento da sessão:",
        },
        {
          type: "list",
          items: [
            "Endereço IP e identificação do aplicativo e do sistema operacional, guardados junto de cada sessão ativa. Servem para você poder encerrar sessões e para detectar uso indevido de credenciais.",
            "Registros técnicos do servidor, que usam apenas o seu identificador interno — nunca o seu nome, o seu e-mail ou qualquer dado de saúde.",
            "Relatórios de falha: quando o aplicativo quebra ou o servidor responde com erro interno, um relatório técnico é enviado ao Sentry (seção 6). Ele leva a descrição do erro, a versão do aplicativo, o modelo e o sistema do aparelho e o seu identificador interno.",
          ],
        },
        {
          type: "paragraph",
          text: "Peso lido do app Saúde (iPhone) e do Health Connect (Android):",
        },
        {
          type: "list",
          items: [
            "A leitura vem desligada. Você a liga em Perfil > Saúde, e o sistema pede a sua autorização nesse momento. Você pode desligá-la quando quiser, no mesmo lugar ou nos ajustes do sistema.",
            "O aplicativo pede acesso a um único tipo de dado, o peso, e só para leitura. Ele não lê nenhum outro dado de saúde e nunca grava nada no app Saúde nem no Health Connect.",
            "A leitura acontece com o aplicativo aberto. Vale a primeira pesagem de cada dia, que é gravada na sua conta junto das pesagens digitadas. Um peso digitado por você nunca é substituído por um peso lido.",
            "O peso lido é usado só para mostrar o seu histórico e os cálculos da seção 4. Não é usado para publicidade, não é vendido e não é repassado a terceiros além do serviço de hospedagem da seção 6.",
            "O uso das informações recebidas do Health Connect segue a política de permissões do Health Connect, incluindo os requisitos de Uso Limitado. Os dados obtidos pelo HealthKit seguem as regras da Apple para esse serviço.",
          ],
        },
        {
          type: "paragraph",
          text: "Dados que ficam só no seu aparelho e não são enviados ao servidor:",
        },
        {
          type: "list",
          items: [
            "Fotos de progresso: ficam cifradas (AES-256) no aparelho, com a chave guardada no armazenamento seguro do sistema. Não entram na cópia de segurança do servidor e não acompanham você na troca de aparelho.",
            "Restrições alimentares, trocas do cardápio do dia e o pedido que você escreve para montar o cardápio. Em iPhones com Apple Intelligence, esse pedido é processado no próprio aparelho.",
          ],
        },
      ],
    },
    {
      id: "sensivel",
      heading: "3. Dado sensível de saúde e a sua autorização",
      blocks: [
        {
          type: "paragraph",
          text: "Peso, medidas, dose de medicamento, efeitos colaterais e os registros de fome são dados pessoais sensíveis referentes à saúde, na definição do artigo 5º, inciso II, da LGPD. Eles só são tratados porque você deu consentimento específico e destacado ao criar a conta, e exclusivamente para as finalidades desta política.",
        },
        {
          type: "paragraph",
          text: "Você pode retirar esse consentimento a qualquer momento excluindo a conta dentro do aplicativo, o que apaga todos esses registros. A retirada não desfaz os tratamentos já realizados enquanto o consentimento estava válido, mas encerra qualquer tratamento futuro.",
        },
      ],
    },
    {
      id: "finalidades",
      heading: "4. Para que os dados são usados",
      blocks: [
        {
          type: "list",
          items: [
            "Mostrar a você o seu próprio histórico: evolução de peso, aplicações registradas, medidas, sintomas, treinos, alimentação, fome e compras de canetas.",
            "Calcular os números que o aplicativo exibe — índice de massa corporal, média semanal, metas calóricas e de proteína, faixa de manutenção, próximo local do rodízio de aplicação, estoque de canetas e gasto.",
            "Autenticar você, manter a sessão aberta e proteger a conta contra acesso indevido.",
            "Enviar e-mails estritamente operacionais: o código de verificação do cadastro e o código de redefinição de senha. O TirzeFlow não envia newsletter, promoção nem qualquer comunicação de marketing.",
          ],
        },
      ],
    },
    {
      id: "nao-fazemos",
      heading: "5. O que o TirzeFlow não faz",
      blocks: [
        {
          type: "paragraph",
          text: "Esta seção é tão importante quanto a anterior, e é verificável: o aplicativo não embarca nenhuma biblioteca de análise de uso nem de publicidade. A única ferramenta de terceiros que recebe dados técnicos é o relatório de falhas descrito na seção 6.",
        },
        {
          type: "list",
          items: [
            "Não vende, aluga nem troca seus dados com ninguém.",
            "Não exibe publicidade e não usa seus dados para segmentar anúncios.",
            "Não rastreia você dentro nem fora do aplicativo, e não usa identificadores de publicidade.",
            "Não usa ferramentas de analytics nem de telemetria de uso, e o relatório de falhas é configurado para não capturar o conteúdo das telas nem o que você digita.",
            "Não compartilha nada com plano de saúde, empregador, farmacêutica, seguradora ou empresa de dados.",
            "Não usa seus dados de saúde para treinar modelos de inteligência artificial.",
          ],
        },
      ],
    },
    {
      id: "compartilhamento",
      heading: "6. Com quem os dados são compartilhados",
      blocks: [
        {
          type: "paragraph",
          text: "Apenas com os prestadores de serviço necessários para o aplicativo funcionar, e cada um recebe só o mínimo indispensável:",
        },
        {
          type: "list",
          items: [
            "Amazon Web Services (AWS): hospeda o servidor e o banco de dados, na região de São Paulo, no Brasil. É onde os seus registros ficam guardados.",
            "Resend: envia os e-mails operacionais. Recebe o seu endereço de e-mail e o código de verificação — nenhum dado de saúde.",
            "Sentry: recebe os relatórios de falha do aplicativo e do servidor, em servidores na União Europeia. É configurado para não receber peso, dose, sintomas, e-mail, nome nem o conteúdo das requisições, e para não guardar o endereço IP. O relatório leva o seu identificador interno, que sozinho não diz quem você é.",
            "Google e Apple: apenas se você escolher entrar por uma dessas contas. A autenticação acontece no ambiente deles, e eles não recebem nada do conteúdo do seu diário.",
          ],
        },
        {
          type: "paragraph",
          text: "Fora disso, seus dados só serão divulgados mediante ordem judicial ou requisição de autoridade competente, nos limites da lei.",
        },
      ],
    },
    {
      id: "armazenamento",
      heading: "7. Onde ficam e por quanto tempo",
      blocks: [
        {
          type: "paragraph",
          text: "Os registros da sua conta ficam em servidor localizado no Brasil, em São Paulo. Os relatórios de falha ficam nos servidores do Sentry, na União Europeia. A conexão entre o aplicativo e o servidor é sempre criptografada.",
        },
        {
          type: "paragraph",
          text: "É feita uma cópia de segurança diária, criptografada, guardada por trinta dias e então descartada. Essa cópia existe para recuperar o serviço em caso de falha.",
        },
        {
          type: "paragraph",
          text: "Seus registros são mantidos enquanto a sua conta existir. Ao excluir a conta, eles são apagados imediatamente do banco de dados; as cópias de segurança que ainda os contiverem expiram no prazo de até trinta dias.",
        },
      ],
    },
    {
      id: "seguranca",
      heading: "8. Como os dados são protegidos",
      blocks: [
        {
          type: "list",
          items: [
            "Senhas guardadas com argon2id, o algoritmo recomendado atualmente pela OWASP.",
            "Todo o tráfego entre o aplicativo e o servidor protegido por TLS.",
            "Tokens de sessão guardados no armazenamento seguro do sistema operacional — Keychain no iOS, Keystore no Android — e nunca em arquivo de texto.",
            "Cada consulta ao banco é restrita ao seu identificador, de modo que o servidor não consegue devolver o registro de outra pessoa nem se o identificador do registro for adivinhado.",
            "Cópias de segurança criptografadas, com a chave de leitura mantida fora do servidor.",
          ],
        },
        {
          type: "paragraph",
          text: "Nenhum sistema é imune a incidentes. Se ocorrer um incidente de segurança que possa acarretar risco relevante aos seus direitos, você e a Autoridade Nacional de Proteção de Dados serão comunicados, conforme exige o artigo 48 da LGPD.",
        },
      ],
    },
    {
      id: "direitos",
      heading: "9. Seus direitos",
      blocks: [
        {
          type: "paragraph",
          text: "A LGPD garante a você, entre outros, os direitos de confirmação, acesso, correção, anonimização, portabilidade, eliminação e informação sobre compartilhamento. Dois deles estão implementados diretamente no aplicativo:",
        },
        {
          type: "list",
          items: [
            "Correção: todo registro do diário pode ser editado ou apagado individualmente, a qualquer momento.",
            "Eliminação: a exclusão da conta, feita dentro do aplicativo, apaga tudo.",
          ],
        },
        {
          type: "paragraph",
          text: "Acesso e portabilidade: para receber uma cópia de todos os seus dados, em formato aberto e legível por máquina (JSON), escreva para suporte@gguip.dev a partir do e-mail cadastrado na conta. Para os demais direitos, escreva para o mesmo endereço. A resposta é enviada em até quinze dias.",
        },
      ],
    },
    {
      id: "exclusao",
      heading: "10. Como excluir a sua conta",
      blocks: [
        {
          type: "paragraph",
          text: "No aplicativo, sem precisar entrar em contato com ninguém: abra a aba Perfil, role até o fim da tela e toque em Excluir minha conta. O aplicativo mostra o que será apagado e pede uma confirmação. Se você não tem mais o aplicativo instalado, a página gguip.dev/pt/tirzeflow/excluir-conta explica como pedir a exclusão por e-mail.",
        },
        {
          type: "paragraph",
          text: "A exclusão é definitiva e apaga, em cascata, a conta e todos os registros associados: perfil, aplicações, pesagens, medidas, efeitos colaterais, treinos, refeições, consumo de água, registros de fome, compras de canetas, lembretes e sessões. Não existe exclusão reversível nem período de carência — não há como recuperar os dados depois.",
        },
        {
          type: "paragraph",
          text: "As fotos de progresso e a chave que as protege são apagadas do aparelho em que a exclusão é feita. Desinstalar o aplicativo também as remove.",
        },
        {
          type: "paragraph",
          text: "Se a sua conta tiver sido criada com Sign in with Apple, a autorização concedida à Apple também é revogada nesse mesmo momento.",
        },
      ],
    },
    {
      id: "menores",
      heading: "11. Crianças e adolescentes",
      blocks: [
        {
          type: "paragraph",
          text: "O TirzeFlow não se destina a menores de 18 anos e não coleta intencionalmente dados dessa faixa etária. Se tomarmos conhecimento de que uma conta foi criada por menor de idade, ela será excluída. Se você é responsável e acredita que isso ocorreu, escreva para suporte@gguip.dev.",
        },
      ],
    },
    {
      id: "medico",
      heading: "12. Aviso importante sobre saúde",
      blocks: [
        {
          type: "callout",
          title: "O aplicativo não prescreve",
          text: "O TirzeFlow é um diário. Ele registra o que o seu prescritor orientou. Não sugere dose, não indica quando aumentar ou reduzir, não substitui consulta e não constitui aconselhamento médico. Qualquer decisão sobre o seu tratamento é do profissional de saúde que acompanha você.",
        },
      ],
    },
    {
      id: "mudancas",
      heading: "13. Mudanças nesta política",
      blocks: [
        {
          type: "paragraph",
          text: "Esta política pode ser atualizada. A data da última atualização fica sempre no topo desta página. Mudança que altere de forma relevante o tratamento dos seus dados será avisada dentro do aplicativo antes de entrar em vigor.",
        },
      ],
    },
    {
      id: "contato",
      heading: "14. Contato",
      blocks: [
        {
          type: "paragraph",
          text: "Dúvidas, pedidos ou reclamações sobre privacidade: suporte@gguip.dev. Você também pode apresentar reclamação diretamente à Autoridade Nacional de Proteção de Dados (ANPD).",
        },
      ],
    },
  ],
};
