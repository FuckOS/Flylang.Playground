import { defineComponent } from "vue";
import "../assets/styles/commit-tag.css";


export default defineComponent({
  name: "CommitTag",
  setup() {
    return () => (<>
      <span id="commit"><a href="$__COMMIT_URL__">@{"$__COMMIT_ID__"}</a></span>
    </>)
  }
})