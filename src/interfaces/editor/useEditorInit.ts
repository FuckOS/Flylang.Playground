import * as monaco from 'monaco-editor';

export async function useEditorInit(
  editor: monaco.editor.IStandaloneCodeEditor,
  output: monaco.editor.IStandaloneCodeEditor,

): Promise<void> {
  editor.setValue((await import("../../assets/examples/helloworld")).default);
  output.setValue((await import("../../assets/examples/welcome")).default);
}