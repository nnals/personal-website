import React from 'react'
import styled from 'styled-components'
import c from '../utils/color'
import Box from './box'

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: start;
`

const TitleBox = styled(Box).attrs({
  elevation: 0.8,
  gradientAlpha: 1,
  animated: true,
})`
  margin-bottom: 0.3em;
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
