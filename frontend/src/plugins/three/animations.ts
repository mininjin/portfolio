import {
  AnimationClip,
  AnimationMixer,
  InterpolateSmooth,
  LoopOnce,
  Object3D,
  VectorKeyframeTrack,
} from "three";

export const getBouncingAnimationMixer = ({
  object,
  clip,
  finishCallback,
}: {
  object: Object3D;
  clip: AnimationClip;
  finishCallback: () => void;
}) => {
  // mixer
  const mixer = new AnimationMixer(object);
  // mixer action
  const action = mixer.clipAction(clip);
  action.setLoop(LoopOnce, 0);
  action.play();
  // on finished
  mixer.addEventListener("finished", () => {
    action.stop();
    finishCallback();
  });
  return mixer;
};
export const getBouncingAnimationKF = ({
  maxY,
  minY,
  duration,
}: {
  maxY: number;
  minY: number;
  duration: number;
}) =>
  new VectorKeyframeTrack(
    ".position[y]",
    [0, duration / 4, duration / 2, (duration * 3) / 4, duration],
    [minY, (3 * maxY - minY) / 4, maxY, (3 * maxY - minY) / 4, minY],
    InterpolateSmooth
  );

export const getRotatingAnimationKF = ({ duration }: { duration: number }) =>
  new VectorKeyframeTrack(
    ".rotation[y]",
    [0, duration],
    [0, Math.PI * 2],
    InterpolateSmooth
  );
