import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
import presetWind from '@unocss/preset-wind'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    Unocss({
      theme: {
        colors: {
          'primary': '#042940',
          'secondary': '#005C53',
          'tertiary': '#9FC131',
          'quaternary': '#DBF227',
          'quinary': '#D6D58E',          
        },
        fontFamily: {
          'sans': ['Raleway'],
        },
        breakpoints: {
          xs: '320px',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          xxl: '1536px',
        },
      },
      presets: [
        presetWind({
          dark: 'class',
        }),
        presetIcons({
          collections: {
            carbon: () => import('@iconify-json/carbon/icons.json', { assert: { type: "json" } }).then(i => i.default),
          }
        }),
      ],
    }),
  ],
})
