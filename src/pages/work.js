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
  font-size: 1.2em;
  margin-top: -.15em
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
          description="For a startup in its early phase we developed a marketplace connecting customers and fashion designers. Among many other things it allows Designers to easily manage their offered products, their received orders, gain insights into sales statistics and being paid out automatically on a regular basis. Customers are able to purchase goods from several merchants in one order and perform certain social media like actions (following designers, liking products etc.) that are also used to improve personalization. To avoid legal issues arising from distributing money to the merchants, Stripe Connect was used. We are currently in the process of further enhancing the functionality through e.g. automatic generation of shipping labels via integration of a shipping provider."
          tasks="From requirements engineering over software architecture to implementation"
          technologies="MongoDB, Kotlin, Spring Boot Webflux, React, MaterialUI, Stripe Connect (with custom accounts), Firebase Auth"
        />
        <Project
          title="Infotainment System"
          description="For a nursing home in vienna an infotainment system was developed automating many previously manual tasks and thus drastically reducing the time employees had to spend to offer this service to the clients. The system consists of a (REST) backend application and two frontends. Employees create and schedule multimedia content in the backoffice that is later shown by the second frontend which is mirrored to all displays in the nursing home. The functionality includes creation of PowerPoint-like slideshows facilitated by adaptable templates and integration of internal and external APIs (Wikipedia and Wunderground) for automatic content generation, streaming and transcoding of movies, creation of photo slideshows, integration of online radio stations and so forth."
          tasks="Requirements engineering, Specification, UI/UX Design, Software Architecture, Development, Unit and Integration Testing, Deployment"
          technologies="MSSQL, Sequelize, FFMPEG, Express, React, SemanticUI, Lerna, Jest, Docker, Docker Compose"
        />
        <Project
          title="nbenker.io"
          description="For this website Gatsby was chosen for it's well-thought-out design. This provides us with code splitting, link prefetching and many more advantageous aspects leading to a highly performant site."
          tasks="UI Design, Development, SEO optimization"
          technologies="React, Gatsby, styled-components, Typography.js, Netlify CD"
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

      <JobSection
        title="Sistecs Media Agentur"
        period="2013 – 2019"
        intro="A full service agency in Erding, Germany"
      >
        <Project
          title="Artist management app"
          description="To complement an existing web application used by music managers to deal with all organizational and legal business processes, an iOS and Android app for the musicians was developed. The app gives them detailed information about all their events, notifies of messages received from the manager and keeps them up to date on the status of each event. It furthermore allows them to reply to booking inquiries, requests to send legal documents etc."
          tasks="Leading the development, architectural decisions, UI/UX design and deployment to app stores"
          technologies="MySQL, PHP, JWT auth, React Native, Expo"
        />
      </JobSection>
    </Layout.Content>
  </Layout>
)
