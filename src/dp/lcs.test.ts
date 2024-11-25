import { describe, it, expect } from 'vitest'
import { longestCommonSubsequence, findLCS } from './lcs'

describe('最长公共子序列', () => {
  it('计算最长公共子序列的长度', () => {
    expect(longestCommonSubsequence('ABCBDAB', 'BDCAB')).toBe(4)
    expect(longestCommonSubsequence('AGGTAB', 'GXTXAYB')).toBe(4)
    expect(longestCommonSubsequence('ABCDGH', 'AEDFHR')).toBe(3)
    expect(longestCommonSubsequence('', 'ABC')).toBe(0)
    expect(longestCommonSubsequence('ABC', '')).toBe(0)
  })

  it('返回最长公共子序列', () => {
    expect(findLCS('ABCBDAB', 'BDCAB')).toBe('BCAB')
    expect(findLCS('AGGTAB', 'GXTXAYB')).toBe('GTAB')
    expect(findLCS('ABCDGH', 'AEDFHR')).toBe('ADH')
    expect(findLCS('', 'ABC')).toBe('')
    expect(findLCS('ABC', '')).toBe('')
  })

  it('处理完全不同的字符串', () => {
    expect(longestCommonSubsequence('ABC', 'DEF')).toBe(0)
    expect(findLCS('ABC', 'DEF')).toBe('')
  })
})
