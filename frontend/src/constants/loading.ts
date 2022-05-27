export const LOADING_ANIMATION_ID = import.meta.env.VITE_LOADING_ANIMATION_ID;
export const LOADING_PROGRESS_BAR_ID = import.meta.env
  .VITE_LOADING_PROGRESS_BAR_ID;
export const PROGRESS_END = 100;
export const LOADED_CHECK_WAIT_TIME = 1000;

export const LOADING_PROGRESS_RATE = {
  onMounted: 10,
  onFetchedMessage: 30,
  onFetchedWebfont: 50,
  onFetchedFont: 70,
  onCreatedFont: 90,
};
