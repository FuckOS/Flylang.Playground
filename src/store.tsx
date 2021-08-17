import { createStore } from "vuex";
import * as monaco from 'monaco-editor';

export const MAX_DEBOUNCE_TIME = 10000;
export const MIN_DEBOUNCE_TIME = 1000;

export enum EPlaygroundBuildTarget {
  Debug = "debug",
  Release = "release"
}

export enum EPlaygroundBuildVM {
  Fly50W = "fly50w",
}

export interface IPlaygroundState {
  editor?: monaco.editor.IStandaloneCodeEditor;
  output?: monaco.editor.IStandaloneCodeEditor;
  init: boolean;
  build: {
    target: EPlaygroundBuildTarget;
    vm: EPlaygroundBuildVM;
    debounce_time: number;
    auto_reload: boolean;
  }
}

export default createStore<IPlaygroundState>({
  state: {
    init: false,
    build: {
      target: EPlaygroundBuildTarget.Debug,
      vm: EPlaygroundBuildVM.Fly50W,
      debounce_time: MIN_DEBOUNCE_TIME,
      auto_reload: true
    }
  },
  mutations: {
    initEditor(state, [editor, output]: monaco.editor.IStandaloneCodeEditor[]) {
      if (!state.init) {
        state.editor = editor;
        state.output = output;
      }
    },
    setBuildVM(state, vm: EPlaygroundBuildVM) {
      state.build.vm = vm;
    },
    setBuildTarget(state, target: EPlaygroundBuildTarget) {
      state.build.target = target;
    },
    setAutoReload(state, val: boolean) {
      state.build.auto_reload = val;
    },
    setDebounceTime(state, time: number) {
      if (time <= MAX_DEBOUNCE_TIME && time >= MIN_DEBOUNCE_TIME) {
        state.build.debounce_time = time;
      }
    }
  },
  getters: {
    debounceTime(state) {
      return state.build.debounce_time;
    },
    autoReload(state){
      return state.build.auto_reload;
    },
    isInited(state) {
      return state.init
    },
    buildConfig(state) {
      return state.build;
    },
    getEditorInstance(state) {
      if (state.init) {
        return [state.editor!, state.output!]
      }
    }
  }
})