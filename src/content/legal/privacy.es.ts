import { LegalDocument } from "@/types";

export const privacyEs: LegalDocument = {
  slug: "privacy",
  product: "TirzeFlow",
  title: "Política de Privacidad",
  summary:
    "TirzeFlow es un diario personal de tratamiento. Guarda datos de salud que tú mismo registras — peso, dosis, medidas, efectos secundarios —, la información más sensible que puede guardar una aplicación. Esta política indica exactamente qué se recopila, para qué, con quién se comparte y cómo borrarlo todo. No hay publicidad, no hay rastreo y nada se vende.",
  updatedAt: "2026-10-04",
  sections: [
    {
      id: "responsable",
      heading: "1. Quién es responsable de tus datos",
      blocks: [
        {
          type: "paragraph",
          text: "TirzeFlow lo desarrolla y mantiene Guilherme Passarinho, persona física residente en Brasil, que actúa como responsable del tratamiento de los datos personales de la aplicación conforme a la Ley General de Protección de Datos de Brasil (Ley 13.709/2018) y a la legislación equivalente.",
        },
        {
          type: "paragraph",
          text: "Contacto para cualquier asunto de privacidad, incluido el ejercicio de tus derechos: suporte@gguip.dev.",
        },
      ],
    },
    {
      id: "datos",
      heading: "2. Qué datos recopila la aplicación",
      blocks: [
        {
          type: "paragraph",
          text: "Los datos siguientes los proporcionas tú o, en el caso del peso, se leen de la aplicación Salud o de Health Connect cuando activas esa opción. TirzeFlow no recopila nada en segundo plano y no accede a tu agenda, tus contactos ni tu ubicación. La cámara solo se usa cuando eliges hacer una foto de progreso.",
        },
        {
          type: "paragraph",
          text: "Datos de cuenta, necesarios para iniciar sesión:",
        },
        {
          type: "list",
          items: [
            "Nombre y dirección de correo electrónico.",
            "Contraseña, almacenada únicamente como hash argon2id — la contraseña en sí nunca se guarda ni circula en texto plano en el servidor.",
            "Fecha y hora en que aceptaste los términos de uso y esta política.",
            "Si inicias sesión con Google o Apple: el identificador de tu cuenta en ese proveedor y, en el caso de Apple, un token de actualización usado exclusivamente para revocar el acceso cuando elimines la cuenta.",
          ],
        },
        {
          type: "paragraph",
          text: "Datos de perfil, que alimentan los cálculos de la aplicación:",
        },
        {
          type: "list",
          items: [
            "Sexo biológico, fecha de nacimiento y altura.",
            "Nivel de actividad física, peso inicial, peso objetivo y fecha de inicio del tratamiento.",
            "Idioma, sistema de unidades, zona horaria y fase del tratamiento.",
          ],
        },
        {
          type: "paragraph",
          text: "Registros de salud, que son el contenido del diario:",
        },
        {
          type: "list",
          items: [
            "Aplicaciones: fecha y hora, dosis en miligramos, zona de aplicación, número de lote y notas.",
            "Pesajes: fecha, peso y el origen del registro (escrito por ti o leído de la aplicación Salud / Health Connect).",
            "Medidas corporales: cintura, cadera, pecho, brazo, muslo y porcentaje de grasa.",
            "Efectos secundarios: fecha, tipo, intensidad y notas.",
            "Entrenamientos: fecha, tipo, duración, percepción del esfuerzo y notas.",
            "Alimentación: comidas con calorías y macronutrientes, y consumo de agua.",
            "Hambre y pensamientos sobre comida: dos valoraciones de 1 a 5 por día.",
            "Compras de plumas: fecha, dosis, número de aplicaciones y, si lo indicas, el precio pagado.",
            "Los recordatorios que configures.",
          ],
        },
        {
          type: "paragraph",
          text: "Datos técnicos, generados por el propio funcionamiento de la sesión:",
        },
        {
          type: "list",
          items: [
            "Dirección IP e identificación de la aplicación y del sistema operativo, guardadas junto a cada sesión activa. Sirven para que puedas cerrar sesiones y para detectar un uso indebido de las credenciales.",
            "Registros técnicos del servidor, que usan solo tu identificador interno — nunca tu nombre, tu correo ni ningún dato de salud.",
            "Informes de fallos: cuando la aplicación falla o el servidor responde con un error interno, se envía un informe técnico a Sentry (sección 6). Incluye la descripción del error, la versión de la aplicación, el modelo y el sistema del dispositivo y tu identificador interno.",
          ],
        },
        {
          type: "paragraph",
          text: "Peso leído de la aplicación Salud (iPhone) y de Health Connect (Android):",
        },
        {
          type: "list",
          items: [
            "La lectura viene desactivada. La activas en Perfil > Salud, y el sistema pide tu autorización en ese momento. Puedes desactivarla cuando quieras, en el mismo lugar o en los ajustes del sistema.",
            "La aplicación pide acceso a un único tipo de dato, el peso, y solo para lectura. No lee ningún otro dato de salud y nunca escribe nada en la aplicación Salud ni en Health Connect.",
            "La lectura ocurre con la aplicación abierta. Cuenta el primer pesaje de cada día, que se guarda en tu cuenta junto a los pesajes escritos por ti. Un peso escrito por ti nunca se sustituye por uno leído.",
            "El peso leído se usa solo para mostrar tu historial y los cálculos de la sección 4. No se usa para publicidad, no se vende y no se cede a terceros más allá del servicio de alojamiento de la sección 6.",
            "El uso de la información recibida de Health Connect cumple la política de permisos de Health Connect, incluidos los requisitos de Uso Limitado. Los datos obtenidos mediante HealthKit siguen las normas de Apple para ese servicio.",
          ],
        },
        {
          type: "paragraph",
          text: "Datos que se quedan solo en tu dispositivo y no se envían al servidor:",
        },
        {
          type: "list",
          items: [
            "Fotos de progreso: se guardan cifradas (AES-256) en el dispositivo, con la clave en el almacenamiento seguro del sistema. No forman parte de la copia de seguridad del servidor y no te acompañan al cambiar de dispositivo.",
            "Restricciones alimentarias, los cambios del menú del día y la petición que escribes para montar el menú. En iPhones con Apple Intelligence, esa petición se procesa en el propio dispositivo.",
          ],
        },
      ],
    },
    {
      id: "sensible",
      heading: "3. Datos sensibles de salud y tu consentimiento",
      blocks: [
        {
          type: "paragraph",
          text: "El peso, las medidas, la dosis del medicamento, los efectos secundarios y los registros de hambre son datos personales sensibles relativos a la salud. Solo se tratan porque diste un consentimiento específico y destacado al crear la cuenta, y exclusivamente para las finalidades de esta política.",
        },
        {
          type: "paragraph",
          text: "Puedes retirar ese consentimiento en cualquier momento eliminando la cuenta dentro de la aplicación, lo que borra todos esos registros. La retirada no deshace los tratamientos ya realizados mientras el consentimiento era válido, pero pone fin a cualquier tratamiento futuro.",
        },
      ],
    },
    {
      id: "finalidades",
      heading: "4. Para qué se usan los datos",
      blocks: [
        {
          type: "list",
          items: [
            "Mostrarte tu propio historial: evolución del peso, aplicaciones registradas, medidas, efectos secundarios, entrenamientos, alimentación, hambre y compras de plumas.",
            "Calcular las cifras que muestra la aplicación — índice de masa corporal, media semanal, objetivos de calorías y de proteína, banda de mantenimiento, la siguiente zona de la rotación de aplicación, existencias de plumas y gasto.",
            "Autenticarte, mantener la sesión abierta y proteger la cuenta frente a accesos indebidos.",
            "Enviar correos estrictamente operativos: el código de verificación del registro y el código de restablecimiento de contraseña. TirzeFlow no envía boletines, promociones ni comunicación de marketing alguna.",
          ],
        },
      ],
    },
    {
      id: "lo-que-no-hacemos",
      heading: "5. Lo que TirzeFlow no hace",
      blocks: [
        {
          type: "paragraph",
          text: "Esta sección importa tanto como la anterior, y es verificable: la aplicación no incorpora ninguna biblioteca de analítica de uso ni de publicidad. La única herramienta de terceros que recibe datos técnicos es el informe de fallos descrito en la sección 6.",
        },
        {
          type: "list",
          items: [
            "No vende, alquila ni intercambia tus datos con nadie.",
            "No muestra publicidad y no usa tus datos para segmentar anuncios.",
            "No te rastrea dentro ni fuera de la aplicación, y no usa identificadores publicitarios.",
            "No usa herramientas de analítica ni de telemetría de uso, y el informe de fallos está configurado para no capturar el contenido de las pantallas ni lo que escribes.",
            "No comparte nada con seguros médicos, empleadores, farmacéuticas, aseguradoras ni empresas de datos.",
            "No usa tus datos de salud para entrenar modelos de inteligencia artificial.",
          ],
        },
      ],
    },
    {
      id: "comparticion",
      heading: "6. Con quién se comparten los datos",
      blocks: [
        {
          type: "paragraph",
          text: "Solo con los proveedores necesarios para que la aplicación funcione, y cada uno recibe lo mínimo indispensable:",
        },
        {
          type: "list",
          items: [
            "Amazon Web Services (AWS): aloja el servidor y la base de datos, en la región de São Paulo, en Brasil. Es donde se guardan tus registros.",
            "Resend: envía los correos operativos. Recibe tu dirección de correo y el código de verificación — ningún dato de salud.",
            "Sentry: recibe los informes de fallos de la aplicación y del servidor, en servidores de la Unión Europea. Está configurado para no recibir peso, dosis, efectos secundarios, correo, nombre ni el contenido de las peticiones, y para no guardar la dirección IP. El informe lleva tu identificador interno, que por sí solo no dice quién eres.",
            "Google y Apple: solo si eliges iniciar sesión con una de esas cuentas. La autenticación ocurre en su entorno y no reciben nada del contenido de tu diario.",
          ],
        },
        {
          type: "paragraph",
          text: "Fuera de eso, tus datos solo se divulgarán por orden judicial o requerimiento de autoridad competente, dentro de los límites de la ley.",
        },
      ],
    },
    {
      id: "almacenamiento",
      heading: "7. Dónde se guardan y durante cuánto tiempo",
      blocks: [
        {
          type: "paragraph",
          text: "Los registros de tu cuenta residen en un servidor situado en Brasil, en São Paulo. Los informes de fallos residen en los servidores de Sentry, en la Unión Europea. La conexión entre la aplicación y el servidor siempre está cifrada.",
        },
        {
          type: "paragraph",
          text: "Se realiza una copia de seguridad diaria, cifrada, conservada durante treinta días y después descartada. Existe para restablecer el servicio en caso de fallo.",
        },
        {
          type: "paragraph",
          text: "Tus registros se conservan mientras exista tu cuenta. Al eliminarla se borran de inmediato de la base de datos; las copias de seguridad que aún los contengan expiran en un plazo máximo de treinta días.",
        },
      ],
    },
    {
      id: "seguridad",
      heading: "8. Cómo se protegen los datos",
      blocks: [
        {
          type: "list",
          items: [
            "Contraseñas almacenadas con argon2id, el algoritmo recomendado actualmente por OWASP.",
            "Todo el tráfico entre la aplicación y el servidor protegido con TLS.",
            "Tokens de sesión guardados en el almacenamiento seguro del sistema operativo — Keychain en iOS, Keystore en Android — y nunca en un archivo de texto.",
            "Cada consulta a la base de datos está restringida a tu identificador, de modo que el servidor no puede devolver el registro de otra persona aunque se adivine el identificador del registro.",
            "Copias de seguridad cifradas, con la clave de lectura fuera del servidor.",
          ],
        },
        {
          type: "paragraph",
          text: "Ningún sistema es inmune a incidentes. Si ocurre un incidente de seguridad que pueda suponer un riesgo relevante para tus derechos, se te comunicará a ti y a la autoridad brasileña de protección de datos (ANPD), como exige la ley.",
        },
      ],
    },
    {
      id: "derechos",
      heading: "9. Tus derechos",
      blocks: [
        {
          type: "paragraph",
          text: "Tienes, entre otros, los derechos de confirmación, acceso, rectificación, anonimización, portabilidad, supresión e información sobre la comunicación de datos. Dos de ellos están implementados directamente en la aplicación:",
        },
        {
          type: "list",
          items: [
            "Rectificación: los datos del perfil y la aplicación de la semana en curso pueden corregirse en la aplicación. Para corregir o borrar otro registro concreto, escribe a suporte@gguip.dev desde el correo registrado en la cuenta.",
            "Supresión: eliminar la cuenta, desde dentro de la aplicación, lo borra todo.",
          ],
        },
        {
          type: "paragraph",
          text: "Acceso y portabilidad: para recibir una copia de todos tus datos, en un formato abierto y legible por máquina (JSON), escribe a suporte@gguip.dev desde el correo registrado en la cuenta. Para los demás derechos, escribe a la misma dirección. La respuesta se envía en un plazo de quince días.",
        },
      ],
    },
    {
      id: "eliminacion",
      heading: "10. Cómo eliminar tu cuenta",
      blocks: [
        {
          type: "paragraph",
          text: "En la aplicación, sin necesidad de contactar con nadie: abre la pestaña Perfil, desplázate hasta el final de la pantalla y pulsa Eliminar mi cuenta. La aplicación muestra qué se va a borrar y pide una confirmación. Si ya no tienes la aplicación instalada, la página gguip.dev/es/tirzeflow/excluir-conta explica cómo pedir la eliminación por correo.",
        },
        {
          type: "paragraph",
          text: "La eliminación es definitiva y borra en cascada la cuenta y todos los registros asociados: perfil, aplicaciones, pesajes, medidas, efectos secundarios, entrenamientos, comidas, consumo de agua, registros de hambre, compras de plumas, recordatorios y sesiones. No hay borrado reversible ni periodo de gracia: después no se pueden recuperar los datos.",
        },
        {
          type: "paragraph",
          text: "Las fotos de progreso y la clave que las protege se borran del dispositivo en el que se hace la eliminación. Desinstalar la aplicación también las elimina.",
        },
        {
          type: "paragraph",
          text: "Si tu cuenta se creó con Sign in with Apple, la autorización concedida a Apple se revoca en ese mismo momento.",
        },
      ],
    },
    {
      id: "menores",
      heading: "11. Niños y adolescentes",
      blocks: [
        {
          type: "paragraph",
          text: "TirzeFlow no está dirigida a menores de 18 años y no recopila intencionadamente datos de ese grupo de edad. Si sabemos que una cuenta fue creada por un menor, se eliminará. Si eres madre, padre o tutor y crees que ha ocurrido, escribe a suporte@gguip.dev.",
        },
      ],
    },
    {
      id: "medico",
      heading: "12. Aviso importante sobre salud",
      blocks: [
        {
          type: "callout",
          title: "La aplicación no prescribe",
          text: "TirzeFlow es un diario. Registra lo que indicó quien te prescribe. No sugiere dosis, no indica cuándo aumentarla o reducirla, no sustituye una consulta y no constituye asesoramiento médico. Cualquier decisión sobre tu tratamiento corresponde al profesional sanitario que te atiende.",
        },
      ],
    },
    {
      id: "cambios",
      heading: "13. Cambios en esta política",
      blocks: [
        {
          type: "paragraph",
          text: "Esta política puede actualizarse. La fecha de la última actualización siempre está en la parte superior de esta página. Todo cambio que afecte de forma relevante al tratamiento de tus datos se avisará dentro de la aplicación antes de entrar en vigor.",
        },
      ],
    },
    {
      id: "contacto",
      heading: "14. Contacto",
      blocks: [
        {
          type: "paragraph",
          text: "Dudas, solicitudes o reclamaciones sobre privacidad: suporte@gguip.dev. También puedes reclamar directamente ante la Autoridad Nacional de Protección de Datos de Brasil (ANPD).",
        },
      ],
    },
  ],
};
