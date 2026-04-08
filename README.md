# すれちがい寮ログ

学生向けの学校内すれちがい交流アプリ。日中に取得した接近ログを夜21:30以降に公開し、段階的なプロフィール解放・リアクション・パズル収集・住民コレクションで交流を促進します。

## 使用技術
- Next.js (App Router) / TypeScript
- Tailwind CSS
- Supabase (Auth + Postgres / @supabase/ssr)
- Google OAuth
- Framer Motion
- react-hook-form + zod
- GitHub Actions (lint)

## セットアップ
```bash
npm install
cp .env.example .env.local
npm run dev
```

## 環境変数
- `NEXT_PUBLIC_SUPABASE_URL`: Supabase Project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase anon key
- `NEXT_PUBLIC_ALLOWED_EMAIL_DOMAIN`: 許可する学校ドメイン（例: `example.ac.jp`）

## Supabase セットアップ
1. Supabase プロジェクト作成
2. Authentication > Providers で Google を有効化
3. SQL Editor で `supabase/schema.sql` を実行
4. 続いて `supabase/rls.sql` を実行
5. `Auth > URL Configuration` にローカル/Vercelの callback URL を追加

## Googleログイン設定
- Google Cloud ConsoleでOAuthクライアントを発行
- Authorized redirect URI に `https://<your-domain>/api/auth/callback` を設定
- Supabase Auth ProviderにClient ID/Secretを設定
- 学校ドメイン判定は `NEXT_PUBLIC_ALLOWED_EMAIL_DOMAIN` で制御

## ローカル開発
```bash
npm run dev
npm run lint
npm run typecheck
```

## デプロイ (Vercel)
1. GitHub連携で本リポジトリをImport
2. Environment Variablesに `.env.example` の値を設定
3. Build Command: `npm run build`
4. OutputはNext.js標準

## 無料枠運用メモ
- Supabase Free + Vercel Hobbyを前提
- 位置情報ポーリングはクライアント側で実行間隔を抑制
- 重い分析は夜間バッチへ将来分離

## ライセンス
MIT (`LICENSE`)

## トラブルシューティング
### Vercelで `404: NOT_FOUND` が出る
- `next-pwa` のような追加プラグインでビルドが不安定な場合、まず標準 `next.config.ts` でデプロイ確認してください。
- Vercel の Project Settings で Framework Preset が `Next.js` になっているか確認してください。
- ルートが保護されている場合は `/login` へ直接アクセスして動作確認してください。


## セキュリティアップデート
- Next.js は CVE-2025-66478 対応済みの `15.5.7` を使用しています。
- Supabase Auth Helpers は非推奨のため、`@supabase/ssr` に移行済みです。
