import React, { useState } from 'react'
import c from '../utils/color'
import NavItem from './nav-item'

const color = c.hamburgerColor

const MobileNav = () => {
  const [isToggledOn, setToggle] = useState(false)
  const toggle = () => setToggle(!isToggledOn)

  return (
    <div
      css={`
        margin-top: -0.2em;
      `}
    >
      <button
        type="button"
        onClick={toggle}
        aria-label={`${isToggledOn ? 'close menu' : 'open menu'}`}
        css={`
          z-index: 30;
          top: -5px;
          position: relative;
          background: transparent;
          border: none;
          :hover:not(.touch),
          :focus {
            background: transparent;
            border: none;
            outline: none;
          }
        `}
      >
        <div
          css={`
            width: 24px;
            height: 2px;
            background: ${color};
            position: absolute;
            right: 0;
            ${isToggledOn ? 'background: transparent' : `background: ${color}`};
            transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
            ::before {
              content: '';
              top: -8px;
              width: 24px;
              height: 2px;
              background: ${isToggledOn ? 'white' : `${color}`};
              position: absolute;
              left: 0;
              ${isToggledOn
                ? 'transform: rotate(45deg); top: 0; '
                : 'transform: rotate(0)'};
              transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
            }
            ::after {
              top: 8px;
              content: '';
              width: 24px;
              height: 2px;
              background: ${isToggledOn ? 'white' : `${color}`};
              position: absolute;
              left: 0;
              ${isToggledOn
                ? 'transform: rotate(-45deg); top: 0;'
                : 'transform: rotate(0)'};
              transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
            }
          `}
        />
      </button>

      {isToggledOn && (
        <div
          css={`
            overflow: hidden;
            position: absolute;
            z-index: 20;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            background: ${c.linearGradient(1, 0.5)};
            justify-content: center;
          `}
        >
          <div
            css={`
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-evenly;
              a {
                padding: 10px;
              }
            `}
          >
            <NavItem variant="mobile" to="/work">
              WORK
            </NavItem>
            <NavItem variant="mobile" to="/skills">
              SKILLS
            </NavItem>
            <NavItem variant="mobile" to="/contact">
              CONTACT
            </NavItem>
            <NavItem variant="mobile" to="/legal-notice">
              LEGAL NOTICE
            </NavItem>
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileNav
