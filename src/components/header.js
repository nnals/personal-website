import React from 'react'
import styled, { keyframes } from 'styled-components'
import { getPrimaryColor } from '../utils/color'

const changeColor = keyframes`
  0% {
    background-color: ${getPrimaryColor(5)};
  }
  50% {
    background-color: ${getPrimaryColor(5, null, 0.6)};
  }
  100% {
    background-color: ${getPrimaryColor(5)};
  }
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: start;
`

const TitleText = styled.h1`
  color: ${getPrimaryColor(97)};
  margin: 0;
`

Header.Title = ({ children }) => (
  <div
    css={`
      background-color: ${getPrimaryColor(5)};
      padding: 0.3em 0.4em 0.3em 0.4em;
      margin-bottom: 0.3em;
      animation: ${changeColor} 20s linear infinite;
    `}
  >
    <TitleText>{children}</TitleText>
  </div>
)

Header.Profession = styled.div`
  font-size: 1.3em;
  color: ${getPrimaryColor(60, 5)};
`

export default Header
