# Frontend Portfolio – Development Rules

## Project Overview

This project is a **personal developer portfolio website** inspired by modern minimal portfolio designs.

The goal is to build a **fast, accessible, and elegant portfolio** using:

- Next.js (App Router)
- React
- Tailwind CSS
- TypeScript
- Static content only (no backend)

All data must live **inside the repository**.

The site must prioritize:

- performance
- maintainability
- accessibility
- clean architecture
- high code quality

---

# Tech Stack

Mandatory stack:

- Next.js (latest stable)
- React
- TypeScript
- TailwindCSS
- ESLint
- Prettier

Optional but recommended:

- clsx (conditional classes)
- tailwind-merge
- framer-motion (for subtle animations)
- lucide-react (icons)

Do NOT add unnecessary dependencies.

---

# Architecture

Use a **clean and scalable folder structure**.

```
/app
  layout.tsx
  page.tsx

/components
  ui
  sections
  layout

/content
  experience.ts
  projects.ts
  skills.ts
  profile.ts

/lib
  utils.ts

/styles
  globals.css

/types
  index.ts
```

Rules:

- `components/ui` → reusable primitives
- `components/sections` → page sections (hero, experience, projects)
- `content` → all static data used by the site
- `types` → global TypeScript types
- `lib` → utilities/helpers

---

# Data Strategy (No Backend)

All information must be stored in **TypeScript or JSON files**.

Example:

```
/content/experience.ts
/content/projects.ts
/content/skills.ts
```

Example structure:

```ts
export const experiences = [
  {
    company: "",
    role: "",
    period: "",
    description: "",
    technologies: [],
  },
];
```

Never hardcode content directly inside components.

---

# Component Guidelines

Follow these principles:

### 1. Small components

Components should do **one thing well**.

Bad:

```
Huge 400 line component
```

Good:

```
Hero
Experience
Projects
ProjectCard
Navbar
Footer
```

---

### 2. Reusability

Extract reusable UI elements:

Examples:

- Section
- Container
- Badge
- Button
- Tag

---

### 3. Server vs Client Components

Prefer **Server Components**.

Only use `"use client"` when necessary:

- animations
- state
- event handlers

---

# Styling Rules

Use **TailwindCSS exclusively**.

Rules:

- Avoid custom CSS when possible
- Prefer utility classes
- Use Tailwind design tokens

Spacing scale should be consistent.

Example:

```
py-24
max-w-5xl
mx-auto
```

Avoid inline styles.

---

# Design Principles

The design must follow:

- minimalism
- strong typography
- generous whitespace
- subtle motion

Key elements:

Hero section
Experience timeline
Projects grid
About section
Contact section

Avoid visual clutter.

---

# Animation Rules

Animations must be **subtle and purposeful**.

Allowed:

- fade-in
- slide-up
- hover effects

Avoid:

- excessive motion
- heavy parallax
- distracting effects

Performance is priority.

---

# Accessibility

Accessibility is mandatory.

Rules:

- semantic HTML
- alt text for images
- keyboard navigation
- proper heading hierarchy
- aria attributes when necessary

Test basic accessibility with Lighthouse.

---

# Performance Rules

The website must be **extremely fast**.

Guidelines:

- use Next.js Image component
- avoid large JS bundles
- lazy load heavy components
- minimize client-side code

Target:

Lighthouse score:

Performance: 95+

---

# SEO

Each page must include metadata.

Use:

```
generateMetadata()
```

Include:

- title
- description
- Open Graph tags

---

# Code Quality

Follow these rules strictly.

### Naming

Good:

```
ProjectCard
ExperienceItem
Navbar
```

Bad:

```
component1
testDiv
boxContainer
```

---

### TypeScript

Always type props.

Example:

```ts
type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
};
```

Avoid `any`.

---

# Commit Guidelines

Commits should be clear and atomic.

Examples:

```
feat: add experience section
feat: implement project cards
style: improve hero layout
refactor: extract reusable section component
```

Avoid vague commits.

---

# Code Generation Instructions for Claude

When generating code:

1. Follow the architecture defined above.
2. Prefer reusable components.
3. Use TypeScript types.
4. Keep files small and readable.
5. Avoid unnecessary complexity.
6. Prioritize performance and accessibility.
7. Never introduce a backend.
8. All content must come from `/content`.

If unsure about structure, choose **the simplest scalable solution**.

---

# Final Goal

The final result must be a **professional developer portfolio** that is:

- fast
- elegant
- accessible
- easy to maintain
- visually clean

The codebase must feel like **production-grade frontend engineering**.
