import { ANIMATION_DERAY } from "./../constants/three";
import { AnimationClip, Clock, Color, Light, Object3D } from "three";
import setThree from "@/plugins/three";
import { ref } from "vue";
import { ResponsiveKey, TopAnimationConfig } from "@/@types/schema";
import { getPlane, getLight, getTextGroup } from "@/plugins/three/objects";
import {
  ANIMATION_DURATION,
  TEXT_FONT,
  TEXT_SIZE,
  TEXT_FLOATING_RATE,
  THREE_BACKGROUND_COLOR,
} from "@/constants/three";
import {
  getBouncingAnimationKF,
  getBouncingAnimationMixer,
  getRotatingAnimationKF,
} from "@/plugins/three/animations";
import { getResponsiveKeyFromWidth } from "@/plugins/responsive";
import { getColorHexFromString } from "@/plugins/utils";

export const useTopAnimation = () => {
  // animation keyframes
  const bouncingKF = getBouncingAnimationKF({
    maxY: TEXT_SIZE * 2,
    minY: TEXT_SIZE / 10,
    duration: ANIMATION_DURATION,
  });
  const rotatingKF = getRotatingAnimationKF({
    duration: ANIMATION_DURATION / 2,
  });
  // animation clips
  const bouncingClip = new AnimationClip("bouncing", -1, [bouncingKF]);
  const bouncingRotatingClip = new AnimationClip("bouncing-rotating", -1, [
    bouncingKF,
    rotatingKF,
  ]);
  // three plugin
  const renderDOM = ref<HTMLElement>();
  const three = setThree(renderDOM);
  // variables
  let lightElement: Light | undefined = undefined;
  let objects: Object3D[] = [];
  let textValue = "";
  let responsive: ResponsiveKey = "mobile";
  let animationInterval = 0;
  let config: TopAnimationConfig | undefined = undefined;

  // set text objects and its animation
  const setTopAnimation = (topConfig: TopAnimationConfig) => {
    // clear interval
    if (animationInterval) clearInterval(animationInterval);
    // clear scene
    while (three.scene.children.length > 0) {
      three.scene.remove(three.scene.children[0]);
    }
    // get config
    config = topConfig;
    const { text, plane, spotLight, background } = config;
    // get text value
    responsive = getResponsiveKeyFromWidth(renderDOM.value?.clientWidth || 0);
    textValue = text.value[responsive];
    // add text object
    const textObject = getTextGroup({
      value: textValue,
      frontColor: text.frontColor,
      sideColor: text.sideColor,
      castShadow: true,
      parameters: { font: TEXT_FONT, size: TEXT_SIZE },
    });
    objects = textObject.children;
    three.scene.add(textObject);
    //  add spot light
    lightElement = getLight({
      type: "spot",
      position: [
        -((TEXT_SIZE * objects.length) / 2),
        TEXT_SIZE * 10,
        TEXT_SIZE * 10,
      ],
      color: spotLight.color,
      castShadow: true,
    });
    three.scene.add(lightElement);
    //  add top light
    const topLight = getLight({
      type: "point",
      position: [
        TEXT_SIZE * (textValue.length / 2),
        TEXT_SIZE * textValue.length * 3,
        0,
      ],
      color: "#ffffff",
      castShadow: true,
    });
    three.scene.add(topLight);
    //  add directional light
    const directionalLight = getLight({
      type: "directional",
      position: [
        TEXT_SIZE * (textValue.length / 2) - TEXT_SIZE / 2,
        TEXT_SIZE,
        TEXT_SIZE * textValue.length * 3,
      ],
      color: "#ffffff",
    });
    three.scene.add(directionalLight);
    //  add Plane
    const planeObject = getPlane({
      position: [TEXT_SIZE * (textValue.length / 2) - TEXT_SIZE / 2, 0, 0],
      size: [TEXT_SIZE * textValue.length * 1.5, TEXT_SIZE * 7],
      color: plane.color,
      receiveShadow: true,
    });
    three.scene.add(planeObject);
    // set background
    three.scene.background = new Color(getColorHexFromString(background.color));
    // add shadow
    three.renderer.shadowMap.enabled = true;
    // set camera position
    three.camera.position.set(
      (TEXT_SIZE * textValue.length) / 2 - TEXT_SIZE / 2,
      TEXT_SIZE * 4,
      0
    );
    adjustCameraPositionZ();
    three.camera.lookAt(
      (TEXT_SIZE * textValue.length) / 2 - TEXT_SIZE / 2,
      TEXT_SIZE / 2,
      0
    );
    // set animation
    let animationIndex = 0;
    let bouncingCount = 0;
    const setMixer = () => {
      // reset count and increase index
      if (bouncingCount >= text.bouncingNumber) {
        bouncingCount = 0;
        animationIndex = (animationIndex + 1) % textObject.children.length;
      }
      // set mixer
      const object = objects[animationIndex];
      const mixer = getBouncingAnimationMixer({
        object,
        clip:
          bouncingCount >= text.bouncingNumber - 1
            ? bouncingRotatingClip
            : bouncingClip,
        finishCallback: () => {
          // initialize position
          object.position.y = TEXT_SIZE * TEXT_FLOATING_RATE;
          object.rotation.y = 0;
          // increase count
          bouncingCount++;
        },
      });
      // set animation
      const clock = new Clock();
      three.setAnimationCallback(() => mixer.update(clock.getDelta()));
    };
    // initial animation
    setMixer();
    // repeating animation
    animationInterval = setInterval(
      setMixer,
      (ANIMATION_DURATION + ANIMATION_DERAY) * 1000
    );
  };
  // set camera position by referring to camera fov and aspect
  const adjustCameraPositionZ = () => {
    const viewWidth = TEXT_SIZE * textValue.length * 1.5;
    const viewHeight = viewWidth / three.camera.aspect;
    const fov = (three.camera.fov * Math.PI) / 180;
    three.camera.position.z = viewHeight / (Math.tan(fov / 2) * 2);
  };

  // set spot light position when scrolling
  window.addEventListener("scroll", () => {
    const rate = window.scrollY / window.innerHeight;
    if (lightElement) {
      lightElement.position.x = TEXT_SIZE * objects.length * (2 * rate - 1 / 2);
    }
  });
  // when resizing
  window.addEventListener("resize", () => {
    // reset drawer size
    three.setSize();
    // check responsive
    if (
      responsive == getResponsiveKeyFromWidth(renderDOM.value?.clientWidth || 0)
    ) {
      // adjust camera position
      adjustCameraPositionZ();
    } else {
      // reset objects
      if (config) setTopAnimation(config);
    }
  });

  return { renderDOM, init: three.init, setTopAnimation };
};
