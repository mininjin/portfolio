import { ResponsiveKey } from "@/@types/schema";
import { RESPONSIVE_WIDTH } from "@/constants/three";

export const getResponsiveKeyFromWidth = (width: number) => {
  let key: ResponsiveKey;
  if (width >= RESPONSIVE_WIDTH.desktop) {
    key = "desktop";
  } else if (width >= RESPONSIVE_WIDTH.tablet) {
    key = "tablet";
  } else {
    key = "mobile";
  }
  return key;
};
