import React from 'react'
import { graphql } from 'gatsby'
import { Box, Flex, Heading, Text } from 'flokit'
import { BackgroundImage, Container, Image, Link } from '../components'
import Tag from '../components/tag'

const Header = () => (
  <Box
    as='header'
    position='absolute'
    top='0'
    left='0'
    zIndex='1'
    width='100%'
    height='70px'
  >
    <Container as={Flex} height='100%' alignItems='center'>
      <Link as='a' href='https://codeminer42.com'>
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
            Codeminer42
          </Flex>
        </Heading>
      </Link>
    </Container>
  </Box>
)

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
        Join our team spread across 11 offices in Brazil.
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

const IndexPage = ({ data }) => {
  const { jobs } = data
  const hasJobs = jobs.edges.length > 0

  return (
    <>
      <Header />

      <Hero />

      <Box as='main' paddingTop='5'>
        <Container as={Flex} justifyContent='center' alignItems='center'>
          {hasJobs ? (
            <ul>
              {jobs.edges.map((edge) => {
                const job = edge.node

                return (
                  <li key={job.slug}>
                    <Link to={`/jobs/${job.slug}`}>{job.title}</Link>

                    {job.tags.map((tag) => {
                      return <Tag key={tag.name} {...tag} />
                    })}
                  </li>
                )
              })}
            </ul>
          ) : (
            <p>No positions to show.</p>
          )}
        </Container>
      </Box>

      <Footer />
    </>
  )
}

export const query = graphql`
  query IndexQuery {
    jobs: allContentfulJob(sort: { order: ASC, fields: [slug] }) {
      edges {
        node {
          slug
          title
          tags {
            name
          }
        }
      }
    }
  }
`

export default IndexPage
