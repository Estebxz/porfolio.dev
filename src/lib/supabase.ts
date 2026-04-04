import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.SUPABASE_URL;
const key = import.meta.env.SUPABASE_ANON_KEY;

if (!url || !key) {
  throw new Error("se requieren las variables de entorno SUPABASE_URL y SUPABASE_ANON_KEY");
}

export const supabase = createClient(url, key);