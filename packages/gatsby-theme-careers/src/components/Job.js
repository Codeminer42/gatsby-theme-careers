import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Box, Heading } from 'flokit'
import Layout from './Layout'
import TagList from './TagList'
import Button from './Button'

const Job = ({ job }) => (
  <Layout>
    <Box as='header' width={1} marginBottom='5' paddingRight='3'>
      <Heading as='h1' marginBottom='3' fontSize='8' fontWeight='4'>
        {job.title}
      </Heading>

      <TagList tags={job.tags} />
    </Box>

    <article>
      {job.body && documentToReactComponents(job.body.json)}

      <Button marginTop='5'>Apply</Button>
    </article>
  </Layout>
)

export default Job
