<template>
  <div class="flex flex-col py-10">
    <dl v-for="group in algos" :key="group.id" class="my-4">
      <dt class="text-zinc-4! text-lg!">
        <!-- <a class="text-zinc-4! text-lg!" :href="toKebabCase(group.id)">{{ group.label }}</a> -->
        {{ group.label }}
      </dt>
      <dd class="p-0 m-0 text-sm">
        <ul class="list-none p-0! flex flex-col gap-2">
          <li v-for="algo in group.items" :key="algo.id" class="flex flex-col items-start gap-1">
            <a
              class="bg-zinc-1 px-2 rounded text-sm font-normal!"
              :href="toKebabCase(`algorithm/${group.id}/${algo.abbr ?? algo.en}`)"
            >
              {{ algo.label }} ({{ algo.en }})
            </a>
            <small>{{ algo.description }}</small>
          </li>
        </ul>
      </dd>
    </dl>
  </div>
</template>

<script setup lang="ts">
import { data } from '../data/algo.hub.data'
const { algos } = data
const res: any[] = []
algos.forEach((group) => {
  const item: any = {
    text: group.label,
    link: toKebabCase(`/algorithm/${group.id}`),
    items: [],
  }
  group.items.forEach((algo) => {
    item.items.push({
      text: `${algo.label}`,
      link: toKebabCase(`/algorithm/${group.id}/${algo.abbr ?? algo.en}`),
    })
  })
  res.push(item)
})

/**
 * 将字符串转换为 kebab-case（短横线分隔的小写格式）。
 *
 * @param input - 要转换的输入字符串。
 * @returns 转换为 kebab-case 的字符串。
 */
function toKebabCase(input: string): string {
  return input
    .replace(/([a-z])([A-Z])/g, '$1-$2') // 在小写字母和紧随的大写字母之间添加短横线。
    .replace(/\s+/g, '-') // 将空格替换为短横线。
    .replace(/_/g, '-') // 将下划线替换为短横线。
    .toLowerCase() // 将整个字符串转换为小写。
}
</script>

<style scoped></style>
