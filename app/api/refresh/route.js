import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ message: "Token refreshed" });

  res.cookies.set("ACCESS_TOKEN", accessToken, {
    httpOnly: true,
    sameSite: "Lax",
    path: "/",
    maxAge: 60 * 15, // 15 minutes
  });

  return res;
}
