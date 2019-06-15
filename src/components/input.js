import styled from 'styled-components'
import c from '../utils/color'

const Input = styled.input`
  &:focus {
    border-bottom: 1px solid ${c.inputBorderColorHover};
  }
  margin: 0 0 1em;
  border-style: none none solid none;
  border-bottom-color: ${c.inputBorderColor};
  border-bottom-width: 1px;
  padding: 0.5rem 0;
  background: transparent none repeat scroll 0% 0%;
  outline: currentcolor none 0;
  width: 100%;
  transition: all 200ms ease 0s;
  &:invalid {
    box-shadow: none;
  }
`

export default Input
