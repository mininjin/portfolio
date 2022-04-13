import { VALID_CONTENT_WINDOW_RATE } from "@/constants/application";

export const isInContent = (container: HTMLElement) => {
  const top = container.getBoundingClientRect().top;
  return window.innerHeight * VALID_CONTENT_WINDOW_RATE > top;
};
