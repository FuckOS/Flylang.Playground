import { defineComponent, ref, watch } from "vue";
import { useStore } from "vuex";
import "../assets/styles/options.css";
import { EPlaygroundBuildTarget, EPlaygroundBuildVM, IPlaygroundState, MAX_DEBOUNCE_TIME, MIN_DEBOUNCE_TIME } from "../store";

export default defineComponent({
  name: "OptionsMenu",
  setup() {

    const store = useStore<IPlaygroundState>();
    return () => (
        <div id="options-menu">
          <ul>
            <li>
              <p>Target</p>
              <select title="Target" v-model={store.state.build.target}>
                {
                  Object.values(EPlaygroundBuildTarget).map(
                    v => <option value={v}>{v}</option>
                  )
                }

              </select>
            </li>
            <li>
              <p>VM</p>
              <select v-model={store.state.build.vm}>
                {
                  Object.values(EPlaygroundBuildVM).map(
                    v => {
                      return <option value={v}>{v}</option>
                    }
                  )
                }
              </select>
            </li>
            <li>
              <p>Debounce Time</p>
              <input type="range" min={MIN_DEBOUNCE_TIME} max={MAX_DEBOUNCE_TIME} v-model={store.state.build.debounce_time}></input>
              <p style="color: #999;">
                ({((store.state.build.debounce_time)/1000).toPrecision(2)}s)
              </p>
            </li>
            <li>
              <label for="auto_reload">Auto reload</label>
              <input type="checkbox" id="auto_reload" v-model={store.state.build.auto_reload} />
            </li>
          </ul>
        </div>
    );
  }
})