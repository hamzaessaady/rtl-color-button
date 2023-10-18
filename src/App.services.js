export const formatColorName = (colorName) =>
  colorName
    .replace(/\B([A-Z])\B/g, " $1")
    .trim()
    .replace(/^\w/, (c) => c.toUpperCase());
