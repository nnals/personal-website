import React from 'react'
import styled from 'styled-components'
import Box from '../components/box'
import Layout from '../components/layout'

const SkillBox = styled(Box).attrs({
  elevation: 0.15,
  variant: 'round',
  gradientAlpha: 0.015,
})`
  flex: 1;
`

const SkillSection = ({ title, skills }) => (
  <section
    css={`
      margin: 0 2em 1.8em 0;
      width: 238px;
      display: flex;
      flex-direction: column;
    `}
  >
    <h2>{title}</h2>
    <SkillBox>
      <ul
        css={`
          margin-bottom: 0;
          margin-top: 0.4em;
        `}
      >
        {skills.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    </SkillBox>
  </section>
)

export default () => (
  <Layout>
    <Layout.Header title="What I know" />
    <Layout.Content>
      <div
        css={`
          display: flex;
          flex-wrap: wrap;
        `}
      >
        <SkillSection
          title="Languages"
          skills={[
            'JavaScript',
            'Java',
            'C#',
            'DB: SQL, MongoDB',
            'Python',
            'PHP',
            'C',
            'OpenAPI/Swagger',
          ]}
        />
        <SkillSection
          title="Frameworks"
          skills={[
            'JS: React, React Native/Expo, Angular/AngularJS',
            'Node.js: Express',
            'Java: Spring (WebFlux)',
            'CSS: SemanticUI, Material, Bootstrap',
            'Python: Django',
          ]}
        />
        <SkillSection
          title="Platforms / Tools"
          skills={[
            'Node.js/NPM/Yarn',
            'Lerna',
            'Docker/Docker Compose',
            'Git',
            'Stripe (Connect)',
            'Gatsby',
            'AWS',
            'Now',
          ]}
        />
      </div>
    </Layout.Content>
  </Layout>
)
