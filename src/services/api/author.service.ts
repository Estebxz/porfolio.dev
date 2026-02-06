import { supabase } from "@lib/supabase";

export async function getAuthors() {
  const { data, error } = await supabase
    .from("author")
    .select(`social_links (platform, url)`);

  if (error) {
    console.error(error);
    throw new Error("Error haciendo fetching de autores");
  }

  return data ?? [];
}
