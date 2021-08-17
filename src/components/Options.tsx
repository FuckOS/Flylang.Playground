import { defineComponent, ref } from "vue";
import OptionsMenu from "./OptionsMenu";
import "../assets/styles/options.css";

export default defineComponent({
  name: "Options",
  setup() {
    const show = ref(false);
    const hideOptions = () => show.value = false;
    const showOptions = () => show.value = true;

    return () => (
      <>
        <div id="options-wrapper" onMouseleave={hideOptions}>
          <div id="options-label" onMouseover={showOptions} >Options</div>
          <OptionsMenu v-show={show.value} />
        </div>
      </>
    );
  }
})