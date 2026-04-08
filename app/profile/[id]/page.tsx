import { Header } from '@/components/Header';

export default async function ProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="space-y-4 p-4">
      <Header title="プロフィール" />
      <section className="card">
        <h2 className="font-bold">ユーザーID: {id}</h2>
        <p className="text-sm text-slate-600">レベルに応じて情報が解放されます。</p>
      </section>
    </div>
  );
}
