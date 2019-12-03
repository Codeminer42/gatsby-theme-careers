module.exports = ({
  basePath = '/',
  title = 'Gatsby Theme Careers',
  spaceId,
  accessToken,
  googleAnalyticsOptions,
} = {}) => ({
  siteMetadata: {
    title,
    basePath,
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
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        head: false,
        ...googleAnalyticsOptions,
      },
    },
  ],
})
