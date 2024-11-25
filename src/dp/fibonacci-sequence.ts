/**
 * 使用递归计算斐波那契数
 * @param n - 要计算的斐波那契数的索引
 * @returns 第 n 个斐波那契数
 */
export function fibonacciRecursive(n: number): number {
  if (n < 0) throw new Error('n 不能为负数')
  if (n === 0) return 0
  if (n === 1) return 1
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

/**
 * 使用动态规划计算斐波那契数
 * @param n - 要计算的斐波那契数的索引
 * @returns 第 n 个斐波那契数
 */
export function fibonacciDP(n: number): number {
  if (n < 0) throw new Error('n 不能为负数')
  if (n === 0) return 0
  if (n === 1) return 1

  const dp: number[] = [0, 1]
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}

/**
 * 使用动态规划（空间优化）计算斐波那契数
 * @param n - 要计算的斐波那契数的索引
 * @returns 第 n 个斐波那契数
 */
export function fibonacciOptimized(n: number): number {
  if (n < 0) throw new Error('n 不能为负数')
  if (n === 0) return 0
  if (n === 1) return 1

  let prev1 = 0,
    prev2 = 1
  for (let i = 2; i <= n; i++) {
    const current = prev1 + prev2
    prev1 = prev2
    prev2 = current
  }
  return prev2
}
