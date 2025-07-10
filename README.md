# フィボナッチ数列実装 (TypeScript)

フィボナッチ数列を計算するためのTypeScript実装です。効率的な反復的アプローチによる単一の関数を提供します。

## 概要

このプロジェクトでは、フィボナッチ数列を計算するための効率的な実装を提供しています：

1. **反復的実装** - 効率的でパフォーマンスの良い実装（時間計算量O(n)、空間計算量O(1)）

## プロジェクト構成

```
.
├── src/
│   └── fibonacci.ts          # フィボナッチ数列の実装
├── test/
│   └── fibonacci.test.ts     # Jestテストファイル
├── jest.config.js            # Jest設定
├── tsconfig.json             # TypeScript設定
├── package.json              # プロジェクト設定
└── README.md                 # このファイル
```

## インストール

```bash
# プロジェクトのクローン
git clone <repository-url>
cd claude-code-ai-testing

# 依存関係のインストール
npm install
```

## 使用方法

### 基本的な使用例

```typescript
import { fibonacci } from './src/fibonacci';

// フィボナッチ数列の計算
console.log(fibonacci(10));        // 55
console.log(fibonacci(20));        // 6765
console.log(fibonacci(0));         // 0
console.log(fibonacci(1));         // 1
```

### コマンドライン

```bash
# TypeScriptのコンパイル
npm run build

# 開発モードでのコンパイル（監視モード）
npm run build:watch
```

## テスト

このプロジェクトでは、Jestを使用した包括的なテストスイートを提供しています。

### テストの実行

```bash
# 全テストの実行
npm test

# 監視モードでのテスト実行
npm run test:watch

# カバレッジ付きテスト実行
npm run test:coverage
```

### テストカバレッジ

テストは以下の要素をカバーしています：

- ✅ エラーハンドリング（負の数の入力）
- ✅ 基本ケース（0, 1の入力）
- ✅ 正確な計算結果の検証
- ✅ 大きな値の処理

## API リファレンス

### `fibonacci(n: number): number`

反復的なアプローチを使用してn番目のフィボナッチ数を計算します。

- **時間計算量**: O(n)
- **空間計算量**: O(1)
- **推奨**: 効率的で大きな値に対しても安定したパフォーマンス

```typescript
fibonacci(0);   // 0
fibonacci(1);   // 1
fibonacci(5);   // 5
fibonacci(10);  // 55
fibonacci(20);  // 6765
```

## パフォーマンス特性

| 特性 | 値 |
|------|-----|
| 時間計算量 | O(n) |
| 空間計算量 | O(1) |
| 推奨度 | ⭐⭐⭐⭐⭐ |
| 大きな値への対応 | 優秀 |

## 開発者向け情報

### 開発環境

- **Node.js**: 18.x以上
- **TypeScript**: 5.x
- **Jest**: 30.x
- **ts-jest**: 29.x

### コーディング規約

- TypeScriptの厳密モードを使用
- 日本語でのJSDocコメントによる詳細な文書化
- 100%のテストカバレッジを維持
- 適切なエラーハンドリングの実装

### 貢献

プロジェクトへの貢献を歓迎します。以下の手順に従ってください：

1. フォークを作成
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチをプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## ライセンス

このプロジェクトはISCライセンスの下で公開されています。

## フィボナッチ数列について

フィボナッチ数列は以下のように定義される数列です：

```
F(0) = 0
F(1) = 1
F(n) = F(n-1) + F(n-2) (n ≥ 2)
```

数列の最初の10項：
```
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
```

この数列は自然界の多くの現象で見られ、黄金比との関連でも知られています。