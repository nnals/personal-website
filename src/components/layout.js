import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import c from '../utils/color'
import Nav from './nav'
import Header from './header'

const empiricallyProvenBestBreakpoint = 382

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${c.backgroundColor};
  }
`

const Main = styled.main`
  margin: 0px auto;
  max-width: 1440px;
  width: 90vw;
  padding: 8vh 0px 6vh 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    <div
      css={`
        margin-top: -0.7em;
        @media (min-width: 601px) {
          display: none;
        }
      `}
    >
      <Nav variant="mobile" />
    </div>
    <div
      css={`
        @media (max-width: 600px) {
          display: none;
        }
      `}
    >
      <Nav variant="desktop" />
    </div>
    <Main>{children}</Main>
  </div>
)

Layout.Header = ({ title, subtitle }) => (
  <div
    css={`
      flex: 2;
      min-width: 280px;
      @media (min-width: ${empiricallyProvenBestBreakpoint}px) {
        margin-right: 2em;
        min-width: ${empiricallyProvenBestBreakpoint}px;
      }
    `}
  >
    <Header>
      <Header.Title>{title}</Header.Title>
      <Header.Subtitle>{subtitle}</Header.Subtitle>
    </Header>
  </div>
)

Layout.Content = styled.div`
  flex: 4;
  min-width: 280px;
  @media (min-width: ${empiricallyProvenBestBreakpoint}px) {
    min-width: ${empiricallyProvenBestBreakpoint}px;
  }
`

export default Layout
