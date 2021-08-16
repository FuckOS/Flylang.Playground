import { createApp } from 'vue'
import App from './App';
import './assets/styles/index.css';

(globalThis as any)['MonacoEnvironment'] = {
  getWorkerUrl(label: string) {
    if (label == "flylang") {
      return 'flylang.worker.js'
    }
    return 'editor.worker.js';
  }
}

createApp(App).mount('#app')