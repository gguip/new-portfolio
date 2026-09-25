import { LegalDocument } from "@/types";

export const deletionEs: LegalDocument = {
  slug: "deletion",
  product: "TirzeFlow",
  title: "Eliminar cuenta",
  summary:
    "Cómo eliminar tu cuenta de TirzeFlow y todo lo que guarda: desde la aplicación, o por correo si ya no la tienes instalada.",
  updatedAt: "2026-09-25",
  sections: [
    {
      id: "en-la-app",
      heading: "Desde la aplicación",
      blocks: [
        {
          type: "paragraph",
          text: "Abre la pestaña Perfil, desplázate hasta el final y toca Eliminar mi cuenta. La aplicación muestra lo que se eliminará y pide confirmación. La cuenta se elimina en el acto.",
        },
      ],
    },
    {
      id: "por-correo",
      heading: "Sin la aplicación instalada",
      blocks: [
        {
          type: "paragraph",
          text: "Escribe a la dirección de abajo pidiendo la eliminación. Envíalo desde el correo registrado en la cuenta: así se confirma que la solicitud es tuya. Las solicitudes desde otra dirección no se atienden, para que nadie pueda eliminar la cuenta de otra persona.",
        },
        {
          type: "contact",
          label: "suporte@gguip.dev",
          email: "suporte@gguip.dev",
        },
        {
          type: "paragraph",
          text: "La solicitud se atiende en un plazo de 15 días, y recibes la confirmación por correo.",
        },
      ],
    },
    {
      id: "que-se-elimina",
      heading: "Qué se elimina",
      blocks: [
        {
          type: "list",
          items: [
            "La cuenta: nombre, correo y contraseña.",
            "El perfil y todos los registros: aplicaciones, pesajes, medidas, efectos secundarios, entrenamientos, comidas, agua y recordatorios.",
            "El vínculo con Apple, si la cuenta se creó con ella: se revoca el acceso de la aplicación a tu ID de Apple.",
          ],
        },
        {
          type: "paragraph",
          text: "Los datos se borran de la base de datos en el acto, y la eliminación no tiene vuelta atrás: no hay período de gracia ni forma de recuperarlos. Las copias de seguridad diarias, cifradas, que aún los contengan expiran en un plazo máximo de treinta días.",
        },
      ],
    },
  ],
};
