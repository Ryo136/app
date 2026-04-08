import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md space-y-4 p-6 text-center">
      <h1 className="text-2xl font-bold text-brand-700">404: ページが見つかりません</h1>
      <p className="card text-sm text-slate-600">
        URLが間違っているか、デプロイ設定に問題がある可能性があります。
      </p>
      <Link href="/home" className="btn-primary block">
        ホームへ戻る
      </Link>
      <Link href="/login" className="btn-secondary block">
        ログインページへ
      </Link>
    </div>
  );
}
