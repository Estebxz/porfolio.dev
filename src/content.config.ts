import { defineCollection } from "astro:content";
import { supabase } from "@lib/supabase";
import { STATUS } from "@constants/project";
import { projectSchema, socialSchema } from "@type/schemas";

const projects = defineCollection({
  loader: async () => {
    const { data, error } = await supabase.from("projects").select(`
        id,
        slug,
        title,
        description,
        logomark,
        picture,
        site_url,
        repo_url,
        page_name,
        page_description
      `);
    if (error) throw error;

    return (data ?? []).map((p) => ({
      id: p.slug,
      project_id: p.id,
      title: p.title,
      description: p.description,
      logomark: p.logomark,
      picture: p.picture,
      site_url: p.site_url,
      repo_url: p.repo_url,
      page_name: p.page_name,
      page_description: p.page_description,
      background: p.slug,
      status: STATUS[p.slug],
    }));
  },
  schema: projectSchema,
});

const authors = defineCollection({
  loader: async () => {
    const { data, error } = await supabase
      .from("author")
      .select("id, social_links (platform, url)");

    if (error) throw error;

    return (data ?? [])
      .map((a) => ({
        id: String(a.id),
        social_links: a.social_links,
      }));
  },
  schema: socialSchema,
});

export const collections = { projects, authors };
