# すれちがい寮ログ（GitHub Pages デモ版）

このリポジトリは **表示できる機能に絞った軽量デモ** です。  
「実装できなさそうな機能は無くしていい」という方針に合わせ、サーバー依存の機能は外しています。

## 現在の実装範囲
- 画面遷移とUIコンポーネント
- すれちがい一覧UI
- パズル進捗UI
- 住民コレクションUI
- プロフィール入力UI

## いったん外した機能
- 本番認証（Google OAuth）
- Supabase API連携
- middlewareベースの認可
- 実データ更新処理

## 技術スタック
- Next.js App Router (static export)
- TypeScript
- Tailwind CSS
- Framer Motion（軽微な演出）

## ローカル起動
```bash
npm install
npm run dev
```

## GitHub Pages デプロイ
```bash
npm run build:gh-pages
```

GitHub Actions の `Deploy GitHub Pages` が `out/` を配信します。

## URLの注意
- `https://<user>.github.io/<repo>/`
- 404 の場合は `https://<user>.github.io/<repo>/home/`

## ライセンス
MIT
