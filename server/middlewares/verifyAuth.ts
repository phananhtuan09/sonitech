import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';
import { parse } from 'cookie';
import { NextResponse } from 'next/server';

interface VerifyTokenResults {
  success: boolean;
  code?: string;
}

const apiNotCheckAuth = ['/api/auth/login'];

export async function verifyToken(req: NextRequest) {
  const results = {
    success: false,
    code: '',
  };
  try {
    const { accessToken } = parse(req.headers.get('cookie') || '');
    if (accessToken) {
      const decoded = await jwtVerify(
        accessToken,
        new TextEncoder().encode(process.env.JWT_SECRET),
        {
          algorithms: ['HS256'],
        },
      );

      if (decoded?.payload?.user_id) {
        results.success = true;
      }
    }
    return results;
  } catch (error) {
    results.code = error?.code;
    return results;
  }
}

export function handleRedirectAfterCheckAuth(
  url: URL,
  req: NextRequest,
  results: VerifyTokenResults | null,
): NextResponse | undefined {
  if (!results.success && !url.pathname.includes('/login')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  if (url.pathname === '/') {
    return NextResponse.redirect(new URL('/info', req.url));
  }
}

export function handleResponseFailAuth(
  url: URL,
  results: VerifyTokenResults | null,
): NextResponse | undefined {
  url.pathname = '/api/auth/unauthorized';
  url.searchParams.set('unauthorized-code', results.code);
  return NextResponse.rewrite(url);
}

export function handleLogicAfterCheckAuth(
  url: URL,
  req: NextRequest,
  results: VerifyTokenResults | null,
  res: NextResponse,
): NextResponse | undefined {
  // Clear access token
  if (url.pathname === '/login') {
    res.cookies.set('accessToken', '');
  }
  // Pass auth -> nothing do
  if (results.success) {
    return undefined;
  }
  // Case call api -> response 401
  if (url.pathname.includes('/api') && !apiNotCheckAuth.includes(url.pathname)) {
    return handleResponseFailAuth(url, results);
  }
  // Case next routing page -> redirect
  return handleRedirectAfterCheckAuth(url, req, results);
}
