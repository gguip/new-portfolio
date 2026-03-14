import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Senior Frontend Developer",
    company: "Tech Company",
    url: "https://example.com",
    period: "2021 — Present",
    description: "Lead the frontend development of core products. Architected and implemented scalable React applications, drastically improving performance and accessibility. Mentored junior developers and established frontend best practices.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    id: "exp-2",
    role: "Frontend Engineer",
    company: "Digital Agency",
    period: "2018 — 2021",
    description: "Developed engaging and interactive web experiences for various clients. Worked closely with design teams to ensure pixel-perfect implementation and fluid animations.",
    technologies: ["JavaScript", "React", "SCSS", "Framer Motion"],
  },
  {
    id: "exp-3",
    role: "Web Developer",
    company: "Startup Co",
    period: "2016 — 2018",
    description: "Built and maintained responsive websites. Migrated legacy codebases to modern frameworks and optimized load times across all pages.",
    technologies: ["HTML", "CSS", "Vue.js", "PHP"],
  }
];
