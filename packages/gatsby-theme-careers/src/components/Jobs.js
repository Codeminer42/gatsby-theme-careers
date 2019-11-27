import React from 'react'
import { Link } from 'gatsby'
import TagList from './TagList'

const Jobs = ({ jobs }) => (
  <ul>
    {jobs.map(({ node: job }) => (
      <li key={job.slug}>
        <Link to={`/jobs/${job.slug}`}>
          <h3>{job.title}</h3>
        </Link>

        <TagList tags={job.tags} />
      </li>
    ))}
  </ul>
)

export default Jobs
