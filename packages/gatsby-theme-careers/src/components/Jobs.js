import React from 'react'
import Layout from './Layout'
import JobList from './JobList'

const Jobs = ({ jobs }) => (
  <Layout>
    <JobList jobs={jobs} />
  </Layout>
)

export default Jobs
