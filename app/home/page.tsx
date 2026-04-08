'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { BottomNav } from '@/components/BottomNav';
import { ResultUnlockModal } from '@/components/ResultUnlockModal';
import { canPublishTodayResult } from '@/utils/encounter';

export default function HomePage() {
  const [open, setOpen] = useState(canPublishTodayResult());

  return (
    <div className="space-y-4 p-4">
      <Header title="ホーム" />
      <section className="card">
        <h2 className="font-bold">今日のすれちがい</h2>
        {canPublishTodayResult() ? (
          <p className="text-sm text-slate-600">本日の結果が公開されました。</p>
        ) : (
          <p className="text-sm text-slate-600">本日の集計中（21:30公開）</p>
        )}
      </section>
      <section className="card">
        <h2 className="font-bold">交流のヒント</h2>
        <p className="text-sm text-slate-600">昨日リアクションをくれた人にお礼を送ってみよう！</p>
      </section>
      <ResultUnlockModal open={open} onClose={() => setOpen(false)} />
      <BottomNav />
    </div>
  );
}
