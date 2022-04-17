import { PerspectiveCamera, Vector3 } from "three";

export const getCameraPositionZFromViewWidth = (
  camera: PerspectiveCamera,
  viewWidth: number
) => {
  const viewHeight = viewWidth / camera.aspect;
  const fov = (camera.fov * Math.PI) / 180;
  return viewHeight / (Math.tan(fov / 2) * 2);
};

export const get3DDistance = (vec1: number[], vec2: number[]) =>
  new Vector3(...vec1).distanceTo(new Vector3(...vec2));
