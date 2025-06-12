import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const cookieStore = cookies();

    cookieStore.delete("REFRESH_TOKEN");
    cookieStore.delete("ACCESS_TOKEN");

    return NextResponse.json({ message: "Logout successful" }, { status: 200 });
  } catch (error) {
    console.error("Logout failed:", error);
    return NextResponse.json(
      { error: "Unexpected error occurred" },
      { status: 500 }
    );
  }
}
