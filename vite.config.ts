import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),{
    name: 'vite-plugin-threejs',
    options: {
      // 配置 Three.js 的路径
      path: 'node_modules/three/build/three.module.js'
    }
  }],
  server: {
    host: '0.0.0.0'
  }
})
