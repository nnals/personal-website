import React from 'react'
import styled from 'styled-components'
import {
  FaBriefcase as IconTasks,
  FaWrench as IconTechnologies,
} from 'react-icons/fa'
import Layout from '../components/layout'
import c from '../utils/color'
import Box from '../components/box'
import SEO from '../components/SEO'

const JobSection = ({ title, period, intro, children }) => (
  <section css="margin-bottom: 2.4em">
    <header
      css={`
        margin-bottom: ${intro ? '0.6em' : '1.45em'};
      `}
    >
      <h2 css="margin-bottom: 0.1em;">{title}</h2>
      <div
        css={`
          color: ${c.bodyColorPale};
          font-size: 0.9em;
        `}
      >
        {period}
      </div>
    </header>
    {intro && <p>{intro}</p>}
    {children}
  </section>
)

const ProjectBox = styled(Box).attrs({
  elevation: 0.25,
  variant: 'round',
  gradientAlpha: 0.015,
})`
  flex: 1;
  padding: 1.3em;
  margin-bottom: 1.8em;
`

const ProjectTitle = styled.h3`
  font-size: 1.1em;
  margin-bottom: 1em;
`

const ProjectSubtitle = styled.h4`
  margin-bottom: 0.5em;
  font-size: 0.9em;
  display: flex;
  align-items: end;
`

const iconCSS = `
  margin-right: .45em;
  color: ${c.iconColor}
  font-size: 1.25em;
  margin-top: -.18em
`

const Project = ({ title, description, tasks, technologies }) => (
  <ProjectBox>
    <ProjectTitle>{title}</ProjectTitle>
    <p>{description}</p>
    <ProjectSubtitle>
      <IconTasks css={iconCSS} />
      Tasks
    </ProjectSubtitle>
    <p>{tasks}</p>
    <ProjectSubtitle>
      <IconTechnologies css={iconCSS} />
      Technologies
    </ProjectSubtitle>
    <p css="margin-bottom: 0;">{technologies}</p>
  </ProjectBox>
)

export default () => (
  <Layout>
    <SEO pathname="/work" title="Work" />
    <Layout.Header title="What I'v been up to" />
    <Layout.Content>
      <p css="font-size: 1.2em;">
        Below you will find the companies I have worked for and a selection of
        projects I helped realize during that period.
      </p>
      <JobSection title="Freelancing" period="2017 – today">
        <Project
          title="Fashion Marketplace"
          description="Blabla for startup, early phase ..."
          tasks="From requirements engineering over software architecture to implementation"
          technologies="MongoDB, Kotlin, Spring Boot Webflux, React, MaterialUI, Stripe Connect"
        />
        <Project
          title="Lorem Ipsum"
          description="Blabla for Helfende Hände ... automation of tedious business processes ..."
          tasks="Optimization of business processes, ..."
          technologies="MSSQL, Sequelize, Express, React, SemanticUI, Lerna, Jest"
        />
      </JobSection>
      <JobSection
        title="iXTS GmbH"
        period="2014 – 2017"
        intro="An IT consulting agency in Munich, Germany"
      >
        <Project
          title="Editorial management software"
          description="An editorial management software for radio stations of the Westfunk
  GmbH. The software helps editors to create and share news and media
  content, plan the daily news and distribute them. Further it is used for
  shift management and rewarding freelance editors, based on published
  contents or worked shifts."
          tasks="Development of modules for distributed web backends and Single Page Applications"
          technologies="C#, ASP Web API, PostgreSQL, NServiceKit OrmLite, AngularJS, Bootstrap"
        />
        <Project
          title="Media Box"
          description="Blabla for Media Carrier GmbH ..."
          tasks="Development of modules for distributed web backends and Single Page Applications, rewrite of PHP legacy code to AngularJS"
          technologies="C#, Nancy, PHP, AngularJS, Bootstrap, Docker, AWS"
        />
      </JobSection>

      <JobSection title="Sistecs Media Agentur" period="2013 – 2016">
        <p>A full service agency in Erding, Germany</p>
      </JobSection>
    </Layout.Content>
  </Layout>
)
