import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import c from '../utils/color'
import Nav from './nav'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${c.backgroundColor};
  }
`

const Main = styled.main`
  margin: 0px auto;
  max-width: 570px;
  padding: 8vh 5vw 6vh 5vw;
  // height: 100vh;
  display: flex;
  flex-direction: column;
`

export default ({ children }) => (
  <div>
    <GlobalStyle />
    <Nav />
    <Main>{children}</Main>
  </div>
)
