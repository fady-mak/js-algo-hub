import { describe, it, expect } from 'vitest'
import { kruskalMST, primMST, type Edge } from './minimum-spanning-tree'

describe('最小生成树', () => {
  it('使用 Prim 算法求解', () => {
    const n = 4
    const edges: Edge[] = [
      [0, 1, 1],
      [1, 2, 2],
      [0, 2, 2],
      [2, 3, 3],
    ]
    expect(primMST(n, edges)).toBe(6)
  })

  it('使用 Kruskal 算法求解', () => {
    const n = 4
    const edges: Edge[] = [
      [0, 1, 1],
      [1, 2, 2],
      [0, 2, 2],
      [2, 3, 3],
    ]
    expect(kruskalMST(n, edges)).toBe(6)
  })

  it('处理无法连接所有节点的情况', () => {
    const n = 4
    const edges: Edge[] = [
      [0, 1, 1],
      [2, 3, 2],
    ]
    expect(primMST(n, edges)).toBe(-1)
    expect(kruskalMST(n, edges)).toBe(-1)
  })

  it('处理只有一个节点的情况', () => {
    const n = 1
    const edges: [number, number, number][] = []
    expect(primMST(n, edges)).toBe(0)
    expect(kruskalMST(n, edges)).toBe(0)
  })
})
