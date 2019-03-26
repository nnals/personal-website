import styled from 'styled-components'

// const boxShadow = `0px 10px 10px -5px hsla(0, 0%, 0%, 0.2)`
const boxShadow = alpha => `0px 5px 42px -10px hsla(0,0%,0%,${alpha})`

const Box = styled.div`
  padding: 0.3em 0.5em 0.3em 0.5em;
  box-shadow: ${({ elevation = 0 }) => boxShadow(elevation)};
`

export default Box
