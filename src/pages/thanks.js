import React from 'react'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <Layout.Header title="Thanks for the message" />
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
