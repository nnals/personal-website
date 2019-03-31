import { Link } from 'gatsby'
import styled from 'styled-components'
import c from '../utils/color'

export default styled(Link)`
  text-decoration: none;
  color: ${c.linkColor};
  &:hover {
    color: ${c.linkColorHover};
  }
`
