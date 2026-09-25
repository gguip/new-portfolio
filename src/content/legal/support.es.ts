import { LegalDocument } from "@/types";

export const supportEs: LegalDocument = {
  slug: "support",
  product: "TirzeFlow",
  title: "Soporte",
  summary:
    "Cómo resolver lo que más aparece, y cómo escribirme cuando nada de esto sirva. TirzeFlow lo mantiene una sola persona, así que la respuesta no es inmediata — pero la escribe alguien.",
  sections: [
    {
      id: "contacto",
      heading: "Escribirme",
      blocks: [
        {
          type: "paragraph",
          text: "Cuéntame qué pasó, en qué pantalla y qué esperabas que ocurriera. Si puedes, indica el modelo del dispositivo y la versión del sistema — eso suele ahorrar la mitad de las idas y venidas.",
        },
        {
          type: "contact",
          label: "suporte@gguip.dev",
          email: "suporte@gguip.dev",
        },
        {
          type: "paragraph",
          text: "Respondo en un máximo de dos días hábiles. No envíes capturas con peso, dosis o síntomas si no hace falta: para identificar la cuenta basta con el correo registrado.",
        },
      ],
    },
    {
      id: "cuenta",
      heading: "Cuenta y acceso",
      blocks: [
        {
          type: "faq",
          items: [
            {
              question: "¿Cómo elimino mi cuenta?",
              answer:
                "Abre la pestaña Perfil, desplázate hasta el final de la pantalla y pulsa Eliminar cuenta. La aplicación muestra qué se va a borrar y pide confirmación. La eliminación es definitiva y borra en cascada todos los registros: perfil, aplicaciones, pesajes, medidas, efectos secundarios, entrenamientos, comidas, agua y recordatorios. No hay periodo de gracia ni forma de recuperarlos después.",
            },
            {
              question: "¿Cómo exporto mis datos?",
              answer:
                "La aplicación exporta todo en un formato abierto y legible por máquina. Conviene hacerlo antes de eliminar la cuenta, porque la eliminación no tiene vuelta atrás.",
            },
            {
              question: "No recibí el código de verificación.",
              answer:
                "Revisa la carpeta de spam y espera unos minutos: el envío depende de tu proveedor de correo. El código vale 15 minutos; pasado ese plazo, pide otro en la misma pantalla. Si escribiste mal la dirección, vuelve y regístrate de nuevo — la cuenta solo se crea tras la verificación, así que no queda nada bloqueado.",
            },
            {
              question: "Olvidé mi contraseña.",
              answer:
                "Pulsa \"Olvidé mi contraseña\" en la pantalla de inicio de sesión. Llega un código de seis dígitos por correo y la restableces sin salir de la aplicación. El código vale 15 minutos y admite cinco intentos.",
            },
            {
              question: "Creé la cuenta con Apple y no puedo entrar en Android.",
              answer:
                "Sign in with Apple solo existe en iOS, y la cuenta creada así nace sin contraseña. Por ahora no hay forma de acceder a esa misma cuenta desde Android. Si esto te afecta, escríbeme — es el dato que decide si merece la pena construir la salida.",
            },
          ],
        },
      ],
    },
    {
      id: "registros",
      heading: "Registros del diario",
      blocks: [
        {
          type: "faq",
          items: [
            {
              question: "Registré la aplicación en la semana equivocada. ¿Y ahora?",
              answer:
                "La aplicación acepta una administración por semana. Al intentar registrar una segunda en la misma semana, ofrece corregir la que ya existe en lugar de crear otra. Desde el historial de la pantalla de Dosis también puedes editar o borrar cualquier registro.",
            },
            {
              question: "¿Por qué no deja registrar dos aplicaciones en la misma semana?",
              answer:
                "Porque dos aplicaciones en la misma semana son, casi siempre, un error de escritura — y un registro duplicado estropea la serie que la aplicación usa para la media y la tendencia. Si tu protocolo cambió, edita el registro existente.",
            },
            {
              question: "El peso cambió de unidad solo.",
              answer:
                "La aplicación guarda todo en kilogramos y convierte al mostrar, según el sistema de unidades de tu perfil. Si aparece en libras sin que lo hayas pedido, revisa esa opción en Perfil.",
            },
          ],
        },
      ],
    },
    {
      id: "limites",
      heading: "Lo que la aplicación hace, y lo que no",
      blocks: [
        {
          type: "callout",
          title: "La aplicación no prescribe",
          text: "TirzeFlow es un diario. Registra lo que indicó quien te prescribe. No sugiere dosis, no indica cuándo aumentarla o reducirla, no sustituye una consulta y no constituye asesoramiento médico. Cualquier decisión sobre tu tratamiento corresponde al profesional sanitario que te atiende.",
        },
        {
          type: "paragraph",
          text: "Las cifras que calcula la aplicación — índice de masa corporal, objetivo de calorías, objetivo de proteína, media semanal, banda de mantenimiento — proceden de fórmulas nutricionales de uso corriente y son estimaciones informativas. No conocen tu cuadro clínico.",
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
            "iPhone con iOS 13 o posterior para entrar con Apple; las versiones anteriores siguen con correo y contraseña.",
            "Android con Google Play Services para entrar con Google.",
            "Interfaz en portugués, inglés y español, según el idioma del dispositivo — y cambiable en Perfil.",
            "Hace falta conexión para sincronizar: la aplicación habla con el servidor en cada registro.",
          ],
        },
      ],
    },
    {
      id: "privacidad",
      heading: "Privacidad",
      blocks: [
        {
          type: "paragraph",
          text: "Tus registros son datos de salud, y la aplicación los trata como tales: sin publicidad, sin rastreo, sin analítica y sin compartir nada con seguros médicos, empleadores ni empresas de datos. El detalle completo está en la política de privacidad.",
        },
      ],
    },
  ],
};
