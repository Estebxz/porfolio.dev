import { supabase } from "@lib/supabase";
import type { BaseProjectTypes } from "@type/types";

let cachedProjects: BaseProjectTypes[] | null;
let cachedAtMs = 0;
let inFlight: Promise<BaseProjectTypes[]> | null;

const CACHE_TTL_MS = 5 * 60 * 1000;

export async function getProjects(): Promise<BaseProjectTypes[]> {
  const now = Date.now();
  if (cachedProjects && now - cachedAtMs < CACHE_TTL_MS) return cachedProjects;

  if (inFlight) return inFlight;

  inFlight = (async () => {
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

    const result = (data ?? []) as BaseProjectTypes[];
    cachedProjects = result;
    cachedAtMs = Date.now();
    return result;
  })().finally(() => {
    inFlight = null;
  });

  return inFlight;
}
