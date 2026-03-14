import { Github, Linkedin, Mail } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { profile } from "@/content/profile";

export async function Sidebar() {
  const tNav = await getTranslations("nav");
  const tSocial = await getTranslations("social");
  const tProfile = await getTranslations("profile");

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl w-min">
          <Link href="/">{profile.name}</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-white sm:text-xl">
          {tProfile("role")}
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-brand-ice/80">
          {tProfile("tagline")}
        </p>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            <li>
              <a className="group flex items-center py-3" href="#about">
                <span className="nav-indicator mr-4 h-px w-8 bg-brand-ice/50 transition-all group-hover:w-16 group-hover:bg-brand-mint group-focus-visible:w-16 group-focus-visible:bg-brand-mint motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-brand-ice/50 group-hover:text-brand-mint group-focus-visible:text-brand-mint">
                  {tNav("about")}
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#experience">
                <span className="nav-indicator mr-4 h-px w-8 bg-brand-ice/50 transition-all group-hover:w-16 group-hover:bg-brand-mint group-focus-visible:w-16 group-focus-visible:bg-brand-mint motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-brand-ice/50 group-hover:text-brand-mint group-focus-visible:text-brand-mint">
                  {tNav("experience")}
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#projects">
                <span className="nav-indicator mr-4 h-px w-8 bg-brand-ice/50 transition-all group-hover:w-16 group-hover:bg-brand-mint group-focus-visible:w-16 group-focus-visible:bg-brand-mint motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-brand-ice/50 group-hover:text-brand-mint group-focus-visible:text-brand-mint">
                  {tNav("projects")}
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
        <li className="text-xs">
          <a
            className="block hover:text-brand-mint transition-colors"
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label={tSocial("github")}
          >
            <span className="sr-only">{tSocial("github")}</span>
            <Github className="h-6 w-6" />
          </a>
        </li>
        <li className="text-xs">
          <a
            className="block hover:text-brand-mint transition-colors"
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label={tSocial("linkedin")}
          >
            <span className="sr-only">{tSocial("linkedin")}</span>
            <Linkedin className="h-6 w-6" />
          </a>
        </li>
        <li className="text-xs">
          <a
            className="block hover:text-brand-mint transition-colors"
            href="mailto:example@example.com"
            target="_blank"
            rel="noreferrer"
            aria-label={tSocial("email")}
          >
            <span className="sr-only">{tSocial("email")}</span>
            <Mail className="h-6 w-6" />
          </a>
        </li>
      </ul>
    </>
  );
}
