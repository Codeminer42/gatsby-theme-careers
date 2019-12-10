import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Box, Heading } from 'flokit'
import Layout from './Layout'
import TagList from './TagList'
import Button from './Button'

const data = (job) => {
  return{
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    url: `/jobs/${job.slug}`,
    description: job.body,
    identifier: job.tags
  }
}

const Job = ({ job }) => (
  <>
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

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data(job)) }}
    />
  </>
)

export default Job
