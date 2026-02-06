import { supabase } from "@lib/supabase";

export async function getProjects() {
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

  if (error) {
    console.error(error);
    throw new Error("Error fetching projects");
  }

  return data ?? [];
}
