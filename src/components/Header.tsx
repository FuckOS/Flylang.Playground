import { defineComponent } from "vue";
import "../assets/styles/header.css";
import CommitTag from "./CommitTag";
import Options from "./Options";

export default defineComponent({
  name: "Header",
  setup() {
    return () => <>
      <div id="header">
        <p id="title">Flylang Playground</p>
        <span id="subtitle">Beta</span>
        <CommitTag />
        <Options />
      </div>
    </>;
  }
})