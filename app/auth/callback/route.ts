import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');

  if (code) {
    // Exchange code for session - this would be handled by Supabase middleware
    // For now, just redirect to dashboard
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // No code, redirect to login
  return NextResponse.redirect(new URL('/login', request.url));
}
