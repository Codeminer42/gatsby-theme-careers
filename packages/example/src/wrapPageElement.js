import React from 'react'
import Page from './components/Page'

export const wrapPageElement = ({ element, props }) => (
  <Page {...props}>{element}</Page>
)
