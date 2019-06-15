import chroma from 'chroma-js'

const primaryHue = 235
const secondaryHue = 38

const getColor = hue => (lightness, saturation, alpha) =>
  `hsla(${hue}, ${saturation || 13}%, ${lightness}%, ${alpha || 1})`

const getPrimaryColor = getColor(primaryHue)
const getSecondaryColor = getColor(secondaryHue)

const gradientColors = ['#6144eb', '#24e7f6']
const linearGradient = (gradientAlpha = 1, darken) => `linear-gradient(
  230deg,
  ${gradientColors
    .map(x =>
      darken
        ? chroma(x)
            .alpha(gradientAlpha)
            .darken(darken)
        : chroma(x).alpha(gradientAlpha)
    )
    .join(', ')}
);`

const colors = {
  linearGradient,
  backgroundColor: chroma.hsl(primaryHue, 0.5, 0.99),
  logoColor: chroma.hsl(primaryHue, 0.1, 0.5),
  logoColorHover: chroma.hsl(primaryHue, 0.1, 0.2),
  subtitleColor: chroma.hsl(primaryHue, 0.1, 0.8),
  navItemColor: chroma.hsl(primaryHue, 0.1, 0.45),
  navItemColorHover: chroma.hsl(primaryHue, 0.3, 0.45),
  navItemColorActive: chroma.hsl(primaryHue, 0.3, 0.45),
  headingColor: chroma.hsl(primaryHue, 0.1, 0.4),
  iconColor: chroma.hsl(primaryHue, 0.1, 0.55),
  bodyColor: chroma.hsl(primaryHue, 0, 0.4),
  bodyColorPale: chroma.hsl(primaryHue, 0, 0.6),
  inputBorderColor: chroma.hsl(primaryHue, 0.2, 0.9),
  inputBorderColorHover: chroma.hsl(primaryHue, 0.2, 0.75),
  linkColor: chroma.hsl(primaryHue, 0.4, 0.5),
  linkColorHover: chroma.hsl(primaryHue, 0.5, 0.4),
  hamburgerColor: chroma.hsl(primaryHue, 0.1, 0.5),
  mobileNavItemColor: chroma.hsl(primaryHue, 0.5, 0.99),
  mobileNavItemColorHover: chroma.hsl(primaryHue, 0.7, 0.9),
  mobileNavItemColorActive: chroma.hsl(primaryHue, 0.7, 0.9),
}

export { getPrimaryColor, getSecondaryColor }

export default colors
