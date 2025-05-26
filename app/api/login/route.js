import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { username, password } = body;
  try {
    res.cookie("accessToken", "dummyAccessToken", {
      httpOnly: true,
      sameSite: "Lax",
      path: "/",
    });
    return res;
  } catch (error) {
    console.error("Login failed:", error);
    return NextResponse.json(
      { error: error || "Unexpected Error" },
      { status: error.status || 500 }
    );
  }
}
