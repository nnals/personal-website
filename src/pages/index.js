import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Header from '../components/header'

export default () => (
  <Layout>
    <Header>
      <Header.Title>Nicolai Benker</Header.Title>
      <Header.Profession>Software engineer</Header.Profession>
    </Header>
    <section>
      <p>
        Hello, I'm a software engineer based in Vienna, Austria.
        <br />
        Lately I have been mostly focusing on full stack web development.
      </p>
      <p>
        I'm available for freelance work. You can contact me{' '}
        <Link to="/contact">here</Link>.
      </p>
    </section>
    <section />
  </Layout>
)
