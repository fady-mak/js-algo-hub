import { describe, it, expect } from 'vitest'
import { SkipList } from './skip-list-search'

describe('跳表搜索', () => {
  it('能够正确插入和搜索值', () => {
    const skipList = new SkipList<number>()

    skipList.insert(3)
    skipList.insert(6)
    skipList.insert(7)
    skipList.insert(9)
    skipList.insert(12)
    skipList.insert(19)
    skipList.insert(17)

    expect(skipList.search(6)).toBe(true) // 搜索到 6
    expect(skipList.search(19)).toBe(true) // 搜索到 19
    expect(skipList.search(5)).toBe(false) // 未搜索到 5
  })

  it('处理空跳表的情况', () => {
    const skipList = new SkipList<number>()
    expect(skipList.search(10)).toBe(false) // 空跳表中不存在任何值
  })

  it('搜索单一值的跳表', () => {
    const skipList = new SkipList<number>()
    skipList.insert(42)
    expect(skipList.search(42)).toBe(true) // 搜索到唯一值 42
    expect(skipList.search(7)).toBe(false) // 未搜索到 7
  })

  it('搜索跳表中不存在的值', () => {
    const skipList = new SkipList<number>()

    skipList.insert(1)
    skipList.insert(4)
    skipList.insert(7)
    expect(skipList.search(5)).toBe(false) // 未搜索到 5
  })
})
