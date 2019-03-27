import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import c from '../utils/color'
import Box, { HoverBox } from '../components/box'

// TODO aria?
const Input = styled.input`
  &:focus {
    border-bottom: 1px solid rgb(140, 149, 161);
  }
  margin: 0px 0px 2rem;
  border-color: currentcolor currentcolor rgb(221, 229, 232);
  border-style: none none solid none;
  border-bottom-width: 1px;
  padding: 0.5rem 0px;
  background: transparent none repeat scroll 0% 0%;
  outline: currentcolor none 0px;
  width: 100%;
  transition: all 200ms ease 0s;
`

// TODO aria?
const TextArea = styled.textarea`
  margin: 0px 0px 2rem;
  border-color: currentcolor currentcolor rgb(221, 229, 232);
  border-bottom-color: rgb(221, 229, 232);
  border-style: none none solid;
  border-bottom-style: solid;
  border-width: 0px 0px 1px;
  border-bottom-width: 1px;
  padding: 0.5rem 0px;
  background: transparent none repeat scroll 0% 0%;
  border-radius: 0px;
  outline: currentcolor none 0px;
  width: 100%;
  transition: all 200ms ease 0s;
  min-height: 180px;
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
      <form>
        <Input placeholder="Name" />
        <Input placeholder="Phone" />
        <TextArea placeholder="What can I do for you?" />
        <Button as="button" type="submit">
          SEND
        </Button>
      </form>
    </Layout.Content>
  </Layout>
)
