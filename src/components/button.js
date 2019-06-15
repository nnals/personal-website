import styled from 'styled-components'
import c from '../utils/color'
import { HoverBox } from './box'

const Button = styled(HoverBox).attrs({
  variant: 'square',
  gradientAlpha: 0.8,
  gradientAlphaHover: 1,
  elevation: 0.25,
  elevationHover: 0.6,
})`
  color: ${c.backgroundColor};
  font-weight: bold;
  padding: 0.4em;
  width: 150px;
  letter-spacing: 0.14em;
  border: none;
  margin-top: 0.4em;
`

export default Button
