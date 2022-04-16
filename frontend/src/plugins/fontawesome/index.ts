import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCheck,
  faHandPointDown,
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import FontAwesomeIcon from "./FontAwesomeIcon.vue";

library.add(
  faTwitter,
  faGithub,
  faArrowUpRightFromSquare,
  faCheck,
  faHandPointDown,
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark
);

export { FontAwesomeIcon };
