import { defineComponent, watch } from "vue";
import { useStore } from "vuex";
import "../assets/styles/commit-tag.css";
// import { IPlaygroundState } from '../store';

export default defineComponent({
  name: "CommitTag",
  setup() {

    // const store = useStore<IPlaygroundState>();
    // watch(store.getters.buildConfig, (a, b) => {
    //   console.log(a, b);
    // });
    // store.
    // (globalThis as any).$store = store;
    return () => (<>
      <span id="commit"><a href="$__COMMIT_URL__">@{"$__COMMIT_ID__"}</a></span>
    </>)
  }
})