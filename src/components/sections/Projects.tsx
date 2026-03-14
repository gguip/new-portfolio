import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { projects } from "@/content/projects";

export async function Projects() {
  const t = await getTranslations("sections.projects");
  const tProj = await getTranslations("projects");

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label={t("ariaLabel")}
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-brand-dark/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-brand-ice lg:sr-only">
          {t("heading")}
        </h2>
      </div>

      <div className="group/list space-y-12">
        {projects.map((project) => {
          const title = tProj(`${project.id}.title`);
          const description = tProj(`${project.id}.description`);

          return (
            <Card key={project.id}>
              {project.image && (
                <div className="mb-3 w-32 overflow-hidden rounded border border-brand-ice/10">
                  <Image
                    src={project.image}
                    alt={title}
                    width={200}
                    height={113}
                    className="w-full object-cover"
                  />
                </div>
              )}

              <div>
                <h3 className="font-medium leading-snug text-brand-ice">
                  <div>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-brand-ice hover:text-brand-mint focus-visible:text-brand-mint group/link text-base"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={title}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {title}
                        {project.url && (
                          <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                        )}
                      </span>
                    </a>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal text-brand-ice/80">
                  {description}
                </p>
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label={t("technologiesAriaLabel")}
                >
                  {project.technologies.map((tech) => (
                    <li className="mr-1.5 mt-2" key={tech}>
                      <Badge>{tech}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
