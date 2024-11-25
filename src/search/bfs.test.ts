import { describe, it, expect } from 'vitest'
import { breadthFirstSearch } from './bfs'

describe('广度优先搜索', () => {
  const graph = {
    0: [1, 2],
    1: [3, 4],
    2: [5],
    3: [],
    4: [6],
    5: [],
    6: [],
  }

  it('遍历整个图', () => {
    const result = breadthFirstSearch(graph, 0)
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6]) // 按层级访问的顺序
  })

  it('处理孤立节点的图', () => {
    const graphWithIsolatedNode = {
      0: [1],
      1: [],
      2: [], // 孤立节点
    }
    const result = breadthFirstSearch(graphWithIsolatedNode, 0)
    expect(result).toEqual([0, 1]) // 只访问连通的节点
  })

  it('处理空图', () => {
    const emptyGraph: Record<number, number[]> = {}
    const result = breadthFirstSearch(emptyGraph, 0)
    expect(result).toEqual([]) // 空图，无节点可访问
  })

  it('处理单个节点的图', () => {
    const singleNodeGraph = { 0: [] }
    const result = breadthFirstSearch(singleNodeGraph, 0)
    expect(result).toEqual([0]) // 只访问一个节点
  })

  it('处理环形图', () => {
    const cyclicGraph = {
      0: [1],
      1: [2],
      2: [0], // 构成环
    }
    const result = breadthFirstSearch(cyclicGraph, 0)
    expect(result).toEqual([0, 1, 2]) // 环中的节点只访问一次
  })
})
