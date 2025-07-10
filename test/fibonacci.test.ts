import { fibonacci } from '../src/fibonacci';

describe('fibonacci', () => {
  describe('error handling', () => {
    test('should throw error for negative numbers', () => {
      expect(() => fibonacci(-1)).toThrow('Fibonacci sequence is not defined for negative numbers');
      expect(() => fibonacci(-5)).toThrow('Fibonacci sequence is not defined for negative numbers');
    });
  });

  describe('base cases', () => {
    test('should return 0 for fibonacci(0)', () => {
      expect(fibonacci(0)).toBe(0);
    });

    test('should return 1 for fibonacci(1)', () => {
      expect(fibonacci(1)).toBe(1);
    });
  });

  describe('iterative calculation', () => {
    test('should calculate fibonacci numbers correctly', () => {
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

    test('should handle larger fibonacci numbers', () => {
      expect(fibonacci(15)).toBe(610);
      expect(fibonacci(20)).toBe(6765);
    });
  });
});