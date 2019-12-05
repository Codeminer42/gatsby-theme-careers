module.exports = ({
  basePath = '/',
  title = 'Gatsby Theme Careers',
  description = 'A Gatsby theme that generates a simple job listing site using Contentful as data source.',
  spaceId,
  accessToken,
} = {}) => ({
  siteMetadata: {
    title,
    description,
    basePath,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: `${__dirname}/src/images/favicon.png`
      }
    },
  ],
})
