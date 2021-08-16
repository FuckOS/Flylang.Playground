import { defineComponent } from "vue";

import Header from "./components/Header";
import Editor from "./components/Editor";

export default  defineComponent({
  setup() {
    return () => <>
      <Header />
      <Editor />
    </>
  }
})