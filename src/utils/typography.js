import Typography from 'typography'
import parnassusTheme from 'typography-theme-parnassus'

parnassusTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h2,h3': {
    marginTop: rhythm(1),
    marginBottom: rhythm(0.8),
  },
  ul: {
    lineHeight: '.8em',
  },
})

const typography = new Typography(parnassusTheme)

export default typography
