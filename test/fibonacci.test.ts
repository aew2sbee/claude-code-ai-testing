import { fibonacci, fibonacciRecursive, fibonacciSequence } from '../src/fibonacci';

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

describe('fibonacciRecursive', () => {
  describe('error handling', () => {
    test('should throw error for negative numbers', () => {
      expect(() => fibonacciRecursive(-1)).toThrow('Fibonacci sequence is not defined for negative numbers');
      expect(() => fibonacciRecursive(-3)).toThrow('Fibonacci sequence is not defined for negative numbers');
    });
  });

  describe('base cases', () => {
    test('should return 0 for fibonacciRecursive(0)', () => {
      expect(fibonacciRecursive(0)).toBe(0);
    });

    test('should return 1 for fibonacciRecursive(1)', () => {
      expect(fibonacciRecursive(1)).toBe(1);
    });
  });

  describe('recursive calculation', () => {
    test('should calculate fibonacci numbers correctly', () => {
      expect(fibonacciRecursive(2)).toBe(1);
      expect(fibonacciRecursive(3)).toBe(2);
      expect(fibonacciRecursive(4)).toBe(3);
      expect(fibonacciRecursive(5)).toBe(5);
      expect(fibonacciRecursive(6)).toBe(8);
      expect(fibonacciRecursive(7)).toBe(13);
      expect(fibonacciRecursive(8)).toBe(21);
    });

    test('should handle smaller fibonacci numbers (avoiding performance issues)', () => {
      expect(fibonacciRecursive(10)).toBe(55);
      expect(fibonacciRecursive(12)).toBe(144);
    });
  });

  describe('consistency with iterative version', () => {
    test('should return same results as iterative version for small numbers', () => {
      for (let i = 0; i <= 10; i++) {
        expect(fibonacciRecursive(i)).toBe(fibonacci(i));
      }
    });
  });
});

describe('fibonacciSequence', () => {
  describe('error handling', () => {
    test('should throw error for negative length', () => {
      expect(() => fibonacciSequence(-1)).toThrow('Sequence length cannot be negative');
      expect(() => fibonacciSequence(-5)).toThrow('Sequence length cannot be negative');
    });
  });

  describe('edge cases', () => {
    test('should return empty array for length 0', () => {
      expect(fibonacciSequence(0)).toEqual([]);
    });

    test('should return [0] for length 1', () => {
      expect(fibonacciSequence(1)).toEqual([0]);
    });

    test('should return [0, 1] for length 2', () => {
      expect(fibonacciSequence(2)).toEqual([0, 1]);
    });
  });

  describe('sequence generation', () => {
    test('should generate correct fibonacci sequence for length 3', () => {
      expect(fibonacciSequence(3)).toEqual([0, 1, 1]);
    });

    test('should generate correct fibonacci sequence for length 5', () => {
      expect(fibonacciSequence(5)).toEqual([0, 1, 1, 2, 3]);
    });

    test('should generate correct fibonacci sequence for length 8', () => {
      expect(fibonacciSequence(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    });

    test('should generate correct fibonacci sequence for length 10', () => {
      expect(fibonacciSequence(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });
  });

  describe('sequence properties', () => {
    test('should have correct length', () => {
      expect(fibonacciSequence(7).length).toBe(7);
      expect(fibonacciSequence(15).length).toBe(15);
    });

    test('should start with [0, 1] for sequences longer than 1', () => {
      const seq5 = fibonacciSequence(5);
      expect(seq5[0]).toBe(0);
      expect(seq5[1]).toBe(1);

      const seq10 = fibonacciSequence(10);
      expect(seq10[0]).toBe(0);
      expect(seq10[1]).toBe(1);
    });

    test('should follow fibonacci rule: each number is sum of previous two', () => {
      const sequence = fibonacciSequence(15);
      for (let i = 2; i < sequence.length; i++) {
        expect(sequence[i]).toBe(sequence[i - 1] + sequence[i - 2]);
      }
    });
  });

  describe('consistency with individual fibonacci function', () => {
    test('should match individual fibonacci calculations', () => {
      const sequence = fibonacciSequence(12);
      for (let i = 0; i < sequence.length; i++) {
        expect(sequence[i]).toBe(fibonacci(i));
      }
    });
  });
});

describe('integration tests', () => {
  test('all functions should produce consistent results', () => {
    for (let i = 0; i <= 8; i++) {
      const iterative = fibonacci(i);
      const recursive = fibonacciRecursive(i);
      const fromSequence = fibonacciSequence(i + 1)[i];
      
      expect(iterative).toBe(recursive);
      expect(iterative).toBe(fromSequence);
    }
  });
});