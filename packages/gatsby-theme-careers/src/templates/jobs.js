import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import Jobs from '../components/Jobs'

export default ({ data }) => (
  <React.Fragment>
    <SEO />
    <Jobs jobs={data.jobs.edges} />
  </React.Fragment>
)

export const query = graphql`
  query JobsQuery {
    jobs: allContentfulJob(sort: { order: ASC, fields: [slug] }) {
      edges {
        node {
          slug
          title
          tags {
            name
          }
        }
      }
    }
  }
`
