import React from 'react'
import { graphql } from 'gatsby'
import Jobs from '../components/Jobs'

export default ({ data }) => <Jobs jobs={data.jobs.edges} />

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
