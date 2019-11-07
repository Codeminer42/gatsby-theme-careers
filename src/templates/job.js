import React from 'react'
import { graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Box, Flex, Heading } from 'flokit'
import { Button, Container, TagList } from '../components'

const Job = ({ data }) => {
  const job = data.contentfulJob

  return (
    <Container as='section'>
      <Box
        as='header'
        width={[1, 2 / 3, 3 / 4]}
        marginTop='6'
        marginBottom='5'
        paddingRight='3'
      >
        <Heading marginBottom='3' fontSize='9' fontWeight='4' color='black'>
          {job.title}
        </Heading>

        <TagList tags={job.tags} fontSize='18px' />
      </Box>

      <Flex>
        <Box
          as='article'
          className='JobContent'
          width={[1, 2 / 3, 3 / 4]}
          paddingRight='3'
        >
          <JobContentStyle />

          {job.body && documentToReactComponents(job.body.json)}
        </Box>

        <Box as='aside' width={[1, 1 / 3, 1 / 4]} paddingLeft='3'>
          <Button width={1}>Apply</Button>
        </Box>
      </Flex>
    </Container>
  )
}

const JobContentStyle = createGlobalStyle`
  .JobContent {
    p {
      margin: 0;
      font-size: 18px;
      font-weight: ${themeGet('fontWeights.3')};
      color: ${themeGet('colors.doveGray')};

      &:not(:last-child) {
        margin-bottom: ${themeGet('space.3')}px;
      }
    }
  }
`

export const pageQuery = graphql`
  query JobQuery($slug: String!) {
    contentfulJob(slug: { eq: $slug }) {
      title
      body {
        json
      }
      tags {
        name
      }
    }
  }
`

export default Job
