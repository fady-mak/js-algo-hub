<template>
  <div class="flex items-center gap-2">
    <a
      v-for="(item, i) in paths"
      :key="i"
      :href="`${item.path}`"
      target="_blank"
      class="text-sm text-gray-500 hover:text-gray-700"
    >
      {{ item.label }}
    </a>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
// @ts-ignore
const baseUrl = import.meta.env.VITE_FILE_BASE_URL

import { useData } from 'vitepress'
const data = useData()
const paths = computed(() => {
  const path = data.page.value.filePath.replace(/\.md$/, '').replace('algorithm', '')
  return [
    {
      label: '源码',
      path: `${baseUrl}${path}.ts`,
    },
    {
      label: '测试',
      path: `${baseUrl}${path}.test.ts`,
    },
  ]
})
</script>

<style scoped></style>
