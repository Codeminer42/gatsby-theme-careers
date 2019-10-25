import React from 'react'
import { Box, Flex } from 'flokit'
import { Container, Link } from './'

const Footer = () => (
  <Box as='footer'>
    <Container marginTop='5'>
      <Flex justifyContent='center' alignItems='center' py='4'>
        <Link as='a' href='https://codeminer42.com'>
          © Codeminer42
        </Link>
      </Flex>
    </Container>
  </Box>
)

export default Footer
