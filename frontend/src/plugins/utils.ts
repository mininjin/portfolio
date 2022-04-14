const COLOR_FORMAT = /^#[0-9a-fA-F]{6}$/;
const OPACITY_MAX_HEX = 255;

// set opacity to color
export const setOpacity = (color: string, opacity: number) => {
  if (COLOR_FORMAT.test(color)) {
    // add opacity string
    opacity = Math.floor(Math.max(Math.min(opacity, 1), 0) * OPACITY_MAX_HEX);
    color += opacity.toString(16);
  }
  return color;
};

// get color from string as HEX
export const getColorHexFromString = (str: string) => {
  let color = 0;
  if (COLOR_FORMAT.test(str)) {
    color = parseInt(str.replace("#", ""), 16);
  }
  return color;
};
