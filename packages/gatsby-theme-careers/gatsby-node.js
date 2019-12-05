const migrate = require('./scripts/migrate')

exports.onPreBootstrap = async ({ reporter }, options) => {
  reporter.log('Running migrations')

  await migrate(options)
}

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
        tags: distinct(field: tags___slug)
      }
    }
  `)

  if (result.errors) {
    reporter.panic('Error loading jobs', result.errors)
    return
  }

  const jobs = result.data.allContentfulJob.edges
  const tags = result.data.allContentfulJob.tags

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

  tags.forEach((slug) => {
    createPage({
      path: `/tags/${slug}`,
      component: require.resolve('./src/templates/tag.js'),
      context: {
        slug,
        layout: 'tag',
      },
    })
  })
}
