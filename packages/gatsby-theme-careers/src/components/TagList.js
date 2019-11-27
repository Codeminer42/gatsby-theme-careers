import React from 'react'

const TagList = ({ tags }) =>
  tags.map((tag, index) => (
    <React.Fragment key={tag.name}>
      <p style={{ display: 'inline-block' }}>{tag.name}</p>

      {tags.length - 1 !== index && ', '}
    </React.Fragment>
  ))

export default TagList
