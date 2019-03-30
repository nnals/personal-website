import React from 'react'
import styled from 'styled-components'
import { FiCode } from 'react-icons/fi'
import Layout from '../components/layout'
import c from '../utils/color'
import Box from '../components/box'

const JobSection = ({ title, period, children }) => (
  <section css="margin-bottom: 1.45em">
    <header>
      <h2 css="margin-bottom: 0.1em;">{title}</h2>
      <div
        css={`
          color: ${c.bodyColorPale};
          font-size: 0.9em;
          margin-bottom: 0.6em;
        `}
      >
        {period}
      </div>
    </header>
    {children}
  </section>
)

const ProjectBox = styled(Box).attrs({
  elevation: 0.15,
  variant: 'round',
  gradientAlpha: 0.015,
})`
  flex: 1;
  padding: 1em;
`

const Project = ({ title, description, tasks, technologies }) => (
  <ProjectBox>
    <h3 css="font-size: 1.1em;">{title}</h3>
    <p>{description}</p>
    <h4>Tasks</h4>
    <p>{tasks}</p>
    <h4>
      <FiCode css="margin-right: .3em;" />
      Technologies
    </h4>
    <p css="margin-bottom: 0;">{technologies}</p>
  </ProjectBox>
)

export default () => (
  <Layout>
    <Layout.Header title="What I'v been up to" />
    <Layout.Content>
      <p css="font-size: 1.2em;">
        Below you will find some projects I have worked on during the past
        years.
      </p>
      <JobSection title="Freelancing" period="2017 – today">
        <p>TODO projects</p>
      </JobSection>
      <JobSection title="iXTS GmbH" period="2014 – 2017">
        <p>An IT consulting agency in Munich, Germany</p>
        <Project
          title="Westfunk GmbH"
          description="An editorial management software for radio stations of the Westfunk
  GmbH. The software helps editors to create and share news and media
  content, plan the daily news and distribute them. Further it is used for
  shift management and rewarding freelance editors, based on published
  contents or worked shifts."
          tasks="TODO"
          technologies="C#, ASP Web API, PostgreSQL, NServiceKit OrmLite, AngularJS, Bootstrap"
        />
      </JobSection>

      <JobSection title="Sistecs Media Agentur" period="2013 – 2016">
        <p>A full service agency in Erding, Germany</p>
      </JobSection>
    </Layout.Content>
  </Layout>
)
