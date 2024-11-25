# 归并排序

## 介绍

归并排序（Merge Sort）是一种分治算法，通过将数组递归地分解为更小的子数组，直到每个子数组只有一个元素，然后将这些子数组逐步合并为一个有序数组。

> [!TIP] 归并排序的基本思想如下：
>
> 1. 将数组从中间分成两个子数组。
> 2. 递归地对两个子数组进行归并排序。
> 3. 合并两个有序子数组为一个有序数组。

归并排序的优点在于其稳定性和在最坏情况下也能保持较高的效率(时间复杂度为 $O(n log n)$)。但它的空间复杂度较高，需要额外的数组用于存储合并结果。

## 代码

::: code-group
<<< ../../../src/sorting/merge-sort.ts

<<< ../../../src/sorting/merge-sort.test.ts
:::

## 源码

<SourceGroup/>

## 注意点

1. **时间复杂度**：

   - 最坏情况时间复杂度：$O(n log n)$，递归分解和合并过程总共需要 $O(\log n)$ 次，每次合并需要 $O(n)$ 的时间。
   - 最好情况时间复杂度：$O(n log n)$，即使数组已经有序，仍需分解和合并。
   - 平均时间复杂度：$O(n log n)$。

2. **空间复杂度**：

   - 归并排序需要额外的数组空间存储合并结果，空间复杂度为 $O(n)$。

3. **稳定性**：

   - 归并排序是稳定的排序算法，因为在合并过程中保持了相同元素的相对顺序。

4. **优化**：

   - 对于小规模子数组，可以切换到插入排序等更高效的排序方式。
   - 可以通过自底向上的非递归实现减少递归调用栈的空间开销。

5. **适用范围**：
   - 归并排序适合数据量较大且需要稳定排序的场景。

## 使用场景

归并排序因其稳定性和良好的性能表现，常用于以下场景：

1. **需要稳定排序的场景**：

   - 例如对多个字段进行排序时，归并排序可以保留前一个排序的相对顺序。

2. **大规模数据的排序**：

   - 归并排序的性能在处理大量数据时优于简单排序算法。

3. **外部排序**：
   - 在处理不能一次性加载到内存的大数据时，归并排序是一种常见选择。

## 总结

归并排序是一种稳定、高效的排序算法，适合处理大规模或对稳定性要求较高的排序任务。尽管其空间复杂度较高，但其时间复杂度在最坏情况下也能保持 $O(n log n)$，具有非常好的性能保证。在实际应用中，归并排序常用于需要稳定排序的场景或外部排序问题。