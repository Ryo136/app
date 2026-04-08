import { Encounter } from '@/lib/types';
import { LevelBadge } from './LevelBadge';

export function EncounterCard({ encounter, level }: { encounter: Encounter; level: number }) {
  return (
    <article className="card">
      <p className="text-sm text-slate-500">{encounter.encountered_on}</p>
      <h3 className="mt-1 text-lg font-bold">すれちがい距離 {encounter.distance_meters.toFixed(1)}m</h3>
      <p className="text-sm text-slate-600">獲得ポイント +{encounter.score}</p>
      <div className="mt-2">
        <LevelBadge level={level} />
      </div>
    </article>
  );
}
