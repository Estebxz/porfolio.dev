import { getCollection } from "astro:content";

import type { ProjectTypes } from "@type/schemas";

export async function getItems(): Promise<readonly ProjectTypes[]> {
  const entries = await getCollection("projects");
  return entries.map((e) => ({
    ...e.data,
    id: e.data.project_id,
    slug: e.id,
  }));
}

export const BACKGROUNDS: Record<string, string> = {
  data_insights_dyret: "/images/insights.webp",
  codepicture: "/images/code.webp",
  "classify-ai": "/images/classify.webp",
  guardao: "/images/guardao.webp",
  colsof: "/images/colsof.webp",
};

export const STATUS: Record<string, "done" | "in_progress"> = {
  data_insights_dyret: "done",
  codepicture: "in_progress",
  "classify-ai": "done",
  guardao: "in_progress",
  colsof: "in_progress",
};
