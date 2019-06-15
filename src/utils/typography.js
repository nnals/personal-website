import Typography from 'typography'
import 'typeface-roboto-slab'
import 'typeface-source-sans-pro'
import c from './color'

/*
TODO breakpoint scaling of headings
* https://github.com/KyleAMathews/typography.js/issues/75
* would be nice to just set scaleRation value based on a breakpoint
* for now let's just calculate the headings font size like typography.js does it:
  (from https://github.com/KyleAMathews/typography.js/issues/153)
  const h1 = vr.scale(5 / 5)
  const h2 = vr.scale(3 / 5)
  const h3 = vr.scale(2 / 5)
  const h4 = vr.scale(0 / 5)
  const h5 = vr.scale(-1 / 5)
  const h6 = vr.scale(-1.5 / 5)
*/

const scalingDenominators = [
  ['h1', 5],
  ['h2', 3],
  ['h3', 2],
  ['h4', 0],
  ['h5', -1],
  ['h6', -1.5],
]
const scalingFactor = 10 // original is 5 (see above)

const typography = new Typography({
  headerFontFamily: ['Roboto Slab', 'serif'],
  bodyFontFamily: ['Source Sans Pro', 'sans-serif'],
  baseFontSize: '19px',
  scaleRatio: 2,
  headerColor: c.headingColor.hex(),
  bodyColor: c.bodyColor.hex(),
  overrideStyles: (vr, options) => {
    return {
      li: { marginBottom: '0.4em' },
      '@media(max-width:500px)': {
        ...scalingDenominators.reduce(
          (acc, [tag, denominator]) => ({
            ...acc,
            [tag]: vr.scale(denominator / scalingFactor),
          }),
          {}
        ),
      },
    }
  },
})

export default typography
