import { graphql } from 'gatsby'
import React from 'react'
import Layout from 'components/layout'
import Header from 'components/header/header'
import About from 'components/about/about'
import Faq from 'components/faq/faq'
import Company from 'components/company/company'

const IndePagex = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Header />
      <About />
      <Faq />
      <Company />
    </Layout>
  )
}

export default IndePagex
