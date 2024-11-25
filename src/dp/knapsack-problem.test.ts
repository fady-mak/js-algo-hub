import { describe, it, expect } from 'vitest'
import { knapsack, knapsackOptimized } from './knapsack-problem'

describe('0/1 背包问题', () => {
  it('基本测试用例', () => {
    const weights = [1, 2, 3]
    const values = [6, 10, 12]
    const W = 5
    expect(knapsack(weights, values, W)).toBe(22)
    expect(knapsackOptimized(weights, values, W)).toBe(22)
  })

  it('测试背包容量不足时', () => {
    const weights = [1, 2, 3]
    const values = [6, 10, 12]
    const W = 1
    expect(knapsack(weights, values, W)).toBe(6)
    expect(knapsackOptimized(weights, values, W)).toBe(6)
  })

  it('测试背包容量为零时', () => {
    const weights = [1, 2, 3]
    const values = [6, 10, 12]
    const W = 0
    expect(knapsack(weights, values, W)).toBe(0)
    expect(knapsackOptimized(weights, values, W)).toBe(0)
  })

  it('测试物品价值和重量为空', () => {
    const weights: number[] = []
    const values: number[] = []
    const W = 10
    expect(knapsack(weights, values, W)).toBe(0)
    expect(knapsackOptimized(weights, values, W)).toBe(0)
  })

  it('测试所有物品重量大于背包容量', () => {
    const weights = [5, 6, 7]
    const values = [10, 20, 30]
    const W = 3
    expect(knapsack(weights, values, W)).toBe(0)
    expect(knapsackOptimized(weights, values, W)).toBe(0)
  })
})
