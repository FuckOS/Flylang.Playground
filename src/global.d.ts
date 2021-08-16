import type monaco from 'monaco-editor';

declare module globalThis {
  var MonacoEnvironment: monaco.Environment;
}