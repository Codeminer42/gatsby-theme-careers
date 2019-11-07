import React from 'react'
import PropTypes from 'prop-types'
import { Tag } from './'

const TagList = ({ tags = [], fontSize }) =>
  tags.map((tag, index) => (
    <React.Fragment key={tag.name}>
      <Tag fontSize={fontSize}>{tag.name}</Tag>

      {tags.length - 1 !== index && ', '}
    </React.Fragment>
  ))

TagList.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  fontSize: PropTypes.string,
}

export default TagList
