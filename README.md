# すれちがい寮ログ（Vercelローカル開発版）

このリポジトリは **Vercelで動かせる Next.js 構成** にしています。  
重い未実装機能は一旦外し、まず確実に動くUIデモとして運用します。

## 現在の実装範囲
- 画面遷移とUIコンポーネント
- すれちがい一覧UI
- パズル進捗UI
- 住民コレクションUI
- プロフィール入力UI

## ローカル起動
```bash
npm install
npm run dev
```

## Vercelデプロイ手順
1. GitHubにpush
2. VercelでリポジトリをImport
3. Framework Preset は `Next.js`
4. Build Command は `npm run build`
5. Deploy

> このリポジトリには `vercel.json` を置いてあり、上記コマンド設定済みです。

## 動作確認コマンド
```bash
npm run build
npm run lint
npm run typecheck
```

## いったん外したもの
- GitHub Pages向け強制リダイレクト
- サーバー必須の本番機能（OAuth本接続など）

## ライセンス
MIT
