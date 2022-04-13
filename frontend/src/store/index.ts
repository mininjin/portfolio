import { computed, InjectionKey, ref } from "vue";
import { State } from "./type";
import initialState from "./initialState";
import { Category } from "@/@types/schema";

export const useStore = () => {
  const state = ref<State>(initialState);
  const initWindow = () => {
    state.value.window.height = window.innerHeight;
    state.value.window.scrollY = window.scrollY;
  };
  const actions = {};
  const mutations = {
    setCategoryContainer: (category: Category, container: HTMLElement) => {
      state.value.containers[category] = container;
    },
    initWindow,
  };

  window.addEventListener("scroll", initWindow);

  window.addEventListener("resize", initWindow);

  return { state: computed(() => state.value), actions, mutations };
};

type StateType = ReturnType<typeof useStore>;
export const STATE_KEY: InjectionKey<StateType> = Symbol("state");
