import font from "./font.json";
import { Font } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometryParameters } from "three/examples/jsm/geometries/TextGeometry";

// constants
export const THREE_BACKGROUND_COLOR = "#fffffe";
export const TEXT_FONT = new Font(font);
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
