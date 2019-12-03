import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import Jobs from '../components/Jobs'

export default ({ data }) => (
  <>
    <SEO />
    <Jobs jobs={data.jobs.edges} />
  </>
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
