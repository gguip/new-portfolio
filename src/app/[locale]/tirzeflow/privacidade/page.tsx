import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalDocumentView } from "@/components/sections/LegalDocumentView";
import { getLegalDocument } from "@/content/legal";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/types";

type PageProps = { params: Promise<{ locale: string }> };

function isLocale(value: string): value is Locale {
  return (routing.locales as readonly string[]).includes(value);
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const document = getLegalDocument("privacy", locale);
  const title = `${document.title} — ${document.product}`;

  return {
    title,
    description: document.summary,
    openGraph: { title, description: document.summary, type: "article" },
  };
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <LegalDocumentView
      document={getLegalDocument("privacy", locale)}
      locale={locale}
    />
  );
}
