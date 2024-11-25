/**
 * 0/1 背包问题 - 二维动态规划
 * @param weights - 物品重量数组
 * @param values - 物品价值数组
 * @param W - 背包容量
 * @returns 最大价值
 */
export function knapsack(weights: number[], values: number[], W: number): number {
  const n = weights.length
  const dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0))

  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= W; w++) {
      if (weights[i - 1] > w) {
        dp[i][w] = dp[i - 1][w] // 当前物品重量超出容量
      } else {
        dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1])
      }
    }
  }

  return dp[n][W]
}

/**
 * 0/1 背包问题 - 一维动态规划
 * @param weights - 物品重量数组
 * @param values - 物品价值数组
 * @param W - 背包容量
 * @returns 最大价值
 */
export function knapsackOptimized(weights: number[], values: number[], W: number): number {
  const n = weights.length
  const dp = Array(W + 1).fill(0)

  for (let i = 0; i < n; i++) {
    for (let w = W; w >= weights[i]; w--) {
      dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i])
    }
  }

  return dp[W]
}
