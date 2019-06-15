import React from 'react'
import Layout from '../components/layout'
import Button from '../components/button'
import Input from '../components/input'
import TextArea from '../components/text-area'
import SEO from '../components/SEO'

export default () => (
  <Layout>
    <SEO pathname="/contact" title="Contact" />
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
        action="https://formspree.io/contact@nbenker.io"
      >
        <label css="display: none;">
          Don’t fill this out if you‘re human: <input name="_gotcha" />
        </label>
        <label>
          Name
          <Input type="text" name="name" placeholder="" required />
        </label>
        <label>
          Email
          <Input type="email" name="_replyto" required />
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
