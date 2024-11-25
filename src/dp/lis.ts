/**
 * 求解最长递增子序列的长度
 * @param nums - 输入数组
 * @returns 最长递增子序列的长度
 */
export function lengthOfLIS(nums: number[]): number {
  const n = nums.length
  if (n === 0) return 0

  const dp = Array(n).fill(1) // 初始化每个位置的 LIS 长度为 1

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }

  return Math.max(...dp)
}

/**
 * 求解最长递增子序列的长度，使用二分优化
 * @param nums - 输入数组
 * @returns 最长递增子序列的长度
 */
export function lengthOfLISBinarySearch(nums: number[]): number {
  const sub: number[] = [] // 存储当前的递增子序列

  for (const num of nums) {
    // 在 sub 中找到第一个 >= num 的位置
    let left = 0,
      right = sub.length
    while (left < right) {
      const mid = Math.floor((left + right) / 2)
      if (sub[mid] >= num) {
        right = mid
      } else {
        left = mid + 1
      }
    }

    // 如果没有找到，说明 num 是最大的，直接加入
    if (left >= sub.length) {
      sub.push(num)
    } else {
      sub[left] = num // 替换以保持递增子序列
    }
  }

  return sub.length
}
