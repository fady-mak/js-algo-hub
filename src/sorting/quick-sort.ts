/**
 * 快速排序算法实现
 * @param arr - 待排序的数组
 * @returns 排序后的数组
 */
export function quickSort<T>(arr: T[]): T[] {
  // 如果数组为空或只有一个元素，直接返回
  if (arr.length <= 1) {
    return arr;
  }

  // 选择基准值（这里选择数组的中间元素）
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];

  // 分离小于基准值和大于基准值的元素
  const left: T[] = [];
  const right: T[] = [];
  const middle: T[] = []; // 用于存储等于基准值的元素

  for (const item of arr) {
    if (item < pivot) {
      left.push(item);
    } else if (item > pivot) {
      right.push(item);
    } else {
      middle.push(item);
    }
  }

  // 递归排序左右部分，并合并结果
  return [...quickSort(left), ...middle, ...quickSort(right)];
}
