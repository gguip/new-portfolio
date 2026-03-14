import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "E-Commerce Platform Redesign",
    description: "A complete overhaul of an e-commerce platform focusing on performance and user experience. Implemented advanced search features, a streamlined checkout process, and dynamic category filtering.",
    url: "https://example.com/ecommerce",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
  },
  {
    id: "proj-2",
    title: "Interactive Dashboard",
    description: "A data visualization dashboard for marketing analytics. Features real-time data updates, customizable widgets, and accessible chart components.",
    url: "https://example.com/dashboard",
    technologies: ["React", "D3.js", "Framer Motion"],
  },
  {
    id: "proj-3",
    title: "Design System Implementation",
    description: "Developed a comprehensive, accessible design system for a suite of enterprise applications. Included comprehensive Storybook documentation.",
    url: "https://example.com/design-system",
    technologies: ["React", "Storybook", "Styled Components", "Radix UI"],
  }
];
