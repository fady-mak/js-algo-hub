export type Edge = [number, number, number] // [起点, 终点, 权重]

/**
 * Prim 算法求最小生成树
 * @param n 节点数
 * @param edges 边数组
 * @return 最小生成树的总权重
 */
export function primMST(n: number, edges: Edge[]): number {
  const graph: Map<number, [number, number][]> = new Map()
  for (const [u, v, w] of edges) {
    if (!graph.has(u)) graph.set(u, [])
    if (!graph.has(v)) graph.set(v, [])
    graph.get(u)!.push([v, w])
    graph.get(v)!.push([u, w])
  }

  const visited = new Set<number>()
  const minHeap: [number, number][] = [] // [权重, 节点]
  let mstCost = 0

  const addEdges = (node: number) => {
    visited.add(node)
    for (const [neighbor, weight] of graph.get(node) || []) {
      if (!visited.has(neighbor)) {
        minHeap.push([weight, neighbor])
      }
    }
    minHeap.sort((a, b) => a[0] - b[0]) // 模拟堆，按照权重排序
  }

  addEdges(0) // 从节点 0 开始

  while (minHeap.length && visited.size < n) {
    const [weight, node] = minHeap.shift()!
    if (!visited.has(node)) {
      mstCost += weight
      addEdges(node)
    }
  }

  return visited.size === n ? mstCost : -1 // 如果无法连接所有节点返回 -1
}

/**
 * Kruskal 算法求最小生成树
 * @param n 节点数
 * @param edges 边数组
 * @return 最小生成树的总权重
 */
export function kruskalMST(n: number, edges: Edge[]): number {
  edges.sort((a, b) => a[2] - b[2]) // 按权重排序

  const parent = Array.from({ length: n }, (_, i) => i)
  const find = (x: number): number => (x === parent[x] ? x : (parent[x] = find(parent[x])))
  const union = (x: number, y: number): boolean => {
    const rootX = find(x)
    const rootY = find(y)
    if (rootX === rootY) return false
    parent[rootY] = rootX
    return true
  }

  let mstCost = 0
  let edgeCount = 0

  for (const [u, v, w] of edges) {
    if (union(u, v)) {
      mstCost += w
      edgeCount++
      if (edgeCount === n - 1) break // 最小生成树包含 n-1 条边
    }
  }

  return edgeCount === n - 1 ? mstCost : -1 // 如果无法连接所有节点返回 -1
}
