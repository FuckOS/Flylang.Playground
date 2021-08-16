import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx';
import replace from '@rollup/plugin-replace';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [jsx(), vue(), replace({
    delimiters: ['', ''],
    values: {
      '$__COMMIT_ID__': process.env["COMMIT_ID"].slice(0,6) ?? "unknown",
      '$__COMMIT_URL__': process.env["COMMIT_URL"] ?? "about:blank"
    }
  }),],
})
