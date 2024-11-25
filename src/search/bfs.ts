type Graph = Record<number, number[]> // 邻接表表示图

/**
 * 广度优先搜索
 * @param graph - 图的邻接表表示
 * @param start - 起始节点
 * @returns 已访问的节点列表
 */
export function breadthFirstSearch(graph: Graph, start: number): number[] {
  if (!graph[start]) return [] // 如果起始节点不在图中，直接返回空数组

  const visited: Set<number> = new Set()
  const queue: number[] = [start]
  const result: number[] = []

  while (queue.length > 0) {
    const node = queue.shift()!
    if (!visited.has(node)) {
      visited.add(node)
      result.push(node)

      if (graph[node]) {
        for (const neighbor of graph[node]) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor)
          }
        }
      }
    }
  }

  return result
}
