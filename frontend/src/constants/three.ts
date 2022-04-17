import { TextGeometryParameters } from "three/examples/jsm/geometries/TextGeometry";

// constants
export const FONT_URL = "/three/font.json";
export const TEXT_SIZE = 20;
export const TEXT_HEIGHT_RATE = 0.3;
export const ANIMATION_DURATION = 0.5;
export const ANIMATION_DERAY = 0.1;
export const TEXT_GEOMETRY_PARAMETERS: Partial<TextGeometryParameters> = {
  bevelEnabled: true,
  bevelThickness: 1,
  bevelSize: 1,
  bevelOffset: 0,
  bevelSegments: 2,
};
export const TEXT_FLOATING_RATE = 0.1;
export const RESPONSIVE_WIDTH = { desktop: 850, tablet: 500 };
export const PLANE_PADDING_TEXT_NUM = 3;
export const BOUNCING_MAX_Y = TEXT_SIZE * 2;
export const PLANE_HEIGHT = TEXT_SIZE * 7;
export const SPOTLIGHT_DISTANCE = TEXT_SIZE * 10;
export const SPOTLIGHT_INIT_X_RATE = 0.25;
