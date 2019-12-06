import React from 'react'
import Button from './Button'

const ApplyButton = ({ mailTo, ...props }) => {
  if (!mailTo) return null
  return (
    <Button as='a' title='Send an email' href={`mailto:${mailTo}`} {...props}>
      Apply
    </Button>
  )
}

export default ApplyButton;
