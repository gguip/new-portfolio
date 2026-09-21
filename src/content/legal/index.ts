import { LegalDocument, LegalSlug, Locale } from "@/types";
import { privacyEn } from "./privacy.en";
import { privacyEs } from "./privacy.es";
import { privacyPt } from "./privacy.pt";
import { supportEn } from "./support.en";
import { supportEs } from "./support.es";
import { supportPt } from "./support.pt";
import { termsEn } from "./terms.en";
import { termsEs } from "./terms.es";
import { termsPt } from "./terms.pt";

// The registry is fully indexed by slug and locale, so a missing translation is a
// compile error rather than a page that silently falls back to Portuguese. A legal
// document shown in the wrong language is not a cosmetic defect: consent has to be
// given in a language the person reads.
const documents: Record<LegalSlug, Record<Locale, LegalDocument>> = {
  privacy: { pt: privacyPt, en: privacyEn, es: privacyEs },
  terms: { pt: termsPt, en: termsEn, es: termsEs },
  support: { pt: supportPt, en: supportEn, es: supportEs },
};

// Paths are not translated: the routes are the same in all three languages and only the
// locale prefix changes. The app links to these exact paths (`LinksLegais` in the mobile
// repo builds them by hand), so renaming one is a breaking change for a shipped binary.
export const LEGAL_PATHS: Record<LegalSlug, string> = {
  privacy: "/tirzeflow/privacidade",
  terms: "/tirzeflow/termos",
  support: "/tirzeflow/suporte",
};

export function getLegalDocument(
  slug: LegalSlug,
  locale: Locale
): LegalDocument {
  return documents[slug][locale];
}
