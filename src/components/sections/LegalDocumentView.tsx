import { getTranslations } from "next-intl/server";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { LegalCallout } from "@/components/ui/LegalCallout";
import { LEGAL_PATHS } from "@/content/legal";
import type { LegalBlock, LegalDocument, LegalSlug, Locale } from "@/types";

// The document dates are stored as plain `YYYY-MM-DD`. Parsing them as UTC and
// formatting in UTC keeps the rendered date identical everywhere; parsing without the
// suffix would land on the previous day for readers in negative offsets.
const DATE_LOCALES: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en-GB",
  es: "es-ES",
};

function formatDate(isoDate: string, locale: Locale) {
  return new Intl.DateTimeFormat(DATE_LOCALES[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
}

function Block({ block }: { block: LegalBlock }) {
  if (block.type === "callout") {
    return <LegalCallout title={block.title} text={block.text} />;
  }

  if (block.type === "faq") {
    return (
      <dl className="mt-4 flex flex-col gap-6">
        {block.items.map((item) => (
          <div key={item.question}>
            <dt className="font-semibold text-brand-ice">{item.question}</dt>
            <dd className="mt-2">{item.answer}</dd>
          </div>
        ))}
      </dl>
    );
  }

  if (block.type === "contact") {
    return (
      <p className="mt-4">
        <a
          href={`mailto:${block.email}`}
          className="font-medium text-brand-teal underline underline-offset-4 transition-colors hover:text-brand-mint"
        >
          {block.label}
        </a>
      </p>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 marker:text-brand-mint">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return <p className="mt-4">{block.text}</p>;
}

interface LegalDocumentViewProps {
  document: LegalDocument;
  locale: Locale;
}

export async function LegalDocumentView({
  document,
  locale,
}: LegalDocumentViewProps) {
  const t = await getTranslations("legal");
  const otherSlugs = (Object.keys(LEGAL_PATHS) as LegalSlug[]).filter(
    (slug) => slug !== document.slug
  );

  return (
    <article className="mx-auto max-w-3xl py-16 lg:py-24">
      <Link
        href="/"
        className="group inline-flex items-center gap-2 text-sm font-medium text-brand-ice/60 transition-colors hover:text-brand-teal focus-visible:text-brand-teal"
      >
        <ArrowLeft
          aria-hidden="true"
          className="h-4 w-4 transition-transform group-hover:-translate-x-1"
        />
        {t("back")}
      </Link>

      <header className="mt-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-teal">
          {document.product}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-brand-ice sm:text-5xl">
          {document.title}
        </h1>
        {document.updatedAt ? (
          <p className="mt-4 text-sm text-brand-ice/50">
            {t("updated", { date: formatDate(document.updatedAt, locale) })}
          </p>
        ) : null}
        <p className="mt-6 text-lg leading-relaxed text-brand-ice/80 text-balance">
          {document.summary}
        </p>
      </header>

      <nav aria-labelledby="toc-heading" className="mt-12">
        <h2
          id="toc-heading"
          className="text-sm font-semibold uppercase tracking-widest text-brand-ice/50"
        >
          {t("contents")}
        </h2>
        <ol className="mt-4 flex flex-col gap-2">
          {document.sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-brand-ice/70 transition-colors hover:text-brand-teal focus-visible:text-brand-teal"
              >
                {section.heading}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-16 flex flex-col gap-12 text-brand-ice/70">
        {document.sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-8">
            <h2 className="text-xl font-semibold text-brand-ice">
              {section.heading}
            </h2>
            {section.blocks.map((block, index) => (
              <Block key={index} block={block} />
            ))}
          </section>
        ))}
      </div>

      <footer className="mt-16 border-t border-brand-ice/10 pt-8">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-brand-ice/50">
          <span>{t("seeAlso")}</span>
          {otherSlugs.map((slug) => (
            <Link
              key={slug}
              href={LEGAL_PATHS[slug]}
              className="font-medium text-brand-teal underline underline-offset-4 transition-colors hover:text-brand-mint"
            >
              {t(`documents.${slug}`)}
            </Link>
          ))}
        </p>
      </footer>
    </article>
  );
}
