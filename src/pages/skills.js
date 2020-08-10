import React from 'react'
import styled from 'styled-components'
import Box from '../components/box'
import Layout from '../components/layout'
import SEO from '../components/SEO'

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
          <li key={x}>{x}</li>
        ))}
      </ul>
    </SkillBox>
  </section>
)

export default () => (
  <Layout>
    <SEO pathname="/skills" title="Skills" />
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
            'JavaScript/TypeScript',
            'GraphQL',
            'DB: SQL, MongoDB',
            'HTML, CSS',
            'Java',
            'Kotlin',
            'C#',
            'Python',
            'PHP',
            'OpenAPI/Swagger',
          ]}
        />
        <SkillSection
          title="Frameworks"
          skills={[
            'JS: React, React Native/Expo, Gatsby, Angular/AngularJS',
            'Node.js: Express',
            'CSS/UI: Styled System, Ant Design, SemanticUI, Material, Bootstrap',
            'Java: Spring (WebFlux), JavaFX',
            'C#: Nancy, NServiceKit, ORMLite',
            'Python: Django',
          ]}
        />
        <SkillSection
          title="Platforms / Tools"
          skills={[
            'Node.js/NPM/Yarn',
            'Jest, Cypress',
            'Github Actions, Gitlab CI',
            'Docker/Docker Compose',
            'Git, GitHub, GitLab, Bitbucket',
            'MongoDB Stitch',
            'Stripe (Connect)',
            'AWS Amplify, S3, Cloudfront, EC2',
            'Now v2',
            'Firebase Auth',
          ]}
        />
      </div>
    </Layout.Content>
  </Layout>
)
