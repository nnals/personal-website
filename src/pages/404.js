import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/SEO'

export default () => (
  <Layout>
    <SEO pathname="/404" title="" />
    <h1>Page not found</h1>
    <Link to="/">Back to home</Link>
  </Layout>
)
