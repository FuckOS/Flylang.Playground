import * as monaco from 'monaco-editor';
import { Ref, onMounted } from 'vue';

export function useEditor(
  editorN: Ref<HTMLElement | undefined>, 
  outputN: Ref<HTMLElement | undefined>, 
  configA?: monaco.editor.IStandaloneEditorConstructionOptions,
  configB?: monaco.editor.IStandaloneEditorConstructionOptions
): Promise<[
  monaco.editor.IStandaloneCodeEditor, 
  monaco.editor.IStandaloneCodeEditor
]> {
  return new Promise(r => {
    onMounted(() => {
      const editor = monaco.editor.create(editorN.value as HTMLElement, configA ?? {
        language: "flylang",
        theme: "vs-dark",
        automaticLayout: true,
        glyphMargin: true,
      });
      const output = monaco.editor.create(outputN.value as HTMLElement, configB ?? {
        language: "plaintext",
        theme: "vs-dark",
        readOnly: true,
        automaticLayout: true,
        glyphMargin: true,
        cursorStyle: undefined,
        cursorBlinking: "solid",
        selectionHighlight: false,
        wordWrap: "on"
      });
      r([editor, output])
    });
  })
}