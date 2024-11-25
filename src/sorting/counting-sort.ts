/**
 * 计数排序算法实现
 * @param arr - 待排序的正整数数组
 * @returns 排序后的数组
 */
export function countingSort(arr: number[]): number[] {
  if (arr.length === 0) return [];

  // 找到数组中的最大值和最小值
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  // 初始化计数数组
  const count = new Array(max - min + 1).fill(0);

  // 填充计数数组
  for (const num of arr) {
    count[num - min]++;
  }

  // 构造排序后的数组
  const result: number[] = [];
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      result.push(i + min);
      count[i]--;
    }
  }

  return result;
}
