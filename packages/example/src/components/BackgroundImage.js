import React from 'react'
import BackgroundImg from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'
import { Box } from 'flokit'

const IMAGES_QUERY = graphql`
  query {
    images: allFile(filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const BackgroundImage = ({ src, ...props }) => {
  const data = useStaticQuery(IMAGES_QUERY)
  const image = data.images.edges.find(
    (image) => image.node.relativePath === src
  )

  const imageStack = [
    'linear-gradient(to right, rgba(1,1,1,.7), rgba(1,1,1,.7))',
    image.node.childImageSharp.fluid,
  ]

  return <BackgroundImg Tag={Box} fluid={imageStack} {...props} />
}

export default BackgroundImage
