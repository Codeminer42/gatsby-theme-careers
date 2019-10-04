const path = require('path')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const JobTemplate = path.resolve('src/templates/job.js')

  const result = await graphql(`
    {
      allJobsJson(
        sort: { order: ASC, fields: [path] }
        limit: 1000
      ) {
        edges {
          node {
            path
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }

  result.data.allJobsJson.edges.forEach(({ node }) => {
    createPage({
      path: node.path,
      component: JobTemplate,
      context: {},
    })
  })
}
