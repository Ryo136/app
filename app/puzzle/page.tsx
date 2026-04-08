import { BottomNav } from '@/components/BottomNav';
import { Header } from '@/components/Header';
import { PuzzleBoard } from '@/components/PuzzleBoard';

export default function PuzzlePage() {
  return (
    <div className="space-y-4 p-4">
      <Header title="パズル" />
      <PuzzleBoard total={48} unlocked={12} />
      <BottomNav />
    </div>
  );
}
