import { fibonacci } from '../src/fibonacci';

describe('fibonacci', () => {
  describe('エラーハンドリング', () => {
    test('負の数に対してエラーを投げる', () => {
      expect(() => fibonacci(-1)).toThrow('Fibonacci sequence is not defined for negative numbers');
      expect(() => fibonacci(-5)).toThrow('Fibonacci sequence is not defined for negative numbers');
    });
  });

  describe('基本ケース', () => {
    test('fibonacci(0)は0を返す', () => {
      expect(fibonacci(0)).toBe(0);
    });

    test('fibonacci(1)は1を返す', () => {
      expect(fibonacci(1)).toBe(1);
    });
  });

  describe('反復的な計算', () => {
    test('フィボナッチ数を正しく計算する', () => {
      expect(fibonacci(2)).toBe(1);
      expect(fibonacci(3)).toBe(2);
      expect(fibonacci(4)).toBe(3);
      expect(fibonacci(5)).toBe(5);
      expect(fibonacci(6)).toBe(8);
      expect(fibonacci(7)).toBe(13);
      expect(fibonacci(8)).toBe(21);
      expect(fibonacci(9)).toBe(34);
      expect(fibonacci(10)).toBe(55);
    });

    test('大きなフィボナッチ数を処理する', () => {
      expect(fibonacci(15)).toBe(610);
      expect(fibonacci(20)).toBe(6765);
    });
  });
});