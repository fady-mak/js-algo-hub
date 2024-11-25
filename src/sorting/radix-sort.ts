/**
 * 基数排序算法实现
 * @param arr - 待排序的非负整数数组
 * @returns 排序后的数组
 */
export function radixSort(arr: number[]): number[] {
  if (arr.length === 0) return [];

  // 获取数组中的最大值，用于确定排序位数
  const max = Math.max(...arr);
  const getDigit = (num: number, place: number): number =>
    Math.floor(num / Math.pow(10, place)) % 10;

  // 按位排序，从个位开始到最高位
  let result = [...arr];
  let place = 0;

  while (Math.pow(10, place) <= max) {
    const buckets: number[][] = Array.from({ length: 10 }, () => []);

    // 将每个数字按当前位的值分配到对应桶
    for (const num of result) {
      const digit = getDigit(num, place);
      buckets[digit].push(num);
    }

    // 按桶顺序合并
    result = ([] as number[]).concat(...buckets);
    place++;
  }

  return result;
}
