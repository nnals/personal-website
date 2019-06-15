import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import c from '../utils/color'
import typography from '../utils/typography'
import Box from './box'
import MobileNav from './mobile-nav'
import DesktopNav from './desktop-nav'

const LogoBox = styled(Box)`
  font-size: 0.8em;
  font-family: ${typography.options.headerFontFamily.join(', ')};
  background-color: ${c.logoColor};
  &:hover {
    background-color: ${c.logoColorHover};
  }
`

const Logo = () => (
  <Link
    to="/"
    css={`
      text-decoration: none;
    `}
  >
    <LogoBox
      css={`
        color: ${c.backgroundColor};
        margin: 0;
      `}
    >
      Nicolai Benker
    </LogoBox>
  </Link>
)

// TODO move some of these styles to layout to colocate with similar Main styles
const NavCointainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5vh 0 5vh 0;
  margin: 0px auto;
  max-width: 1440px;
  width: 90vw;
`

const Nav = ({ variant = 'desktop' }) => {
  if (variant === 'mobile') {
    return (
      <NavCointainer>
        <Logo />
        <MobileNav />
      </NavCointainer>
    )
  }
  return (
    <NavCointainer>
      <Logo />
      <DesktopNav />
    </NavCointainer>
  )
}

export default Nav
