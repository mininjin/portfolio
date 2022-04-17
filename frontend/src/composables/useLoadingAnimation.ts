import {
  LOADED_CHECK_WAIT_TIME,
  LOADING_ANIMATION_ID,
  LOADING_PROGRESS_BAR_ID,
  PROGRESS_END,
} from "@/constants/loading";
import { ref, watch } from "vue";

export const useLoadingAnimation = () => {
  const progress = ref(0);

  watch(progress, () => {
    const DOM = document.getElementById(LOADING_PROGRESS_BAR_ID);
    if (DOM) DOM.style.width = progress.value + "%";
    if (progress.value >= PROGRESS_END) {
      const DOM = document.getElementById(LOADING_ANIMATION_ID);
      if (DOM) DOM.style.opacity = "0";
      setTimeout(() => {
        const DOM = document.getElementById(LOADING_ANIMATION_ID);
        if (DOM) DOM.style.display = "none";
      }, LOADED_CHECK_WAIT_TIME);
    }
  });

  return { setProgress: (data: number) => (progress.value = data) };
};
