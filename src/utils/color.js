const primaryHue = 195
const secondaryHue = 38

const getColor = hue => (lightness, saturation, alpha) =>
  `hsla(${hue}, ${saturation || 50}%, ${lightness}%, ${alpha || 1})`

const getPrimaryColor = getColor(primaryHue)
const getSecondaryColor = getColor(secondaryHue)

export { getPrimaryColor, getSecondaryColor }
