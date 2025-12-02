import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const sessionToken = request.cookies.get('better-auth.session_token') || 
                       request.cookies.get('__Secure-better-auth.session_token');

  if (request.nextUrl.pathname.startsWith('/checkout') && !sessionToken) {
    const url = new URL('/sign-in', request.url);
    url.searchParams.set('callbackUrl', request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/checkout/:path*'],
};
