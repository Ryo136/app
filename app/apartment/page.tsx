import { BottomNav } from '@/components/BottomNav';
import { Header } from '@/components/Header';
import { ResidentCard } from '@/components/ResidentCard';

export default function ApartmentPage() {
  return (
    <div className="space-y-4 p-4">
      <Header title="友達コレクション" />
      <ResidentCard name="はると" line="今日もすれちがいありがとう！" />
      <BottomNav />
    </div>
  );
}
