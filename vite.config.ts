

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

import {
  AntDesignVueResolver,
} from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/

// console.log('meta',import.meta)

export default defineConfig({
  plugins: [vue(),

  Components({
    resolvers: [
      AntDesignVueResolver({
        importStyle: false
      })
    ],
  })],

  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          '@primary-color': 'rgb(181, 18, 157)'
        },
        javascriptEnabled: true,
      },
    },
  },
})
