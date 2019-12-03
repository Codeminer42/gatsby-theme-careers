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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        //All options available https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/#how-to-use
        ...googleAnalyticsOptions,
      },
    },
  ],
})
