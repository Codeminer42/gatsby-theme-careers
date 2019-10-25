import React from 'react'
import HomeLayout from './HomeLayout'
import JobLayout from './JobLayout'

const layouts = {
  job: JobLayout,
}

const Layout = ({ layout, children }) => {
  const LayoutComponent = layouts[layout] || HomeLayout

  return (
    <LayoutComponent>
      {children}
    </LayoutComponent>
  )
}

export default Layout
