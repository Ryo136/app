import { BottomNav } from '@/components/BottomNav';
import { EncounterCard } from '@/components/EncounterCard';
import { Header } from '@/components/Header';
import { ReactionPicker } from '@/components/ReactionPicker';

export default function EncountersPage() {
  return (
    <div className="space-y-4 p-4">
      <Header title="すれちがい結果" />
      <EncounterCard encounter={{ id: '1', user_a: 'a', user_b: 'b', encountered_on: '2026-04-08', distance_meters: 4.2, score: 5 }} level={2} />
      <ReactionPicker onPick={() => {}} />
      <BottomNav />
    </div>
  );
}
