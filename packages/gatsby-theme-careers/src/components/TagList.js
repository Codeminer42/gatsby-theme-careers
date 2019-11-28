import React from 'react'
import { Text } from 'flokit'

const TagList = ({ tags }) =>
  tags.map((tag, index) => (
    <React.Fragment key={tag.name}>
      <Text as='span' fontSize='3' fontWeight='3'>
        {tag.name}
      </Text>

      {tags.length - 1 !== index && ', '}
    </React.Fragment>
  ))

export default TagList
