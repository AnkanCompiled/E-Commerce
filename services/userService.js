import { supabase } from "@/configs/supabase";
import { createToken } from "@/utils/jwt";

export async function insertUserService(data) {
  try {
    const { data: user, error } = await supabase
      .from("users")
      .insert([data])
      .select()
      .single();

    if (error) {
      throw error;
    }
    return user;
  } catch (error) {
    console.error("Error inserting user:", error);
    return { error: error.message };
  }
}
