import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const IMAGES_QUERY = graphql`
  query {
    images: allFile(filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Image = ({ src, ...props }) => {
  const data = useStaticQuery(IMAGES_QUERY)
  const image = data.images.edges.find(
    (image) => image.node.relativePath === src
  )

  return <Img fluid={image.node.childImageSharp.fluid} {...props} />
}

export default Image
