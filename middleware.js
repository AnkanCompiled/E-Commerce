import { NextResponse } from "next/server";
export function isAuthenticated(req) {
  const authToken = req.cookies.get("REFRESH_TOKEN");
  return !!authToken;
}

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  const authenticated = isAuthenticated(req);

  const protectedPaths = ["/profile", "/cart"];
  const guestPaths = ["/auth/login", "/auth/register"];

  if (authenticated && guestPaths.includes(pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (!authenticated && protectedPaths.includes(pathname)) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/login", "/auth/register", "/profile", "/cart"],
};
