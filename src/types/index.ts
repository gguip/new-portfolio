// Non-translatable metadata stored in content files
export interface ExperienceMeta {
  id: string;
  company: string;
  url?: string;
  period: string;
  current?: boolean;
  technologies: string[];
}

export interface ProjectMeta {
  id: string;
  url?: string;
  image?: string;
  technologies: string[];
}

// Full types for rendering (metadata + translated fields)
export interface Experience extends ExperienceMeta {
  role: string;
  description: string;
}

export interface Project extends ProjectMeta {
  title: string;
  description: string;
}

export interface Profile {
  name: string;
}

// Legal documents (privacy policy, terms of use).
//
// Unlike the rest of the site, these are stored as whole translated documents in
// `content/legal` instead of `messages/*.json`. A legal text is one long, ordered
// unit: splitting it across message keys makes it impossible to read or review as a
// document, which is exactly what a privacy policy has to be reviewable as.
export type Locale = "pt" | "en" | "es";

export type LegalSlug = "privacy" | "terms";

export type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; title: string; text: string };

export interface LegalSection {
  id: string;
  heading: string;
  blocks: LegalBlock[];
}

export interface LegalDocument {
  slug: LegalSlug;
  /** Product the document governs. Shown as an eyebrow above the title. */
  product: string;
  title: string;
  /** One paragraph, shown before the sections. */
  summary: string;
  /** ISO date (YYYY-MM-DD). Rendered in the reader's locale. */
  updatedAt: string;
  sections: LegalSection[];
}
