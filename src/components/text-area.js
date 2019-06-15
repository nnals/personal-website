import styled from 'styled-components'
import Input from './input'

const TextArea = styled(Input).attrs({ as: 'textarea' })`
  min-height: 160px;
`

export default TextArea
