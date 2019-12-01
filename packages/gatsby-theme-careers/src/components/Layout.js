import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Heading } from 'flokit'
import GlobalStyle from './GlobalStyle'
import Header from './Header'
import Main from './Main'
import Container from './Container'
import Link from './Link'
import SEO from './SEO'
import useSiteMetadata from '../hooks/useSiteMetadata'
import theme from '../theme'

const Layout = ({ children }) => {
  const meta = useSiteMetadata()

  return (
    <ThemeProvider theme={theme}>
      <SEO {...meta} />

      <GlobalStyle />

      <Header>
        <Link to={meta.basePath}>
          <Heading as='h1' fontSize='6' fontWeight='3'>
            {meta.title}
          </Heading>
        </Link>
      </Header>

      <Main>
        <Container>{children}</Container>
      </Main>
    </ThemeProvider>
  )
}

export default Layout
