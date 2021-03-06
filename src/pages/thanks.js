import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/SEO'

export default () => (
  <Layout>
    <SEO pathname="/thanks" title="Thanks" />
    <Layout.Header title="Thank you." />
    <Layout.Content>
      <p
        css={`
          font-size: 1.2em;
        `}
      >
        I‘ll get back to you soon.
      </p>
    </Layout.Content>
  </Layout>
)
