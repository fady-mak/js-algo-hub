import { describe, it, expect } from 'vitest'
import { binarySearch, binarySearchRecursive } from './binary-search'

describe('二分搜索', () => {
  it('在数组中找到目标值（迭代实现）', () => {
    const array = [1, 3, 5, 7, 9, 11]
    expect(binarySearch(array, 5)).toBe(2) // 目标值 5 在索引 2
  })

  it('在数组中找到目标值（递归实现）', () => {
    const array = [1, 3, 5, 7, 9, 11]
    expect(binarySearchRecursive(array, 5)).toBe(2) // 目标值 5 在索引 2
  })

  it('未找到目标值时返回 -1', () => {
    const array = [1, 3, 5, 7, 9, 11]
    expect(binarySearch(array, 8)).toBe(-1) // 目标值 8 不存在
    expect(binarySearchRecursive(array, 8)).toBe(-1)
  })

  it('处理空数组的情况', () => {
    const array: number[] = []
    expect(binarySearch(array, 10)).toBe(-1) // 空数组中目标值不存在
    expect(binarySearchRecursive(array, 10)).toBe(-1)
  })

  it('在数组边界找到目标值', () => {
    const array = [10, 20, 30, 40, 50]
    expect(binarySearch(array, 10)).toBe(0) // 目标值 10 在索引 0
    expect(binarySearch(array, 50)).toBe(4) // 目标值 50 在索引 4
    expect(binarySearchRecursive(array, 10)).toBe(0)
    expect(binarySearchRecursive(array, 50)).toBe(4)
  })
})
