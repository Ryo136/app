# すれちがい寮ログ（ローカル開発版）

チカチカ（ループ遷移）を避けるため、GitHub Pages向けの強制リダイレクト実装を外し、
**ローカルで安定して動かす構成**に戻しました。

## いまの方針
- Next.js を通常モードで実行（`next dev` / `next build`）
- 画面デモを優先（重い未実装機能は無理に入れない）
- UI確認と開発体験を優先

## ローカル起動
```bash
npm install
npm run dev
```

## ビルド確認
```bash
npm run build
npm run lint
npm run typecheck
```

## 実装済み
- ホーム / すれちがい / パズル / 住民 / プロフィール設定などのUI
- 共通コンポーネント（BottomNav, Header, Card群）
- 位置情報/遭遇ロジックのユーティリティ（デモ向け）

## いったん外したもの
- GitHub Pages向け強制リダイレクト（チカチカ対策）
- サーバー必須の本番機能（OAuth本接続など）

## ライセンス
MIT
