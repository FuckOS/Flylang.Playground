import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx';
import replace from '@rollup/plugin-replace';

import path from 'path';
import fs from 'fs';
// Github Actions
let ci_event: any = {};
if (typeof process.env['GITHUB_EVENT_PATH'] == "string"){
  ci_event = JSON.parse(fs.readFileSync(process.env['GITHUB_EVENT_PATH'], 'utf8'));
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [jsx(), vue(), replace({
    delimiters: ['', ''],
    values: {
      '$__COMMIT_ID__': ci_event?.head_commit?.id?.slice(0,7) ?? "unknown",
      '$__COMMIT_URL__': ci_event?.head_commit?.url ?? "about:blank"
    }
  })],
  resolve:{
    alias: {
      '@': path.resolve(__dirname, "src")
    }
  }
})
