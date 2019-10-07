import React, { Fragment } from 'react'
import { graphql, Link } from 'gatsby'

const IndexPage = ({ data }) => {
  const { jobs } = data
  const hasJobs = jobs.edges.length > 0

  return (
    <Fragment>
      <h1>CompanyName Careers</h1>

      {hasJobs ? (
        <ul>
          {jobs.edges.map((edge) => {
            const job = edge.node

            return (
              <li key={job.path}>
                <Link to={job.path}>{job.title}</Link>
              </li>
            )
          })}
        </ul>
      ) : (
        <p>No positions to show.</p>
      )}
    </Fragment>
  )
}

export const query = graphql`
  query IndexQuery {
    jobs: allJobsJson(sort: { order: ASC, fields: [path] }) {
      edges {
        node {
          title
          path
        }
      }
    }
  }
`

export default IndexPage
