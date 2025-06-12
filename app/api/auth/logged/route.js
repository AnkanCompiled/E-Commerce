import { verifyToken } from "@/utils/jwt";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const accessToken = req.cookies.get("ACCESS_TOKEN")?.value;
    if (!accessToken) {
      throw new Error("Access Token not found");
    }
    const data = verifyToken(accessToken);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Unauthorized" },
      { status: 401 }
    );
  }
}
