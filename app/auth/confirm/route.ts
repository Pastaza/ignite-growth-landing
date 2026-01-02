import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const token = requestUrl.searchParams.get('token');

  if (token) {
    // Confirm email verification
    // This would integrate with Supabase
    return NextResponse.redirect(new URL('/dashboard?confirmed=true', request.url));
  }

  return NextResponse.redirect(new URL('/login?error=invalid_token', request.url));
}
