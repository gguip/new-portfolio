export interface Experience {
  id: string;
  role: string;
  company: string;
  url?: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  url?: string;
  image?: string;
  technologies: string[];
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  about: string[];
}
