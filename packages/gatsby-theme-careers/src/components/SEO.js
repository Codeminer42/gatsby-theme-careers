import React from 'react'
import { Helmet } from 'react-helmet'
import useSiteMetadata from '../hooks/useSiteMetadata'

const SEO = ({ title, description }) => {
  const meta = useSiteMetadata()

  return (
    <Helmet
      defer={false}
      titleTemplate={`%s | ${meta.title}`}
      defaultTitle={meta.title}
    >
      <title>{title}</title>
      <meta name='description' content={description || meta.description} />
    </Helmet>
  )
}

export default SEO
