import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function middleware(req) {
  const { isAuthenticated } = getKindeServerSession(req);
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) {
    return NextResponse.redirect(new URL("/api/auth/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*"],
};
