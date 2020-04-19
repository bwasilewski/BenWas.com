/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Foot from "./footer"
import "../scss/main.scss"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const headerStyles = {
    margin: `1 auto`,
    maxWidth: 960,
    padding: `0 1.0875rem 1.45rem`,
  }

  return (
    <div>
      <main>
        {children}
      </main>

      <Foot /> 
    </div>
  )
}

// do we need this?
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
