'use client';

import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="space-y-5 p-4">
      <h1 className="text-2xl font-bold text-brand-700">すれちがい寮ログ</h1>
      <p className="card text-sm">GitHub Pages版では認証機能は無効です。デモ画面を表示します。</p>
      <Link href="/home" className="btn-primary block text-center">
        デモモードで入る
      </Link>
    </div>
  );
}
