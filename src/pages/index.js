import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/SEO'

const SupStar = () => <sup css="vertical-align: sub;">*</sup>

export default () => (
  <Layout>
    <SEO pathname="/" title="Home" />
    <Layout.Header title="Nicolai Benker" subtitle="Software engineer" />
    <Layout.Content>
      <div css="font-size: 1.2em">
        <p>
          Hello, I‘m a software engineer based in Vienna, Austria.
          <SupStar />
          <br />
          Lately I have been mostly focusing on full stack web development.
        </p>
        <p>
          I‘m available for freelance work. You can contact me{' '}
          <Link to="/contact">here</Link>.
        </p>
      </div>
      <p css="font-size: .8em">
        <SupStar /> Not that people‘s whereabouts would really matter nowadays.
      </p>
    </Layout.Content>
  </Layout>
)
