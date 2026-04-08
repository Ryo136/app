import Link from 'next/link';
import { Header } from '@/components/Header';

export default function SettingsPage() {
  return (
    <div className="space-y-4 p-4">
      <Header title="設定" />
      <section className="card space-y-2">
        <Link href="/tutorial" className="btn-secondary block text-center">
          チュートリアルを再確認
        </Link>
        <Link href="/profile/setup" className="btn-secondary block text-center">
          プロフィール編集
        </Link>
      </section>
    </div>
  );
}
