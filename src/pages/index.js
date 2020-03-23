import { graphql } from 'gatsby'
import React from 'react'
import Layout from 'components/layout'
import Header from 'components/header/header'
import About from 'components/about/about'

const IndePage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Header />
      <About />
    </Layout>
  )
}

export default IndePage
