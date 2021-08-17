import { defineComponent } from "vue";
import "../assets/styles/header.css";
import CommitTag from "./CommitTag";

export default defineComponent({
  name: "Header",
  setup() {
    return () => <>
      <div id="header">
        <p id="title">Flylang Playground</p>
        <span id="subtitle">Beta</span>
        <CommitTag />
      </div>
    </>;
  }
})