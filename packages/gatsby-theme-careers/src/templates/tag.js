import React from 'react'
import { graphql } from 'gatsby'
import Tag from '../components/Tag'

export default ({ data }) => (
  <Tag tag={data.tag.name} jobs={data.jobs.edges} />
)

export const query = graphql`
  query TagsQuery($slug: String!) {
    jobs: allContentfulJob(
      filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      edges {
        node {
          slug
          title
          tags {
            name
            slug
          }
        }
      }
    }
    tag: contentfulTag(slug: { eq: $slug }) {
      name
    }
  }
`
