import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import c from '../utils/color'
import { HoverBox } from '../components/box'

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
`

const TextArea = styled(Input).attrs({ as: 'textarea' })`
  min-height: 160px;
`

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
`

export default () => (
  <Layout>
    <Layout.Header title="How to contact me" />
    <Layout.Content>
      <p
        css={`
          font-size: 1.2em;
        `}
      >
        If you need help with a project feel free to send me a message.
      </p>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <label css="display: none;">
          Don’t fill this out if you‘re human: <input name="bot-field" />
        </label>
        <label>
          Name
          <Input type="text" name="name" required />
        </label>
        <label>
          Email
          <Input type="email" name="email" required />
        </label>
        <label>
          What can I do for you?
          <TextArea name="message" required />
        </label>
        <Button as="button" type="submit">
          SEND
        </Button>
      </form>
    </Layout.Content>
  </Layout>
)
