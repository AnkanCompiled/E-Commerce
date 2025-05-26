import { NextResponse } from "next/server";
import { insertUserService, registerUser } from "@/services/userService";
import { createToken } from "@/utils/jwt";

export async function POST(req) {
  try {
    const body = await req.json();

    const result = await insertUserService({
      email: body.email,
      name: body.name,
      password: body.password,
      gender_id: body.gender_id,
      phone_number: body.phone_number,
      avatar_url: body.avatar_url,
      dob: body.dob,
      address: body.address,
    });

    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    const accessToken = createToken({ id: result.id }, { expiresIn: "15m" });

    const refreshToken = createToken({ id: result.id }, { expiresIn: "30d" });

    const res = NextResponse.json(
      { message: "User registered successfully." },
      { status: 201 }
    );
    res.cookies.set("ACCESS_TOKEN", accessToken, {
      httpOnly: true,
      sameSite: "Lax",
      path: "/",
      maxAge: 60 * 15, // 15 minutes
    });
    res.cookies.set("REFRESH_TOKEN", refreshToken, {
      httpOnly: true,
      sameSite: "Strict",
      path: "/api/refresh",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });

    return res;
  } catch (error) {
    console.error("API registration error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error." },
      { status: error.status || 500 }
    );
  }
}
