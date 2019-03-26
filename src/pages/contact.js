import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'

export default () => (
  <Layout>
    <Layout.Header title="How to contact me" />
    <Layout.Content>
      <p
        css={`
          font-size: 1.2em;
        `}
      >
        If you need help with a project feel free to send me a message.
      </p>
      <form />
    </Layout.Content>
  </Layout>
)
