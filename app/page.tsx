import Link from 'next/link';

export default function IndexPage() {
  return (
    <div className="space-y-4 p-4">
      <h1 className="text-2xl font-bold text-brand-700">すれちがい寮ログ</h1>
      <p className="card text-sm text-slate-600">
        GitHub Pages向けのデモ版です。ログインなしで画面確認できます。
      </p>
      <Link href="/home" className="btn-primary block text-center">
        デモを開始
      </Link>
    </div>
  );
}
