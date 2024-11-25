import { describe, it, expect } from 'vitest'
import { minEditDistance } from './edit-distance'

describe('编辑距离', () => {
  it('两个完全相同的字符串', () => {
    const word1 = 'abc'
    const word2 = 'abc'
    expect(minEditDistance(word1, word2)).toBe(0) // 不需要任何操作
  })

  it('一个字符串为空', () => {
    const word1 = ''
    const word2 = 'abc'
    expect(minEditDistance(word1, word2)).toBe(3) // 插入三个字符
  })

  it('两个完全不同的字符串', () => {
    const word1 = 'abc'
    const word2 = 'def'
    expect(minEditDistance(word1, word2)).toBe(3) // 替换三个字符
  })

  it('需要插入和删除操作的情况', () => {
    const word1 = 'horse'
    const word2 = 'ros'
    expect(minEditDistance(word1, word2)).toBe(3) // 删除 'h', 替换 'o' -> 'r', 删除 'e'
  })

  it('需要替换和插入操作的情况', () => {
    const word1 = 'intention'
    const word2 = 'execution'
    expect(minEditDistance(word1, word2)).toBe(5) // 替换 'i' -> 'e', 'n' -> 'x', 插入 'u'
  })
})
