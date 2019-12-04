require('dotenv').config()

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-careers',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_CONTENT_API_ACCESS_TOKEN,
        managementToken: process.env.CONTENTFUL_CONTENT_MANAGEMENT_TOKEN,
        environmentId: process.env.CONTENTFUL_ENVIRONMENT_ID,
        downloadLocal: true,
        mailTo: 'become@jobs.com'
      },
    },
  ],
}
