import React from 'react'
import { Box, Flex, Heading, Text } from 'flokit'
import { Container, BackgroundImage } from './'

const Hero = () => (
  <Box as='section' position='relative' height='450px' paddingTop='70px'>
    <Container
      as={Flex}
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      height='100%'
    >
      <Heading
        fontSize={['6', '7']}
        fontWeight='2'
        color='white'
        textAlign='center'
        textTransform='uppercase'
        textShadow='0 3px 8px rgba(0,0,0,.4)'
      >
        Open Positions
      </Heading>

      <Text
        paddingTop='3'
        fontSize={['4', '5']}
        fontWeight='2'
        textAlign='center'
        textShadow='0 3px 8px rgba(0,0,0,.4)'
        color='white'
      >
        Join our team spread across 12 cities in Brazil.
      </Text>
    </Container>

    <Box
      position='absolute'
      zIndex='-1'
      top='0'
      left='0'
      width='100%'
      height='100%'
    >
      <BackgroundImage src='theconf.jpg' width='100%' height='100%' />
    </Box>
  </Box>
)

export default Hero
