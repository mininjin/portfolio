import { AnimationClip, Clock, Color, Object3D, PointLight } from "three";
import setThree from "@/plugins/three";
import { computed, ref } from "vue";
import { ResponsiveKey, TopAnimationConfig } from "@/@types/schema";
import { getPlane, getLight, getTextGroup } from "@/plugins/three/objects";
import {
  ANIMATION_DERAY,
  BOUNCING_MAX_Y,
  ANIMATION_DURATION,
  TEXT_SIZE,
  TEXT_FLOATING_RATE,
  PLANE_PADDING_TEXT_NUM,
  SPOTLIGHT_INIT_X_RATE,
  PLANE_HEIGHT,
  SPOTLIGHT_DISTANCE,
} from "@/constants/three";
import {
  getBouncingAnimationKF,
  getBouncingAnimationMixer,
  getRotatingAnimationKF,
} from "@/plugins/three/animations";
import { getResponsiveKeyFromWidth } from "@/plugins/responsive";
import { getColorHexFromString } from "@/plugins/utils";
import {
  get3DDistance,
  getCameraPositionZFromViewWidth,
} from "@/plugins/three/utils";
import { Font } from "three/examples/jsm/loaders/FontLoader";

export const useTopAnimation = () => {
  // animation keyframes
  const bouncingKF = getBouncingAnimationKF({
    maxY: BOUNCING_MAX_Y,
    minY: TEXT_SIZE * TEXT_FLOATING_RATE,
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
  let lightObject: PointLight | undefined = undefined;
  let textObjects: Object3D[] = [];
  let responsive: ResponsiveKey = "mobile";
  let animationInterval = 0;
  let config: TopAnimationConfig | undefined = undefined;
  let font: any = undefined;
  // position values
  const textValue = ref("");
  const centerX = computed(
    () => TEXT_SIZE * (textValue.value.length / 2) - TEXT_SIZE / 2
  );
  const planeWidth = computed(
    () => TEXT_SIZE * (textValue.value.length + PLANE_PADDING_TEXT_NUM)
  );
  const spotlightInitX = computed(
    () => -planeWidth.value * SPOTLIGHT_INIT_X_RATE
  );
  const lightDistance = computed(() => TEXT_SIZE * textValue.value.length * 3);

  // set text objects and its animation
  const setTopAnimation = (topConfig: TopAnimationConfig, fontJson: any) => {
    // clear interval
    if (animationInterval) clearInterval(animationInterval);
    // clear scene
    while (three.scene.children.length > 0) {
      three.scene.remove(three.scene.children[0]);
    }
    // get config
    config = topConfig;
    font = fontJson;
    const { text, plane, spotLight, background } = config;
    // get text value
    responsive = getResponsiveKeyFromWidth(renderDOM.value?.clientWidth || 0);
    textValue.value = text.value[responsive];
    // add text object
    const textObject = getTextGroup({
      value: textValue.value,
      frontColor: text.frontColor,
      sideColor: text.sideColor,
      castShadow: true,
      parameters: { font: new Font(fontJson), size: TEXT_SIZE },
    });
    textObjects = textObject.children;
    three.scene.add(textObject);
    //  add spot light
    lightObject = getLight({
      type: "point",
      position: [spotlightInitX.value, SPOTLIGHT_DISTANCE, SPOTLIGHT_DISTANCE],
      color: spotLight.color,
      castShadow: true,
    }) as PointLight;
    lightObject.shadow.camera.far =
      get3DDistance(
        [spotlightInitX.value, SPOTLIGHT_DISTANCE, SPOTLIGHT_DISTANCE],
        [planeWidth.value - spotlightInitX.value, 0, 0]
      ) * 1.1;
    three.scene.add(lightObject);
    //  add top light
    const topLightPosition: [number, number, number] = [
      centerX.value,
      lightDistance.value,
      0,
    ];
    const topLight = getLight({
      type: "point",
      position: topLightPosition,
      color: "#ffffff",
      castShadow: true,
    }) as PointLight;
    topLight.shadow.camera.far = get3DDistance(topLightPosition, [
      planeWidth.value,
      0,
      PLANE_HEIGHT,
    ]);
    three.scene.add(topLight);
    //  add directional light
    const directionalLight = getLight({
      type: "directional",
      position: [centerX.value, TEXT_SIZE, lightDistance.value],
      color: "#ffffff",
    });
    three.scene.add(directionalLight);
    //  add Plane
    const planeObject = getPlane({
      position: [centerX.value, 0, 0],
      size: [planeWidth.value, PLANE_HEIGHT],
      color: plane.color,
      receiveShadow: true,
    });
    three.scene.add(planeObject);
    // set background
    three.scene.background = new Color(getColorHexFromString(background.color));
    // add shadow
    three.renderer.shadowMap.enabled = true;
    // set camera position
    three.camera.position.set(centerX.value, TEXT_SIZE * 4, 0);
    adjustCameraPositionZ();
    three.camera.lookAt(centerX.value, TEXT_SIZE / 2, 0);
    // set animation
    let animationIndex = 0;
    let bouncingCount = 0;
    const setMixer = () => {
      // reset count and increase index
      if (bouncingCount >= text.bouncingNumber) {
        bouncingCount = 0;
        animationIndex = (animationIndex + 1) % textObjects.length;
      }
      // set mixer
      const object = textObjects[animationIndex];
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
    three.camera.position.z = getCameraPositionZFromViewWidth(
      three.camera,
      planeWidth.value
    );
  };

  // set spot light position when scrolling
  window.addEventListener("scroll", () => {
    const rate = (window.scrollY / window.innerHeight) * 2;
    if (lightObject && rate <= 1) {
      lightObject.position.x =
        planeWidth.value * (1 + SPOTLIGHT_INIT_X_RATE * 2) * rate +
        spotlightInitX.value;
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
      if (config && font) setTopAnimation(config, font);
    }
  });

  return { renderDOM, init: three.init, setTopAnimation };
};
