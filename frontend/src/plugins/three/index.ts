import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { Ref } from "vue";

const setThree = (container: Ref<HTMLElement | undefined>) => {
  // three objects
  const scene = new Scene();
  const camera = new PerspectiveCamera();
  const renderer = new WebGLRenderer();
  // animation frame
  let animationCallback: (() => void) | undefined;

  // initialize size
  const setSize = () => {
    if (container.value) {
      // get size of element
      const { clientWidth, clientHeight } = container.value;
      // set camera
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      // set renderer
      renderer.setSize(clientWidth, clientHeight);
      renderer.setPixelRatio(clientWidth / clientHeight);
    }
  };
  // initialization
  const init = () => {
    if (container.value) {
      setSize();
      container.value.appendChild(renderer.domElement);
    }
    // draw
    animate();
  };
  // set animation frame
  const setAnimationCallback = (cb: () => void) => (animationCallback = cb);
  // drawing models
  const animate = () => {
    const frame = () => {
      if (animationCallback) animationCallback();
      // draw
      renderer.render(scene, camera);
      // set animation
      requestAnimationFrame(frame);
    };
    frame();
  };

  return { init, scene, camera, renderer, setAnimationCallback, setSize };
};

export default setThree;
