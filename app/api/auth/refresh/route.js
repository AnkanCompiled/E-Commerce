import { setHTTPOnlyCookie } from "@/utils/cookie";
import { createToken, verifyToken } from "@/utils/jwt";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const refreshToken = req.cookies.get("REFRESH_TOKEN")?.value;
    if (!refreshToken) {
      return NextResponse.json(
        { error: "Refresh token is missing" },
        { status: 401 }
      );
    }
    const data = verifyToken(refreshToken);
    const accessToken = createToken(
      {
        userId: data.userId,
        userName: data.userName,
        userAvatar: data.userAvatar,
        emailVerified: data.emailVerified,
      },
      { expiresIn: "15m" }
    );

    const res = NextResponse.json({ message: "Token refreshed" });
    setHTTPOnlyCookie(res, "ACCESS_TOKEN", accessToken);
    return res;
  } catch (error) {
    console.error("Error refreshing token:", error);
    const res = NextResponse.json(
      { error: "Failed to refresh token" },
      { status: 401 }
    );
    res.cookies.delete("REFRESH_TOKEN");
    return res;
  }
}
