import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'

export default () => (
  <Layout>
    <section>
      <Header>
        <Header.Title>Skills</Header.Title>
      </Header>
      <h2>Languages</h2>
      <ul>
        {[
          'JavaScript',
          'Java',
          'C#',
          'DB: SQL, MongoDB',
          'PHP',
          'C',
          'Haskell',
        ].map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
      <h2>Frameworks</h2>
      <ul>
        {[
          'JS: React, Angular/AngularJS',
          'Node.js: Express',
          'Java: Spring (WebFlux)',
          'CSS: SemanticUI, Material, Bootstrap',
        ].map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
      <h2>Platforms / Tools</h2>
      <ul>
        {[
          'Node.js',
          'NPM/Yarn',
          'Docker/Docker Compose',
          'Git',
          'AWS',
          'now',
        ].map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    </section>
  </Layout>
)
