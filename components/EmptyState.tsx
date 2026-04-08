export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="card text-center">
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
}
