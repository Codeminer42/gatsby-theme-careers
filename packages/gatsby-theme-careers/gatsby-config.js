module.exports = ({
  basePath = '/',
  title = 'Gatsby Theme Careers',
  spaceId,
  accessToken,
  googleAnalyticsOptions,
  mailTo,
} = {}) => ({
  siteMetadata: {
    title,
    basePath,
    mailTo,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        downloadLocal: true,
        spaceId,
        accessToken,
      },
    },
  ],
})
