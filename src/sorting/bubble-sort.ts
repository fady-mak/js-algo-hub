/**
 * 冒泡排序函数
 * @param arr 要排序的数字数组
 * @returns 排序后的数字数组
 */
export function bubbleSort(arr: number[]): number[] {
  // 获取数组的长度
  const n = arr.length;

  // 外层循环控制排序的轮数，每轮结束后最大的元素会被"冒泡"到数组的末端
  for (let i = 0; i < n - 1; i++) {
    // 设置一个标志变量，用来检查本轮是否发生了交换
    let swapped = false;

    // 内层循环进行相邻元素的比较和交换
    for (let j = 0; j < n - 1 - i; j++) {
      // 如果当前元素比下一个元素大，交换它们
      if (arr[j] > arr[j + 1]) {
        // 使用解构赋值交换 arr[j] 和 arr[j + 1]
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // 交换
        // 设置 swapped 为 true，表示发生了交换
        swapped = true;
      }
    }

    // 如果本轮内层循环没有发生交换，说明数组已经是有序的，可以提前结束排序
    if (!swapped) break; // 如果没有交换，提前终止外层循环
  }

  // 返回排序后的数组
  return arr;
}
