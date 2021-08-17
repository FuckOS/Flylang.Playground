import _ from 'lodash';
import * as monaco from 'monaco-editor';

export type VMEvalFunction = (code: string) => Promise<string>;

export function useEditorReload(
  editor: monaco.editor.IStandaloneCodeEditor, 
  output: monaco.editor.IStandaloneCodeEditor, 
  vm: VMEvalFunction,
  wait_ms: number = 800
): monaco.IDisposable {
  return editor.onKeyUp(_.debounce(async() => {
    output.setValue("Running... Wait a moment.");
    try {
      const code_out = await vm(editor.getValue());
      output.setValue(code_out);
    } catch (e: any) {
      console.log(e);
      output.setValue("Error!\n\n"+e.toString());
    }
  }, wait_ms));
}