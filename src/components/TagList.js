import React from 'react'
import PropTypes from 'prop-types'
import { Tag } from './'

const propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
}

const TagList = ({ tags = [] }) => {
  return tags.map((tag, index) => (
    <>
      <Tag key={tag.name}>{tag.name}</Tag>

      {tags.length - 1 !== index && ', '}
    </>
  ))
}

TagList.propTypes = propTypes

export default TagList
