import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = ({ title, description }) => (
  <Helmet defer={false}>
    <title>{title}</title>
    <meta name='description' content={description} />
  </Helmet>
)

export default SEO
