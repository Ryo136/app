export function LoadingState({ text = '読み込み中...' }: { text?: string }) {
  return (
    <div className="card animate-pulse text-center text-sm text-slate-500">
      <p>{text}</p>
    </div>
  );
}
