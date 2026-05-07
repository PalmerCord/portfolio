import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { liveSites } from "@/data/liveSites";
import type { Project, ProjectFrontmatter } from "@/types/project";

const projectsDirectory = path.join(process.cwd(), "content", "projects");

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function assertFrontmatter(
  frontmatter: unknown,
  fileName: string
): asserts frontmatter is ProjectFrontmatter {
  if (!frontmatter || typeof frontmatter !== "object") {
    throw new Error(`Invalid frontmatter object in ${fileName}`);
  }

  const source = frontmatter as Record<string, unknown>;

  const requiredKeys: Array<keyof ProjectFrontmatter> = [
    "title",
    "url",
    "screenshot",
    "industry",
    "tech",
    "year",
    "featured",
    "showInPersonal",
    "showInAgency",
    "iframeAllowed",
  ];

  for (const key of requiredKeys) {
    if (!(key in source)) {
      throw new Error(`Missing frontmatter key \"${key}\" in ${fileName}`);
    }
  }

  if (typeof source.title !== "string") {
    throw new Error(`Invalid frontmatter \"title\" in ${fileName}`);
  }

  if (typeof source.url !== "string") {
    throw new Error(`Invalid frontmatter \"url\" in ${fileName}`);
  }

  if (typeof source.screenshot !== "string") {
    throw new Error(`Invalid frontmatter \"screenshot\" in ${fileName}`);
  }

  if (!isStringArray(source.industry)) {
    throw new Error(`Invalid frontmatter \"industry\" in ${fileName}`);
  }

  if (!isStringArray(source.tech)) {
    throw new Error(`Invalid frontmatter \"tech\" in ${fileName}`);
  }

  if (typeof source.year !== "number") {
    throw new Error(`Invalid frontmatter \"year\" in ${fileName}`);
  }

  if (typeof source.featured !== "boolean") {
    throw new Error(`Invalid frontmatter \"featured\" in ${fileName}`);
  }

  if (typeof source.showInPersonal !== "boolean") {
    throw new Error(`Invalid frontmatter \"showInPersonal\" in ${fileName}`);
  }

  if (typeof source.showInAgency !== "boolean") {
    throw new Error(`Invalid frontmatter \"showInAgency\" in ${fileName}`);
  }

  if (typeof source.iframeAllowed !== "boolean") {
    throw new Error(`Invalid frontmatter \"iframeAllowed\" in ${fileName}`);
  }
}

function fileNameToSlug(fileName: string): string {
  return fileName.replace(/\.mdx$/, "");
}

async function getProjectFileBySlug(slug: string): Promise<string> {
  const mdxPath = path.join(projectsDirectory, `${slug}.mdx`);
  return fs.readFile(mdxPath, "utf8");
}

function normalizeProjectUrl(url: string): string {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");
    const pathname = parsed.pathname.replace(/\/+$/, "");
    return `${host}${pathname}`.toLowerCase();
  } catch {
    return url.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/+$/, "").toLowerCase();
  }
}

export async function getProjects(): Promise<Project[]> {
  const fileNames = await fs.readdir(projectsDirectory);
  const mdxFiles = fileNames.filter((fileName) => fileName.endsWith(".mdx"));

  const mdxProjects = await Promise.all(
    mdxFiles.map(async (fileName) => {
      const raw = await fs.readFile(path.join(projectsDirectory, fileName), "utf8");
      const { data, content } = matter(raw);
      const frontmatter = data;

      assertFrontmatter(frontmatter, fileName);

      return {
        ...frontmatter,
        slug: fileNameToSlug(fileName),
        content,
      } satisfies Project;
    })
  );

  const existingUrls = new Set(mdxProjects.map((project) => normalizeProjectUrl(project.url)));
  const importedProjects = liveSites.filter(
    (project) => !existingUrls.has(normalizeProjectUrl(project.url))
  );

  return [...mdxProjects, ...importedProjects].sort((a, b) => b.year - a.year);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const raw = await getProjectFileBySlug(slug);
    const { data, content } = matter(raw);
    const frontmatter = data;

    assertFrontmatter(frontmatter, `${slug}.mdx`);

    return {
      ...frontmatter,
      slug,
      content,
    } satisfies Project;
  } catch {
    return liveSites.find((project) => project.slug === slug) ?? null;
  }
}
