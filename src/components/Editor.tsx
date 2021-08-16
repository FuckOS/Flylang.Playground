import { ref, Ref, defineComponent, onMounted } from "vue";

import * as monaco from 'monaco-editor';
import syntax from '../assets/syntax';
import run from '../utils/runcode';

import "../assets/styles/editor.css";

function useFlySyntax() {
  monaco.languages.register({
    id: "flylang",
    configuration: monaco.Uri.parse("flylang.worker.js")
  });
  monaco.languages.setMonarchTokensProvider("flylang", syntax);
}

function useEditor(editorN: Ref<HTMLElement | undefined>, outputN: Ref<HTMLElement | undefined>): 
  Promise<[monaco.editor.IStandaloneCodeEditor, monaco.editor.IStandaloneCodeEditor]> {
  return new Promise(r => {
    onMounted(() => {
      const editor = monaco.editor.create(editorN.value as HTMLElement, {
        language: "flylang",
        theme: "vs-dark",
        automaticLayout: true,
        glyphMargin: true,
      });

      const output = monaco.editor.create(outputN.value as HTMLElement, {
        language: "plaintext",
        theme: "vs-dark",
        readOnly: true,
        automaticLayout: true,
        glyphMargin: true,
        cursorStyle: undefined,
      });
      r([editor, output])
    });
  })
}

export default  defineComponent({
  setup() {
    const editorNode: Ref<HTMLElement | undefined> = ref();
    const outputEditorNode: Ref<HTMLElement | undefined> = ref();
    useFlySyntax();
    useEditor(editorNode, outputEditorNode).then(
      async([editor, output]) => {
        editor.setValue((await import("../assets/examples/helloworld")).default)
        output.setValue((await import("../assets/examples/welcome")).default)
        editor.onKeyUp(async() => {
          output.setValue("Running...");
          try {
            const code_out = await run(editor.getValue());
            output.setValue(code_out);
          } catch (e: any) {
            console.log(e);
            output.setValue("Playground Error!\n\n"+e.toString());
          }
        })
      }
    )
    
    return () => <>
      <div class="editor" ref={editorNode}></div>
      <div class="output" ref={outputEditorNode}></div>
    </>
  }
})