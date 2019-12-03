import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Box, Heading } from 'flokit'
import Layout from './Layout'
import TagList from './TagList'
import Button from './Button'
import useSiteMetadata from '../hooks/useSiteMetadata'

const Job = ({ job }) => {
  const { mailTo } = useSiteMetadata()
  const mail = `mailto:${mailTo}?subject${job.title}`

  return (
    <Layout>
      <Box as='header' width={1} marginBottom='5' paddingRight='3'>
        <Heading as='h1' marginBottom='3' fontSize='8' fontWeight='4'>
          {job.title}
        </Heading>

        <TagList tags={job.tags} />
      </Box>

      <article>
        {job.body && documentToReactComponents(job.body.json)}

        {mailTo && (
          <Button as='a' title='Send an email' href={mail} marginTop='5'>
            Apply
          </Button>
        )}
      </article>
    </Layout>
  )
}

export default Job
