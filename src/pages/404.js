import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/SEO'

export default () => (
  <Layout>
    <SEO pathname="/404" title="" />

    <Layout.Header title="Page not found" />
    <Layout.Content>
      <Link to="/">Back to home</Link>
    </Layout.Content>
  </Layout>
)
