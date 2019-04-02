import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import c from '../utils/color'

const underlineCSS = color => `{
  content: '';
  height: 2px;
  background: ${color};
  display: block;
  margin-top: -1px;
}`

const DesktopNavItem = styled(Link).attrs({
  activeStyle: {
    color: c.navItemColorActive,
  },
})`
  margin: 0 0 0 16px;
  font-size: 0.85em;
  font-weight: 600;
  text-decoration: none;
  color: ${c.navItemColor};
  transition: all 200ms ease;
  &:hover {
    color: ${c.navItemColorHover};
  }
  &::after ${underlineCSS(c.backgroundColor)}
  &:hover::after ${underlineCSS(c.navItemColorHover)}
`

const MobileNavItem = styled(Link).attrs({
  activeStyle: {
    color: c.mobileNavItemColorActive,
  },
})`
  font-size: 1.25em;
  font-weight: 600;
  text-decoration: none;
  color: ${c.mobileNavItemColor};
  transition: all 200ms ease;
  &:hover {
    color: ${c.mobileNavItemColorHover};
  }
`

const NavItem = ({ variant = 'desktop', ...props }) =>
  variant === 'mobile' ? (
    <MobileNavItem {...props} />
  ) : (
    <DesktopNavItem {...props} />
  )

export default NavItem
