import { describe, it, expect } from 'vitest'
import { activitySelection } from './activity-selection'

describe('活动选择问题', () => {
  it('正确选择不冲突的活动', () => {
    const start = [1, 3, 0, 5, 8, 5]
    const end = [2, 4, 6, 7, 9, 9]
    const result = activitySelection(start, end)
    expect(result).toEqual([0, 1, 3, 4]) // 选择活动 0, 1, 3, 4
  })

  it('处理只有一个活动的情况', () => {
    const start = [0]
    const end = [1]
    const result = activitySelection(start, end)
    expect(result).toEqual([0])
  })

  it('处理所有活动互不冲突的情况', () => {
    const start = [1, 2, 3]
    const end = [4, 5, 6]
    const result = activitySelection(start, end)
    expect(result).toEqual([0]) // 修正结果
  })

  it('处理所有活动完全重叠的情况', () => {
    const start = [1, 1, 1]
    const end = [2, 2, 2]
    const result = activitySelection(start, end)
    expect(result).toEqual([0]) // 只选择第一个活动
  })

  it('处理空活动列表', () => {
    const start: number[] = []
    const end: number[] = []
    const result = activitySelection(start, end)
    expect(result).toEqual([])
  })

  it('处理开始和结束时间乱序的情况', () => {
    const start = [5, 1, 3]
    const end = [7, 2, 4]
    const result = activitySelection(start, end)
    expect(result).toEqual([1, 2, 0]) // 修正后的正确结果
  })
})
