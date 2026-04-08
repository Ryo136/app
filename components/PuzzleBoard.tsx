export function PuzzleBoard({ total, unlocked }: { total: number; unlocked: number }) {
  const pieces = Array.from({ length: total });
  return (
    <section className="card">
      <h2 className="font-bold">学年パズル</h2>
      <p className="mb-3 text-sm text-slate-600">{unlocked}/{total} ピース</p>
      <div className="grid grid-cols-6 gap-2">
        {pieces.map((_, i) => (
          <div key={i} className={`aspect-square rounded-xl ${i < unlocked ? 'bg-peach' : 'bg-slate-200'}`} />
        ))}
      </div>
    </section>
  );
}
