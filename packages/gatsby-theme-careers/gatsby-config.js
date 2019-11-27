module.exports = ({ basePath = '/', spaceId, accessToken } = {}) => ({
  siteMetadata: {
    title: 'Gatsby Theme Careers',
    basePath,
  },
  plugins: [
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
