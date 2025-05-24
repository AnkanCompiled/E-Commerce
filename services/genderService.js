import { supabase } from "@/configs/supabase";

export async function insertGender(data) {
  try {
    await supabase.from("genders").insert([
      {
        label: data,
      },
    ]);
  } catch (error) {
    console.error(error);
  }
}
