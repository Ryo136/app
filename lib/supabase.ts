import { createBrowserClient, createServerClient, type CookieOptions } from '@supabase/ssr';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const createClient = () => createBrowserClient(supabaseUrl, supabaseAnonKey);

export const createServerSupabase = (
  getAll: () => { name: string; value: string }[],
  setAll?: (cookies: { name: string; value: string; options: CookieOptions }[]) => void
) =>
  createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll,
      setAll: setAll ?? (() => undefined)
    }
  });
