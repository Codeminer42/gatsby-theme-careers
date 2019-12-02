import React from 'react'
import { Helmet } from 'react-helmet'
import useSiteMetadata from '../hooks/useSiteMetadata'

const SEO = (props) => {
  const { title, titleTemplate, description } = {
    ...useSiteMetadata(),
    ...props,
  }

  return (
    <Helmet defer={false} titleTemplate={titleTemplate}>
      <title>{title}</title>
      <meta name='description' content={description} />
    </Helmet>
  )
}

export default SEO
