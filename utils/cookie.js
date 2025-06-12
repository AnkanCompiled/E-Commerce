import { NextResponse } from "next/server";

export const setHTTPOnlyCookie = (
  res = NextResponse,
  name,
  value,
  options = {}
) => {
  const sameSite = { ACCESS_TOKEN: "Lax", REFRESH_TOKEN: "Strict" };
  const path = { ACCESS_TOKEN: "/", REFRESH_TOKEN: "/" };
  const maxAge = { ACCESS_TOKEN: 60 * 15, REFRESH_TOKEN: 60 * 60 * 24 * 30 }; // in seconds

  res.cookies.set(name, value, {
    httpOnly: true,
    sameSite: sameSite[name] || "Lax",
    path: path[name] || "/",
    maxAge: maxAge[name] || 60 * 15,
    ...options,
  });
};
