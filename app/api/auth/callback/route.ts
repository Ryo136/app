import { NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { isAllowedDomain } from '@/lib/auth';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');

  if (!code) return NextResponse.redirect(new URL('/login', request.url));

  const supabase = createRouteHandlerClient({ cookies });
  const { error } = await supabase.auth.exchangeCodeForSession(code);
  if (error) return NextResponse.redirect(new URL('/login?error=oauth', request.url));

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!isAllowedDomain(user?.email)) {
    await supabase.auth.signOut();
    return NextResponse.redirect(new URL('/login?error=domain', request.url));
  }

  return NextResponse.redirect(new URL('/tutorial', request.url));
}
