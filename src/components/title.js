import React from 'react'
import c from '../utils/color'

const changeColor = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`

const Title = ({ children }) => (
  <div
    css={`
      background: linear-gradient(270deg, ${c.titleGradientColors.join(', ')});
      background-size: 400% 400%;
      padding: 0.3em 0.5em 0.3em 0.5em;
      margin-bottom: 0.3em;
      animation: ${changeColor} 20s ease infinite;
      box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.2);
    `}
  >
    <h1
      css={`
        color: ${c.backgroundColor};
        margin: 0;
      `}
    >
      {children}
    </h1>
  </div>
)

export default Title
