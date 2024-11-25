// uno.config.ts
import presetRemToPx from '@unocss/preset-rem-to-px'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import { defineConfig, presetAttributify, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  safelist: [],
  shortcuts: {
    'section-container': 'mx-auto w-4/5 max-w-7xl',
    'flex-center': 'flex justify-center items-center',
    'flex-col-center': 'flex-center flex-col',
  },
  rules: [],
  theme: {},
  presets: [presetUno(), presetAttributify(), presetRemToPx(), presetWebFonts(), ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
