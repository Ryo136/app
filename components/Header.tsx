import Link from 'next/link';

export function Header({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-10 rounded-b-3xl bg-white/90 p-4 shadow-soft backdrop-blur">
      <div className="mx-auto flex max-w-md items-center justify-between">
        <h1 className="text-lg font-bold text-brand-700">{title}</h1>
        <Link href="/settings" className="btn-secondary px-4 py-2 text-sm">
          設定
        </Link>
      </div>
    </header>
  );
}
