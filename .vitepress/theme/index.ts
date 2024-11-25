import "virtual:uno.css";

// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import AlgoOverview from "./components/AlgoOverview.vue";
import SourceGroup from "./components/SourceGroup.vue";
import "./style.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    app.component("AlgoOverview", AlgoOverview);
    app.component("SourceGroup", SourceGroup);
  },
} satisfies Theme;
