import React from 'react'
import { Link } from 'gatsby'
import c from '../utils/color'
import typography from '../utils/typography'

const Logo = () => (
  <Link
    to="/"
    css={`
      text-decoration: none;
    `}
  >
    <div
      css={`
        font-size: 0.8em;
        font-family: ${typography.options.headerFontFamily.join(', ')};
        padding: 0.3em 0.5em 0.3em 0.5em;
        background-color: ${c.logoColor};
        &:hover {
          background-color: ${c.logoColorHover};
        }
      `}
    >
      <div
        css={`
          color: ${c.backgroundColor};
          margin: 0;
        `}
      >
        Nicolai Benker
      </div>
    </div>
  </Link>
)

const underlineCSS = color => `{
  content: '';
  height: 3px;
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