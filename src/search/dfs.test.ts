import { describe, it, expect } from 'vitest'
import { depthFirstSearch, depthFirstSearchIterative } from './dfs'

describe('深度优先搜索', () => {
  const graph = {
    0: [1, 2],
    1: [3, 4],
    2: [5],
    3: [],
    4: [6],
    5: [],
    6: [],
  }

  it('递归实现 - 遍历整个图', () => {
    const result = depthFirstSearch(graph, 0)
    expect(result).toEqual([0, 1, 3, 4, 6, 2, 5]) // 深度优先的访问顺序
  })

  it('迭代实现 - 遍历整个图', () => {
    const result = depthFirstSearchIterative(graph, 0)
    expect(result).toEqual([0, 1, 3, 4, 6, 2, 5]) // 深度优先的访问顺序
  })

  it('处理孤立节点的图', () => {
    const graphWithIsolatedNode = {
      0: [1],
      1: [],
      2: [], // 孤立节点
    }
    const result = depthFirstSearch(graphWithIsolatedNode, 0)
    expect(result).toEqual([0, 1]) // 只访问连通的节点
  })

  it('处理空图', () => {
    const emptyGraph: Record<number, number[]> = {}
    const result = depthFirstSearch(emptyGraph, 0)
    expect(result).toEqual([]) // 空图，无节点可访问
  })

  it('处理空图（迭代版）', () => {
    const emptyGraph: Record<number, number[]> = {}
    const result = depthFirstSearchIterative(emptyGraph, 0)
    console.log({ label: 'dfs', result })
    expect(result).toEqual([]) // 空图，无节点可访问
  })

  it('处理单个节点的图', () => {
    const singleNodeGraph = { 0: [] }
    const result = depthFirstSearch(singleNodeGraph, 0)
    expect(result).toEqual([0]) // 只访问一个节点
  })
})
