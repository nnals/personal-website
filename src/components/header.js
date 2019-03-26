import React from 'react'
import styled, { keyframes } from 'styled-components'
import c from '../utils/color'
import Box from './box'

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: start;
`

const changeColor = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`

const TitleBox = styled(Box).attrs({ elevation: 0.8 })`
  background: linear-gradient(270deg, ${c.titleGradientColors.join(', ')});
  background-size: 400% 400%;
  margin-bottom: 0.3em;
  animation: ${changeColor} 20s ease infinite;
`

Header.Title = ({ children }) => (
  <TitleBox>
    <h1
      css={`
        color: ${c.backgroundColor};
        margin: 0;
      `}
    >
      {children}
    </h1>
  </TitleBox>
)

Header.Subtitle = styled.h2`
  margin-top: 0.2em;
  font-size: 1.1em;
  color: ${c.subtitleColor};
`

export default Header
