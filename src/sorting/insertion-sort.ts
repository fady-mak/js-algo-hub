/**
 * 插入排序算法实现
 * @param arr - 待排序的数组
 * @returns 排序后的数组
 */
export function insertionSort<T>(arr: T[]): T[] {
  const n = arr.length

  for (let i = 1; i < n; i++) {
    // 取出当前待插入的元素
    const current = arr[i]
    let j = i - 1

    // 从已排序部分的末尾向前遍历，找到插入位置
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j] // 元素后移
      j--
    }

    // 插入当前元素到正确位置
    arr[j + 1] = current
  }

  return arr
}
