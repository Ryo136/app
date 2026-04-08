'use client';

import { createClient } from '@/lib/supabase';

export default function LoginPage() {
  const signIn = async () => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/api/auth/callback`
      }
    });
  };

  return (
    <div className="space-y-5 p-4">
      <h1 className="text-2xl font-bold text-brand-700">すれちがい寮ログ</h1>
      <p className="card text-sm">学校のGoogleアカウントでログインしてください。</p>
      <button className="btn-primary w-full" onClick={signIn}>
        Googleでログイン
      </button>
    </div>
  );
}
