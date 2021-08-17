import { ref, defineComponent } from "vue";
import { IPlaygroundState } from "../store";
import "../assets/styles/editor.css";

import { useEditor } from "../interfaces/editor/useEditor";
import { useEditorInit } from "../interfaces/editor/useEditorInit";
import { useEditorReload } from "../interfaces/editor/useEditorReload";
import { useSyntax } from "../interfaces/syntax/useSyntax";
import { useStore } from "vuex";

export default defineComponent({
  name: "Editor",
  setup() {
    const editorNode = ref<HTMLElement>();
    const outputEditorNode = ref<HTMLElement>();
    const store = useStore<IPlaygroundState>();

    useSyntax();
    useEditor(editorNode, outputEditorNode)
      .then(async([editor, output]) => {
        console.log(editor, output)
        await useEditorInit(editor, output);
        console.log(editor, output)
        const fly50w = await import("../interfaces/vm/fly50w")
        useEditorReload(editor, output, fly50w.evalCode, store.getters);
      });
    
    return () => <>
      <div class="editor" ref={editorNode}></div>
      <div class="output" ref={outputEditorNode}></div>
    </>
  }
})