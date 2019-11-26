import React from 'react'
import { Header, Main, Footer } from './'

const JobLayout = ({ children }) => (
  <>
    <Header bg='black' />

    <Main>{children}</Main>

    <Footer />
  </>
)

export default JobLayout
