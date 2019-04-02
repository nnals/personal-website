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
  padding: 8vh 5vw 6vh 5vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    <Nav />
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
