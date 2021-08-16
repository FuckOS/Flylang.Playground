import { defineComponent } from "vue";
import "../assets/styles/header.css";

export default defineComponent({
  setup() {
    return () => <>
      <div id="header">
        <p id="title">Flylang Playground</p>
        <span id="subtitle">Beta</span>
        <span id="commit"><a href="$__COMMIT_URL__">@{"$__COMMIT_ID__"}</a></span>
      </div>
    </>;
  }
})