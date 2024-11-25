import { describe, it, expect } from 'vitest'
import { coinChange } from './coin-change'

describe('硬币找零问题', () => {
  it('基本测试用例', () => {
    const coins = [1, 2, 5]
    const amount = 11
    expect(coinChange(coins, amount)).toBe(3) // 11 = 5 + 5 + 1
  })

  it('无法凑成的金额', () => {
    const coins = [2]
    const amount = 3
    expect(coinChange(coins, amount)).toBe(-1) // 无法凑成
  })

  it('金额为零时', () => {
    const coins = [1, 2, 5]
    const amount = 0
    expect(coinChange(coins, amount)).toBe(0) // 不需要任何硬币
  })

  it('只有一个硬币且可以整除时', () => {
    const coins = [3]
    const amount = 9
    expect(coinChange(coins, amount)).toBe(3) // 9 = 3 + 3 + 3
  })

  it('只有一个硬币且无法整除时', () => {
    const coins = [4]
    const amount = 7
    expect(coinChange(coins, amount)).toBe(-1) // 无法凑成
  })

  it('测试多种面值的情况', () => {
    const coins = [1, 3, 4]
    const amount = 6
    expect(coinChange(coins, amount)).toBe(2) // 6 = 3 + 3 或 4 + 1 + 1
  })
})
