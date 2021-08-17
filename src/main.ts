import { createApp } from 'vue'
import App from './App';
import store from './store';
import './assets/styles/index.css';

(globalThis as any)['MonacoEnvironment'] = {
  getWorkerUrl(label: string) {
    if (label == "flylang") {
      return 'flylang.worker.js'
    }
    return 'editor.worker.js';
  }
}

createApp(App).use(store).mount('#app')