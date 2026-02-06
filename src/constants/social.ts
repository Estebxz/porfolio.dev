import { getAuthors } from "@api/author.service";
import type { SocialTypes, Platform } from "@type/types";

const CONFIG: Record<string, Platform> = {
  GitHub: {
    tooltip: "Explora mis proyectos y contribuciones",
    color: "hover:border-x-purple-800",
  },
  Linkedin: {
    tooltip: "Visitar mi perfil de Linkedin",
    color: "hover:border-x-cyan-900",
  },
  CV: {
    tooltip: "Todo lo que necesitas saber en menos de 2 páginas",
    color: "hover:border-x-white",
    icon: "arrow-up-right",
  },
};

export async function getSocialPlatform(): Promise<readonly SocialTypes[]> {
  const authors = await getAuthors();
  const author = authors?.[0];

  if (!author?.social_links?.length) return [];

  return author.social_links.map(({ platform, url }) => {
    const config = CONFIG[platform]

    return {
      title: platform,
      url: url,
      label: `Visitar mi perfil de ${platform}`,
      ...config,
    };
  });
}

