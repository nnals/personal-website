import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: hsl(195, 50%, 99%);
  }
`

const Main = styled.main`
  margin: 0px auto;
  max-width: 550px;
  padding: 64px 16px 48px 16px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export default ({ children }) => (
  <>
    <GlobalStyle />
    <Main>{children}</Main>
  </>
)
