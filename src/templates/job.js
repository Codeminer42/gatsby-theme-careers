import React from 'react'
import { graphql, Link } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Tag from '../components/tag'

export default function Job({ data }) {
  const job = data.contentfulJob

  return (
    <div>
      <Link to='/'>Back</Link>
      <h1>{job.title}</h1>

      {job.tags.map((tag) => {
        return (
          <Tag key={tag.name} {...tag} />
        )
      })}

      <div>
        {job.body && documentToReactComponents(job.body.json)}
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query JobQuery($slug: String!) {
    contentfulJob(slug: { eq: $slug }) {
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
