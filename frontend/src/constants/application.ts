import { Category, ChartObject, Language } from "@/@types/schema";
export const APP_NAME = import.meta.env.VITE_APP_TITLE;
export const FOOTER_MESSAGE = import.meta.env.VITE_FOOTER_MESSAGE;
export const COPYRIGHT = import.meta.env.VITE_COPYRIGHT;
export const CATEGORY_LIST: Category[] = [
  "top",
  "profile",
  "skills",
  "career",
  "works",
  "contacts",
];
export const IMAGE_DIR = "/image/";
export const MESSAGE_DIR = "/messages/";
export const MESSAGE_PATH: Record<Language, string> = { ja: "ja.json" };
export const BIRTH_SPLITTER = "/";
export const CHART_RANGE: Record<"min" | "max", ChartObject["value"]> = {
  min: 0,
  max: 5,
};
export const VALID_CONTENT_WINDOW_RATE = 3 / 4;
export const WORK_BACKGROUND_OPACITY = 0.75;
export const WORK_BUTTON_OPACITY = 0.8;
