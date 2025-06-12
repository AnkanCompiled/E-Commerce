import { supabase } from "@/configs/supabase";

export async function insertUserService(data) {
  try {
    const { data: user, error } = await supabase
      .from("users")
      .insert([data])
      .select("*")
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

export async function findUserService(data) {
  try {
    const { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq(data.type, data.value)
      .single();

    if (error) {
      throw error;
    }
    return user;
  } catch (error) {
    console.error("Error finding user:", error);
    return { error: error.message };
  }
}
