import { computed, InjectionKey, ref } from "vue";
import { State } from "./type";
import initialState from "./initialState";
import { Category, Messages } from "@/@types/schema";
import { MESSAGE_DIR, MESSAGE_PATH } from "@/constants/application";

export const useStore = () => {
  const state = ref<State>(initialState);
  const initWindow = () => {
    state.value.window.height = window.innerHeight;
    state.value.window.scrollY = window.scrollY;
  };
  const actions = {
    fetchMessages: async () => {
      const language = state.value.language;
      const res = await fetch(MESSAGE_DIR + MESSAGE_PATH[language]);
      mutations.setMessages(await res.json());
    },
  };
  const mutations = {
    setCategoryContainer: (category: Category, container: HTMLElement) => {
      state.value.containers[category] = container;
    },
    initWindow,
    setMessages: (messages: Messages) => (state.value.messages = messages),
  };

  window.addEventListener("scroll", initWindow);

  window.addEventListener("resize", initWindow);

  return { state: computed(() => state.value), actions, mutations };
};

type StateType = ReturnType<typeof useStore>;
export const STATE_KEY: InjectionKey<StateType> = Symbol("state");
