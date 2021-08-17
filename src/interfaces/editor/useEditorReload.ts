import _ from 'lodash';
import * as monaco from 'monaco-editor';
import { watch, computed } from 'vue';

export type VMEvalFunction = (code: string) => Promise<string>;

export function useEditorReload(
  editor: monaco.editor.IStandaloneCodeEditor, 
  output: monaco.editor.IStandaloneCodeEditor, 
  vm: VMEvalFunction,
  getters: any
): void {
  let reload = async() => {
    output.setValue("Running... Wait a moment.");
    try {
      const code_out = await vm(editor.getValue());
      output.setValue(code_out);
    } catch (e: any) {
      console.log(e);
      output.setValue("Error!\n\n"+e.toString());
    }
  };
  let handle = editor.onKeyUp(_.debounce(reload, getters.debouneceTime));

  watch(computed(() => getters.debounceTime), (v: number) => {
    if (getters.autoReload) {
      handle?.dispose?.();
      handle = editor.onKeyUp(_.debounce(reload, v))
    }
  });

  watch(computed(() => getters.autoReload), (v: boolean) => {
    console.log("autoreload", v);
    if (v) {
      handle?.dispose?.();
      handle = editor.onKeyUp(_.debounce(reload, getters.debounceTime))
    } else {
      handle?.dispose?.();
    }
  });
}