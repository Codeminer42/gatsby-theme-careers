import React from 'react'
import Button from './Button'

const ApplyButton = ({ mailTo, subject, ...restProps }) => {
  if (!mailTo) return null

  let mail = `mailTo:${mailTo}`;
  if (subject) mail += `?subject=${subject}`

  return (
    <Button as='a' title='Send an email' href={mail} {...restProps}>
      Apply
    </Button>
  )
}

export default ApplyButton;
