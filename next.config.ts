import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// TirzeFlow's legal pages used to live here, under `/<locale>/tirzeflow/<page>`. They moved
// to the app's own site, `tirzeflow.gguip.dev`, where the slugs are translated.
//
// These redirects are permanent and must stay: the published app builds the old URLs by
// hand (`LinksLegais` in the mobile repo) and the App Store and Play listings point at
// them, so an old binary will keep requesting these paths for as long as it is installed.
const TIRZEFLOW_SITE = "https://tirzeflow.gguip.dev";

const TIRZEFLOW_PAGES: Record<string, Record<"pt" | "en" | "es", string>> = {
  privacidade: { pt: "privacidade", en: "privacy", es: "privacidad" },
  termos: { pt: "termos", en: "terms", es: "terminos" },
  suporte: { pt: "suporte", en: "support", es: "soporte" },
  "excluir-conta": { pt: "excluir-conta", en: "delete-account", es: "eliminar-cuenta" },
};

const nextConfig: NextConfig = {
  async redirects() {
    return Object.entries(TIRZEFLOW_PAGES).flatMap(([oldSlug, bySlugLocale]) =>
      (Object.entries(bySlugLocale) as ["pt" | "en" | "es", string][]).map(([locale, newSlug]) => ({
        source: `/${locale}/tirzeflow/${oldSlug}`,
        destination: `${TIRZEFLOW_SITE}/${locale}/${newSlug}/`,
        permanent: true,
      })),
    );
  },
};

export default withNextIntl(nextConfig);
