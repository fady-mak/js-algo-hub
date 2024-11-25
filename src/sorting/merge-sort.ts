/**
 * 合并两个有序数组
 * @param left - 左子数组
 * @param right - 右子数组
 * @returns 合并后的有序数组
 */
function merge<T>(left: T[], right: T[]): T[] {
  const result: T[] = [];
  let i = 0,
    j = 0;

  // 比较两个子数组中的元素，按顺序合并到结果数组中
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // 将剩余元素添加到结果数组
  return result.concat(left.slice(i)).concat(right.slice(j));
}

/**
 * 归并排序算法实现
 * @param arr - 待排序的数组
 * @returns 排序后的数组
 */
export function mergeSort<T>(arr: T[]): T[] {
  // 如果数组长度为 1 或 0，直接返回
  if (arr.length <= 1) {
    return arr;
  }

  // 分割数组为左右两部分
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // 递归排序左右两部分并合并
  return merge(mergeSort(left), mergeSort(right));
}
