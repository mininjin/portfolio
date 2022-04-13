import { INITIAL_MESSAGES } from "@/constants/messages";
import { State } from "./type";

const state: State = {
  messages: INITIAL_MESSAGES,
  window: { scrollY: 0, height: 0 },
  containers: {},
};

export default state;
