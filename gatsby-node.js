const path = require('path')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const JobTemplate = path.resolve('src/templates/job.js')

  const result = await graphql(`
    query CreatePagesQuery {
      allContentfulJob(sort: { order: ASC, fields: [slug] }) {
        edges {
          node {
            slug
            title
            body {
              body
            }
            tags {
              name
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }

  result.data.allContentfulJob.edges.forEach(({ node }) => {
    createPage({
      path: `/jobs/${node.slug}`,
      component: JobTemplate,
      context: {
        slug: node.slug,
      },
    })
  })
}
