import React from 'react'
import { Header, Hero, Main, Footer } from './'

const HomeLayout = ({ children }) => (
  <>
    <Header />

    <Hero />

    <Main>{children}</Main>

    <Footer />
  </>
)

export default HomeLayout
