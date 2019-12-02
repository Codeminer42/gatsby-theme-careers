import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import Job from '../components/Job'

export default ({ data }) => {
  const { job } = data

  return (
    <React.Fragment>
      <SEO titleTemplate={`${job.title} | %s`} />
      <Job job={job} />
    </React.Fragment>
  )
}

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
