import { LegalDocument, LegalSlug, Locale } from "@/types";
import { privacyEn } from "./privacy.en";
import { privacyEs } from "./privacy.es";
import { privacyPt } from "./privacy.pt";
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
};

export function getLegalDocument(
  slug: LegalSlug,
  locale: Locale
): LegalDocument {
  return documents[slug][locale];
}
