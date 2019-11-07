import React from 'react'
import css from '@styled-system/css'
import { graphql } from 'gatsby'
import { Box, Heading, Text } from 'flokit'
import { Container, Link, List, TagList } from '../components'

const IndexPage = ({ data }) => {
  const { jobs } = data
  const hasJobs = jobs.edges.length > 0

  return (
    <Container>
      {hasJobs ? (
        <List>
          {jobs.edges.map((edge) => {
            const job = edge.node

            return (
              <Box
                as='li'
                key={job.slug}
                paddingBottom={['3', '4']}
                css={css({
                  '&:not(:last-child)': {
                    marginBottom: ['3', '4'],
                    borderBottom: 'jobs',
                  },
                })}
              >
                <Link to={`/jobs/${job.slug}`} display='block'>
                  <Heading as='h3' marginBottom='2' fontSize={['4', '5']}>
                    {job.title}
                  </Heading>
                </Link>

                <TagList tags={job.tags} />
              </Box>
            )
          })}
        </List>
      ) : (
        <Text fontSize='5' fontWeight='2' textAlign='center'>
          No positions to show.
        </Text>
      )}
    </Container>
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
