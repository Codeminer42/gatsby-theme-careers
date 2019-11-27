import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import TagList from './TagList'

const Job = ({ job }) => (
  <section>
    <header>
      <h1>{job.title}</h1>

      <TagList tags={job.tags} />
    </header>

    <article>
      {job.body && documentToReactComponents(job.body.json)}

      <button>Apply</button>
    </article>
  </section>
)

export default Job
