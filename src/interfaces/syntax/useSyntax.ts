import * as monaco from 'monaco-editor';
import syntax from './syntaxDefinition';

export function useSyntax() {
  monaco.languages.register({
    id: "flylang",
    configuration: monaco.Uri.parse("flylang.worker.js")
  });
  monaco.languages.setMonarchTokensProvider("flylang", syntax);
}

