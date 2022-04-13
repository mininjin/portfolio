import { Category, Messages } from "@/@types/schema";

export type State = {
  messages: Messages;
  window: { scrollY: number; height: number };
  containers: Partial<Record<Category, HTMLElement>>;
};
