import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

const seoQuery = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
      }
    }
  }
`

const SEO = ({ title, description, pathname }) => {
  const {
    site: {
      siteMetadata: {
        defaultTitle,
        titleTemplate,
        defaultDescription,
        siteUrl,
      },
    },
  } = useStaticQuery(seoQuery)
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || '/'}`,
  }
  return (
    <>
      <Helmet
        title={seo.title}
        titleTemplate={titleTemplate}
        htmlAttributes={{ lang: 'en' }}
      >
        <meta
          name="google-site-verification"
          content="mpUnAC2izT1oOhEgncaiApFd2rvblXXf6egwbvyOQj4"
        />
        <meta name="description" content={seo.description} />
        {seo.url && <meta property="og:url" content={seo.url} />}
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && (
          <meta name="twitter:description" content={seo.description} />
        )}
      </Helmet>
    </>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  pathname: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
  pathname: null,
}
