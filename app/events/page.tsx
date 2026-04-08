import { BottomNav } from '@/components/BottomNav';
import { Header } from '@/components/Header';
import { EmptyState } from '@/components/EmptyState';

export default function EventsPage() {
  return (
    <div className="space-y-4 p-4">
      <Header title="イベント" />
      <EmptyState title="公開準備中" description="イベント機能は今後のアップデートで公開予定です。" />
      <BottomNav />
    </div>
  );
}
