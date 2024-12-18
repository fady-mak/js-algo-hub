# 二分搜索（Binary Search）

## 介绍

二分搜索是一种高效的查找算法，适用于 有序数组。它通过反复将搜索范围减半，快速找到目标值的位置。相比于线性搜索，二分搜索的时间复杂度更低，适合处理大规模数据。

> [!TIP] 算法思想
>
> 1. 初始化搜索范围：设定左边界 `left` 和右边界 `right`。
> 2. 计算中点：令 `mid = Math.floor((left + right) / 2)`。
> 3. 比较目标值 `target` 和中点值 `array[mid]`：
>
> - 如果相等，返回中点索引 `mid`。
> - 如果目标值小于中点值，搜索范围缩小到左半部分`（right = mid - 1）`。
> - 如果目标值大于中点值，搜索范围缩小到右半部分`（left = mid + 1）`。
>
> 4. 重复上述步骤，直到找到目标值或搜索范围为空。

## 特点

1. 时间复杂度：

- 最好情况：目标值正好位于中点，时间复杂度为$O(1)$。
- 最坏情况：通过多次减半搜索范围，时间复杂度为 $O(\log n)$，其中$n$是数组长度。
- 平均时间复杂度：￼$O(\log n)$。

2. 空间复杂度：

- ￼$O(\log n)$（迭代实现）。
- ￼$O(\log n)$（递归实现，需要额外的函数调用栈空间）。

3. 适用条件：

- 数据必须有序。
- 支持随机访问。

## 代码

::: code-group
<<< ../../../src/search/binary-search.ts

<<< ../../../src/search/binary-search.test.ts
:::

## 源码

<SourceGroup/>

## 注意点

1. 数组必须有序：

- 二分搜索依赖有序性，否则可能返回错误结果。

2. 边界情况：

- 确保正确处理空数组或单元素数组。

3. 目标值重复：

- 二分搜索找到的可能是任意一个目标值的索引，如果需要第一个或最后一个匹配值的索引，需要额外处理。

## 适用场景

1. 有序数组的查找：

- 例如数字、字母等。

2. 高效查找：

- 数据量较大时，二分搜索效率高于线性搜索。

3. 需要快速搜索：

- 例如字典查找、范围定位。

## 优化与扩展

1. 搜索上下边界：

- 二分搜索可用于查找范围的上下界（如在排序数组中查找值的区间）。

2. 插值搜索：

- 对于均匀分布的数组，插值搜索可能比二分搜索更高效。

3. 二分变体：

- 例如在旋转排序数组中查找目标值。

二分搜索是基础且强大的查找算法，在现代计算中有广泛应用。
