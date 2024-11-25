# 斐波那契数列

## 介绍

斐波那契数列是一个数学序列，从 0 和 1 开始，每个后续数字等于前两个数字之和。它的定义如下：

$$F(0) = 0,\ F(1) = 1,\ F(n) = F(n-1) + F(n-2) \quad \text{for } n \geq 2$$

前几个斐波那契数是：
$$0, 1, 1, 2, 3, 5, 8, 13, 21, 34, \ldots$$
￼

斐波那契数列在数学和计算机科学中有许多应用，例如动态规划、递归算法和黄金比例的计算等。

## 实现方式

1. 涵盖递归
   - 优点：实现简单，直观。
   - 缺点：时间复杂度 $O(2^n)$，效率低下，可能导致栈溢出。
2. 迭代
   - 优点：时间复杂度 $O(n)$，空间复杂度 $O(n)$。
   - 缺点：占用额外的存储空间。
3. 动态规划
   - 优点：时间复杂度 $O(n)$，空间复杂度 $O(1)$。

## 代码

::: code-group

<<< ../../../src/dp/fibonacci-sequence.ts

<<< ../../../src/dp/fibonacci-sequence.test.ts
:::

## 源码

<SourceGroup/>

## 复杂度

1. 递归实现

- 时间复杂度：$O(2^n)$
- 空间复杂度：$O(n)$（递归调用栈）

2. 动态规划实现

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$（存储数组）

3. 空间优化的动态规划实现

- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$

## 应用场景

1. 动态规划：许多问题（如硬币找零、最长公共子序列）可以使用斐波那契的思路进行求解。
2. 自然现象建模：斐波那契数列常用于描述植物生长、贝壳形状等自然现象。
3. 算法设计：它是递归、动态规划等算法思想的入门示例。

## 总结

斐波那契数列是一种简单而广泛的数学模型，其实现方式可以从递归到动态规划逐步优化。在实际应用中，为了处理大规模计算，通常选择时间和空间复杂度较优的动态规划实现或其优化版本。