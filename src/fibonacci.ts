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

export function fibonacciRecursive(n: number): number {
  if (n < 0) {
    throw new Error('Fibonacci sequence is not defined for negative numbers');
  }
  if (n <= 1) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

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