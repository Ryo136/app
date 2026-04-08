import { NextResponse, type NextRequest } from 'next/server';

const protectedRoutes = ['/home', '/encounters', '/puzzle', '/apartment', '/events', '/settings'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (!protectedRoutes.some((route) => pathname.startsWith(route))) return NextResponse.next();

  const hasSession = request.cookies.get('sb-access-token');
  if (!hasSession) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/home/:path*', '/encounters/:path*', '/puzzle/:path*', '/apartment/:path*', '/events/:path*', '/settings/:path*']
};
