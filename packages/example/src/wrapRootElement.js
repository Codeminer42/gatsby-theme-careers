import React from 'react'
import Root from './components/Root'

export const wrapRootElement = ({ element, props }) => (
  <Root {...props}>{element}</Root>
)
