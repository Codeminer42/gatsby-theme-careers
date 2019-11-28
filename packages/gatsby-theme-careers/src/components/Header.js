import React from 'react'
import { Box, Flex } from 'flokit'
import Container from './Container'

const Header = ({ children }) => (
  <Box as='header' width='100%' height='90px'>
    <Container
      as={Flex}
      height='100%'
      alignItems='center'
      justifyContent='center'
    >
      {children}
    </Container>
  </Box>
)

export default Header
