import { z } from "zod";

export const projectSchema = z.object({
  project_id: z.number(),
  title: z.string(),
  description: z.string().nullable().optional(),
  logomark: z.string().nullable().optional(),
  picture: z.string().nullable().optional(),
  site_url: z.string().url().nullable().optional(),
  repo_url: z.string().url().nullable().optional(),
  page_name: z.string().nullable().optional(),
  page_description: z.string().nullable().optional(),
  background: z.string().startsWith("/").nullable().optional(),
  status: z.enum(["done", "in_progress"]).nullable().optional(),
});

export type ProjectData = z.infer<typeof projectSchema>;

export type ProjectTypes = ProjectData & {
  id: number;
  slug: string;
};

const PLATFORMS = ["GitHub", "Linkedin", "CV"] as const;

export const socialLinkSchema = z.object({
  platform: z.enum(PLATFORMS),
  url: z.string().url(),
});

export const socialSchema = z.object({
  social_links: z.array(socialLinkSchema).nullable().optional(),
});

export type SocialLink = z.infer<typeof socialLinkSchema>;
export type SocialLinksData = z.infer<typeof socialSchema>;