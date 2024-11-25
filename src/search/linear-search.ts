/**
 * 线性搜索算法
 * @param array 待搜索数组
 * @param target 目标值
 * @returns 目标值在数组中的索引，如果未找到则返回-1
 */
export function linearSearch<T>(array: T[], target: T): number {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i // 找到目标值，返回索引
    }
  }
  return -1 // 未找到目标值
}
