module.exports = {
  siteMetadata: {
    title: 'Portfolio',
    titleTemplate: '%s · Nicolai Benker',
    description: 'Vienna based software engineer available for freelance work.',
    url: 'https://nbenker.io',
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
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ['/thanks'],
        query: `
        {
          site {
            siteMetadata {
              siteUrl: url
            }
          }
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
      }`,
      },
    },
  ],
}
