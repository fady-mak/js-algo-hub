type HuffmanNode = {
  char?: string // 字符（可能为空，用于中间节点）
  freq: number // 频率
  left?: HuffmanNode // 左子树
  right?: HuffmanNode // 右子树
}

// 构造哈夫曼编码
export function huffmanCoding(chars: string[], freqs: number[]): Map<string, string> {
  const nodes: HuffmanNode[] = chars.map((char, i) => ({ char, freq: freqs[i] }))

  // 构造哈夫曼树
  while (nodes.length > 1) {
    // 按频率排序，取最小的两个节点
    nodes.sort((a, b) => a.freq - b.freq)
    const left = nodes.shift()!
    const right = nodes.shift()!
    nodes.push({
      freq: left.freq + right.freq,
      left,
      right,
    })
  }

  // 生成编码表
  const root = nodes[0]
  const codes = new Map<string, string>()

  const generateCodes = (node: HuffmanNode, prefix: string) => {
    if (node.char !== undefined) {
      codes.set(node.char, prefix) // 叶子节点，保存编码
    } else {
      if (node.left) generateCodes(node.left, prefix + '0')
      if (node.right) generateCodes(node.right, prefix + '1')
    }
  }

  generateCodes(root, '')
  return codes
}
