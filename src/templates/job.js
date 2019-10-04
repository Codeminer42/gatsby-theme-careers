import React from 'react'
import { graphql } from 'gatsby'

export default function Job({ data }) {
  return (
    <div className="job-container">
      <div className="job">
        <h1>{data.job.title}</h1>
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    job: jobsJson(path: { eq: $path }) {
      title
    }
  }
`
