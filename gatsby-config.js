module.exports = {
  siteMetadata: {
    title: 'Codeminer42 - Careers',
    description: '',
    author: '',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/jobs`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
