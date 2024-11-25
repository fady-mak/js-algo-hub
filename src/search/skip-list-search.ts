/**
 * 跳表节点定义
 */
class SkipListNode<T> {
  value: T
  forward: SkipListNode<T>[] // 前向指针数组，每层一个指针

  constructor(value: T, level: number) {
    this.value = value
    this.forward = new Array(level).fill(null)
  }
}

/**
 * 跳表搜索
 */
export class SkipList<T> {
  private head: SkipListNode<T>
  private maxLevel: number
  private probability: number

  constructor(maxLevel: number = 16, probability: number = 0.5) {
    this.head = new SkipListNode<T>(null as unknown as T, maxLevel)
    this.maxLevel = maxLevel
    this.probability = probability
  }

  // 随机生成层数
  private randomLevel(): number {
    let level = 1
    while (Math.random() < this.probability && level < this.maxLevel) {
      level++
    }
    return level
  }

  // 插入值
  insert(value: T): void {
    const level = this.randomLevel()
    const newNode = new SkipListNode<T>(value, level)
    const update: SkipListNode<T>[] = new Array(this.maxLevel).fill(null)

    let current = this.head

    for (let i = this.maxLevel - 1; i >= 0; i--) {
      while (current.forward[i] && current.forward[i].value < value) {
        current = current.forward[i]
      }
      update[i] = current
    }

    for (let i = 0; i < level; i++) {
      newNode.forward[i] = update[i].forward[i]
      update[i].forward[i] = newNode
    }
  }

  // 搜索值
  search(value: T): boolean {
    let current = this.head

    for (let i = this.maxLevel - 1; i >= 0; i--) {
      while (current.forward[i] && current.forward[i].value < value) {
        current = current.forward[i]
      }
    }

    current = current.forward[0]
    return current !== null && current.value === value
  }
}
