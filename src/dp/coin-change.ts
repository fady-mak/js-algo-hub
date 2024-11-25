/**
 * 硬币找零问题
 * @param coins - 硬币面值数组
 * @param amount - 总金额
 * @returns 最少硬币数，无法凑成返回 -1
 */
export function coinChange(coins: number[], amount: number): number {
  const dp = Array(amount + 1).fill(Infinity)
  dp[0] = 0

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1)
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount]
}
