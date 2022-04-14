import {
  TEXT_FLOATING_RATE,
  TEXT_GEOMETRY_PARAMETERS,
  TEXT_HEIGHT_RATE,
} from "@/constants/three";
import {
  Box3,
  DirectionalLight,
  Group,
  Light,
  Material,
  Mesh,
  MeshLambertMaterial,
  MeshStandardMaterial,
  PlaneGeometry,
  PointLight,
  SpotLight,
} from "three";
import {
  TextGeometry,
  TextGeometryParameters,
} from "three/examples/jsm/geometries/TextGeometry";
import { getColorHexFromString } from "../utils";
import { LightConfig, PlaneConfig, TextConfig } from "./type";

export const getPlane = ({
  size,
  color,
  position,
  receiveShadow,
}: PlaneConfig) => {
  // create object
  const geometry = new PlaneGeometry(...size);
  const material = new MeshStandardMaterial({
    color: getColorHexFromString(color),
  });
  const object = new Mesh(geometry, material);
  // initialize position, rotation, and shadow
  object.position.set(...position);
  object.rotateX(-Math.PI / 2);
  object.receiveShadow = receiveShadow || false;
  return object;
};

export const getLight = ({
  position,
  color,
  castShadow,
  type,
}: LightConfig) => {
  // create object
  let light: Light;
  switch (type) {
    case "directional":
      light = new DirectionalLight(getColorHexFromString(color));
      break;
    case "spot":
      light = new SpotLight(getColorHexFromString(color));
      break;
    case "point":
    default:
      light = new PointLight(getColorHexFromString(color));
  }
  // initialize position and shadow
  light.position.set(...position);
  light.castShadow = castShadow || false;
  return light;
};

export const getTextGroup = ({
  value,
  frontColor,
  sideColor,
  castShadow,
  parameters,
}: TextConfig) => {
  // get parameters
  const letters = value.split("");
  const { size } = parameters;
  const params: TextGeometryParameters = {
    ...TEXT_GEOMETRY_PARAMETERS,
    ...parameters,
    height: size * TEXT_HEIGHT_RATE,
  };
  // create text objects
  const group = new Group();
  letters.forEach((v, i) => {
    // create object
    const geometry = new TextGeometry(v, params);
    const materials: Material[] = [
      new MeshLambertMaterial({ color: getColorHexFromString(frontColor) }),
      new MeshLambertMaterial({ color: getColorHexFromString(sideColor) }),
    ];
    const textObject = new Mesh(geometry, materials);
    // set shadow
    textObject.castShadow = castShadow || false;
    // centering position
    const box = new Box3().setFromObject(textObject);
    box.getCenter(textObject.position);
    textObject.position.multiplyScalar(-1);
    // set floating
    textObject.position.y = size * TEXT_FLOATING_RATE;
    // set & add pivot object
    const pivot = new Group();
    pivot.add(textObject);
    pivot.position.x = size * i;
    group.add(pivot);
  });
  return group;
};
