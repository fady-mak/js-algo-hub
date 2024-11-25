import { describe, it, expect } from 'vitest'
import { intervalScheduling, type Interval } from './interval-scheduling'

describe('区间调度问题', () => {
  it('处理基础测试用例', () => {
    const intervals: Interval[] = [
      [1, 3],
      [2, 4],
      [3, 5],
    ]
    expect(intervalScheduling(intervals)).toBe(2) // 选择 [1,3] 和 [3,5]
  })

  it('处理完全重叠的区间', () => {
    const intervals: Interval[] = [
      [1, 4],
      [2, 4],
      [3, 4],
    ]
    expect(intervalScheduling(intervals)).toBe(1) // 选择 [1,4]（或其他任意一个）
  })

  it('处理没有重叠的区间', () => {
    const intervals: Interval[] = [
      [1, 2],
      [3, 4],
      [5, 6],
    ]
    expect(intervalScheduling(intervals)).toBe(3) // 全部选择
  })

  it('处理空区间集合', () => {
    const intervals: Interval[] = []
    expect(intervalScheduling(intervals)).toBe(0)
  })

  it('处理单个区间', () => {
    const intervals: Interval[] = [[0, 1]]
    expect(intervalScheduling(intervals)).toBe(1)
  })

  it('处理复杂的区间集合', () => {
    const intervals: Interval[] = [
      [1, 2],
      [2, 3],
      [3, 4],
      [1, 3],
      [2, 5],
      [4, 6],
    ]
    expect(intervalScheduling(intervals)).toBe(4) // 选择 [1,2], [2,3], [3,4], [4,6]
  })
})
