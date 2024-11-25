import { describe, it, expect } from 'vitest'
import { linearSearch } from './linear-search'

describe('线性搜索', () => {
  it('在数组中找到目标值', () => {
    const array = [10, 20, 30, 40, 50]
    const target = 30
    expect(linearSearch(array, target)).toBe(2) // 目标值 30 的索引为 2
  })

  it('未找到目标值时返回 -1', () => {
    const array = [10, 20, 30, 40, 50]
    const target = 60
    expect(linearSearch(array, target)).toBe(-1) // 目标值 60 不存在
  })

  it('处理空数组的情况', () => {
    const array: number[] = []
    const target = 10
    expect(linearSearch(array, target)).toBe(-1) // 空数组中没有任何值
  })

  it('在数组第一个位置找到目标值', () => {
    const array = [10, 20, 30, 40, 50]
    const target = 10
    expect(linearSearch(array, target)).toBe(0) // 目标值 10 的索引为 0
  })

  it('在数组最后一个位置找到目标值', () => {
    const array = [10, 20, 30, 40, 50]
    const target = 50
    expect(linearSearch(array, target)).toBe(4) // 目标值 50 的索引为 4
  })

  it('处理数组中有重复值的情况', () => {
    const array = [10, 20, 30, 30, 40]
    const target = 30
    expect(linearSearch(array, target)).toBe(2) // 返回第一个匹配的索引 2
  })
})
