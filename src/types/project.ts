export interface ProjectFrontmatter {
  title: string;
  url: string;
  screenshot: string;
  industry: string[];
  tech: string[];
  year: number;
  featured: boolean;
  showInPersonal: boolean;
  showInAgency: boolean;
  iframeAllowed: boolean;
}

export interface Project extends ProjectFrontmatter {
  slug: string;
  content: string;
}
