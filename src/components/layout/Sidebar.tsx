import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { profile } from "@/content/profile";

export function Sidebar() {
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl w-min">
          <Link href="/">{profile.name}</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-white sm:text-xl">
          {profile.role}
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-brand-ice/80">
          {profile.tagline}
        </p>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            <li>
              <a className="group flex items-center py-3" href="#about">
                <span className="nav-indicator mr-4 h-px w-8 bg-brand-ice/50 transition-all group-hover:w-16 group-hover:bg-brand-mint group-focus-visible:w-16 group-focus-visible:bg-brand-mint motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-brand-ice/50 group-hover:text-brand-mint group-focus-visible:text-brand-mint">
                  About
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#experience">
                <span className="nav-indicator mr-4 h-px w-8 bg-brand-ice/50 transition-all group-hover:w-16 group-hover:bg-brand-mint group-focus-visible:w-16 group-focus-visible:bg-brand-mint motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-brand-ice/50 group-hover:text-brand-mint group-focus-visible:text-brand-mint">
                  Experience
                </span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3" href="#projects">
                <span className="nav-indicator mr-4 h-px w-8 bg-brand-ice/50 transition-all group-hover:w-16 group-hover:bg-brand-mint group-focus-visible:w-16 group-focus-visible:bg-brand-mint motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-brand-ice/50 group-hover:text-brand-mint group-focus-visible:text-brand-mint">
                  Projects
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
            aria-label="GitHub"
          >
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </a>
        </li>
        <li className="text-xs">
          <a
            className="block hover:text-brand-mint transition-colors"
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </a>
        </li>
        <li className="text-xs">
          <a
            className="block hover:text-brand-mint transition-colors"
            href="mailto:example@example.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
          >
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" />
          </a>
        </li>
      </ul>
    </>
  );
}
