import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";

import { FontAwesomeIcon } from "./plugins/fontawesome";

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
