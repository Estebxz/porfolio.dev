import type { ProjectTypes } from "@type/types";
import { getProjects } from "@api/project.service";

const BACKGROUNDS: Record<string, string> = {
  "spotify_clone": "/images/spotify.webp",
  "codepicture": "/images/code.webp",
  "classify-ai": "/images/classify.webp",
  "data_insights_dyret": "/images/insights.webp",
};

export async function getItems(): Promise<readonly ProjectTypes[]> {
  const projects = await getProjects();

  return projects.map((p) => ({
    ...p,
    background: BACKGROUNDS[p.slug],
  }));
}
