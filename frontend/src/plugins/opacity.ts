const COLOR_FORMAT = /^#[0-9a-fA-F]{6}$/;
const OPACITY_MAX_HEX = 255;

export const setOpacity = (color: string, opacity: number) => {
  if (COLOR_FORMAT.test(color)) {
    opacity = Math.floor(Math.max(Math.min(opacity, 1), 0) * OPACITY_MAX_HEX);
    color += opacity.toString(16);
  }
  return color;
};
