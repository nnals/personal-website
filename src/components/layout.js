import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import c from '../utils/color'
import Nav from './nav'
import Header from './header'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${c.backgroundColor};
  }
`

const Main = styled.main`
  margin: 0px auto;
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
      margin-right: 2em;
      min-width: 382px;
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
  min-width: 382px;
`

export default Layout
