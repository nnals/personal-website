import chroma from 'chroma-js'

const primaryHue = 235
const secondaryHue = 38

const getColor = hue => (lightness, saturation, alpha) =>
  `hsla(${hue}, ${saturation || 13}%, ${lightness}%, ${alpha || 1})`

const getPrimaryColor = getColor(primaryHue)
const getSecondaryColor = getColor(secondaryHue)

const colors = {
  backgroundColor: chroma.hsl(primaryHue, 0.5, 0.99),
  logoColor: chroma.hsl(primaryHue, 0.1, 0.5),
  logoColorHover: chroma.hsl(primaryHue, 0.1, 0.2),
  titleGradientColors: ['#6144eb', '#24e7f6'],
  subtitleColor: chroma.hsl(primaryHue, 0.1, 0.8),
  navItemColor: chroma.hsl(primaryHue, 0.1, 0.5),
  navItemColorHover: chroma.hsl(primaryHue, 0.3, 0.5),
  navItemColorActive: chroma.hsl(primaryHue, 0.3, 0.5),
  headingColor: chroma.hsl(primaryHue, 0.1, 0.4),
  bodyColor: chroma.hsl(primaryHue, 0, 0.4),
  bodyColorPale: chroma.hsl(primaryHue, 0, 0.6),
  inputBorderColor: chroma.hsl(primaryHue, 0.2, 0.9),
  inputBorderColorHover: chroma.hsl(primaryHue, 0.2, 0.75),
}

export { getPrimaryColor, getSecondaryColor }

export default colors
