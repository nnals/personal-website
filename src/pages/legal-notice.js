import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/SEO'

export default () => (
  <Layout>
    <SEO pathname="/legal-notice" title="Legal notice" />
    <Layout.Header title="Legal notice" />
    <Layout.Content>
      <p>Nicolai Maximilian Benker</p>
      <p>
        Roßauer Lände 39/6
        <br />
        1090 Wien Austria
        <br />
        Email: contact@nbenker.io
      </p>
      <p>
        VAT-ID: ATU73018539
        <br />
        Economic chambers: Wirtschaftskammer Wien
      </p>
    </Layout.Content>
  </Layout>
)
