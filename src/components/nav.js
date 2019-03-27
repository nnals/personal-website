import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import c from '../utils/color'
import typography from '../utils/typography'
import Box from './box'

const LogoBox = styled(Box)`
  font-size: 0.8em;
  font-family: ${typography.options.headerFontFamily.join(', ')};
  background-color: ${c.logoColor};
  &:hover {
    background-color: ${c.logoColorHover};
  }
`

const Logo = ({ variant }) => (
  <Link
    to="/"
    css={`
      text-decoration: none;
    `}
  >
    <LogoBox>
      <div
        css={`
          color: ${c.backgroundColor};
          margin: 0;
        `}
      >
        {variant === 'small' ? `NB` : `Nicolai Benker`}
      </div>
    </LogoBox>
  </Link>
)

const underlineCSS = color => `{
  content: '';
  height: 2px;
  background: ${color};
  display: block;
  margin-top: -1px;
}`

const NavItem = props => (
  <Link
    css={`
      margin: 0 8px 0 8px;
      text-decoration: none;
      color: ${c.navItemColor};
      &::after ${underlineCSS(c.backgroundColor)}
      &:hover::after ${underlineCSS(c.navItemColor)}
    `}
    activeStyle={{
      color: c.navItemColorActive,
    }}
    {...props}
  />
)

const Nav = () => (
  <div
    css={`
      display: flex;
      justify-content: space-between;
      padding: 5vh 5vw 5vh 5vw;
    `}
  >
    <Logo />
    <div
      css={`
        display: flex;
      `}
    >
      <NavItem to="/work">work</NavItem>
      <NavItem to="/skills">skills</NavItem>
      <NavItem to="/contact">contact</NavItem>
    </div>
  </div>
)

export default Nav
