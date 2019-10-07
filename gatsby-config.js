module.exports = {
  siteMetadata: {
    title: 'Careers | CompanyName',
    description: '',
    author: '',
  },
  plugins: [
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data/jobs`,
        name: 'data',
      },
    },
  ],
}
