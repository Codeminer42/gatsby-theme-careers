import React from 'react'
import PropTypes from 'prop-types'

import Tag from './Tag'

const propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  ).isRequired
}

const TagList = ({ tags }) => {
  return tags.map((tag) => <Tag key={tag.name} {...tag} />)
}

TagList.propTypes = propTypes

export default TagList
