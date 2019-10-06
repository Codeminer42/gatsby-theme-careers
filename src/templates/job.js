import React from 'react'
import { graphql, Link } from 'gatsby'

export default function Job({ data }) {
  const job = data.jobsJson

  return (
    <div>
      <Link to='/'>Back</Link>
      <h1>{job.title}</h1>
    </div>
  )
}

export const pageQuery = graphql`
  query JobQuery($path: String!) {
    jobsJson(path: { eq: $path }) {
      title
    }
  }
`
