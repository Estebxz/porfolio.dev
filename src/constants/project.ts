import insights from "@asset/images/insights.webp";
import code from "@asset/images/code.webp";
import classify from "@asset/images/classify.webp";
import guardao from "@asset/images/guardao.webp";
import colsof from "@asset/images/colsof.webp";

import type { ImageMetadata } from "astro";

export const BACKGROUNDS: Record<string, ImageMetadata> = {
  data_insights_dyret: insights,
  codepicture: code,
  "classify-ai": classify,
  guardao: guardao,
  colsof: colsof,
};

export const STATUS: Record<string, "done" | "in_progress"> = {
  data_insights_dyret: "done",
  codepicture: "in_progress",
  "classify-ai": "done",
  guardao: "in_progress",
  colsof: "in_progress",
};

export const items: { top: string; bottom: string }[] = [
  { top: "40+", bottom: "Repositorios" },
  { top: "1+", bottom: "Año de Experiencia" },
  { top: "BTÁ", bottom: "Colombia" },
];
