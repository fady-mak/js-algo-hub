/**
 * 计算两个字符串的最小编辑距离
 * @param word1 - 第一个字符串
 * @param word2 - 第二个字符串
 * @returns 最小编辑距离
 */
export function minEditDistance(word1: string, word2: string): number {
  const m = word1.length
  const n = word2.length

  // 初始化 DP 数组
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))

  // 边界条件
  for (let i = 0; i <= m; i++) dp[i][0] = i
  for (let j = 0; j <= n; j++) dp[0][j] = j

  // 填充 DP 表
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] // 不需要操作
      } else {
        dp[i][j] =
          1 +
          Math.min(
            dp[i - 1][j], // 删除
            dp[i][j - 1], // 插入
            dp[i - 1][j - 1] // 替换
          )
      }
    }
  }

  return dp[m][n]
}
