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
