# フィボナッチ数列実装 (TypeScript)

フィボナッチ数列を計算するためのTypeScript実装です。反復的アプローチ、再帰的アプローチ、数列生成の3つの関数を提供します。

## 概要

このプロジェクトでは、フィボナッチ数列を計算するための3つの異なる方法を実装しています：

1. **反復的実装** - 効率的でパフォーマンスの良い実装
2. **再帰的実装** - 数学的定義に忠実な実装
3. **数列生成** - 指定された長さの数列を生成

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
import { fibonacci, fibonacciRecursive, fibonacciSequence } from './src/fibonacci';

// 反復的実装（推奨）
console.log(fibonacci(10));        // 55
console.log(fibonacci(20));        // 6765

// 再帰的実装（小さな値のみ推奨）
console.log(fibonacciRecursive(8)); // 21
console.log(fibonacciRecursive(10)); // 55

// 数列生成
console.log(fibonacciSequence(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
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
- ✅ エッジケース（空の配列、単一要素）
- ✅ 関数間の一貫性チェック
- ✅ 統合テスト

## API リファレンス

### `fibonacci(n: number): number`

反復的なアプローチを使用してn番目のフィボナッチ数を計算します。

- **時間計算量**: O(n)
- **空間計算量**: O(1)
- **推奨**: 大きな値に対しても効率的

```typescript
fibonacci(0);   // 0
fibonacci(1);   // 1
fibonacci(5);   // 5
fibonacci(10);  // 55
```

### `fibonacciRecursive(n: number): number`

再帰的なアプローチを使用してn番目のフィボナッチ数を計算します。

- **時間計算量**: O(2^n)
- **空間計算量**: O(n)
- **注意**: 大きな値（n > 40）では非常に遅くなります

```typescript
fibonacciRecursive(0);  // 0
fibonacciRecursive(1);  // 1
fibonacciRecursive(5);  // 5
fibonacciRecursive(8);  // 21
```

### `fibonacciSequence(length: number): number[]`

指定された長さのフィボナッチ数列を生成します。

- **時間計算量**: O(n)
- **空間計算量**: O(n)

```typescript
fibonacciSequence(0);  // []
fibonacciSequence(1);  // [0]
fibonacciSequence(5);  // [0, 1, 1, 2, 3]
fibonacciSequence(8);  // [0, 1, 1, 2, 3, 5, 8, 13]
```

## パフォーマンス比較

| 実装方法 | 時間計算量 | 空間計算量 | 大きな値での推奨度 |
|----------|------------|------------|-------------------|
| 反復的   | O(n)       | O(1)       | ⭐⭐⭐⭐⭐         |
| 再帰的   | O(2^n)     | O(n)       | ⭐⭐ (n ≤ 40)     |
| 数列生成 | O(n)       | O(n)       | ⭐⭐⭐⭐           |

## 開発者向け情報

### 開発環境

- **Node.js**: 18.x以上
- **TypeScript**: 5.x
- **Jest**: 30.x
- **ts-jest**: 29.x

### コーディング規約

- TypeScriptの厳密モードを使用
- JSDocコメントによる詳細な文書化
- 包括的なテストカバレッジ
- エラーハンドリングの実装

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