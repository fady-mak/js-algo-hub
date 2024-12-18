# 插入排序

## 介绍

插入排序（Insertion Sort）是一种简单直观的排序算法，通过构建有序序列，将未排序部分的元素插入到适当的位置。它类似于人们整理扑克牌的过程，每次将一张牌插入到已有序的手牌中。

> [!TIP] 插入排序的基本思想如下：
>
> 1. 从第二个元素开始，将其与前面的元素进行比较。
> 2. 如果前面的元素比当前元素大，则将前面的元素后移，为当前元素腾出插入位置。
> 3. 重复以上步骤，直到当前元素被插入到正确的位置。
> 4. 对剩余未排序的元素重复上述过程，直至整个数组有序。

## 代码

::: code-group
<<< ../../../src/sorting/insertion-sort.ts

<<< ../../../src/sorting/insertion-sort.test.ts
:::

## 源码

<SourceGroup/>

## 注意点

1. 时间复杂度：

- 最坏情况时间复杂度：$O(n^2)$，当数组是逆序时，需要大量的移动操作。
- 最好情况时间复杂度：$O(n)$，当数组已经有序时，每个元素只需要比较一次。
- 平均时间复杂度：$O(n^2)$。

1. 空间复杂度：

- 插入排序是就地排序算法，空间复杂度为 $O(1)$。

1. 稳定性：插入排序是稳定的排序算法，因为只要前面元素等于当前元素，就不会发生交换操作。
2. 优化：

- 对于已经部分有序的数组，可以减少比较和移动操作，提升效率。
- 在实际实现中，可结合二分查找优化插入点的位置。

1. 适用范围：插入排序适合处理小规模数组或部分有序的数组。

## 使用场景

插入排序虽然效率不如高级排序算法，但在以下场景中表现良好：

1. 小规模数据集：插入排序对于小规模数组（如几十个元素）效率尚可。
2. 部分有序数组：如果数组本身接近有序，插入排序可以发挥较高的效率。
3. 学习和教学：由于其简单的思想和实现，插入排序常用于学习和教学。

## 总结

插入排序是一种简单而高效的排序算法，适用于小规模或部分有序的数据集。它具有稳定性和低空间复杂度的特点，但由于其时间复杂度较高，在处理大规模数据时性能不佳。在实际应用中，可以结合其他优化策略或高级算法（如快速排序）应对复杂场景。
