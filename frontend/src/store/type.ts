import { Category, Language, Messages } from "@/@types/schema";

export type State = {
  language: Language;
  messages?: Messages;
  window: { scrollY: number; height: number };
  containers: Partial<Record<Category, HTMLElement>>;
};
