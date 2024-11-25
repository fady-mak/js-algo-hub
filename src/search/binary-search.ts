/**
 * 二分搜索(迭代实现)
 * @param array 已排序数组
 * @param target 目标值
 * @returns
 */
export function binarySearch(array: number[], target: number): number {
  let left = 0
  let right = array.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (array[mid] === target) {
      return mid // 找到目标值，返回索引
    }

    if (array[mid] < target) {
      left = mid + 1 // 搜索右半部分
    } else {
      right = mid - 1 // 搜索左半部分
    }
  }

  return -1 // 未找到目标值
}

/**
 * 二分搜索(递归实现)
 * @param array 已排序数组
 * @param target 目标值
 * @param left 左边界
 * @param right 右边界
 * @returns
 */
export function binarySearchRecursive(
  array: number[],
  target: number,
  left = 0,
  right = array.length - 1
): number {
  if (left > right) {
    return -1 // 搜索范围为空，未找到目标值
  }

  const mid = Math.floor((left + right) / 2)

  if (array[mid] === target) {
    return mid // 找到目标值，返回索引
  }

  if (array[mid] < target) {
    return binarySearchRecursive(array, target, mid + 1, right) // 搜索右半部分
  }

  return binarySearchRecursive(array, target, left, mid - 1) // 搜索左半部分
}
