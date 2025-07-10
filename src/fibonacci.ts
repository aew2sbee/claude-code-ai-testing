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

/**
 * 再帰的なアプローチを使用してn番目のフィボナッチ数を計算します。
 * 
 * これはフィボナッチ数列の数学的定義に直接従った古典的な再帰実装です。
 * この実装は指数的な時間計算量O(2^n)を持つため、nの大きな値に対しては
 * 注意して使用する必要があります。
 * 
 * @param n - フィボナッチ数列の位置（非負の整数である必要があります）
 * @returns n番目のフィボナッチ数
 * @throws {Error} nが負の数の場合
 * 
 * @example
 * ```typescript
 * fibonacciRecursive(0); // 0を返す
 * fibonacciRecursive(1); // 1を返す
 * fibonacciRecursive(5); // 5を返す
 * fibonacciRecursive(8); // 21を返す
 * ```
 * 
 * @warning この関数は指数的な時間計算量を持ち、大きな入力値（n > 40）に対しては処理が遅くなる可能性があります
 */
export function fibonacciRecursive(n: number): number {
  if (n < 0) {
    throw new Error('Fibonacci sequence is not defined for negative numbers');
  }
  if (n <= 1) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

/**
 * 指定された長さのフィボナッチ数列を生成します。
 * 
 * フィボナッチ数列の最初の'length'個の数を含む配列を返します。
 * 数列は[0, 1]で始まり、その後の各数は前の2つの数の合計になります。
 * 
 * @param length - 生成するフィボナッチ数の個数（非負の整数である必要があります）
 * @returns 指定された長さのフィボナッチ数列を含む配列
 * @throws {Error} lengthが負の数の場合
 * 
 * @example
 * ```typescript
 * fibonacciSequence(0); // []を返す
 * fibonacciSequence(1); // [0]を返す
 * fibonacciSequence(5); // [0, 1, 1, 2, 3]を返す
 * fibonacciSequence(8); // [0, 1, 1, 2, 3, 5, 8, 13]を返す
 * ```
 */
export function fibonacciSequence(length: number): number[] {
  if (length < 0) {
    throw new Error('Sequence length cannot be negative');
  }

  if (length === 0) {
    return [];
  }
  const sequence: number[] = [0];

  if (length === 1) {
    return sequence;
  }

  sequence.push(1);

  for (let i = 2; i < length; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}