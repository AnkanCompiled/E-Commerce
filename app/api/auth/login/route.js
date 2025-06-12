import { findUserService } from "@/services/userService";
import { setHTTPOnlyCookie } from "@/utils/cookie";
import { createToken } from "@/utils/jwt";
import { verifyPassword } from "@/utils/pass";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, number, password } = await req.json();

    const data = email
      ? { type: "email", value: email }
      : { type: "phone_number", value: number };

    const user = await findUserService(data);
    console.log(await verifyPassword(password, user.password));
    if (!user || !(await verifyPassword(password, user.password)))
      return NextResponse.json(
        { message: "Invalid Credentials" },
        { status: 401 }
      );

    const refreshToken = createToken({ id: user.id }, { expiresIn: "30d" });
    const authToken = createToken({ id: user.id }, { expiresIn: "15m" });

    const res = NextResponse.json(
      { message: "Login successful" },
      { status: 200 }
    );

    setHTTPOnlyCookie(res, "REFRESH_TOKEN", refreshToken);
    setHTTPOnlyCookie(res, "ACCESS_TOKEN", authToken);
    return res;
  } catch (error) {
    console.error("API login error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
