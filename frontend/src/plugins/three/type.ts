import { Font } from "three/examples/jsm/loaders/FontLoader";

type Position = [number, number, number];

export type PlaneConfig = {
  position: Position;
  size: [number, number];
  receiveShadow?: boolean;
  color: string;
};

export type LightConfig = {
  type: "point" | "directional" | "spot";
  position: Position;
  color: string;
  castShadow?: boolean;
};

export type TextConfig = {
  value: string;
  frontColor: string;
  sideColor: string;
  castShadow?: boolean;
  parameters: { font: Font; size: number };
};
