import type { ProjectTypes } from "@type/types";
import { getProjects } from "@api/project.service";

const BACKGROUNDS: Record<string, string> = {
  "data_insights_dyret": "/images/insights.webp",
  "codepicture": "/images/code.webp",
  "classify-ai": "/images/classify.webp",
  "guardao": "/images/guardao.webp",
  "colsof": "/images/colsof.webp"
};

const STATUS: Record<string, ProjectTypes["status"]> = {
  "data_insights_dyret": "done",
  "codepicture": "in_progress",
  "classify-ai": "done",
  "guardao": "in_progress",
  "colsof": "in_progress"
}

export async function getItems(): Promise<readonly ProjectTypes[]> {
  const projects = await getProjects();

  return projects.map((p) => ({
    ...p,
    background: BACKGROUNDS[p.slug],
    status: STATUS[p.slug],
  }));
}
