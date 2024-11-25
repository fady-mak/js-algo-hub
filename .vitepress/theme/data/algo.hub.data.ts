export default {
  load() {
    return {
      algos: [
        {
          id: 'sorting',
          label: '排序算法',
          description: '用于将数据按特定顺序（升序或降序）排列。',
          items: [
            {
              label: '冒泡排序',
              en: 'Bubble Sort',
              description:
                '通过重复遍历数组，每次比较相邻元素并交换位置，将最大的元素逐渐“冒泡”到数组末尾。',
              complexity: 'O(n²)',
            },
            {
              label: '选择排序',
              en: 'Selection Sort',
              description: '每次遍历数组选择最小的元素，与当前遍历位置的元素交换。',
              complexity: 'O(n²)',
            },
            {
              label: '插入排序',
              en: 'Insertion Sort',
              description:
                '将数组分为已排序和未排序部分，每次将未排序部分的第一个元素插入到已排序部分的正确位置。',
              complexity: 'O(n²)',
            },
            {
              label: '快速排序',
              en: 'Quick Sort',
              description: '选择一个基准值，将数组分为比基准值小和大的两部分，递归对两部分排序。',
              complexity: 'O(n log n)',
            },
            {
              label: '归并排序',
              en: 'Merge Sort',
              description: '通过分治法将数组分成更小的子数组，分别排序后合并，最终形成有序数组。',
              complexity: 'O(n log n)',
            },
            {
              label: '堆排序',
              en: 'Heap Sort',
              description:
                '利用堆（通常是大顶堆或小顶堆）的性质，反复提取最大或最小元素，构建有序数组。',
              complexity: 'O(n log n)',
            },
            {
              label: '计数排序',
              en: 'Counting Sort',
              description:
                '通过计数每个元素的出现次数，再根据计数结果直接排序，适合范围有限的整数。',
              complexity: 'O(n + k)',
              complexityDescription: 'n 为输入大小，k 为最大值范围',
            },
            {
              label: '基数排序',
              en: 'Radix Sort',
              description: '按位（个位、十位等）逐位排序，通过多次稳定排序完成整体排序。',
              complexity: 'O(nk)',
              complexityDescription: 'n 为输入大小，k 为位数',
            },
            {
              label: '桶排序',
              en: 'Bucket Sort',
              description: '将数据分到多个桶中，分别对桶内数据排序，最后合并所有桶的数据。',
              complexity: 'O(n + k)',
              complexityDescription: 'n 为输入大小，k 为桶的数量',
            },
          ],
        },
        {
          id: 'search',
          label: '搜索算法',
          description: '用于查找数据中的特定元素。',
          items: [
            {
              label: '线性搜索',
              en: 'Linear Search',
              description: '从头到尾依次遍历数组，直到找到目标元素。',
              complexity: 'O(n)',
            },
            {
              label: '二分搜索',
              en: 'Binary Search',
              description: '针对有序数组，每次比较目标值与中间值，逐步缩小搜索范围。',
              complexity: 'O(log n)',
            },
            {
              label: '跳表搜索',
              en: 'Skip List Search',
              description: '在链表的基础上添加多级索引，通过跳跃式查找提高效率。',
              complexity: 'O(log n)',
            },
            {
              label: '深度优先搜索',
              abbr: 'DFS',
              en: 'Depth First Search',
              description: '在树或图中，从起点出发，沿一条路径走到最深，再回溯探索其他路径。',
              complexity: 'O(V + E)',
              complexityDescription: 'V为顶点数，E为边数',
            },
            {
              label: '广度优先搜索',
              abbr: 'BFS',
              en: 'Breadth First Search',
              description: '在树或图中，从起点出发，逐层向外扩展搜索，直到找到目标。',
              complexity: 'O(V + E)',
              complexityDescription: 'V为顶点数，E为边数',
            },
          ],
        },
        {
          id: 'dp',
          label: '动态规划算法',
          description: '通过分解问题为子问题并记忆结果来解决复杂问题。',
          items: [
            {
              label: '斐波那契数列',
              en: 'Fibonacci Sequence',
              description: '求解斐波那契数列中的某一项，通过记忆化减少重复计算。',
              complexity: 'O(n)',
            },
            {
              label: '最长公共子序列',
              abbr: 'LCS',
              en: 'Longest Common Subsequence',
              description: '找出两个序列的最长公共子序列。',
              complexity: 'O(n²)',
            },
            {
              label: '最长递增子序列',
              abbr: 'LIS',
              en: 'Longest Increasing Subsequence',
              description: '找出数组中最长递增的子序列。',
              complexity: 'O(n²)',
            },
            {
              label: '背包问题',
              en: 'Knapsack Problem',
              description: '在重量和价值之间进行权衡，选择放入背包的物品以获得最大价值。',
              complexity: 'O(nW)',
              complexityDescription: 'n 为物品数量，W 为背包容量',
            },
            {
              label: '硬币找零问题',
              en: 'Coin Change',
              description: '在给定硬币面值下，计算凑出目标金额的最少硬币数。',
              complexity: 'O(nW)',
              complexityDescription: 'n 为硬币种类数，W 为目标金额',
            },
            {
              label: '编辑距离',
              en: 'Edit Distance',
              description: '计算将一个字符串转换为另一个字符串的最少操作次数。',
              complexity: 'O(mn)',
              complexityDescription: 'm 和 n 分别为两个字符串的长度',
            },
          ],
        },
        {
          id: 'greedy',
          label: '贪心算法',
          description: '通过每次选择当前最优解，构造整体解。',
          items: [
            {
              label: '活动选择问题',
              en: 'Activity Selection',
              description: '在多个活动中选择最多的非重叠活动。',
              complexity: 'O(n log n)',
            },
            {
              label: '哈夫曼编码',
              en: 'Huffman Encoding',
              description: '利用字符出现频率构建最优前缀编码树，用于数据压缩。',
              complexity: 'O(n log n)',
            },
            {
              label: '最小生成树',
              en: 'Minimum Spanning Tree',
              description: '寻找图中连接所有节点的最小权重子图。',
              complexity: 'O(E log V)',
              complexityDescription: 'E 为边数，V 为顶点数',
            },
            {
              label: '区间调度问题',
              en: 'Interval Scheduling',
              description: '在给定的时间区间中选择最多的相容区间。',
              complexity: 'O(n log n)',
            },
          ],
        },
      ],
    }
  },
}
