import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import ogImageDefault from "../../content/default.png"

import { lightTheme } from "../styles/theme"

const SEO = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const ogImageUrl = site.siteMetadata.siteUrl + ogImageDefault

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s`}
      meta={[
        {
          name: `description`,
          content: "Je m'appelle Jules DAYAUX, j'ai 23 ans je suis actuellement étudiant à l'Institut de l'Internet et du Multimédia à la Défense et alternant au sein du Ministère des Armées où j'occupe la place de développeur full-stack. Passionné de développement web, de SEO et d'UX design.",
        },
        {
          property: `og:title`,
          content: "Site vitrine de Jules DAYAUX, blogueur, étudiant et développeur",
        },
        {
          property: `og:site_name`,
          content: "Portfolio | Jules DAYAUX",
        },
        {
          property: `og:image`,
          content: ogImageDefault,
        },
        {
          property: `og:description`,
          content: "Je m'appelle Jules DAYAUX, j'ai 23 ans je suis actuellement étudiant à l'Institut de l'Internet et du Multimédia à la Défense et alternant au sein du Ministère des Armées où j'occupe la place de développeur full-stack. Passionné de développement web, de SEO et d'UX design.",
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `msapplication-TileColor`,
          content: lightTheme.colors.primary,
        },
        {
          name: `theme-color`,
          content: lightTheme.colors.primary,
        },
      ].concat(meta)}
    />
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  meta: PropTypes.array,
  lang: PropTypes.string,
}

SEO.defaultProps = {
  lang: `fr`,
  meta: [],
  description: ``,
}

export default SEO
