import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Box from '../components/box'
import c from '../utils/color'
import chroma from 'chroma-js'

const SkillBox = styled(Box).attrs({ elevation: 0.1 })`
  background: linear-gradient(
    270deg,
    ${c.titleGradientColors.map(x => chroma(x).alpha(0.03)).join(', ')}
  );
  // background-size: 400% 400%;
  // background-position: 0% 50%;
`

const SkillSection = ({ title, skills }) => (
  <div
    css={`
      margin: 0 1em 1.8em 1em;
      width: 238px;
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
  </div>
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
            'PHP',
            'C',
            'Haskell',
          ]}
        />
        <SkillSection
          title="Frameworks"
          skills={[
            'JS: React, Angular/AngularJS',
            'Node.js: Express',
            'Java: Spring (WebFlux)',
            'CSS: SemanticUI, Material, Bootstrap',
          ]}
        />
        <SkillSection
          title="Platforms / Tools"
          skills={[
            'Node.js',
            'NPM/Yarn',
            'Docker/Docker Compose',
            'Git',
            'AWS',
            'now',
          ]}
        />
      </div>
    </Layout.Content>
  </Layout>
)
