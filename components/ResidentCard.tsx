import { ResidentBubble } from './ResidentBubble';

export function ResidentCard({ name, line }: { name: string; line: string }) {
  return (
    <article className="card">
      <div className="flex items-center gap-3">
        <div className="h-14 w-14 rounded-full bg-brand-100" />
        <div>
          <h3 className="font-bold">{name}</h3>
          <ResidentBubble text={line} />
        </div>
      </div>
    </article>
  );
}
