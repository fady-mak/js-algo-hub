import { describe, it, expect } from 'vitest'
import { fibonacciRecursive, fibonacciDP, fibonacciOptimized } from './fibonacci-sequence'

describe('斐波那契数列', () => {
  const testCases = [
    { input: 0, expected: 0 },
    { input: 1, expected: 1 },
    { input: 2, expected: 1 },
    { input: 3, expected: 2 },
    { input: 5, expected: 5 },
    { input: 10, expected: 55 },
    { input: 20, expected: 6765 },
  ]

  testCases.forEach(({ input, expected }) => {
    it(`递归实现 - F(${input})`, () => {
      expect(fibonacciRecursive(input)).toEqual(expected)
    })

    it(`动态规划实现 - F(${input})`, () => {
      expect(fibonacciDP(input)).toEqual(expected)
    })

    it(`优化动态规划实现 - F(${input})`, () => {
      expect(fibonacciOptimized(input)).toEqual(expected)
    })
  })

  it('抛出负数错误', () => {
    expect(() => fibonacciRecursive(-1)).toThrow('n 不能为负数')
    expect(() => fibonacciDP(-1)).toThrow('n 不能为负数')
    expect(() => fibonacciOptimized(-1)).toThrow('n 不能为负数')
  })
})
