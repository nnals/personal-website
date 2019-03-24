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
    <section style={{ marginTop: '2em' }}>
      <p>
        Hello, I am a software engineer based in Vienna, Austria.
        <br />
        Lately I've been mostly focusing on full stack web development.
      </p>
      <p>
        I'm available for freelance work. You can contact me{' '}
        <Link to="/contact">here</Link>.
      </p>
    </section>
    <section />
    <section>
      <h2>Skills</h2>
      <h3>Languages</h3>
      <ul>
        {[
          'JavaScript',
          'Java',
          'C#',
          'DB: SQL, MongoDB',
          'PHP',
          'C',
          'Haskell',
        ].map(x => (
          <li>{x}</li>
        ))}
      </ul>
      <h3>Frameworks</h3>
      <ul>
        {[
          'JS: React, Angular/AngularJS',
          'Node.js: Express',
          'Java: Spring (WebFlux)',
          'CSS: SemanticUI, Material, Bootstrap',
        ].map(x => (
          <li>{x}</li>
        ))}
      </ul>
      <h3>Platforms / Tools</h3>
      <ul>
        {[
          'Node.js',
          'NPM/Yarn',
          'Docker/Docker Compose',
          'Git',
          'AWS',
          'now',
        ].map(x => (
          <li>{x}</li>
        ))}
      </ul>
    </section>
    <section>
      <h2>Work</h2>
      <h3>Freelancing (2017-today)</h3>
      <h3>iXTS GmbH (2014-2017)</h3>
      <p>An IT consulting agency in Munich, Germany</p>
      <h3>Sistecs Media Agentur (2013-2016)</h3>
      <p>A full service agency in Erding, Germany</p>
    </section>
  </Layout>
)
