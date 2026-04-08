'use client';

const EMOJIS = ['👍', '👏', '🔥', '😊', '🎉', '💡', '🌟'];

export function ReactionPicker({ onPick }: { onPick: (emoji: string) => void }) {
  return (
    <div className="card">
      <p className="mb-2 text-sm font-semibold">リアクションを送る（1日5回）</p>
      <div className="flex flex-wrap gap-2">
        {EMOJIS.map((emoji) => (
          <button key={emoji} onClick={() => onPick(emoji)} className="rounded-2xl bg-brand-100 px-3 py-2 text-xl transition hover:scale-105">
            {emoji}
          </button>
        ))}
      </div>
    </div>
  );
}
