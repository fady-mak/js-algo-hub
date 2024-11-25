export type Interval = [number, number]

/**
 * 区间调度问题
 * @param intervals 区间数组
 * @returns 最大不重叠区间数量
 */
export function intervalScheduling(intervals: Interval[]): number {
  if (intervals.length === 0) return 0

  // 按照结束时间排序（升序）
  intervals.sort((a, b) => a[1] - b[1])

  let count = 0 // 最大不重叠区间数量
  let lastEndTime = -Infinity // 上一个选中区间的结束时间

  for (const [start, end] of intervals) {
    if (start >= lastEndTime) {
      count++
      lastEndTime = end
    }
  }

  return count
}
