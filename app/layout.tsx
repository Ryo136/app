import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'すれちがい寮ログ',
  description: '学校内のすれちがいを夜に振り返る交流アプリ',
  openGraph: {
    title: 'すれちがい寮ログ',
    description: '学校内のすれちがいを夜に振り返る交流アプリ',
    images: ['/ogp.svg']
  },
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <main className="mx-auto min-h-screen max-w-md pb-24">{children}</main>
      </body>
    </html>
  );
}
