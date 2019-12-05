import React from 'react'
import { Text } from 'flokit'
import Link from './Link'

const TagList = ({ tags }) =>
  tags.map((tag, index) => (
    <React.Fragment key={tag.name}>
      <Link to={`/tags/${tag.slug}`}>
        <Text as='span' fontSize='3' fontWeight='3'>
          {tag.name}
        </Text>
      </Link>
      {tags.length - 1 !== index && ', '}
    </React.Fragment>
  ))

export default TagList
