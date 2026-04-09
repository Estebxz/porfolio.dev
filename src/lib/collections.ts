import { getCollection } from "astro:content";
import type { ProjectTypes } from "@type/schemas";
import type { ProjectActions, SocialTypes } from "@type/types";
import { CONFIG } from "@constants/social";
import { BACKGROUNDS } from "@constants/project";

export async function getItems(): Promise<readonly ProjectTypes[]> {
  const entries = await getCollection("projects");
  return entries.map((e) => ({
    ...e.data,
    id: e.data.project_id,
    slug: e.id,
  }));
}

export const getAdjacentProjects = (
  items: readonly Pick<ProjectTypes, "id" | "slug" | "title">[],
  index: number,
) => ({
  prev: index > 0 ? items[index - 1] : null,
  next: index < items.length - 1 ? items[index + 1] : null,
});

export const getProjectActions = (
  site_url?: string,
  repo_url?: string,
): ProjectActions[] =>
  [
    site_url && {
      url: site_url,
      label: "Abrir sitio web",
      tooltip: "Ver el proyecto en acción",
      icon: "arrow-up-right-from-square",
      color: "hover:border-x-white",
    },
    repo_url && {
      url: repo_url,
      label: "Ver repositorio",
      tooltip: "Espiar el código fuente",
      icon: "github",
      color: "hover:border-x-purple-800",
    },
  ].filter(Boolean) as ProjectActions[];

export async function getSocialPlatform(): Promise<readonly SocialTypes[]> {
  const entries = await getCollection("authors");
  const author = entries?.[0]?.data as {
    social_links?: { platform: string; url: string }[];
  };

  if (!author?.social_links?.length) return [];

  return author.social_links.map(({ platform, url }) => {
    const config = CONFIG[platform];

    return {
      title: platform,
      url: url,
      label: `Visitar mi perfil de ${platform}`,
      ...config,
    };
  });
}

export const getBackgrounds = (background: string) => BACKGROUNDS[background];
