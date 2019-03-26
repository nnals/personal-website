import Typography from 'typography'

const typography = new Typography({
  googleFonts: [
    { name: 'Roboto Slab', styles: ['700, 700i'] },
    { name: 'Source Sans Pro', styles: ['700, 400, 400i'] },
  ],
  headerFontFamily: ['Roboto Slab', 'serif'],
  bodyFontFamily: ['Source Sans Pro', 'sans-serif'],
  baseFontSize: '19px',
  scaleRatio: 2,
  overrideStyles: ({ rhythm }, options) => ({
    li: { marginBottom: '0.4em' },
  }),
})

export default typography
