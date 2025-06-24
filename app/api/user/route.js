import { findUserService } from "@/services/userService";
import { verifyToken } from "@/utils/jwt";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const accessToken = req.cookies.get("ACCESS_TOKEN")?.value;
    if (!accessToken) {
      return NextResponse.json(
        { error: "Access Token not found" },
        { status: 401 }
      );
    }
    const data = verifyToken(accessToken);
    const user = await findUserService({
      type: "id",
      value: data.userId,
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Unexpected Error" },
      { status: error.status || 500 }
    );
  }
}
