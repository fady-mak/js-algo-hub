/**
 * 活动选择问题的贪心算法实现
 * @param start - 各活动的开始时间数组
 * @param end - 各活动的结束时间数组
 * @returns 被选择的活动索引数组
 */
export function activitySelection(start: number[], end: number[]): number[] {
  const n = start.length
  if (n === 0) return []

  // 将活动按结束时间排序，保存原索引以便返回
  const activities = start.map((s, i) => ({ start: s, end: end[i], index: i }))
  activities.sort((a, b) => a.end - b.end)

  // 贪心选择活动
  const selected: number[] = []
  let lastEndTime = -Infinity

  for (const activity of activities) {
    if (activity.start >= lastEndTime) {
      selected.push(activity.index)
      lastEndTime = activity.end
    }
  }

  return selected
}
