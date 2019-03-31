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
  transition: all 400ms ease-out;
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
      margin: 0 0 0 16px;
      font-size: 0.85em;
      font-weight: 600;
      text-decoration: none;
      color: ${c.navItemColor};
      transition: all 200ms ease;
      &:hover{
        color: ${c.navItemColorHover};
      }
      &::after ${underlineCSS(c.backgroundColor)}
      &:hover::after ${underlineCSS(c.navItemColorHover)}
    `}
    activeStyle={{
      color: c.navItemColorActive,
    }}
    {...props}
  />
)

const NavCointainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5vh 5vw 5vh 5vw;
  margin: 0px auto;
  max-width: 1440px;
`

const Nav = () => (
  <NavCointainer>
    <Logo />
    <div
      css={`
        display: flex;
      `}
    >
      <NavItem to="/work">WORK</NavItem>
      <NavItem to="/skills">SKILLS</NavItem>
      <NavItem to="/contact">CONTACT</NavItem>
      <NavItem to="/legal-notice">LEGAL NOTICE</NavItem>
    </div>
  </NavCointainer>
)

export default Nav
