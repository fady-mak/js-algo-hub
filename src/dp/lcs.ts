/**
 * 求解两个字符串的最长公共子序列长度
 * @param X - 第一个字符串
 * @param Y - 第二个字符串
 * @returns 最长公共子序列的长度
 */
export function longestCommonSubsequence(X: string, Y: string): number {
  const m = X.length
  const n = Y.length

  // 创建二维数组 dp
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))

  // 填充 dp 表
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (X[i - 1] === Y[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[m][n]
}

/**
 * 求解两个字符串的最长公共子序列
 * @param X - 第一个字符串
 * @param Y - 第二个字符串
 * @returns 最长公共子序列
 */
export function findLCS(X: string, Y: string): string {
  const m = X.length
  const n = Y.length

  // 创建二维数组 dp
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))

  // 填充 dp 表
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (X[i - 1] === Y[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  // 回溯 dp 表，构建 LCS
  let lcs = ''
  let i = m,
    j = n
  while (i > 0 && j > 0) {
    if (X[i - 1] === Y[j - 1]) {
      lcs = X[i - 1] + lcs
      i--
      j--
    } else if (dp[i - 1][j] >= dp[i][j - 1]) {
      i-- // 优先向上移动
    } else {
      j-- // 或向左移动
    }
  }

  return lcs
}
