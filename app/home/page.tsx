'use client';

import { Header } from '@/components/Header';
import { BottomNav } from '@/components/BottomNav';

export default function HomePage() {
  return (
    <div className="space-y-4 p-4">
      <Header title="ホーム" />
      <section className="card">
        <h2 className="font-bold">デモ版について</h2>
        <p className="text-sm text-slate-600">
          GitHub Pages向けに、実装済みの画面だけに絞った軽量デモです。
        </p>
      </section>
      <section className="card">
        <h2 className="font-bold">今見られる機能</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600">
          <li>すれちがい一覧UI</li>
          <li>パズル進捗UI</li>
          <li>住民コレクションUI</li>
          <li>プロフィール入力UI</li>
        </ul>
      </section>
      <BottomNav />
    </div>
  );
}
