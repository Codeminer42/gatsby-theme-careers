import React from 'react'
import { graphql } from 'gatsby'
import Job from '../components/Job'

export default ({ data }) => <Job job={data.job} />

export const query = graphql`
  query JobQuery($slug: String!) {
    job: contentfulJob(slug: { eq: $slug }) {
      title
      body {
        json
      }
      tags {
        name
      }
    }
  }
`
