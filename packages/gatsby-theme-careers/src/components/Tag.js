import React from 'react'
import Layout from './Layout'
import JobList from './JobList'
import { Heading } from 'flokit'

const Tag = ({ jobs, tag }) => (
  <Layout>
    <Heading as='h2' marginBottom='4' fontSize='6' fontWeight='4'>
      {tag}
    </Heading>
    <JobList jobs={jobs} />
  </Layout>
)

export default Tag
