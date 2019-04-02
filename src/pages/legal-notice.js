import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/SEO'

export default () => (
  <Layout>
    <SEO pathname="/legal-notice" title="Legal notice" />
    <Layout.Header title="Legal notice" />
    <Layout.Content>
      <h2>Contact Information</h2>
      <p>Nicolai Maximilian Benker</p>
      <p>
        Roßauer Lände 39/6
        <br />
        1090 Vienna
        <br />
        Austria
        <br />
        Email: contact@nbenker.io
      </p>
      <p>
        VAT-ID: ATU73018539
        <br />
        Economic chambers: Wirtschaftskammer Wien
      </p>

      <h2>Privacy Policy</h2>

      <p>
        This Privacy Policy document contains types of information that is
        collected and recorded by n@benker.io and how it is used.
      </p>

      <p>
        If you have additional questions or require more information about this
        Privacy Policy, do not hesitate to contact me through email at
        contact@nbenker.io
      </p>

      <h3>General Data Protection Regulation (GDPR)</h3>

      <p>
        The legal basis for collecting and using the personal information
        described in this Privacy Policy depends on the personal information
        that is collected and the specific context in which it is collect
        collected:
      </p>
      <ul>
        <li>It‘s necessary to perform a contract with you</li>
        <li>You have given the permission to do so</li>
        <li>
          Processing your personal information is in my legitimate interests
        </li>
        <li>I need to comply with the law</li>
      </ul>

      <p>
        I will retain your personal information only for as long as is necessary
        for the purposes set out in this Privacy Policy. I will retain and use
        your information to the extent necessary to comply with my legal
        obligations, resolve disputes, and enforce policies.
      </p>

      <p>
        If you are a resident of the European Economic Area (EEA), you have
        certain data protection rights. If you wish to be informed what Personal
        Information I hold about you and if you want it to be removed, please
        contact us.
      </p>

      <p>
        In certain circumstances, you have the following data protection rights:
      </p>
      <ul>
        <li>
          The right to access, update or to delete the information we have on
          you.
        </li>
        <li>The right of rectification.</li>
        <li>The right to object.</li>
        <li>The right of restriction.</li>
        <li>The right to data portability</li>
        <li>The right to withdraw consent</li>
      </ul>

      <h3>Log Files</h3>

      <p>
        nbenker.io is hosted on Netlify which follows a standard procedure of
        using log files which are stored for 30 days. These files log visitors
        when they visit websites. All hosting companies do this and a part of
        hosting service‘s analytics. The information collected by log files
        include internet protocol (IP) addresses, browser type, Internet Service
        Provider (ISP), date and time stamp, referring/exit pages, and possibly
        the number of clicks. The purpose of the information is for analyzing
        trends, administering the site, tracking users‘ movement on the website,
        and gathering demographic information.
      </p>
      <p>
        Review{' '}
        <a href="https://www.netlify.com/gdpr/">Netlify‘s privacy policy</a> for
        further information
      </p>

      <h3>Contact Form</h3>

      <p>
        nbenker.io uses formspree.io for form handling which means that any data
        you submit will be sent to formspree.io which in turn uses sendgrid.com
        to forward your message to my email adress. formspree.io stores the last
        100 form submissions on their server.
      </p>
      <p>
        Review{' '}
        <a href="https://sendgrid.com/policies/privacy">
          Sendgrid‘s privacy policy
        </a>{' '}
        for further information
      </p>

      <h3>Online Privacy Policy Only</h3>

      <p>
        This Privacy Policy applies only to online activities and is valid for
        visitors to this website with regards to the information that they
        shared and/or collect in nbenker.io. This policy is not applicable to
        any information collected offline or via channels other than this
        website.
      </p>

      <h3>Consent</h3>

      <p>
        By using our website, you hereby consent to our Privacy Policy and agree
        to its terms.
      </p>

      <p>
        This Privacy Policy was generated with the help of{' '}
        <a href="https://gdprprivacypolicy.net/">
          GDPR Privacy Policy Generator
        </a>{' '}
        and adapted appropriately.
      </p>
    </Layout.Content>
  </Layout>
)
