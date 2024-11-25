/**
 * 调整数组使其满足最大堆性质
 * @param arr - 待调整的数组
 * @param n - 堆的大小
 * @param i - 当前需要调整的节点索引
 */
function heapify<T>(arr: T[], n: number, i: number): void {
  let largest = i; // 初始化最大值为根节点
  const left = 2 * i + 1; // 左子节点索引
  const right = 2 * i + 2; // 右子节点索引

  // 如果左子节点比根节点大
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // 如果右子节点比最大值还大
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // 如果最大值不是根节点
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]]; // 交换
    heapify(arr, n, largest); // 递归调整
  }
}

/**
 * 堆排序算法实现
 * @param arr - 待排序的数组
 * @returns 排序后的数组
 */
export function heapSort<T>(arr: T[]): T[] {
  const n = arr.length;

  // 构建最大堆
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // 提取元素并重新调整堆
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]; // 将堆顶元素与末尾元素交换
    heapify(arr, i, 0); // 调整堆
  }

  return arr;
}
