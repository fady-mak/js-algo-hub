/**
 * 桶排序算法实现
 * @param arr - 待排序的数字数组
 * @param bucketSize - 每个桶的范围大小（默认为 5）
 * @returns 排序后的数组
 */
export function bucketSort(arr: number[], bucketSize = 5): number[] {
  if (arr.length === 0) return [];

  // 找到数组中的最大值和最小值
  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);

  // 根据范围大小计算桶的数量
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets: number[][] = Array.from({ length: bucketCount }, () => []);

  // 将每个元素分配到对应的桶
  for (const num of arr) {
    const bucketIndex = Math.floor((num - minValue) / bucketSize);
    buckets[bucketIndex].push(num);
  }

  // 对每个桶中的数据排序，然后合并结果
  return buckets.reduce((sortedArray, bucket) => {
    if (bucket.length > 0) {
      // 对桶内数据排序（可以选择不同的排序算法，此处使用内置排序）
      bucket.sort((a, b) => a - b);
      sortedArray.push(...bucket);
    }
    return sortedArray;
  }, [] as number[]);
}
