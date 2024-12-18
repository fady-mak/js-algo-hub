# 最长递增子序列（Longest Increasing Subsequence, LIS）

## 介绍

最长递增子序列是一个经典的动态规划问题。给定一个数组，找出一个最长的子序列，使得该子序列是递增的。

> [!INFO] 例如
>
> 1. 输入数组：[10, 9, 2, 5, 3, 7, 101, 18]
>
> 最长递增子序列是：[2, 3, 7, 101]，长度为 4。
>
> 2. 问题定义
>
> 给定一个长度为$n$的数组`arr`，定义一个数组$dp$ ，其中$dp[i]$表示以下标$i$为结尾的数组中，最长递增子序列的长度。
>
> 3. 转移方程：
>
> 如果 $arr[j] < arr[i]$ 且 $j < i$ ，则 $dp[i] = \max(dp[i], dp[j] + 1) $。
>
> 4. 初始条件：
>
> 每个位置的初始最长递增子序列长度为 1，即 $dp[i] = 1$ 。 5. 最终结果：
>
> $\max(dp)$ 即为数组的最长递增子序列的长度。

## 代码

::: code-group
<<< ../../../src/dp/lis.ts

<<< ../../../src/dp/lis.test.ts
:::

## 源码

<SourceGroup/>

## 复杂度

1. 动态规划解法

- 时间复杂度：$O(n^2)$
  外层循环遍历数组$n$，内层循环更新状态$n$ ，总计$n \times n = n^2$ 。
- 空间复杂度：$O(n)$
  需要一个长度为$n$的数组来存储$dp$。

- 动态规划 + 二分查找

- 时间复杂度：$O(n \log n)$
  遍历数组$n$，每次更新子序列时使用二分查找$O(\log n)$，总计$n \log n$。
- 空间复杂度：$O(n)$
  需要一个数组$sub$来存储当前递增子序列。

## 应用场景

1. 股票价格分析：寻找股票价格的最长增长序列。
2. 序列比对：在基因序列等领域寻找最长的增长模式。
3. 动态规划练习：是动态规划问题的经典案例。

## 总结

最长递增子序列问题通过动态规划解决了递增序列的问题，而通过二分查找的优化实现了更高的效率。这种优化思想在许多动态规划问题中都能见到，比如最长递增子序列的扩展问题：最长递增子序列的路径恢复。
