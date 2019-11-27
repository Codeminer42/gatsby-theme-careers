exports.createPages = async ({ actions, graphql, reporter }, options = {}) => {
  const { basePath = '/' } = options
  const { createPage } = actions

  createPage({
    path: basePath,
    component: require.resolve('./src/templates/jobs.js'),
  })

  const result = await graphql(`
    query {
      allContentfulJob(sort: { order: ASC, fields: [slug] }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('Error loading jobs.', result.errors)
    return
  }

  const jobs = result.data.allContentfulJob.edges

  jobs.forEach(({ node }) => {
    const { slug } = node

    createPage({
      path: `/jobs/${slug}`,
      component: require.resolve('./src/templates/job.js'),
      context: {
        slug,
        layout: 'job',
      },
    })
  })
}
