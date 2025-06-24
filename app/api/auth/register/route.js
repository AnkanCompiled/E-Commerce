import { NextResponse } from "next/server";
import { insertUserService, registerUser } from "@/services/userService";
import { createToken } from "@/utils/jwt";
import { setHTTPOnlyCookie } from "@/utils/cookie";
import { hashPassword } from "@/utils/pass";

export async function POST(req) {
  try {
    const { name, email, number, password } = await req.json();

    const hashedPassword = await hashPassword(password);

    const user = await insertUserService({
      email: email || null,
      phone_number: number || null,
      name: name,
      password: hashedPassword,
    });

    const tokenData = {
      userId: user.id,
      userName: user.name,
      userAvatar: user.avatar_url,
      emailVerified: user.email_verified,
    };

    const refreshToken = createToken(tokenData, { expiresIn: "30d" });
    const accessToken = createToken(tokenData, { expiresIn: "15m" });

    const res = NextResponse.json(
      { message: "User registered successfully." },
      { status: 201 }
    );
    setHTTPOnlyCookie(res, "REFRESH_TOKEN", refreshToken);
    setHTTPOnlyCookie(res, "ACCESS_TOKEN", accessToken);
    return res;
  } catch (error) {
    console.error("API registration error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error." },
      { status: error.status || 500 }
    );
  }
}
