import { defineConfig } from "vitepress";
import viteConfig from "../vite.config";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "JSAlgoHub",
  description:
    "JS/TS算法分享的平台。提供精选算法教程与代码示例，助力开发者轻松掌握前端算法精髓。",
  srcDir: "./docs",
  outDir: "./dist",
  cacheDir: ".cache",
  cleanUrls: true,

  sitemap: {
    hostname: "https://jsalgohub.com",
  },
  /* prettier-ignore */
  head: [
    [ 'script', { src: 'https://hm.baidu.com/hm.js?1c1bf9e799ead0a583867ff91b363d76', defer: '' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/firacode@6.2.0/distr/fira_code.css'}],
    ['meta', { name: 'theme-color', content: '#14C868' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh-CN' }],
    ['meta', { property: 'og:title', content: 'JSAlgoHub | 算法与代码示例分享' }],
    ['meta', { property: 'og:site_name', content: 'JSAlgoHub' }],
    ['meta', { property: 'og:description', content: 'JS/TS算法分享的平台。提供精选算法教程与代码示例，助力开发者轻松掌握前端算法精髓。' }],
    ['meta', { property: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg' }],
    ['meta', { property: 'og:url', content: 'https://vitepress.dev/' }],
  ],
  markdown: {
    lineNumbers: true,
    math: true,
  },
  vite: viteConfig,
  themeConfig: {
    search: { provider: "local" },
    logo: {
      light: "/favicon.svg",
      dark: "/favicon.svg",
    },
    nav: [{ text: "首页", link: "/" }],
    sidebar: [
      { text: "简介", link: "/introduction" },
      { text: "总览", link: "/overview" },
      {
        text: "前置",
        items: [{ text: "时间复杂度", link: "/pre/complexity" }],
      },
      {
        text: "算法",
        items: [
          {
            text: "排序算法",
            collapsed: false,
            items: [
              { text: "冒泡排序", link: "/algorithm/sorting/bubble-sort" },
              { text: "选择排序", link: "/algorithm/sorting/selection-sort" },
              { text: "插入排序", link: "/algorithm/sorting/insertion-sort" },
              { text: "快速排序", link: "/algorithm/sorting/quick-sort" },
              { text: "归并排序", link: "/algorithm/sorting/merge-sort" },
              { text: "堆排序", link: "/algorithm/sorting/heap-sort" },
              { text: "计数排序", link: "/algorithm/sorting/counting-sort" },
              { text: "基数排序", link: "/algorithm/sorting/radix-sort" },
              { text: "桶排序", link: "/algorithm/sorting/bucket-sort" },
            ],
          },
          {
            text: "搜索算法",
            collapsed: false,
            items: [
              { text: "线性搜索", link: "/algorithm/search/linear-search" },
              { text: "二分搜索", link: "/algorithm/search/binary-search" },
              { text: "跳表搜索", link: "/algorithm/search/skip-list-search" },
              { text: "深度优先搜索", link: "/algorithm/search/dfs" },
              { text: "广度优先搜索", link: "/algorithm/search/bfs" },
            ],
          },
          {
            text: "动态规划算法",
            collapsed: false,
            items: [
              {
                text: "斐波那契数列",
                link: "/algorithm/dp/fibonacci-sequence",
              },
              { text: "最长公共子序列", link: "/algorithm/dp/lcs" },
              { text: "最长递增子序列", link: "/algorithm/dp/lis" },
              { text: "背包问题", link: "/algorithm/dp/knapsack-problem" },
              { text: "硬币找零问题", link: "/algorithm/dp/coin-change" },
              { text: "编辑距离", link: "/algorithm/dp/edit-distance" },
            ],
          },
          {
            text: "贪心算法",
            collapsed: false,
            items: [
              {
                text: "活动选择问题",
                link: "/algorithm/greedy/activity-selection",
              },
              {
                text: "区间调度问题",
                link: "/algorithm/greedy/interval-scheduling",
              },
              {
                text: "哈夫曼编码",
                link: "/algorithm/greedy/huffman-encoding",
              },
              {
                text: "最小生成树",
                link: "/algorithm/greedy/minimum-spanning-tree",
              },
            ],
          },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/fady-mak/js-algo-hub" },
    ],
    outline: {
      label: "目录",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    footer: {
      message:
        'Released under the <a target="_blank" href="https://github.com/fady-mak/js-algo-hub/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2024-present <a target="_blank" href="https://github.com/fady-mak">Fady Mak</a>',
    },
  },
});
