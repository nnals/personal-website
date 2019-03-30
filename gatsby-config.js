const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://nbenker.io',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    title: 'Portfolio',
    titleTemplate: '%s · Nicolai Benker',
    description: 'Vienna based software engineer available for freelance work.',
    siteUrl,
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
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nicolai Benker · Software Engineer`,
        short_name: `Nicolai Benker`,
        start_url: `/`,
        background_color: `#fbfbfe`,
        theme_color: `#2e2f38`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        include_favicon: true,
      },
    },
  ],
}
