import { describe, it, expect } from 'vitest'
import { lengthOfLIS, lengthOfLISBinarySearch } from './lis'

describe('最长递增子序列', () => {
  it('基本测试用例', () => {
    expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4)
    expect(lengthOfLISBinarySearch([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4)
  })

  it('全递增数组', () => {
    expect(lengthOfLIS([1, 2, 3, 4, 5])).toBe(5)
    expect(lengthOfLISBinarySearch([1, 2, 3, 4, 5])).toBe(5)
  })

  it('全递减数组', () => {
    expect(lengthOfLIS([5, 4, 3, 2, 1])).toBe(1)
    expect(lengthOfLISBinarySearch([5, 4, 3, 2, 1])).toBe(1)
  })

  it('含有重复元素的数组', () => {
    expect(lengthOfLIS([2, 2, 2, 2, 2])).toBe(1)
    expect(lengthOfLISBinarySearch([2, 2, 2, 2, 2])).toBe(1)
  })

  it('空数组', () => {
    expect(lengthOfLIS([])).toBe(0)
    expect(lengthOfLISBinarySearch([])).toBe(0)
  })
})
