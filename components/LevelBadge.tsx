export function LevelBadge({ level }: { level: number }) {
  return <span className="inline-flex rounded-full bg-mint px-3 py-1 text-sm font-bold text-brand-700">Lv.{level}</span>;
}
