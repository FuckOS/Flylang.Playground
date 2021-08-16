import { defineConfig } from 'rollup';
import { terser } from 'rollup-plugin-terser';
import node from '@rollup/plugin-node-resolve';
import cjs from '@rollup/plugin-commonjs'

const baseConfig = defineConfig({
  plugins: [cjs(), node(), terser()]
});

export default [
  defineConfig({
    input: "node_modules/monaco-editor/esm/vs/editor/editor.worker.js",
    output: {
      file: "public/editor.worker.js",
      format: "iife"
    },
    ...baseConfig
  })
]