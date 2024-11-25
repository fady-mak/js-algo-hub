/**
 * 选择排序算法实现
 * @param arr - 待排序的数组
 * @returns 排序后的数组
 */
export function selectionSort<T>(arr: T[]): T[] {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // 假设当前第 i 个元素是最小值
    let minIndex = i;

    // 遍历剩余未排序部分寻找最小值
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // 如果找到更小的值，交换位置
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}