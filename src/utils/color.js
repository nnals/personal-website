import chroma from 'chroma-js'

const primaryHue = 235
const secondaryHue = 38

const getColor = hue => (lightness, saturation, alpha) =>
  `hsla(${hue}, ${saturation || 13}%, ${lightness}%, ${alpha || 1})`

const getPrimaryColor = getColor(primaryHue)
const getSecondaryColor = getColor(secondaryHue)

export { getPrimaryColor, getSecondaryColor }

export default {
  backgroundColor: chroma.hsl(primaryHue, 0.5, 0.99),
  logoColor: chroma.hsl(primaryHue, 0.1, 0.5),
  logoColorHover: chroma.hsl(primaryHue, 0.1, 0.2),
  titleGradientColors: ['#6144eb', '#24e7f6'],
  subtitleColor: chroma.hsl(primaryHue, 0.1, 0.8),
  navItemColor: chroma.hsl(primaryHue, 0.1, 0.5),
  navItemColorActive: chroma.hsl(primaryHue, 0.4, 0.5),
  headingColor: chroma.hsl(primaryHue, 0.1, 0.4),
}
