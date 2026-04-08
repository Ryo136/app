import { Header } from '@/components/Header';
import { EmptyState } from '@/components/EmptyState';

export default function EventsPage() {
  return (
    <div className="space-y-4 p-4">
      <Header title="イベント" />
      <EmptyState
        title="このデモでは未実装"
        description="実装難易度の高い機能は一旦外し、表示できる機能に集中しています。"
      />
    </div>
  );
}
