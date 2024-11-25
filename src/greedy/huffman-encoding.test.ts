import { describe, it, expect } from 'vitest'
import { huffmanCoding } from './huffman-encoding'

describe('哈夫曼编码', () => {
  it('正确生成编码表', () => {
    const chars = ['a', 'b', 'c', 'd', 'e']
    const freqs = [5, 9, 12, 13, 16]
    const codes = huffmanCoding(chars, freqs)
    expect(codes.size).toBe(5)
    expect(codes.get('a')).toMatch(/[01]+/) // 确保生成的编码是二进制字符串
    expect(codes.get('b')).toMatch(/[01]+/)
    expect(codes.get('c')).toMatch(/[01]+/)
    expect(codes.get('d')).toMatch(/[01]+/)
    expect(codes.get('e')).toMatch(/[01]+/)
  })

  it('处理只有一个字符的情况', () => {
    const chars = ['x']
    const freqs = [10]
    const codes = huffmanCoding(chars, freqs)
    expect(codes.get('x')).toBe('') // 只有一个字符，无需编码
  })

  it('正确处理字符频率不同的情况', () => {
    const chars = ['a', 'b', 'c', 'd']
    const freqs = [1, 1, 1, 10]
    const codes = huffmanCoding(chars, freqs)
    expect(codes.get('d')?.length).toBeLessThan(3) // 频率最高的字符应有最短编码
  })

  it('正确处理频率相同的情况', () => {
    const chars = ['x', 'y', 'z']
    const freqs = [3, 3, 3]
    const codes = huffmanCoding(chars, freqs)
    expect(codes.size).toBe(3)
  })
})
