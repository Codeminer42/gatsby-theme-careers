import React from 'react'
import PropTypes from 'prop-types'

const defaultProps = {
  tag: 'div'
}

const propTypes = {
  tag: PropTypes.oneOf(['div', 'li']),
  children: PropTypes.node.isRequired
}

const JobCard = ({ tag, children }) => {
  return (
    React.createElement(tag, {}, children)
  )
}

JobCard.propTypes = propTypes
JobCard.defaultProps = defaultProps

export default JobCard
