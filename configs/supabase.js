import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabase;

try {
  if (!supabaseUrl) {
    console.error("Supabase URL is not defined.");
    throw new Error("Supabase URL is missing.");
  }
  if (!supabaseKey) {
    console.error("Supabase Key is not defined.");
    throw new Error("Supabase Key is missing.");
  }
  supabase = createClient(supabaseUrl, supabaseKey);
  console.log("Supabase client initialized successfully.");
} catch (error) {
  console.error("Failed to initialize Supabase client:", error.message);
  throw new Error("Supabase client initialization failed: " + error.message);
}

export { supabase };
