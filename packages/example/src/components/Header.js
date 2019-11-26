import React from 'react'
import { Box, Heading, Flex } from 'flokit'
import { Container, Image, Link } from './'

const Header = (props) => (
  <Box
    as='header'
    position='absolute'
    top='0'
    left='0'
    zIndex='1'
    width='100%'
    height='header'
    {...props}
  >
    <Container as={Flex} height='100%' alignItems='center'>
      <Link to='/'>
        <Heading
          as='h1'
          color='white'
          fontSize='4'
          fontWeight='2'
          textTransform='uppercase'
        >
          <Flex justifyContent='center' alignItems='center'>
            <Image
              src='logo.png'
              alt='Codeminer 42'
              style={{ width: '50.5px', height: '32px', marginRight: '8px' }}
            />
            Codeminer
          </Flex>
        </Heading>
      </Link>
    </Container>
  </Box>
)

export default Header
