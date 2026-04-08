import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { isAllowedDomain } from '@/lib/auth';
import { createServerSupabase } from '@/lib/supabase';

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  if (!code) return NextResponse.redirect(new URL('/login', request.url));

  const cookieStore = await cookies();
  const response = NextResponse.redirect(new URL('/tutorial', request.url));

  const supabase = createServerSupabase(
    () => cookieStore.getAll().map(({ name, value }) => ({ name, value })),
    (cookiesToSet) => {
      cookiesToSet.forEach(({ name, value, options }) => {
        response.cookies.set(name, value, options);
      });
    }
  );

  const { error } = await supabase.auth.exchangeCodeForSession(code);
  if (error) return NextResponse.redirect(new URL('/login?error=oauth', request.url));

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!isAllowedDomain(user?.email)) {
    await supabase.auth.signOut();
    return NextResponse.redirect(new URL('/login?error=domain', request.url));
  }

  return response;
}
