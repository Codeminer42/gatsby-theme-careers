import React from 'react'
import { Helmet } from 'react-helmet'
import { GlobalStyle, Layout } from './'

const Page = ({ children, pageContext }) => (
  <>
    <Helmet defer={false}>
      <link
        href='https://fonts.googleapis.com/css?family=Dosis:400,500,600,700|Open+Sans:400,600,700&display=swap'
        rel='stylesheet'
      />
    </Helmet>

    <GlobalStyle />

    <Layout layout={pageContext.layout}>
      {children}
    </Layout>
  </>
)

export default Page
