/**
 * 反復的なアプローチを使用してn番目のフィボナッチ数を計算します。
 *
 * フィボナッチ数列は以下のように定義されます：
 * - F(0) = 0
 * - F(1) = 1
 * - F(n) = F(n-1) + F(n-2) (n > 1の場合)
 *
 * この実装は空間計算量O(1)、時間計算量O(n)を使用します。
 *
 * @param n - フィボナッチ数列の位置（非負の整数である必要があります）
 * @returns n番目のフィボナッチ数
 * @throws {Error} nが負の数の場合
 *
 * @example
 * ```typescript
 * fibonacci(0); // 0を返す
 * fibonacci(1); // 1を返す
 * fibonacci(5); // 5を返す
 * fibonacci(10); // 55を返す
 * ```
 */
export function fibonacci(n: number): number {
  if (n < 0) {
    throw new Error('Fibonacci sequence is not defined for negative numbers');
  }

  if (n <= 1) {
    return n;
  }

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}
