import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import c from '../utils/color'

const linkCSS = `
  text-decoration: none;
  color: ${c.linkColor};
  &:hover {
    color: ${c.linkColorHover};
  }
`

const Link = ({ children, to, activeStyle, ...rest }) => {
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const mail = /^mailto:/.test(to)
  const internal = /^\/(?!\/)/.test(to)

  if (mail) {
    return (
      <a css={linkCSS} href={to} {...rest}>
        {children}
      </a>
    )
  }

  if (internal) {
    return (
      <GatsbyLink css={linkCSS} to={to} activeStyle={activeStyle} {...rest}>
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a
      css={linkCSS}
      target="_blank"
      rel="noopener noreferrer"
      href={to}
      {...rest}
    >
      {children}
    </a>
  )
}

export default Link
