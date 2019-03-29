import styled, { keyframes, css } from 'styled-components'
import chroma from 'chroma-js'
import c from '../utils/color'

const boxShadow = alpha => `0px 5px 42px -10px hsla(0,0%,0%,${alpha})`

const linearGradient = gradientAlpha => `linear-gradient(
  230deg,
  ${c.titleGradientColors.map(x => chroma(x).alpha(gradientAlpha)).join(', ')}
);
`
const changeColor = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`

const Box = styled.div`
  padding: 0.3em 0.5em 0.3em 0.5em;
  box-shadow: ${({ elevation = 0 }) => boxShadow(elevation)};
  border-radius: ${({ variant = 'square' }) =>
    variant === 'round' ? `5px` : `2px`};
  background: ${({ gradientAlpha = 0 }) => linearGradient(gradientAlpha)};
  transition: all 400ms ease-out;
  ${({ animated }) =>
    animated &&
    css`
      background-size: 400% 400%;
      animation: ${changeColor} 20s ease infinite;
    `}
`

const HoverBox = styled(Box)`
  &:hover,
  &:focus {
    background: ${({ gradientAlpha = 0, gradientAlphaHover = gradientAlpha }) =>
      linearGradient(gradientAlphaHover)};
    box-shadow: ${({ elevation = 0, elevationHover = elevation }) =>
      boxShadow(elevationHover)};
    outline: currentcolor none 0px;
  }
`

export default Box
export { HoverBox }
