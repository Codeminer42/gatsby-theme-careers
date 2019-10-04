module.exports = {
  siteMetadata: {
    title: 'Codeminer42 - Careers',
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
