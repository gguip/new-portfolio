import { getTranslations } from "next-intl/server";
import { SectionContent } from "@/components/ui/SectionContent";

export async function About() {
  const t = await getTranslations("sections.about");
  const tProfile = await getTranslations("profile.about");

  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label={t("ariaLabel")}
    >
      <SectionContent>
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-brand-dark/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-ice">
            {t("heading")}
          </h2>
        </div>

        <div className="flex flex-col gap-4 text-brand-ice/80">
          <p className="leading-relaxed">{tProfile("p1")}</p>
          <p className="leading-relaxed">{tProfile("p2")}</p>
          <p className="leading-relaxed">{tProfile("p3")}</p>
        </div>
      </SectionContent>
    </section>
  );
}
