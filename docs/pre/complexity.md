# 时间复杂度

时间复杂度是衡量算法效率的一个重要指标，它描述了算法在处理数据时，执行所需操作次数随着输入规模（即数据量）增长的变化趋势。本文将带你从零基础了解时间复杂度的概念、符号含义及常见的时间复杂度类型，并配以示例帮助理解。

---

当我们编写一个算法或程序时，关心的一个重要问题是：当输入数据越来越多时，程序运行需要的时间会如何变化？ 时间复杂度就是用来回答这个问题的一个数学工具。

时间复杂度用一个大写字母 `O` 和括号中的表达式表示，比如 `O(1)`、`O(n)` 或 `O(n²)`，它描述了算法的操作次数的增长速度。

## 时间复杂度符号

在时间复杂度中，`O` 后面的括号内是一个函数，用于描述输入规模 ￼（即数据量）和操作次数之间的关系。

| 符号         | 含义               | 示例说明                                                       |
| ------------ | ------------------ | -------------------------------------------------------------- |
| `n`          | 输入数据的规模     | 如果数组有 10 个元素，n = 10；如果有 100 个元素，n = 100。     |
| `O(1)`       | 常数时间复杂度     | 无论 n 的大小如何，算法总是执行固定次数的操作。                |
| `O(log n)`   | 对数时间复杂度     | 随着 n 的增长，操作次数以对数的速度增加。                      |
| `O(n)`       | 线性时间复杂度     | 操作次数与 n 成正比。                                          |
| `O(n log n)` | 线性对数时间复杂度 | 比线性增长更快，但比平方增长慢。                               |
| `O(n²)`      | 平方时间复杂度     | 操作次数随 n 的平方增长，数据量稍大就会导致很高的操作次数。    |
| `O(2^n)`     | 指数时间复杂度     | 数据量稍微增大，操作次数就会成倍增长，通常效率非常低。         |
| `O(n!)`      | 阶乘时间复杂度     | 随着数据规模增大，操作次数以阶乘增长，通常只在特定情况下使用。 |

## 常见时间复杂度符号

### `O(1)` - 常数时间复杂度

无论输入规模多大，算法始终执行固定次数的操作。

#### 示例：从一个数组中取第一个元素

```ts
function getFirstElement(arr: number[]): number {
  return arr[0] // 只执行一次操作
}
```

#### 分析：
不管数组有多少个元素，函数只取第一个元素，操作次数为 1。时间复杂度是 O(1)。

### `O(log n)` - 对数时间复杂度

   操作次数随着输入规模以对数增长，通常见于分治算法。

#### 示例：二分查找算法

```ts
function binarySearch(arr: number[], target: number): number | null {
  let left = 0,
    right = arr.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (arr[mid] === target) return mid
    else if (arr[mid] < target) left = mid + 1
    else right = mid - 1
  }
  return null
}
```

#### 分析
每次循环都将数组分成两半，假如数组长度为 16，最多只需分 ￼ 次。时间复杂度是 O(￼)。

### `O(n)` - 线性时间复杂度

操作次数与输入规模成正比。

#### 示例：
遍历一个数组：

```
function printArray(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
```

#### 分析：
如果数组有 ￼ 个元素，循环会执行 ￼ 次。时间复杂度是 O(n)。

### `O(n log n)` - 线性对数时间复杂度

   通常出现在高级排序算法中，如归并排序和快速排序。

#### 示例：归并排序

```ts
function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr
  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = []
  while (left.length && right.length) {
    if (left[0] < right[0]) result.push(left.shift()!)
    else result.push(right.shift()!)
  }
  return [...result, ...left, ...right]
}
```

#### 分析：
归并排序将数组不断二分，然后合并。每次分割操作耗时 ` O(log n) `￼，合并耗时 ￼ `O(n)` ，总时间复杂度是 `O(n log n)`。

### `O(n²)` - 平方时间复杂度

   嵌套循环通常会导致平方时间复杂度。

#### 示例：冒泡排序

```ts
function bubbleSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}
```

#### 分析：
外层循环运行 ￼`n` 次，内层循环运行 `n - 1, n - 2, …, 1 ` 次，总操作次数近似  `n²`￼。时间复杂度是 `O(n²)`。

### `O(2^n)` - 指数时间复杂度

   常见于递归算法，例如解决所有子集问题。

#### 示例：生成一个集合的所有子集

```ts
function generateSubsets(arr: number[]): number[][] {
  if (arr.length === 0) return [[]]
  const subsets = generateSubsets(arr.slice(1))
  return subsets.concat(subsets.map((set) => [arr[0], ...set]))
}
```

#### 分析：
每个元素可以选择加入或不加入子集，操作次数随着元素个数指数增长。时间复杂度是 O(2^n)。

### `O(n!)` - 阶乘时间复杂度

   通常出现在排列问题中，输入规模稍大时效率极低。

#### 示例：计算一个集合的全排列：

```ts
function permute(arr: number[]): number[][] {
  if (arr.length === 0) return [[]]
  const result: number[][] = []
  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)]
    const perms = permute(rest)
    perms.forEach((perm) => result.push([arr[i], ...perm]))
  }
  return result
}
```

#### 分析：
如果数组有 ￼`n` 个元素，操作次数为 `n!`￼。时间复杂度是 O(n!)。

## 总结

时间复杂度是算法设计和优化的关键工具。通过理解不同复杂度的增长趋势和实际场景，我们可以更有效地编写高效的程序。
