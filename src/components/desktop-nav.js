import React from 'react'
import styled from 'styled-components'
import NavItem from './nav-item'

const DesktopNavContainer = styled.div`
  display: flex;
`

const DesktopNav = () => (
  <DesktopNavContainer>
    <NavItem to="/work">WORK</NavItem>
    <NavItem to="/skills">SKILLS</NavItem>
    <NavItem to="/contact">CONTACT</NavItem>
    <NavItem to="/legal-notice">LEGAL NOTICE</NavItem>
  </DesktopNavContainer>
)

export default DesktopNav
