import React from 'react'
import { Box, Heading } from 'flokit'
import List from './List'
import Link from './Link'
import TagList from './TagList'

const JobList = ({ jobs }) => (
  <List>
    {jobs.map(({ node: job }) => (
      <Box as='li' key={job.slug} paddingBottom='4'>
        <Link to={`/jobs/${job.slug}`} display='block'>
          <Heading as='h2' marginBottom='2' fontSize='5'>
            {job.title}
          </Heading>
        </Link>

        <TagList tags={job.tags} />
      </Box>
    ))}
  </List>
)

export default JobList
