import { PLATFORMS } from "@constants/social";
import { z } from "zod";

export const projectSchema = z.object({
  project_id: z.number(),
  title: z.string(),
  description: z.string(),
  logomark: z.string().nullish().transform((v) => v ?? ""),
  picture: z.string().nullish().transform((v) => v ?? ""),
  site_url: z.url().nullish().transform((v) => v ?? undefined),
  repo_url: z.url().nullish().transform((v) => v ?? undefined),
  page_name: z.string(),
  page_description: z.string(),
  background: z.string(),
  status: z.enum(["done", "in_progress"]).nullable().optional().default("done")
});

export type ProjectData = z.infer<typeof projectSchema>;

export type ProjectTypes = ProjectData & {
  id: number;
  slug: string;
};

export const socialLinkSchema = z.object({
  platform: z.enum(PLATFORMS),
  url: z.url(),
});

export const socialSchema = z.object({
  social_links: z.array(socialLinkSchema).nullable().optional(),
});

export type SocialLink = z.infer<typeof socialLinkSchema>;
export type SocialLinksData = z.infer<typeof socialSchema>;
