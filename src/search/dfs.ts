type Graph = Record<number, number[]> // 邻接表表示图

/**
 * 深度优先搜索
 * @param graph - 图的邻接表表示
 * @param start - 起始节点
 * @returns 已访问的节点列表
 */
export function depthFirstSearch(graph: Graph, start: number): number[] {
  const visited: Set<number> = new Set()
  const result: number[] = []

  function dfs(node: number): void {
    if (visited.has(node)) return // 如果节点已访问，直接返回
    visited.add(node) // 标记节点为已访问
    result.push(node) // 记录访问顺序

    // 遍历当前节点的所有邻节点
    if (graph[node]) {
      // 确保 graph[node] 存在
      for (const neighbor of graph[node]) {
        dfs(neighbor)
      }
    }
  }

  if (graph[start]) dfs(start) // 起始节点存在时才调用 dfs
  return result
}

/**
 * 深度优先搜索（迭代版）
 * @param graph - 图的邻接表表示
 * @param start - 起始节点
 * @returns 已访问的节点列表
 */
export function depthFirstSearchIterative(graph: Graph, start: number): number[] {
  if (!graph[start]) return [] // 起始节点不存在或图为空，直接返回空数组

  const visited: Set<number> = new Set()
  const stack: number[] = [start]
  const result: number[] = []

  while (stack.length > 0) {
    const node = stack.pop()!
    if (!visited.has(node)) {
      visited.add(node) // 标记节点为已访问
      result.push(node) // 记录访问顺序

      // 检查 graph[node] 是否存在
      if (graph[node]) {
        // 将未访问的邻节点加入栈（逆序入栈以保持顺序）
        for (const neighbor of [...graph[node]].reverse()) {
          if (!visited.has(neighbor)) {
            stack.push(neighbor)
          }
        }
      }
    }
  }

  return result
}
