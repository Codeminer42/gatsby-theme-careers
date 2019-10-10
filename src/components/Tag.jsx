import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  name: PropTypes.string.isRequired
}

const Tag = ({ name }) => {
  return (
    <span>{name}</span>
  )
}

Tag.propTypes = propTypes

export default Tag
