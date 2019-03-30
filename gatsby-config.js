module.exports = {
  siteMetadata: {
    title: 'Nicolai Benker – Software engineer',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-98653590-2',
      },
    },
  ],
}
